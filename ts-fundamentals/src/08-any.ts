(() => {
  let myDynamicVar: any;
  myDynamicVar = 'Hello';
  console.log('myDynamicVar', myDynamicVar);
  myDynamicVar = 100;
  console.log('myDynamicVar', myDynamicVar);
  myDynamicVar = true;
  console.log('myDynamicVar', myDynamicVar);
})();
