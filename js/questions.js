/**
 * Question Bank for What a Code Quiz Game
 * Contains questions for different programming categories:
 * - JavaScript
 * - HTML
 * - CSS
 * - Python
 */

const questionBank = {
    javascript: [
        {
            question: "What does 'typeof null' return in JavaScript?",
            options: ["null", "undefined", "object", "number"],
            correctAnswer: 2,
            explanation: "In JavaScript, typeof null returns 'object', which is considered a bug in the language."
        },
        {
            question: "What will be the output of the following code?\n" +
                     "console.log(0.1 + 0.2 === 0.3);",
            options: ["true", "false", "undefined", "Error"],
            correctAnswer: 1,
            explanation: "Due to floating point precision, 0.1 + 0.2 is actually 0.30000000000000004, not exactly 0.3."
        },
        {
            question: "Which of the following is NOT a primitive data type in JavaScript?",
            options: ["string", "boolean", "undefined", "array"],
            correctAnswer: 3,
            explanation: "Arrays are objects in JavaScript, not primitive data types."
        },
        {
            question: "What does the following code return?\n" +
                     "let arr = [1, 2, 3];\n" +
                     "arr.map(num => num * 2);",
            options: ["[1, 2, 3]", "[2, 4, 6]", "undefined", "Error"],
            correctAnswer: 1,
            explanation: "The map method creates a new array with the results of calling a function on every element in the array."
        },
        {
            question: "Which method is used to add elements to the end of an array?",
            options: ["unshift()", "push()", "append()", "add()"],
            correctAnswer: 1,
            explanation: "The push() method adds one or more elements to the end of an array."
        },
        {
            question: "What is closure in JavaScript?",
            options: [
                "A way to secure your code from unauthorized access",
                "A function that has access to variables in its outer lexical environment",
                "A method to close unnecessary processes",
                "A way to terminate function execution"
            ],
            correctAnswer: 1,
            explanation: "A closure is a function that has access to variables from its outer lexical environment, even after that environment has completed execution."
        },
        {
            question: "What is the output of the following code?\n" +
                     "console.log(1 + '2' + 3);",
            options: ["6", "123", "15", "Error"],
            correctAnswer: 1,
            explanation: "In this expression, numbers are converted to strings for concatenation, so 1 + '2' becomes '12', then '12' + 3 becomes '123'."
        },
        {
            question: "Which of the following is a correct way to declare a constant in JavaScript?",
            options: ["const x = 5;", "constant x = 5;", "let const x = 5;", "var const x = 5;"],
            correctAnswer: 0,
            explanation: "The 'const' keyword is used to declare constants in JavaScript."
        },
        {
            question: "What is the 'this' keyword referring to in an arrow function?",
            options: [
                "The global window object",
                "The object that defined the arrow function",
                "The parent function's this value",
                "The object that called the function"
            ],
            correctAnswer: 2,
            explanation: "Arrow functions don't have their own 'this' binding. They inherit 'this' from the parent scope at the time they're defined."
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: ["pop()", "shift()", "splice()", "slice()"],
            correctAnswer: 0,
            explanation: "The pop() method removes the last element from an array and returns that element."
        }
    ],
    html: [
        {
            question: "Which HTML element is used to define the title of a document?",
            options: ["<head>", "<title>", "<header>", "<meta>"],
            correctAnswer: 1,
            explanation: "The <title> element defines the title of the document, which appears in the browser's title bar or tab."
        },
        {
            question: "Which attribute is used to provide an alternative text for an image?",
            options: ["title", "src", "alt", "href"],
            correctAnswer: 2,
            explanation: "The alt attribute provides alternative information for an image if a user cannot view it."
        },
        {
            question: "Which HTML tag is used for creating a dropdown list?",
            options: ["<dropdown>", "<select>", "<option>", "<list>"],
            correctAnswer: 1,
            explanation: "The <select> element is used to create a dropdown list, which contains <option> elements."
        },
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Technical Modern Language"
            ],
            correctAnswer: 0,
            explanation: "HTML stands for Hyper Text Markup Language, the standard language for creating web pages."
        },
        {
            question: "Which element is used to define important text?",
            options: ["<strong>", "<important>", "<b>", "<em>"],
            correctAnswer: 0,
            explanation: "The <strong> element defines text with strong importance, typically displayed in bold."
        },
        {
            question: "Which HTML element is used to define the structure of an HTML table?",
            options: ["<table>", "<tr>", "<td>", "<th>"],
            correctAnswer: 0,
            explanation: "The <table> tag defines an HTML table. The <tr>, <td>, and <th> tags are used within a table for rows, data cells, and header cells respectively."
        },
        {
            question: "Which element is used to create a line break?",
            options: ["<lb>", "<break>", "<br>", "<newline>"],
            correctAnswer: 2,
            explanation: "The <br> tag inserts a single line break in HTML."
        },
        {
            question: "Which HTML attribute specifies an inline style for an element?",
            options: ["class", "style", "font", "styles"],
            correctAnswer: 1,
            explanation: "The style attribute is used to add inline styles to an HTML element."
        },
        {
            question: "Which element is used to define navigation links?",
            options: ["<navigation>", "<nav>", "<links>", "<menu>"],
            correctAnswer: 1,
            explanation: "The <nav> element defines a set of navigation links."
        },
        {
            question: "Which HTML tag is used for creating a hyperlink?",
            options: ["<hyperlink>", "<link>", "<a>", "<href>"],
            correctAnswer: 2,
            explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML."
        }
    ],
    css: [
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["text-color", "font-color", "color", "text-style"],
            correctAnswer: 2,
            explanation: "The 'color' property is used to set the color of text in CSS."
        },
        {
            question: "Which CSS selector selects all elements with the class 'example'?",
            options: ["#example", ".example", "*example", "example"],
            correctAnswer: 1,
            explanation: "The class selector uses a period (.) followed by the class name to select elements with a specific class."
        },
        {
            question: "What is the default value of the 'position' property in CSS?",
            options: ["static", "relative", "fixed", "absolute"],
            correctAnswer: 0,
            explanation: "The default position value for elements is 'static', which means the element follows the normal document flow."
        },
        {
            question: "Which property is used to add spacing between letters?",
            options: ["letter-spacing", "text-spacing", "character-spacing", "font-spacing"],
            correctAnswer: 0,
            explanation: "The 'letter-spacing' property increases or decreases the space between characters."
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Colorful Style Sheets",
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style Sheets"
            ],
            correctAnswer: 2,
            explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages."
        },
        {
            question: "Which CSS property is used to make text bold?",
            options: ["font-weight", "text-style", "font-style", "text-weight"],
            correctAnswer: 0,
            explanation: "The 'font-weight' property sets how thick or thin characters in text should be displayed."
        },
        {
            question: "Which property is used to change the font of an element?",
            options: ["font-style", "text-style", "font-family", "font-weight"],
            correctAnswer: 2,
            explanation: "The 'font-family' property specifies the font for an element."
        },
        {
            question: "How do you select an element with id 'demo'?",
            options: [".demo", "#demo", "demo", "*demo"],
            correctAnswer: 1,
            explanation: "The ID selector uses a hash character (#) followed by the ID of the element."
        },
        {
            question: "Which CSS property controls the size of the font?",
            options: ["text-size", "font-style", "font-size", "text-style"],
            correctAnswer: 2,
            explanation: "The 'font-size' property sets the size of the text."
        },
        {
            question: "Which property is used to create space between elements?",
            options: ["spacing", "margin", "padding", "border"],
            correctAnswer: 1,
            explanation: "The 'margin' property creates space around elements, outside of any defined borders."
        }
    ],
    python: [
        {
            question: "What is the output of 'print(2 ** 3)' in Python?",
            options: ["6", "8", "9", "5"],
            correctAnswer: 1,
            explanation: "The ** operator represents exponentiation in Python. 2 raised to the power of 3 equals 8."
        },
        {
            question: "Which of the following is a correct way to create a list in Python?",
            options: [
                "list = (1, 2, 3)",
                "list = [1, 2, 3]",
                "list = {1, 2, 3}",
                "list = '1, 2, 3'"
            ],
            correctAnswer: 1,
            explanation: "Lists in Python are created using square brackets []."
        },
        {
            question: "What does the following Python code print?\n" +
                     "my_list = [1, 2, 3, 4]\n" +
                     "print(my_list[-1])",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            explanation: "In Python, negative indices start from the end of the list. -1 refers to the last element, which is 4."
        },
        {
            question: "Which method is used to add an element to the end of a list in Python?",
            options: ["insert()", "append()", "extend()", "add()"],
            correctAnswer: 1,
            explanation: "The append() method adds an element to the end of a list."
        },
        {
            question: "What is the output of 'print(len('Hello World'))'?",
            options: ["10", "11", "12", "9"],
            correctAnswer: 1,
            explanation: "The len() function returns the number of characters in a string. 'Hello World' has 11 characters (including the space)."
        },
        {
            question: "What is the result of 'print(True and False)'?",
            options: ["True", "False", "None", "Error"],
            correctAnswer: 1,
            explanation: "In Python's logical operations, 'and' returns True if both operands are True, otherwise it returns False."
        },
        {
            question: "Which of the following is a correct way to define a function in Python?",
            options: [
                "function my_func():",
                "def my_func():",
                "define my_func():",
                "func my_func():"
            ],
            correctAnswer: 1,
            explanation: "Python uses the 'def' keyword to define functions."
        },
        {
            question: "What does the following code return?\n" +
                     "my_dict = {'a': 1, 'b': 2}\n" +
                     "print('a' in my_dict)",
            options: ["True", "False", "KeyError", "1"],
            correctAnswer: 0,
            explanation: "The 'in' operator checks if a key exists in a dictionary. Since 'a' is a key in my_dict, it returns True."
        },
        {
            question: "What is a list comprehension in Python?",
            options: [
                "A way to understand lists better",
                "A concise way to create lists based on existing lists",
                "A method to compress lists to save memory",
                "A technique to sort lists efficiently"
            ],
            correctAnswer: 1,
            explanation: "List comprehension is a concise way to create lists based on existing lists or iterables."
        },
        {
            question: "Which of the following correctly opens a file for reading in Python?",
            options: [
                "file = open('file.txt', 'read')",
                "file = open('file.txt', 'r')",
                "file = read('file.txt')",
                "file = open.read('file.txt')"
            ],
            correctAnswer: 1,
            explanation: "To open a file for reading in Python, you use the open() function with mode 'r'."
        }
    ]
};
