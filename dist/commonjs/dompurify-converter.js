"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMPurifyValueConverter = void 0;
var aurelia_binding_1 = require("aurelia-binding");
var dompurify_sanitizer_1 = require("./dompurify-sanitizer");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var DOMPurifyValueConverter = (function () {
    function DOMPurifyValueConverter(domPurifySanitizer) {
        this.domPurifySanitizer = domPurifySanitizer;
    }
    DOMPurifyValueConverter.prototype.toView = function (untrustedMarkup, config) {
        return this.domPurifySanitizer.sanitize(untrustedMarkup, config);
    };
    DOMPurifyValueConverter = __decorate([
        aurelia_binding_1.valueConverter('dompurify'),
        aurelia_dependency_injection_1.autoinject,
        __metadata("design:paramtypes", [dompurify_sanitizer_1.DOMPurifySanitizer])
    ], DOMPurifyValueConverter);
    return DOMPurifyValueConverter;
}());
exports.DOMPurifyValueConverter = DOMPurifyValueConverter;

//# sourceMappingURL=dompurify-converter.js.map
