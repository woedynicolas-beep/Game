/* ══════════════════════════════════════════════════════════════
   story-core.js — Figuren, Werte, Prolog, Akt I und Hub
   ══════════════════════════════════════════════════════════════
   Alle Figuren sind fiktiv. Alle sexuell aktiven Figuren sind
   mindestens 21 Jahre alt; Alter ist im Text ausgewiesen.
   ══════════════════════════════════════════════════════════════ */

window.STORY = window.STORY || {nodes:{}};

STORY.meta = {
  title: 'Bergheim Protokoll',
  version: '1.0',
  stats: {
    rache:  {label:'Rache',    color:'#c2374f', desc:'Wie weit du gehen willst.'},
    naehe:  {label:'Nähe',     color:'#4a9c9c', desc:'Was du noch zulässt.'},
    macht:  {label:'Einfluss', color:'#c9a24a', desc:'Was du in der Hand hast.'},
    ruf:    {label:'Ruf',      color:'#7d6fa8', desc:'Wie Bergheim über dich spricht.'}
  }
};

STORY.cast = {
  jonas:   {n:'Jonas Reiter',      a:34, d:'Du. Abi 2010. Gründer von Nordlicht Systems, letztes Jahr verkauft.'},
  dominik: {n:'Dominik Herzog',    a:35, d:'Der Rädelsführer von damals. Heute ein Autohaus kurz vor der Insolvenz.'},
  nadine:  {n:'Nadine Herzog',     a:33, d:'Dominiks Frau. Architektin. Seit vier Jahren mit gepacktem Koffer im Kopf.'},
  kai:     {n:'Kai Brenner',       a:34, d:'Dominiks Faust. Heute Inhaber von Brenner Athletics.'},
  selina:  {n:'Selina Vogt',       a:29, d:'Kais Freundin. Physiotherapeutin. Zählt still die Tage.'},
  tobias:  {n:'Tobias Lange',      a:35, d:'Der, der nie zugeschlagen und nie geholfen hat. Heute Stadtrat.'},
  yvonne:  {n:'Dr. Yvonne Kessler',a:36, d:'Tobias’ Frau. Oberärztin. Nimmt sich, was sie will, und sagt es vorher.'},
  ricarda: {n:'Ricarda Falk',      a:34, d:'Damals dein Schwarm. Sie hat zugesehen. Heute Lehrerin, geschieden.'}
};

/* ── Szenen-Galerie (was freigeschaltet werden kann) ───────── */
STORY.gallery = [
  {id:'sc_nadine',  t:'Zimmer 214',        w:'nadine_sex',  s:'Nadine Herzog, 33'},
  {id:'sc_selina',  t:'Nach Feierabend',   w:'selina_sex',  s:'Selina Vogt, 29'},
  {id:'sc_yvonne',  t:'Das Arrangement',   w:'yvonne_sex',  s:'Dr. Yvonne Kessler, 36'},
  {id:'sc_ricarda', t:'Die Entschuldigung',w:'ricarda_sex', s:'Ricarda Falk, 34'},
  {id:'sc_trio',    t:'Königinnen',        w:'ending_queens', s:'Finale'}
];

/* ══════════════════ PROLOG ══════════════════ */

STORY.nodes.start = {
  chapter:'Prolog', title:'Bergheim · Mai 2010',
  scene:{id:'flash_school', palette:'ash', intensity:.05, figures:3, motion:'still', label:'Rückblende'},
  text:[
    ['narr','Der Waschraum der Turnhalle riecht nach Chlor und kaltem Stein. Du bist siebzehn, du bist 1,68&nbsp;m, du wiegst neunundfünfzig Kilo, und drei Jungs stehen zwischen dir und der Tür.'],
    ['said','DOMINIK','Reiter. Du hast was vergessen.'],
    ['narr','Er hält deinen Rucksack hoch. Dein Heft, deine Zeichnungen, die Platine, an der du seit sechs Wochen sitzt. Kai lacht schon, bevor irgendetwas passiert ist. Kai lacht immer zuerst.'],
    ['narr','Tobias steht an der Tür. Er lacht nicht. Er sieht weg und bleibt stehen, und das ist schlimmer.'],
    ['beat','· · ·'],
    ['narr','Dominik dreht den Rucksack um. Alles fällt ins Waschbecken. Er dreht den Hahn auf.']
  ],
  choices:[
    {t:'Du greifst danach.', to:'p2', set:{rache:1}, tag:'r'},
    {t:'Du rührst dich nicht. Du wartest, bis es vorbei ist.', to:'p2', set:{macht:1}, tag:'m'}
  ]
};

STORY.nodes.p2 = {
  chapter:'Prolog', title:'Bergheim · Mai 2010',
  scene:{id:'flash_hall', palette:'ash', intensity:.12, figures:2, motion:'pulse'},
  text:[
    ['narr','Du erinnerst dich nicht an den Schlag. Du erinnerst dich an die Fliese an deiner Wange und daran, wie warm dein eigenes Blut auf kaltem Stein ist.'],
    ['narr','Du erinnerst dich an das Handy. Kai filmt. Er filmt immer.'],
    ['narr','Und du erinnerst dich an den Spalt in der Tür. Ricarda Falk, siebzehn, den Mund halb offen, die Hand schon am Rahmen — und wie sich die Tür wieder schließt.'],
    ['think','Sie hat nichts gesagt. Neun Jahre lang war das der Satz, mit dem du eingeschlafen bist.'],
    ['beat','· · ·'],
    ['narr','Das Video lief drei Tage lang durch die Stufe. Du bist zwei Wochen später zum Fernabitur gewechselt. Bergheim hat dich gehen lassen, ohne den Kopf zu heben.']
  ],
  next:'p3'
};

STORY.nodes.p3 = {
  chapter:'Prolog', title:'Hamburg · heute',
  scene:{id:'now_office', palette:'cold', intensity:.08, figures:1, motion:'still'},
  text:[
    ['narr','Sechzehn Jahre später sitzt du im vierzehnten Stock über der Elbe. Nordlicht Systems, vierhundert Leute, im März verkauft. Die Zahl auf dem Vertrag hat so viele Nullen, dass sie aufgehört hat, etwas zu bedeuten.'],
    ['narr','Auf dem Schreibtisch liegt ein Umschlag mit Bergheimer Poststempel. Cremefarbenes Papier, geprägte Schrift.'],
    ['said','EINLADUNG','<i>15 Jahre Abiturjahrgang 2010 — Wiedersehen im Hotel Kronensaal. Wir freuen uns auf jeden von euch.</i>'],
    ['narr','Jeden von euch. Du liest den Satz viermal.'],
    ['think','Du hast dreihundert Millionen Gründe, nie wieder nach Bergheim zu fahren. Und einen einzigen, es zu tun.']
  ],
  choices:[
    {t:'»Ich will, dass sie alles verlieren.«', to:'p4', set:{rache:3}, tag:'r'},
    {t:'»Ich will, dass sie mich ansehen müssen.«', to:'p4', set:{macht:2, rache:1}, tag:'m'},
    {t:'»Ich will endlich wissen, ob es mich noch interessiert.«', to:'p4', set:{naehe:2}, tag:'h'}
  ]
};

STORY.nodes.p4 = {
  chapter:'Prolog', title:'Was du dir vornimmst',
  scene:{id:'now_car', palette:'night', intensity:.14, figures:1, motion:'drift'},
  text:[
    ['narr','Drei Stunden Autobahn. Du hast eine Mappe dabei, die deine Assistentin »Marktrecherche Bergheim« genannt hat, weil du ihr nicht gesagt hast, was es wirklich ist.'],
    ['narr','Herzog Automobile: zwei Quartale in Folge negativ, eine Kreditlinie, die im November ausläuft.'],
    ['narr','Brenner Athletics: Leasingverträge über zwei Standorte, beide bei derselben Bank.'],
    ['narr','Tobias Lange, Stadtrat, Ausschuss für Stadtentwicklung: ein Bebauungsplan Nordhang, der viele Unterschriften braucht und wenig Aufmerksamkeit bekommt.'],
    ['beat','· · ·'],
    ['narr','Drei Männer. Drei Schwachstellen. Und jeder von ihnen hat jemanden neben sich, der längst weiß, dass etwas nicht stimmt.'],
    ['think','Du bist dir noch nicht sicher, was für ein Mann aus diesem Auto steigen wird.']
  ],
  choices:[
    {t:'Weiter nach Bergheim.', to:'a1_ankunft'}
  ]
};

/* ══════════════════ AKT I — DAS WIEDERSEHEN ══════════════════ */

STORY.nodes.a1_ankunft = {
  chapter:'Akt I · Das Wiedersehen', title:'Hotel Kronensaal · Freitag, 19:40',
  scene:{id:'hotel_lobby', palette:'gold', intensity:.16, figures:2, motion:'drift'},
  text:[
    ['narr','Der Kronensaal war früher das feinste Haus am Platz. Heute riecht der Teppich nach 1997 und die Kellner sind zu jung, um zu wissen, wer du bist.'],
    ['narr','Suite im dritten Stock. Du legst den Anzug aufs Bett, du stellst dich ans Fenster, und da unten liegt Bergheim: sechzehntausend Einwohner, ein Marktplatz, eine Turnhalle.'],
    ['narr','Um 20:00 Uhr gehst du runter. Der Saal ist schon halb voll. Und binnen elf Sekunden hat dich der erste Blick erfasst, und es geht los wie eine Welle: <i>Das ist doch — nein. Doch. Der Reiter.</i>'],
    ['said','EINE STIMME','Jonas? Jonas Reiter?! Mann, du siehst … anders aus.'],
    ['think','Ein Meter zweiundachtzig. Zwanzig Kilo mehr, davon das meiste bewusst antrainiert. Und ein Anzug, der mehr gekostet hat als Dominiks erstes Auto.']
  ],
  next:'a1_saal'
};

STORY.nodes.a1_saal = {
  chapter:'Akt I · Das Wiedersehen', title:'Der Saal',
  scene:{id:'hotel_ball', palette:'gold', intensity:.2, figures:3, motion:'drift'},
  text:[
    ['narr','Du siehst sie alle drei, bevor sie dich sehen. Das ist der einzige Vorsprung, den du brauchst.'],
    ['narr','<b>Dominik Herzog</b>, 35, am Tresen, zu laut, zu rot im Gesicht, ein Sakko, das an den Schultern zieht. Neben ihm eine Frau, die nicht in dieses Gespräch gehört und es weiß: dunkelblondes Haar, schmale Schultern, ein Blick, der den Raum nach Ausgängen absucht. <b>Nadine Herzog</b>, 33.'],
    ['narr','<b>Kai Brenner</b>, 34, in der Mitte, breiter denn je, eine Hand im Nacken seiner Freundin — nicht zärtlich, sondern wie man eine Tasche festhält. <b>Selina Vogt</b>, 29, lacht auf Kommando.'],
    ['narr','<b>Tobias Lange</b>, 35, am Stehtisch, Jackett ohne Krawatte, kommunalpolitisches Lächeln. Und neben ihm eine Frau, die als Einzige im Raum vollkommen entspannt wirkt: <b>Dr. Yvonne Kessler</b>, 36, Oberärztin, die dich bereits ansieht und keine Anstalten macht wegzuschauen.'],
    ['beat','· · ·'],
    ['narr','Und an der Fensterfront, allein, mit einem Glas Wasser: <b>Ricarda Falk</b>, 34.']
  ],
  choices:[
    {t:'Zu Dominik. Frontal. Sofort.', to:'a1_dominik', set:{rache:2}, tag:'r'},
    {t:'Erst den Raum lesen. Lass sie zu dir kommen.', to:'a1_warten', set:{macht:2}, tag:'m'},
    {t:'Zu Ricarda ans Fenster.', to:'a1_ricarda_first', set:{naehe:2}, tag:'h'}
  ]
};

STORY.nodes.a1_dominik = {
  chapter:'Akt I · Das Wiedersehen', title:'Am Tresen',
  scene:{id:'bar', palette:'warm', intensity:.24, figures:2, motion:'pulse'},
  text:[
    ['narr','Du stellst dich neben ihn. Du sagst nichts. Du wartest, bis er sich umdreht.'],
    ['said','DOMINIK','… ach du Scheiße. <i>Reiter.</i>'],
    ['narr','Er umarmt dich. Er <i>umarmt</i> dich, klopft dir auf den Rücken, riecht nach Gin und Angst.'],
    ['said','DOMINIK','Alter! Mensch, die Jungs haben erzählt, du hast irgendwas mit Software … hör zu, das damals, das war Schülerkram, das weißt du, oder? Das waren wir alle noch Idioten.'],
    ['said','JONAS','','mc'],
    ['narr','Du lässt die Pause stehen. Vier Sekunden. Fünf. Er redet weiter, weil er die Stille nicht aushält — und genau in diesem Moment verstehst du, dass er sich vor dir fürchtet und selbst noch nicht weiß, warum.'],
    ['said','DOMINIK','Das hier ist übrigens meine Frau. Nadine.'],
    ['narr','Sie gibt dir die Hand. Ihr Händedruck ist trocken und kurz und ihr Blick bleibt eine halbe Sekunde zu lang.'],
    ['said','NADINE','Nadine Herzog. — Sie sind der, von dem das Video war.'],
    ['narr','Der Tresen wird sehr still. Dominik lacht zu laut.']
  ],
  choices:[
    {t:'»Ja. Der bin ich.«', to:'a1_nach_dominik', set:{rache:1, naehe:1, flags:{nadine_kennt:1}}, tag:'r'},
    {t:'»Ich bin der, der Ihrem Mann im November die Kreditlinie kaufen könnte.«', to:'a1_nach_dominik', set:{macht:3, ruf:-1, flags:{nadine_kennt:1, dominik_gewarnt:1}}, tag:'m'},
    {t:'»Welches Video?« — und du lächelst.', to:'a1_nach_dominik', set:{macht:2, flags:{nadine_kennt:1}}, tag:'m'}
  ]
};

STORY.nodes.a1_warten = {
  chapter:'Akt I · Das Wiedersehen', title:'Die Fensterbank',
  scene:{id:'hotel_ball', palette:'gold', intensity:.18, figures:1, motion:'still'},
  text:[
    ['narr','Du nimmst dir ein Glas und stellst dich so, dass man dich sehen muss, um an die Bar zu kommen. Dann tust du eine Stunde lang nichts.'],
    ['narr','Es funktioniert schneller, als du gedacht hast.'],
    ['narr','Kai kommt als Erster — er kann nicht anders, er muss wissen, wer im Raum der Größte ist. Er drückt dir zu fest die Hand und sagt »Respekt, Mann« und meint »sag mir, dass wir okay sind«.'],
    ['narr','Tobias kommt als Zweiter, mit einer Visitenkarte und einem Satz über Standortentwicklung.'],
    ['narr','Dominik kommt gar nicht. Dominik sieht drei Stunden lang zu dir herüber und kommt nicht.'],
    ['beat','· · ·'],
    ['narr','Stattdessen kommt seine Frau.'],
    ['said','NADINE','Sie haben den ganzen Abend nicht getrunken und mit niemandem länger als vier Minuten geredet. Entweder Sie verkaufen etwas oder Sie sind wegen einer bestimmten Sache hier.'],
    ['said','JONAS','Und was von beidem hoffen Sie?','mc'],
    ['said','NADINE','<i>(nach einer Pause)</i> Das Zweite.']
  ],
  choices:[
    {t:'Weiter', to:'a1_nach_dominik', set:{flags:{nadine_kennt:1, nadine_neugier:1}}}
  ]
};

STORY.nodes.a1_ricarda_first = {
  chapter:'Akt I · Das Wiedersehen', title:'Ans Fenster',
  scene:{id:'window', palette:'cold', intensity:.1, figures:2, motion:'still'},
  text:[
    ['narr','Sie sieht dich kommen und stellt das Glas ab wie jemand, der seit Wochen eine Rede übt und merkt, dass sie jetzt stattfindet.'],
    ['said','RICARDA','Ich habe mir vorgenommen, dich nicht erst zu fragen, wie es dir geht.'],
    ['said','RICARDA','Ich stand an der Tür. Ich habe gesehen, was sie mit dir gemacht haben, und ich bin gegangen. Ich war siebzehn und ich hatte Angst, und beides stimmt und beides entschuldigt nichts.'],
    ['narr','Sie sagt es, ohne dich anzusehen. Dann sieht sie dich an.'],
    ['said','RICARDA','Ich erwarte nicht, dass du irgendwas damit machst.'],
    ['think','Sechzehn Jahre. Und sie ist die Einzige im Raum, die es von selbst ausspricht.']
  ],
  choices:[
    {t:'»Ich weiß nicht, was ich damit machen soll.« — ehrlich.', to:'a1_nach_dominik', set:{naehe:3, flags:{ricarda_offen:1}}, tag:'h'},
    {t:'»Das ist ein bisschen spät.« — und du gehst.', to:'a1_nach_dominik', set:{rache:2, naehe:-1}, tag:'r'},
    {t:'»Dann trink was mit mir und erzähl mir, was aus ihnen geworden ist.«', to:'a1_nach_dominik', set:{macht:2, naehe:1, flags:{ricarda_offen:1, ricarda_info:1}}, tag:'m'}
  ]
};

STORY.nodes.a1_nach_dominik = {
  chapter:'Akt I · Das Wiedersehen', title:'Nach Mitternacht',
  scene:{id:'suite', palette:'night', intensity:.15, figures:1, motion:'drift'},
  text:[
    ['narr','Um halb zwei liegst du in der Suite und siehst an die Decke. Auf dem Nachttisch: drei Visitenkarten und eine Serviette mit einer Handynummer, die dir jemand in die Jackentasche geschoben hat, ohne dass du gemerkt hättest, wer.'],
    ['narr','Du hast eine Woche eingeplant. Die Mappe liegt im Safe.'],
    ['beat','· · ·'],
    ['think','Du kannst morgen abreisen. Du kannst es auch nicht tun.'],
    ['narr','Du tust es nicht.']
  ],
  choices:[
    {t:'Die Woche in Bergheim.', to:'hub'}
  ]
};

/* ══════════════════ HUB ══════════════════ */

STORY.nodes.hub = {
  chapter:'Akt II · Die Woche', title:'Bergheim · deine Woche',
  hub:true,
  scene:{id:'town', palette:'night', intensity:.12, figures:0, motion:'drift'},
  text:[
    ['narr','Sechzehntausend Einwohner. Man begegnet sich hier, ob man will oder nicht — man muss es nur ein bisschen wahrscheinlicher machen.'],
    ['think','Du hast Zeit. Sie haben Gewohnheiten. Das ist kein fairer Kampf, und das ist der Punkt.']
  ],
  choices:[
    {t:'<b>Nadine.</b> Sie hat dich angesprochen, nicht umgekehrt.', to:'n1', hide:'flags.nadine_done', tag:'r'},
    {t:'<b>Selina.</b> Deine alte Schulterverletzung braucht angeblich Physiotherapie.', to:'s1', hide:'flags.selina_done', tag:'r'},
    {t:'<b>Yvonne.</b> Die Klinik gibt am Mittwoch einen Empfang.', to:'y1', hide:'flags.yvonne_done', tag:'r'},
    {t:'<b>Ricarda.</b> Sie hat dir geschrieben.', to:'r1', hide:'flags.ricarda_done', tag:'h'},
    {t:'<b>Es reicht.</b> Zieh die Sache zu Ende.', to:'f1', show:'tracks >= 2', tag:'m'}
  ]
};
