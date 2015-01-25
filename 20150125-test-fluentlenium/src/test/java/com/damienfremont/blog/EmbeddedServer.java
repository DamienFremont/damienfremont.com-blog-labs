package com.damienfremont.blog;

import java.io.File;

import javax.servlet.ServletException;

import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;

/*
 * FROM http://zsoltfabok.com/blog/2012/08/embedded-web-services-for-testing/
 */
public class EmbeddedServer implements Runnable {

	private Tomcat tomcat;
	private Thread serverThread;

	public EmbeddedServer(int port, String contextPath) throws ServletException  {
		tomcat = new Tomcat();
		tomcat.setPort(port);
		tomcat.setBaseDir("target/tomcat");
		tomcat.addWebapp(contextPath,
				new File("src/main/webapp").getAbsolutePath());
		serverThread = new Thread(this);

	}

	public void start() {
		serverThread.start();
	}

	public void run() {
		try {
			tomcat.start();
		} catch (LifecycleException e) {
			throw new RuntimeException(e);
		}
		tomcat.getServer().await();
	}

	public void stop() {
		try {
			tomcat.stop();
			tomcat.destroy();
			deleteDirectory(new File("target/tomcat/"));
		} catch (LifecycleException e) {
			throw new RuntimeException(e);
		}
	}

	void deleteDirectory(File path) {
		if (path == null)
			return;
		if (path.exists()) {
			for (File f : path.listFiles()) {
				if (f.isDirectory()) {
					deleteDirectory(f);
					f.delete();
				} else {
					f.delete();
				}
			}
			path.delete();
		}
	}
}