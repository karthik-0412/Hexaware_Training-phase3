package com.hexaware.dto;

public class BookDTO {
	private String isbn;
	private String title;
	private String author;
	private int publicationYear;
	
	public BookDTO() {
		super();
	}
	
	public BookDTO(String isbn, String title, String author, int publicationYear) {
		super();
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
	}




	public String getIsbn() {
		return isbn;
	}


	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public int getPublicationYear() {
		return publicationYear;
	}


	public void setPublicationYear(int publicationYear) {
		this.publicationYear = publicationYear;
	}


	@Override
	public String toString() {
		return "BookDTO [isbn=" + isbn + ", title=" + title + ", author=" + author + ", publicationYear="
				+ publicationYear + "]";
	}
	
	
}
