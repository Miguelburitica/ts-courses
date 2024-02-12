(() => {
  let userId: string | number;
  userId = 'hola';
  userId = 12;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') console.log('Hello', myText.toUpperCase());
    else console.log('Hello', myText.toFixed(2));
  }

  greeting('hola');
  greeting(12);

})();
