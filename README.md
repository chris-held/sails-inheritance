# sails-inheritance

a [Sails](http://sailsjs.org) application


Playing with inheritance in sails models. The api/models/base folder contains some base models which are inherited by the Company and User models. You would probably move your base models out of this project and into a node module, but as an example this works fine. The User model in api/models is an example of combining multiple base models together. 