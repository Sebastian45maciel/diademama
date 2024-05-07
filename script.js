document.addEventListener('DOMContentLoaded', function() {
  const playlistContainer = document.getElementById('playlist-items');
  const songTitle = document.getElementById('song-title');
  const artist = document.getElementById('artist');
  const music = document.getElementById('music');
  const playPauseButton = document.getElementById('play-pause');
  const prevButton = document.getElementById('prev-song');
  const nextButton = document.getElementById('next-song');

  let currentSongIndex = 0;

  // Reproducir la primera canción al cargar la página
  playSong(currentSongIndex);

  // Evento de clic en la lista de reproducción para cambiar de canción
  playlistContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const index = Array.from(event.target.parentNode.children).indexOf(event.target);
      currentSongIndex = index;
      playSong(currentSongIndex);
    }
  });

  // Función para reproducir una canción
  function playSong(index) {
    const song = playlistContainer.children[index];
    const songSrc = song.dataset.src;
    const songImage = song.dataset.image;
    const title = song.dataset.title;
    const artistName = song.dataset.artist;
    music.src = songSrc;
    songTitle.textContent = title;
    artist.textContent = artistName;
    document.getElementById('song-image').src = songImage;
    music.play();
  }

  // Función para reproducir la canción anterior
  prevButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + playlistContainer.children.length) % playlistContainer.children.length;
    playSong(currentSongIndex);
  });

  // Función para reproducir la siguiente canción
  nextButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % playlistContainer.children.length;
    playSong(currentSongIndex);
  });

  // Función para pausar y reanudar la reproducción
  playPauseButton.addEventListener('click', function() {
    if (music.paused) {
      music.play();
      playPauseButton.textContent = '❚❚'; // Cambia el botón a pausa
    } else {
      music.pause();
      playPauseButton.textContent = '▶'; // Cambia el botón a reproducir
    }
  });
});
