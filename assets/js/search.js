(function () {

  function displayPost(post) {
    var appendString = '<div class="post">';
    appendString += '<a href="' + post.url + '">';
    appendString += '<div class="post-wrap">';
    appendString += displayPostText(post);
    appendString += displayImage(post);
    appendString += '</div>';
    appendString += '</a>';
    appendString += '</div>';
    return appendString;
  }

  function displayPostText(post) {
    var appendString = '<div class="text-warp">';
    appendString += displayTitle(post);
    appendString += displayExcerpt(post);
    appendString += '<div>';
    appendString += displayPostMeta(post);
    appendString += displayTags(post);
    appendString += '</div>';
    appendString += '</div>';
    return appendString;
  }

  function displayTitle(post) {
    return '<h3 class="title">' + post.title + '</h3>';
  }

  function displayExcerpt(post) {
    return '<p class="excerpt">\n' + post.excerpt + '</p>';
  }

  function displayPostMeta(post) {
    return '<span class="meta">' + post.date + '</span>';
  }

  function displayTag(tag) {
    return '<a href="' + tag.url + '"><li class="tag-sm">' + tag.name + '</li></a>';
  }

  function displayTags(post) {
    var tagsRenderer = '<ul class="tag-wrap">';
    for (var t = 0; t < post.tags.length; t++) {
      tagsRenderer += displayTag(post.tags[t]);
    }
    tagsRenderer += '</ul>\n';
    return tagsRenderer;
  }

  function displayImage(post) {
    if (post.image) {
      return '<div class="img-wrap"><img src="' + post.image + '" alt=""></div>';
    }
    return '';
  }

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      console.log('results', results);
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        appendString += displayPost(store[results[i].ref]);
      }

      searchResults.innerHTML = appendString;
    } else {
      // this is a hack for the inability to submit different language strings here
      let searchNode = document.querySelector('script[src*="search.js"]');
      let nothingFound = searchNode.getAttribute("data-search-nothing-found");
      searchResults.innerHTML = '<p class="description">' + nothingFound + '</p>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.querySelectorAll('[name="query"]')
      .forEach(searchBox => searchBox.setAttribute('value', searchTerm));

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('tags');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'url': window.store[key].url,
        'title': window.store[key].title,
        'tags': window.store[key].tags,
        'content': window.store[key].content,
        'excerpt': window.store[key].excerpt,
        'date': window.store[key].date
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
