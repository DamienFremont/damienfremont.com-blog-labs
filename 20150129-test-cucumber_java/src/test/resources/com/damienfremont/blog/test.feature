Feature: Entrepôt de données 'Personne'

  # EXEMPLE SIMPLE
  Scenario: Création
    Given L'entrepôt contient N Personnes
    When Je crée une Personne
    Then J'obtiens l'ID de la Personne créée et l'entrepôt contient plus de N Personnes

  # EXEMPLE AVEC DATA TABLES
  Scenario: Suppression
    Given L'entrepôt contient les Personnes suivantes
      | id | prenom | nom       | naissance |
      | 1  | Anakin | Skywalker | 41.9 BBY  |
    When Je supprime la Personne 1
    Then L'entrepôt contient N-X Personnes

  # EXEMPLE AVEC SUBSTITUTION (SCENARIO OUTLINES + EXAMPLES)
  Scenario Outline: Lecture
    Given L'entrepôt contient les Personnes suivantes
      | id | prenom | nom         | naissance |
      | 1  | Anakin | Skywalker   | 41.9 BBY  |
      | 2  | Luke   | Skywalker   | 19 BBY    |
      | 3  | Leia   | Organa Solo | 19 BBY    |
    When Je recupère la Personne <id>
    Then J'obtiens la Personne d'identifiant <id> contenant les données <prenom>, <nom>, <naissance>

    Examples: 
      | id | prenom | nom         | naissance |
      | 1  | Anakin | Skywalker   | 41.9 BBY  |
      | 2  | Luke   | Skywalker   | 19 BBY    |
      | 3  | Leia   | Organa Solo | 19 BBY    |

  # EXEMPLE AVEC SUBSTITUTION (SCENARIO OUTLINES + EXAMPLES)
  Scenario Outline: Modification
    Given L'entrepôt contient les Personnes suivantes
      | id | prenom | nom         | naissance |
      | 3  | Leia   | Organa Solo | 19 BBY    |
    When Je modifie la Personne <id> avec <nom>
    Then J'obtiens la Personne d'identifiant <id> contenant les données <prenom>, <nom>, <naissance>

    Examples: 
      | id | prenom | nom                   | naissance |
      | 3  | Leia   | Organa Solo Skywalker | 19 BBY    |
