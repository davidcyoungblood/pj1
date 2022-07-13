/*
 * package com.skillstorm.beans;
 * 
 * import java.sql.SQLException; import java.util.HashSet; import java.util.Set;
 * 
 * import com.skillstorm.dao.ExpenseDAO; import
 * com.skillstorm.dao.ReimbursementDAO;
 * 
 * public class Jdbc { public static void main(String[] args) throws
 * SQLException {
 * 
 * 
 * String url = "jdbc:mysql://localhost:3306/reimbursement"; String username =
 * "root"; String password = "root";
 * 
 * 
 * Connection conn = DriverManager.getConnection(url, username, password);
 * 
 * 
 * 
 * 
 * createInstance(); updateReimbursement(2, "Approved"); getAll();
 * 
 * //conn.close(); System.out.println("DONE"); }
 * 
 * public static void createInstance() { try { ExpenseDAO dao = new
 * ExpenseDAO(); dao.create(new Expense("Test", "Because"));
 * 
 * } catch (SQLException e) { // TODO Auto-generated catch block
 * 
 * e.printStackTrace(); } }
 * 
 * public static void updateReimbursement(int id, String str) { try {
 * ReimbursementDAO dao = new ReimbursementDAO(); dao.update(id, str);
 * 
 * 
 * } catch (SQLException e) { // TODO Auto-generated catch block
 * 
 * e.printStackTrace(); } }
 * 
 * public static Set<Expense> getAll() { Set<Expense> expenseSet = new
 * HashSet<>(); try { ExpenseDAO dao = new ExpenseDAO(); expenseSet =
 * dao.findAll(); } catch (Exception e) { System.out.println("Catch error"); }
 * return expenseSet; }
 * 
 * }
 */