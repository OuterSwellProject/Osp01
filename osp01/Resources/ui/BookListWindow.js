// ブック一覧ウィンドウ
function BookListWindow(windowTitle) {
	
	var BookListView = require("ui/BookListView");
	var Toolbar = require("ui/Toolbar");
	
	// ウィンドウ生成
	var self = Ti.UI.createWindow({
		title:windowTitle,
		backgroundColor:'#ffffff'
	});
	
	// ブック一覧ビュー生成 
	var bookListView = new BookListView();
	self.add(bookListView);
	
	// ツールバー生成
	var toolbar = new Toolbar();
	self.add(toolbar);
	
	toolbar.addEventListener('bookAdding', function(e) {
		// ブック詳細ウィンドウを開く
		Globals.tabs.fireEvent('change',{titleid:'bookDetail'});
	});	
	
	return self;
}

// export
module.exports = BookListWindow;