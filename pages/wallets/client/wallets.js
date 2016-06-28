Template.wallets.helpers({
	wallets: function() {
		return Budget.find();
	}
})

Template.wallets.events({
	"click .js-addWallet": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		const name = $(".js-name").val();
		const weekly = $(".js-weekly").val();
		const biweekly = $(".js-biweekly").val();
		const monthly = $(".js-monthly").val();
		const budget = $(".js-budget").val();
		const wallets = 
		{name:name, budgetspan:[weekly,biweekly,monthly], budget:budget}
		console.dir(wallets);
		//Budget.insert(wallets)
		Meteor.call("insertBudget", wallets);
	},

})