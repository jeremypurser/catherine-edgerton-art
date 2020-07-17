function book() {
  window.alert('hiiii');
}

const $root = document.getElementById('root');

$root.addEventListener('click', function (event) {
  console.log('target: ', event.target);
  console.log('id: ', event.target.id);
});

/**
 * photos for each medium as background photo
 * css hover to different photo and show text
 *
 * js slideshow
 */
