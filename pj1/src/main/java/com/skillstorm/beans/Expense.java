package com.skillstorm.beans;

import java.util.Objects;

public class Expense {

	private int id;
	private String name;
	private String reason;
	private Reimbursement status;

	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Expense(int id, String name, String reason, Reimbursement status) {
		super();
		this.id = id;
		this.name = name;
		this.reason = reason;
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

	public Reimbursement getStatus() {
		return status;
	}

	public void setStatus(Reimbursement status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Expense [id=" + id + ", name=" + name + ", Reason=" + reason + ", status=" + status.getStatus() + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(reason, id, name, status);
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
		return Objects.equals(reason, other.reason) && id == other.id && Objects.equals(name, other.name)
				&& Objects.equals(status, other.status);
	}

}