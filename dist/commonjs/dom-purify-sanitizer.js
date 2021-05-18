"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMPurifySanitizer = void 0;
var aurelia_templating_resources_1 = require("aurelia-templating-resources");
var aurelia_logging_1 = require("aurelia-logging");
var DOMPurify = require("dompurify");
var domPurifyNotified = false;
var DOMPurifySanitizer = (function (_super) {
    __extends(DOMPurifySanitizer, _super);
    function DOMPurifySanitizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOMPurifySanitizer.prototype.sanitize = function (input) {
        if (!domPurifyNotified) {
            aurelia_logging_1.getLogger('dompurify-sanitizer').debug("Using DOMPurify instead of Aurelia's default sanitizer");
            domPurifyNotified = true;
        }
        return DOMPurify.sanitize(input, DOMPurifySanitizer.defaultConfig);
    };
    return DOMPurifySanitizer;
}(aurelia_templating_resources_1.HTMLSanitizer));
exports.DOMPurifySanitizer = DOMPurifySanitizer;

//# sourceMappingURL=dom-purify-sanitizer.js.map
