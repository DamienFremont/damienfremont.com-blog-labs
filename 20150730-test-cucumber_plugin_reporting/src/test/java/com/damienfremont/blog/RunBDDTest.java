package com.damienfremont.blog;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "features", format = { "pretty",
		"html:target/site/cucumber-pretty",
		"json:target/cucumber.json" }, tags = { "~@ignore" })
public class RunBDDTest {

}
