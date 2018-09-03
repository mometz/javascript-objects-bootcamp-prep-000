var playlist = {Incubus: "Drive"}

function updatePlaylist(playlist, artistName, songTitle) {
     return Object.assign({}, playlist, {[artistName]: songTitle})
}