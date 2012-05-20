// book list view class
function BookListView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	// dao
	var bookDao = require('dao/bookDao');
	// dbから取得
	var data = bookDao.selectBooks();
	// 表示用一覧作成
	var rowData = [];
	for (var i = 0; i < data.length; i++) {
		var row = Ti.UI.createTableViewRow({
			id:data[i].id,
			height:100
		});
		
		row.add(Ti.UI.createLabel({text:data[i].title, left:100, top:0}));
		row.add(Ti.UI.createLabel({text:data[i].departure + ' 〜 ' + data[i].comeback, left:100, top:50}));
		
		// thumbnail
    	var thumbnail = Ti.UI.createView({
        	backgroundImage:'image/user.png', // TODO サンプル
        	top:10,
        	left:10,
        	width:80,
        	height:80
    	});
    	thumbnail.rowNum = i;
    	row.add(thumbnail);
		
		rowData.push(row);
	}
	// テーブルビュー作成
	var table = Ti.UI.createTableView({
		data : rowData,
		rowHeight : 80
	});
	
	// テーブルビュー選択時のイベント定義
	table.addEventListener('click', function(e){
		self.fireEvent('tableSelected',{bookId:e.row.id});
	});
	
	self.add(table);
	
	self.show();
	
	return self;
}

// export
module.exports = BookListView;
