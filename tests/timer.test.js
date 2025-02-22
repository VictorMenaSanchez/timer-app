import { startTimer } from '../src/timer';

test('startTimer debería decrementar el tiempo', () => {
  let time = 10;
  expect(startTimer(time)).toBeLessThan(10);
});