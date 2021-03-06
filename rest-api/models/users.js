var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
{
  id: 1,
  name: 'Taka',
  email: 'taka@taka.com'
},
{
  id: 2,
  name: 'Nayo',
  email: 'nayo@nayo.com'
},
{
  id: 3,
  name: 'Amrit',
  email: 'amrit@amrit.com'
}
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  // return users.id;
  for(var i=0; i<users.length; i++){
    if(users[i].id===id){
      return users[i];
    }
    else{
      return "Sorry, there is no user of this id, try again!"
    }
  }
};

exports.addOne = function (user) {
  users.push(user);
  user.id=getNextId();
  
};

exports.updateOne = function (id, newProperties) {
  for(var i=0; i<users.length; i++){
    if(users[i].id===id){
      users[i].newProperties=newProperties;
    }
  }
};

exports.deleteOne = function (id) {
  // var results=users.reduce(function(acc, ele){
  //   return ele.id !===id;
  // })
  for(var i=0; i<users.length; i++){
    if(users[i].id===id){
     var newUsers = users.slice(users[i]);
     return newUsers;
    }
    
  }
};
