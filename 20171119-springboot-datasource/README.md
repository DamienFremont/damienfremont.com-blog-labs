HowTo SpringBoot – DataSource
======
 
![alt text](screenshots/171119153705243.png)
 
To configure your own DataSource for SpringBoot, with fully automatic initialization, semi-auto or static configuration. With various properties or a JNDI.
 

 
## Steps
 
* DataSources Examples AutoConfig Semi AutoConfig Static
* Common Test & Entity
 
## 1. DataSource AutoConfig (SpringBoot)
 
## Source Code
 
Application.java
 
```java
package com.damienfremont.blog;
 
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
 
@SpringBootApplication
@EnableAutoConfiguration
public class Application {
 
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
```
 
application.properties
 
```
# ===================================================================
# COMMON SPRING BOOT PROPERTIES
# ===================================================================
# https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html
 
# ----------------------------------------
# DATA PROPERTIES
# ----------------------------------------
 
# DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
#spring.datasource.jndi-name=XXX
spring.datasource.driver-class-name=org.hsqldb.jdbc.JDBCDriver
spring.datasource.url=jdbc:hsqldb:file:db/testdb
spring.datasource.username=sa
spring.datasource.password=sa
```
 
## Config Key Value References
 
```
spring.datasource.continue-on-error=false # Do not stop if an error occurs while initializing the database.
spring.datasource.data= # Data (DML) script resource references.
spring.datasource.data-username= # User of the database to execute DML scripts (if different).
spring.datasource.data-password= # Password of the database to execute DML scripts (if different).
spring.datasource.dbcp2.*= # Commons DBCP2 specific settings
spring.datasource.driver-class-name= # Fully qualified name of the JDBC driver. Auto-detected based on the URL by default.
spring.datasource.generate-unique-name=false # Generate a random datasource name.
spring.datasource.hikari.*= # Hikari specific settings
spring.datasource.initialize=true # Populate the database using 'data.sql'.
spring.datasource.jmx-enabled=false # Enable JMX support (if provided by the underlying pool).
spring.datasource.jndi-name= # JNDI location of the datasource. Class, url, username & password are ignored when set.
spring.datasource.name=testdb # Name of the datasource.
spring.datasource.password= # Login password of the database.
spring.datasource.platform=all # Platform to use in the DDL or DML scripts (e.g. schema-${platform}.sql or data-${platform}.sql).
spring.datasource.schema= # Schema (DDL) script resource references.
spring.datasource.schema-username= # User of the database to execute DDL scripts (if different).
spring.datasource.schema-password= # Password of the database to execute DDL scripts (if different).
spring.datasource.separator=; # Statement separator in SQL initialization scripts.
spring.datasource.sql-script-encoding= # SQL scripts encoding.
spring.datasource.tomcat.*= # Tomcat datasource specific settings
spring.datasource.type= # Fully qualified name of the connection pool implementation to use. By default, it is auto-detected from the classpath.
spring.datasource.url= # JDBC url of the database.
spring.datasource.username= # Login user of the database.
spring.datasource.xa.data-source-class-name= # XA datasource fully qualified name.
spring.datasource.xa.properties= # Properties to pass to the XA data sour
```
 
[https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html)
source: https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html
 
## 2. DataSource Semi-AutoConfig (SpringBoot)
 
## Source Code
 
Application.java
 
```java
package com.damienfremont.blog;
 
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
 
@SpringBootApplication( //
    scanBasePackageClasses = { DataSourceConfig.class })
@EnableAutoConfiguration
public class Application {
 
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
```
 
DataSourceConfig.java
 
```java
package com.damienfremont.blog;
 
import java.sql.*;
import javax.sql.*;
 
import org.springframework.context.annotation.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.boot.context.properties.*;
import org.springframework.jdbc.core.*;
 
@Configuration
public class DataSourceConfig {
 
  private final static String DRIVER_CLASSNAME = "org.hsqldb.jdbc.JDBCDriver";
 
  @Bean
  public JdbcTemplate jdbcTemplate(DataSource dataSource) {
    return new JdbcTemplate(dataSource);
  }
 
  // AUTO FILL MISSING PROPERTIES BY SPRINGBOOT (USR, PASS, URL, ...)
  @Bean
  @ConfigurationProperties(prefix = "datasource")
  public DataSource dataSourceProperties() throws SQLException {
    return DataSourceBuilder.create() //
        .driverClassName(DRIVER_CLASSNAME) //
        .build();
  }
}
```
 
application.properties
 
```
# ===================================================================
# COMMON SPRING BOOT PROPERTIES
# ===================================================================
# https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html
 
# ----------------------------------------
# DATA PROPERTIES
# ----------------------------------------
 
# DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
datasource.url=jdbc:hsqldb:file:db/testdb
datasource.username=sa
datasource.password=sa<span              data-mce-type="bookmark"                id="mce_SELREST_start"              data-mce-style="overflow:hidden;line-height:0"              style="overflow:hidden;line-height:0"           ></span>
```
 
## 3. DataSource Static Config (SpringBoot)
 
## Source Code
 
Application.java
 
```java
package com.damienfremont.blog;
 
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
 
@SpringBootApplication( //
    scanBasePackageClasses = { DataSourceConfig.class })
public class Application {
 
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
```
 
DataSourceConfig.java
 
```java
package com.damienfremont.blog;
 
import java.sql.*;
import javax.naming.*;
import javax.sql.DataSource;
 
import org.springframework.context.annotation.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
 
@Configuration
public class DataSourceConfig {   
 
  // PROPERTIES
  @Value("${datasource.jndiname:DS}")   private String jndi;
  @Value("${datasource.driverClassName}")   private String driverClassName;
  @Value("${datasource.url}")   private String url;
  @Value("${datasource.username}")   private String username;
  @Value("${datasource.password}")   private String password;
 
  @Bean
  public DataSource dataSource() throws Exception {
    DataSource ds;
    try {
      ds = dataSourceJNDI();
    } catch (NamingException e) {
      ds = dataSourceProperties();
    }
    return ds;
  }   
 
  @Bean
  public JdbcTemplate jdbcTemplate(DataSource dataSource) {
    return new JdbcTemplate(dataSource);
  }   
 
  DataSource dataSourceProperties() throws SQLException {
    return DataSourceBuilder.create() //
        .driverClassName(driverClassName) //
        .url(url) //
        .username(username) //
        .password(password) //
        .build();
  }
 
  DataSource dataSourceJNDI() throws NamingException {
    return (DataSource) new InitialContext() //
        .lookup(jndi);
  }   
 
}
```
 
application.properties
 
```
# ----------------------------------------
# DATA PROPERTIES
# ----------------------------------------
 
# DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
#datasource.jndiname=DS
datasource.driverClassName=org.hsqldb.jdbc.JDBCDriver
datasource.url=jdbc:hsqldb:file:db/testdb
datasource.username=sa
datasource.password=sa
```
 
## 5. Data Source Test (JUnit+HSQLDB)
 
The same test can be used on all the previous DataSource implementations.
 
## Source Code
 
DataSourceTest.java
 
```java
package com.damienfremont.blog;
 
import static org.junit.Assert.*;
import org.junit.*;
import org.junit.runner.*;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
 
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DataSourceTest {
 
  @Autowired
  private GenericEntityRepository data;
 
  @Test
  public void test() {
    GenericEntity newEntity = new GenericEntity("test");
 
    GenericEntity savedEntity = data.save(newEntity);
    GenericEntity foundEntity = data.findOne(savedEntity.getId());
 
    assertNotNull(foundEntity);
    assertEquals(newEntity.getValue(), savedEntity.getValue());
    assertEquals(newEntity.getValue(), foundEntity.getValue());
  }
}
```
 
GenericEntity.java
 
```java
package com.damienfremont.blog;
 
import javax.persistence.*;
 
@Entity
public class GenericEntity {
 
  // PROPERTIE(S)
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String value;
 
  // CONSTRUCTOR(S)
  public GenericEntity() { }
  public GenericEntity(String value) { this.value = value; }
 
  // ACCESSOR(S)
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getValue() { return value; }
  public void setValue(String value) { this.value = value; }
}
```
 
GenericEntityRepository.java
 
```java
package com.damienfremont.blog;
 
import org.springframework.data.jpa.repository.*;
 
public interface GenericEntityRepository //
  extends JpaRepository<GenericEntity, Long> {
}
```
 
pom.xml
 
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
 
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.8.RELEASE</version>
  </parent>
 
  <groupId>com.damienfremont.blog</groupId>
  <artifactId>springboot-datasource-1-autoconfig</artifactId>
  <version>0.0.1-SNAPSHOT</version>
 
  <packaging>jar</packaging>
 
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <java.version>8</java.version>
  </properties>
  <dependencies>
 
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
 
    <!-- DATA -->
    <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-dbcp2</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.data</groupId>
      <artifactId>spring-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-entitymanager</artifactId>
    </dependency>
 
    <!-- DATA DRIVER -->
    <dependency>
      <groupId>org.hsqldb</groupId>
      <artifactId>hsqldb</artifactId>
    </dependency>
 
    <!-- TEST -->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
 
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>1.${java.version}</source>
          <target>1.${java.version}</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
 
## Source Code
 
[https://github.com/DamienFremont/blog/tree/master/20171119-springboot-datasource](https://github.com/DamienFremont/blog/tree/master/20171119-springboot-datasource)
https://github.com/DamienFremont/blog/tree/master/20171119-springboot-datasource
 
## References
 
[https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#howto-configure-a-datasource](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#howto-configure-a-datasource)
https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#howto-configure-a-datasource
 
[https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html)
https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html
 
[http://www.baeldung.com/spring-boot-custom-auto-configuration](http://www.baeldung.com/spring-boot-custom-auto-configuration)
http://www.baeldung.com/spring-boot-custom-auto-configuration
 
[https://spring.io/blog/2014/03/07/deploying-spring-boot-applications](https://spring.io/blog/2014/03/07/deploying-spring-boot-applications)
https://spring.io/blog/2014/03/07/deploying-spring-boot-applications
 
[http://www.baeldung.com/spring-testing-separate-data-source](http://www.baeldung.com/spring-testing-separate-data-source)
http://www.baeldung.com/spring-testing-separate-data-source
 
[https://docs.spring.io/spring-boot/docs/current/reference/html/howto-data-access.html](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-data-access.html)
https://docs.spring.io/spring-boot/docs/current/reference/html/howto-data-access.html
 
 
## Origin
[https://damienfremont.com/2017/11/19/howto-springboot-datasource/](https://damienfremont.com/2017/11/19/howto-springboot-datasource/)
 
