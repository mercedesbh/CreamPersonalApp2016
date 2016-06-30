Template.home.onCreated(function() {
	this.state = new ReactiveDict();
	this.state.setDefault({
		color: "bg-info",
	});
});

Template.home.helpers({
	theColor: function() {
		const instance = Template.instance();
		return instance.state.get("color");
		const c = instance.state.get("color");
		return c;
	},
	theCounter: function() {
		const instance = Template .instance();
		return instance.state.get("counter");
	},
})

Template.home.events ({
	"change .js-color": function(event,instance){
		const c = instance.$(".js-color").val();
		instance.state.set("color", c);
		//change the color field of the state object
	},

});

Template.home.events({
	"click .js-addUsername": function(event){
		console.log("hey you clicked the button")
		//Read values of input fields and store in values
		
		const username = $(".js-username").val();
		
		const home = 
		{username:username}
		console.dir(home);
		Meteor.call("insertHome", home);
	}, 
})