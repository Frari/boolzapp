$(document).ready(function(){

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
      new_message.children('.message_inv').addClass('me').find('.text').text(text_utente);
    // inserisco tutto nel contenitore messaggi vuoto
      $('.messaggi').append(new_message);
      console.log($(new_message).html());

    // azzero l'input in modo che l'utente possa inserire altro messaggio
      $('.input').val(' ');
      }

      setTimeout(function() {
        // creo una variabile nella quale memorizzo il clone del contenitore con classe template in display none
          var new_message = $('.mes_container.template').clone();
          // rimuovo dal contenitore del messaggio la classe template
          new_message.removeClass('template');
          // aggiungo al figlio del contenitore la classe che da lo sfondo verde e inserisco il testo digitato dall'utente
          new_message.children('.message_inv').addClass('computer').find('.text').text('ok');
          // inserisco tutto nel contenitore messaggi vuoto
          $('.messaggi').append(new_message);
          // azzero l'input in modo che l'utente possa inserire altro messaggio
          $('.input').val(' ');
        }, 1000);

        // creo funzione per intercettare il click sui riquadri dei contatti sulla sinistra
        $('.contatto').click(function(){
          // tolgo la classe active a tutti i contatti
          $('.contatto').removeClass('.active');
          // aggiungo la classe active al contatto cliccato
          $(this).addClass('.active');
          // recupero la conversazione da mostrare
          var conversazione = $(this).attr('data-coversazione');
          // recupero il pannello della conversazione del contatto cliccato
          var pannello_conversazione = $('.messaggi[data-conversazione="'+conversazione+'"]');
          // nascondo tutti i pannelli messaggi visibili
          $('.messaggi').removeClass('active');
          // aggiungo la classe active e rendo visibile quello del contatto cliccato
          pannello_conversazione.addClass('active');

        });

        // funzione per far apparire l'icona nei messaggi
        $('.message_inv').mouseenter(function(){
          // all'entrata del puntatore aggiungo la classe visibile
          $('.down',this).addClass('visibile');
          // all'uscita del puntatore rimuovo la classe visibile
          $('.message_inv').mouseleave(function(){
            $('.down',this).removeClass('visibile');

          });
          // funzione per far apparire e scomparire la finestra cancella
          $('.message_inv.me span .down.visibile').click(function(){
            $('.message_inv.me .cancella').show();
            $('.down.visibile').click(function(){
              $('.message_inv.me .cancella').hide();
            })
          });
          $('.message_inv.computer span .down.visibile').click(function(){
            $('.message_inv.computer .cancella').show();
            $('.down.visibile').click(function(){
              $('.message_inv.computer .cancella').hide();
            })
          });


        });

        // funzione che permette l'apparizione dell'icona anche sul messaggio spedito automaticamente dal computer
        // permette un evento anche in pagine dove ci sono cambiamenti dinamici
        $(document).on('mouseenter', '.message_inv', function(){
          $('.down',this).addClass('visibile');

        });
        $(document).on('click', '.down.visibile', function(){
          $('.message_inv.computer span .down.visibile').click(function(){
            $('.message_inv.computer .cancella').show();
            $('.down.visibile').click(function(){
              $('.message_inv.computer .cancella').hide();
            })
          });
        });



    }


    // creo funzione per cercare contatto con immissione nell'input
    $('.search').keyup(function(event){
      // creo la variabile per prendere il valore di quello scritto dall'utente
      var ricerca_cont = $(this).val();
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

    });


  // creo una funzione che al clik su div 'contatto' mi fa vedere i messaggi del contatto cliccato

  // creo un gruppo di oggetti contatto con proprietà nome
});
