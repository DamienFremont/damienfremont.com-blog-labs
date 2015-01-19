package com.damienfremont.blog;

import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.jboss.resteasy.client.core.executors.ApacheHttpClient4Executor;

public class Executor extends ApacheHttpClient4Executor
{

	private static final int	connectionTimeoutMillis	= 2000;
	private static final int	socketTimeoutMillis	= 3000;

	public Executor()
	{
		super( initHttpClient() );
	}

	private static DefaultHttpClient initHttpClient()
	{
		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpParams params = httpClient.getParams();
		HttpConnectionParams.setConnectionTimeout( params, connectionTimeoutMillis );
		HttpConnectionParams.setSoTimeout( params, socketTimeoutMillis );
		return httpClient;
	}
}
