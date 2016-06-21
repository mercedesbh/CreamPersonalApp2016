Template.home.onCreated(function() {
	this.state = new ReactiveDict();
	this.state.setDefault({
		color: "bg-info",
		counter: 0,

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

	"click .js-pusher": function(event,instance){
		const c = instance.state.get("counter");
		instance.state.get("counter", c+1);
	}

});