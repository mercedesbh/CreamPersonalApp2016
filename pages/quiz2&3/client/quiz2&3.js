Template.quiz23.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    sort: "All",
    show: 10,
		team: "none",


  });
  // console.log("creating the template");
  // console.dir(this.state);
});


Template.quiz23.helpers({
	reviews: function(){
    const instance = Template.instance();
    const sort = instance.state.get("sort");
    const show = instance.state.get("show");
    //console.log("sort="+sort);
    let reviews = [];
    switch(sort){

      case "TraWorld":
            reviews =
                Reviews.find({team:"TraWorld"},{limit:show});
            //console.dir(reviews);
            break;

      case "TalkBoard":
            reviews =
                Reviews.find({team:"TalkBoard"},{limit:show});
            break;


      case "ChefsAssistant":
            reviews =
              Reviews.find({team:"ChefsAssistant"},{limit:show});
            break;

			case "Epoch":
			      reviews =
			        Reviews.find({team:"Epoch"},{limit:show});
			      break;

			case "VirtualPet":
						reviews =
							Reviews.find({team:"VirtualPet"},{limit:show});
						break;

			case "PlanDeis":
						reviews =
							Reviews.find({team:"PlanDeis"},{limit:show});
						break;

      default:
            reviews =
              Reviews.find({},{sort:{team:-1}, limit:show});
            break;


       }
		return reviews;
  },


})

Template.quiz23.events({
  "change .js-sort": function(event,instance){
    const sortby = $(".js-sort").val();
    instance.state.set("sort", sortby);
    console.log("sortby="+sortby);
  },
});

Template.reviewForm.events({
	"click .js-submit-feedback": function(event, instance){
 		event.preventDefault();
		const team = $(".js-team").val();
	  const name = $(".js-name").val();
	  const rating = $(".js-rating-review").val();
		const feedback = $(".feedbackBox").val();
	  const review_obj =
	   {team:team, name:name, rating:rating, feedback:feedback};
	    console.dir(review_obj);
	    Reviews.insert(review_obj);
	    // $(".js-name").val("");
			// $(".js-amount").val("");
	    //Router.go('/');
	    console.log("Print if here")
	},
});


Template.reviewTable.events({
	"click .js-delete-comment": function(event){
		console.log("clicked delete button");
		console.dir(this);
		Reviews.remove(this.r._id);
	},
})
