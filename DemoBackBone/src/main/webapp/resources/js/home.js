var listViews = ['EmployeeList', 'EmployeeAdd', 'EmployeeEdit'];
$(window).load(function(){
	demoBB.loadTemplates(listViews, function(){
		demoBB.router = new demoBB.Router();
		Backbone.history.start();
		demoBB.router.navigate('home', true);
	});
});