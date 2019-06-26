window.addEventListener('DOMContentLoaded', (e) => {
  console.log('here');
  let imgContainer = document.querySelector('#img-container')
  console.log(imgContainer);
  console.log(APIKEY);
  fetch(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${APIKEY}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`)
  .then(res => res.json())
  .then(data => console.log(data))
})
