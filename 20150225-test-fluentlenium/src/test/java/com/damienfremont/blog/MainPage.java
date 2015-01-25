package com.damienfremont.blog;

import org.fluentlenium.assertj.FluentLeniumAssertions;
import org.fluentlenium.core.FluentPage;
import org.fluentlenium.core.domain.FluentWebElement;
import org.openqa.selenium.support.FindBy;

public class MainPage extends FluentPage {

	// getUrl : fournit l'url de la page pour 
	
	@Override
	public String getUrl() {
		return "http://localhost:8080/20150225-test-fluentlenium/";
	}

	@Override
	public void isAt() {
		FluentLeniumAssertions.assertThat(title).hasText("Main page");
	}

	// WEB ELEMENT (text, href, etc)
	
	@FindBy(css = ".container .title")
	FluentWebElement title;
	
	@FindBy(css = ".container li:nth-child(1) .goto.btn")
	FluentWebElement goToPage1Btn;
	
	@FindBy(css = ".container li:nth-child(2) .goto.btn")
	FluentWebElement goToPage2Btn;

}
