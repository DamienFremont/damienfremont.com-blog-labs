package com.damienfremont.blog.step4;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodbyeController4 {

    private GoodbyeTransform4 mapper;

    public GoodbyeController4(GoodbyeTransform4 mapper) {
        this.mapper = mapper;
    }

    @RequestMapping("/goodbye4/{name}")
    public ResponseEntity<String> goodbye(
            @PathVariable("name") String name) {
        String message = mapper.transform(name);
        return ResponseEntity
                .ok()
                .body(message);
    }
}