package com.damienfremont.blog.example2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true, features = "features/example2.feature")
public class RunTest {

}
