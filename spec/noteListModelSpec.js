function noteListInstatiatedWithArray() {
  list = new NoteList();

  assert.isTrue(Array.isArray(list.noteModels()));
}

function noteListCanAddNotesToArray() {
  list = new NoteList();
  list.addNote("My first note!");

  assert.isTrue(list.noteModels()[0].view() === "My first note!");
}

function noteCounter() {
  list = new NoteList();

  list.generateId();
  assert.isTrue(list.noteCounter === 0);
}

function assignIdToNote() {
  list = new NoteList();
  list.addNote("test");

  assert.isTrue(list.noteModels()[0].id === 0);
}

noteListInstatiatedWithArray();
noteListCanAddNotesToArray();
noteCounter();
assignIdToNote();
