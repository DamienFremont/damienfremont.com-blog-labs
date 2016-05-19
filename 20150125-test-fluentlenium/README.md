Test web-UI automatisé avec FluentLenium Java
======
 
![alt text](screenshots/160520005755479.jpg)
 
[Tester une webapp avec Selenium Java, PhantomJS et un webserver embarqué ?](http://damienfremont.com/2015/01/18/tester-une-webapp-avec-selenium-java-phantomjs-et-un-webserver-embarque/)
Ce tuto permet de tester une interface web de façon rapide et maintenable en utilisant Fluentlenium avec les classiques JUnit, Selenium et FestAssert. C’est une version améliorée du tuto Tester une webapp avec Selenium Java, PhantomJS et un webserver embarqué ?
 

 
# Environnement
 
“FluentLenium is a framework that helps you to write Selenium tests. FluentLenium provides you afluent interface to the Selenium Web Driver. FluentLenium lets you use the assertion framework you like, either jUnit assertions, Hamcrest or AssertJ” source : https://github.com/FluentLenium/FluentLenium
 
![alt text](screenshots/160520005755545.jpg)
 

 
# Code
 
Un test s’écrit très facilement. Le formalisme se prête même au TDD.
 
WebUITest.java (1/2) : tests
 
```java
...
    // TESTS **********************
 
    @Test
    public void test_QUAND_acces_site_ETANT_DONNE_main_page_ALORS_afficher_main_page() {
 
        // QUAND
        goTo(baseUrl);
 
        // ALORS
        assertThat(mainPage).isAt();
 
        assertThat(mainPage.title).isDisplayed().hasText("Main page");
        assertThat(mainPage.goToPage1Btn).isDisplayed();
        assertThat(mainPage.goToPage2Btn).isDisplayed();
    }
 
    @Test
    public void test_QUAND_navigue_vers_page_1_ETANT_DONNE_main_page_ALORS_afficher_page_1() {
 
        // ETANT DONNE
        goTo(mainPage);
        assertThat(mainPage).isAt();
 
        // QUAND
        mainPage.goToPage1Btn.click();
 
        // ALORS
        assertThat(page1).isAt();
        assertThat(page1.title).isDisplayed().hasText("Page 1");
        assertThat(page1.backBtn).isDisplayed().hasText("Return");
    }
 
    @Test
    public void test_QUAND_navigue_vers_page_2_ETANT_DONNE_page_2_cassee_ALORS_erreur_404() {
 
        // ETANT DONNE
        goTo(mainPage);
        assertThat(mainPage).isAt();
 
        // QUAND
        mainPage.goToPage2Btn.click();
 
        // ALORS
        Assertions.assertThat(find("body").getText()).contains("404");
    }
}
```
 
Mais avant de coder les tests, il faut pas mal d’init et de config.
 
Il faut penser à inclure les imports en tête des fichiers source. Attention à la résolution auto des imports de votre IDE.
 
```java
import static org.fluentlenium.core.filter.FilterConstructor.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.fluentlenium.assertj.FluentLeniumAssertions.assertThat;
```
 
Il faut également initialiser le web-server, le navigateur et son driver ainsi que FluentLenium.
 
WebUITest.java (2/2) : init, tools
 
```java
public class WebUITest extends FluentTest {
 
    static EmbeddedServer server;
    static WebDriver driver;
    static String baseUrl;
 
    // SELENIUM INIT **************
 
    @BeforeClass
    public static void startServer() throws ServletException {
 
        // INIT WEB SERVER (TOMCAT)
        server = new EmbeddedServer(8080, "/20150125-test-fluentlenium");
        server.start();
    }
 
    @AfterClass
    public static void stopServer() {
        server.stop();
        driver.quit();
    }
 
    // FLUENTLENIUM INIT **********
 
    // Override of this method to change the driver
    @Override
    public WebDriver getDefaultDriver() {
 
        // INIT WEB BROWSER (SELENIUM + PHANTOMJS)
        driver = new PhantomJSDriver(new DesiredCapabilities(ImmutableMap.of( //
                PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, //
                new PhantomJsDownloader().downloadAndExtract()
                        .getAbsolutePath())));
        baseUrl = "http://localhost:8080/20150125-test-fluentlenium";
        driver.manage().timeouts().implicitlyWait(5, SECONDS);
 
        return driver;
    }
 
    @Page
    MainPage mainPage;
 
    @Page
    MainPage1 page1;
...
```
 
La dernière étape consiste à coder en PagePattern (une page web / écran = une classe, héritant de FluentPage). Visuellement, ces classes Java “ressembleront de loin” dans la forme à vos pages web testées (avec un peu de code utilitaire à coté).
 
![alt text](screenshots/160520005755601.jpg)
 
Ainsi, la 1ere page du site…
 
…donne MainPage.java
 
```java
// PAGE PATTERN DE LA PAGE PRINCIPALE
public class MainPage extends FluentPage {
 
    // FLUENTLENIUM UTILS
 
    @Override
    public String getUrl() {
        return "http://localhost:8080/20150125-test-fluentlenium/";
    }
 
    @Override
    public void isAt() {
        FluentLeniumAssertions.assertThat(title).hasText("Main page");
    }
 
    // WEB ELEMENT (text, href, etc)
 
    @FindBy(css = ".container .title")
    FluentWebElement title;
 
    @FindBy(css = ".container li:nth-child(1) .goto.btn")
    FluentWebElement goToPage1Btn;
 
    @FindBy(css = ".container li:nth-child(2) .goto.btn")
    FluentWebElement goToPage2Btn;
 
}
```
 
![alt text](screenshots/160520005755632.jpg)
 
Et la seconde page…
 
…donne MainPage1.java
 
```java
// PAGE PATTERN DE LA PAGE 1
public class MainPage1 extends FluentPage {
 
    @Override
    public String getUrl() {
        return "http://localhost:8080/20150125-test-fluentlenium/page1.html";
    }
 
    @Override
    public void isAt() {
        FluentLeniumAssertions.assertThat(title).hasText("Page 1");
    }
 
    @FindBy(css = ".container .title")
    FluentWebElement title;
 
    @FindBy(css = ".container .back.btn")
    FluentWebElement backBtn;
 
}
```
 
Ce qui donne le projet Java suivant.
 
![alt text](screenshots/160520005755665.jpg)
 

 
pom.xml config Maven
 
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150125-test-fluentlenium</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>war</packaging>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <jdk.version>1.7</jdk.version>
        <tomcat-version>8.0.15</tomcat-version>
        <fluentlenium.version>0.10.3</fluentlenium.version>
    </properties>
    <dependencies>
 
        <!-- TEST -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
        </dependency>
        <dependency>
            <groupId>org.fluentlenium</groupId>
            <artifactId>fluentlenium-core</artifactId>
            <version>${fluentlenium.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.fluentlenium</groupId>
            <artifactId>fluentlenium-assertj</artifactId>
            <version>${fluentlenium.version}</version>
            <scope>test</scope>
        </dependency>
 
        <!-- TEST: EMBEDDED PHANTOMJS WEBBROWSER -->
        <dependency>
            <groupId>com.codeborne</groupId>
            <artifactId>phantomjsdriver</artifactId>
            <version>1.2.1</version>
        </dependency>
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>14.0.1</version>
        </dependency>
 
        <!-- TEST : EMBEDDED TOMCAT SERVER -->
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-logging-juli</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat</groupId>
            <artifactId>tomcat-jasper</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat</groupId>
            <artifactId>tomcat-jasper-el</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat</groupId>
            <artifactId>tomcat-jsp-api</artifactId>
            <version>${tomcat-version}</version>
            <scope>test</scope>
        </dependency>
 
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>${jdk.version}</source>
                    <target>${jdk.version}</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
 
# Demo
 
Comme pour des tests unitaires, il suffit de lancer les tests du projet ou de la classe WebUITest.java.
 
![alt text](screenshots/160520005755707.jpg)
 

 
En effet, tout est embarqué DANS le test JUnit :
 
* server : Tomcat  (pour tester dans une usine de dev, un Jenkins, etc)
* navigateur web : PhantomJS
 
Le comportement est également le même qu’un test unitaire, avec son rapport.
 
![alt text](screenshots/160520005755741.jpg)
 

 
# Conclusion
 
FluentLenium aide beaucoup pour la réalisation de tests UI/IHM :
 
* approche plus productive (moins de code boilerplate, moins d’erreurs)
* introduit des bonnes pratiques (page pattern, assertions, séparation du code)
* rend possible l’approche TDD (formalisme que prennent les tests)
 
Pour aller plus loin, il est possible d’industrialiser l’initialisation des classes de test (avec un super objet contenant webdriver, init du server, une politique de login, du processus contenant le browser)
 
# Source code
 
[https://github.com/damienfremont/blog/tree/master/20150125-test-fluentlenium](https://github.com/damienfremont/blog/tree/master/20150125-test-fluentlenium)
https://github.com/damienfremont/blog/tree/master/20150125-test-fluentlenium
 
# References
 
[https://github.com/FluentLenium/FluentLenium](https://github.com/FluentLenium/FluentLenium)
https://github.com/FluentLenium/FluentLenium
 
 
[https://damienfremont.com/2015/01/25/test-web-ui-automatise-avec-fluentlenium-java/](https://damienfremont.com/2015/01/25/test-web-ui-automatise-avec-fluentlenium-java/)
 
