SpringBatch xml config helloworld repeat example
======
 
![alt text](screenshots/160513135635277.jpg)
 
In Java, the development of batch can be achieved with few solutions. Most applications use SpringBatch. This is the SpringBatch framework with its XML configuration that is used here. Another example with the configuration JavaConfig follow.
 

 
The focus of this tutorial is to develop a batch that will perform an “HelloWorld” task as many times as requested (value specify in argument content).
 
## 1. How it works?
 
```java
JobExecution jobExecution = jobLauncherTestUtils.launchJob(
    new JobParametersBuilder().addLong("execution.times", 10L).toJobParameters()  // exec 10 times
);
```
 
## 2. Demo (console output)
 
```
...
sept. 14, 2013 5:10:17 PM org.springframework.batch.core.launch.support.SimpleJobLauncher$1 run
INFO: Job: [FlowJob: [name=helloWorldJob]] launched with the following parameters: [{execution.times=10}]
sept. 14, 2013 5:10:17 PM org.springframework.batch.core.job.SimpleStepHandler handleStep
INFO: Executing step: [helloWorldStep]
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
sept. 14, 2013 5:10:17 PM org.springframework.batch.core.launch.support.SimpleJobLauncher$1 run
INFO: Job: [FlowJob: [name=helloWorldJob]] completed with the following parameters: [{execution.times=10}] and the following status: [COMPLETED]
```
 
## 2. Implementation
 
HelloWorldReader.java
 
```java
package com.dfremont.blog;
 
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ParseException;
import org.springframework.batch.item.UnexpectedInputException;
 
/**
 * reads as many times as there are executionTimes.
 */
public class HelloWorldReader implements ItemReader<Object> {
 
    private int executionTimes;
 
    public void setExecutionTimes(String newValue) {
        executionTimes = Integer.valueOf(newValue);
    }
 
    public Object read() throws Exception, UnexpectedInputException,
            ParseException {
        Object o = null;
        if (executionTimes > 0) {
            executionTimes--;
            o = new Object();
        }
        return o;
    }
}
```
 
HelloWorldWriter.java
 
```java
package com.dfremont.blog;
 
import java.util.List;
import org.springframework.batch.item.ItemWriter;
 
/**
 * Task to repeat (helloworld).
 */
public class HelloWorldWriter implements ItemWriter<Object> {
 
    public void write(List<? extends Object> arg0) throws Exception {
        System.out.println("Hello World!");
    }
 
}
```
 
applicationContext.xml
 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans:beans xmlns="http://www.springframework.org/schema/batch"
    xmlns:beans="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.0.xsd
http://www.springframework.org/schema/batch
http://www.springframework.org/schema/batch/spring-batch-2.0.xsd">
 
    <beans:bean id="jobRepository"
        class="org.springframework.batch.core.repository.support.MapJobRepositoryFactoryBean">
        <beans:property name="transactionManager" ref="transactionManager" />
    </beans:bean>
 
    <beans:bean id="jobLauncher"
        class="org.springframework.batch.core.launch.support.SimpleJobLauncher">
        <beans:property name="jobRepository" ref="jobRepository" />
    </beans:bean>
 
    <beans:bean id="transactionManager"
        class="org.springframework.batch.support.transaction.ResourcelessTransactionManager" />
</beans:beans>
```
 
simpleJob.xml
 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans:beans xmlns="http://www.springframework.org/schema/batch"
    xmlns:beans="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.0.xsd
http://www.springframework.org/schema/batch
http://www.springframework.org/schema/batch/spring-batch-2.1.xsd">
 
    <beans:import resource="applicationContext.xml" />
 
    <job id="helloWorldJob" job-repository="jobRepository">
        <!-- Job validator -->
        <validator ref="helloWorldJobParametersValidator" />
 
        <step id="helloWorldStep">
            <tasklet>
                <chunk reader="helloWorldReader" writer="helloWorldWriter"
                    commit-interval="0">
                </chunk>
            </tasklet>
        </step>
    </job>
 
    <beans:bean id="helloWorldJobParametersValidator"
        class="org.springframework.batch.core.job.DefaultJobParametersValidator">
        <beans:property name="requiredKeys" value="execution.times" />
    </beans:bean>
 
    <beans:bean name="helloWorldReader" class="com.dfremont.blog.HelloWorldReader"
        scope="step">
        <beans:property name="executionTimes"
            value="#{jobParameters['execution.times']}" />
    </beans:bean>
 
    <beans:bean name="helloWorldWriter" class="com.dfremont.blog.HelloWorldWriter">
    </beans:bean>
 
    <!-- To run the job from the command line type the following: mvn exec:java
        -Dexec.mainClass=org.springframework.batch.core.launch.support.CommandLineJobRunner
        -Dexec.args="simpleJob.xml helloWorldJob" -->
</beans:beans>
```
 
## View source code and more tests
 
[https://github.com/damienfremont/blog/tree/master/20130914-springbatch-xmlconfig](https://github.com/damienfremont/blog/tree/master/20130914-springbatch-xmlconfig)
https://github.com/damienfremont/blog/tree/master/20130914-springbatch-xmlconfig
 
 
[https://damienfremont.com/2013/09/14/springbatch-xml-config-helloworld-repeat-example/](https://damienfremont.com/2013/09/14/springbatch-xml-config-helloworld-repeat-example/)
 
