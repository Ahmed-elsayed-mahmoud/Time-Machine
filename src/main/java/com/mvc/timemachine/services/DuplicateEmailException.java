package com.mvc.timemachine.services;

/**
 * The exception is thrown when the email given during the registration phase is
 * already found from the database.
 */
public class DuplicateEmailException extends Exception {

	public DuplicateEmailException(String message) {
		super(message);
	}
}
