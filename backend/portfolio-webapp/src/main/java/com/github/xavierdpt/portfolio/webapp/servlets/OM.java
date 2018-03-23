package com.github.xavierdpt.portfolio.webapp.servlets;

import org.apache.commons.lang3.concurrent.ConcurrentException;
import org.apache.commons.lang3.concurrent.LazyInitializer;

import com.fasterxml.jackson.databind.ObjectMapper;

public class OM {

	private static LazyInitializer<ObjectMapper> holder = new LazyInitializer<ObjectMapper>() {

		@Override
		protected ObjectMapper initialize() throws ConcurrentException {
			return new ObjectMapper();
		}
	};

	public static ObjectMapper get() throws ConcurrentException {
		return holder.get();
	}

}
