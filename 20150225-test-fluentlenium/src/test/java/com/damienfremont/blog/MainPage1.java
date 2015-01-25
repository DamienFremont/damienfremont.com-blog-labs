package com.damienfremont.blog;

import java.math.BigDecimal;

import org.fluentlenium.core.FluentPage;
import org.fluentlenium.core.domain.FluentWebElement;
import org.openqa.selenium.support.FindBy;

public class MainPage1 extends FluentPage {

	@Override
	public String getUrl() {
		return "http://localhost:8080/20150225-test-fluentlenium/page1.html";
	}

	@Override
	public void isAt() {
		// TODO Auto-generated method stub
		super.isAt();
	}

	@FindBy(css = ".container .title")
	FluentWebElement title;
	@FindBy(css = ".container .back.btn")
	FluentWebElement backBtn;

}
