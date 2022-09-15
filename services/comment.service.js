import Datastore from "nedb";

const comments = new Datastore({ filename: "./data/comments.json" });
comments.loadDatabase((err) => console.log(err));

export function allComments(callback) {
  comments.find({}, (err, comment) => {
    callback(comment);
  });
}

export function createComment(name, surname, message) {
  const doc = {
    name,
    surname,
    message
  };
  if (!name.trim() && !surname.trim() && !message.trim()) {
    return;
  } else {
    comments.insert(doc, (err, newDoc) => {
      console.log(err);
    });
  }
}

export function deleteComment(id) {
  comments.remove({ _id: id });
}
