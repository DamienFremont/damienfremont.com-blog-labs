package com.damienfremont.blog.step3;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodbyeController3 {

    @RequestMapping("/goodbye3/{name}")
    public ResponseEntity<String> goodbye(
            @PathVariable("name") String name) {
        String message = String.format("Goodbye from %s!", name);
        return ResponseEntity
                .ok()
                .body(message);
    }
}