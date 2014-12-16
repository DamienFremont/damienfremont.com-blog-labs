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

Tester sur L'URL du back

http://localhost:3000/api/todos

Tester sur L'URL du front

http://localhost:3000/index.html#/

Sources

https://github.com/damienfremont/blog/tree/master/20141214-todoapp-javascript

References

http://www.vogella.com/articles/REST/article.html
http://www.mkyong.com/webservices/jax-rs/json-example-with-jersey-jackson/
