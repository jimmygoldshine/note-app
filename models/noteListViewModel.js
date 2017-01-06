(function(exportNoteListView){

  var NoteListView = function(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.convert = function(){
    var output = this.noteList.noteModels().map(function(note){
      if(note.view().length > 20){
        return "<div><li><a href='#notes/" + note.id + "'>" + note.view().slice(0, 20) + "...</a></li></div>";
      }else{
        return "<div><li><a href='#notes/" + note.id + "'>" + note.view() + "</a></li></div>";
      }
    });
    return "<ul>" + output.join('') + "</ul>";
  };

  exportNoteListView.NoteListView = NoteListView;

})(this);
