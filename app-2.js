'use strict';

function getDogImages(displayAmount) {
  $('.results').empty();
  /* for (let i=0; i<displayAmount; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
  } */

  fetch(`https://dog.ceo/api/breeds/image/random/${displayAmount}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  // console.log(responseJson);
  /* $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  ); */

  responseJson.message.map(item => generateImages(item));
}

function generateImages(imageAddress) {
  $('.results').append(
    `<img src="${imageAddress}" class="results-img">`
  );
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const amount = $('#number-of-dogs').val();
    getDogImages(amount);
  });
}

$(function() {
  watchForm();
});