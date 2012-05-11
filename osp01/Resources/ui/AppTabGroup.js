// アプリ内TabGroupクラス
function AppTabGroup() {

	var self = Ti.UI.createTabGroup();

	//　引数のリストからTabGroupを生成
	for (var i = 0, l = arguments.length; i < l; i++) {
		
		// タブのデータ取り出し
		var tabData = arguments[i];
		// ウィンドウのタブバーを非表示
		tabData.window.hideTabBar();
		
		var tab = Ti.UI.createTab(tabData);
		//　一番最初の画面を表示
		if (i === 0) {
			self.setActiveTab(tab);
		}
		self.addTab(tab);
	}

	//　タブ切り替えのイベント追加
	self.addEventListener('change', function(e) {
		var tabs = self.getTabs();
		for (var i = 0; i < tabs.length;i++) {
			// 指定titleidで検索する
			if(e.titleid == tabs[i].titleid) {
				self.setActiveTab(tabs[i]);
			}
		}
	});
	
	return self;
}

// export
module.exports = AppTabGroup;