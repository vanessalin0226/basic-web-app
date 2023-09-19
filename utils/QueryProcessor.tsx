export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "vanessa2"
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "vv"
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: %d, %d, %d?")) {
    return (
      "94"
    );
  }

  const getMax = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (getMax) {
    const x: number = parseInt(getMax[1]);
    const y: number = parseInt(getMax[2]);
    const z: number = parseInt(getMax[3]);
    return Math.max(x,y,z).toString();
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const mult = query.match(/What is (\d+) multiplied by (\d+)/);
  if (mult) {
    const x: number = parseInt(mult[1]);
    const y: number = parseInt(mult[2]);
    return (x*y).toString();
  }

  // const sqNCube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  // if (sqNCube) {

  //   const x: number = parseInt(sqNCube[1]);
  //   const y: number = parseInt(sqNCube[2]);
  //   const z: number = parseInt(sqNCube[3]);
  //   const a: number = parseInt(sqNCube[4]);
  //   const b: number = parseInt(sqNCube[5]);
  //   const c: number = parseInt(sqNCube[6]);
  //   const d: number = parseInt(sqNCube[7]);
  //   return (x*y).toString();
  // }

  const minus = query.match(/What is (\d+) minus (\d+)/);
  if (minus) {
    const x: number = parseInt(minus[1]);
    const y: number = parseInt(minus[2]);
    return (x-y).toString();
  }

  function isPrime(num: number){
    if(num < 2) return false;

  }

  // const prime = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  // if (prime) {
  //   const x: number = parseInt(prime[1]);
  //   const y: number = parseInt(prime[2]);
  //   const z: number = parseInt(prime[3]);
  //   const a: number = parseInt(prime[4]);
  //   const b: number = parseInt(prime[5]);
  //   return (x-y).toString();
  // }

  const pow = query.match(/What is (\d+) to the power of (\d+)?/);
  if (pow) {
    const x: number = parseInt(pow[1]);
    const y: number = parseInt(pow[2]);
    return Math.pow(x, y).toString();
  }

  return "";
}
