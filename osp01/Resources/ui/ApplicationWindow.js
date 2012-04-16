// application main window class
function ApplicationWindow() {
	
	var BookListView = require("ui/BookListView");
	
	// create window
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	// create book list view 
	var bookListView = new BookListView();
	self.add(bookListView);
	
	
	return self;
}

// export
module.exports = ApplicationWindow;