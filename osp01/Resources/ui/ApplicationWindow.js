// application main window class
function ApplicationWindow() {
	
	var BookListView = require("ui/BookListView");
	var BookView = require("ui/BookView");
	var Toolbar = require("ui/Toolbar");
	
	// create window
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	// create book list view 
	var bookListView = new BookListView();
	self.add(bookListView);
	
	var toolbar = new Toolbar();
	toolbar.addEventListener('bookAdding', function(e) {
		var bookView = new BookView();
		
	});
	self.add(toolbar);
	
	
	return self;
}

// export
module.exports = ApplicationWindow;