// get a list of current Studio Ghibli films
fetch('/_________/current')
  .then(response => response.json())
  .then( async _______ => {

    // See also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    // See also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    await Promise.all( ________.map( render ) )
    // After rendering is finished, add movie posters to page
    _______.forEach( ________ => {
      document.getElementById("________").innerHTML += _________.profile
    })
    // add header showing the total number of films
    document.getElementById("header").innerHTML +=
      '<p>'+
        'There are <span>' + _______.length + '</span> '+
        'Studio Ghibli films.'
      '</p>'

  })
  .catch(error => console.log(error) );

// To Render an movie profile:
// 1. Listen for an Event listener click
// 2. Contact the Mongo database
// 3. Select the correct film
// 4. Assemble the data in a template
// 5. Render the movie profile
