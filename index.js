var controller = new NoteController(new NoteList());

controller.convertToHTML();

controller.renderSingleNoteHTML();

controller.submitEventListener(controller);
