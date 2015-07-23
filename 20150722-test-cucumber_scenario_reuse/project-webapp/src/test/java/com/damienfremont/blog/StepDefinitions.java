package com.damienfremont.blog;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.junit.Assert.assertTrue;
import static org.openqa.selenium.phantomjs.PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.google.common.base.Throwables;
import com.google.common.collect.ImmutableMap;

import cucumber.api.java8.En;

public class StepDefinitions implements En {

	private static EmbeddedServer server;
	private static WebDriver driver;
	
	public StepDefinitions() {

		Given("an empty repository", 
			() -> {
				driver.get("http://localhost:8080/server");
				assertTrue(driver.findElement(By.cssSelector(
					"#message"))
						.getText().contains("0 items"));
				assertTrue(driver.findElement(By.cssSelector(
					"#items"))
						.getText().isEmpty());
			});

		When("I create a new Person named '(.*)' with the system", 
			(String name) ->{
				driver.get("http://localhost:8080/server");
				driver.findElement(By.cssSelector(
					"#newItem"))
						.sendKeys(name);				
				driver.findElement(By.cssSelector(
					"#newButton"))
						.click();
			});

		Then("I should have Person named '(.*)' in the repository", 
			(String name) ->{
				driver.get("http://localhost:8080/server");
				assertTrue(driver.findElement(By.cssSelector(
					"#message"))
						.getText().contains("1 items"));
				assertTrue(driver.findElement(By.cssSelector(
					"#items"))
						.getText().contains(name));
			});
		
		Before(
			()-> {
				// INIT WEB SERVER (TOMCAT)
				try {
					server = new EmbeddedServer(8080, "/server");
					server.start();
				} catch (Exception e) {
					throw Throwables.propagate(e);
				}
				// INIT WEB BROWSER (SELENIUM + PHANTOMJS)
				driver = new PhantomJSDriver(
				new DesiredCapabilities(ImmutableMap.of( //
						PHANTOMJS_EXECUTABLE_PATH_PROPERTY, //
						new PhantomJsDownloader().downloadAndExtract()
								.getAbsolutePath())));
				driver.manage().timeouts().implicitlyWait(5, SECONDS);
		});
		
		After(
			()-> {
				server.stop();
			});
	}
}
