function slots(q, m1, m2, m3) {
  let spins = 0;
  while (q > 0)
    if (m1 === 35) {
      q = q + 30;
      spins++;
      m1 = 0;
    } else {
      m1++;
      q--;
      spins++;
    }
  if (m2 === 100) {
    q = q + 60;
    spins++;
    m2 = 0;
  } else {
    m2++;
    q--;
    spins++;
  }
  if (m3 === 10) {
    q = q + 9;
    spins++;
    m3 = 0;
  } else {
    m3++;
    q--;
    spins++;
  }
  return spins;
}

console.log(slots(48, 3, 10, 4));
