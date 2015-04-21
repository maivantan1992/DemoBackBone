demoBB.Collection.Employee = Backbone.Collection.extend({
	model: demoBB.Model.Employee,
	url: appContext +"/employee"
});