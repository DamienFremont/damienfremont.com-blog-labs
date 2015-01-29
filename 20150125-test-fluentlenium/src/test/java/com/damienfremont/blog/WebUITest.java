package com.damienfremont.blog;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.fluentlenium.assertj.FluentLeniumAssertions.assertThat;

import javax.servlet.ServletException;

import org.assertj.core.api.Assertions;
import org.fluentlenium.adapter.FluentTest;
import org.fluentlenium.core.annotation.Page;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.google.common.collect.ImmutableMap;

/**
 * <pre>
 * Test
 * - user Test (JUnit + FluentLenium)
 *      |
 *      v
 * - UI Connector (Selenium)
 *      |
 *      v
 * - browser (PhantomJS / HtmlUnit / FireFox)
 * 
 * </pre>
 * 
 */
public class WebUITest extends FluentTest {

	static EmbeddedServer server;
	static WebDriver driver;
	static String baseUrl;

	// SELENIUM INIT **************

	@BeforeClass
	public static void startServer() throws ServletException {

		// INIT WEB SERVER (TOMCAT)
		server = new EmbeddedServer(8080, "/20150125-test-fluentlenium");
		server.start();
	}

	@AfterClass
	public static void stopServer() {
		server.stop();
		driver.quit();
	}

	// FLUENTLENIUM INIT **********

	// Override of this method to change the driver
	@Override
	public WebDriver getDefaultDriver() {

		// INIT WEB BROWSER (SELENIUM + PHANTOMJS)
		driver = new PhantomJSDriver(new DesiredCapabilities(ImmutableMap.of( //
				PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, //
				new PhantomJsDownloader().downloadAndExtract()
						.getAbsolutePath())));
		baseUrl = "http://localhost:8080/20150125-test-fluentlenium";
		driver.manage().timeouts().implicitlyWait(5, SECONDS);

		return driver;
	}

	@Page
	MainPage mainPage;

	@Page
	MainPage1 page1;

	// TESTS **********************

	@Test
	public void test_QUAND_acces_site_ETANT_DONNE_main_page_ALORS_afficher_main_page() {

		// QUAND
		goTo(baseUrl);

		// ALORS
		assertThat(mainPage).isAt();

		assertThat(mainPage.title).isDisplayed().hasText("Main page");
		assertThat(mainPage.goToPage1Btn).isDisplayed();
		assertThat(mainPage.goToPage2Btn).isDisplayed();
	}

	@Test
	public void test_QUAND_navigue_vers_page_1_ETANT_DONNE_main_page_ALORS_afficher_page_1() {

		// ETANT DONNE
		goTo(mainPage);
		assertThat(mainPage).isAt();

		// QUAND
		mainPage.goToPage1Btn.click();

		// ALORS
		assertThat(page1).isAt();
		assertThat(page1.title).isDisplayed().hasText("Page 1");
		assertThat(page1.backBtn).isDisplayed().hasText("Return");
	}

	@Test
	public void test_QUAND_navigue_vers_page_2_ETANT_DONNE_page_2_cassee_ALORS_erreur_404() {

		// ETANT DONNE
		goTo(mainPage);
		assertThat(mainPage).isAt();

		// QUAND
		mainPage.goToPage2Btn.click();

		// ALORS
		Assertions.assertThat(find("body").getText()).contains("404");
	}

}
