var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { valueConverter } from 'aurelia-binding';
import { DOMPurifySanitizer } from './dompurify-sanitizer';
import { autoinject } from 'aurelia-dependency-injection';
var DOMPurifyValueConverter = (function () {
    function DOMPurifyValueConverter(domPurifySanitizer) {
        this.domPurifySanitizer = domPurifySanitizer;
    }
    DOMPurifyValueConverter.prototype.toView = function (untrustedMarkup, config) {
        if (untrustedMarkup === null || untrustedMarkup === undefined) {
            return null;
        }
        return this.domPurifySanitizer.sanitize(untrustedMarkup, config);
    };
    DOMPurifyValueConverter = __decorate([
        valueConverter('dompurify'),
        autoinject,
        __metadata("design:paramtypes", [DOMPurifySanitizer])
    ], DOMPurifyValueConverter);
    return DOMPurifyValueConverter;
}());
export { DOMPurifyValueConverter };

//# sourceMappingURL=dompurify-converter.js.map
