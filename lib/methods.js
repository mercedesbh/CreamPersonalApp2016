Meteor.methods({
	
	insertProfiles: function(profile) {
		setting.userId = this.userId;
	//Profiles.remove(userId:this.userId)
	Profiles.insert(profile)
	},

	insertMyprofile: function(myprofile) {
	Myprofile.insert(myprofile)
	},

})