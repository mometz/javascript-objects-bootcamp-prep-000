var playlist = { RedHotChiliPeppers: "Otherside" }

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist
}