package com.damienfremont.blog;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.junit.Assert.assertTrue;

import javax.servlet.ServletException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.google.common.collect.ImmutableMap;

/**
 * <pre>
 * Test
 * - user Test (JUnit)
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
public class WebUITest {

	private static EmbeddedServer server;
	private static WebDriver driver;
	private static String baseUrl;

	@BeforeClass
	public static void startServer() throws ServletException {
		
		// INIT WEB SERVER (TOMCAT)
		server = new EmbeddedServer(8080, "/20150118-test-selenium");
		server.start();

		// INIT WEB BROWSER (SELENIUM + PHANTOMJS)
		driver = new PhantomJSDriver(
		new DesiredCapabilities(ImmutableMap.of( //
				PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, //
				new PhantomJsDownloader().downloadAndExtract()
						.getAbsolutePath())));
		baseUrl = "http://localhost:8080/20150118-test-selenium";
		driver.manage().timeouts().implicitlyWait(5, SECONDS);
	}

	@AfterClass
	public static void stopServer() {
		server.stop();
		driver.quit();
	}

	@Test
	public void test_QUAND_acces_site_ETANT_DONNE_main_page_ALORS_afficher_main_page() {

		// QUAND
		driver.get(baseUrl);

		// ALORS
		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.isDisplayed());
		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.getText().contains("Main page"));
		assertTrue(driver.findElement(
				By.cssSelector(".container li:nth-child(1) .goto.btn"))
				.isDisplayed());
		assertTrue(driver.findElement(
				By.cssSelector(".container li:nth-child(2) .goto.btn"))
				.isDisplayed());
	}

	@Test
	public void test_QUAND_navigue_vers_page_1_ETANT_DONNE_main_page_ALORS_afficher_page_1() {

		// ETANT DONNE
		driver.get(baseUrl);
		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.getText().contains("Main page"));

		// QUAND
		driver.findElement(
				By.cssSelector(".container li:nth-child(1) .goto.btn")).click();

		// ALORS
		assertTrue(driver.getCurrentUrl().contains("page1"));

		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.isDisplayed());
		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.getText().contains("Page 1"));
	}

	@Test
	public void test_QUAND_navigue_vers_page_2_ETANT_DONNE_page_2_cassee_ALORS_erreur_404() {

		// ETANT DONNE
		driver.get(baseUrl);
		assertTrue(driver.findElement(By.cssSelector(".container .title"))
				.getText().contains("Main page"));

		// QUAND
		driver.findElement(
				By.cssSelector(".container li:nth-child(2) .goto.btn")).click();

		// ALORS
		assertTrue(driver.getCurrentUrl().contains("page2"));
		assertTrue(driver.findElement(By.cssSelector("body"))
				.getText().contains("404"));
	}

}
