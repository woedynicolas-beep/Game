/* ══ Dr. Christa Vogt, 49 — seine Ex-Frau ══════════════════════
   Bogen: Durchschauen → Selbstversuch → Sucht mit offenen Augen.
   Sie weiß von Anfang an, was du tust. Sie tut es trotzdem, und
   das ist ihre Entscheidung, die sie auch so benennt.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.christa_1 = {
  chapter:'Christa · Stufe 1', title:'Neugier', frau:'christa', stufe:1, mode:'beat',
  scene:{id:'praxis', palette:'cold', intensity:.16, figures:2, motion:'still'},
  text:[
    ['narr','Ihre Praxis liegt über der Apotheke am Markt. Du hast einen Termin gemacht, unter deinem echten Namen, und sie hat ihn angenommen, obwohl sie weiß, wer du bist.', {v:'talk', i:.14}],
    ['said','CHRISTA','Mund auf. — Sechser oben rechts, alte Amalgamfüllung, die kommt raus. Sonst haben Sie ein sehr gut gepflegtes Gebiss, Herr Reiter, was mir über Sie mehr verrät als alles andere.', {v:'talk', i:.16}],
    ['narr','Sie arbeitet vierzig Minuten. Sie redet dabei nicht. Als sie fertig ist, zieht sie die Handschuhe aus, setzt sich auf den Rollhocker und sieht dich an wie einen Befund.', {v:'close', i:.22}],
    ['beat','· · ·'],
    ['said','CHRISTA','Also. Sie waren am Sonntag bei Ralf am Tisch. Sie waren am Montag im Büro bei Sabine, zwei Stunden. Sie haben Andrea am Dienstag im Baumarkt zufällig getroffen, was deshalb bemerkenswert ist, weil Sie kein Haus besitzen, das man renovieren müsste.', {v:'close', i:.26}],
    ['said','CHRISTA','Steinbach hat sechstausend Einwohner. Hier ist nichts zufällig, und ich bin seit siebzehn Jahren geschieden und dadurch sehr gut informiert.', {v:'close', i:.28}],
    ['said','JONAS','Und was ist Ihre Diagnose?', {v:'close', i:.3}, 'mc'],
    ['said','CHRISTA','Meine Diagnose ist, dass Sie dabei sind, sich durch die weibliche Hälfte der Familie Hollmann zu arbeiten, und dass Sie glauben, das sei ein Plan. Es ist keiner. Es ist eine sehr teure Art, siebzehn zu bleiben.', {v:'close', i:.32}],
    ['narr','Sie steht auf und hält dir die Tür auf. An der Schwelle sagt sie den Satz, der die nächsten zwei Wochen entscheidet.', {v:'touch', i:.34}],
    ['said','CHRISTA','Ich bin nicht Teil dieser Familie. Ich bin seit 2009 raus. Falls Ihnen das mal jemand sagen sollte.', {v:'touch', i:.36}]
  ],
  choices:[
    {t:'»Dann bin ich morgen um acht bei Ihnen. Nicht als Patient.«', to:'hub',
     set:{kontrolle:2, bind:{christa:1}}, tag:'m'},
    {t:'»Sie haben mir gerade erzählt, wo ich diese Woche überall war. Das ist keine Warnung. Das ist Interesse.«', to:'hub',
     set:{rache:1, kontrolle:2, bind:{christa:1}, flags:{christa_erwischt:1}}, tag:'r'}
  ]
};

STORY.nodes.christa_2 = {
  chapter:'Christa · Stufe 2', title:'Übertritt', frau:'christa', stufe:2, mode:'beat',
  scene:{id:'praxis_abend', palette:'warm', intensity:.42, figures:2, motion:'pulse'},
  unlock:'christa_st2', adult:true,
  text:[
    ['narr','Sie lässt dich am Donnerstag nach Praxisschluss rein und schließt hinter dir ab. Sie hat eine Flasche Wein geöffnet und zwei Gläser hingestellt, und ihr eigenes ist schon halb leer.', {v:'talk', i:.32}],
    ['said','CHRISTA','Ich habe das durchdacht. Ich mache so etwas nicht ohne durchzudenken.', {v:'close', i:.36}],
    ['said','CHRISTA','Ergebnis: Sie benutzen mich, um an Ralf zu kommen. Ich benutze Sie, weil ich neunundvierzig bin, seit sechs Jahren allein schlafe und seit siebzehn Jahren wütend. Das ist ein ausgeglichenes Geschäft, und ausgeglichene Geschäfte sind die einzigen, die ich eingehe.', {v:'close', i:.4}],
    ['beat','· · ·'],
    ['narr','Sie küsst nicht wie jemand, der aus dem Bauch handelt. Sie küsst, als hätte sie eine Liste und arbeite sie ab — und dann, irgendwo in der Mitte, fällt die Liste weg und sie greift dir mit beiden Händen ins Haar.', {v:'kiss', i:.54}],
    ['narr','Der Behandlungsstuhl ist zu niedrig und der Rollhocker fährt weg, also geht ihr auf den Boden, und sie lacht zum ersten Mal an diesem Abend, weil das in keiner Version ihres Plans vorkam.', {v:'undress', i:.6}],
    ['narr','Sie hat einen Körper, den sie sich mit Disziplin erhalten hat, und sie weiß es. Sie legt sich zurück und beobachtet dich, während du sie ausziehst, mit einer Aufmerksamkeit, die fast unangenehm ist.', {v:'undress', i:.64}],
    ['narr','Und dann fällt diese Aufmerksamkeit in sich zusammen, als dein Mund sie erreicht. Sie versucht dreimal, etwas Analytisches zu sagen. Beim dritten Mal kommt nur noch ein Laut heraus.', {v:'oral_take', i:.78}],
    ['narr','Sie kommt hart und lautlos, mit durchgedrücktem Rücken und einer Hand, die den Rand der Behandlungseinheit umklammert, und danach liegt sie zwei Minuten reglos da und starrt an die Decke.', {v:'climax', i:.84}],
    ['said','CHRISTA','Das war … das war methodisch bemerkenswert.', {v:'after', i:.4}],
    ['beat','· · ·'],
    ['narr','Dann setzt sie sich auf und sieht dich an — und sieht an dir herunter, und ihre Miene verändert sich auf eine Art, die man bei ihr sonst nie sieht.', {v:'undress', i:.6}],
    ['said','CHRISTA','Ah. — Das ist also der Teil, den ich in meiner Rechnung nicht hatte.', {v:'undress', i:.64}],
    ['said','CHRISTA','Nicht heute. Ich muss das erst … ich muss darüber nachdenken, in welcher Reihenfolge das sinnvoll ist.', {v:'after', i:.5}],
    ['think','Sie denkt seit vierzig Jahren über alles nach. Es wird das Einzige sein, was sie nicht rettet.', {v:'after', i:.46}]
  ],
  choices:[
    {t:'»Denk drüber nach. Ich habe Zeit.«', to:'hub', set:{kontrolle:3, bind:{christa:1}}, tag:'m'},
    {t:'»Du denkst nicht drüber nach. Du hast Angst, dass es dir gefällt.«', to:'hub',
     set:{rache:2, bind:{christa:1}, flags:{christa_provoziert:1}}, tag:'r'}
  ]
};

STORY.nodes.christa_3 = {
  chapter:'Christa · Stufe 3', title:'Verlangen', frau:'christa', stufe:3, mode:'beat',
  scene:{id:'christa_haus', palette:'heat', intensity:.82, figures:2, motion:'pulse'},
  unlock:'christa_st3', adult:true,
  text:[
    ['narr','Sie ruft am Sonntagabend an. Sie sagt keinen Gruß und keine Erklärung, nur eine Adresse und »jetzt«, und legt auf, bevor du antworten kannst.', {v:'talk', i:.4}],
    ['narr','Ihr Haus liegt am Hang. Sie steht in der offenen Tür, im Bademantel, und ihr Gesicht sieht aus, als hätte sie einen Kampf verloren, an dem niemand beteiligt war außer ihr.', {v:'close', i:.5}],
    ['said','CHRISTA','Ich habe sechs Tage lang nicht geschlafen. Ich habe während der Arbeit daran gedacht. Ich habe <i>bei einer Wurzelbehandlung</i> daran gedacht.', {v:'close', i:.54}],
    ['said','CHRISTA','Ich bin neunundvierzig Jahre alt und ich benehme mich wie eine Siebzehnjährige, und ich bin zu dem Schluss gekommen, dass ich das nur loswerde, indem ich es hinter mich bringe.', {v:'kiss', i:.6}],
    ['think','Sie irrt sich. Sie weiß es wahrscheinlich sogar.', {v:'kiss', i:.62}],
    ['beat','· · ·'],
    ['narr','Sie macht es sich nicht leicht. Sie will es sehen, sie will es in der Hand haben, sie will genau wissen, worauf sie sich einlässt — und je länger sie schaut, desto weniger klinisch wird ihr Blick.', {v:'undress', i:.7}],
    ['narr','Sie nimmt ihn in den Mund, langsam, mit derselben Konzentration, mit der sie arbeitet, und irgendwann geht diese Konzentration in etwas anderes über, und sie stöhnt dabei selbst.', {v:'oral_give', i:.8}],
    ['beat','· · ·'],
    ['narr','Sie besteht darauf, oben zu sein. Kontrolle, sagt sie, sei die einzige Bedingung. Sie senkt sich Millimeter für Millimeter, mit geschlossenen Augen, und atmet durch die Zähne, und braucht vier Minuten für etwas, das sie sich anders vorgestellt hatte.', {v:'ride', i:.9}],
    ['said','CHRISTA','Oh Gott. — Oh <i>Gott.</i>', {v:'ride', i:.92}],
    ['narr','Und dann verliert sie die Kontrolle, auf die sie bestanden hat, und zwar vollständig. Sie kommt zweimal in zehn Minuten, beim zweiten Mal mit einem Geräusch, für das sie sich hinterher nicht entschuldigt, weil sie dazu nicht mehr in der Lage ist.', {v:'climax', i:.96}],
    ['narr','Später nimmst du sie von hinten, über die Lehne des Sofas, und sie sagt Dinge in einer Sprache, die zu einer Zahnärztin aus Steinbach nicht passt, und sie sagt sie laut, weil das Haus allein steht.', {v:'behind', i:.98}],
    ['beat','· · ·'],
    ['narr','Um zwei Uhr sitzt sie im Dunkeln auf der Kante und raucht ihre erste Zigarette seit 2011.', {v:'after', i:.32}],
    ['said','CHRISTA','Das war ein Fehler. Ich sage das nicht, um es zurückzunehmen. Ich sage es, weil ich es genau weiß und es trotzdem wieder tun werde.', {v:'after', i:.36}],
    ['said','CHRISTA','Und das, Jonas, ist die erste Sache in siebzehn Jahren, die mir wirklich Angst macht.', {v:'after', i:.4}]
  ],
  choices:[
    {t:'»Dann hab Angst. Ich hole dich trotzdem wieder.«', to:'hub',
     set:{rache:2, kontrolle:3, bind:{christa:1}}, tag:'r'},
    {t:'»Du kannst jederzeit aufhören. Ich sag dir das jetzt, damit du es später nicht behaupten kannst.«', to:'hub',
     set:{kontrolle:3, bind:{christa:1}, flags:{christa_fair:1}}, tag:'m'}
  ]
};

STORY.nodes.christa_4 = {
  chapter:'Christa · Stufe 4', title:'Abhängigkeit', frau:'christa', stufe:4, mode:'beat',
  scene:{id:'christa_haus', palette:'heat', intensity:.92, figures:2, motion:'pulse'},
  unlock:'christa_st4', adult:true,
  text:[
    ['narr','Sie hat Termine verlegt. Das ist bei Christa Vogt kein Detail, das ist ein Erdbeben — sie hat in neunzehn Jahren Praxis keinen einzigen Patienten verschoben.', {v:'close', i:.5}],
    ['narr','Diese Woche waren es sieben.', {v:'close', i:.52}],
    ['said','CHRISTA','Ich habe mir das Ganze aufgeschrieben. Wie einen Befund. Willst du hören, was rauskam?', {v:'talk', i:.5}],
    ['said','CHRISTA','Toleranzentwicklung. Dosissteigerung. Kontrollverlust. Fortsetzung trotz eindeutig schädlicher Folgen. — Das sind vier von sechs Kriterien, Jonas. Bei zwei wäre es eine Diagnose. Ich habe vier.', {v:'close', i:.56}],
    ['narr','Sie sagt es ohne Selbstmitleid. Sie sagt es fast stolz, so wie manche Menschen über eine besonders seltene Erkrankung sprechen, die sie selbst haben.', {v:'close', i:.58}],
    ['beat','· · ·'],
    ['narr','Sie zieht sich nicht mehr aus. Sie kommt inzwischen so an, dass es nichts auszuziehen gibt.', {v:'undress', i:.68}],
    ['narr','Sie braucht keine vier Minuten mehr. Sie braucht keine vier Sekunden. Ihr Körper hat gelernt, und er hat gründlicher gelernt als ihr Verstand.', {v:'enter', i:.88}],
    ['narr','Sie lässt sich jetzt Dinge gefallen, über die sie vor drei Wochen einen Vortrag gehalten hätte, und fragt danach, ob es das schon war.', {v:'hard', i:.96}],
    ['said','CHRISTA','Nicht aufhören. Bitte nicht aufhören. — Ich habe das Wort »bitte« seit meiner Scheidung nicht benutzt.', {v:'hard', i:.98}],
    ['narr','Als sie kommt, sagt sie deinen Namen, und danach sagt sie ihn noch dreimal, obwohl niemand gefragt hat.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Hinterher, mit dem Kopf auf deinem Bauch, erzählt sie dir endlich, warum sie 2009 gegangen ist.', {v:'after', i:.3}],
    ['said','CHRISTA','Er hat Lena geschlagen. Einmal, sie war acht. Ich bin am selben Abend raus.', {v:'after', i:.34}],
    ['said','CHRISTA','Ich habe es nie angezeigt, weil ich Angst um die Praxis hatte. Das ist die Wahrheit. Nicht Schutz des Kindes — Angst um die Praxis. Lena weiß es bis heute nicht.', {v:'after', i:.38}],
    ['said','CHRISTA','Es gibt einen Bericht aus der Kinderklinik Aachen, Februar 2009. Ich habe die Kopie. Und ich gebe sie dir, weil ich inzwischen an einem Punkt bin, an dem ich dir alles gebe, was du willst, und wir beide wissen das.', {v:'after', i:.44}]
  ],
  choices:[
    {t:'Du nimmst den Bericht.', to:'hub',
     set:{rache:4, kontrolle:3, bind:{christa:1}, flags:{christa_bericht:1, christa_done:1}}, tag:'r'},
    {t:'»Nein. Das gehört Lena, nicht mir. Erzähl es ihr.«', to:'hub',
     set:{kontrolle:4, bind:{christa:1}, flags:{lena_erfaehrt:1, christa_done:1}}, tag:'m'}
  ]
};
