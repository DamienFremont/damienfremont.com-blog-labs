package com.damienfremont.blog.step2;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodbyeController2 {

    @RequestMapping("/goodbye2/")
    public ResponseEntity<String> goodbye() {
        String message = "Goodbye from SPRING!";
        // TODO: Return "Goodbye from <MY NAME>!", where <MY NAME> is path parameter
        return ResponseEntity
                .ok()
                .body(message);
    }
}