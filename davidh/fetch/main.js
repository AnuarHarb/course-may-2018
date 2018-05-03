(function () {
    // const and vars
    const $profileDiv = document.getElementById('profile');
    const URL = 'profile.json';
    let concat = ``;


    // Array funtions
    const throwErr = (mssg) => {
      throw new Error(mssg);
    }

    const printProfile = (data) => {
        for (let info in data) {
            if (data[info].endsWith('.jpg')) {
                concat += `<img src="${data[info]}" width="200" style="border-radius:10px; border: 1px solid blue"></img>`;
            }
            else {
                concat += `<br/><b>${info} : ${data[info]}</b>`;
            }
        }
        $profileDiv.innerHTML = `${concat}`
    }

    // main
    fetch(URL)
        .then(response => response.json())
        .then(response => printProfile(response))
        .catch(error => throwErr(`Se ha producido el siguiente error ${error}`));
})();
