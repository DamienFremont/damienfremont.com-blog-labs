From JUnit3 to Junit4
======
 
![alt text](screenshots/160506135702408.jpg)
 
A post about simple JUnit tests. Unit testing is necessary, but reduce its volume (source test) is always interresting … it reduces development and maintenance tasks (code analyzer tools are your best friends). We need tools : a code analyzer : PMD, and … a testing framework : JUnit.
 

 
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
 
