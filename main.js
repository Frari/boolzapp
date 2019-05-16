$('.invia').click(function(){
  send_message();
});

// funzione che fa inviare il messaggio anche schiacciando tasto invio
  $('.input').keypress(function(event){
    if(event.which == 13){
      send_message();
    }
  });


  function send_message(){
  // dichiaro variabile per prendere il valore dell'input immesso dall'utente
    var text_utente = $('.input').val();

    if(text_utente){
  // creo una variabile nella quale memorizzo il clone del contenitore con classe template in display none
    var new_message = $('.mes_container.template').clone();
  // rimuovo dal contenitore del messaggio la classe template
    new_message.removeClass('template');
  // aggiungo al figlio del contenitore la classe che da lo sfondo verde e inserisco il testo digitato dall'utente
    new_message.children('.message_inv').addClass('me').text(text_utente);
  // inserisco tutto nel contenitore messaggi vuoto
    $('.messaggi').append(new_message);
  // azzero l'input in modo che l'utente possa inserire altro messaggio
    $('.input').val(' ');
    }

    setTimeout(function() {
      // creo una variabile nella quale memorizzo il clone del contenitore con classe template in display none
        var new_message = $('.mes_container.template').clone();
        // rimuovo dal contenitore del messaggio la classe template
        new_message.removeClass('template');
        // aggiungo al figlio del contenitore la classe che da lo sfondo verde e inserisco il testo digitato dall'utente
        new_message.children('.message_inv').addClass('computer').text('ok');
        // inserisco tutto nel contenitore messaggi vuoto
        $('.messaggi').append(new_message);
        // azzero l'input in modo che l'utente possa inserire altro messaggio
        $('.input').val(' ');
      }, 1000);


  }

  // creo funzione per cercare contatto al click della lente d'ingrandimento
  $('.lente').keyup(function(event){
    // creo la variabile per prendere il valore di quello scritto dall'utente
    var ricerca_cont = $('.search').val();
    console.log(ricerca_cont);
    // creo funzione che cicla tutti i contatti in lista
    $('.contatto').each(function(){
      // creo una variabile per recuperare il nome all'interno di 'p' figlio del contenitore 'contatto'
      var name = $(this).find('p').text().toLowerCase();
      // creo condizione che va a vedere se il nome immesso è incluso nella lista contatti
      if(name.includes(ricerca_cont)){
        $(this).show();
      }else{
        $(this).hide();
      };
    });
    $('.search').val(' ');

  });
