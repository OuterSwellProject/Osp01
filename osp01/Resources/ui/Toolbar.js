
function Toolbar() {
	
	
	// toolbar
	var b1 = Ti.UI.createButton({
		backgroundImage:'./image/phone_camera.png',
		height:28,
		width:31
	});


	var flexSpace = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'aaaa',
		height:'auto',
		width:'auto'
	});
	
	var label2 = Ti.UI.createLabel({
		color:'#000000',
		text:'bbbb',
		height:'auto',
		width:'auto'
	});
	
	var self = Ti.UI.iOS.createToolbar({
		items:[b1,label,label2],
		bottom:'base',
		borderTop:true,
		borderBottom:true,
		barColor:'#336699'
	});
		
	return self;
}


// export
module.exports = Toolbar;
