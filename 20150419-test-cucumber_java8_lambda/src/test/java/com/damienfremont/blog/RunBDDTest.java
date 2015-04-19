package com.damienfremont.blog;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// THIS CLASS RUN ALL THE TESTS SCENARIO

@RunWith(Cucumber.class)
@CucumberOptions(

		// TEST SCENARIO FOLDER :  *.feature FILES PATH
		features = "features",

		// GENERATE TEST REPORT (WITH PRETTY HTML PLUGIN)
		plugin = {"pretty", "html:target/cucumber-report"}
		
		// RUN ONLY SCENARIO WITH @Run ANNOTATION
		/* tags = "@Run" */
)
public class RunBDDTest {

}
