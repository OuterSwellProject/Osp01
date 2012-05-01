
var dbName = 'osp01';
var logger = require('util/log');

// 用意されているDBを使う
Ti.Database.install('osp01.sql', dbName);
// joliを読み込み(アプリケーションで一回だけ読み込まれる)
var joli = require('lib/joli').connect(dbName);

exports.get = function() {
	return joli;
}
