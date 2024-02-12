enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}
type User = {
  username: string,
  role: Role
}

const myFunc = (a: number, b: number, ...args: number[]) => {
  console.log(a, b, ...args);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const currentUser: User = {
  username: 'John',
  role: Role.USER
};

// export const checkAdminRole = (user: User) => {
//   return user.role === Role.ADMIN;
// }

// const isAdmin = checkAdminRole(currentUser);
// console.log(isAdmin);

export const checkRole = (user: User, ...roles: Role[]) => {
  return roles.includes(user.role);
}

const isUser = checkRole(currentUser, Role.USER);
console.log('isUser', isUser);

const isAdminOrGuest = checkRole(currentUser, Role.ADMIN, Role.GUEST);
console.log('isAdminOrGuest', isAdminOrGuest);
