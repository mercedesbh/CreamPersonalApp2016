Meteor.methods({
	
	insertBudget: function(wallet) {
	Budget.insert(wallet)
	},

	insertSave: function(save) {
	Save.insert(save)
	},

	insertDebt: function(debts) {
	Debt.insert(debts)
	},

	insertComment: function(comment_obj) {
	Comments.insert(comment_obj)
	},

	sayhiserver: function() {
		console.log("hi!");
	},

})