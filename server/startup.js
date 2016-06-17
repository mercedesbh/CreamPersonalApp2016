Meteor.startup(function(){
	Budget.remove({})
	Budget.insert({name:"BofA",transactions:[3], budget:"$1500"})
	Budget.insert({name:"JBSTravel",transactions:[2], budget:"$7"})
	Budget.insert({name:"JBSEat",transactions:[2], budget:"$67"})
	Budget.insert({name:"JBSDownload",transactions:[2], budget:"$7"})
	Budget.insert({name:"JBSPlay",transactions:[2], budget:"$7"})
})