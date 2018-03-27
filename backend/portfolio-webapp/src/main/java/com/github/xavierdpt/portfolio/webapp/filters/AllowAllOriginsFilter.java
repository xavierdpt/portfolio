package com.github.xavierdpt.portfolio.webapp.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class AllowAllOriginsFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// empty
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		if (response instanceof HttpServletResponse) {
			((HttpServletResponse) response).setHeader("Access-Control-Allow-Origin", "*");
		}
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		// empty
	}

}
