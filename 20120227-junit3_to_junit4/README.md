From JUnit3 to Junit4
======
 
![alt text](screenshots/160506131855480.jpg)
 
 
We will do the following steps :
 
```java
package com.dfremont.blog;
 
public class ClassToTest {
 
    public int divide(final int argValue, final int argDivider) {
        if (argDivider == 0) {
            throw new ArithmeticException("Division by zero prohibited!");
        }
        return (argValue / argDivider);
    }
}
```
 
