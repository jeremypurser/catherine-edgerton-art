import { booksList } from './books.js';

const $root = document.getElementById('root');

$root.addEventListener('click', function (event) {
  // console.log('target: ', event.target);
  // console.log('id: ', event.target.id);
  // console.log(event.target.dataset.id);

  switch (event.target.dataset.id) {
    case 'books':
      books(booksList);
      break;
    case 'glass':
      glass();
      break;
    case 'paintings':
      paintings();
      break;
    case 'photo':
      photo();
      break;
    default:
      '';
  }
});

const $hook = document.getElementById('hook');

function emptyHook() {
  while ($hook.lastChild) {
    $hook.removeChild($hook.lastChild);
  }
}

function activate(id) {
  document.getElementById(id).classList.add('active');
}

function deactivate() {
  const $media = document.getElementsByClassName('media');

  for (const medium of $media) {
    medium.classList.remove('active');
  }
}

function books(list) {
  emptyHook();
  deactivate();
  // toggle class on books
  activate('books');

  const booksFragment = document.createDocumentFragment();

  const ul = document.createElement('ul');

  list.forEach((item) => {
    const li = document.createElement('li');

    const a = document.createElement('a');

    li.appendChild(a);

    a.href = item.href;

    a.textContent = item.text;

    ul.appendChild(li);
  });

  booksFragment.appendChild(ul);

  $hook.appendChild(booksFragment);
}

function glass() {
  emptyHook();
  deactivate();
  activate('glass');
}

function paintings() {
  emptyHook();
  deactivate();
  activate('paintings');
}

function photo() {
  emptyHook();
  deactivate();
  activate('photo');
}
/**
 * photos for each medium as background photo
 * css hover to different photo and show text
 *
 * js slideshow
 */
