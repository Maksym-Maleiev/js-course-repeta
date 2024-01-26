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
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'We found name!';
    }
  }

  return 'Not found name!';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Отримуємо імена всіх друзів
 */

const getAllNames = function (allFriends) {
  const allNames = [];

  for (const friend of allFriends) {
    allNames.push(friend.name);
  }

  return allNames;
};

// console.log(getAllNames(friends));

/*
 * Отримуємо імена тільки друзів які онлайн
 */

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const status = { friendsOnline: [], friendsOffline: [] };

  for (const friend of allFriends) {
    if (friend.online) {
      status.friendsOnline.push(friend);
      continue;
    }

    status.friendsOffline.push(friend);

    // ! Bad practice
    // friend.online
    //   ? status.friendsOnline.push(friend)
    //   : status.friendsOffline.push(friend);

    // * Good practice
    // const key = friend.online ? 'friendsOnline' : 'friendsOffline';
    // status[key].push(friend);
  }

  return status;
};

console.log(getFriendsByOnlineStatus(friends));

/*
const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};

const sumKeys = function (keys) {
  keys = Object.keys(x);
  console.log(keys);

  return keys.length;
};

console.log(sumKeys(x));
*/
