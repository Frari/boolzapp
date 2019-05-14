$('.invia').click(function(){
// dichiaro variabile per prendere il valore dell'input immesso dall'utente
  var text_utente = $('.input').val();
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
});
