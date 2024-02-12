(() => {
  type UserId = string | number
  let userId: UserId = 123

  function greeting(userId: UserId) {
    if (typeof userId === 'string') console.log('Hello', userId.toUpperCase())
  }

  greeting(userId)

  // Literal types
  type ShirtSizes = 's' | 'm' | 'l' | 'xl';
  let shirtSize: ShirtSizes;
  shirtSize = 's';
  shirtSize = 'm';
  shirtSize = 'l';
  shirtSize = 'xl';
  // shirtSize = 'asdasdad';
})
