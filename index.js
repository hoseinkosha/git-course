function numbers(number) {
  setInterval(() => {
    number++;
    console.log(number);
  }, 1000);
}

numbers(1);
