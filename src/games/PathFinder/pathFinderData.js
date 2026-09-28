// src/games/PathFinder/pathFinderData.js
// Verified puzzle layouts and test data for Path Finder variants:
// 3x3, 3x3-2, 3x3-3, 4x4, 5x5

import { Wv, lD, b_, layoutToBlocks, cloneBlocks } from './pathFinderLogic'

const n = (br, bc, shape, cells) =>
  lD(br, bc, shape, 0, 0, cells.map(c => ({ localR: c[0], localC: c[1], dir: c[2] })))

const straightR = (br, bc) => n(br, bc, 'straight', [[1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right']])
const straightL = (br, bc) => n(br, bc, 'straight', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left']])
const straightU = (br, bc) => n(br, bc, 'straight', [[0, 1, 'up'], [1, 1, 'up'], [2, 1, 'up']])

// --- 1. Variant: 3x3 ---
export const P3_MAP = {
  '0,1': 'up', '1,0': null, '1,1': 'upleft', '1,2': 'left',
  '1,3': 'right', '1,4': 'downright', '1,6': 'right', '1,7': 'downright',
  '2,4': 'down', '2,7': 'down', '3,4': 'up', '3,7': 'down',
  '4,0': 'right', '4,1': 'downright', '4,4': 'upleft', '4,5': 'left',
  '4,7': 'down', '5,1': 'down', '5,4': null, '5,7': 'down',
  '6,1': 'up', '6,4': 'down', '6,7': 'up', '7,0': null,
  '7,1': 'up', '7,2': null, '7,4': 'downright', '7,5': 'right',
  '7,6': 'right', '7,7': 'upright', '8,1': 'up'
}

const v3x3_blocks = layoutToBlocks(P3_MAP, 3)
const v3x3_practice = b_('practice_3x3', v3x3_blocks, 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3)

const v3x3 = {
  practice: v3x3_practice,
  games: [
    b_('game_1', cloneBlocks(v3x3_blocks), 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3),
    b_('game_2', cloneBlocks(v3x3_blocks), 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3),
    b_('game_3', cloneBlocks(v3x3_blocks), 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3),
    b_('game_4', cloneBlocks(v3x3_blocks), 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3),
    b_('game_5', cloneBlocks(v3x3_blocks), 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3)
  ]
}

// --- 2. Variant: 3x3-2 (Practice 2) ---
const v3x32_blocks = [
  straightL(0, 0),
  n(0, 1, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
  straightU(0, 2),
  n(1, 0, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
  n(1, 1, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
  n(1, 2, 'tshape', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left'], [2, 1, null]]),
  n(2, 0, 'plus', [[0, 1, 'up'], [1, 0, null], [1, 1, 'upleft'], [1, 2, 'left'], [2, 1, null]]),
  n(2, 1, 'tshape', [[0, 1, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
  n(2, 2, 'lshape', [[2, 1, 'up'], [1, 1, 'upright'], [1, 2, 'right']])
]

const v3x32 = {
  practice: b_('practice_3x3_2', v3x32_blocks, 12, { row: 4, col: 0 }, { row: 1, col: 8 }, true, 3),
  games: [
    b_('game_3x3_2', cloneBlocks(v3x32_blocks), 12, { row: 4, col: 0 }, { row: 1, col: 8 }, true, 3)
  ]
}

// --- 3. Variant: 3x3-3 (Practice 3) ---
const v3x33_blocks = [
  n(0, 0, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
  straightL(0, 1),
  Wv(0, 2, 'tshape', 1, 0),
  n(1, 0, 'lshape', [[0, 1, 'down'], [1, 1, 'downright'], [1, 2, 'right']]),
  n(1, 1, 'tshape', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright'], [2, 1, null]]),
  Wv(1, 2, 'plus', 0, 7),
  Wv(2, 0, 'tshape', 1, 0),
  n(2, 1, 'plus', [[0, 1, 'up'], [1, 0, null], [1, 1, 'up'], [1, 2, null], [2, 1, 'up']]),
  n(2, 2, 'lshape', [[1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']])
]

const v3x33 = {
  practice: b_('practice_3x3_3', v3x33_blocks, 12, { row: 7, col: 1 }, { row: 1, col: 8 }, true, 3),
  games: [
    b_('game_3x3_3', cloneBlocks(v3x33_blocks), 12, { row: 7, col: 1 }, { row: 1, col: 8 }, true, 3)
  ]
}

// --- 4. Variant: 4x4 ---
const v4x4_blocks = [
  straightR(0, 0),
  n(0, 1, 'tshape', [[1, 0, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
  straightU(0, 2),
  straightR(0, 3),
  straightU(1, 0),
  n(1, 1, 'tshape', [[0, 1, 'up'], [1, 0, null], [1, 1, 'upleft'], [1, 2, 'left']]),
  n(1, 2, 'lshape', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright']]),
  straightR(1, 3),
  n(2, 0, 'lshape', [[0, 1, 'down'], [1, 0, 'left'], [1, 1, 'downleft']]),
  straightR(2, 1),
  straightU(2, 2),
  straightR(2, 3),
  n(3, 0, 'plus', [[0, 1, 'down'], [1, 0, null], [1, 1, 'downright'], [1, 2, 'right'], [2, 1, null]]),
  straightR(3, 1),
  n(3, 2, 'tshape', [[0, 1, null], [1, 1, 'downleft'], [1, 2, 'left'], [2, 1, 'down']]),
  straightR(3, 3)
]

const v4x4 = {
  practice: b_('practice_4x4', v4x4_blocks, 16, { row: 7, col: 0 }, { row: 1, col: 11 }, true, 4),
  games: [
    b_('game_4x4', cloneBlocks(v4x4_blocks), 16, { row: 7, col: 0 }, { row: 1, col: 11 }, true, 4)
  ]
}

// --- 5. Variant: 5x5 ---
const v5x5_blocks = [
  n(0, 0, 'tshape', [[1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
  n(0, 1, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
  n(0, 2, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
  straightR(0, 3),
  straightR(0, 4),
  n(1, 0, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
  n(1, 1, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
  n(1, 2, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
  n(1, 3, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
  straightR(1, 4),
  n(2, 0, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
  straightR(2, 1),
  n(2, 2, 'plus', [[0, 1, null], [1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left'], [2, 1, null]]),
  n(2, 3, 'plus', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright'], [1, 2, null], [2, 1, null]]),
  n(2, 4, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
  n(3, 0, 'tshape', [[1, 0, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
  straightR(3, 1),
  n(3, 2, 'lshape', [[1, 1, 'downleft'], [1, 2, 'left'], [2, 1, 'down']]),
  straightL(3, 3),
  n(3, 4, 'lshape', [[0, 1, 'down'], [1, 0, 'left'], [1, 1, 'downleft']]),
  n(4, 0, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
  straightR(4, 1),
  n(4, 2, 'lshape', [[1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
  straightR(4, 3),
  straightR(4, 4)
]

const v5x5 = {
  practice: b_('practice_5x5', v5x5_blocks, 20, { row: 13, col: 0 }, { row: 1, col: 14 }, true, 5),
  games: [
    b_('game_5x5', cloneBlocks(v5x5_blocks), 20, { row: 13, col: 0 }, { row: 1, col: 14 }, true, 5)
  ]
}

export const VARIANTS = [
  { id: '3x3', label: '3×3', data: v3x3 },
  { id: '3x3-2', label: '3×3 Practice 2', data: v3x32 },
  { id: '3x3-3', label: '3×3 Practice 3', data: v3x33 },
  { id: '4x4', label: '4×4', data: v4x4 },
  { id: '5x5', label: '5×5', data: v5x5 }
]
