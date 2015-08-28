var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',
	events: {
		'click #add':'addBook'
	},

	initialize: function(){
		this.collection = new app.Library();
		this.collection.fetch({reset: true});
		this.render();

		this.listenTo(this.collection, 'add', this.renderBook);
		this.listenTo(this.collection, 'reset', this.render);
	},

	render: function(){
		this.collection.each(function(item){
			this.renderBook(item);
		}, this);
		console.log(this.collection.toJSON());
	},

	renderBook: function( item ){
		var bookView = new app.BookView({ model:item });
		this.$el.append(bookView.render().el);
	},

	addBook: function(e){
		e.preventDefault();
		var formData = {};
		$('#addBook div').children('input').each(function(i, element){
			console.log(element.id);
			if ($(element).val() != '') {
				if(element.id === 'releaseDate'){
					formData [element.id] = new Date( $(element).val() ).getTime()
				}else {					
					formData[element.id] = $(element).val();
				}
			}
		});

		// this.collection.add( new app.Book( formData ) );
		this.collection.create(new app.Book( formData ));
	}
});