Router.configure ({
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'home'});
Router.route('comments');
Router.route('about');
Router.route('wallets');
Router.route('debt');
Router.route('save');
Router.route('settings');
Router.route('speech');

Router.route('/wallet/:_id',
 	{name:"wallet",
 	data: function(){
 		const c = Budget.findOne({_id:this.params._id});
 		console.dir(c);
 		return c
 		}
 	}
),

Router.route('/debts/:_id',
 	{name:"debts",
 	data: function(){
 		const c = Debt.findOne({_id:this.params._id});
 		console.dir(c);
 		return c
 		}
 	}
);
