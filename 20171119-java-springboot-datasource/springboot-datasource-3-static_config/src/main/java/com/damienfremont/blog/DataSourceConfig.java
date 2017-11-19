package com.damienfremont.blog;

import java.sql.*;
import javax.naming.*;
import javax.sql.DataSource;

import org.springframework.context.annotation.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;

@Configuration		
public class DataSourceConfig {		
		
	// PROPERTIES		
	@Value("${datasource.jndiname:DS}") 	private String jndi;
	@Value("${datasource.driverClassName}") 	private String driverClassName;
	@Value("${datasource.url}") 	private String url;
	@Value("${datasource.username}") 	private String username;
	@Value("${datasource.password}") 	private String password;
				
	@Bean
	public DataSource dataSource() throws Exception {		
		DataSource ds;		
		try {		
			ds = dataSourceJNDI();		
		} catch (NamingException e) {		
			ds = dataSourceProperties();		
		}		
		return ds;		
	}		
	
	@Bean
	public JdbcTemplate jdbcTemplate(DataSource dataSource) {		
		return new JdbcTemplate(dataSource);		
	}		
		
	DataSource dataSourceProperties() throws SQLException {		
		return DataSourceBuilder.create() //		
				.driverClassName(driverClassName) //		
				.url(url) //		
				.username(username) //		
				.password(password) //		
				.build();		
	}
	
	DataSource dataSourceJNDI() throws NamingException {		
		return (DataSource) new InitialContext() //		
				.lookup(jndi);		
	}		
		
} 