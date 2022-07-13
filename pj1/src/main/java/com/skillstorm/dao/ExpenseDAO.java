package com.skillstorm.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashSet;
import java.util.Set;

import com.skillstorm.beans.Expense;
import com.skillstorm.beans.Reimbursement;

public class ExpenseDAO {

	// database credentials
	
	private Connection connection;

	public ExpenseDAO() throws ClassNotFoundException, SQLException {
			Class.forName("com.mysql.cj.jdbc.Driver"); 
			String url = "jdbc:mysql://localhost:3306/reimbursement";
			String username = "root";
			String password = "root";
			this.connection = DriverManager.getConnection(url, username, password);
	}

	public Expense create(Expense expense) {
		try {
			String sql = "insert into Expense(Name, Reason, StatusId) values (?, ?, ?)";
			PreparedStatement statement = this.connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, expense.getName());
			statement.setString(2, expense.getReason());

			Reimbursement reimb = new ReimbursementDAO().findById(1);
			statement.setInt(3, reimb.getId());

			// executeUpdate returns one if it was executed correctly
			statement.executeUpdate();
			ResultSet rs = statement.getGeneratedKeys();
			rs.next();
			int generatedId = rs.getInt(1);
			expense.setId(generatedId);
			expense.setStatus(reimb);
		} catch (SQLException e) {
		}
		;
		return expense;

	}

	public Set<Expense> findAll() throws SQLException {
		Set<Expense> expense = new HashSet<Expense>();
		String sql = "select id, Name, reason, statusid from Expense";
		PreparedStatement statement = this.connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
		ResultSet resultSet = statement.executeQuery(sql);
		while (resultSet.next()) {
			// do something with the row in the set
			Expense row = new Expense();
			// extracted the values for the database table
			int id = resultSet.getInt("id");
			String name = resultSet.getString("Name");
			String reason = resultSet.getString("reason");
			int statusId = resultSet.getInt("statusId");

			// store it in the java object
			row.setId(id);
			row.setName(name);
			row.setReason(reason);
			row.setStatus(new ReimbursementDAO().findById(statusId));

			expense.add(row);
		} // end of results

		return expense;

	}

	public Expense findById(int id) throws SQLException {
		String sql = "select Id, Name, reason, statusId from Expense where Id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setInt(1, id);
		ResultSet rs = statement.executeQuery();
		if (rs.next()) {
			return new Expense(rs.getInt("Id"), rs.getString("Name"), rs.getString("reason"),
					new ReimbursementDAO().findById(rs.getInt("statusId")));
		} else {
			return null;
		}

	}

	public boolean updateName(int id, String name) throws SQLException {
		String sql = "update expense set name = ? where id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setString(1, name);
		statement.setInt(2, id);
		return statement.executeUpdate() == 1;
	}

	public boolean updateReason(int id, String reason) throws SQLException {
		String sql = "update expense set reason = ? where id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setString(1, reason);
		statement.setInt(2, id);
		return statement.executeUpdate() == 1;
	}

	public boolean updateStatus(int id, int statusid) throws SQLException {
		String sql = "update expense set statusid = ? where id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setInt(1, statusid);
		statement.setInt(2, id);
		return statement.executeUpdate() == 1;
	}

	public boolean delete(int id) throws SQLException {
		String sql = "delete from Expense where Id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setInt(1, id);
		return statement.executeUpdate() == 1;

	}

	/*
	 * public static void main(String[] args) throws SQLException { ExpenseDAO dao =
	 * new ExpenseDAO(); System.out.println(dao.findAll()); }
	 */

}