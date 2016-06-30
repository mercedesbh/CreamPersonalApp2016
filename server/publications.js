Meteor.publish("theBudget",
	function(){return Budget.find();})

Meteor.publish("theComments",
	function(){return Comments.find();})

Meteor.publish("theDebt`",
	function(){return Debt.find();})

Meteor.publish("theSave",
	function(){return Save.find();})

Meteor.publish("theSettings",
	function() {
		if (! this.userId) {
			return Meteor.ready()
		} else {
		return Settings.find({userId:this.userId});
		}
});

Meteor.publish("userData", function () {
   if (this.userId) { // only if you log in can you see it
  	  //return Meteor.users.find({}); // everyone sees everything!
                               //{fields: {'profile': 1, 'things': 1}});
      return Meteor.users.find({_id: this.userId},
                               {fields:{profile:1,
                                        "services.google.email":1}});
    } else {
      this.ready();
    }
  });