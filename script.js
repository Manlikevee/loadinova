/* This timer waits three seconds to add promises to all images, and executes the remove_loading_message function when all promises are resolved.
The promises are only added after three seconds to ensure the loading message doesn't disappear right away. This is recommended, but non-essential design choice.
*/

setTimeout(function() {
  console.log('working')
  Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(remove_loading_message);
}, 4000);

function remove_loading_message () {
  document.querySelector(".myloadingani").style.display = "none";
  console.log('gone')
}