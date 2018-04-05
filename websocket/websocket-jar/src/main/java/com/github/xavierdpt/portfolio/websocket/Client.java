package com.github.xavierdpt.portfolio.websocket;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import javax.websocket.ContainerProvider;
import javax.websocket.DeploymentException;

public class Client {
	public static void main(String[] args) throws URISyntaxException, DeploymentException, IOException {
		URI arg1 = new URI("http://localhost:8080/toto");
		ContainerProvider.getWebSocketContainer().connectToServer(MyClient.class, arg1);
	}
}
