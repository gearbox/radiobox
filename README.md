# RadioBox

This stuff turns your Raspberry Pi into internet-radio box.
It wraps MPD and provides Web-UI for controlling it's playback and volume.

Since commit `#28` RadioBox also uses 8 GPIO pins to control playback and indicate current player state.
The pins are:
* 3 Input pins (for button switches)
* 2 Output pins for LEDs
* 1 Output pin for smooth LED blinking
* +3.3V
* Ground

The `schematic.png` shows how it is supposed to be implemented.
![schematic.png](./schematic.png) 

Input and output pins are to be specified in `config.json` file. 

#### Building 

Checkout from Github repository to your PC/Mac and run
```
npm install
npm run prod
```
By default, output directory is `./target`. You can change it in `webpackfile.js`

#### Installing

*I mean that Nodejs and MPD have been installed and configured already.*

First, copy files from output directory anywhere to your Raspberry Pi. Then install needed Nodejs modules
```
npm install http express socket.io mpc-js rpi-gpio
```

#### Configuring

The `config.json` provides all required settings as a JSON object.
The `stations` field is array of `[title, url]` pairs.
The `pins` field contains pin numbers (*not names!*) used in this project.
The `timeouts` field describes, how fast LEDs will blink and how button long press will be handled.
These two fields can be missed, empty of partially filled (in case if you do not need full functionality).

#### Running
```
sudo nodejs index.js 
```
Or create service using systemctl or init.d.

Http- and WebSocket- servers will run at port 80 (so you need `sudo`).
Now browse 
```
http://<your_raspberry_ip>/
``` 
or 
```
http://<your_raspberry_hostname>/
``` 
and enjoy your favorite stations!