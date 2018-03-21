package com.github.xavierdpt.portfolio.jetty;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.concurrent.ConcurrentException;
import org.apache.commons.lang3.concurrent.LazyInitializer;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;

public class HelloWorldRequestHandler extends AbstractHandler {

	private static final Logger LOG = Log.getLogger(HelloWorldRequestHandler.class);

	private static LazyInitializer<ObjectMapper> objectMapper = new LazyInitializer<ObjectMapper>() {
		@Override
		protected ObjectMapper initialize() throws ConcurrentException {
			return new ObjectMapper();
		}
	};

	@Override
	public void handle(String target, Request baseRequest, HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		response.setContentType("application/json");
		response.setStatus(HttpServletResponse.SC_OK);

		ServletOutputStream os = response.getOutputStream();
		try {
			objectMapper.get().writeValue(os, new HelloWorldResponse());
		} catch (ConcurrentException e) {
			LOG.warn(e);
		}
		baseRequest.setHandled(true);
	}

}
