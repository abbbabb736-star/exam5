;(function () {
  const content = document.getElementById('movie-detail-content')
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  fetch('https://api.imdbapi.dev/titles')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      const item = data.titles.find(function (t) {
        return t.id === id
      })

      const section = document.getElementById('movie-detail-section')

      if (section) {
        section.style.backgroundImage = 'url(' + item.primaryImage.url + ')'
      }

      content.innerHTML = `<h1 class="movie-detail__title">${item.primaryTitle}</h1>
        <p class="movie-detail__meta">${item.genres} ${item.startYear}</p>
        <p class="movie-detail__plot">${item.plot}</p>
        <a href="https://www.imdb.com/title/tt35149233/" target="_blank" rel="noopener noreferrer" class="movie-detail__btn">Watch Now</a>`

      document.title = item.primaryTitle + ' — OnAir'
    })
    .catch(function () {
      content.innerHTML =
        '<p style="color:#aaa;">Could not load movie. <a href="index.html" style="color:#dc3f3f;">Go back</a>.</p>'
    })
})()
