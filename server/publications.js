Meteor.publish("theBudget",
	function(){return Budget.find();})

Meteor.publish("theComments",
	function(){return Comments.find();})

Meteor.publish("theDebts",
	function(){return Debt.find();})

Meteor.publish("theSave",
	function(){return Save.find();})
