import { HTMLSanitizer } from "aurelia-templating-resources";
import { getLogger } from 'aurelia-logging';
import * as DOMPurify from "dompurify";

let needsToNotify = true;

export class DOMPurifySanitizer extends HTMLSanitizer {
  public sanitize(input: any): any {

    if (needsToNotify) {
      needsToNotify = false;

      getLogger('dompurify-sanitizer').debug(`Using DOMPurify instead of Aurelia's default sanitizer`);
    }

    return DOMPurify.sanitize(input);
  }
}
