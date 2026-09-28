// src/engines/frontend/index.js
// Sandboxed Frontend Execution Engine (HTML, CSS, JS live preview with console & assertion runner)

export const FRONTEND_TEMPLATES = {
  counter: {
    title: 'Interactive Counter Widget',
    html: `<div class="counter-container">
  <h2>Interactive Counter</h2>
  <div id="count-display" class="count-value">0</div>
  <div class="btn-group">
    <button id="decrement-btn" class="btn btn-sub">-</button>
    <button id="reset-btn" class="btn btn-reset">Reset</button>
    <button id="increment-btn" class="btn btn-add">+</button>
  </div>
</div>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  margin: 0;
}

.counter-container {
  background: #ffffff;
  padding: 28px 36px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #e2e8f0;
}

h2 {
  margin: 0 0 16px;
  font-size: 18px;
  color: #1e293b;
}

.count-value {
  font-size: 48px;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 20px;
}

.btn-group {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.btn {
  padding: 8px 18px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #f1f5f9;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn:hover {
  background: #e2e8f0;
}

.btn-add { background: #2563eb; color: #fff; border-color: #2563eb; }
.btn-add:hover { background: #1d4ed8; }

.btn-sub { background: #ef4444; color: #fff; border-color: #ef4444; }
.btn-sub:hover { background: #dc2626; }`,
    js: `let count = 0;
const display = document.getElementById('count-display');
const incBtn = document.getElementById('increment-btn');
const decBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  display.textContent = count;
  console.log('Count updated to:', count);
}

incBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

console.log('Counter widget initialized successfully.');`
  }
}

export function generateSandboxedDocument({ html = '', css = '', js = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset & user styles */
    *, *::before, *::after { box-sizing: border-box; }
    ${css}
  </style>
  <script>
    // Intercept console output and stream to parent window
    (function() {
      const origLog = console.log;
      const origWarn = console.warn;
      const origError = console.error;

      function sendToParent(type, args) {
        try {
          const messages = Array.from(args).map(a => 
            typeof a === 'object' ? JSON.stringify(a) : String(a)
          );
          window.parent.postMessage({
            source: 'FRONTEND_SANDBOX',
            type: type,
            message: messages.join(' '),
            timestamp: new Date().toLocaleTimeString()
          }, '*');
        } catch(e) {}
      }

      console.log = function(...args) {
        sendToParent('log', args);
        origLog.apply(console, args);
      };
      console.warn = function(...args) {
        sendToParent('warn', args);
        origWarn.apply(console, args);
      };
      console.error = function(...args) {
        sendToParent('error', args);
        origError.apply(console, args);
      };

      window.onerror = function(message, source, lineno, colno, error) {
        sendToParent('error', [message + ' (line ' + lineno + ')']);
        return false;
      };
    })();
  <\/script>
</head>
<body>
  ${html}
  <script>
    try {
      ${js}
    } catch (err) {
      console.error('Runtime error:', err.message);
    }
  <\/script>
</body>
</html>`
}
