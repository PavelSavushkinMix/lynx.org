$('#form')
  .on('submit', (event) => {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://api.lynx.org.ua/callback',
      headers: {
        Accept: 'application/x.lynx.v1+json',
      },
      success(responsedata) {
        // process on data
        console.log(`${'got response as ' + ' '}${responsedata} `);
      },
    });
  });
