import {
  isNotExceedLength,
  isNumericString,
  isPositveNumberString,
} from '../../src/lib/utils.js';

describe('utlis', () => {
  describe('isNotExceedLength', () => {
    it('입력된 문자열이 기준 길이 이하면 true를 반환한다', () => {
      const input = 'pobi';
      const length = 5;

      const result = isNotExceedLength(input, length);

      expect(result).toBe(true);
    });
    it('입력된 문자열이 기준 길이를 초과하면 false를 반환한다', () => {
      const input = 'pobi';
      const length = 3;

      const result = isNotExceedLength(input, length);

      expect(result).toBe(false);
    });
  });
  describe('isNumericString', () => {
    it('숫자로 변경할 수 없는 문자열이 입력되면 false를 반환한다', () => {
      const input = 'abc';

      const result = isNumericString(input);

      expect(result).toBe(false);
    });
    it('숫자로 변경될 수 있는 문자열이 입력되면 true를 반환한다', () => {
      const input = '1';

      const result = isNumericString(input);

      expect(result).toBe(true);
    });
  });
  describe('isPositiveNumberString', () => {
    it('0보다 작은 문자열이 입력되면 false를 반환한다', () => {
      const input = '-1';

      const result = isPositveNumberString(input);

      expect(result).toBe(false);
    });
    it('0보다 큰 문자열이 입력되면 true를 반환한다', () => {
      const input = '1';

      const result = isPositveNumberString(input);

      expect(result).toBe(true);
    });
    it('0인 문자열이 입력되면 true를 반환한다', () => {
      const input = '0';

      const result = isPositveNumberString(input);

      expect(result).toBe(true);
    });
  });
});
