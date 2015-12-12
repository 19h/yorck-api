'use strict';

const Etcd = require('node-etcd');
const Promise = require('bluebird');

let etcdCluster = [
	 '127.0.0.1:2379', // < offshore       < IS   S
	'r1.apx.pub:2379', // <\               < NL   M
	'r2.apx.pub:2379', // <|apx rN cluster < DE   S
	'r4.apx.pub:2379', // </               < RO 2 S
	    'sly.mn:2379'  // < offshore       < RO 1 S <-> apx1
];

let db = Promise.promisifyAll(new Etcd(etcdCluster));

class DataSource {
	constructor (prefix) {
		this.prefix = prefix;
	}

	put (key, value, opts) {
		value = JSON.stringify(value);

		return db.setAsync(`${this.prefix || ''}\xFF${key}`, value, opts);
	}

	get (key, opts) {
		return db.getAsync(`${this.prefix || ''}\xFF${key}`, opts).then(res => {
			try {
				return JSON.parse(res.node.value);
			} catch(e) {
				return res.node.value;
			}
		});
	}

	del (key, opts) {
		return db.delAsync(`${this.prefix || ''}\xFF${key}`, opts);
	}

	static init (prefix) {
		return new DataSource(prefix);
	}
}

module.exports = DataSource;
