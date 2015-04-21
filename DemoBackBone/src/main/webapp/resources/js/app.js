var protocol = location.protocol;
var hostname = location.hostname;
var port = location.port || 80;
var url_prefix = protocol + "//" + hostname + (port == 80 ? "" : ":" + port);
var appContext = url_prefix + '/DemoBackBone/spring';

var demoBB = {
		View : {},
		Model : {},
		Collection : {},
		view : {},
		model : {},
		collection : {},
		loadTemplates:function(views, callback){
			var deferreds = [];
			_.each(views, function(view){
				if(demoBB.View[view]){
					var viewLink = appContext + '/resources/template/' + view + 'View.html';
					deferreds.push($.get(viewLink, function(data){
						demoBB.View[view].prototype.template = _.template(data);
					}, 'html'));
				}else{
					alert(view + ' not found!');
				}
			});
			$.when.apply(null, deferreds).done(callback);
		}
};

Backbone.View.prototype.close = function(){
	
}

demoBB.Router = Backbone.Router.extend({
	routes:{
		'home': 'home',
		'add' : 'addEmployee',
		'edit/:id' : 'editEmployee'
	},
	home : function(){
		console.log('router home');
		if(!demoBB.view.employeeList){
			demoBB.view.employeeList = new demoBB.View.EmployeeList();			
		}
		demoBB.view.employeeList.collection.fetch();
	},
	addEmployee : function(){
		console.log('router add');
		//if(!demoBB.view.employeeAdd){
			demoBB.view.employeeAdd = new demoBB.View.EmployeeAdd();			
		//}
		demoBB.view.employeeAdd.render();
	},
	editEmployee : function(id){
		console.log('router edit: '+ id);
		//if(!demoBB.view.employeeEdit){
			demoBB.view.employeeAdd = new demoBB.View.EmployeeEdit();			
		//}
		demoBB.view.employeeAdd.fetchData(id);
	}	
});