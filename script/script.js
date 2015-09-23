function jsonFlickrApi (data) {

var photos = data.photos.photo;
console.log(photos);

for (var i = 0; i < photos.length; i++) {
	var photo = new Photo(photos[i]);

	$('.gallery').append(photo.getHTML());
		console.log(photo.getHTML);
	}
}



// HOMEWORK
//
// 01. Style CSS. Add additional classes if needed.
// This needs look like a designer built it.

// 02. Create a "Photo" class with a "getHTML" method which
// will return a giant string (hint: the one above);
// this class will be a seperate js file in js folder named 'photo.js'
//
// var photo = new Photo({ title: '...' });
// $('.gallery').append(photo.getHTML());
//
// a. Photo constructor will take an object of the photo
//    remember this.student in exercise 8?