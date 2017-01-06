(function () {
  'use strict';

	var app = angular.module('MemeGenerator');
	app.controller('MainController', function($scope) {

		$scope.activeTab = 0;

		$scope.wow_memes = app.wow_memes;
		$scope.got_memes = app.got_memes;
		$scope.memes = app.memes;

    $scope.current_wow_meme = $scope.wow_memes[0];
    $scope.current_got_meme = $scope.got_memes[0];
    $scope.current_meme = $scope.memes[0];

		$scope.selectedMeme = $scope.wow_memes[0].url;

		$scope.disabled = undefined;
		$scope.language = {};
		$scope.language.selected = '';
		$scope.language_list = $scope.memes;

		$scope.alterMeme = function(current_meme) {
			$scope.selectedMeme = current_meme;
			var current_image = document.getElementById("current_image");
      current_image.crossOrigin = "anonymous";
			current_image.src = $scope.selectedMeme;
			current_image.onload = function() { $scope.addText(); };
		};
		$scope.alterMeme($scope.current_wow_meme.url);

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

				var part1 = text.substr(0, tmp);
				var part2 = text.substr(tmp, text.length);

				ctx.font = "bold " + size + "px Impact";
				ctx.strokeText(part2, x, y+20);
				ctx.fillText(part2, x, y+20);

				text = part1;
		 	}

			//Set the text styles
			ctx.font = "bold " + size + "px Impact";
			ctx.strokeText(text, x, y);
			ctx.fillText(text, x, y);
		};

		$scope.addText();

		$scope.create = function() {
	     var uri = document.getElementById('myCanvas').toDataURL("image/png");
       downloadImage(uri, "AzerothShard_Meme.png");
		}

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

}());
