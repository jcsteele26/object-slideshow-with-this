var slideShow = {
	photoList: ["photo1", "photo2","photo3", "photo4"],
	currentPhotoIndex: 0, 

	//function to show next photo
	nextPhoto: function() {
		if (this.currentPhotoIndex < 3) {
			this.currentPhotoIndex++;
			console.log(this.photoList[this.currentPhotoIndex]);
			} else {
				console.log("The End of the Slideshow.");
				   this.pause();
		}
	},

	//function to show previous photo
	prevPhoto: function() {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex--;
			console.log(this.photoList[this.currentPhotoIndex]);
			} else {
				console.log("This is the Beginning of the Slideshow.");
		}
	},

	//function to show current photo
	getCurrentPhoto: function() {
		return this.photoList[this.currentPhotoIndex];
	},

	playInterval: 0,  //create empty property playInterval

	//play function to move to next photo
	play: function() {
		var current = this;
		this.playInterval = setInterval(function(){current.nextPhoto()},3000)
	},

	//pause function to stop the slideshow
	pause: function() {
		clearInterval(this.playInterval);
	}
}
console.log(slideShow.play());
//console.log(slideShow.getCurrentPhoto());
//console.log(slideShow.nextPhoto());
//console.log(slideShow.nextPhoto());
//console.log(slideShow.nextPhoto());
//console.log(slideShow.nextPhoto());
//console.log(slideShow.prevPhoto());
//console.log(slideShow.prevPhoto());
//console.log(slideShow.prevPhoto());