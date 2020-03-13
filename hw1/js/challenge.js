let challenge = function(n) {
  if (n < 10) return 0;
  let t = n;
  let next = 0;
  while (t !== 0) {
    let r = t % 10;
    next += r;
    t = Math.floor(t / 10);
  }
  return challenge(next) + 1;
};
console.log(challenge(199));
