Ce tutoriel est le dev d'une simple TODO list de type client-serveur (front-end + back-end). Le but est d'utiliser une stack technique complète en JavaScript pour comparer avec d'autres technologies.

Environnement

En DEV : un IDE eclipse avec le plugin nodeclipse d'installé via le menu marketplace d'eclipse. Avoir aussi un NodeJS et son npm Express.

En RUN : le front-end se base sur le site todomvc.com via l'exemple angularjs. Le back-end en plus est un NodeJS avec le serveur REST HTTP de Express.

La structure (classique) est composé d’un MVC coté front et d’un service REST coté back :
Front
Model
View
Controler
Back
Service
Repository

Demo

Lancer le server
http://localhost:8080/20141215-todoapp-java/api/todos

Sources

http://github.com/damienfremont/blog/tree/master/20141215-todoapp-java
References

http://www.vogella.com/articles/REST/article.html
http://www.mkyong.com/webservices/jax-rs/json-example-with-jersey-jackson/
