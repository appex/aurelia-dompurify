# `aurelia-dompurify`

This Aurelia plugin replaces the built in `HTMLSanitizer` implementation with a DOMPurify based implementation.

The default sanitizer should not be used, as it is not meant for production use, as the [official documentation states](https://aurelia.io/docs/binding/basics#element-content).

## Usage
The plugin needs to be added before the call to `standardConfiguration()`:
```typescript
  aurelia.use
    .plugin(PLATFORM.moduleName('aurelia-dompurify')) // HERE
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));
