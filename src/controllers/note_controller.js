import Note from '../models/note_model';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  console.log('delete');
  return Note.findById(id).remove().exec().then(() => {

  });
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const n = new Note();
  n.title = fields.title;
  n.x = fields.x;
  n.y = fields.y;
  n.zIndex = fields.zIndex;
  n.text = fields.text;
  n.currState = fields.currState;
  n.edit = fields.edit;
  n.textStates = fields.textStates;
  return n.save().then(() => {
    return n;
  });
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
