// book view class
function BookView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	var bookTitle = Ti.UI.createLabel({text:'追加'});
	
	self.add(bookTitle);
	
	// 画面更新のイベント定義
	Ti.App.addEventListener('bookDetail:display',function(e){
		var book = getBookData(e.bookId);
		bookTitle.text = book.title;
	});
	
	self.show();
	
	return self;
}

// export
module.exports = BookView;


function getBookData(bookId) {
	// dao
	var bookDao = require('dao/BookDao');
	// dbから取得
	return bookDao.selectBook(bookId);
}
