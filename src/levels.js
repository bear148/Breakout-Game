import Brick from './brick.js';
import Brick2 from './brick2.js';
import Brick3 from './brick3.js';
import { randInt } from './randInt.js';

export function buildLevel(game, level) {
  let bricks = [];
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
      if (brick === 2) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Brick2(game, position));
      }
      if (brick === 3) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Brick3(game, position));
      }
    });
  });
  return bricks;
}


export const level1 = [
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)]
];

export const level2 = [
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)]
];

export const level3 = [
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)]
];

export const level4 = [
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)],
  [randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3), randInt(0, 3)]
];