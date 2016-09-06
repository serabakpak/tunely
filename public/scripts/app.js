/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


var source;
var template;

$(document).ready(function() {
  console.log('app.js loaded!');
  source = $('#albums-template').text();
  template= Handlebars.compile(source);
  //renderAlbum();

  // $.get('/api/albums').success(function (albums) {
  //   albums.forEach(function(album) {
  //     renderAlbum(album);
  //   });
  // });

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: onSuccess,
    
  })



});


// this function takes a single album and renders it to the page
function onSuccess(albums) {
  renderAlbum(albums);
}

function renderAlbum(albums) {
  var albumHtml;
  for (var i=0; i<albums.length; i++){
     albumHtml = template(albums[i]);
     $("#albums").append(albumHtml);
  }
  console.log('rendering album:', albums);
}


