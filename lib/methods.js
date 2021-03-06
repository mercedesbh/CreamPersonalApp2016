Meteor.methods({

	insertBudget: function(wallet) {
	Budget.insert(wallet)
	},

	insertTransaction: function(tran) {
	Transaction.insert(tran)
	},

	insertSave: function(save) {
	Save.insert(save)
	},

	insertDebt: function(debts) {
		console.log("inserting")
	Debt.insert(debts)
	},

	insertComment: function(comment_obj) {
	Comments.insert(comment_obj)
	},

	insertSettings: function(setting) {
		setting.userId = this.userId;
	Settings.remove({userId:this.userId})
	Settings.insert(setting)
	},

	insertHome: function(home) {
		home.userId = this.userId;
	Home.remove({userId:this.userId})
	Home.insert(setting)
	},

	insertSpeech: function(talk) {
		Speech.insert(talk)
	},

	sayhiserver: function() {
		console.log("hi!");
	},

})
