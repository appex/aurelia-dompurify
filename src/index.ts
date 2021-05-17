import { Container, FrameworkConfiguration } from 'aurelia-framework';
import { HTMLSanitizer, SanitizeHTMLValueConverter } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dom-purify-sanitizer';

export function configure(config: FrameworkConfiguration): void {
  if (config.aurelia.resources['valueConverters']['sanitizeHTML']) {
    config.aurelia.resources['valueConverters']['sanitizeHTML'] = config.container.get(SanitizeHTMLValueConverter);
  }
}

HTMLSanitizer['get'] = (container: Container) => {
  return new DOMPurifySanitizer();
}
HTMLSanitizer['protocol:aurelia:resolver'] = true;

SanitizeHTMLValueConverter['get'] = (container: Container) => {
  return new SanitizeHTMLValueConverter(container.get(DOMPurifySanitizer));
}
SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;

export { DOMPurifySanitizer };
