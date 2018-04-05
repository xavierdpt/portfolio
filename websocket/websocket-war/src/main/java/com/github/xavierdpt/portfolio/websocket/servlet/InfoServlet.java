package com.github.xavierdpt.portfolio.websocket.servlet;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/info")
public class InfoServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private ServletContext context;

	@Override
	public void init(ServletConfig config) throws ServletException {
		context = config.getServletContext();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.getWriter().println(str(context.getAttribute("javax.websocket.server.ServerContainer")));
	}

	private String str(Object a) {
		if (a == null) {
			return "n$";
		} else if (a instanceof String) {
			return "s$" + a.toString();
		} else if (a.getClass().isPrimitive()) {
			return "p$" + a.toString();
		} else {
			return "c$" + a.getClass().getName();
		}
	}
}
