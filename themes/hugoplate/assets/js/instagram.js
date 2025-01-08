(function() {
  function initInstagramEmbed() {
    var embeds = document.querySelectorAll('blockquote.instagram-media');
    embeds.forEach(function(embed) {
      var src = embed.getAttribute('data-instgrm-permalink');
      if (src) {
        fetch(`https://graph.facebook.com/v10.0/instagram_oembed?url=${encodeURIComponent(src)}&omitscript=true`)
          .then(response => response.json())
          .then(data => {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', data.html.match(/src="([^"]+)"/)[1]);
            iframe.setAttribute('allowtransparency', 'true');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('scrolling', 'no');
            iframe.style.width = '100%';
            iframe.style.border = 'none';
            embed.parentNode.insertBefore(iframe, embed);
            embed.style.display = 'none';
          })
          .catch(error => console.error('Error fetching Instagram oEmbed:', error));
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initInstagramEmbed);
})();