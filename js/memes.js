(function () {
  'use strict';

  var app = angular.module('MemeGenerator', ['ngSanitize', 'ui.select', 'ui.bootstrap']);

  app.wow_memes = [
    { name:"Player Stats", url: "img/memes/WoW/PlayerStats.png"}
  ];

  app.got_memes = [
    { name: "Arya Stark Bow.png", url:"img/memes/got/Arya Stark Bow.png" },
    { name: "Arya Stark.jpg", url:"img/memes/got/Arya Stark.jpg" },
    { name: "Benjen Stark.jpeg", url:"img/memes/got/Benjen Stark.jpeg" },
    { name: "Bran and JohnSnow.jpg", url:"img/memes/got/Bran and JohnSnow.jpg" },
    { name: "Bran vision.jpg", url:"img/memes/got/Bran vision.jpg" },
    { name: "Brienne of Tarth.jpg", url:"img/memes/got/Brienne of Tarth.jpg" },
    { name: "Bronn.jpg", url:"img/memes/got/Bronn.jpg" },
    { name: "Catelyn Stark.jpeg", url:"img/memes/got/Catelyn Stark.jpeg" },
    { name: "Cersei Lannister.png", url:"img/memes/got/Cersei Lannister.png" },
    { name: "Daario Naharis 2.png", url:"img/memes/got/Daario Naharis 2.png" },
    { name: "Daario Naharis 3.png", url:"img/memes/got/Daario Naharis 3.png" },
    { name: "Daario Naharis.png", url:"img/memes/got/Daario Naharis.png" },
    { name: "Daenerys2.jpg", url:"img/memes/got/Daenerys2.jpg" },
    { name: "Daenerys.jpg", url:"img/memes/got/Daenerys.jpg" },
    { name: "Davos Seaworth.jpg", url:"img/memes/got/Davos Seaworth.jpg" },
    { name: "Ellaria Sand.jpeg", url:"img/memes/got/Ellaria Sand.jpeg" },
    { name: "GameOfThrones Fighting.png", url:"img/memes/got/GameOfThrones Fighting.png" },
    { name: "Gendry.jpeg", url:"img/memes/got/Gendry.jpeg" },
    { name: "Gregor Clegane Helmet.jpg", url:"img/memes/got/Gregor Clegane Helmet.jpg" },
    { name: "Gregor Clegane.jpg", url:"img/memes/got/Gregor Clegane.jpg" },
    { name: "Grey Worm.png", url:"img/memes/got/Grey Worm.png" },
    { name: "High Sparrow.jpg", url:"img/memes/got/High Sparrow.jpg" },
    { name: "Hodor2.jpg", url:"img/memes/got/Hodor2.jpg" },
    { name: "Hodor.png", url:"img/memes/got/Hodor.png" },
    { name: "Jaime Lannister.jpeg", url:"img/memes/got/Jaime Lannister.jpeg" },
    { name: "Jeor Mormont.png", url:"img/memes/got/Jeor Mormont.png" },
    { name: "Joeffrey Baratheon.jpg", url:"img/memes/got/Joeffrey Baratheon.jpg" },
    { name: "JohnSnow Dead.jpg", url:"img/memes/got/JohnSnow Dead.jpg" },
    { name: "John_Snow.jpg", url:"img/memes/got/John_Snow.jpg" },
    { name: "JohnSnow.jpg", url:"img/memes/got/JohnSnow.jpg" },
    { name: "JohnSnow Sword.jpg", url:"img/memes/got/JohnSnow Sword.jpg" },
    { name: "Jojen Reed.jpg", url:"img/memes/got/Jojen Reed.jpg" },
    { name: "Jorah Mormont fighting.png", url:"img/memes/got/Jorah Mormont fighting.png" },
    { name: "Khal Drogo.jpg", url:"img/memes/got/Khal Drogo.jpg" },
    { name: "Loras Tyrell.jpeg", url:"img/memes/got/Loras Tyrell.jpeg" },
    { name: "Lord Vary 2.png", url:"img/memes/got/Lord Vary 2.png" },
    { name: "Lord Varys.jpeg", url:"img/memes/got/Lord Varys.jpeg" },
    { name: "Maester Aemon.jpg", url:"img/memes/got/Maester Aemon.jpg" },
    { name: "Margaery Tyrell.jpg", url:"img/memes/got/Margaery Tyrell.jpg" },
    { name: "Meera Reed.jpg", url:"img/memes/got/Meera Reed.jpg" },
    { name: "Melisandre.jpg", url:"img/memes/got/Melisandre.jpg" },
    { name: "Missandei.jpg", url:"img/memes/got/Missandei.jpg" },
    { name: "Myrcella Baratheon.jpg", url:"img/memes/got/Myrcella Baratheon.jpg" },
    { name: "Ned Stark.jpg", url:"img/memes/got/Ned Stark.jpg" },
    { name: "Oberyn Martell.jpeg", url:"img/memes/got/Oberyn Martell.jpeg" },
    { name: "Osha 2.jpg", url:"img/memes/got/Osha 2.jpg" },
    { name: "Osha.jpg", url:"img/memes/got/Osha.jpg" },
    { name: "Petyr Baelish.jpeg", url:"img/memes/got/Petyr Baelish.jpeg" },
    { name: "Podrick Payne.jpeg", url:"img/memes/got/Podrick Payne.jpeg" },
    { name: "Ramsay Bolton.jpeg", url:"img/memes/got/Ramsay Bolton.jpeg" },
    { name: "Renly Baratheon.jpeg", url:"img/memes/got/Renly Baratheon.jpeg" },
    { name: "Robb Stark.jpg", url:"img/memes/got/Robb Stark.jpg" },
    { name: "Samwell Tarly.jpeg", url:"img/memes/got/Samwell Tarly.jpeg" },
    { name: "Samwell Tarly.png", url:"img/memes/got/Samwell Tarly.png" },
    { name: "Sandor Clegane 2.jpg", url:"img/memes/got/Sandor Clegane 2.jpg" },
    { name: "Sandor Clegane charge.jpg", url:"img/memes/got/Sandor Clegane charge.jpg" },
    { name: "Sandor Clegane.jpg", url:"img/memes/got/Sandor Clegane.jpg" },
    { name: "Sansa Stark.jpeg", url:"img/memes/got/Sansa Stark.jpeg" },
    { name: "Stannis Baratheon.jpg", url:"img/memes/got/Stannis Baratheon.jpg" },
    { name: "Theon Greyjoy 2.jpg", url:"img/memes/got/Theon Greyjoy 2.jpg" },
    { name: "Theon Greyjoy.jpeg", url:"img/memes/got/Theon Greyjoy.jpeg" },
    { name: "Tommen Baratheon.jpg", url:"img/memes/got/Tommen Baratheon.jpg" },
    { name: "Tormund Giantsbane 2.jpeg", url:"img/memes/got/Tormund Giantsbane 2.jpeg" },
    { name: "Tormund Giantsbane fighting.jpg", url:"img/memes/got/Tormund Giantsbane fighting.jpg" },
    { name: "Tormund Giantsbane.jpg", url:"img/memes/got/Tormund Giantsbane.jpg" },
    { name: "Tyene Sand.jpeg", url:"img/memes/got/Tyene Sand.jpeg" },
    { name: "Tyrion Crossbow.jpeg", url:"img/memes/got/Tyrion Crossbow.jpeg" },
    { name: "Tyrion.jpg", url:"img/memes/got/Tyrion.jpg" },
    { name: "Tyrion Lannister.jpg", url:"img/memes/got/Tyrion Lannister.jpg" },
    { name: "Viserys Targaryen.jpeg", url:"img/memes/got/Viserys Targaryen.jpeg" },
    { name: "White Walker 2.jpg", url:"img/memes/got/White Walker 2.jpg" },
    { name: "White Walker.jpg", url:"img/memes/got/White Walker.jpg" },
    { name: "White Walker Knight.jpg", url:"img/memes/got/White Walker Knight.jpg" },
    { name: "White Walkers.jpg", url:"img/memes/got/White Walkers.jpg" },
    { name: "Ygritte.jpg", url:"img/memes/got/Ygritte.jpg" }
  ];

  app.memes = [
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

}());
