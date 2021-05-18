# `aurelia-dompurify`

This Aurelia plugin replaces the built in `HTMLSanitizer` implementation with a [DOMPurify](https://github.com/cure53/DOMPurify) based implementation.

Aurelia's default sanitizer should *not* be used, as it is not meant for production use, as the [official documentation states](https://aurelia.io/docs/binding/basics#element-content).

Additionally, the plugin supplies a configurable value converter named `dompurify` for use cases where a default configuration isn't sufficient.

## Installing
```sh
npm i @appex/aurelia-dompurify
# or
yarn add @appex/aurelia-dompurify
```

## Using

Using DOMPurify's default values:
```typescript
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@appex/aurelia-dompurify'))
```

You can also override the default config. Refer to the [DOMPurify docs](https://github.com/cure53/DOMPurify#can-i-configure-dompurify) for more information.
```typescript
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@appex/aurelia-dompurify'), {ALLOWED_TAGS: ['b']})
```

The `dompurify` value converter is used like this:
```html
  <p innerHTML.bind="untrustedContent | dompurify"></p>
  <!-- Identical to using Aurelia's sanitizeHTML value converter -->
  <p innerHTML.bind="untrustedContent | sanitizeHTML"></p>
  <!-- With custom configuration -->
  <p innerHTML.bind="untrustedContent | dompurify: {ALLOWED_TAGS: ['i']}"></p>
```
