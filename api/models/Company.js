/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var ContactDetails = require('./ContactDetails');
module.exports = _.merge({}, ContactDetails, {

  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	}
  }
});

