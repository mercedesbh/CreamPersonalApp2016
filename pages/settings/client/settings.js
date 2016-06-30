Template.settings.helpers({
	setting: function() {
		return Settings.find();
	}
})

Template.settings.events({
	"click .js-addUsername": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		
		const username = $(".js-username").val();
		
		const settings = 
		{username:username}
		console.dir(settings);
		//Settings.insert(settings)
		Meteor.call("insertSettings", settings);
	}, 
})