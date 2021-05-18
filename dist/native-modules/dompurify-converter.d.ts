/// <reference types="dompurify" />
import { DOMPurifySanitizer } from './dompurify-sanitizer';
export declare class DOMPurifyValueConverter {
    private domPurifySanitizer;
    constructor(domPurifySanitizer: DOMPurifySanitizer);
    toView(untrustedMarkup: any, config: DOMPurify.Config): any;
}
