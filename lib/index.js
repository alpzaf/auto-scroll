"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("./plugin");
var plugin = new plugin_1.Plugin({
    duration: 500,
    easing: 'ease-in-out',
    sections: {
        parentClass: 'parent-element',
        childClass: 'child-element'
    }
});
plugin.init();
