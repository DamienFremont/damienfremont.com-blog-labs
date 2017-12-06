HowTo JS – Node Debug in Visual Studio Code
======
 
![alt text](screenshots/171206223012922.jpg)
 
Visual Studio Code has support for JavaScript and out-of-the-box Node.js debugging. Here’s how.
 

 
## Steps
 
* open project
* install
* start
* stop
* debug mode start
* debug code
* debug mode stop
 
## Open project
 
Start VSC -> File -> Open Folder -> Select Folder
 
![alt text](screenshots/171206223013409.png)
 

 
![alt text](screenshots/171206223014507.png)
 

 
![alt text](screenshots/171206223015421.png)
 

 
## Install
 
View -> Integrated Terminal -> “npm install”
 
![alt text](screenshots/171206223016109.png)
 

 
![alt text](screenshots/171206223017336.png)
 

 
![alt text](screenshots/171206223018269.png)
 

 
## Start
 
Integrated Terminal -> “npm start”
 
Start Chrome -> type “localhost:3000”
 
![alt text](screenshots/171206223019126.png)
 

 
![alt text](screenshots/171206223019766.png)
 

 
![alt text](screenshots/171206223020505.png)
 

 
## Stop
 
Integrated Terminal -> Ctrl+C  -> “Y”+Return
 
![alt text](screenshots/171206223020854.png)
 

 
## Debug Mode Start
 
Debug Icon -> Settings -> NodeJS -> launch.json -> Save -> Debug Start Icon
 
launch.json
 
```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/server.js"
        }
    ]
}
```
 
![alt text](screenshots/171206223021545.png)
 

 
![alt text](screenshots/171206223022300.png)
 

 
![alt text](screenshots/171206223023082.png)
 

 
![alt text](screenshots/171206223023841.png)
 

 
![alt text](screenshots/171206223025241.png)
 

 
 
 
## Debug Code
 
Explorer Icon -> server.js -> add breakpoitn by double-clicking on line 7
 
Open Browser -> refresh (F5)
 
Open VSC -> Hover on source vars & params -> press Debug Continue Icon (F5)
 
![alt text](screenshots/171206223026335.png)
 

 
![alt text](screenshots/171206223027446.png)
 

 
![alt text](screenshots/171206223028388.png)
 

 
![alt text](screenshots/171206223029155.png)
 

 
![alt text](screenshots/171206223029688.png)
 

 
![alt text](screenshots/171206223029948.png)
 

 
![alt text](screenshots/171206223031066.png)
 

 
## Debug Mode Stop
 
Debug Stop Icon
 
![alt text](screenshots/171206223031912.png)
 

 
## Source on GitHub
 
[https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode](https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode)
https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode
 
## References
 
[https://code.visualstudio.com/docs/nodejs/nodejs-tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
 
 
 
 
## Origin
[https://damienfremont.com/2017/12/06/howto-js-node-debug-visual-studio-code/](https://damienfremont.com/2017/12/06/howto-js-node-debug-visual-studio-code/)
 
