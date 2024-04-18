fetch('https://opentdb.com/api.php?amount=10&category=11')
  .then(async function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('movie questions \n----------');
    console.log(data);
  });
  fetch('https://opentdb.com/api.php?amount=10&category=22')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('geo questions \n----------');
    console.log(data);
  });
  fetch('https://opentdb.com/api.php?amount=10&category=27')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('animals questions \n----------');
    console.log(data);
  });
  fetch('https://opentdb.com/api.php?amount=10&category=23')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('history questions \n----------');
    console.log(data);
  });
  fetch('https://opentdb.com/api.php?amount=10&category=9')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('general questions \n----------');
    console.log(data);
  });
  fetch('https://opentdb.com/api.php?amount=10&category=17')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('sci and nat questions \n----------');
    console.log(data);
  });