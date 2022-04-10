# NODE PRINTER ALL

Node.js module for thermal printers.

<a href="https://github.com/Klemen1337/node-thermal-printer/">🔗 node-thermal-printer</a> <a href="https://github.com/tojocky/node-printer/">🔗 node-printer</a>
<p>🚀 libs used to compose this module</p>

### Installation
```bash
$ npm install node-printer-all
```
or
```bash
$ yarn add node-printer-all
```
### Features
```ts
const Printer =  require("node-printer-all");

let print = Printer(
    {
        type: PrinterTypes.STAR,                                  // Printer type: 'star' or 'epson'
        interface: 'tcp://xxx.xxx.xxx.xxx',                       // Printer interface
        characterSet: 'SLOVENIA',                                 // Printer character set - default: SLOVENIA
        removeSpecialCharacters: false,                           // Removes special characters - default: false
        lineCharacter: "=",                                       // Set character for lines - default: "-"
        options:{                                                 // Additional options
            timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
        }
    }
)
```
or
```ts
import {Printer} from "node-printer-all";

let print = Printer(
    {
        type: PrinterTypes.STAR,                                  // Printer type: 'star' or 'epson'
        interface: 'tcp://xxx.xxx.xxx.xxx',                       // Printer interface
        characterSet: 'SLOVENIA',                                 // Printer character set - default: SLOVENIA
        removeSpecialCharacters: false,                           // Removes special characters - default: false
        lineCharacter: "=",                                       // Set character for lines - default: "-"
        options:{                                                 // Additional options
            timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
        }
    }
)

```
### To understand more about the functions access node-thermal-printer



## How to run examples

Network printer
```bash
node examples/example.js tcp://xxx.xxx.xxx.xxx
```
Pritner name via Printer module
```bash
node examples/example.js 'printer:My Printer'
```
Local port or file
```bash
node examples/example.js '\\.\COM1'
```



