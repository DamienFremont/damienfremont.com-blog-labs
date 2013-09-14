batch-simple_java
=============

In Java, the development of batch can be achieved with few solutions. Most applications use SpringBatch.

This is the SpringBatch framework with its XML configuration that is used here. Another example with the configuration JavaConfig follow.

The focus of this tutorial is to develop a batch that will perform an "HelloWorld" task as many times as requested (value specify in argument content).

1. How it works?
```java
JobExecution jobExecution = jobLauncherTestUtils.launchJob(
    new JobParametersBuilder().addLong("execution.times", 10L).toJobParameters()  // exec 10 times
);
```
2. Demo (console output)
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
