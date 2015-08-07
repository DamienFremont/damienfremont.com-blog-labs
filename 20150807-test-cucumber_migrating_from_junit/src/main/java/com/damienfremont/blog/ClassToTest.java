package com.damienfremont.blog;

public class ClassToTest {

	public String buy(String product, Integer price) {
		String receip = String.format("receip;%s;%d", product, price);
		return receip;
	}

	public String returns(String product, String receip) {
		String amount = receip.split(";")[2];
		String refund = String.format("refund;%s", amount);
		return refund;
	}

}
