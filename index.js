"use strict";
const ThermalPrinter = require("node-thermal-printer").printer;
module.exports.Printer = DatePrinter;
function DatePrinter(config) {
    if (config.interface.includes("printer") || config.interface.includes("\\.")) {
        return new ThermalPrinter(Object.assign(Object.assign({}, config), { driver: require('../lib/printer') }));
    }
    else {
        return new ThermalPrinter(Object.assign({}, config));
    }
}
//# sourceMappingURL=index.js.map