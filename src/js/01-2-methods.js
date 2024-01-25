/*
 * Методи об'єкта і this при зверненні до властивостей у методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'My playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  changeName(newName) {
    console.log('this всередині changeName: ', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.changeName('New name');

playlist.addTrack('new track-1');

playlist.addTrack('new track-2');

playlist.updateRating(4);

console.log(playlist);

console.log(playlist.getTrackCount());
