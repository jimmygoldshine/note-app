function noteModelSpec(){
  note = new Note("Hello!");

  assert.isTrue(note.text === "Hello!");

  assert.isTrue(note.view() === "Hello!");
}

noteModelSpec();
