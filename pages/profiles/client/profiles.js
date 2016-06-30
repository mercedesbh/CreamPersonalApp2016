Template.profiles.helpers({
	listprofiles: function() {
		const c = Profiles.find().fetch();
		console.dir(c);
		return Profiles.find();
	}
})

Template.profiles.events({

	"click .js-addInfo": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		
		const firstname = $(".js-firstname").val();
		const lastname = $(".js-lastname").val();
		const email = $(".js-email").val();
		const nickname = $(".js-nickname").val();
		const birthyear = $(".js-birthyear").val();
		const profiles = 
		{firstname:firstname, lastname:lastname, email:email, nickname:nickname, birthyear:birthyear}
		//console.dir(profiles);
		Meteor.call("insertProfiles", profiles);
	}, 

})
