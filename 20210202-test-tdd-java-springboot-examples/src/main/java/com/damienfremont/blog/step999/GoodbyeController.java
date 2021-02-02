package com.damienfremont.blog.step999;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class GoodbyeController {

    private GoodbyeValidator validator;
    private GoodbyeTransform mapper;

    public GoodbyeController(GoodbyeValidator validator, GoodbyeTransform mapper) {
        this.validator = validator;
        this.mapper = mapper;
    }

    @RequestMapping("/goodbye/{name}")
    public ResponseEntity<String> goodbye(
            @PathVariable("name") String name) {
        if(!validator.isValid(name)) {
            return ResponseEntity
                    .badRequest()
                    .body("missing name");
        }
        String message = mapper.transform(name);
        return ResponseEntity
                .ok()
                .body(message);
    }
}