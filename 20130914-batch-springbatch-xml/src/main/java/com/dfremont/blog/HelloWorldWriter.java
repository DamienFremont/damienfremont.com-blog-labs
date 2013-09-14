package com.dfremont.blog;

import java.util.List;

import org.springframework.batch.item.ItemWriter;

/**
 * Task to repeat (helloworld).
 * 
 * @author Damien
 * 
 */
public class HelloWorldWriter implements ItemWriter<Object> {

    public void write(List<? extends Object> arg0) throws Exception {
        System.out.println("Hello World!");
    }

}
