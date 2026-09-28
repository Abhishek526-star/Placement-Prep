// src/games/MemoryMaze/mazeGenerator.js
// Validated Solvable Maze Generator for Accenture Memory Maze Assessment
// Matches official Round 3 specifications and 8 grid variants

export const MEMORY_MAZE_VARIANTS = {
  'find-the-key': {
    id: 'find-the-key',
    name: 'Find the Key',
    description: 'Explore the 3x3 grid to find the key and unlock the exit door while learning hidden walls.',
    gridSize: 3,
    timeLimit: 233,
    keyCount: 1,
  },
  'practice-2': {
    id: 'practice-2',
    name: 'Practice 2',
    description: 'Alternative 3x3 layout with altered wall positions for spatial recall practice.',
    gridSize: 3,
    timeLimit: 233,
    keyCount: 1,
  },
  '4x4-grid': {
    id: '4x4-grid',
    name: '4×4 Grid',
    description: 'Navigate a 4x4 maze with 1 hidden key and complex invisible dead-ends.',
    gridSize: 4,
    timeLimit: 240,
    keyCount: 1,
  },
  '4x4-two-keys': {
    id: '4x4-two-keys',
    name: '4×4 Two Keys',
    description: 'Collect 2 keys in a 4x4 grid before reaching the door.',
    gridSize: 4,
    timeLimit: 240,
    keyCount: 2,
  },
  '5x5-grid': {
    id: '5x5-grid',
    name: '5×5 Grid',
    description: 'Expanded 5x5 labyrinth testing extended spatial memory.',
    gridSize: 5,
    timeLimit: 260,
    keyCount: 1,
  },
  '5x5-two-keys': {
    id: '5x5-two-keys',
    name: '5×5 Two Keys',
    description: 'Retrieve 2 keys across a 5x5 layout before the exit opens.',
    gridSize: 5,
    timeLimit: 260,
    keyCount: 2,
  },
  '6x6-grid': {
    id: '6x6-grid',
    name: '6×6 Grid',
    description: 'Large 6x6 maze demanding precise mental obstacle mapping.',
    gridSize: 6,
    timeLimit: 280,
    keyCount: 1,
  },
  '6x6-two-keys': {
    id: '6x6-two-keys',
    name: '6×6 Two Keys',
    description: 'Master difficulty: 2 keys placed in a 6x6 maze with multi-turn hidden walls.',
    gridSize: 6,
    timeLimit: 280,
    keyCount: 2,
  },
}

// Compute shortest valid path between two points avoiding walls using BFS
function bfsPath(cells, size, from, to) {
  const queue = [[from.r, from.c, [from]]]
  const visited = new Set([`${from.r},${from.c}`])

  const directions = [
    { dr: -1, dc: 0, wall: 'top' },
    { dr: 1, dc: 0, wall: 'bottom' },
    { dr: 0, dc: -1, wall: 'left' },
    { dr: 0, dc: 1, wall: 'right' },
  ]

  while (queue.length > 0) {
    const [r, c, path] = queue.shift()
    if (r === to.r && c === to.c) {
      return path
    }

    const currentCell = cells[r][c]

    for (const { dr, dc, wall } of directions) {
      const nr = r + dr
      const nc = c + dc

      if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
        if (!currentCell.walls[wall] && !visited.has(`${nr},${nc}`)) {
          visited.add(`${nr},${nc}`)
          queue.push([nr, nc, [...path, { r: nr, c: nc }]])
        }
      }
    }
  }

  return null
}

export function computeOptimalSolution(cells, size, start, keys, door) {
  let fullPath = [start]
  let currentPos = start

  for (const key of keys) {
    const segment = bfsPath(cells, size, currentPos, key)
    if (!segment) return null
    fullPath = [...fullPath, ...segment.slice(1)]
    currentPos = key
  }

  const doorSegment = bfsPath(cells, size, currentPos, door)
  if (!doorSegment) return null
  fullPath = [...fullPath, ...doorSegment.slice(1)]

  // Attach step number to each cell in the path (1-indexed)
  // E.g. start is step 1, next is step 2, etc.
  return fullPath.map((pos, idx) => ({
    r: pos.r,
    c: pos.c,
    step: idx + 1,
  }))
}

export function generateMemoryMaze(variantKey = 'find-the-key') {
  const variant = MEMORY_MAZE_VARIANTS[variantKey] || MEMORY_MAZE_VARIANTS['find-the-key']
  const size = variant.gridSize

  // Special deterministic layout for 3x3 "find-the-key" matching Screenshot 2 & 3
  if (size === 3 && variant.id === 'find-the-key') {
    const cells = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => ({
        walls: { top: false, bottom: false, left: false, right: false },
      }))
    )

    // Outer boundary walls
    for (let r = 0; r < 3; r++) {
      cells[r][0].walls.left = true
      cells[r][2].walls.right = true
    }
    for (let c = 0; c < 3; c++) {
      cells[0][c].walls.top = true
      cells[2][c].walls.bottom = true
    }

    // Exact walls from Screenshot 3:
    // Red horizontal wall between (0,1) and (1,1) -> top of (1,1)
    cells[1][1].walls.top = true
    cells[0][1].walls.bottom = true

    // Red horizontal wall between (1,0) and (2,0) -> bottom of (1,0)
    cells[1][0].walls.bottom = true
    cells[2][0].walls.top = true

    // Red horizontal wall between (1,2) and (2,2) -> bottom of (1,2)
    cells[1][2].walls.bottom = true
    cells[2][2].walls.top = true

    const start = { r: 1, c: 1 } // Center
    const keys = [{ r: 0, c: 0 }] // Top-left
    const door = { r: 2, c: 2 } // Bottom-right

    const solution = computeOptimalSolution(cells, 3, start, keys, door)

    return {
      variant,
      size: 3,
      cells,
      start,
      keys,
      door,
      solution: solution || [
        { r: 1, c: 1, step: 1 },
        { r: 1, c: 0, step: 2 },
        { r: 0, c: 0, step: 3 },
        { r: 0, c: 1, step: 4 }, // alternate open path if needed
        { r: 0, c: 2, step: 5 },
        { r: 1, c: 2, step: 6 },
        { r: 2, c: 2, step: 7 },
      ],
    }
  }

  // General generator for other variants
  for (let attempt = 0; attempt < 35; attempt++) {
    const cells = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => ({
        walls: { top: false, bottom: false, left: false, right: false },
      }))
    )

    // Outer boundary walls
    for (let r = 0; r < size; r++) {
      cells[r][0].walls.left = true
      cells[r][size - 1].walls.right = true
    }
    for (let c = 0; c < size; c++) {
      cells[0][c].walls.top = true
      cells[size - 1][c].walls.bottom = true
    }

    // Place random internal hidden walls (~24% of internal edges)
    const wallChance = 0.24
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (c < size - 1 && Math.random() < wallChance) {
          cells[r][c].walls.right = true
          cells[r][c + 1].walls.left = true
        }
        if (r < size - 1 && Math.random() < wallChance) {
          cells[r][c].walls.bottom = true
          cells[r + 1][c].walls.top = true
        }
      }
    }

    // Positions
    const start = size === 3 ? { r: 1, c: 1 } : { r: 0, c: 0 }
    const door = { r: size - 1, c: size - 1 }

    const keys = []
    if (variant.keyCount === 1) {
      keys.push({ r: 0, c: size > 3 ? size - 2 : 0 })
    } else {
      keys.push({ r: 0, c: size - 1 })
      keys.push({ r: size - 1, c: 0 })
    }

    // Ensure start doesn't collide with key or door
    if (start.r === keys[0].r && start.c === keys[0].c) {
      keys[0] = { r: 0, c: size - 1 }
    }

    const solution = computeOptimalSolution(cells, size, start, keys, door)

    if (solution && solution.length >= size + 2) {
      return {
        variant,
        size,
        cells,
        start,
        keys,
        door,
        solution,
      }
    }
  }

  // Guaranteed fallback
  const fallbackCells = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({
      walls: { top: false, bottom: false, left: false, right: false },
    }))
  )
  for (let r = 0; r < size; r++) {
    fallbackCells[r][0].walls.left = true
    fallbackCells[r][size - 1].walls.right = true
  }
  for (let c = 0; c < size; c++) {
    fallbackCells[0][c].walls.top = true
    fallbackCells[size - 1][c].walls.bottom = true
  }

  const start = size === 3 ? { r: 1, c: 1 } : { r: 0, c: 0 }
  const door = { r: size - 1, c: size - 1 }
  const keys = variant.keyCount === 2
    ? [{ r: 0, c: size - 1 }, { r: size - 1, c: 0 }]
    : [{ r: 0, c: size > 3 ? size - 2 : 0 }]

  const solution = computeOptimalSolution(fallbackCells, size, start, keys, door)

  return {
    variant,
    size,
    cells: fallbackCells,
    start,
    keys,
    door,
    solution: solution || [{ ...start, step: 1 }, { ...keys[0], step: 2 }, { ...door, step: 3 }],
  }
}
