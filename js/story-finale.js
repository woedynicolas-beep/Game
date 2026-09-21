/* ══ Akt III — Die Gesellschafterversammlung und die Enden ═════ */

STORY.nodes.f1 = {
  chapter:'Akt III', title:'Der letzte Abend',
  scene:{id:'seeweg', palette:'night', intensity:.3, figures:1, motion:'drift'},
  mode:'beat',
  text:[
    ['narr','Vierzehn Abende. Am Freitag um zehn tagt die Gesellschafterversammlung der Hollmann Bau, und danach ist die Sache entschieden.', {v:'now_file', i:.24}],
    ['narr','Du legst auf dem Tisch aus, was du hast.', {v:'now_file', i:.26}],
    ['narr','{LEVERAGE}', {v:'now_file', i:.3}],
    ['beat','· · ·'],
    ['narr','{BINDUNG}', {v:'now_town', i:.3}],
    ['think','Marlene hat einen Satz gesagt, den du seit zwei Tagen nicht loswirst. <i>In drei Wochen bist du weg. Wir nicht.</i>', {v:'now_town', i:.34}]
  ],
  choices:[
    {t:'Zur Versammlung.', to:'f2'}
  ]
};

STORY.nodes.f2 = {
  chapter:'Akt III', title:'Freitag · 10:00 · Sitzungsraum',
  scene:{id:'sitzung', palette:'cold', intensity:.34, figures:3, motion:'still'},
  mode:'beat',
  text:[
    ['narr','Der Sitzungsraum über der Werkhalle. Ralf am Kopfende, Andrea rechts, Lena am Ende des Tisches ohne Stimmrecht, Sabine am Protokoll. Werner ist gekommen, was seit vier Jahren nicht vorkam, und Marlene hat ihn hergefahren.', {v:'sitzung', i:.3}],
    ['said','RALF','Also. Tagesordnungspunkt eins, Kapitalerhöhung. Jonas, du hast das Wort.', {v:'sitzung', i:.32}],
    ['narr','Und dann sieht er dich an, und zum ersten Mal in einunddreißig Jahren siehst du etwas in seinem Gesicht, das du wiedererkennst — weil du es selbst dreihundertmal getragen hast.', {v:'sitzung_ralf', i:.4}],
    ['narr','Er hat Angst. Er weiß nicht genau wovor. Er weiß nur, dass jeder an diesem Tisch etwas weiß, das er nicht weiß.', {v:'sitzung_ralf', i:.44}],
    ['beat','· · ·'],
    ['narr','Du hast das Wort. Es ist still.', {v:'sitzung', i:.36}]
  ],
  choices:[
    {t:'Alles auf den Tisch. Vergabeunterlagen, Zwischenabschlüsse, der Bericht aus Aachen.',
     to:'end_verbrannt', tag:'r'},
    {t:'Nur das Geschäft: 60 %, Abberufung der Geschäftsführung, Beratervertrag ohne Telefon.',
     to:'end_aufsichtsrat', tag:'m'},
    {t:'Du gibst das Wort an Lena weiter.', to:'end_lena', show:'flags.lena_done', tag:'m'},
    {t:'»Ich ziehe mein Angebot zurück.« — Und du gehst.', to:'end_abgang', tag:'h'},
    {t:'Du legst gar nichts vor — und siehst zu, was die fünf tun.',
     to:'end_fuenf', show:'summe >= 13 && alleMin >= 2', tag:'x'}
  ]
};

/* ══════════════════ ENDEN ══════════════════ */

STORY.nodes.end_verbrannt = {
  chapter:'Ende', title:'Verbrannte Erde',
  ending:{id:'verbrannt', name:'Verbrannte Erde', sub:'Du hast alles bekommen, was du wolltest.'},
  scene:{id:'end_fire', palette:'heat', intensity:.5, figures:1, motion:'pulse'},
  mode:'all',
  text:[
    ['narr','Du redest neunzehn Minuten. Danach redet in diesem Raum sehr lange niemand mehr.'],
    ['narr','Im Februar wird Ralf Hollmann wegen wettbewerbsbeschränkender Absprachen bei Ausschreibungen angeklagt. Im Juni kommen Bilanzdelikte dazu. Das Urteil lautet auf zwei Jahre und drei Monate, davon acht Monate ohne Bewährung, und Hollmann Bau existiert zu diesem Zeitpunkt nicht mehr.'],
    ['narr','Der Bericht aus Aachen kommt nie vor Gericht. Er musste auch nicht — es hat gereicht, dass er in dem Raum lag und Lena ihn gelesen hat.'],
    ['beat','· · ·'],
    ['narr','Zweihundert Leute verlieren ihre Stelle. Darunter Sabine, die dreißig Jahre Rentenanspruch verliert, weil die Firma vorher abgewickelt wird. Darunter Andrea, deren dreißig Prozent nichts mehr wert sind. Darunter Lena, die ein Jahr braucht, um woanders anzufangen.'],
    ['narr','Sie haben dir alle geholfen. Keine von ihnen hat gefragt, was danach mit ihr passiert, und du hast es auch nicht gesagt.'],
    ['beat','· · ·'],
    ['narr','Du sitzt im Oktober im vierzehnten Stock über der Elbe und liest die Meldung aus dem Amtsgericht wie einen Börsenkurs.'],
    ['narr','Sabine schreibt dir einmal, im Mai. Vier Wörter, keine Vorwürfe: <i>War ich dafür da?</i>'],
    ['think','Du hast einunddreißig Jahre auf diesen Raum gewartet. Du warst neunzehn Minuten drin. Und alles, was du seitdem fühlst, ist, wie leise es geworden ist.']
  ]
};

STORY.nodes.end_aufsichtsrat = {
  chapter:'Ende', title:'Der Aufsichtsrat',
  ending:{id:'aufsicht', name:'Der Aufsichtsrat', sub:'Du hast ihn nicht zerstört. Du hast ihn gekauft.'},
  scene:{id:'end_town', palette:'gold', intensity:.34, figures:1, motion:'drift'},
  mode:'all',
  text:[
    ['narr','Kein Staatsanwalt, keine Zeitung. Nur ein Beschluss: sechzig Prozent an die Reiter Beteiligungs GmbH, Abberufung der Geschäftsführung, Beratervertrag über vier Jahre.'],
    ['narr','Andrea stimmt zu. Werner stimmt zu, weil Marlene ihm den Stift in die Hand gibt. Ralf stimmt als Einziger dagegen und verliert mit 82 zu 18.'],
    ['beat','· · ·'],
    ['narr','Er behält das Büro. Ohne Telefon, wie es im Vertrag steht — das war Lenas Formulierung, und sie hat darauf bestanden.'],
    ['narr','Zweimal im Jahr sitzt er im Aufsichtsrat und muss dir zuhören. Er sagt »Herr Reiter«. Er hat es sich nicht antrainiert, es kam von selbst, ungefähr im dritten Monat.'],
    ['beat','· · ·'],
    ['narr','Und dann sind da die fünf.'],
    ['narr','{BINDUNG_ENDE}'],
    ['narr','Auf der Weihnachtsfeier steht Marlene neben dir, sieht über den Saal und sagt leise:'],
    ['said','MARLENE','Vor einem Jahr war hier ein Mann der Größte im Hof, und alle haben getan, was er wollte. — Jetzt bist du es. Der Hof hat sich nicht geändert, Jonas. Nur der Mann.'],
    ['think','Du gehst nach Hause und siehst lange in den Spiegel und weißt nicht mehr genau, in welchem Jahr du aufgehört hast, der Junge in der Umkleide zu sein.']
  ]
};

STORY.nodes.end_lena = {
  chapter:'Ende', title:'Lenas Firma',
  ending:{id:'lena', name:'Lenas Firma', sub:'Du warst das Werkzeug, nicht die Hand.'},
  scene:{id:'end_site', palette:'green', intensity:.3, figures:2, motion:'drift'},
  mode:'all',
  text:[
    ['narr','Du schiebst ihr die Mappe zu und sagst: »Frau Hollmann hat das Wort.«'],
    ['narr','Sie redet vierzig Minuten. Sie hat es vorbereitet, seit über einem Jahr, und sie braucht dich für keinen einzigen Satz davon — nur für die Stimmen.'],
    ['narr','Andrea stimmt mit ihr. Werner stimmt mit ihr. Am Ende steht Lena Hollmann, fünfundzwanzig, als Geschäftsführerin der Firma, die ihr Urgroßvater gegründet hat, und ihr Vater sitzt am selben Tisch und begreift es erst am Nachmittag.'],
    ['beat','· · ·'],
    ['narr','Du hältst achtunddreißig Prozent und einen Sitz, den du zweimal im Jahr wahrnimmst. Es ist ein gutes Investment. Es ist nur nicht das, wofür du gekommen bist.'],
    ['narr','Lena kommt noch vier Monate zum Seeweg. Dann immer seltener, dann gar nicht mehr, und die letzte Nachricht ist sachlich und freundlich und endet mit ihrer Unterschrift, vollständig, mit Titel.'],
    ['beat','· · ·'],
    ['narr','Zwei Jahre später liest du, dass Hollmann Bau den Zuschlag für das Klinikum bekommen hat. Vierhundertzwanzig Leute inzwischen. Auf dem Foto steht sie mit Helm vor dem Rohbau und sieht aus, als würde ihr das alles gehören, und in gewisser Weise stimmt das.'],
    ['think','Einunddreißig Jahre lang war die Geschichte, dass Ralf Hollmann dir etwas genommen hat. Am Ende hat seine Tochter ihm alles genommen, und du hast dabei die Tür aufgehalten.']
  ]
};

STORY.nodes.end_abgang = {
  chapter:'Ende', title:'Der Abgang',
  ending:{id:'abgang', name:'Der Abgang', sub:'Du hast nicht zu Ende gebracht, wofür du gekommen bist.'},
  scene:{id:'end_road', palette:'cold', intensity:.22, figures:1, motion:'drift'},
  mode:'all',
  text:[
    ['narr','Du stehst auf, bevor du das Wort ergreifst, und sagst, dass du dein Angebot zurückziehst. Du gibst keine Begründung. Es gibt auch keine, die in diesem Raum irgendjemandem nützen würde.'],
    ['narr','Um halb zwölf bist du auf der B57 Richtung Norden.'],
    ['beat','· · ·'],
    ['narr','Hollmann Bau überlebt es nicht. Im März stellt Ralf Insolvenzantrag, ohne dein Zutun, aus genau den Gründen, die schon im Prospekt standen. Er hätte deine Hilfe dafür nie gebraucht.'],
    ['narr','Das ist die eigentliche Pointe: Er war die ganze Zeit dabei, sich selbst zu erledigen, und du bist dreihundert Kilometer gefahren, um dabei zu helfen.'],
    ['beat','· · ·'],
    ['narr','{ABGANG_ENDE}'],
    ['narr','Du hast nicht gewonnen. Du hast aufgehört. Das ist etwas anderes, und es hat drei Jahre gedauert, bis du den Unterschied nicht mehr als Niederlage gelesen hast.'],
    ['think','Einunddreißig Jahre waren es. Keine Entscheidung an diesem Freitag hat sie gelöscht. Sie sind nur langsam kleiner geworden als alles andere.']
  ]
};

STORY.nodes.end_fuenf = {
  chapter:'Ende', title:'Die Fünf',
  ending:{id:'fuenf', name:'Die Fünf', sub:'Du warst nie die Hauptfigur dieser Geschichte.'},
  unlock:'ending_fuenf',
  scene:{id:'sitzung', palette:'gold', intensity:.4, figures:3, motion:'drift'},
  mode:'all',
  text:[
    ['narr','Du sagst: »Ich habe nichts vorzulegen.« Und setzt dich wieder hin.'],
    ['narr','Zwölf Sekunden passiert nichts. Dann steht Andrea auf.'],
    ['beat','· · ·'],
    ['narr','Sie beantragt die Abberufung ihres Bruders aus der Geschäftsführung. Nach § 9 des Gesellschaftsvertrags, den sie vor drei Wochen zum ersten Mal in ihrem Leben gelesen hat, Satz für Satz, am Küchentisch.'],
    ['narr','Werner Hollmann, achtundsiebzig, hebt die Hand und macht seine zwölf Prozent geltend, die seit 1988 niemand mehr erwähnt hat. Marlene sitzt neben ihm und sieht geradeaus.'],
    ['narr','Sabine legt das Protokoll beiseite und die echten Zwischenabschlüsse auf den Tisch. Sie sagt dazu einen einzigen Satz: »Ich habe das elf Jahre gedeckt. Ab heute nicht mehr.«'],
    ['narr','Lena legt die Vergabeunterlagen daneben und nennt drei Aktenzeichen, die sie am Montag selbst einreichen wird, mit ihrem Namen darauf.'],
    ['narr','Und um Viertel nach elf geht die Tür auf und Christa Vogt kommt herein, die seit siebzehn Jahren keinen Raum mit diesem Mann geteilt hat, und legt eine Kopie aus der Kinderklinik Aachen vor ihre Tochter auf den Tisch.'],
    ['beat','· · ·'],
    ['narr','Du sitzt dabei und sagst nichts, weil dich niemand gefragt hat.'],
    ['narr','Ralf Hollmann verliert an diesem Vormittag alles, und zwar ohne dass ein einziger Satz über dich fällt. Für das Protokoll bist du ein Investor, der sein Angebot nicht vorgetragen hat.'],
    ['beat','· · ·'],
    ['narr','Was danach passiert, passiert ohne dich. Lena führt die Firma. Andrea verkauft ihre Anteile an Lena und fährt im Herbst zum ersten Mal in ihrem Leben allein nach Italien. Sabine reicht die Scheidung ein und behält das Haus. Christa und Lena reden zum ersten Mal seit siebzehn Jahren.'],
    ['narr','Marlene bleibt bei Werner, bis er im übernächsten Frühjahr stirbt, und erbt genug, um es nie wieder jemandem recht machen zu müssen.'],
    ['narr','Du bekommst genau eine Nachricht. Sie ist von Marlene und sie hat sieben Wörter.'],
    ['said','MARLENE','<i>Wir haben es selbst gemacht. Danke trotzdem.</i>'],
    ['think','Du hast fünf Frauen von dir abhängig gemacht und es für einen Sieg über Ralf Hollmann gehalten. In Wahrheit hast du fünf Menschen daran erinnert, dass sie etwas wollen dürfen — und an dem Tag, an dem es darauf ankam, haben sie es ohne dich gewollt.']
  ]
};
