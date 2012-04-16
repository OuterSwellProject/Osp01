// book list view class
function BookListView() {
	
	var self = Ti.UI.createView();
	
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
	
	return self;
}

// export
module.exports = BookListView;
