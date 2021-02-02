package com.damienfremont.blog.step1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodbyeController1 {

    @RequestMapping("/goodbye1/")
    public ResponseEntity<String> goodbye() {
        throw new IllegalStateException("Not yet implemented!");
        // TODO: Return "Goodbye from SPRING!"
    }
}