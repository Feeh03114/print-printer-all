const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

module.exports.Printer = DatePrinter;



interface PrinterTypes {
    EPSON: "epson",
    STAR: "star"
}

interface options{
    type?: PrinterTypes;
    interface: string;
    width?: number;
    characterSet?: string;
    lineCharacter?: string;
    removeSpecialCharacters?: boolean;
    options?: {
        timeout?: number
    };
}

function DatePrinter(config: options): typeof ThermalPrinter {
   return new ThermalPrinter({
        ...config,
        driver: require('../lib/printer'),
    });
}
