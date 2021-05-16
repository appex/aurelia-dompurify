# `aurelia-dompurify`

This Aurelia plugin replaces the built in `HTMLSanitizer` implementation with a DOMPurify based implementation.

The default sanitizer should not be used, as it is not meant for production use, as the [official documentation states](https://aurelia.io/docs/binding/basics#element-content).

## Usage
For now, this can't be used as a plugin, as the `HTMLSanitizer` implementation can't be reliably registered. Instead, do the following:
```typescript
import {DOMPurifySanitizer} from '@appex/aurelia-dompurify';
import { HTMLSanitizer } from 'aurelia-templating-resources';
// ...
  aurelia.use.singleton(HTMLSanitizer, DOMPurifySanitizer);
```
