from player import Player
from track import Track

def run():
    # create instance of player
    player = Player("myPlayer")

    # create instances for the following three tracks
    track1 = Track("Incubus", "Drive", "Make Yourself")
    track2 = Track("Ritchie Valens", "La Bamba", "La Bamba")
    track3 = Track("Red Hot Chilli Peppers", "Californication", "Californication")

    # add tracks to player
    player.add(track1)
    player.add(track2)
    player.add(track3)

    # play tracks
    player.play()

    player.next_song()
    player.play()

    player.next_song()
    player.play()

    player.next_song()
    player.play()

    player.previous()
    player.play()

    #directly select a track
    player.selectTrack(1)
    player.play()

    # print out all tracks
    player.printTracksInfo()


if __name__ == "__main__":
    run()



