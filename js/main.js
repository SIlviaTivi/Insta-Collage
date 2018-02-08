let begin = () => {
 
  function imgRandom() {
    return arrFriend[parseInt(Math.random() * 10)];
  }

  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);



  function loadNewFriends(objImg) {
    let friends = document.getElementsByTagName('img');
    let arrImgUse = [];

    arrImgUse.push(objImg.id);

    [...friends].forEach(el => {
      let img = null;

      do {
        img = imgRandom();
      } while (arrImgUse.includes(img.id));

      arrImgUse.push(img.id);

      loadImg(el, img.name, img.uri);
    });
  }

  function loadImg(content, name, uri) {
    content.setAttribute('src', `img/${uri}`);
    content.setAttribute('alt', `img/${name}`);
  }

  function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function permitirDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    if (event.target.className === 'marco-foto') {
      let idFoto = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(idFoto));
    }
  }
};

window.addEventListener('load', begin);
