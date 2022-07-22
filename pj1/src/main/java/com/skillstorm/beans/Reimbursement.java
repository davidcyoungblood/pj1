package com.skillstorm.beans;

import java.util.Objects;

public class Reimbursement {

	private int id;
	private String status;

	public Reimbursement() {
		super();
	}

	public Reimbursement(int id, String status) {
		super();
		this.id = id;
		this.status = status;
	}

	public Reimbursement(String status) {
		super();
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Reimbursement [id=" + id + ", status=" + status + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reimbursement other = (Reimbursement) obj;
		return id == other.id && Objects.equals(status, other.status);
	}

}
