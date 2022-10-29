import Datastore from "nedb";

const users = new Datastore({
  filename: "datastore/users.json",
  autoload: true,
});
users.loadDatabase((err) => console.log(err));

export function findUser(username, callback) {
  users.findOne({ username }, (err, user) => {
    callback(user)
  });
}

export function createUser(name, surname, username, password) {
  if (!name.trim && !surname.trim && !username.trim && !password.trim) {
    const doc = {
      name,
      surname,
      username,
      password,
    };
  }
  else {
    return;
  }
  users.insert(doc, (err, newDoc) => {
    console.log(err);
  });
}
