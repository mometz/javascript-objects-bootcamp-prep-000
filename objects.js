var playlist = { Incubus: "Drive" }

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]: songTitle})
  return {}
}