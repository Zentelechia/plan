notes=new Meteor.Collection("notes");
Router.route('/add', function () {
  var req = this.request;
  var res = this.response;
  	console.log(req.body);
    notes.insert({text : "new"});
    res.end('');
}, {where: 'server'});

 