/*
 * Created on Wed Aug 01 2018
 * Copyright © 2017-2018 Mikhail K. (iSm1le)
 * Licensed under the Apache License, Version 2.0
 */


const mNode = document.createElement('div');
const sNode = document.createElement('span');
const iNode = document.createElement('img');
let isShowingImage = false;
const imgs = document.getElementsByClassName('news-topic-image');

mNode.className = 'news-topic-show-image';
mNode.style.display = 'none';

sNode.className = 'close';
sNode.appendChild(document.createTextNode('X'));

iNode.className = 'image';

function showImage(img) {
  if (isShowingImage) {
    mNode.style.display = 'none';
    isShowingImage = false;
  } else {
    mNode.style.display = 'flex';
    iNode.src = img.src;
    isShowingImage = true;
  }
  return true;
}

mNode.appendChild(sNode);
mNode.appendChild(iNode);
mNode.onclick = () => { showImage(); };

document.getElementsByTagName('body')[0].appendChild(mNode);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = () => { showImage(this); };
}
