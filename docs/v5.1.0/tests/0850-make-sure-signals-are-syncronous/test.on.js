function findLargePrimes(limit) {
  const primes = [];
  function isPrime(num) {
    // Intentionally inefficient primality test with O(n) complexity
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      // Deliberately slow checking process
      for (let j = 0; j < 1000; j++) {
        Math.sqrt(j); // Add some extra computational overhead
      }
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  // Nested loops to make the function extremely time-consuming
  for (let num = 2; num < limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

export default class {
  // NOTE: The display might/probably wont'
  // refresh until the full event set of
  // signals has been processed.
  #counter = 0;
  runTest0850Alfa(_event, el) {
    this.#counter += 1;
    const checkEl = this.api.querySelector(".testTarget0850");
    if (checkEl.innerHTML === "a" && this.#counter === 1) {
      el.innerHTML = "PASSED";
    }
    checkEl.innerHTML = "b";
    findLargePrimes(8000);
  }
  runTest0850Bravo(_event, el) {
    this.#counter += 1;
    const checkEl = this.api.querySelector(".testTarget0850");
    if (checkEl.innerHTML === "b" && this.#counter === 2) {
      el.innerHTML = "PASSED";
    }
  }
}