//Template.settings.helpers({
//	setting: function() {
//		const c = Settings.find().fetch();
//		console.dir(c);
//		return Settings.find();
//	}
//})

Template.settings.helpers({
	username: function() {
		return Settings.find().fetch()[0].username;
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