const users = [];

// adduser, removeUser, getUser, getUserINRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  // check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1);
  }
};

addUser({
  id: 22,
  username: "hamid  ",
  room: "  South california",
});

addUser({
  id: 2,
  username: "Andrew  ",
  room: "  South Philly",
});

addUser({
  id: 5,
  username: "souad  ",
  room: "  South virginia",
});

console.log(users);

const remove = removeUser(2);

console.log(remove);
console.log(users);
