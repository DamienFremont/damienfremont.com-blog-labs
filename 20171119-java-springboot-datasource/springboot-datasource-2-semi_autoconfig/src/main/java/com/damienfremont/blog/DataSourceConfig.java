package com.damienfremont.blog;

import java.sql.*;
import javax.sql.*;

import org.springframework.context.annotation.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.boot.context.properties.*;
import org.springframework.jdbc.core.*;

@Configuration
public class DataSourceConfig {

	private final static String DRIVER_CLASSNAME = "org.hsqldb.jdbc.JDBCDriver";

	@Bean
	public JdbcTemplate jdbcTemplate(DataSource dataSource) {
		return new JdbcTemplate(dataSource);
	}

	// AUTO FILL MISSING PROPERTIES BY SPRINGBOOT (USR, PASS, URL, ...)
	@Bean
	@ConfigurationProperties(prefix = "datasource")
	public DataSource dataSourceProperties() throws SQLException {
		return DataSourceBuilder.create() //
				.driverClassName(DRIVER_CLASSNAME) //
				.build();
	}
}