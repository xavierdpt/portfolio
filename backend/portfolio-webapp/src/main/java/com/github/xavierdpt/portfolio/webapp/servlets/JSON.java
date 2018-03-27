package com.github.xavierdpt.portfolio.webapp.servlets;

import java.io.IOException;
import java.io.OutputStream;

import org.apache.commons.lang3.concurrent.ConcurrentException;
import org.apache.commons.lang3.concurrent.LazyInitializer;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JSON {

	private static LazyInitializer<ObjectMapper> om = new LazyInitializer<ObjectMapper>() {
		@Override
		protected ObjectMapper initialize() throws ConcurrentException {
			return new ObjectMapper();
		}
	};

	private JSON() {
	}

	public static void writeValue(OutputStream outputStream, Object object) throws IOException, ConcurrentException {
		om.get().writeValue(outputStream, object);
	}

}
