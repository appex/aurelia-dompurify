import { HTMLSanitizer, SanitizeHTMLValueConverter } from 'aurelia-templating-resources';
import { DOMPurifySanitizer } from './dom-purify-sanitizer';
export function configure(config) {
    if (config.aurelia.resources['valueConverters']['sanitizeHTML']) {
        config.aurelia.resources['valueConverters']['sanitizeHTML'] = config.container.get(SanitizeHTMLValueConverter);
    }
}
HTMLSanitizer['get'] = function (container) {
    return new DOMPurifySanitizer();
};
HTMLSanitizer['protocol:aurelia:resolver'] = true;
SanitizeHTMLValueConverter['get'] = function (container) {
    return new SanitizeHTMLValueConverter(container.get(DOMPurifySanitizer));
};
SanitizeHTMLValueConverter['protocol:aurelia:resolver'] = true;
export { DOMPurifySanitizer };

//# sourceMappingURL=index.js.map
