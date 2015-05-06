demoBB.View.EmployeeEdit = Backbone.View.extend({
	el : '#view',
	events : {
		'click #backToList' : 'backToList',
		'click #saveEdit' : 'editEmployee',
		'click #clear' : 'clear',
		'keydown' : 'onKeypress'
	},
	initialize : function(){
		console.log('edit init');
		this.model = new demoBB.Model.Employee();
		this.model.on('sync', this.render, this);
	    this.$el.on('destroyed', this.removeHandler);
	},
	removeHandler : function(){
		console.log('on remove handler');
	},
	fetchData : function(id){
		this.model.set('id', id);
		this.model.fetch();
	},
	render: function(){		
		console.log('edit render');
		this.$el.html(this.template({employee : this.model.toJSON()}));
		return this;
	},
	close : function(){
		console.log('edit close');
		//this.undelegateEvents();
		//this.remove();		
		//this.unbind();
		//this.stopListening();
	},
	backToList : function(){
		this.close();
		demoBB.router.navigate('home', true);
	},
	clear : function(){
		console.log('clear edit');
		this.$el.find('#name').val('');
		this.$el.find('#email').val('');
	},
	editEmployee : function(){
		console.log('edit save');
		var id = this.$el.find('#id').val();
		var name = this.$el.find('#name').val();
		var email = this.$el.find('#email').val();
		var status = this.$el.find('#status');
		var editEmployee = new demoBB.Model.Employee({
			id : id,
			name : name,
			email : email
		});
		editEmployee.save(null, {
		    success: function (model, response) {
		        status.text("Edit success!");
		    },
		    error: function (model, response) {
		        status.text("Error!");
		    }
		});
	},
	onKeypress : function(e){
		if(e.keyCode == 13){
			this.editEmployee();
		}
	},
});