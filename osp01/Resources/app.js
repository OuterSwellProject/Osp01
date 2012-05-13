(function() {
	
	// ウィンドウ
 	var BookListWindow = require('ui/bookList/window');
 	var BookDetailWindow = require('ui/bookDetail/window');
 	
 	var AppTabGroup = require('ui/AppTabGroup');
 	// ウィンドウ一覧をあらかじめ設定（最初に定義するウィンドウが最初に表示される画面となる）
	var tabs = new AppTabGroup({
		titleid:'bookList',
		window: new BookListWindow('ブック一覧')
	},{
		titleid:'bookDetail',
		window: new BookDetailWindow('ブック詳細')	
	});
	
	tabs.open();
})();