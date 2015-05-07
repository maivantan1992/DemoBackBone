demoBB.View.EmployeeAdd = Backbone.View.extend({
	el : '#view',
	events : {
		'click #clear' : 'clear',
		'click #saveAdd' : 'addEmployee',
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
	clear : function(){
		console.log('clear add');
		this.$el.find('#name').val('').focus();
		this.$el.find('#email').val('');
	},
	backToList : function(){
		demoBB.router.navigate('home', true);
	},	
	addEmployee : function(){
		console.log('add save');
		var self = this;
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
		    	self.clear();
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


