/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var ContactDetails = require('./ContactDetails');
var BaseUser = require('./BaseUser');
module.exports = _.merge({}, BaseUser, ContactDetails, {

  attributes: {
  	firstName: {
  		type: 'string'
  	},
  	lastName: {
  		type: 'string'
  	},
  	lastLogin: {
  		type: 'datetime'
  	}
  }
});

