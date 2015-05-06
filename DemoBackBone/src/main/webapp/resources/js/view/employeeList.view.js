demoBB.View.EmployeeList = Backbone.View.extend({
	el : '#view',
	events : {
		'click #add' : 'addEmployee',
		'click .edit' : 'editEmployee',
		'click .delete' : 'deleteEmployee'
	},
	initialize : function(){
		console.log('list init');
		this.collection = new demoBB.Collection.Employee();
		this.collection.on('sync remove', this.render, this);
	},
	render : function(){
		console.log('list render');
		this.$el.html(this.template({employees : this.collection.toJSON()}));
		return this;
	},
	close : function(){
		console.log('list close');
		//this.remove();	
	},
	addEmployee: function(){
		this.close();
		demoBB.router.navigate('add', true);
	},
	editEmployee: function(e){		
		this.close();
		var employeeId = e.currentTarget.id;
		demoBB.router.navigate('edit/' + employeeId, true);
	},
	deleteEmployee: function(e){
		var employeeId = e.currentTarget.id;
		var employee = this.collection.get(employeeId);
		employee.destroy();
		this.collection.remove(employee);
	}
});