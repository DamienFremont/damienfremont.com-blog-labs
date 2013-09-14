package com.dfremont.blog;

import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ParseException;
import org.springframework.batch.item.UnexpectedInputException;

/**
 * reads as many times as there are executionTimes.
 * 
 * @author Damien FREMONT
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
