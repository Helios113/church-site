(function() {
  function initInstagramEmbed() {
    var embeds = document.querySelectorAll('blockquote.instagram-media');
    embeds.forEach(function(embed) {
      var src = embed.getAttribute('data-instgrm-permalink');
      if (src) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', src + 'embed/captioned/');
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('scrolling', 'no');
        iframe.style.width = '100%';
        iframe.style.border = 'none';
        embed.parentNode.insertBefore(iframe, embed);
        embed.style.display = 'none';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initInstagramEmbed);
})();