class Player {
    constructor() {
        this.tracks = [];
        this.currentTrack = 0;
    }
    add(track) {
        this.tracks.push(track);
    }
    play() {
       console.log(`Playing: ${this.tracks[this.currentTrack].title} by ${this.tracks[this.currentTrack].artist}`);
   }
   next() {
       this.currentTrack++;
       if(this.currentTrack >= this.tracks.length){
           this.currentTrack = 0;
       }
   }
   previous() {
       this.currentTrack--;
       if(this.currentTrack < 0){
           this.currentTrack  = this.tracks.length - 1;
       }
   }
}

class Track {
    constructor(artist,title,album) {
        this.artist = artist,
        this.title = title,
        this.album = album;
    }
}



const player = new Player();
const driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
const laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');
player.add(driveTrack);
player.add(laBambaTrack);

player.play();
player.next();
player.play();
player.next();
player.play();