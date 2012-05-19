
// ブック追加ビュー
function BookAddView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	var style = require("ui/bookAdd/style")
	
	var titleLabel = Ti.UI.createLabel(style["titleLabel"]);
	var title = Ti.UI.createTextField(style["title"]);
	var periodLabel = Ti.UI.createLabel(style["periodLabel"]);
	var departure = Ti.UI.createTextField(style["departure"]);
	var tilde = Ti.UI.createLabel(style["tilde"]);
	var comeback = Ti.UI.createTextField(style["comeback"]);
	var addButton = Ti.UI.createButton(style["addButton"]);
		
	self.add(titleLabel);
	self.add(title);
	self.add(periodLabel);
	self.add(departure);
	self.add(tilde);
	self.add(comeback);
	self.add(addButton);

		
	Ti.App.addEventListener('bookAdd:display',function(e) {
		title.value = '';
		departure.value = '';
		comeback.value = '';
	});
	
	// 作成ボタンイベント
	addButton.addEventListener('click',function(e){
		
		// DB追加処理
		addBook(title.value, departure.value, comeback.value);
		
		self.fireEvent('bookAdded');
	});
	
	self.show();
	
	return self;
}

// export
module.exports = BookAddView;

function addBook(title, departure, comeback) {
	
	var msg = "";
	if (!title) {
		msg += 'タイトルを入力してください。\n';
	}
	if (!departure || !comeback) {
		msg += '期間を入力してください。\n';
	}
	
	
	if (msg) {
		// バリデーションメッセージ表示
		var dialog = Ti.UI.createAlertDialog({
			message : msg,
		});	
		dialog.show();	
	}
	
	// dao
	var bookDao = require('dao/BookDao');
	// dbから取得
	
}
