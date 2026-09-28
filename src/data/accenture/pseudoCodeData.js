// src/data/accenture/pseudoCodeData.js
// 38 Authentic Accenture Pseudocode Questions with 4-Space Indentation, Step-by-Step Traces, and 2 Min/Q Allocation

export const PSEUDO_CODE_MCQS = [
  {
    "id": "pseudo-s1-01",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q1. Recursive Function",
    "question": "What will be the output of the following pseudocode?",
    "code": "public class MainClass {\n    static void fun(int p, int q, int r) {\n        if (p > 1) {\n            fun(p - r, q, r - 3);\n            System.out.println(q);\n        }\n    }\n    public static void main(String[] args) {\n        fun(20, 25, 30);\n    }\n}",
    "options": [
      {
        "key": "A",
        "text": "20",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "25",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "30",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "55",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "25",
    "explanation": "Initial call: fun(20, 25, 30)\n\nStep 1:\nSince 20 > 1, the condition (p > 1) is true.\nIt invokes the recursive call:\nfun(20 - 30, 25, 30 - 3) = fun(-10, 25, 27).\n\nStep 2:\nIn fun(-10, 25, 27):\np = -10, so condition (-10 > 1) is false.\nThis call terminates without printing and returns control to the previous call.\n\nStep 3:\nThe previous call resumes after the recursive call and executes:\nSystem.out.println(q);\nSince q = 25, it prints 25.\n\nOutput: 25",
    "stepTrace": [
      {
        "line": 8,
        "code": "fun(20, 25, 30)",
        "variables": {
          "p": 20,
          "q": 25,
          "r": 30
        },
        "note": "Main calls fun(20, 25, 30)."
      },
      {
        "line": 3,
        "code": "if (p > 1)",
        "variables": {
          "p": 20,
          "q": 25,
          "r": 30
        },
        "note": "20 > 1 is true. Proceed inside if."
      },
      {
        "line": 4,
        "code": "fun(p - r, q, r - 3)",
        "variables": {
          "p-r": -10,
          "q": 25,
          "r-3": 27
        },
        "note": "Calls fun(20 - 30, 25, 30 - 3) = fun(-10, 25, 27)."
      },
      {
        "line": 3,
        "code": "if (p > 1)",
        "variables": {
          "p": -10,
          "q": 25,
          "r": 27
        },
        "note": "-10 > 1 is false. Base condition hit, returns."
      },
      {
        "line": 5,
        "code": "System.out.println(q)",
        "variables": {
          "q": 25,
          "output": "25"
        },
        "note": "Prints q = 25. Call stack unwinds."
      }
    ]
  },
  {
    "id": "pseudo-s1-02",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "hard",
    "title": "Q2. Recursive Function with Changing Parameters",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer p, Integer q, Integer r)\n    if (p > 1)\n        fun(p - r, q + 2, r + 2)\n        Print q\n    end if\nend function\n// Executed for p = 22, q = 4, r = 2",
    "options": [
      {
        "key": "A",
        "text": "20 18 16 14 12",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "14 12 10 8 6 4",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "26 24 22 20 18 16 14 12 10 8 6 4",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "None of the mentioned options",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "26 24 22 20 18 16 14 12 10 8 6 4",
    "explanation": "Track the recursive calls:\np decreases by r, q increases by 2, and r increases by 2 on each recursive step:\n• p = 22, q = 4, r = 2\n• p = 20, q = 6, r = 4\n• p = 18, q = 8, r = 6\n• p = 16, q = 10, r = 8\n• p = 14, q = 12, r = 10\n• p = 12, q = 14, r = 12\n• p = 10, q = 16, r = 14\n• p = 8,  q = 18, r = 16\n• p = 6,  q = 20, r = 18\n• p = 4,  q = 22, r = 20\n• p = 2,  q = 24, r = 22\n• p = 0,  q = 26, r = 24\n\nWhen p = 0, recursion stops.\nBecause Print q executes after the recursive call, values are printed in reverse order as the stack unwinds:\n26 24 22 20 18 16 14 12 10 8 6 4\n\nOutput: 26 24 22 20 18 16 14 12 10 8 6 4",
    "stepTrace": [
      {
        "line": 1,
        "code": "fun(22, 4, 2)",
        "variables": {
          "p": 22,
          "q": 4,
          "r": 2
        },
        "note": "Initial call: p=22, q=4, r=2."
      },
      {
        "line": 2,
        "code": "if (p > 1)",
        "variables": {
          "p": 22,
          "q": 4,
          "r": 2
        },
        "note": "22 > 1 is true. Makes recursive call."
      },
      {
        "line": 3,
        "code": "Recursive call cascade...",
        "variables": {
          "p": 0,
          "q": 26
        },
        "note": "Calls continue until p = 0."
      },
      {
        "line": 4,
        "code": "Print q (stack unwinding)",
        "variables": {
          "output": "26 24 22 20 18 16 14 12 10 8 6 4"
        },
        "note": "Values of q print in reverse as stack frames pop."
      }
    ]
  },
  {
    "id": "pseudo-s1-03",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q3. Multiple Recursive Calls",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x)\n    if (x > 3)\n        fun(x - 3)\n        Print x\n        fun(x / 2)\n        fun(x / 4)\n    end if\nend function\n// Executed for x = 7",
    "options": [
      {
        "key": "A",
        "text": "6 9 4",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "5 8 4",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "4 7",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "4 7 5",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "4 7",
    "explanation": "Start: fun(7)\nSince 7 > 3:\n1. fun(7 - 3) = fun(4) is called:\n   • 4 > 3 is true:\n     - calls fun(4 - 3) = fun(1) -> 1 > 3 is false, returns.\n     - executes: Print 4\n     - calls fun(4 / 2) = fun(2) -> 2 > 3 is false, returns.\n     - calls fun(4 / 4) = fun(1) -> 1 > 3 is false, returns.\n   • fun(4) finishes after printing 4.\n2. Back to fun(7):\n   • executes: Print 7\n   • calls fun(7 / 2) = fun(3) -> 3 > 3 is false, returns.\n   • calls fun(7 / 4) = fun(1) -> 1 > 3 is false, returns.\n\nPrinted values: 4 7\nOutput: 4 7",
    "stepTrace": [
      {
        "line": 1,
        "code": "fun(7)",
        "variables": {
          "x": 7
        },
        "note": "Call fun(7)."
      },
      {
        "line": 3,
        "code": "fun(x - 3)",
        "variables": {
          "x": 7,
          "next_x": 4
        },
        "note": "Calls fun(4)."
      },
      {
        "line": 4,
        "code": "Print x in fun(4)",
        "variables": {
          "x": 4,
          "output": "4"
        },
        "note": "fun(4) prints 4 after its child fun(1) returns."
      },
      {
        "line": 4,
        "code": "Print x in fun(7)",
        "variables": {
          "x": 7,
          "output": "4 7"
        },
        "note": "fun(7) resumes and prints 7."
      },
      {
        "line": 5,
        "code": "fun(x / 2) & fun(x / 4)",
        "variables": {
          "7/2": 3,
          "7/4": 1
        },
        "note": "Both 3 > 3 and 1 > 3 are false. Execution completes."
      }
    ]
  },
  {
    "id": "pseudo-s1-04",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q4. Recursive Division",
    "question": "What will be the output of the following pseudocode?",
    "code": "public class MainClass {\n    static void fun(int x, int y) {\n        if (x > 1) {\n            fun(x / y, y + 3);\n            System.out.println(y);\n        }\n    }\n    public static void main(String[] args) {\n        fun(108, 3);\n    }\n}",
    "options": [
      {
        "key": "A",
        "text": "3 6 9 12",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "12 9 6 3",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "9 6 3",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "12 9 6",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "12 9 6 3",
    "explanation": "Track recursive call chain:\n• fun(108, 3): 108 > 1, calls fun(108 / 3, 3 + 3) = fun(36, 6)\n• fun(36, 6):   36 > 1, calls fun(36 / 6, 6 + 3)   = fun(6, 9)\n• fun(6, 9):     6 > 1, calls fun(6 / 9, 9 + 3)     = fun(0, 12)\n• fun(0, 12):    0 > 1 is false, recursion stops.\n\nNow calls unwind in reverse order, executing System.out.println(y):\n12\n9\n6\n3\n\nOutput: 12 9 6 3",
    "stepTrace": [
      {
        "line": 9,
        "code": "fun(108, 3)",
        "variables": {
          "x": 108,
          "y": 3
        },
        "note": "Initial call: x=108, y=3."
      },
      {
        "line": 4,
        "code": "fun(36, 6)",
        "variables": {
          "x": 36,
          "y": 6
        },
        "note": "108 / 3 = 36, 3 + 3 = 6."
      },
      {
        "line": 4,
        "code": "fun(6, 9)",
        "variables": {
          "x": 6,
          "y": 9
        },
        "note": "36 / 6 = 6, 6 + 3 = 9."
      },
      {
        "line": 4,
        "code": "fun(0, 12)",
        "variables": {
          "x": 0,
          "y": 12
        },
        "note": "6 / 9 = 0, 9 + 3 = 12."
      },
      {
        "line": 3,
        "code": "Base case x <= 1",
        "variables": {
          "x": 0
        },
        "note": "0 > 1 is false. Stack unwinds."
      },
      {
        "line": 5,
        "code": "Print y on return",
        "variables": {
          "output": "12 9 6 3"
        },
        "note": "Prints 12, 9, 6, 3 in reverse stack order."
      }
    ]
  },
  {
    "id": "pseudo-s1-05",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q5. Loop with Updating Variables",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 10, b = 20\nfor (c from a to b) increment c by 2 in each iteration\n    a = a + c\n    b = b - a + c\n    if (a > 10)\n        Print a\n    else\n        Print b\n    end if\nend for",
    "options": [
      {
        "key": "A",
        "text": "20",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "22",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "20 32",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "20 32 46 62 80 100",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "20 32 46 62 80 100",
    "explanation": "The for-loop boundaries are evaluated at initialization:\nc ranges from a (10) to b (20) with step 2:\nc values: 10, 12, 14, 16, 18, 20\n\nCompute a and printed values:\n• c = 10: a = 10 + 10 = 20. (20 > 10) -> Print 20\n• c = 12: a = 20 + 12 = 32. (32 > 10) -> Print 32\n• c = 14: a = 32 + 14 = 46. (46 > 10) -> Print 46\n• c = 16: a = 46 + 16 = 62. (62 > 10) -> Print 62\n• c = 18: a = 62 + 18 = 80. (80 > 10) -> Print 80\n• c = 20: a = 80 + 20 = 100. (100 > 10) -> Print 100\n\nOutput: 20 32 46 62 80 100",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 10, b = 20",
        "variables": {
          "a": 10,
          "b": 20
        },
        "note": "Loop values of c: 10, 12, 14, 16, 18, 20."
      },
      {
        "line": 4,
        "code": "Iter c=10: a = a + c",
        "variables": {
          "a": 20,
          "c": 10,
          "output": "20"
        },
        "note": "a = 10 + 10 = 20. Prints 20."
      },
      {
        "line": 4,
        "code": "Iter c=12: a = a + c",
        "variables": {
          "a": 32,
          "c": 12,
          "output": "20 32"
        },
        "note": "a = 20 + 12 = 32. Prints 32."
      },
      {
        "line": 4,
        "code": "Iter c=14: a = a + c",
        "variables": {
          "a": 46,
          "c": 14,
          "output": "20 32 46"
        },
        "note": "a = 32 + 14 = 46. Prints 46."
      },
      {
        "line": 4,
        "code": "Iter c=16: a = a + c",
        "variables": {
          "a": 62,
          "c": 16,
          "output": "20 32 46 62"
        },
        "note": "a = 46 + 16 = 62. Prints 62."
      },
      {
        "line": 4,
        "code": "Iter c=18: a = a + c",
        "variables": {
          "a": 80,
          "c": 18,
          "output": "20 32 46 62 80"
        },
        "note": "a = 62 + 18 = 80. Prints 80."
      },
      {
        "line": 4,
        "code": "Iter c=20: a = a + c",
        "variables": {
          "a": 100,
          "c": 20,
          "output": "20 32 46 62 80 100"
        },
        "note": "a = 80 + 20 = 100. Prints 100."
      }
    ]
  },
  {
    "id": "pseudo-s1-06",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "medium",
    "title": "Q6. Bitwise Operators",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer pp, qq, rr\nSet pp = 3, qq = 6, rr = 5\n\nrr = (qq & pp) ^ rr\nrr = (qq & 7) + qq\n\nif ((3 ^ 5) < qq)\n    rr = (rr + qq) + pp\n    if ((pp ^ qq ^ rr) > (rr ^ pp))\n        qq = (1 & 6) + pp\n    end if\n    qq = (rr + 6) + pp\nend if\n\nPrint pp + qq + rr",
    "options": [
      {
        "key": "A",
        "text": "18",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "20",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "21",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "24",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "21",
    "explanation": "Step-by-step evaluation:\n1. Initially: pp = 3, qq = 6, rr = 5\n2. Evaluate rr = (qq & pp) ^ rr:\n   6 in binary = 110\n   3 in binary = 011\n   6 & 3 = 010 (binary) = 2\n   2 ^ 5 = 010 ^ 101 = 111 (binary) = 7. So rr = 7.\n3. Evaluate rr = (qq & 7) + qq:\n   6 & 7 = 6\n   rr = 6 + 6 = 12.\n4. Evaluate condition: ((3 ^ 5) < qq)\n   3 ^ 5 = 011 ^ 101 = 110 (binary) = 6.\n   Condition becomes: 6 < 6 -> FALSE!\n5. Since condition is false, the entire outer if block is skipped.\n6. Final output:\n   Print pp + qq + rr = 3 + 6 + 12 = 21.\n\nOutput: 21",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set pp = 3, qq = 6, rr = 5",
        "variables": {
          "pp": 3,
          "qq": 6,
          "rr": 5
        },
        "note": "Variables initialized."
      },
      {
        "line": 4,
        "code": "rr = (qq & pp) ^ rr",
        "variables": {
          "rr": 7
        },
        "note": "(6 & 3) ^ 5 = 2 ^ 5 = 7."
      },
      {
        "line": 5,
        "code": "rr = (qq & 7) + qq",
        "variables": {
          "rr": 12
        },
        "note": "(6 & 7) + 6 = 6 + 6 = 12."
      },
      {
        "line": 7,
        "code": "if ((3 ^ 5) < qq)",
        "variables": {
          "3^5": 6,
          "qq": 6
        },
        "note": "6 < 6 is FALSE. Entire if-block skipped."
      },
      {
        "line": 16,
        "code": "Print pp + qq + rr",
        "variables": {
          "pp": 3,
          "qq": 6,
          "rr": 12,
          "output": 21
        },
        "note": "3 + 6 + 12 = 21."
      }
    ]
  },
  {
    "id": "pseudo-s1-07",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "medium",
    "title": "Q7. Bitwise AND and Conditional Execution",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 8, q = 5, r = 10\n\nif ((p & q) < r)\n    q = r & r\n    q = 9 + q\nend if\n\nif ((p + q) > (r - p))\n    q = (q + 5) & p\nend if\n\nPrint p + q + r",
    "options": [
      {
        "key": "A",
        "text": "18",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "20",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "24",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "26",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "26",
    "explanation": "Step-by-step evaluation:\n1. Initially: p = 8, q = 5, r = 10\n2. First condition: ((p & q) < r)\n   8 in binary = 1000\n   5 in binary = 0101\n   8 & 5 = 0000 = 0\n   0 < 10 is TRUE.\n   Inside if:\n   q = r & r = 10 & 10 = 10\n   q = 9 + q = 9 + 10 = 19.\n3. Second condition: ((p + q) > (r - p))\n   p + q = 8 + 19 = 27\n   r - p = 10 - 8 = 2\n   27 > 2 is TRUE.\n   Inside if:\n   q = (q + 5) & p = (19 + 5) & 8 = 24 & 8\n   24 in binary = 11000\n   8 in binary  = 01000\n   24 & 8 = 01000 = 8.\n   So q = 8.\n4. Final calculation:\n   p + q + r = 8 + 8 + 10 = 26.\n\nOutput: 26",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set p = 8, q = 5, r = 10",
        "variables": {
          "p": 8,
          "q": 5,
          "r": 10
        },
        "note": "Initial values."
      },
      {
        "line": 4,
        "code": "if ((p & q) < r)",
        "variables": {
          "p&q": 0,
          "r": 10
        },
        "note": "8 & 5 = 0 < 10 is TRUE."
      },
      {
        "line": 5,
        "code": "q = r & r; q = 9 + q",
        "variables": {
          "q": 19
        },
        "note": "q = 10; q = 9 + 10 = 19."
      },
      {
        "line": 9,
        "code": "if ((p + q) > (r - p))",
        "variables": {
          "p+q": 27,
          "r-p": 2
        },
        "note": "27 > 2 is TRUE."
      },
      {
        "line": 10,
        "code": "q = (q + 5) & p",
        "variables": {
          "q": 8
        },
        "note": "24 & 8 = 8."
      },
      {
        "line": 13,
        "code": "Print p + q + r",
        "variables": {
          "p": 8,
          "q": 8,
          "r": 10,
          "output": 26
        },
        "note": "8 + 8 + 10 = 26."
      }
    ]
  },
  {
    "id": "pseudo-s1-08",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "medium",
    "title": "Q8. Nested Conditions and XOR",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 8, b = 8, c = 9\n\nif (3 > a)\n    if (8 > c)\n        c = (b + a) & a\n        c = c + a\n    end if\n    c = (b + 1) + b\n    b = (2 + 5) + b\nelse\n    if ((b ^ 4) < (7 + b))\n        b = (b + b) + c\n    end if\nend if\n\nPrint a + b + c",
    "options": [
      {
        "key": "A",
        "text": "25",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "40",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "42",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "45",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "42",
    "explanation": "Step-by-step evaluation:\n1. Initially: a = 8, b = 8, c = 9\n2. Outer condition: if (3 > a)\n   3 > 8 is FALSE.\n   Execution moves to the else block.\n3. Inside else: if ((b ^ 4) < (7 + b))\n   b ^ 4 = 8 ^ 4 = 1000 ^ 0100 = 1100 (binary) = 12\n   7 + b = 7 + 8 = 15\n   12 < 15 is TRUE.\n   b = (b + b) + c = (8 + 8) + 9 = 16 + 9 = 25.\n4. Final calculation:\n   Print a + b + c = 8 + 25 + 9 = 42.\n\nOutput: 42",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 8, b = 8, c = 9",
        "variables": {
          "a": 8,
          "b": 8,
          "c": 9
        },
        "note": "Initial values."
      },
      {
        "line": 4,
        "code": "if (3 > a)",
        "variables": {
          "a": 8
        },
        "note": "3 > 8 is FALSE -> jumps to else."
      },
      {
        "line": 13,
        "code": "if ((b ^ 4) < (7 + b))",
        "variables": {
          "b^4": 12,
          "7+b": 15
        },
        "note": "8 ^ 4 = 12 < 15 is TRUE."
      },
      {
        "line": 14,
        "code": "b = (b + b) + c",
        "variables": {
          "b": 25
        },
        "note": "(8 + 8) + 9 = 25."
      },
      {
        "line": 18,
        "code": "Print a + b + c",
        "variables": {
          "a": 8,
          "b": 25,
          "c": 9,
          "output": 42
        },
        "note": "8 + 25 + 9 = 42."
      }
    ]
  },
  {
    "id": "pseudo-s1-09",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q9. Loop and Continue",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer p, q, r\nSet p = 0, q = 6, r = 6\n\nfor (each r from 2 to 4)\n    if ((r ^ q) < q)\n        Continue\n    end if\n    q = 1 + r\n    p = 1 + q\nend for\n\nPrint p + q",
    "options": [
      {
        "key": "A",
        "text": "5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "6",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "10",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "12",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "6",
    "explanation": "Step-by-step evaluation:\n1. Initially: p = 0, q = 6, r = 6\n2. Loop runs for r = 2, 3, 4:\n   • r = 2:\n     r ^ q = 2 ^ 6 = 010 ^ 110 = 100 (binary) = 4\n     4 < 6 is TRUE.\n     Executes Continue (skips remaining loop body).\n   • r = 3:\n     r ^ q = 3 ^ 6 = 011 ^ 110 = 101 (binary) = 5\n     5 < 6 is TRUE.\n     Executes Continue.\n   • r = 4:\n     r ^ q = 4 ^ 6 = 100 ^ 110 = 010 (binary) = 2\n     2 < 6 is TRUE.\n     Executes Continue.\n3. In all 3 iterations, Continue executes. The assignments to q and p are never reached.\n4. p remains 0, q remains 6.\n   Print p + q = 0 + 6 = 6.\n\nOutput: 6",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set p = 0, q = 6, r = 6",
        "variables": {
          "p": 0,
          "q": 6
        },
        "note": "p = 0, q = 6."
      },
      {
        "line": 4,
        "code": "r = 2: (r ^ q) < q",
        "variables": {
          "r": 2,
          "r^q": 4,
          "q": 6
        },
        "note": "2 ^ 6 = 4 < 6 (true) -> Continue."
      },
      {
        "line": 4,
        "code": "r = 3: (r ^ q) < q",
        "variables": {
          "r": 3,
          "r^q": 5,
          "q": 6
        },
        "note": "3 ^ 6 = 5 < 6 (true) -> Continue."
      },
      {
        "line": 4,
        "code": "r = 4: (r ^ q) < q",
        "variables": {
          "r": 4,
          "r^q": 2,
          "q": 6
        },
        "note": "4 ^ 6 = 2 < 6 (true) -> Continue."
      },
      {
        "line": 12,
        "code": "Print p + q",
        "variables": {
          "p": 0,
          "q": 6,
          "output": 6
        },
        "note": "p and q unchanged: 0 + 6 = 6."
      }
    ]
  },
  {
    "id": "pseudo-s1-10",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "easy",
    "title": "Q10. XOR and AND",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer funn(Integer a, Integer b, Integer c)\n    c = (c ^ c) & b\n    if (9 < c)\n        a = (c + 2) & c\n        c = 4 ^ a\n    end if\n    return a + b + c\nend function\n// Called for a = 0, b = 3, c = 5",
    "options": [
      {
        "key": "A",
        "text": "3",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "B",
        "text": "5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "8",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "12",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "A",
    "correct_answer": "3",
    "explanation": "Step-by-step evaluation:\n1. Initially: a = 0, b = 3, c = 5\n2. c = (c ^ c) & b:\n   Any number XORed with itself is zero: 5 ^ 5 = 0.\n   c = 0 & 3 = 0.\n3. Condition: if (9 < c)\n   9 < 0 is FALSE.\n   The entire if block is skipped.\n4. Return a + b + c:\n   = 0 + 3 + 0 = 3.\n\nOutput: 3",
    "stepTrace": [
      {
        "line": 1,
        "code": "funn(0, 3, 5)",
        "variables": {
          "a": 0,
          "b": 3,
          "c": 5
        },
        "note": "Called with a=0, b=3, c=5."
      },
      {
        "line": 2,
        "code": "c = (c ^ c) & b",
        "variables": {
          "c^c": 0,
          "c": 0
        },
        "note": "5 ^ 5 = 0, 0 & 3 = 0. c = 0."
      },
      {
        "line": 3,
        "code": "if (9 < c)",
        "variables": {
          "c": 0
        },
        "note": "9 < 0 is FALSE. Skipped."
      },
      {
        "line": 7,
        "code": "return a + b + c",
        "variables": {
          "a": 0,
          "b": 3,
          "c": 0,
          "output": 3
        },
        "note": "0 + 3 + 0 = 3."
      }
    ]
  },
  {
    "id": "pseudo-s1-11",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q11. Continue Inside a Loop",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 9, b = 4, c = 6\n\nfor (each c from 4 to 8)\n    if ((a - c) > (c - a))\n        Continue\n    end if\n    a = (3 + 2) + c\n    a = a + a\nend for\n\nPrint a + b",
    "options": [
      {
        "key": "A",
        "text": "9",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "13",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "18",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "26",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "13",
    "explanation": "Condition analysis:\n(a - c) > (c - a)\nAdd (a - c) to both sides:\n2 * (a - c) > 0\na - c > 0 => a > c.\n\nInitially: a = 9, b = 4.\nLoop tests c = 4, 5, 6, 7, 8:\nFor all values of c, a (which is 9) > c is always TRUE:\n• 9 > 4 -> True -> Continue\n• 9 > 5 -> True -> Continue\n• 9 > 6 -> True -> Continue\n• 9 > 7 -> True -> Continue\n• 9 > 8 -> True -> Continue\n\nTherefore, Continue executes every time and variable a is never modified.\nFinal output:\nPrint a + b = 9 + 4 = 13.\n\nOutput: 13",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 9, b = 4, c = 6",
        "variables": {
          "a": 9,
          "b": 4
        },
        "note": "a = 9, b = 4."
      },
      {
        "line": 5,
        "code": "if ((a - c) > (c - a))",
        "variables": {
          "condition": "a > c"
        },
        "note": "(a - c) > (c - a) simplifies to a > c."
      },
      {
        "line": 6,
        "code": "Loop iterations c=4..8",
        "variables": {
          "a": 9
        },
        "note": "9 > c is true for all c in {4,5,6,7,8}. Continue fires every iteration."
      },
      {
        "line": 12,
        "code": "Print a + b",
        "variables": {
          "a": 9,
          "b": 4,
          "output": 13
        },
        "note": "9 + 4 = 13."
      }
    ]
  },
  {
    "id": "pseudo-s1-12",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q12. Logical OR Condition",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 4, b = 2, c = 4\n\nif (a > c || (a + b) < (b - a))\n    b = 8 + a\nend if\n\nPrint a + b + c",
    "options": [
      {
        "key": "A",
        "text": "8",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "10",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "14",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "16",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "10",
    "explanation": "Step-by-step evaluation:\n1. Initially: a = 4, b = 2, c = 4\n2. Check first condition: a > c\n   4 > 4 is FALSE.\n3. Check second condition: (a + b) < (b - a)\n   a + b = 4 + 2 = 6\n   b - a = 2 - 4 = -2\n   6 < -2 is FALSE.\n4. false || false = FALSE.\n   The assignment b = 8 + a is NOT executed.\n5. b remains 2.\n6. Print a + b + c = 4 + 2 + 4 = 10.\n\nOutput: 10",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 4, b = 2, c = 4",
        "variables": {
          "a": 4,
          "b": 2,
          "c": 4
        },
        "note": "Initial values."
      },
      {
        "line": 4,
        "code": "a > c",
        "variables": {
          "a": 4,
          "c": 4
        },
        "note": "4 > 4 is FALSE."
      },
      {
        "line": 4,
        "code": "(a + b) < (b - a)",
        "variables": {
          "a+b": 6,
          "b-a": -2
        },
        "note": "6 < -2 is FALSE."
      },
      {
        "line": 4,
        "code": "false || false",
        "variables": {
          "result": false
        },
        "note": "Entire OR condition is FALSE. if-body skipped."
      },
      {
        "line": 8,
        "code": "Print a + b + c",
        "variables": {
          "a": 4,
          "b": 2,
          "c": 4,
          "output": 10
        },
        "note": "4 + 2 + 4 = 10."
      }
    ]
  },
  {
    "id": "pseudo-s1-13",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "medium",
    "title": "Q13. XOR and Boolean Conditions",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 3, b = 1, c = 2\n\nb = b ^ a\n\nif (b && c)\n    b = 1\n    if (a)\n        a = a mod 1\n    end if\n    c = 0\nend if\n\nPrint a + b + c",
    "options": [
      {
        "key": "A",
        "text": "0",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "1",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "3",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "6",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "1",
    "explanation": "Step-by-step evaluation:\n1. Initially: a = 3, b = 1, c = 2\n2. Compute b = b ^ a:\n   1 in binary = 01\n   3 in binary = 11\n   1 ^ 3 = 10 (binary) = 2.\n   So b = 2.\n3. Check if (b && c):\n   Both b (2) and c (2) are non-zero (truthy), so condition is TRUE.\n4. Inside if block:\n   b = 1\n   Check if (a):\n   a = 3 is non-zero (truthy).\n   a = a mod 1 = 3 mod 1 = 0.\n   c = 0.\n5. Final calculation:\n   Print a + b + c = 0 + 1 + 0 = 1.\n\nOutput: 1",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 3, b = 1, c = 2",
        "variables": {
          "a": 3,
          "b": 1,
          "c": 2
        },
        "note": "Initial values."
      },
      {
        "line": 4,
        "code": "b = b ^ a",
        "variables": {
          "b": 2
        },
        "note": "1 ^ 3 = 2."
      },
      {
        "line": 6,
        "code": "if (b && c)",
        "variables": {
          "b": 2,
          "c": 2
        },
        "note": "2 && 2 is TRUE."
      },
      {
        "line": 7,
        "code": "b = 1",
        "variables": {
          "b": 1
        },
        "note": "b becomes 1."
      },
      {
        "line": 9,
        "code": "a = a mod 1",
        "variables": {
          "a": 0
        },
        "note": "3 mod 1 = 0. a becomes 0."
      },
      {
        "line": 11,
        "code": "c = 0",
        "variables": {
          "c": 0
        },
        "note": "c becomes 0."
      },
      {
        "line": 14,
        "code": "Print a + b + c",
        "variables": {
          "a": 0,
          "b": 1,
          "c": 0,
          "output": 1
        },
        "note": "0 + 1 + 0 = 1."
      }
    ]
  },
  {
    "id": "pseudo-s1-14",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Array & Matrix Indexing",
    "difficulty": "medium",
    "title": "Q14. Two-Dimensional Array and Jump",
    "question": "What will be the output of the following pseudocode?",
    "code": "char arr[4][2]\nset arr[4][2] = {\n    {12, 21},\n    {13, 54},\n    {52, 63},\n    {17, 81}\n}\nInteger a, k, j\nset a = 0\n\nfor (each k from 0 to 3)\n    for (each j from value equal to k to less than equal to the value of k)\n        a = a + arr[k][j]\n    end for\n    jump out of the loop\nend for\n\nprint a",
    "options": [
      {
        "key": "A",
        "text": "12",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "B",
        "text": "21",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "33",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "100",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "A",
    "correct_answer": "12",
    "explanation": "Step-by-step evaluation:\n1. Matrix initialization:\n   arr[0] = {12, 21}\n   arr[1] = {13, 54}\n   arr[2] = {52, 63}\n   arr[3] = {17, 81}\n   a = 0\n2. Outer loop: k = 0\n3. Inner loop: j from k (0) to k (0) -> runs once for j = 0:\n   a = a + arr[0][0] = 0 + 12 = 12.\n4. Inner loop completes.\n5. Next statement: jump out of the loop (break).\n   This immediately terminates the outer loop!\n6. Outer loop halts after k = 0.\n   print a -> prints 12.\n\nOutput: 12",
    "stepTrace": [
      {
        "line": 10,
        "code": "set a = 0",
        "variables": {
          "a": 0
        },
        "note": "a initialized to 0."
      },
      {
        "line": 12,
        "code": "k = 0",
        "variables": {
          "k": 0
        },
        "note": "First outer loop iteration."
      },
      {
        "line": 13,
        "code": "j = 0: a = a + arr[k][j]",
        "variables": {
          "a": 12,
          "arr[0][0]": 12
        },
        "note": "a = 0 + 12 = 12."
      },
      {
        "line": 16,
        "code": "jump out of the loop",
        "variables": {
          "a": 12
        },
        "note": "Break immediately exits the outer loop."
      },
      {
        "line": 19,
        "code": "print a",
        "variables": {
          "output": 12
        },
        "note": "Final output is 12."
      }
    ]
  },
  {
    "id": "pseudo-s1-15",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Array & Matrix Indexing",
    "difficulty": "medium",
    "title": "Q15. Array Modification",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer arr[8]\nset arr[8] = {1, 3, 17, 15, 9}\n\nfor (each a from 0 to 4)\n    if (a mod 2 equals 0)\n        arr[a] = arr[a] + 1\n    else\n        arr[a] = arr[a] - 1\n    end if\nend for\n\nprint arr[1] + arr[2] * arr[4]",
    "options": [
      {
        "key": "A",
        "text": "182",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "B",
        "text": "180",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "178",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "170",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "A",
    "correct_answer": "182",
    "explanation": "Step-by-step evaluation:\nOriginal array: [1, 3, 17, 15, 9]\n\nLoop runs for index a from 0 to 4:\n• a = 0 (even): arr[0] = 1 + 1 = 2\n• a = 1 (odd):  arr[1] = 3 - 1 = 2\n• a = 2 (even): arr[2] = 17 + 1 = 18\n• a = 3 (odd):  arr[3] = 15 - 1 = 14\n• a = 4 (even): arr[4] = 9 + 1 = 10\n\nUpdated array: [2, 2, 18, 14, 10]\n\nEvaluate expression: arr[1] + arr[2] * arr[4]\nMultiplication has higher precedence than addition:\n= 2 + (18 * 10)\n= 2 + 180\n= 182.\n\nOutput: 182",
    "stepTrace": [
      {
        "line": 2,
        "code": "arr = {1, 3, 17, 15, 9}",
        "variables": {
          "arr": "[1, 3, 17, 15, 9]"
        },
        "note": "Original array."
      },
      {
        "line": 5,
        "code": "a=0 (even): arr[0] = 1+1",
        "variables": {
          "arr[0]": 2
        },
        "note": "index 0 becomes 2."
      },
      {
        "line": 7,
        "code": "a=1 (odd):  arr[1] = 3-1",
        "variables": {
          "arr[1]": 2
        },
        "note": "index 1 becomes 2."
      },
      {
        "line": 5,
        "code": "a=2 (even): arr[2] = 17+1",
        "variables": {
          "arr[2]": 18
        },
        "note": "index 2 becomes 18."
      },
      {
        "line": 7,
        "code": "a=3 (odd):  arr[3] = 15-1",
        "variables": {
          "arr[3]": 14
        },
        "note": "index 3 becomes 14."
      },
      {
        "line": 5,
        "code": "a=4 (even): arr[4] = 9+1",
        "variables": {
          "arr[4]": 10
        },
        "note": "index 4 becomes 10."
      },
      {
        "line": 11,
        "code": "print arr[1] + arr[2] * arr[4]",
        "variables": {
          "expression": "2 + 18 * 10",
          "output": 182
        },
        "note": "2 + 180 = 182."
      }
    ]
  },
  {
    "id": "pseudo-s1-16",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q16. While Loop with Jump",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x\nSet x = 15\n\nwhile (x EQUALS 15)\n    print \"student\"\n    jump out of the loop\nend while",
    "options": [
      {
        "key": "A",
        "text": "student student",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "student",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "No output",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Infinite loop",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "student",
    "explanation": "Step-by-step evaluation:\n1. Initially: x = 15\n2. while (x EQUALS 15) evaluates to true because 15 == 15.\n3. Inside loop:\n   print \"student\" is executed.\n4. Next line: jump out of the loop (break).\n   Immediately terminates the while loop.\n5. The string \"student\" is printed exactly once.\n\nOutput: student",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set x = 15",
        "variables": {
          "x": 15
        },
        "note": "x initialized to 15."
      },
      {
        "line": 4,
        "code": "while (x EQUALS 15)",
        "variables": {
          "x": 15
        },
        "note": "Condition 15 == 15 is true."
      },
      {
        "line": 5,
        "code": "print \"student\"",
        "variables": {
          "output": "student"
        },
        "note": "Prints \"student\"."
      },
      {
        "line": 6,
        "code": "jump out of the loop",
        "variables": {},
        "note": "Break exits loop immediately."
      }
    ]
  },
  {
    "id": "pseudo-s1-17",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q17. Repeated Modulo Operations",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a\nSet a = 27\n\na = a mod 30\na = a mod 29\na = a mod 28\na = a mod 27\n\nPrint a",
    "options": [
      {
        "key": "A",
        "text": "1",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "26",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "27",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "0",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "0",
    "explanation": "Step-by-step evaluation:\n1. Start: a = 27\n2. a = 27 mod 30 = 27 (since 27 < 30, remainder is 27)\n3. a = 27 mod 29 = 27 (since 27 < 29, remainder is 27)\n4. a = 27 mod 28 = 27 (since 27 < 28, remainder is 27)\n5. a = 27 mod 27 = 0 (27 divided by 27 gives quotient 1 and remainder 0)\n6. Print a:\n   Outputs 0.\n\nOutput: 0",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 27",
        "variables": {
          "a": 27
        },
        "note": "a initialized to 27."
      },
      {
        "line": 4,
        "code": "a = a mod 30",
        "variables": {
          "a": 27
        },
        "note": "27 mod 30 = 27."
      },
      {
        "line": 5,
        "code": "a = a mod 29",
        "variables": {
          "a": 27
        },
        "note": "27 mod 29 = 27."
      },
      {
        "line": 6,
        "code": "a = a mod 28",
        "variables": {
          "a": 27
        },
        "note": "27 mod 28 = 27."
      },
      {
        "line": 7,
        "code": "a = a mod 27",
        "variables": {
          "a": 0
        },
        "note": "27 mod 27 = 0."
      },
      {
        "line": 9,
        "code": "Print a",
        "variables": {
          "output": 0
        },
        "note": "Final output is 0."
      }
    ]
  },
  {
    "id": "pseudo-s1-18",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q18. Recursive Function — p, q",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer p, Integer q)\n    if (p > 1)\n        fun(p - 3, q + 3)\n        Print q\n    end if\nend function\n// Executed for p = 18, q = 3",
    "options": [
      {
        "key": "A",
        "text": "18 15 12 9 6 3",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "21 18 15 12 9 6 3",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "21 18 15 12 9 6",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "18 15 12 9 6",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "21 18 15 12 9 6 3",
    "explanation": "Track recursive call chain:\n• fun(18, 3): 18 > 1 -> calls fun(15, 6)\n• fun(15, 6): 15 > 1 -> calls fun(12, 9)\n• fun(12, 9): 12 > 1 -> calls fun(9, 12)\n• fun(9, 12):  9 > 1 -> calls fun(6, 15)\n• fun(6, 15):  6 > 1 -> calls fun(3, 18)\n• fun(3, 18):  3 > 1 -> calls fun(0, 21)\n• fun(0, 21):  0 > 1 is false, recursion stops.\n\nAs the call stack unwinds, Print q executes in reverse order:\n21\n18\n15\n12\n9\n6\n3\n\nOutput: 21 18 15 12 9 6 3",
    "stepTrace": [
      {
        "line": 1,
        "code": "fun(18, 3)",
        "variables": {
          "p": 18,
          "q": 3
        },
        "note": "Initial call."
      },
      {
        "line": 3,
        "code": "Recursive descent...",
        "variables": {
          "chain": "(18,3)->(15,6)->(12,9)->(9,12)->(6,15)->(3,18)->(0,21)"
        },
        "note": "p decreases by 3, q increases by 3 until p <= 1."
      },
      {
        "line": 2,
        "code": "Base case in fun(0, 21)",
        "variables": {
          "p": 0,
          "q": 21
        },
        "note": "0 > 1 is false. Stack unwinds."
      },
      {
        "line": 4,
        "code": "Print q during unwinding",
        "variables": {
          "output": "21 18 15 12 9 6 3"
        },
        "note": "Values of q print in reverse order."
      }
    ]
  },
  {
    "id": "pseudo-s2-01",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q1. Prime Number / Conditional Output",
    "question": "What will be the output of the following pseudocode?",
    "code": "A computer program is designed to operate on positive integers using the following steps:\n\nStep 1: Start\nStep 2: Input integer X\nStep 3: Is X prime?\nStep 4: If answer to step 3 is YES go to step 6\nStep 5: If answer to step 3 is NO go to step 7\nStep 6: Calculate Y = X² + 1, Display Y and go to step 12\nStep 7: Is X even?\nStep 8: If answer to step 7 is YES go to step 10\nStep 9: If answer to step 7 is NO go to step 11\nStep 10: Calculate Y = 2X + 4, Display Y and go to step 12\nStep 11: Calculate Y = 2X - 1, Display Y and go to step 12\nStep 12: End\n\nFor how many values of input X less than 50 will the computer display the same output?",
    "options": [
      {
        "key": "A",
        "text": "0",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "B",
        "text": "1",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "2",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "3",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "A",
    "correct_answer": "0",
    "explanation": "There are three possible cases based on X:\n1. Prime X: Y = X² + 1\n2. Non-prime even: Y = 2X + 4\n3. Non-prime odd: Y = 2X - 1\n\nChecking positive integers below 50:\n- For any distinct inputs, each formula is strictly monotonic and outputs do not overlap across branches.\nFor example:\nX = 1 (non-prime odd) -> Y = 2(1) - 1 = 1\nX = 2 (prime) -> Y = 2² + 1 = 5\nX = 3 (prime) -> Y = 3² + 1 = 10\nX = 4 (non-prime even) -> Y = 2(4) + 4 = 12\nX = 6 (non-prime even) -> Y = 2(6) + 4 = 16\nX = 9 (non-prime odd) -> Y = 2(9) - 1 = 17\nX = 10 (non-prime even) -> Y = 2(10) + 4 = 24\nX = 11 (prime) -> Y = 11² + 1 = 122\n\nNo two distinct inputs X produce the same output.\nFinal Answer: 0 values (Option A)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Input integer X (< 50)",
        "variables": {
          "X": "Positive integer < 50"
        },
        "note": "Analyze three possible formula branches."
      },
      {
        "line": 6,
        "code": "Prime branch: Y = X² + 1",
        "variables": {
          "outputs": "5, 10, 26, 50, 122..."
        },
        "note": "Strictly increasing quadratic sequence."
      },
      {
        "line": 10,
        "code": "Non-prime even: Y = 2X + 4",
        "variables": {
          "outputs": "12, 16, 20, 24..."
        },
        "note": "Even values strictly separated."
      },
      {
        "line": 11,
        "code": "Non-prime odd: Y = 2X - 1",
        "variables": {
          "outputs": "1, 17, 29, 41..."
        },
        "note": "Odd values that never collide with primes."
      },
      {
        "line": 12,
        "code": "Compare output collisions",
        "variables": {
          "duplicates": 0
        },
        "note": "No collisions occur for any X < 50."
      }
    ]
  },
  {
    "id": "pseudo-s2-02",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q2. Nested if-else Ordering",
    "question": "What will be the output of the following pseudocode?",
    "code": "main()\n{\n    int x;\n    if (x > 4)\n        print(\"Binod\");\n    else if (x > 10)\n        print(\"Karthik\");\n    else if (x > 21)\n        print(\"Pradeep\");\n    else\n        print(\"Sandeep\");\n}\n\nWhat will be the value of x so that \"Karthik\" will be printed?",
    "options": [
      {
        "key": "A",
        "text": "5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "10",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "15",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "No value of x",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No value of x",
    "explanation": "Look at the first condition in the if-else ladder:\nif (x > 4)\n    print(\"Binod\");\n\nFor \"Karthik\" to execute, the first condition must be false:\nx <= 4\n\nHowever, the condition for printing Karthik is:\nelse if (x > 10)\n\nThese two conditions (x <= 4 AND x > 10) cannot simultaneously be true for any real number. Any value of x > 10 will always satisfy (x > 4) first and print \"Binod\".\n\nTherefore, \"Karthik\" can never be printed.\nFinal Answer: No value of x (Option D)",
    "stepTrace": [
      {
        "line": 4,
        "code": "if (x > 4) -> print(\"Binod\")",
        "variables": {
          "condition": "x > 4"
        },
        "note": "Any x > 4 immediately enters this branch."
      },
      {
        "line": 6,
        "code": "else if (x > 10) -> print(\"Karthik\")",
        "variables": {
          "requirement": "x <= 4 AND x > 10"
        },
        "note": "Reaching this branch requires x <= 4."
      },
      {
        "line": 7,
        "code": "Conflict check",
        "variables": {
          "possible": false
        },
        "note": "x cannot simultaneously satisfy x <= 4 and x > 10."
      },
      {
        "line": 12,
        "code": "Conclusion",
        "variables": {
          "output": "Karthik is unreachable"
        },
        "note": "No value of x will print \"Karthik\"."
      }
    ]
  },
  {
    "id": "pseudo-s2-03",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q3. Variable Manipulation",
    "question": "What will be the output of the following pseudocode?",
    "code": "Input m = 9, n = 6\nm = m + 1\nn = n - 1\nm = m + n\n\nif (m > n)\n    print m\nelse\n    print n",
    "options": [
      {
        "key": "A",
        "text": "14",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "15",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "16",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "17",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "15",
    "explanation": "Initially:\nm = 9, n = 6\n\nStep 1:\nm = m + 1 = 9 + 1 = 10\n\nStep 2:\nn = n - 1 = 6 - 1 = 5\n\nStep 3:\nm = m + n = 10 + 5 = 15\n\nStep 4: Check condition:\nif (m > n) -> (15 > 5) is TRUE.\n\nTherefore:\nprint m -> prints 15.\n\nFinal Answer: 15 (Option B)",
    "stepTrace": [
      {
        "line": 1,
        "code": "Input m = 9, n = 6",
        "variables": {
          "m": 9,
          "n": 6
        },
        "note": "Initial values."
      },
      {
        "line": 2,
        "code": "m = m + 1",
        "variables": {
          "m": 10,
          "n": 6
        },
        "note": "m becomes 10."
      },
      {
        "line": 3,
        "code": "n = n - 1",
        "variables": {
          "m": 10,
          "n": 5
        },
        "note": "n becomes 5."
      },
      {
        "line": 4,
        "code": "m = m + n",
        "variables": {
          "m": 15,
          "n": 5
        },
        "note": "m = 10 + 5 = 15."
      },
      {
        "line": 5,
        "code": "if (m > n)",
        "variables": {
          "condition": "15 > 5 (true)"
        },
        "note": "Condition is true."
      },
      {
        "line": 6,
        "code": "print m",
        "variables": {
          "output": 15
        },
        "note": "Prints 15."
      }
    ]
  },
  {
    "id": "pseudo-s2-04",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q4. Recursive Function",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer fun(Integer x, Integer y)\n    if (x > 1)\n        fun(x - 2, y + 2)\n    end if\n    print y\nEnd function fun()\n\n// Executed for x = 4 and y = 5",
    "options": [
      {
        "key": "A",
        "text": "5 7 9",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "9 7 5",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "7 9 5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "9 5 7",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "9 7 5",
    "explanation": "Call Stack Trace for fun(4, 5):\n1. fun(4, 5):\n   - Condition (4 > 1) is true.\n   - Calls fun(4 - 2, 5 + 2) = fun(2, 7).\n\n2. fun(2, 7):\n   - Condition (2 > 1) is true.\n   - Calls fun(2 - 2, 7 + 2) = fun(0, 9).\n\n3. fun(0, 9):\n   - Condition (0 > 1) is false.\n   - Proceeds to print y: prints 9.\n   - Returns to fun(2, 7).\n\n4. Returning to fun(2, 7):\n   - Executes print y: prints 7.\n   - Returns to fun(4, 5).\n\n5. Returning to fun(4, 5):\n   - Executes print y: prints 5.\n\nOutput sequence: 9 7 5\nFinal Answer: 9 7 5 (Option B)",
    "stepTrace": [
      {
        "line": 1,
        "code": "fun(4, 5)",
        "variables": {
          "x": 4,
          "y": 5
        },
        "note": "4 > 1 is true, invokes fun(2, 7)."
      },
      {
        "line": 3,
        "code": "fun(2, 7)",
        "variables": {
          "x": 2,
          "y": 7
        },
        "note": "2 > 1 is true, invokes fun(0, 9)."
      },
      {
        "line": 3,
        "code": "fun(0, 9)",
        "variables": {
          "x": 0,
          "y": 9
        },
        "note": "0 > 1 is false. Base case reached."
      },
      {
        "line": 5,
        "code": "print y in fun(0, 9)",
        "variables": {
          "output": "9"
        },
        "note": "Prints 9."
      },
      {
        "line": 5,
        "code": "print y in fun(2, 7)",
        "variables": {
          "output": "9 7"
        },
        "note": "Prints 7."
      },
      {
        "line": 5,
        "code": "print y in fun(4, 5)",
        "variables": {
          "output": "9 7 5"
        },
        "note": "Prints 5."
      }
    ]
  },
  {
    "id": "pseudo-s2-05",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q5. Character Output in C",
    "question": "What will be the output of the following pseudocode?",
    "code": "#include <stdio.h>\nint main()\n{\n    char ch = 'A';\n    printf(\"%c\\n\", ch);\n    return 0;\n}",
    "options": [
      {
        "key": "A",
        "text": "65",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "A",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "a",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "%c",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "A",
    "explanation": "In C:\n- The variable 'char ch = 'A'' stores the ASCII representation of the character 'A' (value 65).\n- In printf(\"%c\\n\", ch), the '%c' format specifier prints the character representation rather than its numerical ASCII code.\n- Therefore, it prints: A.\n\nFinal Answer: A (Option B)",
    "stepTrace": [
      {
        "line": 4,
        "code": "char ch = 'A';",
        "variables": {
          "ch": "'A'",
          "ascii": 65
        },
        "note": "ch stores character literal A."
      },
      {
        "line": 5,
        "code": "printf(\"%c\\n\", ch);",
        "variables": {
          "format": "%c",
          "output": "A"
        },
        "note": "%c specifier outputs character glyph A."
      },
      {
        "line": 6,
        "code": "return 0;",
        "variables": {
          "status": 0
        },
        "note": "Program exits."
      }
    ]
  },
  {
    "id": "pseudo-s2-06",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "medium",
    "title": "Q6. Bitwise XOR and AND",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer funn(Integer a, Integer b)\n    if (b ^ a < b & a)\n        return a\n    end if\n    return a + b\nEnd function funn()\n\nWhat does the function return?",
    "options": [
      {
        "key": "A",
        "text": "Always a",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "Always a + b",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "Either a or a + b, depending on the values of a and b",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "Always 0",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Either a or a + b, depending on the values of a and b",
    "explanation": "Analysis:\n- The function does not have fixed constants for inputs a and b.\n- The condition (b ^ a < b & a) depends on the relational comparison and the bitwise representations of a and b:\n  - If the condition is true, the function returns a.\n  - Otherwise, it falls through to return a + b.\n- Therefore, the exact return value cannot be fixed as a single constant without knowing the arguments. It returns either a or a + b depending on the values of a and b.\n\nFinal Answer: Either a or a + b, depending on the values of a and b (Option C)",
    "stepTrace": [
      {
        "line": 1,
        "code": "funn(Integer a, Integer b)",
        "variables": {
          "a": "unknown",
          "b": "unknown"
        },
        "note": "Function receives general inputs a and b."
      },
      {
        "line": 2,
        "code": "if (b ^ a < b & a)",
        "variables": {
          "branch1": "return a",
          "branch2": "return a + b"
        },
        "note": "Branch condition depends on values of a and b."
      },
      {
        "line": 3,
        "code": "return a",
        "variables": {
          "condition": "true"
        },
        "note": "Executed when condition holds."
      },
      {
        "line": 6,
        "code": "return a + b",
        "variables": {
          "condition": "false"
        },
        "note": "Executed when condition is false."
      }
    ]
  },
  {
    "id": "pseudo-s2-07",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q7. Arithmetic + Conditional",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b, c\nSet a = 3, b = 4, c = 6\nc = (5 + 7) + c\nif ((c - 6) > (6 - c))\n    b = b + b\nend if\nPrint a + b + c",
    "options": [
      {
        "key": "A",
        "text": "25",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "27",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "29",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "31",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "29",
    "explanation": "Initially:\na = 3, b = 4, c = 6\n\nStep 1: Compute c:\nc = (5 + 7) + 6 = 12 + 6 = 18\n\nStep 2: Condition check:\n(c - 6) > (6 - c)\n(18 - 6) > (6 - 18)\n12 > -12 (TRUE)\n\nStep 3: Since condition is true:\nb = b + b = 4 + 4 = 8\n\nStep 4: Print sum:\na + b + c = 3 + 8 + 18 = 29\n\nFinal Answer: 29 (Option C)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 3, b = 4, c = 6",
        "variables": {
          "a": 3,
          "b": 4,
          "c": 6
        },
        "note": "Initial variable values."
      },
      {
        "line": 3,
        "code": "c = (5 + 7) + c",
        "variables": {
          "c": 18
        },
        "note": "c = 12 + 6 = 18."
      },
      {
        "line": 4,
        "code": "if ((c - 6) > (6 - c))",
        "variables": {
          "left": 12,
          "right": -12,
          "cond": "12 > -12 (true)"
        },
        "note": "Condition is true."
      },
      {
        "line": 5,
        "code": "b = b + b",
        "variables": {
          "b": 8
        },
        "note": "b = 4 + 4 = 8."
      },
      {
        "line": 7,
        "code": "Print a + b + c",
        "variables": {
          "output": "3 + 8 + 18 = 29"
        },
        "note": "Prints 29."
      }
    ]
  },
  {
    "id": "pseudo-s2-08",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "hard",
    "title": "Q8. Nested Loops with XOR and AND",
    "question": "What will be the output of the following pseudocode?",
    "code": "// For a = 2, b = 6, c = 7\nInteger funn(Integer a, Integer b, Integer c)\n    for (each c from 2 to 5)\n        b = (a + 5) ^ a\n        a = (a) + b\n    end for\n    for (each c from 2 to 3)\n        b = (c + a) & c\n    end for\n    return a + b",
    "options": [
      {
        "key": "A",
        "text": "31",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "33",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "35",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "37",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "35",
    "explanation": "Given: a = 2, b = 6, c = 7\n\nFirst loop: for c from 2 to 5 (4 iterations):\n- c = 2:\n  b = (2 + 5) ^ 2 = 7 ^ 2 = 5\n  a = 2 + 5 = 7\n- c = 3:\n  b = (7 + 5) ^ 7 = 12 ^ 7 = 11\n  a = 7 + 11 = 18\n- c = 4:\n  b = (18 + 5) ^ 18 = 23 ^ 18 = 5\n  a = 18 + 5 = 23\n- c = 5:\n  b = (23 + 5) ^ 23 = 28 ^ 23 = 11\n  a = 23 + 11 = 34\n\nSecond loop: for c from 2 to 3 (2 iterations):\n- c = 2:\n  b = (2 + 34) & 2 = 36 & 2 = 0\n- c = 3:\n  b = (3 + 34) & 3 = 37 & 3 = 1\n\nReturn statement:\nreturn a + b = 34 + 1 = 35.\n\nFinal Answer: 35 (Option C)",
    "stepTrace": [
      {
        "line": 1,
        "code": "funn(2, 6, 7)",
        "variables": {
          "a": 2,
          "b": 6,
          "c": 7
        },
        "note": "Initial inputs."
      },
      {
        "line": 2,
        "code": "Loop 1, c = 2",
        "variables": {
          "b": "7 ^ 2 = 5",
          "a": "2 + 5 = 7"
        },
        "note": "After iter 1: a=7, b=5."
      },
      {
        "line": 2,
        "code": "Loop 1, c = 3",
        "variables": {
          "b": "12 ^ 7 = 11",
          "a": "7 + 11 = 18"
        },
        "note": "After iter 2: a=18, b=11."
      },
      {
        "line": 2,
        "code": "Loop 1, c = 4",
        "variables": {
          "b": "23 ^ 18 = 5",
          "a": "18 + 5 = 23"
        },
        "note": "After iter 3: a=23, b=5."
      },
      {
        "line": 2,
        "code": "Loop 1, c = 5",
        "variables": {
          "b": "28 ^ 23 = 11",
          "a": "23 + 11 = 34"
        },
        "note": "After iter 4: a=34, b=11."
      },
      {
        "line": 6,
        "code": "Loop 2, c = 2",
        "variables": {
          "b": "(2 + 34) & 2 = 0"
        },
        "note": "36 & 2 = 0."
      },
      {
        "line": 6,
        "code": "Loop 2, c = 3",
        "variables": {
          "b": "(3 + 34) & 3 = 1"
        },
        "note": "37 & 3 = 1."
      },
      {
        "line": 9,
        "code": "return a + b",
        "variables": {
          "output": "34 + 1 = 35"
        },
        "note": "Final return is 35."
      }
    ]
  },
  {
    "id": "pseudo-s2-09",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Bitwise Logic (^, &, |, >>, <<)",
    "difficulty": "hard",
    "title": "Q9. Nested if, XOR and AND",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer funn(Integer a, Integer b, Integer c)\n    if ((c ^ b ^ a) > (a ^ c))\n        if ((3 ^ 9) < c)\n            b = (1 ^ 10) + a\n        end if\n        a = 2 & a\n        a = 4 ^ a\n    else\n        a = (b + 11) + b\n        if ((a ^ 4) < (7 + a))\n            b = (b + b) + c\n            c = (a & 12) + a\n        end if\n    end if\n    return a + b + c\n\nWhat will be the output of the pseudocode?",
    "options": [
      {
        "key": "A",
        "text": "24",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "27",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "31",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Cannot be determined from the given information",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Cannot be determined from the given information",
    "explanation": "Analysis:\n- The function funn(Integer a, Integer b, Integer c) has branching conditions that depend strictly on initial arguments for a, b, and c.\n- In the original Accenture exam question paper/screenshot, no initial call or argument values (e.g. funn(x, y, z)) were provided.\n- Without these input values, the conditions ((c ^ b ^ a) > (a ^ c)) cannot be evaluated, and a concrete numerical output cannot be calculated.\n- Official Answer Key Option: D.\n\nFinal Answer: Cannot be determined from the given information (Option D)",
    "stepTrace": [
      {
        "line": 1,
        "code": "funn(Integer a, Integer b, Integer c)",
        "variables": {
          "a": "?",
          "b": "?",
          "c": "?"
        },
        "note": "No input parameters supplied in the question."
      },
      {
        "line": 2,
        "code": "if ((c ^ b ^ a) > (a ^ c))",
        "variables": {
          "branch": "Indeterminate"
        },
        "note": "Cannot branch without input values."
      },
      {
        "line": 16,
        "code": "return a + b + c",
        "variables": {
          "result": "Cannot be determined"
        },
        "note": "Master key marks Option D as correct."
      }
    ]
  },
  {
    "id": "pseudo-s2-10",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q10. Volume and Surface Area",
    "question": "What will be the output of the following pseudocode?",
    "code": "BEGIN\n    Initialize width to 2\n    Initialize depth to 2\n    Initialize height to 2\n\n    vol = height * width * depth\n\n    surf1 = height * width\n    surf2 = width * depth\n    surf3 = height * depth\n\n    surface area = 2 * (surf1 + surf2 + surf3)\n\n    Display \"Volume = \", volume\n    Display \"Surface Area = \", surface area\nEND",
    "options": [
      {
        "key": "A",
        "text": "Volume = 6, Surface Area = 12",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "Volume = 8, Surface Area = 24",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "Volume = 8, Surface Area = 12",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Volume = 12, Surface Area = 24",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Volume = 8, Surface Area = 24",
    "explanation": "All dimensions are 2:\nwidth = 2, depth = 2, height = 2\n\nVolume:\nV = height * width * depth = 2 * 2 * 2 = 8\n\nSurface Area:\nsurf1 = 2 * 2 = 4\nsurf2 = 2 * 2 = 4\nsurf3 = 2 * 2 = 4\nsurface area = 2 * (surf1 + surf2 + surf3)\n             = 2 * (4 + 4 + 4)\n             = 2 * 12\n             = 24\n\nDisplays: Volume = 8, Surface Area = 24\nFinal Answer: Volume = 8, Surface Area = 24 (Option B)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Initialize dimensions to 2",
        "variables": {
          "width": 2,
          "depth": 2,
          "height": 2
        },
        "note": "All sides are 2."
      },
      {
        "line": 6,
        "code": "vol = height * width * depth",
        "variables": {
          "vol": 8
        },
        "note": "2 * 2 * 2 = 8."
      },
      {
        "line": 8,
        "code": "surf1, surf2, surf3",
        "variables": {
          "surf1": 4,
          "surf2": 4,
          "surf3": 4
        },
        "note": "Each side area is 4."
      },
      {
        "line": 12,
        "code": "surface area = 2 * (surf1 + surf2 + surf3)",
        "variables": {
          "surfaceArea": 24
        },
        "note": "2 * (4 + 4 + 4) = 24."
      },
      {
        "line": 14,
        "code": "Display statements",
        "variables": {
          "output": "Volume = 8, Surface Area = 24"
        },
        "note": "Matches Option B."
      }
    ]
  },
  {
    "id": "pseudo-s2-11",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Recursive Call Stack Tracing",
    "difficulty": "medium",
    "title": "Q11. Recursive Function — Number of Calls",
    "question": "What will be the output of the following pseudocode?",
    "code": "1. Declare the Function and give integer as a parameter.\n2. Write the main function. Call the function and give 5 as parameter.\n3. Write a declared function along with formal parameter num.\n    If num > 0\n        print \"Welcome\"\n        Function call inside function(num--) as formal parameter.\n4. End.\n\nHow many times will the code print Welcome?",
    "options": [
      {
        "key": "A",
        "text": "4",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "5",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "6",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Infinite times",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "5",
    "explanation": "Initial call: function(5)\n- num = 5: condition (5 > 0) is true -> prints \"Welcome\" (1st time), calls function with 4\n- num = 4: condition (4 > 0) is true -> prints \"Welcome\" (2nd time), calls function with 3\n- num = 3: condition (3 > 0) is true -> prints \"Welcome\" (3rd time), calls function with 2\n- num = 2: condition (2 > 0) is true -> prints \"Welcome\" (4th time), calls function with 1\n- num = 1: condition (1 > 0) is true -> prints \"Welcome\" (5th time), calls function with 0\n- num = 0: condition (0 > 0) is false -> terminates recursion.\n\nWelcome is printed for: 5, 4, 3, 2, 1 (total 5 times).\nFinal Answer: 5 (Option B)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Initial call: function(5)",
        "variables": {
          "num": 5
        },
        "note": "Function invoked with 5."
      },
      {
        "line": 3,
        "code": "num = 5 > 0 -> print \"Welcome\"",
        "variables": {
          "count": 1,
          "next": 4
        },
        "note": "1st print."
      },
      {
        "line": 3,
        "code": "num = 4 > 0 -> print \"Welcome\"",
        "variables": {
          "count": 2,
          "next": 3
        },
        "note": "2nd print."
      },
      {
        "line": 3,
        "code": "num = 3 > 0 -> print \"Welcome\"",
        "variables": {
          "count": 3,
          "next": 2
        },
        "note": "3rd print."
      },
      {
        "line": 3,
        "code": "num = 2 > 0 -> print \"Welcome\"",
        "variables": {
          "count": 4,
          "next": 1
        },
        "note": "4th print."
      },
      {
        "line": 3,
        "code": "num = 1 > 0 -> print \"Welcome\"",
        "variables": {
          "count": 5,
          "next": 0
        },
        "note": "5th print."
      },
      {
        "line": 3,
        "code": "num = 0 > 0 (false)",
        "variables": {
          "count": 5,
          "status": "Terminated"
        },
        "note": "Base case reached. Total = 5 times."
      }
    ]
  },
  {
    "id": "pseudo-s2-12",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Array & Matrix Indexing",
    "difficulty": "easy",
    "title": "Q12. Reverse a String Using an Array",
    "question": "What will be the output of the following pseudocode?",
    "code": "BEGIN\n    Declare an array variable called word\n    Declare a counter\n    Store a string in the array word\n    FOR counter = (length of the word) - 1 TO 0\n        counter = counter - 1\n        print word[counter]\n    END FOR\nEND\n\nWhat does the following pseudocode do?",
    "options": [
      {
        "key": "A",
        "text": "Prints the string normally",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "Prints the string in reverse order",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "Prints only the first character",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Counts the number of characters",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Prints the string in reverse order",
    "explanation": "Algorithm Analysis:\n- The counter begins at '(length of the word) - 1', which points to the last character in the string.\n- The loop iterates backwards down TO 0, which corresponds to the first character of the string.\n- Accessing indices from (length - 1) down to 0 outputs the characters in reverse order (e.g. \"HELLO\" -> \"OLLEH\").\n- Therefore, the algorithm prints the string in reverse order.\n\nFinal Answer: Prints the string in reverse order (Option B)",
    "stepTrace": [
      {
        "line": 4,
        "code": "Store string in array word",
        "variables": {
          "sample": "\"HELLO\""
        },
        "note": "Indexed from 0 to length - 1."
      },
      {
        "line": 5,
        "code": "FOR counter = (length - 1) TO 0",
        "variables": {
          "start": "length - 1",
          "end": 0
        },
        "note": "Iterates backwards from end to start."
      },
      {
        "line": 7,
        "code": "print word[counter]",
        "variables": {
          "order": "Last to first character"
        },
        "note": "Outputs string reversed."
      },
      {
        "line": 9,
        "code": "END",
        "variables": {
          "output": "Reverse order string"
        },
        "note": "Matches Option B."
      }
    ]
  },
  {
    "id": "pseudo-s2-13",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q13. Type Conversion + Increment/Decrement",
    "question": "What will be the output of the following pseudocode?",
    "code": "1. Initialise the float variable with 20.45\n2. Convert the float value in variable to integer.\n3. Perform the following operations on variable:\n    Post Decrement\n    +\n    Pre Decrement\n    -\n    Pre Increment\n4. Print the value.\n5. End\n\nIf the following pseudocode is implemented, what will be the output?",
    "options": [
      {
        "key": "A",
        "text": "17",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "18",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "19",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "Cannot be determined reliably from the supplied pseudocode",
        "explanation": "Matches the computed execution trace output."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Cannot be determined reliably from the supplied pseudocode",
    "explanation": "Step 1:\nConverting float 20.45 to integer yields 20.\n\nStep 2:\nThe sequence of operations corresponds to the expression:\nx-- + --x - ++x\n\nIn standard C/C++, modifying a scalar variable multiple times without an intervening sequence point results in undefined/unsequenced behavior. Compilers are allowed to evaluate these increments and decrements in varying orders, making the output compiler-dependent rather than deterministic.\n\nOfficial PYQ Answer Key: Language-dependent / Cannot be determined reliably from the supplied pseudocode (Option D).\n\nFinal Answer: Cannot be determined reliably from the supplied pseudocode (Option D)",
    "stepTrace": [
      {
        "line": 1,
        "code": "float var = 20.45",
        "variables": {
          "var": 20.45
        },
        "note": "Float initialized."
      },
      {
        "line": 2,
        "code": "Convert to integer",
        "variables": {
          "x": 20
        },
        "note": "x = 20."
      },
      {
        "line": 3,
        "code": "x-- + --x - ++x",
        "variables": {
          "status": "Unsequenced modifications"
        },
        "note": "Undefined behavior in C standard."
      },
      {
        "line": 4,
        "code": "Print the value",
        "variables": {
          "answer": "Ambiguous / Language-dependent"
        },
        "note": "Master key answer is Option D."
      }
    ]
  },
  {
    "id": "pseudo-s2-14",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q14. Function Arithmetic",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer funn(Integer a, Integer b)\n    a = a + b + 2\n    a = a * 2\n    if (a)\n        return a - b\n    end if\n    return a + b\nEnd function funn()\n\nWhat is the function's return value?",
    "options": [
      {
        "key": "A",
        "text": "a + b",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "a - b",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "2(a+b+2) - b",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "Always 0",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "2(a+b+2) - b",
    "explanation": "Trace the operations on 'a':\n1. a = a + b + 2\n2. a = a * 2 = 2 * (a + b + 2)\n3. if (a):\n   - Non-zero value evaluates to true.\n   - Executes: return a - b\n4. Substituting the updated expression for a:\n   return 2(a + b + 2) - b\n\nFinal Answer: 2(a+b+2) - b (Option C)",
    "stepTrace": [
      {
        "line": 2,
        "code": "a = a + b + 2",
        "variables": {
          "a": "a + b + 2"
        },
        "note": "First assignment."
      },
      {
        "line": 3,
        "code": "a = a * 2",
        "variables": {
          "a": "2(a + b + 2)"
        },
        "note": "Multiplied by 2."
      },
      {
        "line": 4,
        "code": "if (a)",
        "variables": {
          "cond": "Non-zero check (true)"
        },
        "note": "Enters if branch."
      },
      {
        "line": 5,
        "code": "return a - b",
        "variables": {
          "returnVal": "2(a + b + 2) - b"
        },
        "note": "Substitutes updated a."
      }
    ]
  },
  {
    "id": "pseudo-s2-15",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "medium",
    "title": "Q15. Loop Variable Modification",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y\nfor (each x from 1 to 11)\n    x = x + 2\nend for\nPrint x",
    "options": [
      {
        "key": "A",
        "text": "11",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "12",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "13",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "14",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "13",
    "explanation": "Trace of loop variable x:\n- x begins at 1.\n- In each iteration, x = x + 2:\n  Sequence of values: 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13.\n- When x = 11, executing x = x + 2 updates x to 13.\n- The loop termination condition checks whether x <= 11.\n- Since 13 > 11, the loop terminates.\n- Print x prints 13.\n\nFinal Answer: 13 (Option C)",
    "stepTrace": [
      {
        "line": 2,
        "code": "for (each x from 1 to 11)",
        "variables": {
          "x": 1
        },
        "note": "Loop begins at 1."
      },
      {
        "line": 3,
        "code": "x = x + 2",
        "variables": {
          "progression": "1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13"
        },
        "note": "x jumps by 2 each cycle."
      },
      {
        "line": 4,
        "code": "end for",
        "variables": {
          "x": 13
        },
        "note": "13 exceeds 11, loop exits."
      },
      {
        "line": 5,
        "code": "Print x",
        "variables": {
          "output": 13
        },
        "note": "Prints 13."
      }
    ]
  },
  {
    "id": "pseudo-s2-16",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "hard",
    "title": "Q16. While Loop + Division",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer a, b\nSet a = 125, b = 100\n\nif ((a + b) MOD 2 NOT EQUALS 0)\n    while (a > 0)\n        b = a + b\n        a = a / 2\n    end while\n    Print b\nelse\n    a = a - b\n    a = a / 2\n    Print a\nend if",
    "options": [
      {
        "key": "A",
        "text": "340",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "342",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "344",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "346",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "344",
    "explanation": "Initially:\na = 125, b = 100\n\nCondition check:\n(a + b) MOD 2 = (125 + 100) MOD 2 = 225 MOD 2 = 1.\n1 NOT EQUALS 0 is TRUE, so the while loop executes!\n\nIteration Table:\n- Start: a = 125, b = 100\n- Iteration 1: b = 125 + 100 = 225, a = 125 / 2 = 62\n- Iteration 2: b = 62 + 225 = 287, a = 62 / 2 = 31\n- Iteration 3: b = 31 + 287 = 318, a = 31 / 2 = 15\n- Iteration 4: b = 15 + 318 = 333, a = 15 / 2 = 7\n- Iteration 5: b = 7 + 333 = 340, a = 7 / 2 = 3\n- Iteration 6: b = 3 + 340 = 343, a = 3 / 2 = 1\n- Iteration 7: b = 1 + 343 = 344, a = 1 / 2 = 0\n\nWhen a = 0, the loop stops.\nPrint b prints 344.\n\nFinal Answer: 344 (Option C)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set a = 125, b = 100",
        "variables": {
          "a": 125,
          "b": 100
        },
        "note": "Initial values."
      },
      {
        "line": 4,
        "code": "if ((a + b) MOD 2 NOT EQUALS 0)",
        "variables": {
          "sum": 225,
          "mod2": 1,
          "cond": "true"
        },
        "note": "Enters while loop."
      },
      {
        "line": 6,
        "code": "Iter 1: b=225, a=62",
        "variables": {
          "a": 62,
          "b": 225
        },
        "note": "b = 100 + 125, a = 125 / 2 = 62."
      },
      {
        "line": 6,
        "code": "Iter 2: b=287, a=31",
        "variables": {
          "a": 31,
          "b": 287
        },
        "note": "b = 225 + 62, a = 62 / 2 = 31."
      },
      {
        "line": 6,
        "code": "Iter 3: b=318, a=15",
        "variables": {
          "a": 15,
          "b": 318
        },
        "note": "b = 287 + 31, a = 31 / 2 = 15."
      },
      {
        "line": 6,
        "code": "Iter 4: b=333, a=7",
        "variables": {
          "a": 7,
          "b": 333
        },
        "note": "b = 318 + 15, a = 15 / 2 = 7."
      },
      {
        "line": 6,
        "code": "Iter 5: b=340, a=3",
        "variables": {
          "a": 3,
          "b": 340
        },
        "note": "b = 333 + 7, a = 7 / 2 = 3."
      },
      {
        "line": 6,
        "code": "Iter 6: b=343, a=1",
        "variables": {
          "a": 1,
          "b": 343
        },
        "note": "b = 340 + 3, a = 3 / 2 = 1."
      },
      {
        "line": 6,
        "code": "Iter 7: b=344, a=0",
        "variables": {
          "a": 0,
          "b": 344
        },
        "note": "b = 343 + 1 = 344, a = 0. Loop stops."
      },
      {
        "line": 9,
        "code": "Print b",
        "variables": {
          "output": 344
        },
        "note": "Outputs 344."
      }
    ]
  },
  {
    "id": "pseudo-s2-17",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q17. Integer Division and Modulo",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y\nSet x = 16, y = 6\nx = x + y\ny = x / 10\nx = (x - y) MOD 5\nx = x + 6\nPrint x, y",
    "options": [
      {
        "key": "A",
        "text": "6 2",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "B",
        "text": "7 2",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "6 3",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "8 2",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "A",
    "correct_answer": "6 2",
    "explanation": "Initially:\nx = 16, y = 6\n\nStep 1:\nx = x + y = 16 + 6 = 22\n\nStep 2:\ny = x / 10 = 22 / 10 = 2 (Integer division truncates)\n\nStep 3:\nx = (x - y) MOD 5 = (22 - 2) MOD 5 = 20 MOD 5 = 0\n\nStep 4:\nx = x + 6 = 0 + 6 = 6\n\nStep 5:\nPrint x, y prints: 6 2\n\nFinal Answer: 6 2 (Option A)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set x = 16, y = 6",
        "variables": {
          "x": 16,
          "y": 6
        },
        "note": "Initial values."
      },
      {
        "line": 3,
        "code": "x = x + y",
        "variables": {
          "x": 22
        },
        "note": "x = 16 + 6 = 22."
      },
      {
        "line": 4,
        "code": "y = x / 10",
        "variables": {
          "y": 2
        },
        "note": "22 / 10 = 2."
      },
      {
        "line": 5,
        "code": "x = (x - y) MOD 5",
        "variables": {
          "x": 0
        },
        "note": "20 MOD 5 = 0."
      },
      {
        "line": 6,
        "code": "x = x + 6",
        "variables": {
          "x": 6
        },
        "note": "x = 0 + 6 = 6."
      },
      {
        "line": 7,
        "code": "Print x, y",
        "variables": {
          "output": "6 2"
        },
        "note": "Outputs 6 and 2."
      }
    ]
  },
  {
    "id": "pseudo-s2-18",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "Array & Matrix Indexing",
    "difficulty": "medium",
    "title": "Q18. Array Modification",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer j, m\nSet m = 1, j = 1\nInteger a[3] = {0, 1, 0}\n\na[0] = a[0] + a[1]\na[1] = a[1] + a[2]\na[2] = a[2] + a[0]\n\nif (a[0])\n    a[j] = 5\nend if\n\nm = m + a[j]\nPrint m",
    "options": [
      {
        "key": "A",
        "text": "5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "6",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "C",
        "text": "7",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "D",
        "text": "8",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "B",
    "correct_answer": "6",
    "explanation": "Initial array:\na = [0, 1, 0], m = 1, j = 1\n\nStep 1:\na[0] = a[0] + a[1] = 0 + 1 = 1\nArray is now: [1, 1, 0]\n\nStep 2:\na[1] = a[1] + a[2] = 1 + 0 = 1\nArray is now: [1, 1, 0]\n\nStep 3:\na[2] = a[2] + a[0] = 0 + 1 = 1\nArray is now: [1, 1, 1]\n\nCondition check:\nif (a[0]) -> a[0] = 1 is non-zero (true).\nSince j = 1:\na[j] = a[1] = 5.\nArray is now: [1, 5, 1]\n\nFinal computation:\nm = m + a[j] = 1 + a[1] = 1 + 5 = 6.\nPrint m prints 6.\n\nFinal Answer: 6 (Option B)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set m = 1, j = 1, a = {0, 1, 0}",
        "variables": {
          "m": 1,
          "j": 1,
          "a": "[0, 1, 0]"
        },
        "note": "Initial array and variables."
      },
      {
        "line": 4,
        "code": "a[0] = a[0] + a[1]",
        "variables": {
          "a[0]": 1,
          "a": "[1, 1, 0]"
        },
        "note": "0 + 1 = 1."
      },
      {
        "line": 5,
        "code": "a[1] = a[1] + a[2]",
        "variables": {
          "a[1]": 1,
          "a": "[1, 1, 0]"
        },
        "note": "1 + 0 = 1."
      },
      {
        "line": 6,
        "code": "a[2] = a[2] + a[0]",
        "variables": {
          "a[2]": 1,
          "a": "[1, 1, 1]"
        },
        "note": "0 + 1 = 1."
      },
      {
        "line": 8,
        "code": "if (a[0]) -> a[1] = 5",
        "variables": {
          "a[1]": 5,
          "a": "[1, 5, 1]"
        },
        "note": "Condition true; a[1] set to 5."
      },
      {
        "line": 12,
        "code": "m = m + a[j]",
        "variables": {
          "m": 6
        },
        "note": "m = 1 + 5 = 6."
      },
      {
        "line": 13,
        "code": "Print m",
        "variables": {
          "output": 6
        },
        "note": "Outputs 6."
      }
    ]
  },
  {
    "id": "pseudo-s2-19",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q19. For Loop and Summation",
    "question": "What will be the output of the following pseudocode?",
    "code": "Input f = 5, g = 9\nSet sum = 0\nInteger n\n\nif (g > f)\n    for (n = f; n < g; n = n + 1)\n        sum = sum + n\n    end for\nelse\n    Print \"Error Message\"\nend if\n\nPrint sum",
    "options": [
      {
        "key": "A",
        "text": "20",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "24",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "26",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "30",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "26",
    "explanation": "Given:\nf = 5, g = 9, sum = 0\n\nCondition check:\nif (g > f) -> 9 > 5 is TRUE.\nThe loop executes for n = 5, 6, 7, 8 (until n < 9 is false at n = 9).\n\nSummation trace:\nsum = 0 + 5 = 5\nsum = 5 + 6 = 11\nsum = 11 + 7 = 18\nsum = 18 + 8 = 26\n\nWhen n = 9, the condition n < 9 fails.\nPrint sum displays 26.\n\nFinal Answer: 26 (Option C)",
    "stepTrace": [
      {
        "line": 1,
        "code": "Input f = 5, g = 9, sum = 0",
        "variables": {
          "f": 5,
          "g": 9,
          "sum": 0
        },
        "note": "Initial inputs."
      },
      {
        "line": 5,
        "code": "if (g > f)",
        "variables": {
          "condition": "9 > 5 (true)"
        },
        "note": "Enters loop."
      },
      {
        "line": 6,
        "code": "for (n = 5; n < 9; n = n + 1)",
        "variables": {
          "n_values": "5, 6, 7, 8"
        },
        "note": "Iterates through 5, 6, 7, 8."
      },
      {
        "line": 7,
        "code": "Accumulate sum",
        "variables": {
          "sum": "5 + 6 + 7 + 8 = 26"
        },
        "note": "Sum accumulates."
      },
      {
        "line": 13,
        "code": "Print sum",
        "variables": {
          "output": 26
        },
        "note": "Outputs 26."
      }
    ]
  },
  {
    "id": "pseudo-s2-20",
    "subSection": "pseudo-code",
    "category": "Pseudo Code",
    "topic": "While & For Loop Mutations",
    "difficulty": "easy",
    "title": "Q20. Post-Increment + Pre-Increment",
    "question": "What will be the output of the following pseudocode?",
    "code": "Integer x, y, z\nSet x = 2, y = 4\nz = x++ + ++y\nPrint z",
    "options": [
      {
        "key": "A",
        "text": "5",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "B",
        "text": "6",
        "explanation": "Does not match the final evaluated variable state."
      },
      {
        "key": "C",
        "text": "7",
        "explanation": "Matches the computed execution trace output."
      },
      {
        "key": "D",
        "text": "8",
        "explanation": "Does not match the final evaluated variable state."
      }
    ],
    "correct_option": "C",
    "correct_answer": "7",
    "explanation": "Initially:\nx = 2, y = 4\n\nEvaluating expression: z = x++ + ++y\n1. x++ (post-increment):\n   - Returns current value 2 in the addition.\n   - Afterwards, x increments to 3.\n\n2. ++y (pre-increment):\n   - Increments y first: y becomes 5.\n   - Returns 5 in the addition.\n\n3. Sum:\n   z = 2 + 5 = 7.\n\nPrint z outputs 7.\n\nFinal Answer: 7 (Option C)",
    "stepTrace": [
      {
        "line": 2,
        "code": "Set x = 2, y = 4",
        "variables": {
          "x": 2,
          "y": 4
        },
        "note": "Initial values."
      },
      {
        "line": 3,
        "code": "Evaluate x++",
        "variables": {
          "valUsed": 2,
          "newX": 3
        },
        "note": "Uses 2, increments x to 3."
      },
      {
        "line": 3,
        "code": "Evaluate ++y",
        "variables": {
          "valUsed": 5,
          "newY": 5
        },
        "note": "Increments y to 5, uses 5."
      },
      {
        "line": 3,
        "code": "z = 2 + 5",
        "variables": {
          "z": 7
        },
        "note": "z = 2 + 5 = 7."
      },
      {
        "line": 4,
        "code": "Print z",
        "variables": {
          "output": 7
        },
        "note": "Outputs 7."
      }
    ]
  }
];
