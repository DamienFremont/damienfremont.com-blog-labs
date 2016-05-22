Comment utiliser BeanValidation manuellement hors d’un serveur JavaEE ?
======
 
![alt text](screenshots/160523003120694.png)
 
Ce tuto décrit comment valider un modèle de données manuellement avec JavaEE BeanValidation (JSR 303). L’intérêt ? Eviter une pile de <If> inmaintenable dans le code quand on n’a pas accès à l’annotation @Valid (pas de server JavaEE, un Tomcat par exemple). Ce point étant couvert par la spécification mais rarement décrit. Les exceptions et les messages d’erreurs seront également abordés.
 

 
# Environnement
 
Il faut Java 1.6, un IDE Eclipse et Maven.
 
pom.xml
 
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150113-javaee-beanvalidator</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <url>http://damienfremont.com</url>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.assertj</groupId>
            <artifactId>assertj-core</artifactId>
            <version>1.7.1</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
            <version>1.1.0.Final</version>
        </dependency>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>5.1.3.Final</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish</groupId>
            <artifactId>javax.el</artifactId>
            <version>3.0.0</version>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.2</version>
                <configuration>
                    <source>1.7</source>
                    <target>1.7</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
 
# Source code
 
La même Entité / Bean est utilisé pour tout le tuto. C’est un POJO autour de la personne, il contient ses 3 données de base : nom, prénom, date de naissance. Il en porte également la validation au travers des annotations JavaEE qui vont bien.
 
PersonModel.java
 
```java
package com.damienfremont.blog;
 
import java.util.Calendar;
 
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
 
public class PersonModel {
 
    @NotNull
    @Size(min = 1, max = 16)
    private String firstName;
 
    @NotNull
    @Size(min = 1, max = 16)
    private String lastName;
 
    @NotNull
    @Past
    private Calendar birthDate;
 
    public PersonModel(String firstName, String lastName, Calendar birthDate) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
 
}
```
 
 
 
@Null : Vérifier que la valeur du type concerné soit null
 
@NotNull : Vérifier que la valeur du type concerné soit non null
 
@Size : Vérifier que la taille de la donnée soit comprise en les valeurs min et max fournies
 
@Past : Vérifier que la date soit dans le passé (antérieure à la date courante)
 
# Demo
 
PersonModelTest.java
 
```java
package com.damienfremont.blog;
 
import static org.assertj.core.api.Assertions.assertThat;
 
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Set;
 
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
 
import org.assertj.core.api.Condition;
import org.junit.Test;
 
public class PersonModelTest {
 
    @Test
    public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                "Kim", //
                "Kardashian", //
                new GregorianCalendar(1980, Calendar.OCTOBER, 21));
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
 
        // WHEN
 
        Set<ConstraintViolation<PersonModel>> constraintViolations = validator
                .validate(person);
 
        // THEN
 
        assertThat(constraintViolations).isEmpty();
    }
 
    @Test
    public void test_WHEN_valid_GIVEN_invalid_model_THEN_error() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                null, //
                "", //
                null);
 
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
 
        // WHEN
 
        Set<ConstraintViolation<PersonModel>> constraintViolations = validator
                .validate(person);
 
        // THEN
 
        assertThat(constraintViolations) //
                .hasSize(3) //
                .haveExactly(2, notNullCondition) //
                .haveExactly(1, notEmptyCondition);
    }
 
    Condition<ConstraintViolation<PersonModel>> notNullCondition = new Condition<ConstraintViolation<PersonModel>>() {
 
        @Override
        public boolean matches(ConstraintViolation<PersonModel> arg0) {
            return arg0.getMessage().contains("may not be null");
        }
    };
    Condition<ConstraintViolation<PersonModel>> notEmptyCondition = new Condition<ConstraintViolation<PersonModel>>() {
 
        @Override
        public boolean matches(ConstraintViolation<PersonModel> arg0) {
            return arg0.getMessage().contains("size must be between");
        }
    };
}
```
 
# Gestion des Exceptions
 
Il est facile de décliner cette solution pour créer des Exceptions, pour un back-end par exemple.
 
## Source code
 
Ici, on veut qu’une Exception soir remontée si et seulement si il y a une erreur de validation.
 
ValidationByExceptionHandler.java
 
```java
package com.damienfremont.blog;
 
import java.util.Set;
 
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
 
public class ValidationByExceptionHandler {
 
    Validator jeeValidator = Validation.buildDefaultValidatorFactory()
            .getValidator();
 
    <T> void validate(T object) {
        Set<ConstraintViolation<T>> errs = jeeValidator.validate(object);
        if (errs.size() > 0) { // error
            String msg = "Invalid Bean, constraint error(s) : ";
            for (ConstraintViolation<T> err : errs) {
                msg += err.getPropertyPath() + " " + err.getMessage() + ". ";
            }
            throw new IllegalArgumentException(msg);
        }
    }
}
```
 
## Demo
 
ValidationByExceptionHandlerTest.java
 
```java
package com.damienfremont.blog;
 
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.fail;
 
import java.util.Calendar;
import java.util.GregorianCalendar;
 
import org.junit.Test;
 
public class ValidationByExceptionHandlerTest {
 
    @Test
    public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                "Kim", //
                "Kardashian", //
                new GregorianCalendar(1980, Calendar.OCTOBER, 21));
        ValidationByExceptionHandler validator = new ValidationByExceptionHandler();
 
        // WHEN
 
        validator.validate(person);
 
        // THEN
        // nothing to do
    }
 
    @Test
    public void test_WHEN_valid_GIVEN_invalid_model_THEN_error() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                null, //
                "", //
                null);
        ValidationByExceptionHandler validator = new ValidationByExceptionHandler();
 
        // WHEN
 
        try {
            validator.validate(person);
            fail();
        } catch (IllegalArgumentException e) {
 
            // THEN
 
            assertThat(e.getMessage())
                    .contains("Invalid Bean, constraint error(s) : ")
                    .contains("birthDate may not be null.")
                    .contains("firstName may not be null.")
                    .contains("lastName size must be between 1 and 16.");
        }
    }
 
}
```
 
 
 
# Gestion des Responses
 
Voici un exemple de gestion plus spécifique, pour un back-end HTTP.
 
## Source code
 
Il faut mettre à jour la conf Maven pour gérer les Response JAX-RS.
pom.xml
 
```xml
...
        <dependency>
            <groupId>com.sun.jersey</groupId>
            <artifactId>jersey-json</artifactId>
            <version>1.8</version>
        </dependency>
        <dependency>
            <groupId>com.sun.jersey</groupId>
            <artifactId>jersey-client</artifactId>
            <version>1.12</version>
        </dependency>
    </dependencies>
    <build>
...
```
 
Ici, on veut construire le Response du server HTTP, dans les cas avec ou sans erreur de validation.
 
ValidationByResponseHandler.java
 
```java
package com.damienfremont.blog;
 
import java.util.Set;
 
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.ws.rs.core.Response;
 
public class ValidationByResponseHandler {
 
    Validator jeeValidator = Validation.buildDefaultValidatorFactory()
            .getValidator();
 
    <T> Response validate(T object) {
        Set<ConstraintViolation<T>> errs = jeeValidator.validate(object);
        if (errs.isEmpty()) { // no error
            return Response.status(200).entity(object).build();
        } else { // error
            String msg = "Invalid Bean, constraint error(s) : ";
            for (ConstraintViolation<T> err : errs) {
                msg += err.getPropertyPath() + " " + err.getMessage() + ". ";
            }
            return Response.status(400).entity(msg).build();
        }
 
    }
}
```
 
## Demo
 
ValidationByResponseHandlerTest.java
 
```java
package com.damienfremont.blog;
 
import static org.assertj.core.api.Assertions.assertThat;
 
import java.util.Calendar;
import java.util.GregorianCalendar;
 
import javax.ws.rs.core.Response;
 
import org.junit.Test;
 
public class ValidationByResponseHandlerTest {
 
    @Test
    public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                "Kim", //
                "Kardashian", //
                new GregorianCalendar(1980, Calendar.OCTOBER, 21));
        ValidationByResponseHandler validator = new ValidationByResponseHandler();
 
        // WHEN
 
        Response response = validator.validate(person);
 
        // THEN
        assertThat(response.getStatus()).isEqualTo(200);
    }
 
    @Test
    public void test_WHEN_valid_GIVEN_invalid_model_THEN_error() {
 
        // GIVEN
 
        PersonModel person = new PersonModel( //
                null, //
                "", //
                null);
        ValidationByResponseHandler validator = new ValidationByResponseHandler();
 
        // WHEN
 
        Response response = validator.validate(person);
 
        // THEN
        assertThat(response.getStatus()).isEqualTo(400);
        assertThat(response.getEntity().toString())
                .contains("Invalid Bean, constraint error(s) : ")
                .contains("birthDate may not be null.")
                .contains("firstName may not be null.")
                .contains("lastName size must be between 1 and 16.");
    }
 
}
```
 
# Conclusion
 
Ce genre de solution permet de rester proche des standards JavaEE. Elle permet donc de faciliter la maintenance et la compréhension entre développeur par rapport à une solution custom parfois instable (<If> dans tous les sens). Elle arrive aussi avec ses outils préfabriqués qui accélèrent le dev. Tel que les validations de base, les annotations, l’inspection de toutes les contraintes (analyse au delà de la première erreur) et la génération des messages d’erreurs.
 
Toutefois, la validation manuelle n’a pratiquement plus sa place dans un server JavaEE. Les annotations @Valid la remplaçant déjà dans SpringMVC et JavaEE. Reste toutefois les petits projets, les batch et les servers non JavaEE.
 
```java
@Path("/example")
public class MyExampleResourceImpl {
 
    @POST
    @Path("/")
    public Response postExample(@Valid final Example example) {
        // ....
    }
}
```
 
[http://stackoverflow.com/questions/14523201/hibernate-validator-how-to-work-with-valid-annotation](http://stackoverflow.com/questions/14523201/hibernate-validator-how-to-work-with-valid-annotation)
http://stackoverflow.com/questions/14523201/hibernate-validator-how-to-work-with-valid-annotation
 
```java
@Controller
@RequestMapping("/customer")
public class SignUpController {
 
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String addCustomer(@Valid Customer customer, BindingResult result) {
         // ....
    }
}
```
 
[http://www.mkyong.com/spring-mvc/spring-3-mvc-and-jsr303-valid-example/](http://www.mkyong.com/spring-mvc/spring-3-mvc-and-jsr303-valid-example/)
http://www.mkyong.com/spring-mvc/spring-3-mvc-and-jsr303-valid-example/
 
# Sources
 
[https://github.com/damienfremont/blog/tree/master/20150113-javaee-beanvalidator](https://github.com/damienfremont/blog/tree/master/20150113-javaee-beanvalidator)
https://github.com/damienfremont/blog/tree/master/20150113-javaee-beanvalidator
 
# References
 
[http://beanvalidation.org/](http://beanvalidation.org/)
http://beanvalidation.org/
 
[http://hibernate.org/validator/](http://hibernate.org/validator/)
http://hibernate.org/validator/
 
[http://www.adam-bien.com/roller/abien/entry/unit_integration_testing_the_bean](http://www.adam-bien.com/roller/abien/entry/unit_integration_testing_the_bean)
http://www.adam-bien.com/roller/abien/entry/unit_integration_testing_the_bean
 
[http://docs.oracle.com/javaee/6/tutorial/doc/gircz.html](http://docs.oracle.com/javaee/6/tutorial/doc/gircz.html)
http://docs.oracle.com/javaee/6/tutorial/doc/gircz.html
 
[http://www.jmdoudoux.fr/java/dej/chap-validation_donnees.htm](http://www.jmdoudoux.fr/java/dej/chap-validation_donnees.htm)
http://www.jmdoudoux.fr/java/dej/chap-validation_donnees.htm
 
 
## Origin
[https://damienfremont.com/2015/01/13/comment-utiliser-beanvalidation-manuellement-hors-dun-serveur-javaee/](https://damienfremont.com/2015/01/13/comment-utiliser-beanvalidation-manuellement-hors-dun-serveur-javaee/)
 
