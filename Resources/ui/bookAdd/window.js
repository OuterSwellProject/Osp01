// ブック追加ウィンドウ
function BookAddWindow(windowTitle) {
	
	var BookAddView = require("ui/bookAdd/view");
	
	// ウィンドウ生成
	var self = Ti.UI.createWindow({
		title:windowTitle,
		backgroundColor:'#ffffff'
	});
	
	// ブック詳細ビュー追加 
	var bookAddView = new BookAddView();
	self.add(bookAddView);
	
	return self;
}

// export
module.exports = BookAddWindow;