// ブック詳細ウィンドウ
function BookDetailWindow(windowTitle) {
	
	var BookDetailView = require("ui/bookDetail/view");
	
	// ウィンドウ生成
	var self = Ti.UI.createWindow({
		title:windowTitle,
		backgroundColor:'#ffffff'
	});
	
	// ブック詳細ビュー追加 
	var bookDetailView = new BookDetailView();
	self.add(bookDetailView);
	
	return self;
}

// export
module.exports = BookDetailWindow;