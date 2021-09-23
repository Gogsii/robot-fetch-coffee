let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/the-sentinel.jpg') {
      myImage.setAttribute ('src','images/chinatown.jpg');
    } else {
      myImage.setAttribute ('src','images/the-sentinel.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'I will get right on it it, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I will get right on it it, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
