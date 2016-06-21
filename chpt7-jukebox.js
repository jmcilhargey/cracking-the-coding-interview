/* Design a jukebox using object oriented principles */

// Think about the characteristics and functions of a jukebox. 
// Think about different types of jukeboxes, which one are we designing?
// Let's design a jukebox that takes money, assigns credit, has a lookup feature, and can give change

function JukeBox() {
  this.songList = [];
  this.playList = [];
  this.credits = 0;
  this.change = [
    { "amount" : 1.00,
     "number": 20 },
    { "amount" : 0.25,
     "number": 50 },
    { "amount" : 0.10,
     "number": 25 },
    { "amount" : 0.05,
     "number": 25 },
    { "amount" : 0.01,
     "number": 50 }
  ];
}

// When we add a song, let's put them in alphabetical order so we can retrieve them in O(lg n) runtime
// 

JukeBox.prototype.addSong = function(name, artist, length) {
  
  var newSong = new Song(name, artist, length);
  
  if (!this.songList.length) {
    this.songList.push(newSong);
  }
  
  var start = 0;
  var end = this.songList.length - 1;
  var middle = Math.floor((end - start) / 2 + start);
  
  while (start <= end) {
    
    middle = Math.floor((end - start) / 2 + start);

    if (this.songList[middle].name < newSong.name) {
      start = middle + 1;
    } else {
      
      end = middle - 1;
    }
  }
  this.songList.splice(middle, 0, newSong);
};

JukeBox.prototype.addCredits = function(money) {
  
  while (money >= 0.25 && this.credits <= 5) {
    money -= 0.25;
    this.credits++;
  }
  while (money > 0) {
    this.change.forEach(function(denom) {
      while (money >= denom.amount) {
        money = (money - denom.amount).toFixed(2);
        denom.number--;
      }
    });
  }
};

function Song(name, artist, length) {
  this.name = name;
  this.artist = artist;
  this.length = length;
}

var jukeBox = new JukeBox();

jukeBox.addSong("Hey Ya", "Outkast", "3:15");
jukeBox.addSong("Gimme Shelter", "Rolling Stones", "5:00");
jukeBox.addSong("Bohemian Rhapsody", "Queen", "7:30");
jukeBox.addSong("Rapper's Delight", "Sugerhill Gang", "6:45");
jukeBox.addSong("What's Goin' On", "Marvin Gaye", "4:15");
