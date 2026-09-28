// src/config/cognitiveGamesData.js
// Accenture-exclusive Gamified Cognitive Assessment configuration

export const COGNITIVE_GAMES_BY_COMPANY = {
  accenture: {
    companyName: 'Accenture',
    title: 'Gamified Cognitive Assessment',
    stageBadge: 'Stage 1 • Round 3',
    subtitle: 'Accenture utilizes interactive mini-games to evaluate candidates on mental calculation speed, working memory, and spatial problem-solving.',
    ruleTitle: 'Accenture Cognitive Round Insights',
    ruleDescription: 'In Accenture’s recruitment process, candidates must achieve a minimum sectional cutoff across both cognitive games. There are NO traditional aptitude MCQs in this round—your score is computed dynamically based on accuracy, speed, and streak multiplier.',
    games: [
      {
        id: 'bubble',
        path: 'math-bubble',
        title: 'Quick Bubble Math',
        subtitle: 'Ascending Order Mental Arithmetic',
        desc: 'Rapidly evaluate 3 mathematical bubbles (fractions, decimals, and arithmetic expressions) and tap them in strict ascending order (Lowest to Highest) before time runs out.',
        icon: '🎈',
        duration: '15s / Q • 7 Progressive Sets',
        badge: 'Numerical Agility',
        color: '#A100FF',
        bg: 'rgba(161, 0, 255, 0.08)'
      },
      {
        id: 'maze',
        path: 'memory-maze',
        title: 'Memory Maze',
        subtitle: 'Hidden Wall Discovery & Spatial Navigation',
        desc: 'Explore an N×N labyrinth with invisible hidden walls. Map boundaries through trial, collect all hidden keys, and unlock the exit door with minimal collision attempts.',
        icon: '🧩',
        duration: '233s Countdown',
        badge: 'Working Memory',
        color: '#2563eb',
        bg: 'rgba(37, 99, 235, 0.08)'
      },
      {
        id: 'path-finder',
        path: 'path-finder',
        title: 'Path Finder',
        subtitle: 'Spatial Image Rotation & Vector Mapping',
        desc: 'Rotate and flip tile matrices on an N×N board to construct a continuous directional route from the astronaut to the moon in minimal moves.',
        icon: '🧭',
        duration: '240s Countdown • 5 Grid Sizes',
        badge: 'Spatial Reasoning',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.08)'
      }
    ]
  }
}
