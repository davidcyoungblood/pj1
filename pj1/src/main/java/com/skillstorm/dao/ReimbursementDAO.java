package com.skillstorm.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.skillstorm.beans.Reimbursement;

public class ReimbursementDAO {

	private Connection connection;

	public ReimbursementDAO() throws SQLException {
		String url = "jdbc:mysql://localhost:3306/reimbursement";
		String username = "root";
		String password = "root";
		this.connection = DriverManager.getConnection(url, username, password);
	}

	public Reimbursement findById(int id) throws SQLException {
		String sql = "select id, status from Reimbursement_status where id = ?";
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setInt(1, id);
		ResultSet rs = statement.executeQuery();
		if (rs.next()) {
			return new Reimbursement(rs.getInt("id"), rs.getString("status"));
		} else {
			return null;
		}
	}

	/*
	 * public Reimbursement create(Reimbursement reimbursement) throws SQLException
	 * {
	 * 
	 * String sql = "insert into Reimbursement_status(Status) values (?)"; // flag:
	 * please return my keys
	 * 
	 * PreparedStatement statement = connection.prepareStatement(sql,
	 * Statement.RETURN_GENERATED_KEYS);
	 * 
	 * statement.setString(1, reimbursement.getStatus()); statement.executeUpdate();
	 * 
	 * // grab the id - ResultSet = statement.getGeneratedKeys() ResultSet rs =
	 * statement.getGeneratedKeys(); // without the flag, this throws an exception
	 * rs.next(); int generatedId = rs.getInt(1); reimbursement.setId(generatedId);
	 * 
	 * return reimbursement; }
	 */

	/*
	 * public boolean delete(int id) throws SQLException { String sql =
	 * "delete from Reimbursement_status where Id = ?"; PreparedStatement statement
	 * = connection.prepareStatement(sql); statement.setInt(1, id); return
	 * statement.executeUpdate() == 1;
	 * 
	 * }
	 */

	/*
	 * public boolean update(int id, String str) throws SQLException { String sql =
	 * "update reimbursement_status set status = ? where id = ?"; PreparedStatement
	 * statement = connection.prepareStatement(sql); statement.setString(1, str);
	 * statement.setInt(2, id); return statement.executeUpdate() == 1; }
	 */

}
