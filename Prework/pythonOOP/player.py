class Player(object):
    def __init__(self, tracks):
        self.tracks = []
        self.currentTrack = 0

    def add(self, track):
        self.tracks.append(track)

    def play(self):
        print("Playing: %s by %s" %(self.tracks[self.currentTrack].title, self.tracks[self.currentTrack].artist))

    def selectTrack(self, num):
        self.currentTrack = num

    def printTracksInfo(self):
        counter = 0
        for track in range (0, len(self.tracks)):
            print("Track %s: %s (%s) by %s" %(counter, self.tracks[counter].title, self.tracks[counter].album, self.tracks[counter].artist))
            counter += 1

    def next_song(self):
       self.currentTrack = self.currentTrack + 1
       if (self.currentTrack >= len(self.tracks)):
            self.currentTrack = 0


    def previous(self):
       self.currentTrack = self.currentTrack - 1
       if(self.currentTrack < 0):
           self.currentTrack  = len(self.tracks) - 1