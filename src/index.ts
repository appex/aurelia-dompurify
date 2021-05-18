import { Container, FrameworkConfiguration } from 'aurelia-framework';
import { HTMLSanitizer, SanitizeHTMLValueConverter } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dompurify-sanitizer';
import { DOMPurifyValueConverter } from './dompurify-converter';

export function configure(frameworkConfiguration: FrameworkConfiguration, config?: DOMPurify.Config): void {
  DOMPurifySanitizer.defaultConfig = config;

  frameworkConfiguration.globalResources(DOMPurifyValueConverter);

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
