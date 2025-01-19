// @ts-check

import { Console } from '@woowacourse/mission-utils';

/**
 *
 * @param {string} query
 * @returns {Promise<string>}
 */
export default async function input(query) {
  return await Console.readLineAsync(`${query}\n`);
}
