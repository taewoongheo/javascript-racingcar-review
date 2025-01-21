import { Console } from '@woowacourse/mission-utils';

/**
 *
 * @param {string} query
 * @returns {Promise<string>}
 */
export async function input(query) {
  return await Console.readLineAsync(`${query}\n`);
}

/**
 *
 * @param {string} query
 */
export function output(query) {
  Console.print(`${query}`);
}
