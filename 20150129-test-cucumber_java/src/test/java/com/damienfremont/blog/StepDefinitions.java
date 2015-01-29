package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.assertj.core.api.Condition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	// CE QUI EST A TESTER

	private PersonRepository personRepositoryToTest = new PersonRepository();

	// DONNEES COMMUNES ENTRE STEPS

	private long givenPersonSize;
	private PersonModel whenPersonId;
	private PersonModel whenPerson;

	// # EXEMPLE SIMPLE

	@Given("^L'entrepôt contient N Personnes$")
	public void l_entrepôt_contient_N_Personnes() throws Throwable {
		// L'entrepôt contient N Personnes
		givenPersonSize = personRepositoryToTest.count();
		assertThat(givenPersonSize).isPositive();
	}

	@When("^Je crée une Personne$")
	public void je_crée_une_Personne() throws Throwable {
		// Je crée une Personne
		PersonModel person = new PersonModel();
		whenPersonId = personRepositoryToTest.create(person);
	}

	@Then("^J'obtiens l'ID de la Personne créée et l'entrepôt contient plus de N Personnes$")
	public void j_obtiens_l_ID_de_la_Personne_créée_et_l_entrepôt_contient_plus_de_N_Personnes()
			throws Throwable {
		// J'obtiens l'ID de la Personne créée
		assertThat(whenPersonId).isNotNull();
		// l'entrepôt contient N+X Personnes
		long thenPersonCount = personRepositoryToTest.count();
		assertThat(thenPersonCount).isGreaterThan(givenPersonSize);
	}

	// # EXEMPLE SPECIFIQUE AVEC ARGUMENTS

	@Given("^L'entrepôt contient la Personnes Anakin Skywalker$")
	public void l_entrepôt_contient_la_Personnes_Anakin_Skywalker()
			throws Throwable {
		givenPersonSize = personRepositoryToTest.count();
		// L'entrepôt contient la Personnes Anakin Skywalker
		PersonModel p = personRepositoryToTest.read(1);
		assertThat(p.getPrenom()).isEqualTo("Anakin");
	}

	@When("^Je supprime la Personne (\\d+)$")
	public void je_supprime_la_Personne(int arg1) throws Throwable {
		// Je supprime la Personne
		personRepositoryToTest.delete(arg1);
	}

	@Then("^L'entrepôt contient moins de N Personnes$")
	public void l_entrepôt_contient_moins_de_N_Personnes() throws Throwable {
		// L'entrepôt contient N-X Personnes
		assertThat(personRepositoryToTest.count()).isLessThan(givenPersonSize);
	}

	// # EXEMPLE AVEC SUBSTITUTION (SCENARIO OUTLINES + EXAMPLES)

	@When("^Je recupère la Personne (\\d+)$")
	public void je_recupère_la_Personne(int arg1) throws Throwable {
		// Je recupère la Personne
		whenPerson = personRepositoryToTest.read(arg1);
	}

	@Then("^J'obtiens la Personne d'identifiant (\\d+) contenant les données (.*), (.*), (.*)$")
	public void j_obtiens_la_Personne_d_identifiant_contenant_les_données(
			int arg1, String prenom, String nom, String naissance)
			throws Throwable {
		// J'obtiens la Personne d'identifiant
		assertThat(whenPerson).isNotNull();
		assertThat(whenPerson.getId()).isEqualTo(arg1);
		// avec les données
		assertThat(whenPerson.getPrenom()).isEqualTo(prenom);
		assertThat(whenPerson.getNom()).isEqualTo(nom);
		assertThat(whenPerson.getNaissance()).isEqualTo(naissance);
	}

	// # EXEMPLE AVEC DATA TABLES

	@Given("^L'entrepôt contient les Personnes suivantes$")
	public void l_entrepôt_contient_les_Personnes_suivantes(DataTable expected)
			throws Throwable {
		givenPersonSize = personRepositoryToTest.count();
		// L'entrepôt contient les Personnes suivantes
		List<PersonModel> actual = personRepositoryToTest.readAll();
		for (final PersonModel exp : expected.asList(PersonModel.class)) {
			assertThat(actual).haveExactly(1, new Condition<PersonModel>() {

				@Override
				public boolean matches(PersonModel act) {
					return act.getId().equals(exp.getId()) //
							&& act.getPrenom().equals(exp.getPrenom()) //
							&& act.getNom().equals(exp.getNom()) //
							&& act.getNaissance().equals(exp.getNaissance());
				}
			});
		}
	}

	@When("^Je modifie la Personne (\\d+) avec (.*)$")
	public void je_modifie_la_Personne_avec_(int id, String nom)
			throws Throwable {
		PersonModel p = personRepositoryToTest.read(id);
		p.setNom(nom);
		whenPerson = personRepositoryToTest.update(p);
	}

}
