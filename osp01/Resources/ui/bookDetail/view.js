// book detail view class
function BookDetailView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	var bookTitle = Ti.UI.createLabel({
		text:'追加',
		top:10,
		height:30
	});
	
	var bookPeriod = Ti.UI.createLabel({
		text:'',
		top:30,
		height:30,
		left:60
	});
	
	self.add(bookTitle);
	self.add(bookPeriod);
	
	// 画面更新のイベント定義
	Ti.App.addEventListener('bookDetail:display',function(e){
		var book = getBookData(e.bookId);
		bookTitle.text = book.title;
		bookPeriod.text = book.departure + ' 〜 ' + book.comeback;
	});
		
	self.show();
	
	return self;
}

// export
module.exports = BookDetailView;


function getBookData(bookId) {
	// dao
	var bookDao = require('dao/BookDao');
	// dbから取得
	return bookDao.selectBook(bookId);
}
