var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),
	events: {
		'click .delete': 'deleteBook'
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.updateModel);
	},

	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	},

	deleteBook: function(){
		// delete model
		var that = this;
		this.model.destroy();
		// jQuery.ajax({
		// 	url: '/api/books/'+that.model.get('_id'),
		// 	type: 'DELETE',
		// 	success: function( data, textStatus, jqXHR ) {
		// 	console.log( 'Post response:' );
		// 	console.dir( data );
		// 	console.log( textStatus );
		// 	console.dir( jqXHR );
		// 	}
		// });
		// this.model.destroy({
		// 	wait:true,
		// 	success: function(){
		// 		console.log('supuestamente removed');
		// 	},
		// 	error: function(){
		// 		console.log('error madafaka');
		// 	}
		// });

		// Delete view
		this.remove();
	}
});