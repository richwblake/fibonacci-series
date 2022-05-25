function fibonacci(num) {
    if (num === 0) return 0;
    let count = 0;
    let a = 1;
    let b = 1;

    while (count < num - 2) {
        const tmp = b;
        b = a + b;
        a = tmp;
        count++;
    }
    return b;
}

const fib_util = (num, count) => {
    
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
