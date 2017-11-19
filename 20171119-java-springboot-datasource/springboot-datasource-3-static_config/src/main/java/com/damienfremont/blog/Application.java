package com.damienfremont.blog;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;

@SpringBootApplication( //
		scanBasePackageClasses = { DataSourceConfig.class })
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
