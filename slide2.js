var slideShow = {
	photoList: ["photo1", "photo2","photo3"],
	currentPhotoIndex: 0, 
	nextPhoto: function() {
		if (this.currentPhotoIndex < 2) {
			this.currentPhotoIndex++;
			return this.photoList[this.currentPhotoIndex];
			} else {
				console.log("The End of the Slideshow.");
		}
	},
	prevPhoto: function() {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex--;
			return this.photoList[this.currentPhotoIndex];
			} else {
				console.log("This is the Beginning of the Slideshow.");
		}
	},
	getCurrentPhoto: function() {
		return this.photoList[this.currentPhotoIndex];
	},
}

//console.log(slideShow.getCurrentPhoto());
console.log(slideShow.nextPhoto());
console.log(slideShow.nextPhoto());
console.log(slideShow.nextPhoto());
//console.log(slideShow.photoList[0]);
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());