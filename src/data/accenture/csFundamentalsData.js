// src/data/accenture/csFundamentalsData.js
// 120 Verified Questions: Operating Systems (40), SQL & DBMS (40), DSA Analysis (40)

export const CS_FUNDAMENTALS_MCQS = [
  {
    "id": "dsa-01",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #1",
    "question": "Which of the following is a direct measure of an algorithm's time efficiency?",
    "options": [
      {
        "key": "A",
        "text": "Uses minimal CPU time",
        "explanation": "An efficient algorithm aims to limit running time; this is a valid efficiency criterion."
      },
      {
        "key": "B",
        "text": "Uses minimal memory",
        "explanation": "Memory usage is also an efficiency criterion, but it is not the only one."
      },
      {
        "key": "C",
        "text": "Is easy to implement",
        "explanation": "Ease of implementation is useful for maintainability, but it does not by itself make an algorithm computationally efficient."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "Too broad: an algorithm can be efficient without being easy to implement."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Uses minimal CPU time",
    "explanation": "Time efficiency concerns how much execution time an algorithm requires for a given input size; using less CPU time is a direct time-efficiency criterion."
  },
  {
    "id": "dsa-02",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #2",
    "question": "The process of breaking a complex problem into smaller, more manageable parts is known as what?",
    "options": [
      {
        "key": "A",
        "text": "Decomposition",
        "explanation": "Correct. Decomposition divides a complex problem into smaller subproblems."
      },
      {
        "key": "B",
        "text": "Abstraction",
        "explanation": "Abstraction hides unnecessary implementation details and exposes the essential features of a system."
      },
      {
        "key": "C",
        "text": "Encapsulation",
        "explanation": "Encapsulation bundles data with the operations that work on it and restricts direct access where appropriate."
      },
      {
        "key": "D",
        "text": "Inheritance",
        "explanation": "Inheritance allows a class or type to derive properties and behavior from another class or type."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Decomposition",
    "explanation": "Decomposition divides a complex problem into smaller subproblems."
  },
  {
    "id": "dsa-03",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #3",
    "question": "What is the primary purpose of pseudocode?",
    "options": [
      {
        "key": "A",
        "text": "To document algorithms in natural language",
        "explanation": "Correct. Pseudocode expresses an algorithm in structured, human-readable form without requiring a specific programming language."
      },
      {
        "key": "B",
        "text": "To compile and execute algorithms",
        "explanation": "Pseudocode is not executable source code; it is a language-independent description of algorithmic steps."
      },
      {
        "key": "C",
        "text": "To debug code",
        "explanation": "Debugging is the process of finding and correcting defects; pseudocode is primarily used to express an algorithm before implementation."
      },
      {
        "key": "D",
        "text": "To optimize algorithms",
        "explanation": "Optimization improves an algorithm’s resource usage; pseudocode mainly communicates its logic without implementation-specific syntax."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To document algorithms in natural language",
    "explanation": "Pseudocode expresses an algorithm in structured, human-readable form without requiring a specific programming language."
  },
  {
    "id": "dsa-04",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #4",
    "question": "In algorithm analysis, what does asymptotic complexity refer to?",
    "options": [
      {
        "key": "A",
        "text": "The complexity in the best case",
        "explanation": "Best-case complexity describes the most favorable input, whereas asymptotic analysis describes growth as input size becomes large."
      },
      {
        "key": "B",
        "text": "The complexity in the worst case",
        "explanation": "Worst-case complexity describes the least favorable input; it is only one possible case of asymptotic analysis."
      },
      {
        "key": "C",
        "text": "The complexity in the average case",
        "explanation": "Average-case complexity depends on an input distribution; asymptotic behavior is not synonymous with the average case."
      },
      {
        "key": "D",
        "text": "The behavior of an algorithm as the input size grows",
        "explanation": "Correct. Asymptotic analysis describes how resource usage grows as input size becomes large."
      }
    ],
    "correct_option": "D",
    "correct_answer": "The behavior of an algorithm as the input size grows",
    "explanation": "Asymptotic analysis describes how resource usage grows as input size becomes large."
  },
  {
    "id": "dsa-05",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #5",
    "question": "What will be the output of the following pseudocode if the input is 5? function factorial(n): if n == 1 return 1 else return n * factorial(n-1)",
    "options": [
      {
        "key": "A",
        "text": "5",
        "explanation": "For factorial(5), the recursion computes 5×4×3×2×1, so 5 alone is not the result."
      },
      {
        "key": "B",
        "text": "24",
        "explanation": "24 is 4!, not 5!; factorial(5) includes the additional factor 5."
      },
      {
        "key": "C",
        "text": "120",
        "explanation": "Correct. 5! = 5 × 4 × 3 × 2 × 1 = 120."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "C",
    "correct_answer": "120",
    "explanation": "5! = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    "id": "dsa-06",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #6",
    "question": "Consider the recursive Fibonacci algorithm fib(n): if n <= 1 return n else return fib(n-1) + fib(n-2). What is its time complexity?",
    "options": [
      {
        "key": "A",
        "text": "O(n)",
        "explanation": "The naive recursive implementation does not run in linear time."
      },
      {
        "key": "B",
        "text": "O(log n)",
        "explanation": "Halving the input would be characteristic of logarithmic recursion, which this Fibonacci recursion does not do."
      },
      {
        "key": "C",
        "text": "O(n^2)",
        "explanation": "The standard recurrence is exponential rather than quadratic."
      },
      {
        "key": "D",
        "text": "O(2^n)",
        "explanation": "Correct: the recursive calls branch into two subproblems and produce exponential growth."
      }
    ],
    "correct_option": "D",
    "correct_answer": "O(2^n)",
    "explanation": "The naive recursive Fibonacci algorithm makes an exponential number of recursive calls; O(2^n) is the standard upper-bound characterization."
  },
  {
    "id": "dsa-07",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #7",
    "question": "An algorithm supposed to calculate the sum of numbers from 1 to n returns a higher value than expected. What is the most likely mistake?",
    "options": [
      {
        "key": "A",
        "text": "Starting the loop from 0",
        "explanation": "Starting at 0 does not by itself make a sum from 1 through n too high; the extra contribution must come from another operation or boundary error."
      },
      {
        "key": "B",
        "text": "Not initializing the sum variable",
        "explanation": "An uninitialized accumulator can cause undefined behavior or an error, but it does not specifically explain a reliably higher sum."
      },
      {
        "key": "C",
        "text": "Adding n twice",
        "explanation": "Correct. Adding n twice directly makes the computed sum larger than the intended 1 + 2 + ... + n."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Adding n twice",
    "explanation": "Adding n twice directly makes the computed sum larger than the intended 1 + 2 + ... + n."
  },
  {
    "id": "dsa-08",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #8",
    "question": "Suppose a list is not guaranteed to be sorted, but an algorithm always returns its first element as the minimum. What is the likely issue?",
    "options": [
      {
        "key": "A",
        "text": "The algorithm incorrectly assumes the first element is the smallest",
        "explanation": "Correct. If the list is sorted in ascending order, the first element is actually the smallest; otherwise the algorithm's assumption or the stated ordering is inconsistent."
      },
      {
        "key": "B",
        "text": "The algorithm correctly checks every element before returning",
        "explanation": "If the list is genuinely sorted in ascending order, its first element is the smallest; this option contradicts the question’s stated condition."
      },
      {
        "key": "C",
        "text": "The algorithm uses a correct minimum-comparison loop",
        "explanation": "An iteration bug could cause wrong results, but the stated symptom directly points to incorrectly assuming the first element is the minimum."
      },
      {
        "key": "D",
        "text": "The algorithm initializes the minimum from the first element and then compares every remaining element",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "The algorithm incorrectly assumes the first element is the smallest",
    "explanation": "If the input is not guaranteed to be sorted, the first element cannot automatically be assumed to be the minimum. The algorithm is making an incorrect assumption."
  },
  {
    "id": "dsa-09",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #9",
    "question": "Which Big O notation represents constant time complexity?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "Correct. O(1) means the amount of work does not grow with input size."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "O(n) grows linearly with input size; it is not the stated constant/logarithmic/quadratic bound in this question."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "A",
    "correct_answer": "O(1)",
    "explanation": "O(1) means the amount of work does not grow with input size."
  },
  {
    "id": "dsa-10",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #10",
    "question": "For a linear search in an unsorted array of n elements, what is the average-case time complexity?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "O(1) means constant-time growth; it is not the complexity of the operation described by this question."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "Correct. A linear search may inspect about half the elements on average, which is Θ(n)."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "B",
    "correct_answer": "O(n)",
    "explanation": "A linear search may inspect about half the elements on average, which is Θ(n)."
  },
  {
    "id": "dsa-11",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #11",
    "question": "What does the Big O notation O(n^2) signify about an algorithm's growth rate?",
    "options": [
      {
        "key": "A",
        "text": "Linear growth",
        "explanation": "Linear growth corresponds to O(n), not the quadratic growth represented by O(n²)."
      },
      {
        "key": "B",
        "text": "Quadratic growth",
        "explanation": "Correct. O(n^2) describes quadratic growth in the dominant term."
      },
      {
        "key": "C",
        "text": "Logarithmic growth",
        "explanation": "Logarithmic growth corresponds to O(log n), not the complexity represented by the intended answer."
      },
      {
        "key": "D",
        "text": "Exponential growth",
        "explanation": "Exponential growth, such as O(2^n), increases much faster than polynomial growth such as O(n²)."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Quadratic growth",
    "explanation": "O(n^2) describes quadratic growth in the dominant term."
  },
  {
    "id": "dsa-12",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #12",
    "question": "In Big O notation, what does O(log n) typically represent?",
    "options": [
      {
        "key": "A",
        "text": "The time complexity of binary search",
        "explanation": "Correct. Binary search halves the search interval at each step, giving logarithmic time."
      },
      {
        "key": "B",
        "text": "The time complexity of linear search",
        "explanation": "Linear search examines elements sequentially and has O(n) average/worst-case behavior, not logarithmic behavior."
      },
      {
        "key": "C",
        "text": "The space complexity of sorting algorithms",
        "explanation": "Sorting algorithms can have different space complexities depending on the algorithm; this is not what O(log n) typically represents in this question."
      },
      {
        "key": "D",
        "text": "The space complexity of hashing",
        "explanation": "Hash-table space depends on the number of stored entries and implementation; it is not inherently O(log n)."
      }
    ],
    "correct_option": "A",
    "correct_answer": "The time complexity of binary search",
    "explanation": "Binary search halves the search interval at each step, giving logarithmic time."
  },
  {
    "id": "dsa-13",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #13",
    "question": "For a typical binary search tree, what is the average-case time complexity of inserting an element?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "A BST insertion is not generally constant-time."
      },
      {
        "key": "B",
        "text": "O(log n)",
        "explanation": "Correct for a balanced BST or expected/average case."
      },
      {
        "key": "C",
        "text": "O(n)",
        "explanation": "This is the worst-case bound for a highly unbalanced BST, not the usual balanced/average case."
      },
      {
        "key": "D",
        "text": "O(n log n)",
        "explanation": "Insertion does not normally require n log n work."
      }
    ],
    "correct_option": "B",
    "correct_answer": "O(log n)",
    "explanation": "For a reasonably balanced BST, the expected search path has logarithmic height, so insertion is O(log n) on average. An unbalanced BST can degrade to O(n) in the worst case."
  },
  {
    "id": "dsa-14",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #14",
    "question": "What is the worst-case time complexity of quicksort?",
    "options": [
      {
        "key": "A",
        "text": "O(n log n)",
        "explanation": "O(n log n) is a common efficient sorting bound, but it is not the worst-case bound asked for here."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "O(n) grows linearly with input size; it is not the stated constant/logarithmic/quadratic bound in this question."
      },
      {
        "key": "C",
        "text": "O(n^2)",
        "explanation": "Correct. Quicksort reaches O(n^2) when partitions are repeatedly highly unbalanced."
      },
      {
        "key": "D",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      }
    ],
    "correct_option": "C",
    "correct_answer": "O(n^2)",
    "explanation": "Quicksort reaches O(n^2) when partitions are repeatedly highly unbalanced."
  },
  {
    "id": "dsa-15",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #15",
    "question": "How does the space complexity of an iterative solution compare to a recursive solution for the same problem?",
    "options": [
      {
        "key": "A",
        "text": "Iterative solutions always use more space",
        "explanation": "Iteration often avoids the call-stack overhead of recursion, so it is not true that iterative solutions always use more space."
      },
      {
        "key": "B",
        "text": "Recursive solutions always use more space",
        "explanation": "Recursion often uses stack frames, but whether it uses more total space depends on the algorithm and implementation."
      },
      {
        "key": "C",
        "text": "Depends on the specific problem",
        "explanation": "Correct. Space usage depends on the algorithm; recursion may add call-stack space, but this is not universal."
      },
      {
        "key": "D",
        "text": "They use the same amount of space",
        "explanation": "Recursive and iterative implementations can have different stack requirements, so equal space usage is not guaranteed."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Depends on the specific problem",
    "explanation": "Space usage depends on the algorithm; recursion may add call-stack space, but this is not universal."
  },
  {
    "id": "dsa-16",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #16",
    "question": "What is the time complexity of the following code snippet? for i in range(n): print(i)",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "O(1) means constant-time growth; it is not the complexity of the operation described by this question."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "Correct. The loop executes n times, so the running time is linear."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "B",
    "correct_answer": "O(n)",
    "explanation": "The loop executes n times, so the running time is linear."
  },
  {
    "id": "dsa-17",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #17",
    "question": "Given the code for i in range(n): for j in range(n): print(i, j), what is the time complexity?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "O(1) means constant-time growth; it is not the complexity of the operation described by this question."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "O(n) grows linearly with input size; it is not the stated constant/logarithmic/quadratic bound in this question."
      },
      {
        "key": "C",
        "text": "O(n log n)",
        "explanation": "O(n log n) is a common efficient sorting bound, but it is not the worst-case bound asked for here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "Correct. The inner loop runs n times for each of n outer-loop iterations, giving n² operations."
      }
    ],
    "correct_option": "D",
    "correct_answer": "O(n^2)",
    "explanation": "The inner loop runs n times for each of n outer-loop iterations, giving n² operations."
  },
  {
    "id": "dsa-18",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #18",
    "question": "Analyze the time complexity of the function: def func(n): if n <= 1: return else func(n/2) + func(n/2)",
    "options": [
      {
        "key": "A",
        "text": "O(n)",
        "explanation": "Correct: 2T(n/2)+O(1)=Theta(n)."
      },
      {
        "key": "B",
        "text": "O(log n)",
        "explanation": "A single recursive branch would be closer to logarithmic, but there are two recursive calls."
      },
      {
        "key": "C",
        "text": "O(n^2)",
        "explanation": "The recurrence does not produce quadratic growth."
      },
      {
        "key": "D",
        "text": "O(n log n)",
        "explanation": "n log n would arise from a different recurrence such as 2T(n/2)+Theta(n)."
      }
    ],
    "correct_option": "A",
    "correct_answer": "O(n)",
    "explanation": "The recurrence is T(n) = 2T(n/2) + O(1), which solves to Θ(n)."
  },
  {
    "id": "dsa-19",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #19",
    "question": "In quicksort, an algorithm expected to run in O(n log n) becomes much slower on some inputs. What is the likely cause?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect base case in recursion",
        "explanation": "A wrong base case can cause excessive recursion or incorrect results, but it is not the specific issue described when the input is not being reduced as required."
      },
      {
        "key": "B",
        "text": "Excessive memory allocation",
        "explanation": "Excessive allocation can slow a program through allocation and memory-management overhead, but it is not equivalent to a poor quicksort pivot choice."
      },
      {
        "key": "C",
        "text": "Poor choice of pivot in sorting",
        "explanation": "Correct. A poor pivot can make quicksort partitions highly unbalanced and degrade its running time toward O(n²)."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Poor choice of pivot in sorting",
    "explanation": "A poor pivot can create highly unbalanced partitions, causing quicksort to approach O(n²) on those inputs."
  },
  {
    "id": "dsa-20",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #20",
    "question": "An algorithm intended to be O(n) accidentally contains a nested loop that both run up to n. What problem has been overlooked?",
    "options": [
      {
        "key": "A",
        "text": "Nested loops",
        "explanation": "Correct. An unintended nested loop can change the actual complexity from linear to quadratic."
      },
      {
        "key": "B",
        "text": "Constant factors",
        "explanation": "Constant factors affect practical running time, but they do not change an algorithm from its stated asymptotic class."
      },
      {
        "key": "C",
        "text": "Linear operations",
        "explanation": "A linear number of operations is consistent with O(n); it is not an overlooked cause that would make an O(n) algorithm unexpectedly non-linear."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Nested loops",
    "explanation": "Two nested loops that each run O(n) times can produce O(n²) work, so an unintended nested loop can invalidate the intended linear complexity."
  },
  {
    "id": "dsa-21",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #21",
    "question": "A recursive algorithm expected to have O(log n) complexity calls itself with n-1 instead of reducing the input by a constant factor such as n/2. What is the likely issue?",
    "options": [
      {
        "key": "A",
        "text": "Not halving the input on each recursive call",
        "explanation": "Correct. Failing to reduce the problem geometrically can directly make a logarithmic recurrence slower."
      },
      {
        "key": "B",
        "text": "Incorrect termination condition",
        "explanation": "A wrong termination condition can cause incorrect results or non-termination, but the stated complexity issue is more directly caused by failing to halve n on every recursive call."
      },
      {
        "key": "C",
        "text": "Stack overflow",
        "explanation": "Stack overflow can occur when recursion becomes excessively deep, but the underlying complexity problem here is that the input is not being reduced as required."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Not halving the input on each recursive call",
    "explanation": "Logarithmic recursion normally reduces the problem size geometrically, such as n to n/2. Reducing by only one each time creates a much deeper recursion and can change the complexity substantially."
  },
  {
    "id": "dsa-22",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #22",
    "question": "Which data structure should be used to store a collection of characters in a sequence?",
    "options": [
      {
        "key": "A",
        "text": "Array",
        "explanation": "Correct. An array stores elements in indexed sequence and is a direct fit for a character sequence."
      },
      {
        "key": "B",
        "text": "Stack",
        "explanation": "A stack is LIFO: the most recently inserted element is removed first. It is not a general sequential character container for this question."
      },
      {
        "key": "C",
        "text": "Queue",
        "explanation": "A queue is FIFO: the earliest inserted element is removed first. It is not the intended general sequence representation here."
      },
      {
        "key": "D",
        "text": "Graph",
        "explanation": "A graph represents vertices and edges and is designed for relationships, not a simple sequence of characters."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Array",
    "explanation": "An array stores elements in indexed sequence and is a direct fit for a character sequence."
  },
  {
    "id": "dsa-23",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #23",
    "question": "What is the time complexity of accessing an element in an array by its index?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "Correct. Array indexing uses the element's offset, so direct access is constant time."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "O(n) grows linearly with input size; it is not the stated constant/logarithmic/quadratic bound in this question."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "A",
    "correct_answer": "O(1)",
    "explanation": "Array indexing uses the element's offset, so direct access is constant time."
  },
  {
    "id": "dsa-24",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #24",
    "question": "Which of the following is NOT a valid reason to use a StringBuilder in Java instead of concatenating strings using +?",
    "options": [
      {
        "key": "A",
        "text": "It reduces memory usage",
        "explanation": "StringBuilder can reduce temporary String-object creation compared with repeated concatenation in many cases."
      },
      {
        "key": "B",
        "text": "It is faster for concatenating multiple strings",
        "explanation": "StringBuilder is designed for efficient repeated mutable concatenation."
      },
      {
        "key": "C",
        "text": "It is immutable",
        "explanation": "Incorrect: StringBuilder is mutable, not immutable."
      },
      {
        "key": "D",
        "text": "It can be used in multi-threaded environments",
        "explanation": "StringBuilder can be used by multiple threads only with appropriate external synchronization; it is not itself synchronized."
      }
    ],
    "correct_option": "C",
    "correct_answer": "It is immutable",
    "explanation": "StringBuilder is mutable; immutability is a property of String, not StringBuilder."
  },
  {
    "id": "dsa-25",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #25",
    "question": "For an unsorted array, what is the best-case time complexity of searching for a specific value?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "Correct only for the best case, such as the target being first."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "O(n) is the worst-case bound for unsorted linear search."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "Binary-search logarithmic performance requires an appropriate ordering/structure."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "Unsorted linear search does not require quadratic time."
      }
    ],
    "correct_option": "A",
    "correct_answer": "O(1)",
    "explanation": "In the best case, the target is the first element examined, so only one comparison is needed: O(1). The worst-case complexity remains O(n)."
  },
  {
    "id": "dsa-26",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #26",
    "question": "Considering a character array representing a string, what is the space complexity for storing this string?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "O(1) means constant-time growth; it is not the complexity of the operation described by this question."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "Correct. A character array storing n characters requires space proportional to n."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "B",
    "correct_answer": "O(n)",
    "explanation": "A character array storing n characters requires space proportional to n."
  },
  {
    "id": "dsa-27",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #27",
    "question": "Which operation can become O(n) specifically because a dynamic array must resize and copy its existing elements?",
    "options": [
      {
        "key": "A",
        "text": "Accessing an element by index",
        "explanation": "Index access is normally O(1) and does not itself require resizing."
      },
      {
        "key": "B",
        "text": "Appending an element at the end",
        "explanation": "A resize can make a particular append O(n) because existing elements are copied."
      },
      {
        "key": "C",
        "text": "Inserting an element at the beginning",
        "explanation": "Beginning insertion is also O(n), so this option makes the question ambiguous."
      },
      {
        "key": "D",
        "text": "Searching for an element",
        "explanation": "Searching is typically O(n), but it is not specifically caused by resizing."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Appending an element at the end",
    "explanation": "Appending is normally amortized O(1), but an individual append can become O(n) when the array runs out of capacity and must allocate a larger buffer and copy its elements."
  },
  {
    "id": "dsa-28",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #28",
    "question": "What does the following Python code snippet return? arr = ['a','b','c','d']; print(arr[1:3])",
    "options": [
      {
        "key": "A",
        "text": "['a', 'b']",
        "explanation": "Python slicing uses a start index inclusive and an end index exclusive, so arr[1:3] includes 'b' and 'c', not 'a' and 'b'."
      },
      {
        "key": "B",
        "text": "['b', 'c']",
        "explanation": "Correct. Python slicing includes index 1 and excludes index 3, producing ['b', 'c']."
      },
      {
        "key": "C",
        "text": "['c', 'd']",
        "explanation": "The slice starts at index 1, so 'c' at index 2 is included but 'd' at index 3 is excluded by the end index 3."
      },
      {
        "key": "D",
        "text": "['b', 'c', 'd']",
        "explanation": "The slice endpoint is exclusive; arr[1:3] stops before index 3, so 'd' is not included."
      }
    ],
    "correct_option": "B",
    "correct_answer": "['b', 'c']",
    "explanation": "Python slicing includes index 1 and excludes index 3, producing ['b', 'c']."
  },
  {
    "id": "dsa-29",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #29",
    "question": "Given an array of integers, which operation will NOT mutate the original array in JavaScript?",
    "options": [
      {
        "key": "A",
        "text": "arr.sort()",
        "explanation": "sort() mutates the original array."
      },
      {
        "key": "B",
        "text": "arr.push(5)",
        "explanation": "push() mutates the original array."
      },
      {
        "key": "C",
        "text": "[...arr, 5]",
        "explanation": "Correct: the spread expression creates a new array."
      },
      {
        "key": "D",
        "text": "arr.pop()",
        "explanation": "pop() mutates the original array."
      }
    ],
    "correct_option": "C",
    "correct_answer": "[...arr, 5]",
    "explanation": "The spread expression creates a new array; sort, push, and pop mutate the original array."
  },
  {
    "id": "dsa-30",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #30",
    "question": "What is the result of concatenating two arrays in Python using +, arr1 = [1,2,3] and arr2 = [4,5,6]?",
    "options": [
      {
        "key": "A",
        "text": "A new array [1, 2, 3, 4, 5, 6]",
        "explanation": "Correct. Python list + returns a new list containing the elements of both operands."
      },
      {
        "key": "B",
        "text": "The original arrays are mutated to include the elements of the other",
        "explanation": "Python list concatenation with + creates a new list; it does not modify either operand in place."
      },
      {
        "key": "C",
        "text": "A syntax error",
        "explanation": "A syntax error is detected while parsing source code; it is unrelated to runtime resource waiting."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "A new array [1, 2, 3, 4, 5, 6]",
    "explanation": "Python list + returns a new list containing the elements of both operands."
  },
  {
    "id": "dsa-31",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #31",
    "question": "A programmer expects the JavaScript code const arr = [1,2,3]; arr = [4,5,6]; to update an array but it does not. What is the mistake?",
    "options": [
      {
        "key": "A",
        "text": "Attempting to reassign a constant array",
        "explanation": "Correct: const prevents reassignment of the variable binding."
      },
      {
        "key": "B",
        "text": "Incorrect syntax for array update",
        "explanation": "The assignment syntax is valid JavaScript, but it violates const reassignment rules."
      },
      {
        "key": "C",
        "text": "Using the wrong data type",
        "explanation": "The data type is valid; the problem is the const binding."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "There is a specific error: reassignment of a const variable."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Attempting to reassign a constant array",
    "explanation": "A const binding cannot be reassigned. The array's contents can still be mutated, but the binding cannot point to a new array."
  },
  {
    "id": "dsa-32",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #32",
    "question": "Why does string.split('').reverse().join('') in JavaScript return a reversed string?",
    "options": [
      {
        "key": "A",
        "text": "The split method incorrectly splits the string",
        "explanation": "split produces an array of characters for a non-empty string when called with the empty-string separator in JavaScript."
      },
      {
        "key": "B",
        "text": "The reverse method does not work on strings",
        "explanation": "reverse is an Array method, which is why split is used first to turn the string into an array."
      },
      {
        "key": "C",
        "text": "The join method concatenates incorrectly",
        "explanation": "join combines the array elements with the supplied separator; with an empty separator it reconstructs the reversed character sequence."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "Correct. split creates an array of characters, reverse reverses that array, and join combines it back into a string. None of A-C explains this correctly."
      }
    ],
    "correct_option": "D",
    "correct_answer": "None of the above",
    "explanation": "split creates an array of characters, reverse reverses that array, and join combines it back into a string. None of A-C explains this correctly."
  },
  {
    "id": "dsa-33",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #33",
    "question": "If a longest-string algorithm keeps returning the first string even when later strings are longer, what is the most direct likely error?",
    "options": [
      {
        "key": "A",
        "text": "Not updating the longest string variable inside the loop",
        "explanation": "Correct. If the longest-string variable is never updated when a longer string is found, the initial first element remains the result."
      },
      {
        "key": "B",
        "text": "Using the wrong comparison operator",
        "explanation": "An incorrect comparison can prevent the algorithm from recognizing a longer string, although the question’s stated failure most directly concerns updating the tracked value."
      },
      {
        "key": "C",
        "text": "Not initializing the longest string variable",
        "explanation": "A missing initialization can cause an error or undefined behavior; it is different from simply failing to update the current longest value."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Not updating the longest string variable inside the loop",
    "explanation": "The algorithm is likely failing to update the stored longest string when it encounters a longer string, so the initial first element remains the result."
  },
  {
    "id": "dsa-34",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #34",
    "question": "What distinguishes a singly linked list from a doubly linked list?",
    "options": [
      {
        "key": "A",
        "text": "Each node has one pointer in a singly linked list and two in a doubly linked list",
        "explanation": "Correct. A typical singly linked node stores a next pointer, while a doubly linked node stores next and previous pointers."
      },
      {
        "key": "B",
        "text": "Singly linked lists are faster",
        "explanation": "A singly linked list is not universally faster; performance depends on the operation, and doubly linked lists can provide easier backward traversal."
      },
      {
        "key": "C",
        "text": "Doubly linked lists cannot have cycles",
        "explanation": "Doubly linked lists can contain cycles if links are arranged cyclically; having two links does not prevent cycles."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Each node has one pointer in a singly linked list and two in a doubly linked list",
    "explanation": "A typical singly linked node stores a next pointer, while a doubly linked node stores next and previous pointers."
  },
  {
    "id": "dsa-35",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #35",
    "question": "What operation is typically more efficient in a linked list compared to an array?",
    "options": [
      {
        "key": "A",
        "text": "Accessing an element by index",
        "explanation": "Index access in a linked list is O(n), unlike an array's O(1) indexing."
      },
      {
        "key": "B",
        "text": "Appending an element to the end",
        "explanation": "Appending can be O(1) with a tail pointer, but it is not universally more efficient than an array."
      },
      {
        "key": "C",
        "text": "Inserting an element at the beginning",
        "explanation": "Correct: inserting at the head is O(1) when the head pointer is available."
      },
      {
        "key": "D",
        "text": "Searching for an element",
        "explanation": "Searching is generally O(n) in both structures."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Inserting an element at the beginning",
    "explanation": "Insertion at the beginning is O(1) in a linked list when the head pointer is available, versus O(n) for a typical contiguous array."
  },
  {
    "id": "dsa-36",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #36",
    "question": "Which scenario is a linked list NOT suitable for?",
    "options": [
      {
        "key": "A",
        "text": "When elements need to be accessed sequentially",
        "explanation": "Linked lists are well suited to sequential traversal because each node links to the next node."
      },
      {
        "key": "B",
        "text": "When memory usage is a concern",
        "explanation": "Linked-list nodes carry pointer/reference overhead, so they can use more memory than a compact array for the same number of elements."
      },
      {
        "key": "C",
        "text": "When fast access to elements by index is required",
        "explanation": "Correct. Linked lists do not support O(1) random indexing; accessing the ith element generally takes O(n)."
      },
      {
        "key": "D",
        "text": "When adding or removing elements frequently",
        "explanation": "Linked lists can perform insertion/removal efficiently when the relevant node position is already known."
      }
    ],
    "correct_option": "C",
    "correct_answer": "When fast access to elements by index is required",
    "explanation": "Linked lists do not support O(1) random indexing; accessing the ith element generally takes O(n)."
  },
  {
    "id": "dsa-37",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #37",
    "question": "In a linked list, what does the head pointer signify?",
    "options": [
      {
        "key": "A",
        "text": "The middle node of the list",
        "explanation": "The middle node is not inherently represented by the head pointer; finding it normally requires traversal or a two-pointer technique."
      },
      {
        "key": "B",
        "text": "The last node of the list",
        "explanation": "The last node is normally represented by the tail pointer when one is maintained, not the head pointer."
      },
      {
        "key": "C",
        "text": "The first node of the list",
        "explanation": "Correct. The head points to the first node of a linked list."
      },
      {
        "key": "D",
        "text": "A random node in the list",
        "explanation": "The head pointer identifies the first node; it is not an arbitrary node selected at random."
      }
    ],
    "correct_option": "C",
    "correct_answer": "The first node of the list",
    "explanation": "The head points to the first node of a linked list."
  },
  {
    "id": "dsa-38",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "medium",
    "title": "Data Structures & Algorithms • Question #38",
    "question": "How do you detect a cycle in a linked list?",
    "options": [
      {
        "key": "A",
        "text": "By checking if the next pointer of any node is null",
        "explanation": "A null next pointer indicates the end of an acyclic list; it cannot detect a cycle because a cyclic list may never reach null."
      },
      {
        "key": "B",
        "text": "Using a hash table to store visited nodes",
        "explanation": "A visited-node set/hash table can detect revisits and therefore detect cycles, but it is not the constant-space method highlighted by the question."
      },
      {
        "key": "C",
        "text": "Comparing each node with every other node",
        "explanation": "Pairwise node comparison is unnecessarily expensive; cycle detection can be done with a visited set or Floyd’s two-pointer algorithm."
      },
      {
        "key": "D",
        "text": "Using two pointers at different speeds",
        "explanation": "Correct. Floyd's tortoise-and-hare algorithm uses two pointers moving at different speeds to detect a cycle in O(n) time and O(1) extra space."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Using two pointers at different speeds",
    "explanation": "Floyd's tortoise-and-hare algorithm uses two pointers moving at different speeds to detect a cycle in O(n) time and O(1) extra space."
  },
  {
    "id": "dsa-39",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "hard",
    "title": "Data Structures & Algorithms • Question #39",
    "question": "What is the time complexity of finding the middle element in a singly linked list?",
    "options": [
      {
        "key": "A",
        "text": "O(1)",
        "explanation": "O(1) means constant-time growth; it is not the complexity of the operation described by this question."
      },
      {
        "key": "B",
        "text": "O(n)",
        "explanation": "Correct. A traversal is required; the fast/slow pointer method finds the middle in O(n) time."
      },
      {
        "key": "C",
        "text": "O(log n)",
        "explanation": "O(log n) grows logarithmically, so it does not represent the linear/quadratic behavior described here."
      },
      {
        "key": "D",
        "text": "O(n^2)",
        "explanation": "A single loop over n elements performs linear, not quadratic, work."
      }
    ],
    "correct_option": "B",
    "correct_answer": "O(n)",
    "explanation": "A traversal is required; the fast/slow pointer method finds the middle in O(n) time."
  },
  {
    "id": "dsa-40",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Data Structures & Algorithms",
    "difficulty": "easy",
    "title": "Data Structures & Algorithms • Question #40",
    "question": "What does the code node.next = node.next.next do in a singly linked list?",
    "options": [
      {
        "key": "A",
        "text": "Deletes the next node in the list",
        "explanation": "Correct. It bypasses the current node's next node, effectively unlinking it from the list when node.next is non-null."
      },
      {
        "key": "B",
        "text": "Inserts a new node after the current one",
        "explanation": "No new node is allocated; the statement changes an existing pointer to skip one node."
      },
      {
        "key": "C",
        "text": "Swaps two nodes",
        "explanation": "A swap would require changing multiple links; this single assignment only changes the current node’s next reference."
      },
      {
        "key": "D",
        "text": "Duplicates the next node",
        "explanation": "The assignment bypasses the next node by changing the current node’s next reference; it does not copy or duplicate a node."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Deletes the next node in the list",
    "explanation": "It bypasses the current node's next node, effectively unlinking it from the list when node.next is non-null."
  },
  {
    "id": "os-01",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #1",
    "question": "Which component of an operating system is responsible for managing files?",
    "options": [
      {
        "key": "A",
        "text": "File System Manager",
        "explanation": "Correct. The file-system component manages files, directories, metadata, and storage organization."
      },
      {
        "key": "B",
        "text": "Memory Manager",
        "explanation": "The memory manager handles allocation and virtual/physical memory, not primarily file organization."
      },
      {
        "key": "C",
        "text": "Process Manager",
        "explanation": "The process manager handles process creation, scheduling-related state, and process lifecycle rather than file management."
      },
      {
        "key": "D",
        "text": "Device Driver",
        "explanation": "A device driver provides an interface between the OS and a hardware device; it is not the component primarily responsible for files."
      }
    ],
    "correct_option": "A",
    "correct_answer": "File System Manager",
    "explanation": "The file-system component manages files, directories, metadata, and storage organization."
  },
  {
    "id": "os-02",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #2",
    "question": "An operating system's primary function includes which of the following?",
    "options": [
      {
        "key": "A",
        "text": "Providing user interface",
        "explanation": "An OS may provide user interfaces, but resource management is a core responsibility and the question asks for the primary function set."
      },
      {
        "key": "B",
        "text": "Managing hardware resources",
        "explanation": "Managing CPU, memory, devices, and other hardware resources is a core operating-system responsibility."
      },
      {
        "key": "C",
        "text": "Running applications",
        "explanation": "The OS provides services and resources that allow applications to run; application execution itself is not the complete definition of the OS’s primary role."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "Correct. An operating system provides interfaces and services while managing hardware and supporting application execution."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "An operating system provides interfaces and services while managing hardware and supporting application execution."
  },
  {
    "id": "os-03",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #3",
    "question": "The kernel of an operating system is:",
    "options": [
      {
        "key": "A",
        "text": "The user interface",
        "explanation": "The kernel is the privileged core of the OS, not the graphical or command-line user interface."
      },
      {
        "key": "B",
        "text": "The part that manages hardware interactions",
        "explanation": "Correct. The kernel is the privileged core of the OS that manages hardware resources and provides core services."
      },
      {
        "key": "C",
        "text": "An application software",
        "explanation": "The kernel is system software at the core of the OS, not an ordinary application."
      },
      {
        "key": "D",
        "text": "A type of virus",
        "explanation": "The kernel is not malware; it manages system resources and hardware interactions."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The part that manages hardware interactions",
    "explanation": "The kernel is the privileged core of the OS that manages hardware resources and provides core services."
  },
  {
    "id": "os-04",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #4",
    "question": "Which of the following is not a type of operating system?",
    "options": [
      {
        "key": "A",
        "text": "Batch Operating System",
        "explanation": "Batch operating systems are a recognized OS category in which jobs are processed with little or no interactive input."
      },
      {
        "key": "B",
        "text": "Real-time Operating System",
        "explanation": "RTOS is a recognized operating-system category designed around timing constraints."
      },
      {
        "key": "C",
        "text": "Sequential Operating System",
        "explanation": "Correct. Batch, real-time, and distributed systems are recognized OS categories; 'Sequential Operating System' is not a standard OS category."
      },
      {
        "key": "D",
        "text": "Distributed Operating System",
        "explanation": "Distributed operating systems coordinate resources across multiple networked computers."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Sequential Operating System",
    "explanation": "Batch, real-time, and distributed systems are recognized OS categories; 'Sequential Operating System' is not a standard OS category."
  },
  {
    "id": "os-05",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #5",
    "question": "In an operating system, what is the role of a scheduler?",
    "options": [
      {
        "key": "A",
        "text": "To allocate disk space",
        "explanation": "Disk-space allocation belongs to storage and file-system management, not to the scheduler’s job of selecting the next process to run."
      },
      {
        "key": "B",
        "text": "To manage user accounts",
        "explanation": "User-account management is an OS security/administration function; the scheduler decides which runnable process receives CPU time."
      },
      {
        "key": "C",
        "text": "To determine which process runs at a certain point in time",
        "explanation": "Correct. The scheduler selects which runnable process or thread receives CPU time."
      },
      {
        "key": "D",
        "text": "To configure network settings",
        "explanation": "Network configuration is handled by networking components and configuration tools, whereas scheduling determines CPU execution order."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To determine which process runs at a certain point in time",
    "explanation": "The scheduler selects which runnable process or thread receives CPU time."
  },
  {
    "id": "os-06",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #6",
    "question": "Multitasking in operating systems allows for:",
    "options": [
      {
        "key": "A",
        "text": "Multiple users to share a single device",
        "explanation": "The choice “Multiple users to share a single device” refers to a different operation or concept; the question is asking about A single user to perform multiple tasks at one time."
      },
      {
        "key": "B",
        "text": "A single user to perform multiple tasks at one time",
        "explanation": "Correct. Multitasking allows multiple tasks to make progress during the same period, often through interleaving or parallel execution."
      },
      {
        "key": "C",
        "text": "Devices to run without an OS",
        "explanation": "Multitasking concerns concurrent execution of multiple tasks; running a device without an OS is unrelated to the definition of multitasking."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "B",
    "correct_answer": "A single user to perform multiple tasks at one time",
    "explanation": "Multitasking allows multiple tasks to make progress during the same period, often through interleaving or parallel execution."
  },
  {
    "id": "os-07",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #7",
    "question": "Which command in Unix is used to display the current directory's contents?",
    "options": [
      {
        "key": "A",
        "text": "ls",
        "explanation": "Correct. ls lists directory contents; cd changes directories, mkdir creates directories, and touch creates/updates files."
      },
      {
        "key": "B",
        "text": "cd",
        "explanation": "cd changes the current working directory; it does not list the files and directories contained in that directory."
      },
      {
        "key": "C",
        "text": "mkdir",
        "explanation": "mkdir creates a new directory. It does not display the contents of the current directory."
      },
      {
        "key": "D",
        "text": "touch",
        "explanation": "touch creates a file or updates its timestamps; it is not the Unix command for listing directory contents."
      }
    ],
    "correct_option": "A",
    "correct_answer": "ls",
    "explanation": "ls lists directory contents; cd changes directories, mkdir creates directories, and touch creates/updates files."
  },
  {
    "id": "os-08",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #8",
    "question": "For a computer using a wired Ethernet connection, what should be checked first when it cannot access the internet?",
    "options": [
      {
        "key": "A",
        "text": "The web browser's homepage setting",
        "explanation": "The choice “The web browser's homepage setting” refers to a different operation or concept; the question is asking about The network cable connection."
      },
      {
        "key": "B",
        "text": "The network cable connection",
        "explanation": "Correct. For a wired connection, checking the physical network connection is a basic first troubleshooting step."
      },
      {
        "key": "C",
        "text": "The installed operating system",
        "explanation": "The choice “The installed operating system” refers to a different operation or concept; the question is asking about The network cable connection."
      },
      {
        "key": "D",
        "text": "The computer's power status",
        "explanation": "Power status is a basic prerequisite, but if the computer is already running and the symptom is loss of Internet access, checking the network connection is the more direct first check."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The network cable connection",
    "explanation": "A loose or disconnected Ethernet cable can immediately prevent network connectivity, so the physical connection is a sensible first check."
  },
  {
    "id": "os-09",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #9",
    "question": "Which resource shortage can cause frequent paging and make a computer run very slowly?",
    "options": [
      {
        "key": "A",
        "text": "Too many browser tabs open",
        "explanation": "A large number of browser tabs can consume substantial memory and CPU, but it is only one possible cause; the source question identifies insufficient RAM as the intended general cause."
      },
      {
        "key": "B",
        "text": "Insufficient RAM",
        "explanation": "Correct. Insufficient RAM can cause paging and substantial slowdown, although the actual cause depends on the system."
      },
      {
        "key": "C",
        "text": "Outdated graphics drivers",
        "explanation": "Outdated graphics drivers can affect graphics performance, but they are not the general first explanation for overall system slowdown."
      },
      {
        "key": "D",
        "text": "A disconnected printer",
        "explanation": "A disconnected printer normally does not consume enough system resources to explain general computer slowdown."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Insufficient RAM",
    "explanation": "Insufficient RAM can cause the operating system to page memory to slower storage, which can substantially reduce performance."
  },
  {
    "id": "os-10",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #10",
    "question": "A process is:",
    "options": [
      {
        "key": "A",
        "text": "An instance of a program in execution",
        "explanation": "Correct. A process is a program instance with execution state and allocated resources."
      },
      {
        "key": "B",
        "text": "A set of instructions stored on disk",
        "explanation": "A program stored on disk is a program/executable, not a process. A process is the program in its active execution state."
      },
      {
        "key": "C",
        "text": "The same as a thread",
        "explanation": "The choice “The same as a thread” refers to a different operation or concept; the question is asking about An instance of a program in execution."
      },
      {
        "key": "D",
        "text": "A type of computer virus",
        "explanation": "A process is an executing program instance; malware can run as a process, but being a virus is not the definition of a process."
      }
    ],
    "correct_option": "A",
    "correct_answer": "An instance of a program in execution",
    "explanation": "A process is a program instance with execution state and allocated resources."
  },
  {
    "id": "os-11",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #11",
    "question": "Which of the following is true about threads within the same process?",
    "options": [
      {
        "key": "A",
        "text": "They share the same CPU but have different memory",
        "explanation": "Threads in one process share the process address space; they do not normally have completely separate memory spaces."
      },
      {
        "key": "B",
        "text": "They have separate CPUs",
        "explanation": "Threads within a process execute within the same process and share its address space; they are not assigned separate CPUs by definition."
      },
      {
        "key": "C",
        "text": "They share the same memory space",
        "explanation": "Correct. Threads in a process share its address space and many resources, while maintaining their own execution state and stack."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "C",
    "correct_answer": "They share the same memory space",
    "explanation": "Threads in a process share its address space and many resources, while maintaining their own execution state and stack."
  },
  {
    "id": "os-12",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #12",
    "question": "The primary difference between a process and a thread is:",
    "options": [
      {
        "key": "A",
        "text": "A thread is a part of a process",
        "explanation": "Correct. A thread is an execution unit within a process; threads of the same process share many resources."
      },
      {
        "key": "B",
        "text": "A process is less resource-intensive",
        "explanation": "Threads are generally lighter-weight execution units within a process; the statement that a process is less resource-intensive reverses the usual distinction."
      },
      {
        "key": "C",
        "text": "Threads do not share resources",
        "explanation": "Threads belonging to the same process share resources such as the address space and open resources, subject to OS-specific details."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "A thread is a part of a process",
    "explanation": "A thread is an execution unit within a process; threads of the same process share many resources."
  },
  {
    "id": "os-13",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #13",
    "question": "On a multicore system, multiprocessing allows independent processes to:",
    "options": [
      {
        "key": "A",
        "text": "Are executed one at a time",
        "explanation": "Multiprocessing allows multiple processes to execute concurrently, and on multiple CPU cores they can execute in parallel."
      },
      {
        "key": "B",
        "text": "Can share resources efficiently",
        "explanation": "Processes can share resources through OS mechanisms, but that statement does not define multiprocessing as directly as parallel execution."
      },
      {
        "key": "C",
        "text": "Are executed in parallel",
        "explanation": "Correct. With multiple processors or cores, processes can execute concurrently in parallel."
      },
      {
        "key": "D",
        "text": "Must communicate using inter-process communication (IPC)",
        "explanation": "Processes may use IPC when they need to communicate, but IPC is not a mandatory defining condition for every process in a multiprocessing system."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Are executed in parallel",
    "explanation": "With multiple CPU cores, independent processes can execute concurrently in parallel on different cores."
  },
  {
    "id": "os-14",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #14",
    "question": "Context switching is:",
    "options": [
      {
        "key": "A",
        "text": "The process of saving and restoring the state of a CPU so that multiple processes can share a single CPU resource",
        "explanation": "Correct. A context switch saves the execution state of one task and restores another so the CPU can switch execution."
      },
      {
        "key": "B",
        "text": "The act of switching between different applications by the user",
        "explanation": "Context switching is an OS operation involving saving and restoring execution state; it is not merely a user changing application windows."
      },
      {
        "key": "C",
        "text": "A method of disk scheduling",
        "explanation": "Disk scheduling chooses the order of disk I/O requests; context switching concerns CPU execution state."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "The process of saving and restoring the state of a CPU so that multiple processes can share a single CPU resource",
    "explanation": "A context switch saves the execution state of one task and restores another so the CPU can switch execution."
  },
  {
    "id": "os-15",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #15",
    "question": "Which scenario best demonstrates a deadlock?",
    "options": [
      {
        "key": "A",
        "text": "Two or more processes are waiting indefinitely for an event that can only be caused by one of the waiting processes",
        "explanation": "Correct. A circular wait in which each participant waits for another participant's action is the classic deadlock pattern."
      },
      {
        "key": "B",
        "text": "A process waiting for a resource that's never released",
        "explanation": "Waiting for a resource forever can indicate a resource deadlock, but by itself it does not establish the full set of deadlock conditions."
      },
      {
        "key": "C",
        "text": "A thread executing a non-terminating loop",
        "explanation": "An infinite loop can make a thread run indefinitely, but deadlock requires blocked execution caused by competing resource dependencies."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Two or more processes are waiting indefinitely for an event that can only be caused by one of the waiting processes",
    "explanation": "A circular wait in which each participant waits for another participant's action is the classic deadlock pattern."
  },
  {
    "id": "os-16",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #16",
    "question": "In operating systems, a semaphore is:",
    "options": [
      {
        "key": "A",
        "text": "A type of malware",
        "explanation": "The choice “A type of malware” refers to a different operation or concept; the question is asking about A signal mechanism."
      },
      {
        "key": "B",
        "text": "A signal mechanism",
        "explanation": "Correct. A semaphore is a synchronization primitive used to coordinate access to shared resources."
      },
      {
        "key": "C",
        "text": "A low-level programming language",
        "explanation": "The choice “A low-level programming language” refers to a different operation or concept; the question is asking about A signal mechanism."
      },
      {
        "key": "D",
        "text": "An I/O device driver",
        "explanation": "An I/O device driver controls communication with a hardware device; a semaphore is a synchronization primitive used to coordinate concurrent execution."
      }
    ],
    "correct_option": "B",
    "correct_answer": "A signal mechanism",
    "explanation": "A semaphore is a synchronization primitive used to coordinate access to shared resources."
  },
  {
    "id": "os-17",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #17",
    "question": "What is the primary purpose of mutual-exclusion synchronization?",
    "options": [
      {
        "key": "A",
        "text": "Ensure that only one thread can access the resource at any given time",
        "explanation": "Correct. Synchronization can enforce mutual exclusion and coordinate operations to prevent races; not every synchronization mechanism means only one thread always accesses a resource."
      },
      {
        "key": "B",
        "text": "Make sure that threads run at the same speed",
        "explanation": "Synchronization does not attempt to make threads execute at identical speeds; it coordinates access and ordering where necessary."
      },
      {
        "key": "C",
        "text": "Prevent threads from executing",
        "explanation": "Synchronization controls interactions among concurrent threads; it does not exist to prevent threads from executing."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Ensure that only one thread can access the resource at any given time",
    "explanation": "Mutual exclusion ensures that only one thread at a time enters a protected critical section or accesses a resource that cannot safely be used concurrently."
  },
  {
    "id": "os-18",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #18",
    "question": "In most modern operating systems, a new thread is created by:",
    "options": [
      {
        "key": "A",
        "text": "Forking a process",
        "explanation": "fork creates a new process in Unix-like systems; it is not the normal thread-creation API."
      },
      {
        "key": "B",
        "text": "Using a thread library function like pthread_create in C",
        "explanation": "Correct. Applications commonly create threads through a thread API such as pthread_create."
      },
      {
        "key": "C",
        "text": "Cloning the operating system",
        "explanation": "Creating a thread does not clone the operating system; it creates an execution context within a process."
      },
      {
        "key": "D",
        "text": "Writing a new kernel module",
        "explanation": "A kernel module is not normally required to create an application thread."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Using a thread library function like pthread_create in C",
    "explanation": "Applications commonly create threads through a thread API such as pthread_create."
  },
  {
    "id": "os-19",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #19",
    "question": "A multithreaded program has unexpectedly high CPU usage, and profiling shows one thread continuously performing work. What should you check first?",
    "options": [
      {
        "key": "A",
        "text": "Check for infinite loops within threads",
        "explanation": "Correct. An unintended busy loop can cause a thread to consume excessive CPU and is a reasonable first diagnostic check."
      },
      {
        "key": "B",
        "text": "Increase the number of CPUs in the system",
        "explanation": "Adding CPUs can increase available compute capacity, but it is not the first diagnostic step for unexpectedly high CPU use."
      },
      {
        "key": "C",
        "text": "Delete unused threads",
        "explanation": "Removing threads without diagnosing their workload can break program behavior and does not identify the source of high CPU usage."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Check for infinite loops within threads",
    "explanation": "A non-terminating or unintended busy loop can keep a thread running continuously and consume excessive CPU, so it is an important first check in this scenario."
  },
  {
    "id": "os-20",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #20",
    "question": "A thread waits for a resource held by another thread, while that other thread waits for a resource held by the first thread. What does this describe?",
    "options": [
      {
        "key": "A",
        "text": "A deadlock",
        "explanation": "Correct. If threads form a cycle of waiting for resources held by each other, the condition is deadlock; a single wait may simply be blocking."
      },
      {
        "key": "B",
        "text": "A segmentation fault",
        "explanation": "A segmentation fault is an invalid memory-access failure, not the normal meaning of waiting for a resource held by another thread."
      },
      {
        "key": "C",
        "text": "A syntax error",
        "explanation": "A syntax error is detected while parsing source code; it is unrelated to runtime resource waiting."
      },
      {
        "key": "D",
        "text": "A runtime error",
        "explanation": "Resource waiting can occur during execution, but “runtime error” is too broad and does not identify the synchronization condition described."
      }
    ],
    "correct_option": "A",
    "correct_answer": "A deadlock",
    "explanation": "The threads form a circular wait: each holds or depends on a resource needed by the other. Circular waiting is a key condition of deadlock."
  },
  {
    "id": "os-21",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #21",
    "question": "A process is not responding because it holds a resource while waiting for another resource held by a second process, which is waiting for the first. What is the likely state?",
    "options": [
      {
        "key": "A",
        "text": "The process is in a deadlock state",
        "explanation": "Correct. A deadlocked process can stop making progress and therefore appear unresponsive."
      },
      {
        "key": "B",
        "text": "The process is executing a high-priority task",
        "explanation": "High priority can affect scheduling, but a nonresponsive process can have many causes; high priority alone does not explain non-responsiveness."
      },
      {
        "key": "C",
        "text": "The user input device is malfunctioning",
        "explanation": "A faulty input device is possible, but the question asks for a process-related likely cause; deadlock is one such cause."
      },
      {
        "key": "D",
        "text": "The process is waiting for a network response",
        "explanation": "Network I/O can make a process appear unresponsive, but it is not the only or necessarily most likely cause in the generic scenario."
      }
    ],
    "correct_option": "A",
    "correct_answer": "The process is in a deadlock state",
    "explanation": "The two processes are involved in a circular wait, which is a classic deadlock situation and can leave both unable to make progress."
  },
  {
    "id": "os-22",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #22",
    "question": "Which Linux command is commonly used to monitor processes and their CPU and memory usage interactively?",
    "options": [
      {
        "key": "A",
        "text": "The ps command",
        "explanation": "ps displays process information, but top is specifically designed for an interactive view of processes and resource consumption."
      },
      {
        "key": "B",
        "text": "The top command",
        "explanation": "Correct. top provides a live view of processes and resource consumption; ps provides process snapshots."
      },
      {
        "key": "C",
        "text": "The kill command",
        "explanation": "kill sends signals to a process; it does not primarily inspect which process is consuming resources."
      },
      {
        "key": "D",
        "text": "The cd command",
        "explanation": "cd changes the shell’s current directory; it does not inspect process resource usage."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The top command",
    "explanation": "top provides a continuously updating process view and displays resource usage such as CPU and memory, making it useful for finding resource-heavy processes."
  },
  {
    "id": "os-23",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #23",
    "question": "What is the purpose of process scheduling in an operating system?",
    "options": [
      {
        "key": "A",
        "text": "To allocate CPU time to processes",
        "explanation": "Correct. Process scheduling determines which runnable processes receive CPU time and when."
      },
      {
        "key": "B",
        "text": "To allocate memory to processes",
        "explanation": "Memory allocation is handled by memory-management mechanisms, not the primary purpose of CPU process scheduling."
      },
      {
        "key": "C",
        "text": "To manage the file system",
        "explanation": "File-system management is a separate OS subsystem from CPU scheduling."
      },
      {
        "key": "D",
        "text": "To monitor system performance",
        "explanation": "Performance monitoring can inform scheduling decisions, but it is not the primary purpose of process scheduling."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To allocate CPU time to processes",
    "explanation": "Process scheduling determines which runnable processes receive CPU time and when."
  },
  {
    "id": "os-24",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #24",
    "question": "Which scheduling algorithm assigns CPU time based on process priority?",
    "options": [
      {
        "key": "A",
        "text": "First-Come, First-Served",
        "explanation": "FCFS schedules processes according to arrival order rather than explicitly assigning CPU time according to priority."
      },
      {
        "key": "B",
        "text": "Shortest Job First",
        "explanation": "SJF selects jobs based on estimated burst time, not process priority."
      },
      {
        "key": "C",
        "text": "Priority Scheduling",
        "explanation": "Correct. Priority Scheduling selects processes according to assigned priority."
      },
      {
        "key": "D",
        "text": "Round-Robin",
        "explanation": "Round-Robin allocates fixed time slices cyclically and is not primarily a priority-based scheduler."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Priority Scheduling",
    "explanation": "Priority Scheduling selects processes according to assigned priority."
  },
  {
    "id": "os-25",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #25",
    "question": "The Round-Robin scheduling algorithm is designed to:",
    "options": [
      {
        "key": "A",
        "text": "Prevent process starvation",
        "explanation": "Correct. Round-Robin gives runnable processes recurring time slices, helping prevent indefinite postponement under normal assumptions."
      },
      {
        "key": "B",
        "text": "Prioritize short jobs",
        "explanation": "That is the principle of SJF, whereas Round-Robin gives each runnable process a time quantum."
      },
      {
        "key": "C",
        "text": "Minimize resource allocation",
        "explanation": "Round-Robin is a CPU scheduling policy; it does not aim to minimize resource allocation."
      },
      {
        "key": "D",
        "text": "Maximize system security",
        "explanation": "Round-Robin is about CPU fairness/responsiveness, not security."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Prevent process starvation",
    "explanation": "Round-Robin gives runnable processes recurring time slices, helping prevent indefinite postponement under normal assumptions."
  },
  {
    "id": "os-26",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #26",
    "question": "In process scheduling, what does 'context switch' mean?",
    "options": [
      {
        "key": "A",
        "text": "Changing the process state from running to waiting",
        "explanation": "A running-to-waiting transition is a state change; a context switch specifically concerns switching the CPU execution context."
      },
      {
        "key": "B",
        "text": "Switching the CPU from one process to another",
        "explanation": "Correct. A context switch changes CPU execution from one process or thread to another by saving and restoring execution state."
      },
      {
        "key": "C",
        "text": "Updating the process priority",
        "explanation": "Changing priority is a scheduling operation but is not the definition of a context switch."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Switching the CPU from one process to another",
    "explanation": "A context switch changes CPU execution from one process or thread to another by saving and restoring execution state."
  },
  {
    "id": "os-27",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #27",
    "question": "Which is a disadvantage of the Shortest Job First (SJF) scheduling algorithm?",
    "options": [
      {
        "key": "A",
        "text": "It can cause starvation of longer processes",
        "explanation": "Correct. Repeated selection of short jobs can postpone long jobs for a long time, causing starvation."
      },
      {
        "key": "B",
        "text": "It is too fast",
        "explanation": "Speed is not a disadvantage of SJF."
      },
      {
        "key": "C",
        "text": "It requires too much memory",
        "explanation": "SJF does not inherently require excessive memory compared with other CPU scheduling policies."
      },
      {
        "key": "D",
        "text": "It is not suitable for batch processing",
        "explanation": "SJF is commonly applicable to batch workloads, although estimating CPU burst times can be difficult."
      }
    ],
    "correct_option": "A",
    "correct_answer": "It can cause starvation of longer processes",
    "explanation": "Repeated selection of short jobs can postpone long jobs for a long time, causing starvation."
  },
  {
    "id": "os-28",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #28",
    "question": "Which scheduling algorithm allows processes to move between priority queues based on their behavior?",
    "options": [
      {
        "key": "A",
        "text": "It allows processes to move between queues",
        "explanation": "This describes Multilevel Feedback Queue, where processes can move between queues."
      },
      {
        "key": "B",
        "text": "It reduces the overall system security",
        "explanation": "Reducing security is not an advantage of scheduling."
      },
      {
        "key": "C",
        "text": "It uses only fixed queues with no movement",
        "explanation": "Correct: fixed queue classifications can simplify scheduler organization."
      },
      {
        "key": "D",
        "text": "It always increases CPU utilization",
        "explanation": "CPU utilization can improve in some configurations but is not the defining advantage of Multilevel Queue."
      }
    ],
    "correct_option": "A",
    "correct_answer": "It allows processes to move between queues",
    "explanation": "Multilevel Feedback Queue scheduling allows processes to move between queues based on factors such as CPU usage or waiting behavior. Fixed Multilevel Queue scheduling does not normally move processes between queues."
  },
  {
    "id": "os-29",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #29",
    "question": "How does RTOS scheduling differ from general-purpose OS scheduling?",
    "options": [
      {
        "key": "A",
        "text": "RTOS prioritizes tasks based on their urgency and deadlines",
        "explanation": "Correct. Real-time systems emphasize predictable timing and meeting task deadlines, often using priority-based preemptive scheduling."
      },
      {
        "key": "B",
        "text": "RTOS uses only FCFS",
        "explanation": "An RTOS is not restricted to FCFS. Real-time schedulers commonly use priority, deadline, or other timing-aware policies."
      },
      {
        "key": "C",
        "text": "RTOS does not allow preemption",
        "explanation": "Many RTOSs support preemption so a higher-priority or more urgent task can run promptly when required."
      },
      {
        "key": "D",
        "text": "RTOS schedules tasks alphabetically",
        "explanation": "Task names or alphabetical order have no general role in real-time scheduling."
      }
    ],
    "correct_option": "A",
    "correct_answer": "RTOS prioritizes tasks based on their urgency and deadlines",
    "explanation": "Real-time systems emphasize predictable timing and meeting task deadlines, often using priority-based preemptive scheduling."
  },
  {
    "id": "os-30",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #30",
    "question": "In process scheduling, the term 'quantum' refers to:",
    "options": [
      {
        "key": "A",
        "text": "The maximum size of data a process can handle",
        "explanation": "A time quantum is a CPU time slice, not a data-size limit."
      },
      {
        "key": "B",
        "text": "The time a process spends on the CPU before being preempted",
        "explanation": "Correct. A time quantum is the maximum CPU time assigned to a process before a preemptive scheduler such as Round-Robin gives another task a turn."
      },
      {
        "key": "C",
        "text": "The priority level of a process",
        "explanation": "Priority is a scheduling attribute; quantum is the amount of CPU time allocated before preemption in Round-Robin."
      },
      {
        "key": "D",
        "text": "The number of processes in the system",
        "explanation": "The number of processes is unrelated to the definition of a scheduling quantum."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The time a process spends on the CPU before being preempted",
    "explanation": "A time quantum is the maximum CPU time assigned to a process before a preemptive scheduler such as Round-Robin gives another task a turn."
  },
  {
    "id": "os-31",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #31",
    "question": "Which Linux command can report process niceness values when used with an appropriate process-format option?",
    "options": [
      {
        "key": "A",
        "text": "ps",
        "explanation": "ps can display niceness with suitable output fields, so this makes the question ambiguous."
      },
      {
        "key": "B",
        "text": "top",
        "explanation": "top also displays process priority/nice information interactively."
      },
      {
        "key": "C",
        "text": "nice",
        "explanation": "nice is primarily used to run a command with a specified niceness."
      },
      {
        "key": "D",
        "text": "renice",
        "explanation": "renice changes the niceness of an existing process rather than serving as the usual display command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "ps",
    "explanation": "ps reports a snapshot of processes and can display the NI/niceness value, for example with an appropriate -o format. The nice utility changes or launches a process with a selected niceness, while renice changes an existing process priority."
  },
  {
    "id": "os-32",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #32",
    "question": "A newly installed application is causing high CPU usage and system slowdown. What should you do first?",
    "options": [
      {
        "key": "A",
        "text": "Uninstall the application",
        "explanation": "Uninstalling may remove the symptom, but first diagnosing the process and its CPU priority provides more useful information."
      },
      {
        "key": "B",
        "text": "Increase the system's RAM",
        "explanation": "More RAM does not directly fix a process that is consuming excessive CPU."
      },
      {
        "key": "C",
        "text": "Identify the application process and inspect its CPU usage and state",
        "explanation": "Correct. Inspecting the process and its scheduling priority is a reasonable first diagnostic step among these choices."
      },
      {
        "key": "D",
        "text": "Update the system's CPU drivers",
        "explanation": "CPU drivers are not normally the first explanation for an application-specific CPU spike."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Identify the application process and inspect its CPU usage and state",
    "explanation": "The first step is to identify the offending process and inspect its resource usage and state. Uninstalling or changing hardware-related settings before diagnosis is premature."
  },
  {
    "id": "os-33",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #33",
    "question": "If a system slowdown is caused by excessive CPU scheduling overhead and context switching during multitasking, what could be adjusted?",
    "options": [
      {
        "key": "A",
        "text": "The system's page file size",
        "explanation": "Changing the page file may help memory pressure, but it does not directly address a scheduling problem caused by multitasking."
      },
      {
        "key": "B",
        "text": "The scheduling algorithm parameters",
        "explanation": "Correct. Scheduling parameters can affect responsiveness and CPU allocation among competing tasks."
      },
      {
        "key": "C",
        "text": "The graphical user interface settings",
        "explanation": "GUI appearance/settings generally do not control CPU scheduling fairness between processes."
      },
      {
        "key": "D",
        "text": "The network bandwidth limits",
        "explanation": "Network bandwidth is unrelated to the CPU scheduler’s allocation of processor time."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The scheduling algorithm parameters",
    "explanation": "Scheduling parameters influence how often processes are preempted and how CPU time is distributed; adjusting them can reduce excessive scheduling overhead when the scheduler is the diagnosed cause."
  },
  {
    "id": "os-34",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #34",
    "question": "If certain low-priority processes consume excessive CPU time, you should:",
    "options": [
      {
        "key": "A",
        "text": "Increase their priority",
        "explanation": "Increasing priority would give a high-CPU process more scheduling preference, potentially worsening contention."
      },
      {
        "key": "B",
        "text": "Decrease their priority",
        "explanation": "Correct. Reducing their priority can limit their CPU scheduling preference relative to more important work."
      },
      {
        "key": "C",
        "text": "Reassign them to a different user",
        "explanation": "Changing ownership does not inherently reduce CPU consumption or correct scheduling behavior."
      },
      {
        "key": "D",
        "text": "Allocate them more memory",
        "explanation": "Extra memory does not necessarily reduce CPU consumption and may be unrelated to the observed scheduling issue."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Decrease their priority",
    "explanation": "Reducing their priority can limit their CPU scheduling preference relative to more important work."
  },
  {
    "id": "os-35",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #35",
    "question": "A real-time system is missing deadlines after a new task was introduced. The first troubleshooting step is to:",
    "options": [
      {
        "key": "A",
        "text": "Increase the system clock speed",
        "explanation": "Increasing clock speed is a hardware performance change, not the first diagnostic step for a newly introduced real-time task."
      },
      {
        "key": "B",
        "text": "Check the task's priority and execution time",
        "explanation": "Correct. Checking execution time and priority helps determine whether the new task is disrupting schedulability."
      },
      {
        "key": "C",
        "text": "Reduce the number of tasks",
        "explanation": "Removing tasks may be a design option, but the first troubleshooting step is to inspect the new task’s priority and execution time."
      },
      {
        "key": "D",
        "text": "Update the RTOS",
        "explanation": "Updating software may help in some cases, but diagnosis should first establish whether the task’s timing parameters are causing the missed deadline."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Check the task's priority and execution time",
    "explanation": "Checking execution time and priority helps determine whether the new task is disrupting schedulability."
  },
  {
    "id": "os-36",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #36",
    "question": "What is the primary purpose of synchronization when protecting a shared resource from concurrent access?",
    "options": [
      {
        "key": "A",
        "text": "To ensure that only one thread can access a resource at a time",
        "explanation": "Correct. Synchronization coordinates concurrent threads and can provide mutual exclusion for critical sections."
      },
      {
        "key": "B",
        "text": "To increase the execution speed of programs",
        "explanation": "Synchronization is primarily about coordinating concurrent access and ordering, not about making every program run faster."
      },
      {
        "key": "C",
        "text": "To allocate memory efficiently",
        "explanation": "Memory allocation is handled by memory-management mechanisms; synchronization protects shared state and coordinates concurrent threads."
      },
      {
        "key": "D",
        "text": "To prevent the system from crashing",
        "explanation": "The choice “To prevent the system from crashing” refers to a different operation or concept; the question is asking about To ensure that only one thread can access a resource at a time."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To ensure that only one thread can access a resource at a time",
    "explanation": "Synchronization can enforce mutual exclusion so that conflicting operations do not access a protected shared resource simultaneously. Synchronization also supports ordering and coordination in other situations."
  },
  {
    "id": "os-37",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #37",
    "question": "A deadlock occurs when:",
    "options": [
      {
        "key": "A",
        "text": "A process is waiting for a resource that is never released",
        "explanation": "Indefinite resource waiting alone does not establish a deadlock; a circular dependency is important."
      },
      {
        "key": "B",
        "text": "Multiple processes are waiting for each other to release resources",
        "explanation": "Correct: circular waiting among processes holding resources is the classic deadlock pattern."
      },
      {
        "key": "C",
        "text": "A thread tries to access a locked resource",
        "explanation": "Trying to access a locked resource normally causes blocking, not necessarily deadlock."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "Not all three conditions individually imply deadlock."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Multiple processes are waiting for each other to release resources",
    "explanation": "A circular wait in which processes hold resources while waiting for one another is a defining deadlock pattern."
  },
  {
    "id": "os-38",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "title": "Operating Systems • Question #38",
    "question": "Which conditions must be present for a deadlock to occur?",
    "options": [
      {
        "key": "A",
        "text": "Mutual exclusion, Hold and Wait, No preemption, Circular wait",
        "explanation": "Correct. The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait."
      },
      {
        "key": "B",
        "text": "Mutual exclusion, First Come First Served, Circular wait",
        "explanation": "FCFS is a scheduling policy, not a necessary deadlock condition."
      },
      {
        "key": "C",
        "text": "Priority inversion, Hold and Wait, No preemption",
        "explanation": "Priority inversion is not one of the four Coffman conditions for deadlock; mutual exclusion, hold-and-wait, no preemption, and circular wait are."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Mutual exclusion, Hold and Wait, No preemption, Circular wait",
    "explanation": "The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait."
  },
  {
    "id": "os-39",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "title": "Operating Systems • Question #39",
    "question": "What does mutual exclusion mean in synchronization?",
    "options": [
      {
        "key": "A",
        "text": "Only one process can access a resource at a time",
        "explanation": "Correct. Mutual exclusion means a non-shareable critical resource is held by at most one process/thread at a time."
      },
      {
        "key": "B",
        "text": "Any number of processes can share a resource",
        "explanation": "Mutual exclusion means exclusive access when a resource cannot safely be shared concurrently."
      },
      {
        "key": "C",
        "text": "Resources can be accessed in any order",
        "explanation": "Mutual exclusion concerns simultaneous access, not the order in which resources are requested."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "At least one listed diagnostic action is relevant, so “None of the above” does not fit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Only one process can access a resource at a time",
    "explanation": "Mutual exclusion means a non-shareable critical resource is held by at most one process/thread at a time."
  },
  {
    "id": "os-40",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "title": "Operating Systems • Question #40",
    "question": "Which strategy specifically uses a waiter or arbitrator to control when philosophers may pick up forks?",
    "options": [
      {
        "key": "A",
        "text": "Allow every philosopher to hold one fork while waiting for the other",
        "explanation": "Correct. Limiting the number of philosophers that can compete for five forks to four prevents the circular-wait configuration."
      },
      {
        "key": "B",
        "text": "Allow philosophers to wait indefinitely while holding one fork",
        "explanation": "Atomic acquisition of both forks can prevent the hold-and-wait condition, but the exact implementation matters."
      },
      {
        "key": "C",
        "text": "Require philosophers to obtain the waiter's permission before picking up forks",
        "explanation": "A waiter/arbitrator can prevent unsafe simultaneous acquisition, but this is only one possible deadlock-avoidance strategy."
      },
      {
        "key": "D",
        "text": "Let every philosopher pick up the left fork first",
        "explanation": "The other statements are not all universally true, so this combined choice is not justified."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Require philosophers to obtain the waiter's permission before picking up forks",
    "explanation": "A waiter/arbitrator can control fork allocation and prevent the circular-wait pattern. The other strategies can allow philosophers to hold one fork while waiting for another and therefore do not provide this deadlock-prevention mechanism."
  },
  {
    "id": "sql-01",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #1",
    "question": "Identify the error in \"SELECT Name, NULLIF(Age, 30) FROM Employees WHERE Age IS NOT NULL;\"",
    "options": [
      {
        "key": "A",
        "text": "Change NULLIF to ISNULL",
        "explanation": "ISNULL is vendor-specific and is not a required replacement for NULLIF."
      },
      {
        "key": "B",
        "text": "Replace Age, 30 with Age, 0",
        "explanation": "Changing 30 to 0 changes the condition and is unnecessary."
      },
      {
        "key": "C",
        "text": "Remove WHERE Age IS NOT NULL",
        "explanation": "The WHERE predicate is valid and independently filters NULL ages."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct: NULLIF(Age,30) is valid SQL in supported dialects."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "NULLIF(Age, 30) is valid SQL and returns NULL when Age equals 30; the WHERE clause separately excludes NULL Age values."
  },
  {
    "id": "sql-02",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #2",
    "question": "In Oracle SQL, identify the error in \"SELECT NVL(Salary, 'Not Provided') FROM Contractors;\"",
    "options": [
      {
        "key": "A",
        "text": "Change NVL to COALESCE",
        "explanation": "COALESCE is a portable alternative, but NVL itself is valid in Oracle."
      },
      {
        "key": "B",
        "text": "Replace Not Provided with 0",
        "explanation": "Changing the replacement value is not required for syntax."
      },
      {
        "key": "C",
        "text": "Add AS SalaryStatus for clarity",
        "explanation": "An alias is optional and does not fix syntax."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct in Oracle; the question is dialect-dependent."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "Oracle supports NVL(expr1, expr2), which returns the replacement value when expr1 is NULL. The statement is syntactically valid in Oracle SQL."
  },
  {
    "id": "sql-03",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #3",
    "question": "What is incorrect in \"SELECT COALESCE(FirstName, LastName, 'Unknown') FROM Authors;\"?",
    "options": [
      {
        "key": "A",
        "text": "Replace COALESCE with NVL",
        "explanation": "COALESCE is valid standard SQL and can return the first non-NULL value. NVL is an Oracle-specific alternative, not a required replacement."
      },
      {
        "key": "B",
        "text": "Change Unknown to NULL",
        "explanation": "The string literal Unknown is a valid fallback value in COALESCE. Replacing it with NULL would remove the useful fallback rather than correct an error."
      },
      {
        "key": "C",
        "text": "Add AS FullName for clarity",
        "explanation": "The COALESCE expression is valid. An alias would improve readability but is not required for correctness."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. COALESCE accepts multiple expressions and returns the first non-NULL value, so this statement is valid."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "COALESCE accepts multiple expressions and returns the first non-NULL value, so this statement is valid."
  },
  {
    "id": "sql-04",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #4",
    "question": "In Oracle SQL, what needs correction in \"SELECT Name, NVL2(Salary, Salary * 1.1, Salary) AS NewSalary FROM Employees;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change NVL2 to COALESCE",
        "explanation": "NVL2 is valid Oracle syntax; COALESCE is not a direct syntactic replacement for the same three-expression behavior."
      },
      {
        "key": "B",
        "text": "Replace Salary * 1.1 with Salary + 1000",
        "explanation": "Changing the arithmetic changes the business rule rather than fixing syntax."
      },
      {
        "key": "C",
        "text": "Remove AS NewSalary",
        "explanation": "The alias is valid and useful."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct for Oracle; support depends on DBMS."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "Oracle supports NVL2(expr1, expr2, expr3). Here, Salary * 1.1 is returned when Salary is not NULL, otherwise Salary is returned, and the alias is valid."
  },
  {
    "id": "sql-05",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #5",
    "question": "What is the main use of the CASE statement in SQL?",
    "options": [
      {
        "key": "A",
        "text": "To execute a sequence of commands",
        "explanation": "CASE does not execute an arbitrary sequence of SQL commands; it evaluates conditions and returns a value based on the matching branch."
      },
      {
        "key": "B",
        "text": "To handle errors",
        "explanation": "CASE can be used to express conditional values, while dedicated exception/error mechanisms handle SQL errors."
      },
      {
        "key": "C",
        "text": "To perform if-then-else type logic",
        "explanation": "Correct. CASE provides conditional expression logic similar to if-then-else."
      },
      {
        "key": "D",
        "text": "To loop through records",
        "explanation": "CASE is an expression for conditional value selection; looping through records is normally handled by procedural SQL constructs, not CASE itself."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To perform if-then-else type logic",
    "explanation": "CASE provides conditional expression logic similar to if-then-else."
  },
  {
    "id": "sql-06",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #6",
    "question": "What needs to be corrected in \"SELECT Name, CASE WHEN Age >= 18 THEN 'Adult' ELSE 'Minor' END FROM Employees;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change CASE WHEN to IF",
        "explanation": "CASE is standard SQL conditional expression syntax; IF is vendor-specific and is not a required replacement."
      },
      {
        "key": "B",
        "text": "Replace >= 18 with > 18",
        "explanation": "The condition Age >= 18 correctly includes adults who are exactly 18. Changing it to > 18 would incorrectly classify 18-year-olds as minors."
      },
      {
        "key": "C",
        "text": "Remove ELSE 'Minor'",
        "explanation": "The ELSE branch is valid and supplies the value for rows that do not satisfy the WHEN condition."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. The searched CASE expression is syntactically valid and correctly classifies ages 18 and above as Adult."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "The searched CASE expression is syntactically valid and correctly classifies ages 18 and above as Adult."
  },
  {
    "id": "sql-07",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #7",
    "question": "Identify the error in \"SELECT Name, CASE Gender WHEN 'M' THEN 'Male' WHEN 'F' THEN 'Female' END AS Gender FROM Employees;\"",
    "options": [
      {
        "key": "A",
        "text": "Change CASE Gender to CASE WHEN Gender",
        "explanation": "The query uses valid simple CASE syntax: CASE expression WHEN value THEN result. No WHEN keyword is missing."
      },
      {
        "key": "B",
        "text": "Replace END AS Gender with END",
        "explanation": "END AS Gender is valid syntax for assigning an alias to the CASE expression; removing the alias is optional, not a correction."
      },
      {
        "key": "C",
        "text": "Add ELSE 'Other'",
        "explanation": "An ELSE branch is optional. Without ELSE, unmatched values return NULL; adding ELSE 'Other' is a business-rule choice, not a syntax fix."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. This is valid simple CASE syntax: CASE Gender WHEN ... END. An ELSE branch is optional."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "This is valid simple CASE syntax: CASE Gender WHEN ... END. An ELSE branch is optional."
  },
  {
    "id": "sql-08",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #8",
    "question": "In PostgreSQL, what needs to be corrected in \"SELECT CURRENT_DATE FROM Employees;\"?",
    "options": [
      {
        "key": "A",
        "text": "Replace CURRENT_DATE with GETDATE()",
        "explanation": "GETDATE() is SQL Server-specific and is not a universal replacement for CURRENT_DATE."
      },
      {
        "key": "B",
        "text": "Remove FROM Employees",
        "explanation": "Removing FROM changes the query but is not inherently required; selecting CURRENT_DATE from Employees is valid in supported dialects."
      },
      {
        "key": "C",
        "text": "Add AS Today",
        "explanation": "An alias is optional."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct in dialects supporting CURRENT_DATE; the question is dialect-dependent."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "CURRENT_DATE is a valid PostgreSQL SQL-standard expression. Selecting it from Employees is syntactically valid and returns the current date for each selected row."
  },
  {
    "id": "sql-09",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #9",
    "question": "Identify the error in \"SELECT Name, DATEDIFF(year, HireDate, GETDATE()) AS YearsWorked FROM Employees;\"",
    "options": [
      {
        "key": "A",
        "text": "Change DATEDIFF(year, HireDate, GETDATE()) to DATEDIFF(day, HireDate, GETDATE())",
        "explanation": "Changing the datepart to day changes the meaning from year-based difference to day-based difference; it does not fix an error if the SQL Server expression is otherwise valid."
      },
      {
        "key": "B",
        "text": "Replace AS YearsWorked with AS DaysWorked",
        "explanation": "The alias should describe the selected value; a year difference can correctly be named YearsWorked."
      },
      {
        "key": "C",
        "text": "Remove GETDATE()",
        "explanation": "GETDATE() supplies the current date/time in SQL Server and is valid as the third DATEDIFF argument."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. In SQL Server, DATEDIFF with year and GETDATE() is valid syntax. Note that it counts year-boundary crossings, not exact elapsed years."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "In SQL Server, DATEDIFF with year and GETDATE() is valid syntax. Note that it counts year-boundary crossings, not exact elapsed years."
  },
  {
    "id": "sql-10",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #10",
    "question": "Correct the syntax error in \"SELECT Name, DATEADD(MONTH, 6, HireDate) FROM Employees;\"",
    "options": [
      {
        "key": "A",
        "text": "Change DATEADD to DATEDIFF",
        "explanation": "DATEADD adds a specified interval to a date. Replacing it with DATEDIFF would change the operation from adding time to measuring a difference."
      },
      {
        "key": "B",
        "text": "Replace MONTH, 6 with YEAR, 1",
        "explanation": "Both MONTH, 6 and YEAR, 1 are valid DATEADD intervals; changing the interval is not a syntax correction."
      },
      {
        "key": "C",
        "text": "Remove HireDate",
        "explanation": "HireDate is the date expression to which the interval is added and is required for the intended calculation."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. In SQL Server, DATEADD(MONTH, 6, HireDate) is valid and adds six months."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "In SQL Server, DATEADD(MONTH, 6, HireDate) is valid and adds six months."
  },
  {
    "id": "sql-11",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #11",
    "question": "Correct the syntax error in \"UPDATE Products SET Price = Price * 1.1 WHERE Price < 100 OR Price > 200;\"",
    "options": [
      {
        "key": "A",
        "text": "Change * to + in Price * 1.1",
        "explanation": "Multiplication by 1.1 correctly increases the price by 10%; changing * to + would produce a different calculation."
      },
      {
        "key": "B",
        "text": "Remove OR Price > 200",
        "explanation": "The OR condition is syntactically valid and means prices below 100 or above 200; removing it changes the requested filter."
      },
      {
        "key": "C",
        "text": "Replace WHERE with AND",
        "explanation": "WHERE introduces the row-filter condition; AND can combine conditions but cannot replace WHERE by itself."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. The UPDATE statement and WHERE condition are syntactically valid."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "The UPDATE statement and WHERE condition are syntactically valid."
  },
  {
    "id": "sql-12",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #12",
    "question": "What is incorrect in \"SELECT EmployeeID, Salary FROM Employees WHERE Salary BETWEEN 30000 AND 50000;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change BETWEEN to IN",
        "explanation": "BETWEEN is appropriate for an inclusive range; IN is used to compare against a discrete list of values."
      },
      {
        "key": "B",
        "text": "Replace AND with OR",
        "explanation": "BETWEEN syntax specifically uses AND to define the lower and upper bounds."
      },
      {
        "key": "C",
        "text": "Change Salary to TotalSalary",
        "explanation": "Changing the column name is only valid if TotalSalary actually exists; it is not a syntax correction for a valid Salary column."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. BETWEEN with AND is valid syntax and includes both boundary values in the range."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "BETWEEN with AND is valid syntax and includes both boundary values in the range."
  },
  {
    "id": "sql-13",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #13",
    "question": "In \"SELECT Name FROM Employees WHERE NOT (Age < 30 AND Department = 'Sales');\", identify the error.",
    "options": [
      {
        "key": "A",
        "text": "Replace NOT with NO",
        "explanation": "SQL uses NOT as the Boolean negation keyword; NO is not the standard replacement."
      },
      {
        "key": "B",
        "text": "Change AND to OR",
        "explanation": "AND is valid inside the negated predicate. Replacing it with OR changes the Boolean condition and is not a syntax correction."
      },
      {
        "key": "C",
        "text": "Remove parentheses around condition",
        "explanation": "The parentheses correctly group the expression being negated; removing them can change the scope of NOT."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. NOT can negate a parenthesized Boolean expression, so the statement is valid."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "NOT can negate a parenthesized Boolean expression, so the statement is valid."
  },
  {
    "id": "sql-14",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #14",
    "question": "In SQL Server (T-SQL), identify the mistake in \"SELECT * FROM Employees WHERE Department = 'HR' XOR Department = 'Finance';\"",
    "options": [
      {
        "key": "A",
        "text": "XOR operator",
        "explanation": "Correct only when targeting a DBMS that does not support XOR; the question is dialect-dependent."
      },
      {
        "key": "B",
        "text": "= 'HR'",
        "explanation": "The comparison to 'HR' is valid."
      },
      {
        "key": "C",
        "text": "= 'Finance'",
        "explanation": "The comparison to 'Finance' is valid."
      },
      {
        "key": "D",
        "text": "No mistake, the statement is correct",
        "explanation": "Not portable: XOR is not standard SQL and is unsupported by some DBMSs."
      }
    ],
    "correct_option": "A",
    "correct_answer": "XOR operator",
    "explanation": "T-SQL does not provide XOR as a logical Boolean operator. The query would need equivalent logic such as (Department = 'HR' AND Department <> 'Finance') OR (Department = 'Finance' AND Department <> 'HR'), or another appropriate predicate."
  },
  {
    "id": "sql-15",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #15",
    "question": "In SQL Server, what needs to be changed in \"UPDATE Employees SET Salary *= 2 WHERE YearsOfExperience > 5;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change *= to =:=",
        "explanation": "Standard SQL assignment uses = in UPDATE; *= is not the standard SQL assignment operator and =:= is not a standard replacement."
      },
      {
        "key": "B",
        "text": "Remove WHERE YearsOfExperience > 5",
        "explanation": "The WHERE clause is what limits the update to employees with more than five years of experience."
      },
      {
        "key": "C",
        "text": "Replace 2 with 2.0",
        "explanation": "The numeric literal 2 is valid for multiplying Salary; changing it to 2.0 does not address the nonstandard *= assignment syntax."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. SQL Server supports compound assignment operators such as *= in UPDATE statements."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "SQL Server supports compound assignment operators such as *=. The statement therefore does not require a syntax correction in SQL Server."
  },
  {
    "id": "sql-16",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #16",
    "question": "What does the WHERE clause do in an SQL query?",
    "options": [
      {
        "key": "A",
        "text": "Sorts the result set",
        "explanation": "ORDER BY sorts the returned rows; it does not filter or group them."
      },
      {
        "key": "B",
        "text": "Filters rows before grouping",
        "explanation": "Correct. WHERE filters source rows before grouping and aggregation; HAVING filters grouped or aggregated results."
      },
      {
        "key": "C",
        "text": "Joins tables",
        "explanation": "JOIN clauses combine rows from tables; WHERE and ORDER BY perform different operations."
      },
      {
        "key": "D",
        "text": "Filters rows after grouping",
        "explanation": "HAVING filters groups after grouping/aggregation, whereas WHERE filters individual rows before grouping."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Filters rows before grouping",
    "explanation": "WHERE filters source rows before grouping and aggregation; HAVING filters grouped or aggregated results."
  },
  {
    "id": "sql-17",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #17",
    "question": "What is the purpose of the ORDER BY clause in SQL?",
    "options": [
      {
        "key": "A",
        "text": "Filters rows",
        "explanation": "The choice “Filters rows” refers to a different operation or concept; the question is asking about Sorts the result set."
      },
      {
        "key": "B",
        "text": "Sorts the result set",
        "explanation": "Correct. ORDER BY controls the ordering of rows in the query result."
      },
      {
        "key": "C",
        "text": "Groups rows",
        "explanation": "GROUP BY forms groups for aggregation; it does not replace filtering or ordering."
      },
      {
        "key": "D",
        "text": "Joins tables",
        "explanation": "JOIN clauses combine rows from tables; WHERE and ORDER BY perform different operations."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Sorts the result set",
    "explanation": "ORDER BY controls the ordering of rows in the query result."
  },
  {
    "id": "sql-18",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #18",
    "question": "How does GROUP BY function when combined with an aggregate such as SUM or COUNT?",
    "options": [
      {
        "key": "A",
        "text": "It calculates the aggregate for the entire table",
        "explanation": "With GROUP BY, the aggregate is calculated separately for each group rather than as one value for the entire table."
      },
      {
        "key": "B",
        "text": "It groups rows based on unique values in a column and calculates the aggregate for each group",
        "explanation": "Correct. GROUP BY partitions rows into groups and the aggregate is calculated separately for each group."
      },
      {
        "key": "C",
        "text": "It filters rows before aggregation",
        "explanation": "The choice “It filters rows before aggregation” refers to a different operation or concept; the question is asking about It groups rows based on unique values in a column and calculates the aggregate for each group."
      },
      {
        "key": "D",
        "text": "It sorts the result set",
        "explanation": "GROUP BY groups rows; ordering is performed by ORDER BY."
      }
    ],
    "correct_option": "B",
    "correct_answer": "It groups rows based on unique values in a column and calculates the aggregate for each group",
    "explanation": "GROUP BY partitions rows into groups and the aggregate is calculated separately for each group."
  },
  {
    "id": "sql-19",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #19",
    "question": "What is the main difference between WHERE and HAVING clauses in SQL?",
    "options": [
      {
        "key": "A",
        "text": "WHERE filters rows before grouping, HAVING filters rows after grouping",
        "explanation": "Correct. WHERE filters rows before grouping; HAVING filters groups after aggregation."
      },
      {
        "key": "B",
        "text": "HAVING filters rows before grouping, WHERE filters rows after grouping",
        "explanation": "The order is reversed: WHERE filters rows before grouping and HAVING filters groups after aggregation."
      },
      {
        "key": "C",
        "text": "No difference",
        "explanation": "WHERE and HAVING operate at different stages of query processing and therefore are not interchangeable."
      },
      {
        "key": "D",
        "text": "WHERE is used with aggregate functions, HAVING is not",
        "explanation": "HAVING is specifically useful for conditions involving grouped/aggregate results; WHERE normally filters input rows."
      }
    ],
    "correct_option": "A",
    "correct_answer": "WHERE filters rows before grouping, HAVING filters rows after grouping",
    "explanation": "WHERE filters rows before grouping; HAVING filters groups after aggregation."
  },
  {
    "id": "sql-20",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #20",
    "question": "In SQL Server, what role does HAVING play when GROUP BY is omitted?",
    "options": [
      {
        "key": "A",
        "text": "It functions as a WHERE clause",
        "explanation": "HAVING is evaluated after grouping/aggregation. It is not simply equivalent to WHERE when no GROUP BY is present."
      },
      {
        "key": "B",
        "text": "It has no effect",
        "explanation": "HAVING can filter the single implicit group produced by an aggregate query even when GROUP BY is omitted."
      },
      {
        "key": "C",
        "text": "It causes an error",
        "explanation": "A HAVING clause without GROUP BY can be valid when used with aggregation, depending on the DBMS and query form."
      },
      {
        "key": "D",
        "text": "It filters aggregated results",
        "explanation": "Correct. When allowed by the DBMS, HAVING can filter the single implicit aggregate group even without GROUP BY."
      }
    ],
    "correct_option": "D",
    "correct_answer": "It filters aggregated results",
    "explanation": "SQL Server treats the result as one implicit aggregate group when GROUP BY is omitted. HAVING can then filter that group based on an aggregate condition."
  },
  {
    "id": "sql-21",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #21",
    "question": "In PostgreSQL, when ORDER BY uses ascending order by default, where do NULL values appear unless NULLS FIRST/LAST is specified?",
    "options": [
      {
        "key": "A",
        "text": "It places them at the beginning of the result set",
        "explanation": "Some DBMSs place NULLs first by default for ascending order, but this is not universal."
      },
      {
        "key": "B",
        "text": "It places them at the end of the result set",
        "explanation": "Some DBMSs place NULLs last by default, but this is not universal."
      },
      {
        "key": "C",
        "text": "It ignores them",
        "explanation": "ORDER BY does not ignore NULL rows; it orders them according to DBMS rules."
      },
      {
        "key": "D",
        "text": "It causes an error",
        "explanation": "NULL ordering does not cause an error merely because NULLs are present."
      }
    ],
    "correct_option": "B",
    "correct_answer": "It places them at the end of the result set",
    "explanation": "PostgreSQL sorts NULL as larger than non-NULL values by default, so with ascending order NULL values appear last."
  },
  {
    "id": "sql-22",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #22",
    "question": "In PostgreSQL, what happens if SELECT contains a non-aggregated column that is not included in GROUP BY?",
    "options": [
      {
        "key": "A",
        "text": "The query fails",
        "explanation": "Correct. Under standard/strict grouping rules, a selected non-aggregated column must be grouped or otherwise permitted by the DBMS."
      },
      {
        "key": "B",
        "text": "The query succeeds, and the column shows arbitrary values",
        "explanation": "Standard SQL generally requires selected non-aggregated columns to be grouped. Some permissive DBMS configurations may allow otherwise, but arbitrary values are not the standard rule."
      },
      {
        "key": "C",
        "text": "The query is automatically corrected",
        "explanation": "SQL engines do not generally rewrite an invalid grouping query into the intended query automatically."
      },
      {
        "key": "D",
        "text": "The column is ignored",
        "explanation": "A selected column is not silently ignored simply because it is absent from GROUP BY in standard-compliant grouping semantics."
      }
    ],
    "correct_option": "A",
    "correct_answer": "The query fails",
    "explanation": "PostgreSQL rejects a grouped query when a selected non-aggregated column is neither grouped nor otherwise permitted by functional dependency rules."
  },
  {
    "id": "sql-23",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #23",
    "question": "Can ORDER BY use column aliases defined in the SELECT statement?",
    "options": [
      {
        "key": "A",
        "text": "Yes",
        "explanation": "Correct. ORDER BY can refer to a select-list alias in common SQL implementations."
      },
      {
        "key": "B",
        "text": "No",
        "explanation": "ORDER BY can commonly refer to SELECT-list aliases because sorting occurs after the SELECT expressions are named."
      },
      {
        "key": "C",
        "text": "Only if they are numerical",
        "explanation": "Aliases do not need to be numeric; textual column aliases can also be referenced by ORDER BY in supported dialects."
      },
      {
        "key": "D",
        "text": "Only in subqueries",
        "explanation": "ORDER BY can use SELECT aliases in the same query block in many SQL dialects; a subquery is not required."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Yes",
    "explanation": "ORDER BY can refer to a select-list alias in common SQL implementations."
  },
  {
    "id": "sql-24",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #24",
    "question": "What is the effect of combining GROUP BY with ORDER BY in an SQL query?",
    "options": [
      {
        "key": "A",
        "text": "GROUP BY overrides ORDER BY",
        "explanation": "GROUP BY and ORDER BY perform different jobs and can coexist; GROUP BY does not override ORDER BY."
      },
      {
        "key": "B",
        "text": "ORDER BY overrides GROUP BY",
        "explanation": "ORDER BY sorts the grouped result but does not replace the grouping operation."
      },
      {
        "key": "C",
        "text": "They can be used together for organized grouping and sorting",
        "explanation": "Correct. GROUP BY forms groups, while ORDER BY sorts the resulting rows or groups."
      },
      {
        "key": "D",
        "text": "They cannot be used together in the same query",
        "explanation": "GROUP BY and ORDER BY are routinely used together to group data and then sort the grouped results."
      }
    ],
    "correct_option": "C",
    "correct_answer": "They can be used together for organized grouping and sorting",
    "explanation": "GROUP BY forms groups, while ORDER BY sorts the resulting rows or groups."
  },
  {
    "id": "sql-25",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #25",
    "question": "In PostgreSQL, can HAVING be used without an aggregate function or GROUP BY?",
    "options": [
      {
        "key": "A",
        "text": "Yes, it acts like a WHERE clause",
        "explanation": "Correct. HAVING can be used to filter grouped results and, in many DBMSs, can appear without an aggregate expression; it is not literally identical to WHERE."
      },
      {
        "key": "B",
        "text": "No, it must be used with an aggregate function",
        "explanation": "HAVING can be valid without an aggregate in some SQL dialects/queries, so this is too absolute."
      },
      {
        "key": "C",
        "text": "Yes, but it has no effect",
        "explanation": "HAVING can meaningfully filter a single aggregate group; it is not inherently a no-op."
      },
      {
        "key": "D",
        "text": "No, it causes an error",
        "explanation": "The legality of HAVING without an aggregate varies by DBMS/query structure; it is not universally an error."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Yes, it acts like a WHERE clause",
    "explanation": "PostgreSQL permits HAVING without GROUP BY and treats the query as a grouped query; the condition can be used to decide whether the single implicit group is returned."
  },
  {
    "id": "sql-26",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #26",
    "question": "What is incorrect in \"SELECT Name FROM Employees WHERE Department = 'Sales' ORDER BY Age;\"?",
    "options": [
      {
        "key": "A",
        "text": "Replace ORDER BY Age with GROUP BY Age",
        "explanation": "ORDER BY correctly sorts the result by Age; GROUP BY would change the query into a grouping operation."
      },
      {
        "key": "B",
        "text": "Change WHERE Department = 'Sales' to WHERE Department IN ('Sales')",
        "explanation": "Both forms are valid for a single value; IN is unnecessary but not required as a correction."
      },
      {
        "key": "C",
        "text": "Remove Name FROM",
        "explanation": "Name FROM is the normal SELECT ... FROM structure. Removing it would destroy the query syntax rather than fix anything."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. The query is valid SQL assuming Name, Department, and Age exist."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "The query is valid SQL assuming Name, Department, and Age exist."
  },
  {
    "id": "sql-27",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #27",
    "question": "Identify the error in \"SELECT Department, COUNT(*) FROM Employees GROUP BY Salary;\"",
    "options": [
      {
        "key": "A",
        "text": "SELECT Department",
        "explanation": "Correct issue: Department is selected but neither grouped nor aggregated."
      },
      {
        "key": "B",
        "text": "COUNT(*)",
        "explanation": "COUNT(*) is a valid aggregate."
      },
      {
        "key": "C",
        "text": "GROUP BY Salary",
        "explanation": "Grouping by Salary is syntactically valid, but it does not justify selecting Department."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "The query is not valid under standard/strict grouping rules."
      }
    ],
    "correct_option": "A",
    "correct_answer": "SELECT Department",
    "explanation": "Department is selected but is neither grouped nor aggregated; GROUP BY Salary alone does not satisfy the grouping rule."
  },
  {
    "id": "sql-28",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #28",
    "question": "In SQL Server, what needs to be corrected in \"SELECT AVG(Salary) AS AverageSalary FROM Employees HAVING AverageSalary > 50000;\"?",
    "options": [
      {
        "key": "A",
        "text": "SELECT AVG(Salary)",
        "explanation": "AVG(Salary) is a valid aggregate expression."
      },
      {
        "key": "B",
        "text": "AS AverageSalary",
        "explanation": "The alias declaration itself is valid."
      },
      {
        "key": "C",
        "text": "FROM Employees",
        "explanation": "FROM Employees is valid."
      },
      {
        "key": "D",
        "text": "HAVING AverageSalary > 50000",
        "explanation": "Alias visibility in HAVING is DBMS-dependent; using HAVING AVG(Salary)>50000 is portable."
      }
    ],
    "correct_option": "D",
    "correct_answer": "HAVING AverageSalary > 50000",
    "explanation": "In SQL Server, a SELECT-list alias such as AverageSalary cannot be referenced directly in HAVING. The aggregate expression should be repeated, for example HAVING AVG(Salary) > 50000."
  },
  {
    "id": "sql-29",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #29",
    "question": "Correct the syntax error in \"SELECT Name, Department, COUNT(*) FROM Employees WHERE Department = 'Sales' GROUP BY Department;\"",
    "options": [
      {
        "key": "A",
        "text": "SELECT Name",
        "explanation": "Correct: Name is neither aggregated nor included in GROUP BY."
      },
      {
        "key": "B",
        "text": "Department",
        "explanation": "Department can be selected if it is grouped."
      },
      {
        "key": "C",
        "text": "COUNT(*)",
        "explanation": "COUNT(*) is a valid aggregate."
      },
      {
        "key": "D",
        "text": "WHERE Department = 'Sales'",
        "explanation": "The WHERE predicate is valid and can precede GROUP BY."
      }
    ],
    "correct_option": "A",
    "correct_answer": "SELECT Name",
    "explanation": "Name is neither aggregated nor included in GROUP BY, so the query violates standard grouping rules. It could be fixed by removing Name or grouping by Name as well."
  },
  {
    "id": "sql-30",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #30",
    "question": "In \"SELECT Department, SUM(Salary) FROM Employees GROUP BY Department HAVING COUNT(*) > 5;\", identify the error.",
    "options": [
      {
        "key": "A",
        "text": "Replace SUM(Salary) with AVG(Salary)",
        "explanation": "SUM and AVG calculate different aggregates; changing SUM to AVG changes the requested result rather than fixing the query."
      },
      {
        "key": "B",
        "text": "Change GROUP BY to ORDER BY",
        "explanation": "GROUP BY is needed to form department groups for the aggregate; ORDER BY only sorts the result."
      },
      {
        "key": "C",
        "text": "Change COUNT(*) to COUNT(Department)",
        "explanation": "COUNT(*) is valid in HAVING and counts rows in each group; COUNT(Department) would instead ignore NULL Department values."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. SUM and COUNT can be used together in HAVING after grouping by Department; the query is valid."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "SUM and COUNT can be used together in HAVING after grouping by Department; the query is valid."
  },
  {
    "id": "sql-31",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #31",
    "question": "What is incorrect in \"SELECT * FROM Employees ORDER BY 3;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change ORDER BY 3 to ORDER BY ID",
        "explanation": "ORDER BY 3 is valid in many SQL dialects and means ordering by the third selected column; using ID is an alternative, not a required correction."
      },
      {
        "key": "B",
        "text": "Replace * with EmployeeID, Name",
        "explanation": "SELECT * is valid and returns all columns; explicitly listing columns is a style choice, not a syntax requirement."
      },
      {
        "key": "C",
        "text": "Add WHERE clause before ORDER BY",
        "explanation": "A WHERE clause is optional. ORDER BY can legally follow FROM/WHERE as applicable without requiring an additional WHERE."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. An ORDER BY ordinal can refer to the third column of the SELECT list, so ORDER BY 3 is valid if the result has at least three columns."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "An ORDER BY ordinal can refer to the third column of the SELECT list, so ORDER BY 3 is valid if the result has at least three columns."
  },
  {
    "id": "sql-32",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #32",
    "question": "Identify the mistake in \"SELECT Department, MAX(Salary) FROM Employees WHERE MAX(Salary) > 50000 GROUP BY Department;\"",
    "options": [
      {
        "key": "A",
        "text": "SELECT Department",
        "explanation": "SELECT Department is valid, but it must be grouped because Department is selected alongside an aggregate. The aggregate filter belongs in HAVING."
      },
      {
        "key": "B",
        "text": "MAX(Salary)",
        "explanation": "MAX(Salary) is a valid aggregate expression and is appropriate for finding the maximum salary within each department."
      },
      {
        "key": "C",
        "text": "WHERE MAX(Salary) > 50000",
        "explanation": "Correct. Aggregate functions cannot be used in WHERE; the aggregate filter belongs in HAVING, e.g. HAVING MAX(Salary) > 50000."
      },
      {
        "key": "D",
        "text": "GROUP BY Department",
        "explanation": "The aggregate condition belongs in HAVING, not WHERE. The corrected form is WHERE-free for this predicate and uses HAVING MAX(Salary) > 50000."
      }
    ],
    "correct_option": "C",
    "correct_answer": "WHERE MAX(Salary) > 50000",
    "explanation": "Aggregate functions cannot be used in WHERE; the aggregate filter belongs in HAVING, e.g. HAVING MAX(Salary) > 50000."
  },
  {
    "id": "sql-33",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #33",
    "question": "In \"SELECT Department, COUNT(EmployeeID) FROM Employees GROUP BY Department HAVING COUNT(EmployeeID) > ALL (SELECT COUNT(EmployeeID) FROM Employees GROUP BY Department);\", what needs correction?",
    "options": [
      {
        "key": "A",
        "text": "Change COUNT(EmployeeID) to SUM(EmployeeID)",
        "explanation": "SUM is not needed; COUNT is valid."
      },
      {
        "key": "B",
        "text": "Replace GROUP BY with ORDER BY",
        "explanation": "GROUP BY is required for the grouped counts used by the query."
      },
      {
        "key": "C",
        "text": "Alter ALL to ANY",
        "explanation": "ALL is valid syntax and has a different meaning from ANY."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct: syntactically valid, though the condition may never be true."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "The query is syntactically valid. Its condition may be logically impossible because no group's count can exceed the maximum count of all groups, but that is a logic issue, not a syntax error."
  },
  {
    "id": "sql-34",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #34",
    "question": "Which clause is in the wrong position in this SQL statement? \"SELECT Department FROM Employees WHERE Department IN (SELECT Department FROM Departments WHERE Location = 'New York') ORDER BY Department GROUP BY Department;\"",
    "options": [
      {
        "key": "A",
        "text": "WHERE Department IN",
        "explanation": "The IN subquery syntax is valid."
      },
      {
        "key": "B",
        "text": "ORDER BY Name",
        "explanation": "ORDER BY Name is valid, but it appears before GROUP BY, which violates clause order."
      },
      {
        "key": "C",
        "text": "GROUP BY Department",
        "explanation": "Correctly identifies the clause-order problem, although GROUP BY is unnecessary here and creates another grouping issue."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "There is an error, so no-error is incorrect."
      }
    ],
    "correct_option": "B",
    "correct_answer": "ORDER BY Name",
    "explanation": "GROUP BY must appear before ORDER BY in the SELECT statement. The corrected order is GROUP BY Department ORDER BY Department."
  },
  {
    "id": "sql-35",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #35",
    "question": "In SQL Server, what is wrong with \"SELECT Department, COUNT(*) AS TotalEmployees FROM Employees GROUP BY Department HAVING TotalEmployees > 5 ORDER BY TotalEmployees;\"?",
    "options": [
      {
        "key": "A",
        "text": "SELECT Department",
        "explanation": "SELECT Department is valid because Department appears in GROUP BY. The questionable part is using the SELECT alias TotalEmployees in HAVING, which depends on the SQL dialect."
      },
      {
        "key": "B",
        "text": "COUNT(*) AS TotalEmployees",
        "explanation": "The COUNT(*) expression and alias are valid; the issue is how the alias is referenced in HAVING, which is DBMS-dependent."
      },
      {
        "key": "C",
        "text": "HAVING clause misuse",
        "explanation": "Correct. Using a SELECT alias in HAVING is not portable and is rejected by some DBMSs; a portable form is HAVING COUNT(*) > 5. ORDER BY aliases are commonly allowed."
      },
      {
        "key": "D",
        "text": "ORDER BY TotalEmployees",
        "explanation": "Ordering by a selected aggregate alias is commonly valid and is not inherently an error."
      }
    ],
    "correct_option": "C",
    "correct_answer": "HAVING clause misuse",
    "explanation": "SQL Server does not allow the SELECT-list alias TotalEmployees to be referenced directly in HAVING. Use HAVING COUNT(*) > 5 instead. ORDER BY can use the alias."
  },
  {
    "id": "sql-36",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #36",
    "question": "What is the main difference between UNION and UNION ALL in SQL?",
    "options": [
      {
        "key": "A",
        "text": "UNION removes duplicates, UNION ALL does not",
        "explanation": "Correct. UNION eliminates duplicate rows from the combined result, while UNION ALL preserves duplicates."
      },
      {
        "key": "B",
        "text": "UNION ALL removes duplicates, UNION does not",
        "explanation": "UNION removes duplicate rows from the combined result, while UNION ALL preserves them."
      },
      {
        "key": "C",
        "text": "No difference",
        "explanation": "WHERE and HAVING operate at different stages of query processing and therefore are not interchangeable."
      },
      {
        "key": "D",
        "text": "UNION is faster than UNION ALL",
        "explanation": "UNION often requires duplicate elimination, so UNION ALL can be faster when duplicate preservation is acceptable; performance depends on the DBMS and data."
      }
    ],
    "correct_option": "A",
    "correct_answer": "UNION removes duplicates, UNION ALL does not",
    "explanation": "UNION eliminates duplicate rows from the combined result, while UNION ALL preserves duplicates."
  },
  {
    "id": "sql-37",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #37",
    "question": "What needs to be corrected in \"SELECT Name FROM Employees UNION ALL SELECT Name FROM Managers;\"?",
    "options": [
      {
        "key": "A",
        "text": "Change UNION ALL to UNION",
        "explanation": "UNION ALL is valid when both SELECT statements return compatible column counts/types; changing it would unnecessarily remove duplicates."
      },
      {
        "key": "B",
        "text": "Replace first SELECT Name with SELECT EmployeeName",
        "explanation": "The column names in the two SELECT statements need not have the same names; they need compatible positions/types."
      },
      {
        "key": "C",
        "text": "Add WHERE clause to both SELECT statements",
        "explanation": "UNION ALL does not require WHERE clauses; each SELECT can independently choose whether to filter rows."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "Correct. Both SELECT statements return one column, so UNION ALL is syntactically valid. It preserves duplicate names."
      }
    ],
    "correct_option": "D",
    "correct_answer": "No error",
    "explanation": "Both SELECT statements return one column, so UNION ALL is syntactically valid. It preserves duplicate names."
  },
  {
    "id": "sql-38",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "easy",
    "title": "DBMS & SQL • Question #38",
    "question": "Identify the error in \"SELECT Name, Department FROM Employees UNION SELECT Name FROM Managers;\"",
    "options": [
      {
        "key": "A",
        "text": "The UNION keyword",
        "explanation": "UNION itself is valid."
      },
      {
        "key": "B",
        "text": "The number of columns in SELECT statements",
        "explanation": "Correct: both SELECTs must return the same number of corresponding columns."
      },
      {
        "key": "C",
        "text": "The table names",
        "explanation": "The table names can differ; that is not the issue."
      },
      {
        "key": "D",
        "text": "No error",
        "explanation": "There is a column-count mismatch, so the statement is invalid."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The number of columns in SELECT statements",
    "explanation": "Set operations such as UNION require corresponding SELECT statements to return the same number of columns."
  },
  {
    "id": "sql-39",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "medium",
    "title": "DBMS & SQL • Question #39",
    "question": "What does an INNER JOIN do in SQL?",
    "options": [
      {
        "key": "A",
        "text": "Joins rows that satisfy a condition in either table",
        "explanation": "INNER JOIN returns rows where the join predicate matches between the participating tables."
      },
      {
        "key": "B",
        "text": "Joins all rows from both tables",
        "explanation": "That behavior describes a FULL OUTER JOIN; INNER JOIN returns only rows satisfying the join condition."
      },
      {
        "key": "C",
        "text": "Joins rows with matching values in both tables",
        "explanation": "Correct. An INNER JOIN returns rows where the join condition matches between the joined tables."
      },
      {
        "key": "D",
        "text": "Joins rows that do not match in either table",
        "explanation": "Unmatched-row preservation is associated with outer joins, not INNER JOIN."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Joins rows with matching values in both tables",
    "explanation": "An INNER JOIN returns rows where the join condition matches between the joined tables."
  },
  {
    "id": "sql-40",
    "subSection": "cs-fundamentals",
    "category": "CS Fundamental",
    "topic": "DBMS & SQL",
    "difficulty": "hard",
    "title": "DBMS & SQL • Question #40",
    "question": "What is the main characteristic of a FULL OUTER JOIN?",
    "options": [
      {
        "key": "A",
        "text": "It returns matching rows plus unmatched rows from both tables",
        "explanation": "Correct: a FULL OUTER JOIN retains matched rows plus unmatched rows from both tables."
      },
      {
        "key": "B",
        "text": "It only joins rows with matching values in both tables",
        "explanation": "That describes an INNER JOIN."
      },
      {
        "key": "C",
        "text": "It excludes all unmatched rows",
        "explanation": "A FULL OUTER JOIN does not exclude unmatched rows."
      },
      {
        "key": "D",
        "text": "It joins rows that satisfy a condition in either table",
        "explanation": "This is too vague; a FULL OUTER JOIN specifically preserves unmatched rows from both sides."
      }
    ],
    "correct_option": "A",
    "correct_answer": "It returns matching rows plus unmatched rows from both tables",
    "explanation": "A FULL OUTER JOIN preserves rows from both tables: matching rows are combined, while unmatched rows from either side are retained with NULLs for the missing side."
  }
];
