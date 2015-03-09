/**
 * Created by Mark on 08/01/2015.
 */

var config_module = angular.module('app.config', []);
var config_data = {
    'GENERAL_CONFIG': {
       'DOMINO_URL': 'http://192.168.1.30/UCIMobile.nsf', //Domino Server
       'DB_TITLE': 'Demo Mobile Lotus Notes Application',
        'CURRENT_USER':'Shiny Design'
    }
}
angular.forEach(config_data,function(key,value) {
    config_module.constant(value,key);
})