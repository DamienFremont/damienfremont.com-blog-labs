package com.damienfremont.blog;

import org.fluentlenium.assertj.FluentLeniumAssertions;
import org.fluentlenium.core.FluentPage;
import org.fluentlenium.core.domain.FluentWebElement;
import org.openqa.selenium.support.FindBy;

// PAGE PATTERN DE LA PAGE 1
public class MainPage1 extends FluentPage {

	@Override
	public String getUrl() {
		return "http://localhost:8080/20150125-test-fluentlenium/page1.html";
	}

	@Override
	public void isAt() {
		FluentLeniumAssertions.assertThat(title).hasText("Page 1");
	}

	@FindBy(css = ".container .title")
	FluentWebElement title;
	
	@FindBy(css = ".container .back.btn")
	FluentWebElement backBtn;

}
