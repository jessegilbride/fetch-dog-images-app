'use strict';

function breedNotFound(error) {
  // console.log("breedNotFound() called");
  // console.log(${error.message});
    $('.results').append(
      `<div>
      <p>Sorry, no images for that breed.</p>
      </div>`
    );
}

function getDogImages(breedName) {
  fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
  .then(response => {
    // if (response.ok) {return response.json()}
    return response.json()
  })
  .then(responseJson => displayResults(responseJson))
  .catch(errorResponse => breedNotFound(errorResponse));
}

function displayResults(responseJson) {
  // console.log("displayResults() called");
  $('.results').append(
    `<img src="${responseJson.message}" class="breedResult-img">`
  );
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const breed = $('#breed-name').val();
    $('.results').empty();
    getDogImages(breed);
  });
}

$(function() {
  watchForm();
});