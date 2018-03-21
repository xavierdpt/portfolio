package com.github.xavierdpt.portfolio.jetty;

import java.io.Serializable;

public class HelloWorldResponse implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String message = "Hello World !";

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
