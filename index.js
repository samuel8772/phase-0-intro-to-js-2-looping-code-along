function writeCards(names, event) {
    let messages = [];
    for (let name of names) {
      messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  