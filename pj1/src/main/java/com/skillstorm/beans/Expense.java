package com.skillstorm.beans;

import java.util.Objects;

public class Expense {

	private int id;
	private String name;
	private String reason;
	private String notes; 
	private Reimbursement status;

	public Expense() {
		super();
	}

	public Expense(int id, String name, String reason, String notes, Reimbursement status) {
		super();
		this.id = id;
		this.name = name;
		this.reason = reason;
		this.notes = notes; 
		this.status = status;
	}

	public Expense(String name, String reason, Reimbursement status) {
		super();
		this.name = name;
		this.reason = reason;
		this.status = status;
	}

	public Expense(String name, String reason) {
		super();
		this.name = name;
		this.reason = reason;
	}
	

	public Expense(String name, String reason, String notes) {
		super();
		this.name = name;
		this.reason = reason;
		this.notes = notes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}
	
	

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Reimbursement getStatus() {
		return status;
	}

	public void setStatus(Reimbursement status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Expense [id=" + id + ", name=" + name + ", reason=" + reason + ", notes=" + notes + ", status=" + status
				+ "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, notes, reason, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Expense other = (Expense) obj;
		return id == other.id && Objects.equals(name, other.name) && Objects.equals(notes, other.notes)
				&& Objects.equals(reason, other.reason) && Objects.equals(status, other.status);
	}

	

}
