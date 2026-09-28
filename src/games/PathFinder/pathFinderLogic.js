// src/games/PathFinder/pathFinderLogic.js
// Core game engine for Accenture Path Finder:
// canonical shapes, rotation, flipping, ray-trace validator, and DFS solver.

export const ROTATE_CW = {
  right: 'down',
  down: 'left',
  left: 'up',
  up: 'right',
  upright: 'downright',
  downright: 'downleft',
  downleft: 'upleft',
  upleft: 'upright'
}

export const OPPOSITE = {
  right: 'left',
  left: 'right',
  up: 'down',
  down: 'up',
  upright: 'downleft',
  downleft: 'upright',
  downright: 'upleft',
  upleft: 'downright'
}

export const VEC = {
  right: [0, 1],
  left: [0, -1],
  up: [-1, 0],
  down: [1, 0]
}

export const DIAG = {
  downright: { right: 'down', down: 'right' },
  upright: { right: 'up', up: 'right' },
  downleft: { left: 'down', down: 'left' },
  upleft: { left: 'up', up: 'left' }
}

export const CARDINAL = {
  up: true,
  down: true,
  left: true,
  right: true
}

export function rotateArrow(arrow, times = 1) {
  if (!arrow) return null
  const count = ((times % 4) + 4) % 4
  let curr = arrow
  for (let i = 0; i < count; i++) {
    curr = ROTATE_CW[curr] || curr
  }
  return curr
}

export function rotatePos(row, col, times = 1) {
  let e = row
  let o = col
  const count = ((times % 4) + 4) % 4
  for (let i = 0; i < count; i++) {
    const tmp = 2 - e
    e = o
    o = tmp
  }
  return { row: e, col: o }
}

export const SHAPES = {
  straight: [
    [
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'right' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'left' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ]
  ],
  lshape: [
    [
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'downright' },
      { localRow: 2, localCol: 1, arrow: 'down' }
    ],
    [
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'upleft' },
      { localRow: 2, localCol: 1, arrow: 'up' }
    ]
  ],
  tshape: [
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'upleft' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'upright' },
      { localRow: 1, localCol: 2, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'right' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'downright' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'downleft' },
      { localRow: 1, localCol: 2, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'left' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ]
  ],
  plus: [
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 2, arrow: null },
      { localRow: 2, localCol: 1, arrow: 'up' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'upright' },
      { localRow: 1, localCol: 2, arrow: null },
      { localRow: 2, localCol: 1, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'right' },
      { localRow: 1, localCol: 2, arrow: 'right' },
      { localRow: 2, localCol: 1, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'downright' },
      { localRow: 1, localCol: 2, arrow: 'right' },
      { localRow: 2, localCol: 1, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 2, arrow: null },
      { localRow: 2, localCol: 1, arrow: 'down' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'downleft' },
      { localRow: 1, localCol: 2, arrow: 'left' },
      { localRow: 2, localCol: 1, arrow: 'down' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'left' },
      { localRow: 1, localCol: 2, arrow: 'left' },
      { localRow: 2, localCol: 1, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'upleft' },
      { localRow: 1, localCol: 2, arrow: null },
      { localRow: 2, localCol: 1, arrow: 'up' }
    ]
  ]
}

export function numVariants(shape) {
  return SHAPES[shape] ? SHAPES[shape].length : 1
}

export function variantCells(shape, rot = 0, flip = 0) {
  const vars = SHAPES[shape]
  if (!vars || vars.length === 0) return []
  const nVars = vars.length
  const f = ((flip % nVars) + nVars) % nVars
  const canonical = vars[f]
  return canonical.map(c => {
    const p = rotatePos(c.localRow, c.localCol, rot)
    return {
      localRow: p.row,
      localCol: p.col,
      arrow: rotateArrow(c.arrow, rot)
    }
  })
}

export function expandCells(localCells, blockRow, blockCol) {
  const result = []
  const map = {}
  localCells.forEach(lc => {
    map[`${lc.localRow},${lc.localCol}`] = lc.arrow
  })

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const key = `${r},${c}`
      const isDark = key in map
      result.push({
        row: 3 * blockRow + r,
        col: 3 * blockCol + c,
        isDark,
        arrow: isDark ? map[key] : null
      })
    }
  }
  return result
}

export function Wv(blockRow, blockCol, shapeType, rotateState = 0, flipState = 0) {
  const vCells = variantCells(shapeType, rotateState, flipState)
  return {
    id: `block_${blockRow}_${blockCol}`,
    blockRow,
    blockCol,
    shapeType,
    rotateState: ((rotateState % 4) + 4) % 4,
    flipState: ((flipState % numVariants(shapeType)) + numVariants(shapeType)) % numVariants(shapeType),
    cells: expandCells(vCells, blockRow, blockCol)
  }
}

export function lD(blockRow, blockCol, shapeType, rotateState = 0, flipState = 0, localCells = []) {
  const normLocalCells = localCells.map(c => ({
    localRow: c.localR !== undefined ? c.localR : c.localRow,
    localCol: c.localC !== undefined ? c.localC : c.localCol,
    arrow: c.dir !== undefined ? c.dir : c.arrow
  }))
  return {
    id: `block_${blockRow}_${blockCol}`,
    blockRow,
    blockCol,
    shapeType,
    rotateState: ((rotateState % 4) + 4) % 4,
    flipState: ((flipState % numVariants(shapeType)) + numVariants(shapeType)) % numVariants(shapeType),
    cells: expandCells(normLocalCells, blockRow, blockCol)
  }
}

export function fillBlocks(list, count) {
  const map = {}
  list.forEach(b => {
    map[`${b.blockRow}_${b.blockCol}`] = b
  })
  const res = []
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      const key = `${r}_${c}`
      if (map[key]) {
        res.push(map[key])
      } else {
        res.push(Wv(r, c, 'tshape', 0, 0))
      }
    }
  }
  return res
}

export function b_(id, blocks, minMoves, startCell, endCell, customLayout = true, blocksCount = 3) {
  return {
    id,
    gridSize: 3 * blocksCount,
    blocksCount,
    blocks,
    startCell,
    endCell,
    timeLimit: 240,
    minMoves,
    customLayout
  }
}

export function layoutToBlocks(map, count) {
  const blocks = []
  for (let br = 0; br < count; br++) {
    for (let bc = 0; bc < count; bc++) {
      const localCells = []
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const globalR = 3 * br + r
          const globalC = 3 * bc + c
          const key = `${globalR},${globalC}`
          if (key in map) {
            localCells.push({
              localRow: r,
              localCol: c,
              arrow: map[key]
            })
          }
        }
      }
      const darkCount = localCells.length
      let shapeType = 'straight'
      if (darkCount >= 5) shapeType = 'plus'
      else if (darkCount === 4) shapeType = 'tshape'
      else if (darkCount === 3) shapeType = 'lshape'

      blocks.push({
        id: `block_${br}_${bc}`,
        blockRow: br,
        blockCol: bc,
        shapeType,
        rotateState: 0,
        flipState: 0,
        cells: expandCells(localCells, br, bc)
      })
    }
  }
  return blocks
}

export function cloneBlocks(blocks) {
  return blocks.map(b => ({
    id: b.id,
    blockRow: b.blockRow,
    blockCol: b.blockCol,
    shapeType: b.shapeType,
    rotateState: b.rotateState ?? 0,
    flipState: b.flipState ?? 0,
    cells: b.cells.map(c => ({
      row: c.row,
      col: c.col,
      isDark: Boolean(c.isDark),
      arrow: c.arrow || null
    }))
  }))
}

export function matchCanonical(block) {
  const darkCells = block.cells.filter(c => c.isDark)
  const count = darkCells.length
  const nVars = numVariants(block.shapeType)
  const canonicalVars = SHAPES[block.shapeType]
  if (!canonicalVars) return null

  // Transform dark cells into sorted signature
  const targetKey = darkCells
    .map(c => `${c.row % 3},${c.col % 3}:${c.arrow || ''}`)
    .sort()
    .join('|')

  for (let r = 0; r < 4; r++) {
    for (let f = 0; f < nVars; f++) {
      const vCells = variantCells(block.shapeType, r, f)
      if (vCells.length !== count) continue
      const candKey = vCells
        .map(c => `${c.localRow},${c.localCol}:${c.arrow || ''}`)
        .sort()
        .join('|')
      if (candKey === targetKey) {
        return { rotateState: r, flipState: f }
      }
    }
  }
  return null
}

export function rotateBlock(block) {
  const cloned = {
    ...block,
    cells: block.cells.map(c => ({ ...c }))
  }
  const match = matchCanonical(cloned)
  if (match && SHAPES[cloned.shapeType]) {
    const nextRot = (match.rotateState + 1) % 4
    const vCells = variantCells(cloned.shapeType, nextRot, match.flipState)
    cloned.cells = expandCells(vCells, cloned.blockRow, cloned.blockCol)
    cloned.rotateState = nextRot
    cloned.flipState = match.flipState
  } else {
    cloned.cells = cloned.cells.map(cell => {
      if (!cell.isDark) return { ...cell }
      const localR = cell.row % 3
      const localC = cell.col % 3
      const np = rotatePos(localR, localC, 1)
      return {
        ...cell,
        row: 3 * cloned.blockRow + np.row,
        col: 3 * cloned.blockCol + np.col,
        arrow: rotateArrow(cell.arrow, 1)
      }
    })
    cloned.rotateState = ((cloned.rotateState || 0) + 1) % 4
  }
  return cloned
}

export function flipBlock(block) {
  const cloned = {
    ...block,
    cells: block.cells.map(c => ({ ...c }))
  }
  const nVars = numVariants(cloned.shapeType)
  if (cloned.shapeType === 'tshape' || cloned.shapeType === 'plus') {
    const match = matchCanonical(cloned)
    if (match) {
      const nextFlip = (match.flipState + 1) % nVars
      const vCells = variantCells(cloned.shapeType, match.rotateState, nextFlip)
      cloned.cells = expandCells(vCells, cloned.blockRow, cloned.blockCol)
      cloned.rotateState = match.rotateState
      cloned.flipState = nextFlip
      return cloned
    }
  }

  cloned.cells = cloned.cells.map(cell => {
    if (!cell.isDark) return { ...cell }
    return {
      ...cell,
      arrow: cell.arrow ? (OPPOSITE[cell.arrow] || cell.arrow) : null
    }
  })
  cloned.flipState = ((cloned.flipState || 0) + 1) % nVars
  return cloned
}

export function validate(puzzle, blocks) {
  const n = puzzle.gridSize
  const cellMap = {}
  blocks.forEach(b => {
    b.cells.forEach(c => {
      cellMap[`${c.row},${c.col}`] = c
    })
  })

  let curr = puzzle.startCell
  let entering = 'right'
  if (curr.col === 0) entering = 'right'
  else if (curr.col === n - 1) entering = 'left'
  else if (curr.row === 0) entering = 'down'
  else if (curr.row === n - 1) entering = 'up'

  const path = []
  const visited = new Set()
  const maxSteps = n * n + 4

  for (let step = 0; step < maxSteps; step++) {
    const key = `${curr.row},${curr.col}`
    if (visited.has(key)) {
      return { valid: false, path }
    }
    visited.add(key)

    const cell = cellMap[key]
    if (!cell || !cell.isDark) {
      return { valid: false, path }
    }

    path.push({ row: curr.row, col: curr.col })

    if (curr.row === puzzle.endCell.row && curr.col === puzzle.endCell.col) {
      return { valid: true, path }
    }

    if (!cell.arrow) {
      return { valid: false, path }
    }

    let exitDir = null
    if (CARDINAL[cell.arrow]) {
      exitDir = cell.arrow
    } else if (DIAG[cell.arrow] && DIAG[cell.arrow][entering]) {
      exitDir = DIAG[cell.arrow][entering]
    } else {
      return { valid: false, path }
    }

    const stepVec = VEC[exitDir]
    if (!stepVec) {
      return { valid: false, path }
    }

    const nextRow = curr.row + stepVec[0]
    const nextCol = curr.col + stepVec[1]

    if (nextCol === n && nextRow === puzzle.endCell.row) {
      path.push({ row: nextRow, col: nextCol })
      return { valid: true, path }
    }

    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n) {
      return { valid: false, path }
    }

    curr = { row: nextRow, col: nextCol }
    entering = exitDir
  }

  return { valid: false, path }
}

export function reachableStates(block) {
  const states = []
  const seen = new Set()

  function stateKey(b) {
    return b.cells
      .map(c => `${c.row},${c.col},${c.isDark ? 1 : 0},${c.arrow || ''}`)
      .join(';')
  }

  const queue = [block]
  seen.add(stateKey(block))
  states.push(block)

  while (queue.length > 0) {
    const curr = queue.shift()
    const rBlock = rotateBlock(curr)
    const rKey = stateKey(rBlock)
    if (!seen.has(rKey)) {
      seen.add(rKey)
      states.push(rBlock)
      queue.push(rBlock)
    }

    const fBlock = flipBlock(curr)
    const fKey = stateKey(fBlock)
    if (!seen.has(fKey)) {
      seen.add(fKey)
      states.push(fBlock)
      queue.push(fBlock)
    }
  }

  return states
}

export function solve(puzzle, blocks, nodeLimit = 2000000) {
  const nb = puzzle.gridSize / 3
  const totalBlocks = nb * nb
  const blockStates = blocks.map(b => reachableStates(b))

  const assignment = new Array(totalBlocks).fill(null)
  let nodeCount = 0
  const memo = new Set()

  let initialEntering = 'right'
  if (puzzle.startCell.col === 0) initialEntering = 'right'
  else if (puzzle.startCell.col === puzzle.gridSize - 1) initialEntering = 'left'
  else if (puzzle.startCell.row === 0) initialEntering = 'down'
  else if (puzzle.startCell.row === puzzle.gridSize - 1) initialEntering = 'up'

  function dfs(row, col, entering) {
    nodeCount++
    if (nodeCount > nodeLimit) return null

    if (row === puzzle.endCell.row && col === puzzle.endCell.col) {
      return true
    }

    const memoKey = `${row},${col}|${entering}|${assignment.map(a => (a === null ? '_' : a)).join(',')}`
    if (memo.has(memoKey)) return null
    memo.add(memoKey)

    const br = Math.floor(row / 3)
    const bc = Math.floor(col / 3)
    const bi = br * nb + bc

    const tryStates = assignment[bi] !== null
      ? [assignment[bi]]
      : blockStates[bi].map((_, idx) => idx)

    for (const sIdx of tryStates) {
      const prevAssign = assignment[bi]
      assignment[bi] = sIdx
      const bObj = blockStates[bi][sIdx]

      const localR = row % 3
      const localC = col % 3
      const targetCell = bObj.cells.find(c => (c.row % 3) === localR && (c.col % 3) === localC)

      if (targetCell && targetCell.isDark && targetCell.arrow) {
        let exitDir = null
        if (CARDINAL[targetCell.arrow]) {
          exitDir = targetCell.arrow
        } else if (DIAG[targetCell.arrow] && DIAG[targetCell.arrow][entering]) {
          exitDir = DIAG[targetCell.arrow][entering]
        }

        if (exitDir && VEC[exitDir]) {
          const nextRow = row + VEC[exitDir][0]
          const nextCol = col + VEC[exitDir][1]

          if (nextCol === puzzle.gridSize && nextRow === puzzle.endCell.row) {
            return true
          }

          if (nextRow >= 0 && nextRow < puzzle.gridSize && nextCol >= 0 && nextCol < puzzle.gridSize) {
            const found = dfs(nextRow, nextCol, exitDir)
            if (found) return true
          }
        }
      }

      assignment[bi] = prevAssign
    }

    return false
  }

  const success = dfs(puzzle.startCell.row, puzzle.startCell.col, initialEntering)
  if (!success) return null

  const resolvedBlocks = blocks.map((b, idx) => {
    const sIdx = assignment[idx] !== null ? assignment[idx] : 0
    return blockStates[idx][sIdx]
  })

  const valRes = validate(puzzle, resolvedBlocks)
  return {
    blocks: resolvedBlocks,
    path: valRes.path,
    valid: valRes.valid
  }
}
