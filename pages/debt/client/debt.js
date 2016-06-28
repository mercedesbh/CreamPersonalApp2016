Template.debt.helpers({
	debts: function() {
		return Debt.find();
	}
})

Template.debt.events({
	"click .js-addRepaymentPlan": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		const personal = $(".js-personal").val();
		const credit = $(".js-credit").val();
		const bank = $(".js-bank").val();
		const petty = $(".js-petty").val();
		const student = $(".js-student").val();
		const other = $(".js-other").val();
		const owed = $(".js-owed").val();
		const weeklydebt = $(".js-weeklydebt").val();
		const biweeklydebt = $(".js-biweeklydebt").val();
		const monthlydebt = $(".js-monthlydebt").val();
		const paymentamount = $(".js-paymentamount").val();
		const debt = 
		{loantype: [personal, credit, bank, petty, student, other], owed:owed, paymentschedule:[weeklydebt,biweeklydebt,monthlydebt], paymentamount:paymentamount}
		console.dir(debt);
		//Debt.insert(debt)
		Meteor.call("insertDebt", debt);
	}
})