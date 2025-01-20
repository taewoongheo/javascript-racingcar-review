import { isNotExceedLength } from '../../src/lib/utils.js';

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
});
