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
			writer.append("ID");
			writer.append(',');
			writer.append("FIRST NAME");
			writer.append(',');
			writer.append("LAST NAME");
			writer.append('\n');
			for (Person i : datas) {
				writer.append(i.id.toString());
				writer.append(',');
				writer.append(i.firstName);
				writer.append(',');
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
