 
'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const url = (process.env.DATABASE_URL || '').match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
const DB_name = url ? url[6] : null;
const user = url ? url[2] : null;
const pwd = url ? url[3] : null;
const protocol = url ? url[1] : null;
const dialect = url ? url[1] : 'sqlite';
const port = url ? url[5] : null;
const host = url ? url[4] : null;
const storage = process.env.DATABASE_STORAGE || 'database.sqlite';

const sequelize = new Sequelize(DB_name, user, pwd, { dialect, protocol, port, host, storage, omitNull: true });

const Songs = sequelize.import(path.join(__dirname, 'songs'));
exports.Songs = Songs;

sequelize.sync()
   .then(() => {
       console.log('DB loaded');
   })
;
