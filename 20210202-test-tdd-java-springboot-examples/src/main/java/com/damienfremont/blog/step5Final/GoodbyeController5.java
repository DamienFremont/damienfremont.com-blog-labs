package com.damienfremont.blog.step5Final;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class GoodbyeController5 {

    private GoodbyeValidator5 validator;
    private GoodbyeTransform5 mapper;

    public GoodbyeController5(GoodbyeValidator5 validator, GoodbyeTransform5 mapper) {
        this.validator = validator;
        this.mapper = mapper;
    }

    @RequestMapping("/goodbye5/{name}")
    public ResponseEntity<String> goodbye(
            @PathVariable("name") String name) {
        if(!validator.isValid(name)) {
            return ResponseEntity
                    .badRequest()
                    .body("bad arg (ex: Damien)");
        }
        String message = mapper.transform(name);
        return ResponseEntity
                .ok()
                .body(message);
    }
}