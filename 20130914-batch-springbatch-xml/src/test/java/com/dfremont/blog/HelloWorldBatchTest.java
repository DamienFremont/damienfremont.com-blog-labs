package com.dfremont.blog;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/simpleJob.xml", "/simpleJob-test.xml" })
public class HelloWorldBatchTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Test
    public void test_That_batch_execution_Should_success_When_launch_with_valid_args()
            throws Exception {
        // arrange
        JobParameters params = new JobParametersBuilder().addLong(
                "execution.times", 10L).toJobParameters();
        // act
        JobExecution jobExecution = jobLauncherTestUtils.launchJob(params);
        // assert
        assertEquals(BatchStatus.COMPLETED, jobExecution.getStatus());
        assertEquals(1, jobExecution.getStepExecutions().size());
        StepExecution step = jobExecution.getStepExecutions().iterator().next();
        assertEquals(11, step.getCommitCount());
        assertEquals(10, step.getWriteCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void test_That_args_validation_Should_throw_error_When_no_args()
            throws Exception {
        jobLauncherTestUtils.launchJob(null);
    }

    @Test(expected = JobParametersInvalidException.class)
    public void test_That_args_validation_Should_throw_error_When_empty_args()
            throws Exception {
        jobLauncherTestUtils.launchJob(new JobParametersBuilder()
                .toJobParameters());
    }

    @Test
    public void test_That_batch_execution_Should_stop_When_wrong_format_arg()
            throws Exception {
        JobExecution jobExecution = jobLauncherTestUtils
                .launchJob(new JobParametersBuilder().addLong(
                        "execution.times", null).toJobParameters());
        assertEquals(BatchStatus.FAILED, jobExecution.getStatus());
    }
}
