import { Container, FrameworkConfiguration } from 'aurelia-framework';
import { HTMLSanitizer, SanitizeHTMLValueConverter } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dom-purify-sanitizer';

export function configure(frameworkConfiguration: FrameworkConfiguration, config?: DOMPurify.Config): void {
  DOMPurifySanitizer.defaultConfig = config;

  if (frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML']) {
    frameworkConfiguration.aurelia.resources['valueConverters']['sanitizeHTML'] = frameworkConfiguration.container.get(SanitizeHTMLValueConverter);
  }
}

HTMLSanitizer['get'] = (container: Container) => {
  return new DOMPurifySanitizer();
}
HTMLSanitizer['protocol:aurelia:resolver'] = true;

SanitizeHTMLValueConverter['get'] = (container: Container) => {
  return new SanitizeHTMLValueConverter(container.get(HTMLSanitizer));
}
SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;

export { DOMPurifySanitizer };
