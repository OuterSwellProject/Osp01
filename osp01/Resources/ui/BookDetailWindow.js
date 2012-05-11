// ブック詳細ウィンドウ
function BookDetailWindow(windowTitle) {
	
	var BookView = require("ui/BookView");
	
	// ウィンドウ生成
	var self = Ti.UI.createWindow({
		title:windowTitle,
		backgroundColor:'#ffffff'
	});
	
	// ブック詳細ビュー追加 
	var bookView = new BookView();
	self.add(bookView);
	
	bookView.addEventListener('click', function(e) {
		// ブック一覧ウィンドウを開く
		Globals.tabs.fireEvent('change',{titleid:'bookList'});
	});	
	
	return self;
}

// export
module.exports = BookDetailWindow;