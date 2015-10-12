package com.damienfremont.blog;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("api")
public class MyApplication extends Application
{
	public MyApplication( ) {}
 
	@Override
	public Set<Class<?>> getClasses( )
	{
		final Set<Class<?>> returnValue = new HashSet<Class<?>>( );
		returnValue.add( StatusService.class );
		return returnValue;
	}
}