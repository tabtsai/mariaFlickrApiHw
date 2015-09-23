function Photo (photo) {
	this.photo = photo;
}

Photo.prototype.getHTML= function () {
	return '<li class="gallery-item" style="background-image: url('+  this.photo.url_l  +')">' +
				'<h2>' + this.photo.title + '</h2>' +
				'<div class = "wrapper clearfix">' +
				'<div class="photo">' +
					'<a href="' + this.photo.url_l + '">' +
						'<img src="' + this.photo.url_m + '">' + 
					'</a>' +
				'</div>' +
				'<div class = "description"><p>' + 
					this.photo.description._content; +
				'</p>' + 
				'<div class="meta">' +
					'<span>' + this.photo.datetaken + '</span>' +
					'<span>' + 
						'<a class="button" href="http://flickr.com/' + this.photo.pathalias + '">' +
							this.photo.ownername +
						'</a></span>' +
				'</div></div></div>' +
			'</li>';
}
