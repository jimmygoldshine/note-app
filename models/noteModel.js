(function(exportNoteModel) {

  var Note = function(text, id){
    this.text = text;
    this.id = id;
  };

  Note.prototype.view = function(){
    return this.text;
  };

  exportNoteModel.Note = Note;

})(this);
