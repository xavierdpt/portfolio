package com.github.xavierdpt.portfolio.jetty;

import org.eclipse.jetty.server.HttpConnectionFactory;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

public class Main {

	private static final Logger LOG = Log.getLogger(Main.class);

	public static void main(String[] args) {

		Runnable runnable = () -> {
			String port = System.getProperty("portfolio.jetty.port");
			Server server = new Server(Integer.parseInt(port));
			try {
				server.getConnectors()[0].getConnectionFactory(HttpConnectionFactory.class);
				server.setHandler(new HelloWorldRequestHandler());
				server.start();
				server.join();
			} catch (Exception ex) {
				LOG.warn(ex);
			}
		};
		new Thread(runnable).start();
	}
}
