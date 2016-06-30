Meteor.publish("theProfiles",
	function(){return Profiles.find();})

Meteor.publish("theMyprofile",
	function(){return Myprofile.find();})

Meteor.publish("theSettings",
	function(){return Settings.find();})
