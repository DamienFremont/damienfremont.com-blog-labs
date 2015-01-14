package com.damienfremont.blog;

import static org.junit.Assert.assertEquals;

import javax.ws.rs.core.Application;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Test;


public class PersonService_level1Test extends JerseyTest {

	@Override
	protected Application configure() {
		return new ResourceConfig(PersonService_level1.class);
	}

	@Test
	public void test() {
		final String hello = target("hello").request().get(String.class);
		assertEquals("Hello World!", hello);
	}
}
