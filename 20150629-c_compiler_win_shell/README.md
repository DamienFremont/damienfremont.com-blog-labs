Simple GNU C Compiler With NIX Shell on windows
======
 
![alt text](screenshots/160520005832369.png)
 
This tutorial is intended for developers who want to start developing in C on Windows, without having to use a heavy software like VisualStudio. And having a Linux like shell of course.
 

 
# How to
 
Download MinGW for Windows at:
 
[http://sourceforge.net/projects/mingw/files/latest/download?source=files](http://sourceforge.net/projects/mingw/files/latest/download?source=files)
http://sourceforge.net/projects/mingw/files/latest/download?source=files
 
![alt text](screenshots/160520005832656.jpg)
 

 
Execute the MinGW installer
 
![alt text](screenshots/160520005832940.jpg)
 

 
in admin mode
 
![alt text](screenshots/160520005833336.jpg)
 

 
Follow the installer steps
 
![alt text](screenshots/160520005833580.jpg)
 

 
![alt text](screenshots/160520005833884.jpg)
 

 
![alt text](screenshots/160520005834210.jpg)
 

 
Then close the window
 
![alt text](screenshots/160520005834493.jpg)
 

 
A new winows appears : the installer
 
![alt text](screenshots/160520005834853.jpg)
 

 
select packages to install :
 
* dev-tools
* base (c compiler)
* g++ (c++ compiler)
* msys (NIX shell)
 
![alt text](screenshots/160520005835113.jpg)
 

 
![alt text](screenshots/160520005835360.jpg)
 

 
Then click on Installation menu, update catalogue
 
![alt text](screenshots/160520005835596.jpg)
 

 
A new window appears with some gibberish text. Click on Review
 
![alt text](screenshots/160520005835854.jpg)
 

 
Click on Apply
 
![alt text](screenshots/160520005836105.jpg)
 

 
Then wait for the end of the download (30 secondes)
 
![alt text](screenshots/160520005836360.jpg)
 

 
After, close the installer
 
![alt text](screenshots/160520005836580.jpg)
 

 
Explorer your C: harddrive. A new MinGW folder appears
 
![alt text](screenshots/160520005836912.jpg)
 

 
Click on C:\MinGW\msys\1.0\msys.bat
 
![alt text](screenshots/160520005837174.jpg)
 

 
A new NIX shell appears.
 
![alt text](screenshots/160520005837426.jpg)
 

 
Create a .profile file inside (on Windows it’s not possible to create a file starting with “.”, so copy a file from my github or create it with touch command with the NIX shell)
 
```
touch .profile
```
 
![alt text](screenshots/160520005837666.jpg)
 

 
Close it. It’s just for the creation of the default user home folder.
 
![alt text](screenshots/160520005837963.jpg)
 

 
A new home folder appears at C:\MinGW\msys\1.0\home\
 
![alt text](screenshots/160520005838183.jpg)
 

 
Open it. It contains your home folder (in my case: C:\MinGW\msys\1.0\home\Damien)
 
![alt text](screenshots/160520005838451.jpg)
 

 
Open .profile with your text editor and add this :
 
.profile
 
```
# Cd to my windows home:
cd /c/Users/Damien
```
 
![alt text](screenshots/160520005838698.jpg)
 

 
Save it. And start msys.bat again
 
![alt text](screenshots/160520005838957.jpg)
 

 
At NIX shell, type the ls command.
 
```
 
```
 
The result is the content of your Windows user folder, instead of the NIX C:\MinGW\msys\1.0\home\***
 
![alt text](screenshots/160520005839173.jpg)
 

 
Close this windows.
 
Then create a shortcut of msys.bat to your desktop or set it in your Windows path env.
 
![alt text](screenshots/160520005839418.jpg)
 

 
![alt text](screenshots/160520005839693.jpg)
 

 
Your environnement is ready!
 
# Demo
 
Create a c source code file in your user folder with your text editor
 
test.c
 
```
#include <stdio.h>
 
int main(){
    printf("Hello World!");
    return(0);
}
```
 
![alt text](screenshots/160520005839935.jpg)
 

 
![alt text](screenshots/160520005840181.jpg)
 

 
Launch msys.bat
 
![alt text](screenshots/160520005840417.jpg)
 

 
A new NIX shell appears. Type the compile command gcc on your new source file.
 
```
gcc test.c
```
 
![alt text](screenshots/160520005840615.jpg)
 

 
Execute the generated executable with :
a NIX command :
 
```
./a.exe
```
 
![alt text](screenshots/160520005840855.jpg)
 

 
or a Windows click on the .exe
 
![alt text](screenshots/160520005841115.jpg)
 

 
or a windows command line
 
```
a.exe
```
 
![alt text](screenshots/160520005841350.jpg)
 

 
# Conclusion
 
MinGW is a simple and friendly tool for those who seek to program on a Linux like shell on Windows.
 
…BUT the MinGW documentation is very harsh with newbies, installer steps are very strange for a Windows user and the downloading package part required a lot of time (not easy in offline mode).
 
It’s not a turnkey solution, but it does the job.
 
# Source
 
[https://github.com/DamienFremont/blog/tree/master/20150625-c_compiler_win_shell](https://github.com/DamienFremont/blog/tree/master/20150625-c_compiler_win_shell)
https://github.com/DamienFremont/blog/tree/master/20150625-c_compiler_win_shell
 
# References
 
[https://assos.centrale-marseille.fr/ginfo/tutoriels/ma%C3%AEtrisez-la-compilation-cc-sous-windows](https://assos.centrale-marseille.fr/ginfo/tutoriels/ma%C3%AEtrisez-la-compilation-cc-sous-windows)
https://assos.centrale-marseille.fr/ginfo/tutoriels/ma%C3%AEtrisez-la-compilation-cc-sous-windows
 
[http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks](http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks)
http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks
 
[http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks](http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks)
http://stackoverflow.com/questions/7000524/changing-mingw-startup-directory-or-creating-mingw-symlinks
 
 
[https://damienfremont.com/2015/06/25/simple-gnu-c-compiler-with-nix-shell-on-windows/](https://damienfremont.com/2015/06/25/simple-gnu-c-compiler-with-nix-shell-on-windows/)
 
