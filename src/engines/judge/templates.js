// src/engines/judge/templates.js
// Default starter code templates per language

export const CODE_TEMPLATES = {
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// Implement your solution here
void solve() {
    int n;
    if (cin >> n) {
        cout << "Processed input: " << n << endl;
    } else {
        cout << "Hello from C++ Solution!" << endl;
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    solve();
    return 0;
}
`,

  java: `import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            System.out.println("Processed input: " + n);
        } else {
            System.out.println("Hello from Java Solution!");
        }
    }
}
`,

  python: `import sys

def solve():
    lines = sys.stdin.read().split()
    if lines:
        print(f"Processed input: {lines[0]}")
    else:
        print("Hello from Python Solution!")

if __name__ == "__main__":
    solve()
`,

  javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim();
    if (input) {
        console.log("Processed input: " + input);
    } else {
        console.log("Hello from JavaScript Solution!");
    }
}

solve();
`
}
