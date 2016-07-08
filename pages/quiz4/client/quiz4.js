Template.quiz4.helpers({
	quiz4: function() {
		return Bios.find();
	},
})

Template.quiz4.events({
	"click .js-updatebio": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		const bioname = $(".js-bioname").val();
		const biopar = $(".js-biopar").val();
		const quiz4 =
		{bioname:bioname, biopar:biopar}
		Meteor.call("insertBios", quiz4);
	},
})
