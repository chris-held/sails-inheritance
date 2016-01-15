/**
* ContactDetails.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
		twitter: {
			type: 'string'
		},
		facebook: {
			type: 'string'
		},
		instagram: {
			type: 'string'
		},
		email: {
			type: 'string',
			email: true
		},
		phone: {
			type: 'string'
		}
  }
};

