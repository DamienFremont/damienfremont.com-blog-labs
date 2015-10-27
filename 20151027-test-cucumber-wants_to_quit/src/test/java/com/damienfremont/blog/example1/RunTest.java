package com.damienfremont.blog.example1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true, features = "features/example1.feature")
public class RunTest {

}
