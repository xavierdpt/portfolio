package com.github.xavierdpt.portfolio.websocket.servlet;

import java.nio.ByteBuffer;

import javax.websocket.CloseReason;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.PongMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/hello")
public class MyAnnotatedEndpoint {

	private Session session;
	private EndpointConfig config;

	@OnMessage
	public String handleTextMessage(String message, Session youpi) {
		return "Hello ! " + session.getId() + " ; " + youpi.getId();
	}

	@OnMessage
	public String handleBinaryMessage(byte[] bytes) {
		return new String(bytes);
	}

	@OnMessage()
	public ByteBuffer pong(PongMessage pong) {
		return pong.getApplicationData();
	}

	@OnOpen
	public void open(Session session, EndpointConfig config) {
		this.session = session;
		this.config = config;

	}

	@OnError
	public void error(Throwable th) {
		if (th != null) {
			System.out.println(th.getClass().getName() + " : " + th.getMessage());
		} else {
			System.out.println("Unknown error");
		}
	}

	@OnClose
	public void close(Session session, CloseReason reason) {
		System.out.println(session.getId() + " closed ; " + reason.getReasonPhrase());
	}
}
