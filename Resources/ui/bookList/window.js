// ブック一覧ウィンドウ
function BookListWindow(windowTitle) {
	
	var BookListView = require("ui/bookList/view");
	var BookListToolbar = require("ui/bookList/toolbar");
	
	// ウィンドウ生成
	var self = Ti.UI.createWindow({
		title:windowTitle,
		backgroundColor:'#ffffff'
	});
	
	// ブック一覧ビュー生成 
	var bookListView = new BookListView();
	self.add(bookListView);
	
	// 一覧選択時イベント
	bookListView.addEventListener('tableSelected', function(e) {
		// ブック詳細画面の画面更新イベントを発火
		Ti.App.fireEvent('bookDetail:display',{bookId:e.bookId});
		self.close();
		// ウィンドウ切り替え
		Ti.App.fireEvent('window:change',{titleid:'bookDetail'});
	});
	
	// ツールバー生成
	var toolbar = new BookListToolbar();
	self.add(toolbar);
	
	toolbar.addEventListener('bookAdding', function(e) {
		Ti.App.fireEvent('bookAdd:display');
		self.close();		
		// ブック詳細ウィンドウを開く
		Ti.App.fireEvent('window:change',{titleid:'bookAdd'});
	});	
	
	return self;
}

// export
module.exports = BookListWindow;