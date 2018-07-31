/*
 * Created on Fri Jul 20 2018
 * Copyright © 2018 Mikhail K. (iSm1le)
 * Licensed under the Apache License, Version 2.0
 */

const selector = 'news-topic-image';
const mNode = document.createElement('div');
const sNode = document.createElement('span');
const iNode = document.createElement('img');
const loadingImg = document.createElement('span');
let isShowingImage = false;
const imgs = document.getElementsByClassName(selector);

function showImage(img) {
  iNode.style.display = 'block';
  if (isShowingImage) {
    mNode.style.display = 'none';
    isShowingImage = false;
  } else {
    mNode.style.display = 'flex';
    iNode.src = img.src;
    const bRes = img.getAttribute('data-src');
    if (bRes !== null) {
      loadingImg.style.display = 'flex';
      img.onload = () => {
        iNode.src = img.src;
        loadingImg.style.display = 'none';
      };
      img.src = bRes;
      img.removeAttribute('data-src');
    }
    isShowingImage = true;
  }
  return true;
}

mNode.className = `${selector}-show`;
mNode.style.display = 'none';

sNode.className = 'close';
sNode.appendChild(document.createTextNode('X'));

loadingImg.className = 'loading';
loadingImg.style = 'color: white; justify-content: center; position: absolute; left: 50%; font-size: 2rem; -webkit-text-stroke: 1px black;';
loadingImg.style.display = 'none';
loadingImg.appendChild(document.createTextNode('Loading...'));

iNode.className = 'image';

mNode.appendChild(sNode);
mNode.appendChild(iNode);
mNode.appendChild(loadingImg);
mNode.onclick = () => showImage();

document.getElementsByTagName('body')[0].appendChild(mNode);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = () => showImage(imgs[i]);
}
