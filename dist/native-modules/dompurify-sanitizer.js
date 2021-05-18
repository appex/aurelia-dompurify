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
import { HTMLSanitizer } from 'aurelia-templating-resources';
import { getLogger } from 'aurelia-logging';
import * as DOMPurify from 'dompurify';
var domPurifyNotified = false;
var DOMPurifySanitizer = (function (_super) {
    __extends(DOMPurifySanitizer, _super);
    function DOMPurifySanitizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOMPurifySanitizer.prototype.sanitize = function (input, config) {
        if (!domPurifyNotified) {
            getLogger('dompurify-sanitizer').debug("Using DOMPurify instead of Aurelia's default sanitizer");
            domPurifyNotified = true;
        }
        return DOMPurify.sanitize(input, config !== null && config !== void 0 ? config : DOMPurifySanitizer.defaultConfig);
    };
    return DOMPurifySanitizer;
}(HTMLSanitizer));
export { DOMPurifySanitizer };

//# sourceMappingURL=dompurify-sanitizer.js.map
