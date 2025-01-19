import input from '../../src/lib/view.js';
import { mockQuestions } from '../../src/lib/mockfn.js';

describe('view', () => {
  describe('input', () => {
    it('사용자로부터 입력받은 값을 반환한다', async () => {
      const inputs = ['pobi,woni,jun'];
      mockQuestions(inputs);

      const result = await input('입력');

      expect(result).toBe('pobi,woni,jun');
    });
  });
});
