package com.damienfremont.blog;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import com.damienfremont.blog.ServiceJAXRS.Person;

public class GenerateCSV {

	public static File generateCsvFile(List<Person> datas) {
		try {
			File file = new File("temp");
			FileWriter writer = new FileWriter(file);
			char separator = ';';
			for (Person i : datas) {
				writer.append(i.id.toString());
				writer.append(separator);
				writer.append(i.firstName);
				writer.append(separator);
				writer.append(i.lastName);
				writer.append('\n');
			}
			writer.flush();
			writer.close();
			return file;
		} catch (IOException e) {
			throw new RuntimeException();
		}
	}

}
