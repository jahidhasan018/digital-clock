function multiplicationTable(num) {
  if (Number.isInteger(num)) {
    for (let i = 1; i <= num; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log(`Argument should be integer. You provided: ${typeof num}`);
  }
}

multiplicationTable(15);
