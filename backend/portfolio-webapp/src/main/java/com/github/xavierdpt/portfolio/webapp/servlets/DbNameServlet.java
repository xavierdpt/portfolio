package com.github.xavierdpt.portfolio.webapp.servlets;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@WebServlet("/dbname")
public class DbNameServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private static final Logger log = LoggerFactory.getLogger(DbNameServlet.class);

	@Resource(name = "jdbc/database")
	private DataSource ds;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");

		try {
			OM.get().writeValue(resp.getOutputStream(), ds.getConnection().getMetaData().getDatabaseProductName());
		} catch (Exception ex) {
			log.error("", ex);
			resp.setStatus(400);
		}
	}
}
