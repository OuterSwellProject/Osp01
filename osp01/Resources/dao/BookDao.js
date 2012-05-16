
// DB接続オブジェクト読み込み
var db = require('dao/db');

var logger = require('util/log');

var bookModel = {  
  	table:    'book',
  	columns:  {
    	id:                 'INTEGER',
    	title:				'TEXT',
    	departure:          'DATE',
    	comeback:        	'DATE'
  		}
	}

// PK検索
exports.selectBook = function(bookId) {
	// joli.jsのDBコネクションオブジェクトを取得
	var con = db.get();
	
	var model = new con.model(bookModel);
	
	con.models.initialize(); 
	
	// クエリ作成
	var query = new con.query()
		.select('book.id, book.title, DATE(book.departure) as departure, DATE(book.comeback) as comeback')
		.from('book')
		.where('book.id = ?', bookId);
		
	// 実行
	var results = query.execute();
	
	// 形式変換
	if (results.length <= 0) {
		return null;
	} else {
		return {
			id: results[0].get('id'),
			title: results[0].get('title'),
			departure: results[0].get('departure'),
			comeback: results[0].get('comeback')
		};	
	}

}

// 一覧取得
exports.selectBooks = function() {
	// joli.jsのDBコネクションオブジェクトを取得
	var con = db.get();
	
	var model = new con.model(bookModel);
	
	con.models.initialize(); 
	
// var data = new Array(
    // { title: 'カンボジア旅行', departure: '2012-04-01',comeback:'2012-04-10' },
    // { title: '富士登山', departure: '2012-07-19',comeback:'2012-07-21' },
    // { title: 'キラウエア火山', departure: '2012-08-15',comeback:'2012-08-25' },
    // { title: 'ヨーロッパ周遊', departure: '2012-12-21',comeback:'2013-01-10' }
// );
// 
// for (i=0; i < data.length; i++) {
    // var place = model.newRecord({
					  // title: data[i].title,
					  // departure: data[i].departure,
					  // comeback: data[i].comeback
				      // });
    // place.save();
// }
	
	
	// クエリ作成
	var query = new con.query()
		.select('book.id, book.title, DATE(book.departure) as departure, DATE(book.comeback) as comeback')
		.from('book')
		.order(['book.id asc']);
	
	// 実行
	var results = query.execute();
	
	// 形式変換
	var data = new Array();
	for (i = 0; i < results.length; i++) {
		data.push({
			id: results[i].get('id'),
			title: results[i].get('title'),
			departure: results[i].get('departure'),
			comeback: results[i].get('comeback')
		}); 
    }

	return data;
};
