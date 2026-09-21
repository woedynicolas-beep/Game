/* ══════════════════════════════════════════════════════════════
   story-finale.js — Akt III und die sechs Enden
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.f1 = {
  chapter:'Akt III · Der Schnitt', title:'Samstag · 17:00',
  scene:{id:'suite', palette:'night', intensity:.24, figures:1, motion:'drift'},
  text:[
    ['narr','Du breitest es auf dem Bett aus wie ein Kartenspiel.'],
    ['narr','<b>Was du hast:</b>'],
    ['narr','{LEVERAGE}'],
    ['beat','· · ·'],
    ['narr','Heute Abend feiert Herzog Automobile vierzig Jahre. Blasmusik, Bratwurst, ein Zelt auf dem Hof, die halbe Stadt. Dominik hält um acht eine Rede. Tobias Lange überreicht eine Urkunde der Stadt. Kai schenkt aus.'],
    ['narr','Deine Anwältin hat den Schriftsatz fertig. Ein Anruf, und Montag um neun liegt alles bei der Staatsanwaltschaft Aachen und bei drei Redaktionen.'],
    ['think','Sechzehn Jahre. Und jetzt ist es ein Telefonat.']
  ],
  choices:[
    {t:'Du fährst hin.', to:'f2'},
    {t:'Du rufst an und fährst nach Hause. Du musst es nicht sehen.', to:'f_wahl', set:{macht:2}}
  ]
};

STORY.nodes.f2 = {
  chapter:'Akt III · Der Schnitt', title:'Samstag · Hof Herzog Automobile',
  scene:{id:'hof', palette:'gold', intensity:.3, figures:3, motion:'drift'},
  text:[
    ['narr','Du stehst hinten am Zelt, zwischen einem Gebrauchtwagen und einem Bierstand, und keiner erkennt dich sofort, weil hier niemand mit dir rechnet.'],
    ['narr','Dominik redet. Er ist gut, solange er ein Mikrofon hat. Er redet über seinen Vater, über Bergheim, über Durchhalten. Die Leute klatschen ehrlich.'],
    ['narr','Und dann sieht er dich. Mitten im Satz. Er verliert den Faden, findet ihn wieder, bringt die Rede zu Ende — aber er sieht nur noch dich.'],
    ['beat','· · ·'],
    ['narr','Zwanzig Minuten später steht er vor dir, hinter dem Zelt, wo es dunkel ist. Kai zwei Schritte hinter ihm, Tobias am Rand, unentschlossen wie 2010.'],
    ['said','DOMINIK','Was willst du, Jonas.'],
    ['narr','Zum ersten Mal in sechzehn Jahren sagt er deinen Vornamen.']
  ],
  choices:[
    {t:'»Ich will, dass du weißt, wer es war. Mehr nicht.« — Und du erzählst ihm alles, was du hast.', to:'f_wahl', set:{rache:2, macht:2}, tag:'r'},
    {t:'»Nichts. Ich wollte nur sehen, ob du immer noch der Größte im Hof bist.« — Und du gehst.', to:'f_wahl', set:{macht:3}, tag:'m'},
    {t:'»Sag es. Ein einziges Mal, ohne Publikum. Sag, was du getan hast.«', to:'f_gestaendnis', set:{naehe:2}, tag:'h'},
    {t:'Du schlägst zu.', to:'f_schlag', set:{rache:3, ruf:-3}, tag:'r'}
  ]
};

STORY.nodes.f_gestaendnis = {
  chapter:'Akt III · Der Schnitt', title:'Ohne Publikum',
  scene:{id:'hof_dunkel', palette:'ash', intensity:.2, figures:3, motion:'still'},
  text:[
    ['narr','Dominik sieht zu Kai. Kai sieht weg. Tobias ist plötzlich nicht mehr da.'],
    ['narr','Es dauert lange. Es dauert so lange, dass die Blasmusik einmal ganz aufhört und wieder anfängt.'],
    ['said','DOMINIK','… Wir haben dich in den Waschraum gedrängt und ich habe deine Sachen ins Becken gekippt und das Wasser aufgedreht. Und dann habe ich zugeschlagen. Zweimal. Und Kai hat es gefilmt und ich habe es weitergeschickt, an achtzehn Leute, und ich habe es lustig gefunden.'],
    ['said','DOMINIK','Und ich habe es danach sechzehn Jahre lang lustig gefunden, bis vor vier Minuten.'],
    ['narr','Er weint nicht. Er steht einfach nur da, und zum ersten Mal siehst du nicht den Jungen von damals, sondern einen fünfunddreißigjährigen Mann mit einem Bauch und einem Autohaus, das im November zumacht.'],
    ['said','DOMINIK','Was passiert jetzt?'],
    ['think','Genau das ist die Frage.']
  ],
  choices:[
    {t:'Weiter.', to:'f_wahl', set:{naehe:3, flags:{gestaendnis:1}}}
  ]
};

STORY.nodes.f_schlag = {
  chapter:'Akt III · Der Schnitt', title:'Zweimal',
  scene:{id:'hof_dunkel', palette:'heat', intensity:.5, figures:3, motion:'pulse'},
  text:[
    ['narr','Du triffst ihn am Kiefer. Er geht nicht sofort zu Boden, er taumelt gegen den Kotflügel eines Vorführwagens, und dann triffst du ihn ein zweites Mal, weil zweimal die Zahl war.'],
    ['narr','Kai ist da, bevor du dich umdrehen kannst, und wirft dich gegen das Zeltgestänge. Bierbänke kippen. Jemand schreit. Es dauert insgesamt elf Sekunden.'],
    ['beat','· · ·'],
    ['narr','Du sitzt auf dem Asphalt mit einer aufgeplatzten Braue, und um dich herum steht die halbe Stadt und filmt. Natürlich filmt sie.'],
    ['think','Sechzehn Jahre später, wieder auf dem Boden, wieder mit Kameras drauf. Der einzige Unterschied ist, dass du diesmal angefangen hast.']
  ],
  choices:[
    {t:'Weiter.', to:'f_wahl', set:{flags:{geschlagen:1}}}
  ]
};

/* ── Die Entscheidung ─────────────────────────────────────── */

STORY.nodes.f_wahl = {
  chapter:'Akt III · Der Schnitt', title:'Sonntag · 04:00 · der Anruf',
  scene:{id:'suite', palette:'night', intensity:.28, figures:1, motion:'drift'},
  text:[
    ['narr','Du sitzt angezogen auf der Bettkante. Auf dem Display steht der Name deiner Anwältin. Es ist vier Uhr morgens; sie hat gesagt, sie geht ran, egal wann.'],
    ['narr','Ein Anruf, und Montag um neun ist alles draußen.'],
    ['think','Du hast sechzehn Jahre gebraucht, um hierher zu kommen. Und jetzt merkst du, dass du nie darüber nachgedacht hast, was danach sein soll.']
  ],
  choices:[
    {t:'Anrufen. Alles. Jeden Einzelnen.', to:'end_verbrannt', tag:'r'},
    {t:'Anrufen — aber nur Tobias. Der mit dem Amt.', to:'end_spiegel', show:'flags.nordhang', tag:'m'},
    {t:'Nicht anrufen. Stattdessen kaufst du Montag die Kreditlinie.', to:'end_koenig', tag:'m'},
    {t:'Die Nummer löschen. Den Ordner verbrennen. Nach Hause fahren.', to:'end_absprung', tag:'h'},
    {t:'Den Frauen alles übergeben. Jeder ihre eigenen Akten. Und dann verschwinden.', to:'end_koeniginnen', show:'allies >= 3', tag:'x'}
  ]
};

/* ══════════════════ ENDEN ══════════════════ */

STORY.nodes.end_verbrannt = {
  chapter:'Ende', title:'Verbrannte Erde',
  ending:{id:'verbrannt', name:'Verbrannte Erde', sub:'Du hast alles bekommen, was du wolltest.'},
  scene:{id:'end_fire', palette:'heat', intensity:.55, figures:1, motion:'pulse'},
  text:[
    ['narr','Montag, 09:04 Uhr. Dienstag steht es in der Lokalzeitung, Donnerstag im überregionalen Wirtschaftsteil, weil eine Redakteurin merkt, dass hinter Bergheim eine Luxemburger GmbH steht.'],
    ['narr','Im März ist Herzog Automobile abgewickelt. Dominik bekommt vierzehn Monate auf Bewährung und darf nie wieder eine GmbH führen.'],
    ['narr','Kai verliert beide Standorte. Er zieht zu seiner Mutter nach Eschweiler und macht Personal Training auf Stundenbasis.'],
    ['narr','Tobias Lange tritt im Januar zurück. Das Verfahren wegen Vorteilsannahme läuft noch.'],
    ['beat','· · ·'],
    ['narr','Du sitzt im vierzehnten Stock über der Elbe und liest die Meldungen, wie man Börsenkurse liest.'],
    ['narr','Nadine schreibt dir im Juni einmal. Zwei Sätze, keine Vorwürfe. Du antwortest nicht, weil dir nichts einfällt, was nicht wie eine Rechnung klänge.'],
    ['narr','Und dann ist ein Dienstag im Oktober, und du merkst, dass du seit Wochen nicht mehr an Bergheim gedacht hast — und dass an der Stelle, an der sechzehn Jahre lang etwas war, jetzt gar nichts ist. Kein Frieden. Nur Platz.'],
    ['think','Du hast gewonnen. Niemand hat dir gesagt, dass Gewinnen so leise ist.']
  ]
};

STORY.nodes.end_koenig = {
  chapter:'Ende', title:'Der neue König',
  ending:{id:'koenig', name:'Der neue König', sub:'Du hast Bergheim nicht zerstört. Du hast es gekauft.'},
  scene:{id:'end_town', palette:'gold', intensity:.34, figures:1, motion:'drift'},
  text:[
    ['narr','Du rufst nicht die Staatsanwaltschaft an. Du rufst eine Bank an.'],
    ['narr','Im November übernimmst du die Kreditlinie von Herzog Automobile zum Nennwert. Im Februar die Leasingverträge von Brenner Athletics. Im April kaufst du vierzig Prozent an der Fläche am Nordhang und setzt dich neben Tobias Lange an den Tisch, auf dem seine Existenz liegt.'],
    ['narr','Du entlässt niemanden. Du machst nichts zu. Du unterschreibst jeden Monat, und jeden Monat müssen sie dich anrufen und fragen.'],
    ['beat','· · ·'],
    ['narr','Dominik Herzog nennt dich am Telefon »Herr Reiter«. Er sagt es ohne Ironie. Er sagt es so, wie man es zu jemandem sagt, von dem man abhängt.'],
    ['narr','Kai Brenner schickt dir zu Weihnachten eine Karte.'],
    ['narr','Auf der Weihnachtsfeier des Fördervereins der Kreisklinik steht Yvonne Kessler neben dir, sieht über den Saal und sagt leise:'],
    ['said','YVONNE','Weißt du, was das Bittere ist? Vor einem Jahr war hier ein Mann der Größte im Hof. Jetzt bist du es. Der Hof hat sich nicht geändert.'],
    ['think','Du gehst nach Hause und siehst lange in den Spiegel und fragst dich, in welchem Jahr genau du aufgehört hast, der Junge im Waschraum zu sein — und wann du angefangen hast, der zu sein, der drei Schritte vor der Tür steht.']
  ]
};

STORY.nodes.end_spiegel = {
  chapter:'Ende', title:'Der Spiegel',
  ending:{id:'spiegel', name:'Der Spiegel', sub:'Du hast den Richtigen getroffen.'},
  scene:{id:'end_court', palette:'cold', intensity:.24, figures:2, motion:'still'},
  text:[
    ['narr','Du gibst nur den Nordhang raus. Nur Tobias. Der, der nie zugeschlagen und nie geholfen hat — der, der an der Tür stand.'],
    ['narr','Dominik bekommt nichts von dir. Kai bekommt nichts von dir. Sie erfahren nie, dass du in der Hand hattest, was du in der Hand hattest.'],
    ['beat','· · ·'],
    ['narr','Im März tritt Tobias Lange zurück. Im Juni bekommt er elf Monate auf Bewährung und eine Geldstrafe, die er zahlen kann.'],
    ['narr','Er schreibt dir danach. Ein einziges Mal, handschriftlich, in einem Brief an deine Hamburger Adresse, die er sich irgendwo besorgt hat.'],
    ['said','TOBIAS','<i>Ich weiß, dass Sie es waren. Ich habe mich gefragt, warum ich und nicht Dominik. Und irgendwann habe ich es verstanden, und seitdem schlafe ich schlechter, als es das Verfahren rechtfertigen würde.</i>'],
    ['beat','· · ·'],
    ['narr','Herzog Automobile geht im November ohne dein Zutun in die Insolvenz. Es hätte deine Hilfe nie gebraucht. Das ist vielleicht die eigentliche Pointe: Sie waren die ganze Zeit dabei, sich selbst zu erledigen, und du bist dreihundert Kilometer gefahren, um dabei zu helfen.'],
    ['narr','Du kommst zwei Jahre später noch einmal nach Bergheim. Ein Robotik-Wettbewerb an einem Gymnasium, ein Preis, den eine Stiftung stiftet, die deinen Namen trägt und ihn klein druckt.'],
    ['narr','Eine Lehrerin führt dich durch den Neubau. Ihr redet über Platinen, nicht über 2010.'],
    ['think','Es ist nicht Frieden. Aber es ist die Sorte Unruhe, mit der man leben kann.']
  ]
};

STORY.nodes.end_absprung = {
  chapter:'Ende', title:'Der Absprung',
  ending:{id:'absprung', name:'Der Absprung', sub:'Du hast dich entschieden, nicht zu Ende zu bringen, wofür du gekommen bist.'},
  scene:{id:'end_road', palette:'green', intensity:.2, figures:2, motion:'drift'},
  text:[
    ['narr','Du löschst die Nummer um 04:11 Uhr. Dann sitzt du noch zwanzig Minuten da, weil du dir ziemlich sicher bist, dass du sie gleich wieder eingibst.'],
    ['narr','Du gibst sie nicht wieder ein.'],
    ['narr','Um halb sechs fährst du an den Wertstoffhof an der B57, der sonntags zu ist, und schiebst einen grauen Leitz-Ordner durch die Klappe für Altpapier wie ein Feigling. Es ist kein großer Moment. Es ist eine Klappe, die zufällt.'],
    ['beat','· · ·'],
    ['narr','Herzog Automobile macht im November trotzdem zu, ohne dich. Kai Brenner verliert im Jahr darauf einen Standort, ohne dich. Tobias Lange wird im Herbst mit sechzig Prozent wiedergewählt, und das ist der Teil, der dich am längsten wurmt.'],
    ['narr','Du hast nicht gewonnen. Du hast nur aufgehört.'],
    ['beat','· · ·'],
    ['narr','{ABSPRUNG_ENDE}'],
    ['think','Sechzehn Jahre waren es. Am Ende hat keine Entscheidung sie gelöscht. Sie sind nur langsam kleiner geworden als alles andere.']
  ]
};

STORY.nodes.end_koeniginnen = {
  chapter:'Ende', title:'Königinnen',
  ending:{id:'queens', name:'Königinnen', sub:'Du warst nie die Hauptfigur dieser Geschichte.'},
  unlock:'ending_queens',
  scene:{id:'sc_trio', palette:'gold', intensity:.4, figures:3, motion:'drift', label:'Szene · Königinnen'},
  text:[
    ['narr','Du rufst niemanden an. Stattdessen schickst du drei Umschläge, per Kurier, Montag früh.'],
    ['narr','An <b>Nadine Herzog</b> geht der Ordner aus ihrem eigenen Arbeitszimmer, dazu die Nummer einer Wirtschaftsstrafrechtlerin in Köln und ein Zettel: <i>Selbstanzeige zuerst. Dann die Scheidung. In der Reihenfolge.</i>'],
    ['narr','An <b>Selina Vogt</b> geht die Ablösesumme für ihre Praxis als Bankbestätigung, dazu eine Kopie von Kais Buchführung und ein Zettel: <i>Du brauchst das nicht zu benutzen. Du musst nur wissen, dass du es könntest.</i>'],
    ['narr','An <b>Dr. Yvonne Kessler</b> geht ihre eigene Mappe zurück, ungeöffnet weitergereicht, mit einem Zettel: <i>Du hattest recht. Es sollte deinen Namen tragen.</i>'],
    ['beat','· · ·'],
    ['narr','Was danach passiert, passiert ohne dich.'],
    ['narr','Nadine zeigt sich selbst an, geht straffrei aus und nimmt bei der Scheidung das Betriebsgrundstück. Sie baut darauf im übernächsten Jahr ein Gemeindezentrum, das aussieht wie die Zeichnung an ihrer Bürowand.'],
    ['narr','Selina löst die Praxis aus, wechselt das Namensschild und stellt zwei Leute ein. Kai Brenner schickt ihr im Sommer eine Nachricht, die sie nicht liest.'],
    ['narr','Yvonne Kessler geht am 14. Januar mit ihrem eigenen Namen zur Staatsanwaltschaft. Die Lokalzeitung nennt es »die mutigste Entscheidung des Jahres in diesem Kreis«, und sie lässt sich nicht fotografieren.'],
    ['beat','· · ·'],
    ['narr','Drei Männer verlieren alles in vierzehn Monaten, und keiner von ihnen erfährt je, dass du irgendetwas damit zu tun hattest. Für Bergheim bist du der Typ, der mal zum Klassentreffen kam und komisch früh gegangen ist.'],
    ['narr','Du bekommst genau eine Nachricht. Sie ist von Nadine und sie hat vier Wörter.'],
    ['said','NADINE','<i>Wir haben es selbst gemacht.</i>'],
    ['think','Sechzehn Jahre lang war die Geschichte, dass drei Jungs dir etwas genommen haben. Es hat eine Woche in Bergheim gedauert, um zu merken, dass sie nicht nur dir etwas genommen haben — und dass deine Rache am Ende die kleinste Sache in diesem Raum war.']
  ]
};
