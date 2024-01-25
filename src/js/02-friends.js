/*
 * Робота з колекцією (масивом об'єктів)
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);

//   friend.newprop = 555;
// }

// console.table(friends);

/*
 * Шукаємо друга на ім'я
 */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    console.log(friend);

    friendName = Object.values(friend);
    console.log(friendName);
  }
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Отримуємо імена всіх друзів
 */

const getAllNames = function (allFriends) {};

// console.log(getAllNames(friends));

/*
 * Отримуємо імена тільки друзів які онлайн
 */

const getOnlineFriends = function (allFriends) {};

// console.log(getOnlineFriends(friends));
