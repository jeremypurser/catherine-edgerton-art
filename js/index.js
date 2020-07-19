import { booksList } from './books.js';

function navigation() {
  switch (window.location.hash) {
    case '#books':
      books(booksList);
      break;
    case '#glass':
      glass();
      break;
    case '#paintings':
      paintings();
      break;
    case '#photo':
      photo();
      break;
    default:
      '';
  }
}

window.onload = navigation;

window.addEventListener('popstate', navigation);

const $root = document.getElementById('root');

$root.addEventListener('click', function (event) {
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
  activate('books');

  const booksFragment = document.createDocumentFragment();
  const ul = document.createElement('ul');

  list.forEach(function (item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.appendChild(a);
    li.classList.add('book-title');
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

  const fragment = document.createDocumentFragment();
  for (let i = 2; i > 0; i--) {
    const div = document.createElement('div');
    div.classList.add('glass-preview', `glass-preview-${i}`);
    const a = document.createElement('a');
    a.href = `../pages/glass-${i}.html`;
    a.textContent = 'See slideshow';
    div.appendChild(a);
    fragment.appendChild(div);
  }
  $hook.appendChild(fragment);
  window.scrollTo({ top: 0 });
}

function paintings() {
  emptyHook();
  deactivate();
  activate('paintings');

  const div = document.createElement('div');
  div.classList.add('paintings-preview');
  const a = document.createElement('a');
  a.href = '../pages/paintings.html';
  a.textContent = 'See slideshow';
  div.appendChild(a);

  $hook.appendChild(div);
  window.scrollTo({ top: 0 });
}

function photo() {
  emptyHook();
  deactivate();
  activate('photo');

  const div = document.createElement('div');
  div.classList.add('photo-preview');
  const a = document.createElement('a');
  a.href = '../pages/photos.html';
  a.textContent = 'See slideshow';
  div.appendChild(a);

  $hook.appendChild(div);
  window.scrollTo({ top: 0 });
}
