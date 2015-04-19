package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;
import cucumber.api.java8.En;

public class StepDefinitions implements En {

	// CE QUI EST A TESTER

	private PersonRepository personRepositoryToTest = new PersonRepository();

	// DONNEES COMMUNES ENTRE STEPS

	private long givenPersonSize;
	private PersonModel whenPersonId;
	private PersonModel whenPerson;

	public StepDefinitions() {

		// # EXEMPLE SIMPLE

		Given("^L'entrepot contient N Personnes$", () -> {
			givenPersonSize = personRepositoryToTest.count();
			assertThat(givenPersonSize).isPositive();
		});

		When("^Je cree une Personne$", () -> {
			PersonModel person = new PersonModel();
			whenPersonId = personRepositoryToTest.create(person);
		});

		Then("^J'obtiens l'ID de la Personne cree et l'entrepot contient plus de N Personnes$",
				() -> {
					assertThat(whenPersonId).isNotNull();
					long thenPersonCount = personRepositoryToTest.count();
					assertThat(thenPersonCount).isGreaterThan(givenPersonSize);
				});

		// # EXEMPLE SPECIFIQUE AVEC ARGUMENTS

		Given("^L'entrepot contient la Personnes Anakin Skywalker$", () -> {
			givenPersonSize = personRepositoryToTest.count();
			PersonModel p = personRepositoryToTest.read(1);
			assertThat(p.getPrenom()).isEqualTo("Anakin");
		});

		When("^Je supprime la Personne (\\d+)$", (Integer id) -> {
			personRepositoryToTest.delete(id);
		});

		Then("^L'entrepot contient moins de N Personnes$",
				() -> {
					assertThat(personRepositoryToTest.count()).isLessThan(
							givenPersonSize);
				});

		// # EXEMPLE AVEC SUBSTITUTION (SCENARIO OUTLINES + EXAMPLES)

		When("^Je recupere la Personne (\\d+)$", (Integer id) -> {
			whenPerson = personRepositoryToTest.read(id);
		});

		Then("^J'obtiens la Personne d'identifiant (\\d+) contenant les donnees (.*), (.*), (.*)$",
				(Integer id, String prenom, String nom, String naissance) -> {
					// J'obtiens la Personne d'identifiant
					assertThat(whenPerson).isNotNull();
					assertThat(whenPerson.getId()).isEqualTo(id);
					// avec les donnees
					assertThat(whenPerson.getPrenom()).isEqualTo(prenom);
					assertThat(whenPerson.getNom()).isEqualTo(nom);
					assertThat(whenPerson.getNaissance()).isEqualTo(naissance);
				});
	}

}
