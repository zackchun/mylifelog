


//// Coffee counter logic
window.addEventListener('load', () => {
  document.getElementById('button-coffee').addEventListener('click', () => {
    //grab the cups value
    let nameCountry = document.getElementById('name_country').value;
    let nameCity = document.getElementById('name_city').value;
    let dateVisit = document.getElementById('date_visit').value;
    let memoVisit = document.getElementById('memo_visit').value;

    console.log(nameCountry);
    console.log(nameCity);
    console.log(dateVisit);
    console.log(memoVisit);


    //create the object 
    let obj = { "date": dateVisit, "type": "book", "country": nameCountry, "city": nameCity, "memo": memoVisit };

    //stringify the object
    let jsonData = JSON.stringify(obj);

    //fetch to route noCups
    fetch('/nameCountry', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: jsonData
    })
      .then(response => response.json())
      .then(data => { console.log(data) });

    // Clear input space after log writing

    document.getElementById('name_country').value = '';
    document.getElementById('name_city').value = '';
    document.getElementById('date_visit').value = '';
    document.getElementById('memo_visit').value = '';

    // Refresh History automatically when write log 

    fetch('/book')
      .then(resp => resp.json())
      .then(data => {
        document.getElementById('coffee-info').innerHTML = '';
        console.log(data.data);
        for (let i = 0; i < data.data.length; i++) {
          let string = '';

          string = " # " + data.data[i].date + " @ " + data.data[i].country + " / " + data.data[i].city + " => " + data.data[i].memo;

          let elt = document.createElement('p');
          elt.innerHTML = string;
          document.getElementById('coffee-info').appendChild(elt);


        }
      })


  });

  document.getElementById('get-tracker').addEventListener('click', () => {
    //get info on ALL the coffees we've had so far
    fetch('/book')
      .then(resp => resp.json())
      .then(data => {
        document.getElementById('coffee-info').innerHTML = '';
        console.log(data.data);
        for (let i = 0; i < data.data.length; i++) {
          let string = '';

          string = " # " + data.data[i].date + " @ " + data.data[i].country + " / " + data.data[i].city + " => " + data.data[i].memo;

          let elt = document.createElement('p');
          elt.innerHTML = string;
          document.getElementById('coffee-info').appendChild(elt);
        }

      })
  })

});



