package com.damienfremont.blog.step5Final;

import org.springframework.stereotype.Component;

@Component
public class GoodbyeValidator5 {

    public boolean isValid(String name) {
        if (name == null) {
            return false;
        }
        if (name.length() < 3) {
            return false;
        }
        return true;
    }
}
