Meteor.publish("theBudget",
	function(){return Budget.find();})

Meteor.publish("theComments",
	function(){
		const commentsdata = Comments.find();
		return commentsdata;
	})

	Meteor.publish("theReviews",
		function(){return Reviews.find();})

Meteor.publish("theSpeech",
	function(){
		const speechdata = Speech.find();
		return speechdata;
	})

Meteor.publish("theDebt",
	function(){
		const debts = Debt.find();
	  console.log(debts.count());
	  return debts;
	})

Meteor.publish("theTransaction",
	function(){return Transaction.find();})

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
