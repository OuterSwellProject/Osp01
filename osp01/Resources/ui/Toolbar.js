
function Toolbar() {
	
	
	// 追加ボタン
	var addButton = Ti.UI.createButton({
		//backgroundImage:'./image/phone_camera.png',
		title:'＋',
		height:28,
		width:31
	});
	



	// var flexSpace = Ti.UI.createButton({
		// systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	// });
	
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
	
	// ツールバー本体
	// TODO iOS系のメソッド使っているので、Androidが対応するのか調査必要
	var self = Ti.UI.iOS.createToolbar({
		items:[addButton,label,label2],
		bottom:'base',
		borderTop:true,
		borderBottom:true,
		barColor:'#336699'
	});
	
		// 追加ボタンイベント
	addButton.addEventListener('click',function(e){
		// ボタン押下を通知
		self.fireEvent('bookAdding');
	});
		
	return self;
}


// export
module.exports = Toolbar;
