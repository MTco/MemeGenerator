var app = angular.module('Meme', []);
app.controller('MainController', function($scope) {

	$scope.memes = [
		{ name:"10 Guy", url: "http://i.imgur.com/LaENqOV.jpg"},
		{ name:"Player Stats", url: "img/PlayerStats.png"},
		{ name:"Advice Dog", url: "http://i.imgur.com/Qk0VO6D.jpg"},
		{ name:"Advice God", url: "http://i.imgur.com/xH2fSFg.jpg"},
	];

	$scope.selectedMeme = $scope.memes[0];

	$scope.alterMeme = function(val) {
		var current_image = document.getElementById("current_image");
		current_image.src = $scope.selectedMeme.url;
		current_image.onload = function() { $scope.addText(); };
	};

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
