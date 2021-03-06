var $HOME = process.env.HOME,
    util = require('util'),
    os = require('os'),
    path = require('path');

/**
 * Proxy
 */
exports.proxyUerPath = $HOME + "/.local/share/webde/proxy";
exports.proxyLocalPath = "/usr/local/share/webde/proxy";

/*
 * Config Path
 * TODO: need modify
 * */
var BASEPATH = path.join($HOME, ".custard");
exports.BASEPATH = BASEPATH;

var BACKUPFOLDERPATH = path.join($HOME, '.custardBac');
exports.BACKUPFOLDERPATH = BACKUPFOLDERPATH;

var BACKUPEDITIONPATH = path.join(BACKUPFOLDERPATH, 'edition');
exports.BACKUPEDITIONPATH = BACKUPEDITIONPATH;

var BACKUPEXTRACTPATH = path.join(BACKUPFOLDERPATH, 'extract');
exports.BACKUPEXTRACTPATH = BACKUPEXTRACTPATH;

var RESOURCEPATH = path.join(BASEPATH, "resource");
exports.RESOURCEPATH = RESOURCEPATH;

var USERCONFIGPATH = path.join(BASEPATH, "config");
exports.USERCONFIGPATH = USERCONFIGPATH;

var TMPPATH = path.join(BASEPATH, "tmp");
exports.TMPPATH = TMPPATH;

var DATABASENAME = "rio.sqlite3";
var DATABASEPATH = path.join(USERCONFIGPATH, DATABASENAME);
exports.DATABASEPATH = DATABASEPATH;

var DOWNLOADPATH = path.join(BASEPATH, '.download');
exports.DOWNLOADPATH = DOWNLOADPATH;

var UNIQUEID_JS = "uniqueID.js";
exports.UNIQUEID_JS = UNIQUEID_JS;

var NETLINKSTATUSPATH;
exports.NETLINKSTATUSPATH = NETLINKSTATUSPATH;

/**
 * APP Path
 * Default APP Base path is repo/app dir，we use __dirname to locate it
 * TODO: need modify
 */
var APPBASEPATH;
APPBASEPATH = path.join(__dirname, "../../../app");
exports.APPBASEPATH = APPBASEPATH;
var APP_DATA_PATH = [
  path.join($HOME, '.local/share/webde'),
  path.resolve(__dirname, '../../../service/appmgr/implements/default')
];
exports.APP_DATA_PATH = APP_DATA_PATH;
exports.D_APP_ICON = __dirname + '/app/default/favicon.ico';

/**
 * Desktop configure file path before login
 * TODO: need modify
 */
exports.BEFORELOGIN = __dirname + '/desktop/Default.conf';

/**
 * path of language file
 * TODO: need modify
 */
exports.LANG = [
  path.join($HOME, '.local/share/webde/langs'),
  path.resolve(__dirname ,  '../../../service/lang/implements/langs')
];

/**
 * path of system properties file
 * TODO: need modify
 */
exports.SYSTEM_PORPERTY_PATH = [
  path.join($HOME, '.local/share/webde/systemproperty'),
  path.resolve(__dirname ,  '../../../service/sysproperty/implements/systemproperty')
];

/**
 * Project Path
 * Default Project Base path is /repo dir，we use __dirname to locate it
 * TODO: need modify
 */
var PROJECTPATH;
PROJECTPATH = path.join(__dirname,"../../../..");
exports.PROJECTPATH = PROJECTPATH;

/**
 * Database Path
 * TODO: need modify
 *
 */
var DATABASEPATH;
exports.DATABASEPATH = DATABASEPATH;

//levelgraph database info
var DATABASENAME = "custard_rdf";
var LEVELDBPATH = path.join(USERCONFIGPATH, DATABASENAME);
exports.LEVELDBPATH = LEVELDBPATH;

//data type definition position
var DATAJSDIR = path.join(USERCONFIGPATH, '/custard_type');
exports.DATAJSDIR = DATAJSDIR;

//data type definition position
var TYPEFILEDIR = path.join(USERCONFIGPATH, '/custard_type/typeDefine');
exports.TYPEFILEDIR = TYPEFILEDIR;

//data/default/typeDefine.conf
var TYPECONFPATH = path.join(USERCONFIGPATH, '/custard_type/typeDefine.conf');
exports.TYPECONFPATH = TYPECONFPATH;

/*
 * Debug Config
 * TODO: need modify
 * */
var RIODEBUG=1;
var DBDEBUG=1;

/*
 * Server network config
 * TODO: need modify
 * */
var SERVERPORT=8888;
exports.SERVERPORT = SERVERPORT;
var MSGPORT=8892;
exports.MSGPORT = MSGPORT;
var FILEPORT=8080;
exports.FILEPORT=FILEPORT;
var MDNSPORT=8889;
exports.MDNSPORT = MDNSPORT;
//SERVERIP has been decpreted, you should use config.getIPAddress();
var SERVERIP=getIPAddress();
exports.SERVERIP = SERVERIP;
var SERVERNAME;
exports.SERVERNAME = SERVERNAME;
var WEBSOCKETPATH="/ws";
exports.WEBSOCKETPATH = WEBSOCKETPATH;

/*
 * Secure config. The key and cert path should be set later.
 * TODO: need modify
 * */
var ISSECURE=false;
exports.ISSECURE = ISSECURE;
var KEYPATH=path.join(USERCONFIGPATH, "httpserver/key.pem");
exports.KEYPATH = KEYPATH;
var CERTPATH=path.join(USERCONFIGPATH, "httpserver/cert.pem");
exports.CERTPATH = CERTPATH;

/*
 * account
 * */
var ACCOUNT;
exports.ACCOUNT = ACCOUNT;
var EMAIL="cos_ibp@iscas.ac.cn";
exports.EMAIL = EMAIL;

/*
 * Network API
 *   获取本地IP地址（仅针对IPv4）
 * */
function getIPAddress(){
  var ifaces = os.networkInterfaces();
  var IPv4=null;
  var IPifname=null;

  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      if (null!==IPv4){return};
      if ('IPv4' !== iface.family || iface.internal !== false) {
        return;
      }
      IPv4=iface.address;
    });
  });

  return IPv4;
}
exports.getIPAddress = getIPAddress;


/*
 * Log functions
 * */
function riolog(str){
  if(RIODEBUG==1){
    util.log(str);
  } 
}
exports.riolog = riolog;

function dblog(str){
  if(DBDEBUG==1){
    util.log(str);
  } 
}
exports.dblog = dblog;

var uniqueID;
exports.uniqueID = uniqueID;
