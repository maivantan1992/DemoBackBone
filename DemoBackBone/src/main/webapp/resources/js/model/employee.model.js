demoBB.Model.Employee = Backbone.Model.extend({
	defaults:{
		id : null,
		name : null,
		email : null
	},
	urlRoot: appContext +"/employee"
});