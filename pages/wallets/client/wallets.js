Template.wallets.helpers({
	wallets: function() {
		return Budget.find();
	},
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

Template.wallet.helpers({
	wallet: function(){return Transaction.find();}
});

Template.wallet.events({
	"click .js-addTransaction": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		const item = $(".js-item").val();
		const totalcost = $(".js-totalcost").val();
		const paymenttype = $(".js-paymenttype").val();
		const datebought = $(".js-datebought").val();
		const wallet =
		{item, totalcost, paymenttype, datebought}
		console.dir(wallet);
		Meteor.call("insertTransaction", wallet);
	},
})

Template.wallets.events({
	"click .js-delete-wallet": function(event){
		console.log("clicked on the x");
		console.dir(this);
		Budget.remove(this.wallet._id);
	},
})
