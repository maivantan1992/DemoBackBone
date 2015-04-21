demoBB.View.EmployeeAdd = Backbone.View.extend({
	el : '#view',
	events : {
		'click #clear' : 'clear',
		'click #save' : 'addEmployee',
		'click #backToList' : 'backToList',	
		'keydown' : 'onKeypress'
	},
	initialize : function(){
		console.log('add init');
	},
	render: function(){
		console.log('add render');
		this.$el.html(this.template({}));
		return this;
	},
	close : function(){
		console.log('close');
		//this.undelegateEvents();
		//this.remove();		
		//this.unbind();
		//this.stopListening();
	},
	clear : function(){
		console.log('clear add');
		this.$el.find('#name').val('');
		this.$el.find('#email').val('');
	},
	backToList : function(){
		this.close();
		demoBB.router.navigate('home', true);
	},	
	addEmployee : function(){
		console.log('add save');
		var name = this.$el.find('#name');
		var email = this.$el.find('#email');
		var status = this.$el.find('#status');
		var newEmployee = new demoBB.Model.Employee({
			name : name.val(),
			email : email.val()
		});
		newEmployee.save(null, {
		    success: function (model, response) {
		    	status.text("Add success!");
		    	name.val('');
		    	email.val('');
		    	name.focus();
		    },
		    error: function (model, response) {
		        status.text("Error!");
		    }
		});
	},
	onKeypress : function(e){
		if(e.keyCode == 13){
			this.addEmployee();
		}
	},
});