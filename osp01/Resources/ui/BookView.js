// book view class
function BookView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	// dao
	var bookDao = require('dao/BookDao');
	// dbから取得
	var data = bookDao.selectBook(bookId);
	
	// 
	
	self.show();
	
	return self;
}

// export
module.exports = BookView;
