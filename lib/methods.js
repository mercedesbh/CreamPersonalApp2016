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

	sayhilib: function() {
		console.log("hi!");
	},

	//removeBudgets: function() {
		//if (Meteor.user().emails[0].address=="mercedes@brandeis.edu")
			//Budget.remove({}):
	//},
})