(function(exportSingleNoteView){

  var SingleNoteView = function(note){
    this.noteModel = note;
  };

  SingleNoteView.prototype.convert = function(){
    return "<div>" + this.noteModel.text + "</div>";
  };

  exportSingleNoteView.SingleNoteView = SingleNoteView;

})(this);
