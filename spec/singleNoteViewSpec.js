function instatiation(){

  noteModel = new Note();
  noteView = new SingleNoteView(noteModel);

  assert.isTrue(noteView.hasOwnProperty("noteModel"));
}

function returnHTML(){

  noteModel = new Note("Test text");
  noteView = new SingleNoteView(noteModel);


  assert.isTrue(noteView.convert() === "<div>Test text</div>");
}

instatiation();
returnHTML();
