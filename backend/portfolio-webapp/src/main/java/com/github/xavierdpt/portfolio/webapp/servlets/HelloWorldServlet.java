package com.github.xavierdpt.portfolio.webapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DatabaseMetaData;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@WebServlet("/hello/*")
public class HelloWorldServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private static final Logger LOG = LoggerFactory.getLogger(HelloWorldServlet.class.getName());

	@Resource(name = "jdbc/database")
	private DataSource dataSource; // NOSONAR

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			PrintWriter w = resp.getWriter();
			w.println("Hello world !");
			try (Connection c = dataSource.getConnection()) {
				DatabaseMetaData md = c.getMetaData();
				w.print(md.getDatabaseProductName());
			}
		} catch (Exception ex) {
			LOG.error("", ex);
			resp.setStatus(400);
		}
	}

}
