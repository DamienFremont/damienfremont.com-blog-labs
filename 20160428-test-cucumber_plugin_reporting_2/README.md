How to Cucumber : Test Reporting Plugin with Maven and Java
======

It is often useful to show the results of our tests to others people who are not developers, like managers or executive. This tutorial shows how to integrate a Cucumber reporting a Java plugin in Maven project. The result is a simple web page, which does not require a special tool to be read.


This tutorial will cover 3 reports plugins : JSON, HTML Pretty and HTML Reports.

![screenshots/screenshot001.jpg]

 ScreenShot002 ScreenShot003

Native JSON Result
------

ScreenShot001

How to:

pom.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150730-test-cucumber_plugin_reporting</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-java8</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
RunBDDTest.java
```java
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "features", format = { "pretty",
        "json:target/cucumber.json" }, tags = { "~@ignore" })
public class RunBDDTest {
 
}
```

# Demo:

Launch with JUnit or

1
>mvn test
The result is at /target/cucumber.json

ScreenShot009

Native HTML Plugin

ScreenShot002

How to:

RunBDDTest.java

1
2
3
4
5
6
7
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "features", format = { "pretty",
        "html:target/site/cucumber-pretty",
        "json:target/cucumber.json" }, tags = { "~@ignore" })
public class RunBDDTest {
 
}
Demo:

Launch with JUnit or

1
>mvn test
The result is at /target/site/cucumber-pretty/index.html

ScreenShot008

Cucumber-Reports HTML Plugin

ScreenShot003

ScreenShot004

How to:

pom.xml

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150730-test-cucumber_plugin_reporting</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-java8</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
 
        <!-- REPORTING -->
        <dependency>
            <groupId>com.googlecode.totallylazy</groupId>
            <artifactId>totallylazy</artifactId>
            <version>1.20</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib/totallylazy-1.20.jar</systemPath>
        </dependency>
        <dependency>
            <groupId>net.masterthought</groupId>
            <artifactId>cucumber-reporting</artifactId>
            <version>0.0.24</version>
        </dependency>
 
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.3</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.18.1</version>
                <configuration>
                    <testFailureIgnore>true</testFailureIgnore>
                    <includes>
                        <exclude>**/*BDDTest.java</exclude>
                    </includes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>net.masterthought</groupId>
                <artifactId>maven-cucumber-reporting</artifactId>
                <version>0.0.5</version>
                <dependencies>
                    <dependency>
                        <groupId>com.googlecode.totallylazy</groupId>
                        <artifactId>totallylazy</artifactId>
                        <version>991</version>
                        <scope>system</scope>
                        <systemPath>${project.basedir}/lib/totallylazy-991.jar</systemPath>
                    </dependency>
                </dependencies>
                <executions>
                    <execution>
                        <id>execution</id>
                        <phase>verify</phase>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                        <configuration>
                            <projectName>cucumber-jvm-example</projectName>
                            <outputDirectory>${project.build.directory}/site/cucumber-reports</outputDirectory>
                            <cucumberOutput>${project.build.directory}/cucumber.json</cucumberOutput>
                            <enableFlashCharts>false</enableFlashCharts>
                            <skippedFails>true</skippedFails>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
 
        </plugins>
    </build>
</project>
And two libs (external to Maven repositories)

https://code.google.com/p/totallylazy/downloads/list

ScreenShot005

RunBDDTest.java

1
2
3
4
5
6
7
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "features", format = { "pretty",
        "html:target/site/cucumber-pretty",
        "json:target/cucumber.json" }, tags = { "~@ignore" })
public class RunBDDTest {
 
}
Demo:

Launch with

1
mvn clean install
The result is at /target/site/cucumber-reports/feature-overview.html

ScreenShot007

Conclusion

JSON is OK for integration with other tools (jenkins plugin, reports, etc).

Pretty HTML is OK during development phase (like a JUnit or Surefire report for versionning).

Cucumber-Reports is good for reporting outside of the dev team (like managers).

Source

https://github.com/DamienFremont/blog/tree/master/20150730-test-cucumber_plugin_reporting

References

https://cucumber.io/docs/reference/jvm

ttps://github.com/masterthought/cucumber-reporting

http://www.masterthought.net/section/cucumber-reporting