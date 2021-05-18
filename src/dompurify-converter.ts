
import { valueConverter } from 'aurelia-binding';
import { DOMPurifySanitizer } from './dompurify-sanitizer';
import { autoinject } from 'aurelia-dependency-injection';

@valueConverter('dompurify')
@autoinject
export class DOMPurifyValueConverter {
  constructor(
    private domPurifySanitizer: DOMPurifySanitizer
  ) {}

  toView(untrustedMarkup: any, config: DOMPurify.Config) {
    if (untrustedMarkup === null || untrustedMarkup === undefined) {
      return null;
    }
    
    return this.domPurifySanitizer.sanitize(untrustedMarkup, config);
  }
}
