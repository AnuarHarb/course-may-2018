(function() {

  const $profileDiv = document.getElementById('profile')
  console.log($profileDiv)
  let profile
  let concat = ``
  const URL = 'profile.json'

  fetch(URL)
    .then(response => response.json())
    .then(response => printProfile(response))
    .catch(err => console.log(`Se ha presentado el siguiente error: ${err}`))

  function printProfile(data) {
    console.log(data)
    for (let info in data) {
      console.log(data[info])
      if (data[info].endsWith(".jpg"))
        concat += `<img src="${data[info]}" width="200" style="border-radius:10px; border: 1px solid blue"></img>`
      else
        concat += `<br/><b>${info} : ${data[info]}</b>`
    }
    $profileDiv.innerHTML = `${concat}`
  }

})();
