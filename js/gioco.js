/**/function nuovoQuiz () {
/**/  numeroDomandaCorrente = 0;
      risposta0.style.display = "inline-block";
      risposta1.style.display = "inline-block";
      risposta2.style.display = "inline-block";
      nodoAvanti.style.display = "inline-block";
      nodoRicomincia.style.display = "inline-block";
      nodoInizia.style.display = "none";
/**/  aggiornaDomanda(numeroDomandaCorrente);
/**/  scriviMessaggio(nodoRisultato, "");
/**/  risposteDate = [];
/**/}

/**/function aggiornaDomanda (i) {
/**/  var parte = quiz[i];
/**/  scriviMessaggio(nodoTestoDomanda, parte.domanda)
/**/  scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
/**/  scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
/**/  scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
/**/  nodoRisposta0.checked = false;
/**/  nodoRisposta1.checked = false;
/**/  nodoRisposta2.checked = false;
      if(numeroDomandaCorrente == 2){
        canzone1.style.display="inline-block";
      } else{
        canzone1.pause();
        canzone1.style.display="none";
      }
      if(numeroDomandaCorrente == 3){
        canzone2.style.display="inline-block";
      } else{
        canzone2.pause();
        canzone2.style.display="none";
      }
      if(numeroDomandaCorrente == 5){
        canzone3.style.display="inline-block";
      } else{
        canzone3.pause();
        canzone3.style.display="none";
      }
      if(numeroDomandaCorrente == 8){
        canzone4.style.display="inline-block";
      } else{
        canzone4.pause();
        canzone4.style.display="none";
      }
/**/}

var quiz = [
{
  domanda : "1. Quale, tra i seguenti brani, è il più lungo?",
  risposte : [
  "Shine On You Crazy Diamond (parts 1-9)",
  "Echoes",
  "Breath"
  ],
  rispostaEsatta : 0
},
{
  domanda : "2. Quale altro gruppo registrava assieme ai Pink Floyd nel 1967 negli Abbey Road Studios?",
  risposte : [
  "Queen",
  "Rolling Stones",
  "Beatles"
  ],
  rispostaEsatta : 2
},
{
  domanda : "3. Qual è il titolo della seguente canzone?",
  risposte : [
  "The Great Gig in the Sky",
  "Wish You Were Here",
  "Us and Them"
  ],
  rispostaEsatta : 1
},
{
  domanda : "4. In quale album possiamo ascoltare questa canzone?",
  risposte : [
  "The Wall",
  "A Saucerful of Secrets",
  "Ummagumma"
  ],
  rispostaEsatta : 0
},
{
  domanda : "5. Una tra le seguenti affermazioni è vera. Quale?",
  risposte : [
  "David Gilmour entra a far parte dei Pink Floyd sin da subito",
  "Roger Waters cacciò dal gruppo Richard Wright per dei contrasti",
  "L'album \"The Wall\" è stato interamente dedicato a Syd Barrett"
  ],
  rispostaEsatta : 1
},
{
  domanda : "6. Qual è il nome di questo brano appartenente a \"The Dark Side of the Moon\"?",
  risposte : [
  "Time",
  "Money",
  "Eclipse"
  ],
  rispostaEsatta : 1
},
{
  domanda : "7. Qual era, inizialmente, il nome dei Pink Floyd",
  risposte : [
  "Tea Set",
  "The Pink Floyd Sound",
  "The King"
  ],
  rispostaEsatta : 0
},
{
  domanda : "8. Durante la registrazione di un album, i Pink Floyd vennero ingaggiati per registrare le musiche di \"La vallée / Obscured by Clouds\". " +
  "Qual era l'album su cui stavano già lavorando?",
  risposte : [
  "Wish You Were Here",
  "The Dark Side of The Moon",
  "Animals"
  ],
  rispostaEsatta : 1
},
{
  domanda : "9. Questo brano è presente nell'ultimo album composto assieme a Richard Wright. Qual è il nome dell'album?",
  risposte : [
  "The Endless River",
  "The Division Bell",
  "The Wall"
  ],
  rispostaEsatta : 1
},
{
  domanda : "10. Chi era Algie?",
  risposte : [
  "Il progetto per un album",
  "La ragazza di un membro del gruppo",
  "Un \"maiale\" aerostatico"
  ],
  rispostaEsatta : 2
},
];

/**/function scriviMessaggio (nodo, messaggio) {
/**/  var nodoTesto = document.createTextNode(messaggio);
/**/  if (nodo.childNodes.length == 0) {
/**/    nodo.appendChild(nodoTesto);
/**/  } else {
/**/    nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/  }
/**/}

/**/function gestoreClickAvanti () {
/**/  try {
/**/    if (numeroDomandaCorrente == numeroDomande) {
/**/      return;
/**/    }
/**/    if (nodoRisposta0.checked) {
/**/      risposteDate[numeroDomandaCorrente] = 0;
/**/    } else if (nodoRisposta1.checked) {
/**/      risposteDate[numeroDomandaCorrente] = 1;
/**/    } else if (nodoRisposta2.checked) {
/**/      risposteDate[numeroDomandaCorrente] = 2;
/**/    } else {
/**/      return;
/**/    }
/**/    numeroDomandaCorrente++;
/**/    if (numeroDomandaCorrente == numeroDomande) {
/**/      var esito = calcolaEsito();
/**/      var s;
          if (esito < 3) {
            s = "Non ci siamo, c'è da studiare per bene. " + esito + " risposte esatte su " + numeroDomande;
          } else if (esito < 6) {
            s = "Ci vuole un ripasso, torna alla prossima sessione! " + esito + " risposte esatte su " + numeroDomande;
          } else if (esito < 8) {
            s = "Si poteva fare di meglio. Se vuoi riprovare clicca su Start. " + esito + " risposte esatte su " + numeroDomande;
          } else if (esito < 10) {
            s = "La prova è andata bene. Accetti? " + esito + " risposte esatte su " + numeroDomande;
          } else if (esito == 10) {
            s = "Ottimo! Sei un vero pinkfloydiano, non c'è altro da imparare qui! " + esito + " risposte esatte su " + numeroDomande;
          }
/**/      scriviMessaggio(nodoRisultato, s);
/**/      } else {
/**/        aggiornaDomanda(numeroDomandaCorrente);
/**/      }
/**/  } catch ( e ) {
/**/    alert("gestoreClickAvanti " + e);
/**/  }
/**/}

/**/function calcolaEsito () {
/**/  var numeroRisposteEsatte = 0;
/**/  for (var i = 0; i < quiz.length; i++) {
/**/    var parte = quiz[i];
/**/    if (parte.rispostaEsatta == risposteDate[i]) {
/**/      numeroRisposteEsatte++;
/**/    }
/**/  }
/**/  return numeroRisposteEsatte;
/**/}

/**/function gestoreClickInizia () {
/**/  try {
/**/    nuovoQuiz();
        intro.play();
/**/  } catch ( e ) {
/**/    alert("gestoreClickInizia " + e);
/**/  }
/**/}

function gestoreAggiorna(){
  try {
     window.location.reload();
  } catch (e) {
    alert("gestoreAggiorna " + e);
  }
}


/**/var nodoTestoDomanda;
/**/var nodoRisposta0;
/**/var nodoTestoRisposta0;
/**/var nodoRisposta1;
/**/var nodoTestoRisposta1;
/**/var nodoRisposta2;
/**/var nodoTestoRisposta2;
/**/var nodoAvanti;
/**/var nodoRisultato;
/**/var nodoInizia;
    var nodoRicomincia;
/**/var numeroDomande;
/**/var numeroDomandaCorrente;
/**/var risposteDate;
/**/function gestoreLoad () {
/**/try {
/**/    nodoTestoDomanda = document.getElementById("testoDomanda");
/**/    nodoRisposta0 = document.getElementById("risposta0");
/**/    nodoTestoRisposta0 = document.getElementById("testoRisposta0");
/**/    nodoRisposta1 = document.getElementById("risposta1");
/**/    nodoTestoRisposta1 = document.getElementById("testoRisposta1");
/**/    nodoRisposta2 = document.getElementById("risposta2");
/**/    nodoTestoRisposta2 = document.getElementById("testoRisposta2");
/**/    nodoAvanti = document.getElementById("avanti");
/**/    nodoRisultato = document.getElementById("risultato");
/**/    nodoInizia = document.getElementById("inizia");
        nodoRicomincia = document.getElementById("ricomincia");
/**/    nodoAvanti.onclick = gestoreClickAvanti;
/**/    nodoInizia.onclick = gestoreClickInizia;
        nodoRicomincia.onclick = gestoreAggiorna;
/**/    numeroDomande = quiz.length;
/**/  } catch ( e ) {
/**/    alert("gestoreLoad " + e);
/**/  }
/**/}
/**/window.onload = gestoreLoad;
