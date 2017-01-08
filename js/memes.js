(function () {
  'use strict';

  var app = angular.module('MemeGenerator', ['ngSanitize', 'ui.select', 'ui.bootstrap']);

  app.wow_memes = [
    { name:"Arena season", url:"img/memes/WoW/Arena season.jpg" },
    { name:"Arena season 2", url:"img/memes/WoW/Arena season 2.jpg" },
    { name:"Arena season 3", url:"img/memes/WoW/Arena seasons.jpg" },
    { name:"Art Fair", url:"img/memes/WoW/Art Fair.jpg" },
    { name:"Azeroth event Labyrinth 2", url:"img/memes/WoW/Azeroth event Labyrinth 2.jpg" },
    { name:"Azeroth Globe", url:"img/memes/WoW/Azeroth Globe.jpg" },
    { name:"Azeroth Laboratory", url:"img/memes/WoW/Azeroth Laboratory.jpg" },
    { name:"Azeroth Laboratory 2", url:"img/memes/WoW/Azeroth Laboratory 2.jpg" },
    { name:"Azeroth Labyrinth 2", url:"img/memes/WoW/Azeroth Labyrinth 2.jpg" },
    { name:"Azeroth Labyrinth", url:"img/memes/WoW/Azeroth Labyrinth.jpg" },
    { name:"Azerothshard logo", url:"img/memes/WoW/Azerothshard logo.jpg" },
    { name:"Blood Elf", url:"img/memes/WoW/Blood Elf.jpg" },
    { name:"Blood Elf Mage", url:"img/memes/WoW/Azerothshard Contest.jpg" },
    { name:"Guildhouse", url:"img/memes/WoW/Case di gilda 3.jpg" },
    { name:"Guildhouse", url:"img/memes/WoW/Case di gilda 4.jpg" },
    { name:"Guildhouse", url:"img/memes/WoW/Case di gilda 5.jpg" },
    { name:"Guildhouse", url:"img/memes/WoW/Case di gilda.jpg" },
    { name:"Dalaran portal", url:"img/memes/WoW/Dalaran portal.png" },
    { name:"Easter event", url:"img/memes/WoW/Easter event.jpg" },
    { name:"Gdr", url:"img/memes/WoW/Gdr.jpg" },
    { name:"Gnome", url:"img/memes/WoW/Gnome.jpg" },
    { name:"Gnome Gold", url:"img/memes/WoW/Gnome Gold.png" },
    { name:"Goblin female", url:"img/memes/WoW/Goblin female.jpg" },
    { name:"Halloween", url:"img/memes/WoW/halloween.jpg" },
    { name:"Horde ready for battle", url:"img/memes/WoW/Horde ready for battle.jpg" },
    { name:"Icecrown Citadel", url:"img/memes/WoW/Icecrown Citadel.jpg" },
    { name:"Ice run", url:"img/memes/WoW/Ice run.jpg" },
    { name:"Labyrinth", url:"img/memes/WoW/Labyrinth.jpg" },
    { name:"Labyrinth 2", url:"img/memes/WoW/Labyrinth 2.png" },
    { name:"Mercato Nero - Wanted", url:"img/memes/WoW/Mercato Nero - Wanted.png" },
    { name:"Orc and dwarf", url:"img/memes/WoW/Orc and dwarf.jpg" },
    { name:"Undead respawn", url:"img/memes/WoW/Undead respawn.jpg" },
    { name:"Player Stats", url: "img/memes/WoW/PlayerStats.png"},
    { name:"PvPstats", url:"img/memes/WoW/PvPstats.png" },
    { name:"PvP Wild", url:"img/memes/WoW/PvP Wild.jpg" },
    { name:"standard tournament", url:"img/memes/WoW/standard tournament.jpg" },
    { name:"Tournament", url:"img/memes/WoW/Tournament.jpg" },
    { name:"Akama", url: "img/memes/WoW/Akama.jpg"},
    { name:"Anetheron", url: "img/memes/WoW/Anetheron.jpg"},
    { name:"Anub'arak", url: "img/memes/WoW/Anub'arak.jpg"},
    { name:"Anub'arak 2", url: "img/memes/WoW/Anub'arak 2.png"},
    { name:"Archimonde", url: "img/memes/WoW/Archimonde.jpg"},
    { name:"Archimonde 2", url: "img/memes/WoW/Archimonde 2.jpg"},
    { name:"Cairne Bloodhoof", url: "img/memes/WoW/Cairne Bloodhoof.jpg"},
    { name:"Cenarius", url: "img/memes/WoW/Cenarius.jpg"},
    { name:"Chen Stormstout", url: "img/memes/WoW/Chen Stormstout.png"},
    { name:"Chen Stormstout 2", url: "img/memes/WoW/Chen Stormstout 2.jpg"},
    { name:"Grom Hellscream", url: "img/memes/WoW/Grom Hellscream.jpg"},
    { name:"Grom Hellscream 2", url: "img/memes/WoW/Grom Hellscream 2.jpg"},
    { name:"Illidan Stormrage", url: "img/memes/WoW/Illidan Stormrage.jpg"},
    { name:"Illidan Stormrage 2", url: "img/memes/WoW/Illidan Stormrage 2.jpg"},
    { name:"Illidan vs Maiev", url: "img/memes/WoW/Illidan vs Maiev.jpg"},
    { name:"Jaina Proudmoore", url: "img/memes/WoW/Jaina Proudmoore.jpg"},
    { name:"Kael Thas Sunstrider", url: "img/memes/WoW/Kael Thas.png"},
    { name:"Kel'Thuzad", url: "img/memes/WoW/Kel'Thuzad.png"},
    { name:"Kel'Thuzad 2", url: "img/memes/WoW/Kel'Thuzad 2.jpg"},
    { name:"Kil'jaeden", url: "img/memes/WoW/Kil'jaeden.jpg"},
    { name:"Lich King", url: "img/memes/WoW/Lich King.jpg"},
    { name:"Magtheridon", url: "img/memes/WoW/Magtheridon.jpg"},
    { name:"Maiev Shadowsong", url: "img/memes/WoW/Maiev Shadowsong.jpeg"},
    { name:"Malfurion Stormrage", url: "img/memes/WoW/Malfurion Stormrage.jpg"},
    { name:"Mal'ganis", url: "img/memes/WoW/Mal'ganis.jpg"},
    { name:"Mannoroth", url: "img/memes/WoW/Mannoroth.jpg"},
    { name:"Muradin Bronzebeard", url: "img/memes/WoW/Muradin Bronzebeard.jpg"},
    { name:"Ner'zhul", url: "img/memes/WoW/Ner'zhul.jpg"},
    { name:"Rexxar", url: "img/memes/WoW/Rexxar.jpg"},
    { name:"Rexxar 2", url: "img/memes/WoW/Rexxar 2.jpg"},
    { name:"Sylvanas Windrunner", url: "img/memes/WoW/Sylvanas Windrunner.png"},
    { name:"Thrall", url: "img/memes/WoW/Thrall.png"},
    { name:"Tyrande Whisperwind", url: "img/memes/WoW/Tyrande Whisperwind.jpg"},
    { name:"Uther Lightbringer", url: "img/memes/WoW/Uther Lightbringer.jpg"},
    { name:"Vol'jin", url: "img/memes/WoW/Vol'jin.jpg"},
    { name:"Vol'jin 2", url: "img/memes/WoW/Vol'jin 2.jpg"}
  ];

  app.got_memes = [
    { name: "Arya Stark Bow", url:"img/memes/got/Arya Stark Bow.png" },
    { name: "Arya Stark", url:"img/memes/got/Arya Stark.jpg" },
    { name: "Benjen Stark", url:"img/memes/got/Benjen Stark.jpeg" },
    { name: "Bran and JohnSnow", url:"img/memes/got/Bran and JohnSnow.jpg" },
    { name: "Bran vision", url:"img/memes/got/Bran vision.jpg" },
    { name: "Brienne of Tarth", url:"img/memes/got/Brienne of Tarth.jpg" },
    { name: "Bronn", url:"img/memes/got/Bronn.jpg" },
    { name: "Catelyn Stark", url:"img/memes/got/Catelyn Stark.jpeg" },
    { name: "Cersei Lannister", url:"img/memes/got/Cersei Lannister.png" },
    { name: "Daario Naharis 2", url:"img/memes/got/Daario Naharis 2.png" },
    { name: "Daario Naharis 3", url:"img/memes/got/Daario Naharis 3.png" },
    { name: "Daario Naharis", url:"img/memes/got/Daario Naharis.png" },
    { name: "Daenerys2", url:"img/memes/got/Daenerys2.jpg" },
    { name: "Daenerys", url:"img/memes/got/Daenerys.jpg" },
    { name: "Davos Seaworth", url:"img/memes/got/Davos Seaworth.jpg" },
    { name: "Ellaria Sand", url:"img/memes/got/Ellaria Sand.jpeg" },
    { name: "GameOfThrones Fighting", url:"img/memes/got/GameOfThrones Fighting.png" },
    { name: "Gendry", url:"img/memes/got/Gendry.jpeg" },
    { name: "Gregor Clegane Helmet", url:"img/memes/got/Gregor Clegane Helmet.jpg" },
    { name: "Gregor Clegane", url:"img/memes/got/Gregor Clegane.jpg" },
    { name: "Grey Worm", url:"img/memes/got/Grey Worm.png" },
    { name: "High Sparrow", url:"img/memes/got/High Sparrow.jpg" },
    { name: "Hodor2", url:"img/memes/got/Hodor2.jpg" },
    { name: "Hodor", url:"img/memes/got/Hodor.png" },
    { name: "Jaime Lannister", url:"img/memes/got/Jaime Lannister.jpeg" },
    { name: "Jeor Mormont", url:"img/memes/got/Jeor Mormont.png" },
    { name: "Joeffrey Baratheon", url:"img/memes/got/Joeffrey Baratheon.jpg" },
    { name: "JohnSnow Dead", url:"img/memes/got/JohnSnow Dead.jpg" },
    { name: "John_Snow", url:"img/memes/got/John_Snow.jpg" },
    { name: "JohnSnow", url:"img/memes/got/JohnSnow.jpg" },
    { name: "JohnSnow Sword", url:"img/memes/got/JohnSnow Sword.jpg" },
    { name: "Jojen Reed", url:"img/memes/got/Jojen Reed.jpg" },
    { name: "Jorah Mormont fighting", url:"img/memes/got/Jorah Mormont fighting.png" },
    { name: "Khal Drogo", url:"img/memes/got/Khal Drogo.jpg" },
    { name: "Loras Tyrell", url:"img/memes/got/Loras Tyrell.jpeg" },
    { name: "Lord Vary 2", url:"img/memes/got/Lord Vary 2.png" },
    { name: "Lord Varys", url:"img/memes/got/Lord Varys.jpeg" },
    { name: "Maester Aemon", url:"img/memes/got/Maester Aemon.jpg" },
    { name: "Margaery Tyrell", url:"img/memes/got/Margaery Tyrell.jpg" },
    { name: "Meera Reed", url:"img/memes/got/Meera Reed.jpg" },
    { name: "Melisandre", url:"img/memes/got/Melisandre.jpg" },
    { name: "Missandei", url:"img/memes/got/Missandei.jpg" },
    { name: "Myrcella Baratheon", url:"img/memes/got/Myrcella Baratheon.jpg" },
    { name: "Ned Stark", url:"img/memes/got/Ned Stark.jpg" },
    { name: "Oberyn Martell", url:"img/memes/got/Oberyn Martell.jpeg" },
    { name: "Osha 2", url:"img/memes/got/Osha 2.jpg" },
    { name: "Osha", url:"img/memes/got/Osha.jpg" },
    { name: "Petyr Baelish", url:"img/memes/got/Petyr Baelish.jpeg" },
    { name: "Podrick Payne", url:"img/memes/got/Podrick Payne.jpeg" },
    { name: "Ramsay Bolton", url:"img/memes/got/Ramsay Bolton.jpeg" },
    { name: "Renly Baratheon", url:"img/memes/got/Renly Baratheon.jpeg" },
    { name: "Robb Stark", url:"img/memes/got/Robb Stark.jpg" },
    { name: "Samwell Tarly", url:"img/memes/got/Samwell Tarly.jpeg" },
    { name: "Samwell Tarly", url:"img/memes/got/Samwell Tarly.png" },
    { name: "Sandor Clegane 2", url:"img/memes/got/Sandor Clegane 2.jpg" },
    { name: "Sandor Clegane charge", url:"img/memes/got/Sandor Clegane charge.jpg" },
    { name: "Sandor Clegane", url:"img/memes/got/Sandor Clegane.jpg" },
    { name: "Sansa Stark", url:"img/memes/got/Sansa Stark.jpeg" },
    { name: "Stannis Baratheon", url:"img/memes/got/Stannis Baratheon.jpg" },
    { name: "Theon Greyjoy 2", url:"img/memes/got/Theon Greyjoy 2.jpg" },
    { name: "Theon Greyjoy", url:"img/memes/got/Theon Greyjoy.jpeg" },
    { name: "Tommen Baratheon", url:"img/memes/got/Tommen Baratheon.jpg" },
    { name: "Tormund Giantsbane 2", url:"img/memes/got/Tormund Giantsbane 2.jpeg" },
    { name: "Tormund Giantsbane fighting", url:"img/memes/got/Tormund Giantsbane fighting.jpg" },
    { name: "Tormund Giantsbane", url:"img/memes/got/Tormund Giantsbane.jpg" },
    { name: "Tyene Sand", url:"img/memes/got/Tyene Sand.jpeg" },
    { name: "Tyrion Crossbow", url:"img/memes/got/Tyrion Crossbow.jpeg" },
    { name: "Tyrion", url:"img/memes/got/Tyrion.jpg" },
    { name: "Tyrion Lannister", url:"img/memes/got/Tyrion Lannister.jpg" },
    { name: "Viserys Targaryen", url:"img/memes/got/Viserys Targaryen.jpeg" },
    { name: "White Walker 2", url:"img/memes/got/White Walker 2.jpg" },
    { name: "White Walker", url:"img/memes/got/White Walker.jpg" },
    { name: "White Walker Knight", url:"img/memes/got/White Walker Knight.jpg" },
    { name: "White Walkers", url:"img/memes/got/White Walkers.jpg" },
    { name: "Ygritte", url:"img/memes/got/Ygritte.jpg" }
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
