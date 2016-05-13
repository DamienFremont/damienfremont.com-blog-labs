From JUnit3 to Junit4
======
 
![alt text](screenshots/160513133323986.jpg)
 
A post about simple JUnit tests. Unit testing is necessary, but reduce its volume (source test) is always interresting … it reduces development and maintenance tasks (code analyzer tools are your best friends). We need tools : a code analyzer : PMD, and … a testing framework : JUnit.
 

 
We will do the following steps :
 
* write an old-fashion JUnit3 test class
* use JUnit4 new features
* apply PMD on it
* rewrite the test
 
This is the Class-to-test : a simple class providing a “divide()” method, and sometimes it throws an ArithmeticException ! (will test it)
 
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
 
And now, some test classes !
 
## 1st iteration, write an old-fashion JUnit3 test class
 
```java
package com.dfremont.blog;
 
import junit.framework.TestCase;
 
public class JUnit3Test extends TestCase {
 
    public void testDivide() {
        // Arrange
        ClassToTest classToTest = new ClassToTest();
        int param1 = 10;
        int param2 = 2;
        // Act
        int result = classToTest.divide(param1, param2);
        // Assert
        assertEquals("ok", 5, result);
    }
 
    public void testDivideValueWith0() {
        // Arrange
        ClassToTest classToTest = new ClassToTest();
        int param1 = 10;
        int param2 = 0;
        // Act
        try {
            classToTest.divide(param1, param2);
            fail("expected error!");
        } catch (ArithmeticException e) {
            // Assert
            assertEquals("Division by zero prohibited!", e.getMessage());
        }
    }
}
```
 
Very simple to read/understand, but it smells very bad :
PROS : compartmented tests
CONS : “Arrange” section fails to clarify the test. The “try/catch” is verbose, and dangerous if you forgot to put a fail() in your try clause. Because if the method call doesn’t fail, the test is still at succes status (despite the fact that we want to assert the opposite)
 
## 2nd iteration, apply JUnit4 it.
 
```java
package com.dfremont.blog;
 
import static org.junit.Assert.assertEquals;
 
import org.junit.Test;
 
public class JUnit4Step4NewFeaturesTest {
 
    private static ClassToTest classToTest = new ClassToTest();
 
    @Test
    public void testDivideValue() {
        // Act
        final int result = classToTest.divide(10, 2);
        // Assert
        assertEquals("Result wrong value!", 5, result);
    }
 
    @Test(expected = ArithmeticException.class)
    public void testDivideValueWith0() {
        // Act
        classToTest.divide(10, 0);
    }
}
```
 
Shorter …Try/catch gone, but unreadable to such a simple case. and it’s not shorter !
PROS: clean
CONS: but no line recovered
 
## 3rd iteration, use JUnit4 new features
 
```java
</pre>
package com.dfremont.blog;
 
import static org.junit.Assert.assertEquals;
 
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
 
public class JUnit4Step3NewFeaturesTest {
 
    private static ClassToTest classToTest = new ClassToTest();
 
    @Rule
    public final ExpectedException exception = ExpectedException.none();
 
    @Test
    public void testDivideValue() {
        // Act
        final int result = classToTest.divide(10, 2);
        // Assert
        assertEquals("Result wrong value!", 5, result);
    }
 
    @Test
    public void testDivideValueWith0() {
        // Arrange
        exception.expect(ArithmeticException.class);
        exception.expectMessage("Division by zero prohibited!");
        // Act
        classToTest.divide(10, 0);
    }
}
<pre>
```
 
Try/catch gone, but unreadable to such a simple case. and it’s not shorter !
PROS: clean
CONS: but no line recovered
 
## Conclusion
 
Why so much effort? To reduce code size …but above all, to make each line of code so indispensable, that the developer maintaining this code and can not introduce regressions in these tests.
 
For example, by commenting “dispensable” sections :
 
```java
package com.dfremont.blog;
 
import org.junit.Test;
 
public class JUnit4WrongTest {
 
    @Test
    @SuppressWarnings("unused")
    public void testDivideValue() {
        // Arrange
        ClassToTest classToTest = new ClassToTest();
        int param1 = 10;
        int param2 = 2;
        // Act
        int result = classToTest.divide(param1, param2);
        // Assert
        // assertEquals(5, result);
    }
 
    @Test
    public void testDivideValueWith0() {
        // Arrange
        ClassToTest classToTest = new ClassToTest();
        int param1 = 10;
        int param2 = 0;
        // Act
        try {
            classToTest.divide(param1, param2);
            // fail("Expected error!");
        } catch (ArithmeticException e) {
            // Assert
            // assertEquals("Wrong Exc msg!", "Division by zero prohibited!",
            // e.getMessage());
        }
    }
}
```
 
## View source code
 
[https://github.com/damienfremont/blog/tree/master/20120227-junit3_to_junit4](https://github.com/damienfremont/blog/tree/master/20120227-junit3_to_junit4)
https://github.com/damienfremont/blog/tree/master/20120227-junit3_to_junit4
 
