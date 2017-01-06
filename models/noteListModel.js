(function(exportNoteListModel){

  var NoteList = function() {
    this.list = [];
    this.noteCounter = -1;
  };

  NoteList.prototype.noteModels = function(){
    return this.list;
  };

  NoteList.prototype.addNote = function(text){
    id = this.generateId();
    this.list.push(new Note(text, id));
  };

  NoteList.prototype.generateId = function(){
    this.noteCounter += 1;
    return this.noteCounter;
  };

  exportNoteListModel.NoteList = NoteList;

})(this);
