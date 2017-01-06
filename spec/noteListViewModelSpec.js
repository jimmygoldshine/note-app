function viewEmptyNoteList() {

  var noteList = new NoteList();
  var listView = new NoteListView(noteList);

  assert.isTrue(listView.hasOwnProperty('noteList'));
}

function viewSingularNoteList(){

  var noteList = new NoteList();
  noteList.addNote("This is a fine note!");
  var listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li><a href='#notes/0'>This is a fine note!</a></li></div></ul>");
}

function viewMultipleNoteList(){

  var noteList = new NoteList();
  noteList.addNote("This is one fine note!");
  noteList.addNote("This is another fine note!");
  var listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li><a href='#notes/0'>This is one fine not</a></li></div><div><li><a href='#notes/1'>This is another fine</a></li></div></ul>");
}

function twentyCharStrings(){

  var noteList = new NoteList();
  noteList.addNote("Something with more than twenty characters");
  var listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li><a href='#notes/0'>Something with more </a></li></div></ul>")
}


function linkNoteToURL(){

  var noteList = new NoteList();
  noteList.addNote("New Note")
  var listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li><a href='#notes/0'>New Note</a></li></div></ul>")
}

viewEmptyNoteList();
viewSingularNoteList();
viewMultipleNoteList();
twentyCharStrings();
linkNoteToURL();
