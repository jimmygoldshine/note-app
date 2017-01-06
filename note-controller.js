(function(exportNoteController){

  var NoteController = function(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.convertToHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.convert();
  };

  NoteController.prototype.renderSingleNoteHTML = function(){
    window.addEventListener("hashchange", function () {changeSingleNoteHTML(getSingleNoteHTML()); }, false);
  };

  NoteController.prototype.submitEventListener = function (controller){
    var noteForm = document.getElementById("noteForm");
    noteForm.addEventListener("submit", function(event){
      event.preventDefault();
      interceptedNote = (text.value);
      controller.processNote(interceptedNote);
    });
  };

  NoteController.prototype.processNote = function(interceptedNote){
    this.noteList.addNote(interceptedNote);
    this.convertToHTML();
  };

  function findNoteURL(location){
    return location.hash.split("#notes/")[1];
  }

  NoteController.prototype.findNoteURL = function(location){
    return location.hash.split("#notes/")[1];
  };

  function findNoteById(id){
    return controller.noteList.noteModels()[parseInt(id)];
  }

  NoteController.prototype.findNoteById = function(id){
    return this.noteList.noteModels()[parseInt(id)];
  };

  function getSingleNoteHTML(){
    return (new SingleNoteView(findNoteById(findNoteURL(window.location)))).convert();
  }

  NoteController.prototype.getSingleNoteHTML = function(){
    return (new SingleNoteView(findNoteById(findNoteURL(window.location)))).convert();
  };

  function changeSingleNoteHTML(text){
    var element = document.getElementById("app");
    element.innerHTML = controller.noteListView.convert() + text; 
  }

  NoteController.prototype.changeSingleNoteHTML = function(text){
    var element = document.getElementById("app");
    element.innerHTML = text;
  };

  exportNoteController.NoteController = NoteController;
  exportNoteController.findNoteURL = findNoteURL;
  exportNoteController.findNoteById = findNoteById;
  exportNoteController.getSingleNoteHTML = getSingleNoteHTML;
  exportNoteController.changeSingleNoteHTML = changeSingleNoteHTML;


})(this);
