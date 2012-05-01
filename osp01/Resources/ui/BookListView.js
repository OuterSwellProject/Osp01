// book list view class
function BookListView() {
	
	var self = Ti.UI.createView();
	self.hide();
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'book list view',
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var bookDao = require('dao/BookDao');
	
	var data = bookDao.selectBooks();

	var rowData = [];
	for (var i = 0; i < data.length; i++) {
		var row = Ti.UI.createTableViewRow();
		
		row.add(Ti.UI.createLabel({text:data[i].title, left:0}));
		row.add(Ti.UI.createLabel({text:data[i].departure, left:100}));
		row.add(Ti.UI.createLabel({text:data[i].comeback, left:200}));
		rowData.push(row);
	}
	
	var table = Ti.UI.createTableView({
		data : rowData,
		rowHeight : 80
	});
	
	self.add(table);
	
	self.show();
	
	return self;
}

// export
module.exports = BookListView;
