import { HTMLSanitizer } from 'aurelia-templating-resources';
import * as DOMPurify from 'dompurify';
export declare class DOMPurifySanitizer extends HTMLSanitizer {
    static defaultConfig: DOMPurify.Config;
    sanitize(input: any): any;
}
