package com.damienfremont.blog;

import java.io.Serializable;

public class PersonModel implements Serializable {

	private static final long serialVersionUID = 6879685199191377814L;

	private Integer id;
	private String prenom;
	private String nom;
	private String naissance;

	public PersonModel() {
	}

	public PersonModel(Integer id, String prenom, String nom, String naissance) {
		super();
		this.id = id;
		this.prenom = prenom;
		this.nom = nom;
		this.naissance = naissance;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getNaissance() {
		return naissance;
	}

	public void setNaissance(String naissance) {
		this.naissance = naissance;
	}

}
