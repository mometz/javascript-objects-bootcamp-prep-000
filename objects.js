var playlist = { RedHotChiliPeppers: "Otherside" }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}