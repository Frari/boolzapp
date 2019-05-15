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
        new_message.children('.message_inv').addClass('computer').text();
        // inserisco tutto nel contenitore messaggi vuoto
        $('.messaggi').append(new_message);
        // azzero l'input in modo che l'utente possa inserire altro messaggio
        $('.input').val(' ');
      }, 1000);


  }

  // creo funzione per cercare contatto al click della lente d'ingrandimento
  $('.lente').click(function(){
    var ricerca_cont = $('.search').val();
    // $('.search').val(' ');

    $('p').hide();

    $('p').each(function(){
      if($(this).text().toLowerCase() == ricerca_cont.toLowerCase()){
        $(this).show();
      }else{
        $(this).show();
      };
    });
    $('.search').val(' ');

  });
