import {DOMPurifyValueConverter} from '../../src/dompurify-converter';
import {DOMPurifySanitizer} from '../../src/dompurify-sanitizer';

describe('DOMPurifyValueConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new DOMPurifyValueConverter(new DOMPurifySanitizer());
  });

  it('defaultSanitizer should remove script tags', () => {
    let a = '<script src="http://www.evil.org"></script>',
        b = '<div><script src="http://www.evil.org"></script></div>',
        c = 'foo <script src="http://www.evil.org"></script> bar',
        d = '<div></div>',
        e = 'foo bar';

    expect(converter.toView('')).toBe('');
    expect(converter.toView(null)).toBe(null);
    expect(converter.toView(undefined)).toBe(null);
    expect(converter.toView(a)).toBe('');
    expect(converter.toView(b)).toBe('<div></div>');
    expect(converter.toView(c)).toBe('foo  bar');
    expect(converter.toView(d)).toBe('<div></div>');
    expect(converter.toView(e)).toBe('foo bar');
  });
});
