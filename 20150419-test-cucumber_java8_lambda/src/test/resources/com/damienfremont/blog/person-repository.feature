Feature: Entrepot de donnees 'Personne'

  # EXEMPLE SIMPLE
  Scenario: Creation
    Given L'entrepot contient N Personnes
    When Je cree une Personne
    Then J'obtiens l'ID de la Personne cree et l'entrepot contient plus de N Personnes

  # EXEMPLE SPECIFIQUE
  Scenario: Suppression
    Given L'entrepot contient la Personnes Anakin Skywalker
    When Je supprime la Personne 1
    Then L'entrepot contient moins de N Personnes

  # EXEMPLE AVEC SUBSTITUTION (SCENARIO OUTLINES + EXAMPLES)
  Scenario Outline: Lecture
    Given L'entrepot contient N Personnes
    When Je recupere la Personne <id>
    Then J'obtiens la Personne d'identifiant <id> contenant les donnees <prenom>, <nom>, <naissance>

    Examples: 
      | id | prenom | nom         | naissance |
      | 1  | Anakin | Skywalker   | 41.9 BBY  |
      | 2  | Luke   | Skywalker   | 19 BBY    |
      | 3  | Leia   | Organa Solo | 19 BBY    |
