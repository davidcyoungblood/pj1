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

	//CRUB Application
	
	//Create
	public Expense create(Expense expense) {
		try {
			String sql = "insert into Expense(Name, Reason, Notes, StatusId) values (?, ?, ?, ?)";
			PreparedStatement statement = this.connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, expense.getName());
			statement.setString(2, expense.getReason());
			statement.setString(3, expense.getNotes());

			Reimbursement reimb = new ReimbursementDAO().findById(1);
			statement.setInt(4, reimb.getId());

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
	// Read
	public Set<Expense> findAll() throws SQLException {
		Set<Expense> expense = new HashSet<Expense>();
		String sql = "select id, Name, reason, notes, statusid from Expense";
		PreparedStatement statement = this.connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
		ResultSet resultSet = statement.executeQuery(sql);
		while (resultSet.next()) {

			Expense row = new Expense();
			// extracted the values for the database table
			int id = resultSet.getInt("id");
			String name = resultSet.getString("Name");
			String reason = resultSet.getString("reason");
			String notes = resultSet.getString("notes");
			int statusId = resultSet.getInt("statusId");

			// store it in the java object
			row.setId(id);
			row.setName(name);
			row.setReason(reason);
			row.setNotes(notes);
			row.setStatus(new ReimbursementDAO().findById(statusId));

			expense.add(row);
		} // end of results

		return expense;

	}

	public Expense findById(int id) throws SQLException {
		String sql = "select Id, Name, reason, notes, statusId from Expense where Id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setInt(1, id);
		ResultSet rs = statement.executeQuery();
		if (rs.next()) {
			return new Expense(rs.getInt("Id"), rs.getString("Name"), rs.getString("reason"), rs.getString("notes"),
					new ReimbursementDAO().findById(rs.getInt("statusId")));
		} else {
			return null;
		}

	}

	//update 
	public Expense updateStatus(Expense expense) {
		String sql = "update expense set statusid = ? where id = ?";
		try {
			PreparedStatement statement = this.connection.prepareStatement(sql);

			
			//Reimbursement reimbursement = expense.getStatus();
			
			Reimbursement reimbursement = new ReimbursementDAO().findByStatus(expense.getStatus().getStatus()); 
			
			
			/* 		*** This was a good way to get update the status but I created a method in 
			 * 				ReimbursementDAO findByStatus to use in the above code 
			 * 				because I didn't want to code in foreign keys this way could work too though ***
			 * switch (reimbursement.getStatus()) { case "Approved" : reimbursement = new
			 * ReimbursementDAO().findById(2); break; case "Denied" : reimbursement = new
			 * ReimbursementDAO().findById(3); break; default : break; }
			 */
			
			expense.setStatus(reimbursement);
			statement.setInt(1, reimbursement.getId());
			statement.setInt(2, expense.getId());

			statement.executeUpdate();
		} catch (SQLException e) {
		}
		;
		return expense;
	}

	//delete
	public boolean delete(int id) throws SQLException {
		String sql = "delete from Expense where Id = ?";
		PreparedStatement statement = this.connection.prepareStatement(sql);
		statement.setInt(1, id);
		return statement.executeUpdate() == 1;

	}

}
