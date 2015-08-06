package com.damienfremont.blog;


public class Java4ApacheCommonsImpl implements Features {

	@Override
	public void check(String argument) {
		if (!(argument != null && argument.length() > 0)) {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public String[] transform(String[] input) {
		int outputLenght = input.length;
		String[] output = new String[outputLenght];
		for (int i = 0; i < input.length; i++) {
			String transformed = input[i].toUpperCase();
			output[i] = transformed;
		}
		return output;
	}

	@Override
	public String[] filter(String[] input, String filterValue) {
		int outputLenght = 0;
		for (int i = 0; i < input.length; i++) {
			boolean isFilterCondition = input[i].contains(filterValue);
			if (isFilterCondition) {
				outputLenght++;
			}
		}
		String[] output = new String[outputLenght];
		int y = 0;
		for (int i = 0; i < input.length; i++) {
			boolean isFilterCondition = input[i].contains(filterValue);
			if (isFilterCondition) {
				output[y] = input[i];
				y++;
			}
		}
		return output;
	}

	@Override
	public void errorHandling() {
		// TODO Auto-generated method stub

	}

}
