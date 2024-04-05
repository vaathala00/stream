// Check if VLC is available
function checkVLC() {
  if (navigator.plugins.namedItem('VLC Web Plugin')) {
    // VLC is available, start auto redirection
    window.location.href = 'vlc://';
  } else {
        // VLC is not available, send a message to download VLC player
        var vlcDownloadUrl = 'https://www.videolan.org/vlc/';
        var message = 'Network Stream (Video) Player is not available on this device. Please download Network Stream (Video) player to watch the video.';
        alert(message);
    }
}

setTimeout(function(){
  location.reload();
}, 4000);

// Call the function after the page has finished loading
window.onload = checkVLC;

document.addEventListener('contextmenu', event => event.preventDefault());