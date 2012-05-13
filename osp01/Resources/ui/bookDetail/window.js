// ブック詳細ウィンドウ
function BookDetailWindow(windowTitle) {
	
	var BookView = require("ui/bookDetail/view");
	
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
		Ti.App.fireEvent('window:change',{titleid:'bookList'});
	});	
	
	return self;
}

// export
module.exports = BookDetailWindow;