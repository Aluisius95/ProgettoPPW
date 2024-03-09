// funzione per gestione dimensione immagine interattiva
/**/function gestoreRidimensiona() {
/**/   try {
/**/     var dimensioneAttuale = nodoDiscografia.width;
/**/      var rapporto = dimensioneAttuale/dimensioneFoto;
/**/     for (var i = 0; i < nodiArea.length; i++) {
/**/       for (var j = 0; j < coordinate[i].length; j++) {
/**/          coordinate[i][j] *= rapporto;
/**/        }
/**/        nodiArea[i].coords = coordinate[i].join(',');
/**/     }
/**/     dimensioneFoto = dimensioneAttuale;
/**/   } catch (e) {
/**/      alert("gestoreRidimensiona " + e);
/**/   }
/**/}

//funzione per cambio di cursore al passaggio sull'area cliccabile
/**/function gestoreCursore() {
/**/   try {
/**/     this.style.cursor = "pointer";
/**/   } catch (e) {
/**/     alert("gestoreCursore " + e);
/**/   }
/**/}

//Inserisce un testo nell'HTML, chiamato da gestoreClickArea
/**/function scriviMessaggio (nodo, messaggio) {
/**/  var nodoTesto = document.createTextNode(messaggio);
/**/  if (nodo.childNodes.length == 0) {
/**/    nodo.appendChild(nodoTesto);
/**/  } else {
/**/    nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/  }
/**/}

var copertine = {
  "album1" : "The Paper at the Gates Down",
  "album2" : "A Saucerful of Secrets",
  "album3" : "More",
  "album4" : "Ummagumma",
  "album5" : "Atom Heart Mother",
  "album6" : "Meddle",
  "album7" : "Obscured by Clouds",
  "album8" : "The Dark Side of the Moon",
  "album9" : "Wish You Were Here",
  "album10" : "Animals",
  "album11" : "The Wall",
  "album12" : "The Final Cut",
  "album13" : "A Momentary Lapse of Reason",
  "album14" : "The Division Bell",
  "album15" : "The Endless River"
};

var info = {
  "album1" : "Pubblicato nel 1967, nonché l'unico album ad essere stato realizzato sotto la guida di Syd Barrett. " +
             "Viene considerato tra gli album che hanno maggiormente influenzato la storia del rock psichedelico. " +
             "L'album è composto da 11 brani per un totale di circa 42 minuti. Tra i brani più conosciuti possiamo trovare \"Interstellar Overdrive\". " +
             "Curiosità: durante il periodo di registrazione negli Abbey Road Studios, i Beatles stavano registrando Sgt. Pepper's Lonely Hearts Club Band.",
  "album2" : "Pubblicato nel 1968, la nascita dell'album coincise con il declino dello stato mentale di Barrett e " +
             "l'ingresso di Gilmour nel gruppo. Questo fu l'ultimo progetto a cui partecipò Barrett fino al suo allontanamento. " +
             "L'album è composto da 7 brani per un totale di circa 39 minuti. Tra le canzoni ricordiamo \"Set the Controls for the Heart of the Sun\". " +
             "Curiosità: sulla copertina dell'album sono raffigurati dei frammenti del fumetto \"Dottor Strange\"",
  "album3" : "Pubblicato nel 1969, l'album raccoglie le re-incisioni della colonna sonora del film More. " +
             "Il nome effettivo dell'album è \"Soundtrack from the Film More\", composto da 13 brani totali per una durata di circa 45 minuti totali. " +
             "Curiosità: la versione originale dell'album e le versioni rimasterizzate non presentano due brani che si trovano solamente nel film.",
  "album4" : "Pubblicato nel 1969, è un album doppio, ossia con due registrazioni: una dal vivo e l'altra in studio. " +
             "È uno dei primi album che iniziano a presentare sviluppi verso il nuovo genere chiamato \"progressive rock\". " +
             "L'album è composto da 9 brani (4 nel live album, 5 nello studio album), per una durata totale di circa 86 minuti. " +
             "Curiosità: La copertina dell'album è formata da un collage di più foto scattate nella stessa stanza, disposte una all'interno dell'altra, identiche tra loro ma con una rotazione dei membri del gruppo nelle varie posizioni, a giro.",
  "album5" : "Pubblicato nel 1970, l'album rappresenta il passaggio definitivo al progressive rock. Composto da 5 brani per una durata totale di 52 minuti circa. " +
             "La title track (brano omonimo all'album) inizialmente era un brano per 4 strumenti, ma successivamente fu adattato per un arrangiamento orchestrale. " +
             "Oltre al genere musicale, i Pink Floyd cercano di cambiare anche l'immagine d'impatto, abbandonando quell'effetto psichedelico dei primi album. " +
             "Curiosità: il nome Atom Heart Mother è nato per via di un articolo che parlava di una donna incinta, la quale aveva un pace-maker atomico.",
  "album6" : "Pubblicato nel 1971, la band prova una serie di esperimenti sonori che ispirano il brano centrale dell'album, \"Echoes\", una suite musicale di circa 24 minuti. " +
             "Questo brano è talmente lungo che la versione LP aveva un intero lato dedicato solo ad esso. Per la registrazione dell'album, abbandonarono gli Abbey Road Studios, poiché le " +
             "strumentazioni erano ritenute poco adatte per il loro obiettivo. L'album è composto da 6 brani per una durata totale di 47 minuti circa. " +
             "Curiosità: per la registrazione del brano \"Seamus\" viene \"ingaggiato\" un cane, cosa che rivedremo al \"Live at Pompeii\"",
  "album7" : "Pubblicato nel 1972, si tratta di una raccolta di brani scritti appositamente per la colonna sonora del film \"La Vallée\". " +
             "Dal disco è stato estratto come unico singolo Free Four, il primo dai tempi di See Emily Play ad essere stato trasmesso con una certa regolarità dalle radio statunitensi. " +
             "Poco prima della pubblicazione dell'album, i Pink Floyd ebbero una disputa con la casa produttrice del film, fondata dallo stesso regista. L'album è composto da 10 brani per una durata totale di 41 minuti circa. " + 
             "Curiosità: nel periodo in cui venne commissionata la produzione della colonna sonora, i Pink Floyd erano già impegnati nella creazione di The Dark Side of the Moon .",
  "album8" : "Pubblicato nel 1973, l'album rappresenta l'approdo di numerose sperimentazioni musicali che i Pink Floyd andavano da tempo operando sia nei loro concerti che nelle registrazioni. " +
             "Tra i temi affrontati nel concept album troviamo il conflitto interiore, il rapporto con il denaro, il trascorrere del tempo, la morte, il rapporto conflittuale con l'altro da sé e l'alienazione mentale. " +
             "Reputato uno dei migliori album della storia, rimasto per 741 settimane nella \"Top LPs & Tapes\", è composto da 10 brani per una durata di circa 43 minuti totali. " +
             "Curiosità: il titolo, poiché già usato da un altro gruppo, fu temporaneamente cambiato in \"Eclipse\", ma non molto tempo dopo venne ristabilito il titolo originario.",
  "album9" : "Prodotto nel 1975. Fu il secondo della loro carriera a essere un concept album, ideato e scritto interamente da Waters ed evoca il suo sentimento nel momento in cui la fraternità tra i membri della band era venuta a mancare. " +
             "Durante la registrazione dell'album, la band ricevette una visita del tutto inaspettata. Un uomo alquanto incognito e relativamente grasso, si presentò nello studio: pensavano fosse uno dello staff, ma poi riconobbero il vecchio " +
             "amico Syd. La copertina dell'album venne scattata ai Warner Bros. Studios di Los Angeles. Composto da 5 brani per una durata di circa 45 minuti totali. " +
             "Curiosità: durante lo scatto della fotografia, il vento soffiò nella direzione sbagliata facendo andare le fiamme in direzione opposta e bruciando i baffi di uno dei due stuntman.",
  "album10" : "Pubblicato nel 1977, è un concept album sulle condizioni socio-politiche del Regno Unito negli anni settanta. L'idea alla base del concept album è la rappresentazione delle classi sociali come animali, " +
              "similmente a quanto raccontato nel romanzo di George Orwell \"La fattoria degli animali\": i cani, aggressivi, come rappresentanti della legge, i maiali, dispotici e spietati, rappresentano i politici e la \"mandria insana e cieca\" le pecore. " +
              "L'album è composto da 5 brani, per un totale di 42 minuti circa. " +
              "Curiosità: durante gli scatti fotografici della copertina Algie, il maiale gonfiabile, si staccò dall'ancoraggio iniziando a volare nei cieli londinesi per poi scendere in una fattoria.",
  "album11" : "Pubblicato nel 1979, si tratta di un'opera incentrata sulla storia di una rockstar di nome Pink che, a seguito di vari traumi, arriva a costruirse un muro attorno a se per isolarsi dal mondo. " +
              "Durante la registrazione dell'album iniziarono a mostrarsi i primi segni di rottura all'interno del gruppo, tanto che Waters cacciò via Richard Wright, poiché quest'ultimo non volle rientrare dalla vacanza prima del dovuto. " +
              "Prima di registrarlo, Water presentò due progetti: \"Bricks in the Wall\" e \"The Pros and Cons of Hitch Hiking\". Il secondo divenne un album da solista di Waters nel 1984, l'altro invece divenne l'album definitivo " +
              "composto da 26 brani per circa 82 minuti totali diviso in due CD. Curiosità: tutto ciò che viene narrato nella storia di Pink, secondo molti critici, è attribuibile alla vita di Roger Waters.",
  "album12" : "Pubblicato nel 1983, è un altro concept album dei Pink Floyd, nonché l'ultimo con Roger Waters tra i membri del gruppo, il quale è autore e voce di tutti i brani dell'album. " +
              "Proprio per questo motivo e per il fatto che sull'album è presente \"By R. Waters, performed by Pink Floyd\", l'album è stato visto dalla critica come un album da solista di Waters e non del gruppo. " +
              "Alcuni brani presenti nell'album sono degli brani avanzati dal precedente album, tanto che doveva chiamarsi \"Spare Bricks\". Composto da 12 brani per un totale di 44 minuti circa. " +
              "Curiosità: per questo album non è stato organizzato alcun tour, visto il precedente successo del tour per \"The Wall\".",
  "album13" : "Pubblicato nel 1987, si tratta del primo album creato dopo l'abbandono di Waters. Durante la registrazione dell'album, Gilmour e Mason vinsero una causa contro Waters per l'uso del nome del gruppo. " +
              "In quegli anni si ha un riavvicinamento di Wright al gruppo, anche se il definitivo rientro avverrà con l'album successivo. I brani sono stati scritti da Gilmour, ma decise di affidarsi a dei compositori " +
              "esterni per la scrittura dei testi. Proprio per questo motivo, questa volta, l'album è visto come un album solista di Gilmour. Composto da 10 brani per una durata totale di circa 52 minuti. " +
              "Curiosità: la copertina dell'album, creata dallo stesso designer di Animals, riprende dei luoghi usati per alcune scene del film di The Wall.",
  "album14" : "Pubblicato nel 1994. Ufficialmente rientrato a far parte dei Pink Floyd, Wright e Gilmour collaborano per la produzione delle musice, mentre i testi furono stesi dalla moglie di Gilmour. " +
              "Il tema principale dell'album è l'incomunicabilità tra gli individui, problema vissuto dai componenti del gruppo tra divorzi personali e artistici. L'album, molto apprezzato dai fan, ma molto criticato per via di una certa ridondanza nello stile." +
              "L'album è composto da 11 brani dalla durata totale di circa 67 minuti." +
              "Curiosità: durante il tour del 1994, iniziò a circolare una presunta leggenda metropolitana chiamata Publius Enigma riguardo, appunto, un enigma che, una volta risolto, prometteva una ricompensa.",
  "album15" : "Pubblicato nel 2014, è il primo album pubblicato a distanza di vent'anni da \"The Division Bell\". È inoltre il primo album studio creato dopo la morte di Wright. " +
              "Viene definito come \"canto del cigno\" di quest'ultimo, in quanto l'album è basato su materiale inedito registrato con Wright durante le sessioni di \"The Division Bell\". " +
              "L'album è composto da 18 brani principalmente strumentali per una durata totale di circa 53 minuti." +
              "Curiosità: il titolo dell'album è il penultimo verso del brano \"High Hopes\", il quale chiude l'album precedente, quasi come a mantenere una continuità tra i due brani.",
}

//Fa comparire una sezione con le informazioni dell'album selezionato
function gestoreInfoAlbum(){
  try {
    nodoAlbum.style.display = "block";
    scriviMessaggio(nodoTitolo, copertine[this.id]);
    scriviMessaggio(nodoCorpo, info[this.id]);
  } catch (e) {
    alert("gestoreInfoAlbum " + e);
  }
}

//Semplice funzione per chiudere finestra delle informazioni
function gestoreChiudi(){
  try {
    nodoAlbum.style.display = "none";
  } catch (e) {
    alert("gestoreChiudi " + e);
  }
}

/**/const LARGHEZZA_FOTO = 700;
    var nodoDiscografia;
    var nodoAlbum;
    var nodoTitolo;
    var nodoCorpo;
/**/var nodiArea;
/**/var coordinate;
/**/var dimensioneFoto;
    var nodoChiudi;


/**/function gestoreLoad(){
/**/  try {
/**/    nodiArea = document.getElementsByTagName("area");
        nodoDiscografia = document.getElementById("discografia");
        nodoAlbum = document.getElementById("album");
        nodoTitolo = document.getElementById("titolo");
        nodoCorpo = document.getElementById("corpo");
        nodoChiudi = document.getElementById("chiudi");
/**/    coordinate = [];
/**/    for (var i = 0; i < nodiArea.length; i++){
/**/      var nodoArea = nodiArea[i];
        nodoArea.onclick = gestoreInfoAlbum;
        nodoChiudi.onclick = gestoreChiudi;
/**/      nodoArea.onmouseover = gestoreCursore;
/**/      coordinate[i] = nodoArea.coords.split(',');
/**/    }
/**/    dimensioneFoto = LARGHEZZA_FOTO;
/**/    window.onresize = gestoreRidimensiona;
/**/    gestoreRidimensiona();
/**/  } catch (e) {
/**/    alert("gestoreLoad " + e);
/**/  }
/**/} window.onload = gestoreLoad;
