C# (sharp) – Calculate Execution Time
======
 
![alt text](screenshots/170919162910499.png)
 
Stopwatch is designed for this purpose, and is one of the best way to measure time execution in .NET.
 

 
## Examples
 
Here is a simple usecase.
 
```
var watch = System.Diagnostics.Stopwatch.StartNew();
// the code that you want to measure comes here
watch.Stop();
var elapsedMs = watch.ElapsedMilliseconds;
```
 
Do not use DateTimes to measure time execution in .NET.
 
“It is worth mentioning that DateTime.Now often is quite a bit slower than DateTime.UtcNow due to the work that has to be done with timezones, DST and such.
 
DateTime.UtcNow typically has a resolution of 15 ms. See John Chapman’s blog post about DateTime.Now precision for a great summary.”
 
You can also check multiples times before you stop the watcher.
 
```
long step1ElapsedMilliseconds;
long step2ElapsedMilliseconds;
var watch = System.Diagnostics.Stopwatch.StartNew();
 
// the code that you want to measure comes here 1/2
step1ElapsedMilliseconds = watch.ElapsedMilliseconds;
 
// the code that you want to measure comes here 2/2
step2ElapsedMilliseconds = watch.ElapsedMilliseconds;
 
watch.Stop();
Debug.Log("Execution time for step 1 in m: "
    + step1ElapsedMilliseconds );
Debug.Log("Execution time for step 2 in m: "
    + (step2ElapsedMilliseconds - step1ElapsedMilliseconds) );
Debug.Log("Total Execution time in ms: "
    + watch.ElapsedMilliseconds);
```
 
## Source
 
[https://github.com/DamienFremont/blog/tree/master/20170919-c-sharp-calculate-execution-time](https://github.com/DamienFremont/blog/tree/master/20170919-c-sharp-calculate-execution-time)
https://github.com/DamienFremont/blog/tree/master/20170919-c-sharp-calculate-execution-time
 
## References
 
[https://stackoverflow.com/questions/14019510/calculate-the-execution-time-of-a-method](https://stackoverflow.com/questions/14019510/calculate-the-execution-time-of-a-method)
https://stackoverflow.com/questions/14019510/calculate-the-execution-time-of-a-method
 
 
## Origin
[https://damienfremont.com/2017/09/19/c-sharp-calculate-execution-time/](https://damienfremont.com/2017/09/19/c-sharp-calculate-execution-time/)
 
