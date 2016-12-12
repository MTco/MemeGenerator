var app = angular.module('Meme', ['ngSanitize', 'ui.select', 'ui.bootstrap']);
app.controller('MainController', function($scope) {

	$scope.activeTab = 0;

	$scope.wow_memes = [
		{ name:"Player Stats", url: "img/memes/WoW/PlayerStats.png"}
	];

	$scope.got_memes = [
		{ name:"Player Stats", url: "img/memes/WoW/PlayerStats.png"}
	];

	$scope.memes = [
		{ name: "10 Guy", url: "img/memes/generic/10 Guy.jpg" },
		{ name: "3rd World Success Kid", url: "img/memes/generic/3rd World Success Kid.jpg" },
		{ name: "90's Problems", url: "img/memes/generic/90's Problems.jpg" },
		{ name: "Aaand It's Gone", url: "img/memes/generic/Aaand It's Gone.jpg" },
		{ name: "Actual Advice Mallard", url: "img/memes/generic/Actual Advice Mallard.jpg" },
		{ name: "Advice Dog", url: "img/memes/generic/Advice Dog.jpg" },
		{ name: "Advice God", url: "img/memes/generic/Advice God.jpg" },
		{ name: "Almost Politically Correct Redneck", url: "img/memes/generic/Almost Politically Correct Redneck.jpg" },
		{ name: "Am I The Only One", url: "img/memes/generic/Am I The Only One.jpg" },
		{ name: "Ancient Aliens", url: "img/memes/generic/Ancient Aliens.jpg" },
		{ name: "Annoyed Picard", url: "img/memes/generic/Annoyed Picard.jpg" },
		{ name: "Annoying Childhood Friend", url: "img/memes/generic/Annoying Childhood Friend.jpg" },
		{ name: "Annoying Facebook Girl", url: "img/memes/generic/Annoying Facebook Girl.jpg" },
		{ name: "Anti-Joke Chicken (Rooster)", url: "img/memes/generic/Anti-Joke Chicken (Rooster).jpg" },
		{ name: "asd.sh", url: "img/memes/asd.sh" },
		{ name: "Awkward Penguin", url: "img/memes/generic/Awkward Penguin.jpg" },
		{ name: "Back In My Day Grandpa", url: "img/memes/generic/Back In My Day Grandpa.jpg" },
		{ name: "Bad Advice Mallard", url: "img/memes/generic/Bad Advice Mallard.jpg" },
		{ name: "Bad Luck Brian", url: "img/memes/generic/Bad Luck Brian.jpg" },
		{ name: "Bear Grylls", url: "img/memes/generic/Bear Grylls.jpg" },
		{ name: "Brace Yourself", url: "img/memes/generic/Brace Yourself.jpg" },
		{ name: "Captain Obvious", url: "img/memes/generic/Captain Obvious.jpg" },
		{ name: "Chemistry Cat", url: "img/memes/generic/Chemistry Cat.jpg" },
		{ name: "College Freshman", url: "img/memes/generic/College Freshman.jpg" },
		{ name: "College Liberal", url: "img/memes/generic/College Liberal.jpg" },
		{ name: "Condescending Wonka", url: "img/memes/generic/Condescending Wonka.jpg" },
		{ name: "Confession Bear", url: "img/memes/generic/Confession Bear.jpg" },
		{ name: "Confession Kid", url: "img/memes/generic/Confession Kid.jpg" },
		{ name: "Confused Gandalf", url: "img/memes/generic/Confused Gandalf.jpg" },
		{ name: "Conspiracy Keanu", url: "img/memes/generic/Conspiracy Keanu.jpg" },
		{ name: "Courage Wolf", url: "img/memes/generic/Courage Wolf.jpg" },
		{ name: "Dating Site Murderer", url: "img/memes/generic/Dating Site Murderer.jpg" },
		{ name: "Depression Dog", url: "img/memes/generic/Depression Dog.jpg" },
		{ name: "Drunk Baby", url: "img/memes/generic/Drunk Baby.jpg" },
		{ name: "English Motherfucker", url: "img/memes/generic/English Motherfucker.jpg" },
		{ name: "Evil Plotting Raccoon", url: "img/memes/generic/Evil Plotting Raccoon.jpg" },
		{ name: "First Day On The Internet Kid", url: "img/memes/generic/First Day On The Internet Kid.jpg" },
		{ name: "First World Cat Problems", url: "img/memes/generic/First World Cat Problems.jpg" },
		{ name: "First World Problem", url: "img/memes/generic/First World Problem.jpg" },
		{ name: "Forever Alone", url: "img/memes/generic/Forever Alone.jpg" },
		{ name: "Forever Resentful Mother", url: "img/memes/generic/Forever Resentful Mother.jpg" },
		{ name: "Foul Bachelorette Frog", url: "img/memes/generic/Foul Bachelorette Frog.jpg" },
		{ name: "Foul Bachelor Frog", url: "img/memes/generic/Foul Bachelor Frog.jpg" },
		{ name: "Friendzone Fiona", url: "img/memes/generic/Friendzone Fiona.jpg" },
		{ name: "Frustrated Farnsworth", url: "img/memes/generic/Frustrated Farnsworth.jpg" },
		{ name: "Fuck Me, Right?", url: "img/memes/generic/Fuck Me, Right?.jpg" },
		{ name: "Gangster Baby", url: "img/memes/generic/Gangster Baby.jpg" },
		{ name: "Good Girl Gina", url: "img/memes/generic/Good Girl Gina.jpg" },
		{ name: "Good Guy Greg", url: "img/memes/generic/Good Guy Greg.jpg" },
		{ name: "Grandma Finds The Internet", url: "img/memes/generic/Grandma Finds The Internet.jpg" },
		{ name: "Grinds My Gears", url: "img/memes/generic/Grinds My Gears.jpg" },
		{ name: "Grumpy Cat (Tard)", url: "img/memes/generic/Grumpy Cat (Tard).jpg" },
		{ name: "High Expectations Asian Father", url: "img/memes/generic/High Expectations Asian Father.jpg" },
		{ name: "Hipster Barista", url: "img/memes/generic/Hipster Barista.jpg" },
		{ name: "Horrifying House Guest", url: "img/memes/generic/Horrifying House Guest.jpg" },
		{ name: "I Dare You Samuel Jackson", url: "img/memes/generic/I Dare You Samuel Jackson.jpg" },
		{ name: "Idiot Nerd Girl", url: "img/memes/generic/Idiot Nerd Girl.jpg" },
		{ name: "Insanity Wolf", url: "img/memes/generic/Insanity Wolf.jpg" },
		{ name: "I Should Buy A Boat", url: "img/memes/generic/I Should Buy A Boat.jpg" },
		{ name: "I Too Like To Live Dangerously", url: "img/memes/generic/I Too Like To Live Dangerously.jpg" },
		{ name: "Joker Mind Loss", url: "img/memes/generic/Joker Mind Loss.jpg" },
		{ name: "Joseph Ducreux", url: "img/memes/generic/Joseph Ducreux.jpg" },
		{ name: "Lame Joke Eel", url: "img/memes/generic/Lame Joke Eel.jpg" },
		{ name: "Lame Pun Raccoon", url: "img/memes/generic/Lame Pun Raccoon.jpg" },
		{ name: "Lazy College Senior", url: "img/memes/generic/Lazy College Senior.jpg" },
		{ name: "Mad Karma", url: "img/memes/generic/Mad Karma.jpg" },
		{ name: "Masturbating Spidey", url: "img/memes/generic/Masturbating Spidey.jpg" },
		{ name: "Matrix Morpheus", url: "img/memes/generic/Matrix Morpheus.jpg" },
		{ name: "Mayonnaise Patrick", url: "img/memes/generic/Mayonnaise Patrick.jpg" },
		{ name: "Musically Oblivious 8th Grader", url: "img/memes/generic/Musically Oblivious 8th Grader.jpg" },
		{ name: "Not Sure Fry", url: "img/memes/generic/Not Sure Fry.jpg" },
		{ name: "Oblivious Suburban Mom", url: "img/memes/generic/Oblivious Suburban Mom.jpg" },
		{ name: "One Does Not Simply", url: "img/memes/generic/One Does Not Simply.jpg" },
		{ name: "Overly Attached Girlfriend", url: "img/memes/generic/Overly Attached Girlfriend.jpg" },
		{ name: "Overly Manly Man", url: "img/memes/generic/Overly Manly Man.jpg" },
		{ name: "Paranoid Parrot", url: "img/memes/generic/Paranoid Parrot.jpg" },
		{ name: "Pedobear", url: "img/memes/generic/Pedobear.jpg" },
		{ name: "Pepperidge Farm Remembers", url: "img/memes/generic/Pepperidge Farm Remembers.jpg" },
		{ name: "Philosoraptor", url: "img/memes/generic/Philosoraptor.jpg" },
		{ name: "Priority Peter", url: "img/memes/generic/Priority Peter.jpg" },
		{ name: "Rasta Science Teacher", url: "img/memes/generic/Rasta Science Teacher.jpg" },
		{ name: "Redditor's Wife", url: "img/memes/generic/Redditor's Wife.jpg" },
		{ name: "Revenge Band Kid", url: "img/memes/generic/Revenge Band Kid.jpg" },
		{ name: "Schrute Facts", url: "img/memes/generic/Schrute Facts.jpg" },
		{ name: "Scumbag Brain", url: "img/memes/generic/Scumbag Brain.jpg" },
		{ name: "Scumbag Stacy", url: "img/memes/generic/Scumbag Stacy.jpg" },
		{ name: "Scumbag Steve", url: "img/memes/generic/Scumbag Steve.jpg" },
		{ name: "Sexually Oblivious Rhino", url: "img/memes/generic/Sexually Oblivious Rhino.jpg" },
		{ name: "Sheltering Suburban Mom", url: "img/memes/generic/Sheltering Suburban Mom.jpg" },
		{ name: "Shut Up And Take My Money", url: "img/memes/generic/Shut Up And Take My Money.jpg" },
		{ name: "Skeptical Third World Kid", url: "img/memes/generic/Skeptical Third World Kid.jpg" },
		{ name: "Smug Spongebob", url: "img/memes/generic/Smug Spongebob.jpg" },
		{ name: "Socially Awesome Penguin", url: "img/memes/generic/Socially Awesome Penguin.jpg" },
		{ name: "Successful Black Man", url: "img/memes/generic/Successful Black Man.jpg" },
		{ name: "Success Kid", url: "img/memes/generic/Success Kid.jpg" },
		{ name: "Sudden Clarity Clarence", url: "img/memes/generic/Sudden Clarity Clarence.jpg" },
		{ name: "Tech Impaired Duck", url: "img/memes/generic/Tech Impaired Duck.jpg" },
		{ name: "The Most Interesting Man In The World", url: "img/memes/generic/The Most Interesting Man In The World.jpg" },
		{ name: "The Rent Is Too High", url: "img/memes/generic/The Rent Is Too High.jpg" },
		{ name: "Tough Spongebob", url: "img/memes/generic/Tough Spongebob.jpg" },
		{ name: "Unhelpful Highschool Teacher", url: "img/memes/generic/Unhelpful Highschool Teacher.jpg" },
		{ name: "Vengeance Dad", url: "img/memes/generic/Vengeance Dad.jpg" },
		{ name: "What Year Is It?", url: "img/memes/generic/What Year Is It?.jpg" },
		{ name: "X, X Everywhere", url: "img/memes/generic/X, X Everywhere.jpg" },
		{ name: "Yeah That'd Be Great", url: "img/memes/generic/Yeah That'd Be Great.jpg" },
		{ name: "Yo Dawg Xzibit", url: "img/memes/generic/Yo Dawg Xzibit.jpg" },
		{ name: "You're Bad And You Should Feel Bad", url: "img/memes/generic/You're Bad And You Should Feel Bad.jpg" },
		{ name: "You're Gonna Have A Bad Tim", url: "img/memes/generic/You're Gonna Have A Bad Tim.jpg" }
	];

	$scope.current_meme = $scope.memes[0];
	$scope.selectedMeme = $scope.memes[0].url;

	$scope.disabled = undefined;
	$scope.language = {};
	$scope.language.selected = '';
	$scope.language_list = $scope.memes;

	$scope.alterMeme = function(current_meme) {
		$scope.selectedMeme = current_meme;
		var current_image = document.getElementById("current_image");
		current_image.src = $scope.selectedMeme;
		current_image.onload = function() { $scope.addText(); };
	};
	$scope.alterMeme($scope.current_meme.url);

	$scope.toptext = '';
	$scope.bottomtext = '';

	/* create canvas */
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d"),
	width = 500,
	height = 500,
	_w = 500, _h = 500;

	ctx.clearRect(0, 0, width, height);
	canvas.width = width;
	canvas.height = height;

	ctx.scale(width/500, height/500);

	canvas.id = 'myCanvas';
	document.getElementsByClassName("canvas")[0].appendChild(canvas);
	/* end create canvas */

	$scope.addText = function() {
		var ctx = document.getElementById("myCanvas").getContext("2d");

		// reset the image
		ctx.drawImage(template, 0, 0, 500, 500);
		ctx.drawImage(document.getElementById("current_image"), 100, 60, 300, 300);

		$scope.drawText(ctx, $scope.toptext, 500/2, 25);
		$scope.drawText(ctx, $scope.bottomtext, 500/2, 500 - 100);
	};

	$scope.drawText = function(ctx, text, x, y) {
		text = text.toUpperCase();
		ctx.fillStyle = "#fff";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.lineWidth = 7;
		ctx.strokeStyle = "#000";

		// calculate size
		var size;
		if (text.length < 24) 		 size = 40;
		else if (text.length < 27) size = 35;
		else if (text.length < 31) size = 30;
		else if (text.length < 41) size = 25;
		else if (text.length <= 50) size = 20;
		else {
			size = 20;

		 	var tmp = text.substr(0,51).lastIndexOf(" ");
			console.log(tmp);

			var part1 = text.substr(0, tmp);
			var part2 = text.substr(tmp, text.length);

			ctx.font = "bold " + size + "px Impact";
			ctx.strokeText(part2, x, y+20);
			ctx.fillText(part2, x, y+20);

			text = part1;
			console.log(part1);
			console.log(part2);
	 	}

		//Set the text styles
		ctx.font = "bold " + size + "px Impact";
		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	};

	$scope.addText();

	$scope.create = function() {
		var uri = document.getElementById('myCanvas').toDataURL();
		downloadImage(uri,generateName());
	}

	function generateName() {
		var n = [];
		for(var i =0; i < 10;i++) {
			n.push((Math.floor(Math.random() *16)).toString(16));
		}
		return n.join('');
	};

	/* Save the img */
	function downloadImage(uri,name) {
		var link = document.createElement('a');
		link.setAttribute("href", uri);
		link.setAttribute('download', name);

		if (document.createEvent) {
			var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			link.dispatchEvent(event);
		}
		else
			link.click();
	};

});
