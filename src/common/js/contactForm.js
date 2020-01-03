$('#form')
  .on('submit', (event) => {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://api.lynx.org.ua/callback',
      success(responsedata) {
        // process on data
        console.log(`${'got response as ' + ' '}${responsedata} `);
      },
    });
  });
