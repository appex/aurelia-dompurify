import { HTMLSanitizer } from 'aurelia-templating-resources';
import { getLogger } from 'aurelia-logging';
import * as DOMPurify from 'dompurify';

let domPurifyNotified = false;

export class DOMPurifySanitizer extends HTMLSanitizer {
  public static defaultConfig: DOMPurify.Config;
  
  public sanitize(input: any): any {
    if (!domPurifyNotified) {
      getLogger('dompurify-sanitizer').debug(`Using DOMPurify instead of Aurelia's default sanitizer`);
      domPurifyNotified = true;
    }

    return DOMPurify.sanitize(input, DOMPurifySanitizer.defaultConfig);
  }
}
