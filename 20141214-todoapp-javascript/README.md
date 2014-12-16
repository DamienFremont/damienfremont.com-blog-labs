Ce tutoriel est le dev d’une simple TODO list de type client-serveur (front-end + back-end). Le but est d’utiliser une stack technique complète en Java pour comparer avec d’autres technologies.

Environnement

En DEV : un IDE eclipse JavaEE + Maven et un tomcat7, ensuite installer le plugin GWT, manuellement ou via le marketplace d’eclipse.

En RUN : le front-end se base sur le site todomvc.com avec l’exemple en GWT. Le back-end est un Tomcat avec une servlet REST HTTP Jersey (JAX-RS).

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
