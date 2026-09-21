/* ══ Lena Hollmann, 25 — seine Tochter ═════════════════════════
   Bogen: Kalkül → Kontrollverlust → sie übernimmt.
   Sie fängt das hier selbst an, und zwar als Geschäft. Von den
   fünf ist sie die Einzige, die am Ende mehr bekommt als du.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.lena_1 = {
  chapter:'Lena · Stufe 1', title:'Neugier', frau:'lena', stufe:1, mode:'beat',
  scene:{id:'baustelle', palette:'cold', intensity:.18, figures:2, motion:'still'},
  text:[
    ['narr','Sie steht auf der Baustelle Steinbach-Nord in Warnweste und Helm und schreit einen Polier an, der doppelt so alt ist wie sie. Sie hat recht, und der Polier weiß das, und deshalb hört er zu.', {v:'talk', i:.16}],
    ['said','LENA','Sie sind der Investor. — Bleiben Sie hinter der Absperrung, ich bin in vier Minuten fertig.', {v:'talk', i:.18}],
    ['narr','Sie ist fünfundzwanzig, sie hat einen Master aus Aachen, und sie hat in zwölf Monaten hier gelernt, dass ihr Nachname ihr Türen öffnet und ihr Geschlecht sie wieder zuschlägt.', {v:'close', i:.22}],
    ['beat','· · ·'],
    ['narr','Sie sucht dich nachmittags im Container auf. Sie macht die Tür zu. Sie setzt sich nicht.', {v:'close', i:.26}],
    ['said','LENA','Elf Millionen für achtundvierzig Prozent. So steht es im Entwurf. Das ist ein guter Preis für Sie und ein sehr schlechter für meinen Vater, und er hat es nicht gemerkt, weil er Ihren Namen gehört und nur an 1993 gedacht hat.', {v:'close', i:.3}],
    ['said','LENA','Ich habe es gemerkt. Ich habe es ihm gesagt. Er hat gesagt, ich soll mich um die Baustelle kümmern.', {v:'close', i:.32}],
    ['said','JONAS','Und jetzt erzählen Sie es mir.', {v:'close', i:.34}, 'mc'],
    ['said','LENA','Jetzt erzähle ich es Ihnen. Weil ich seit einem Jahr überlege, wie ich diese Firma von ihm bekomme, und Sie sind das Beste, was mir in diesem Jahr passiert ist.', {v:'touch', i:.36}],
    ['narr','Sie sagt das ohne zu blinzeln. Sie ist die Erste in dieser Stadt, die dir gegenüber vollkommen offen legt, was sie will.', {v:'touch', i:.38}]
  ],
  choices:[
    {t:'»Was schlagen Sie vor?«', to:'hub', set:{kontrolle:2, bind:{lena:1}}, tag:'m'},
    {t:'»Sie wissen, warum Ihr Vater mich damals in die Umkleide geschickt hat?«', to:'hub',
     set:{rache:2, bind:{lena:1}, flags:{lena_weiss:1}}, tag:'r'}
  ]
};

STORY.nodes.lena_2 = {
  chapter:'Lena · Stufe 2', title:'Übertritt', frau:'lena', stufe:2, mode:'beat',
  scene:{id:'container', palette:'warm', intensity:.44, figures:2, motion:'pulse'},
  unlock:'lena_st2', adult:true,
  text:[
    ['narr','Freitag, halb acht, die Baustelle ist leer. Sie hat dich hergebeten und sie hat den Bauwagen abgeschlossen, und sie legt einen Vertragsentwurf auf den Tisch, den sie selbst geschrieben hat.', {v:'talk', i:.34}],
    ['said','LENA','Sie kaufen sechzig Prozent, nicht achtundvierzig. Ich bekomme die Geschäftsführung, Sie bekommen den Aufsichtsrat. Mein Vater bekommt einen Beratervertrag und ein Büro ohne Telefon.', {v:'close', i:.38}],
    ['said','JONAS','Und was bekomme ich dafür, dass ich einer Fünfundzwanzigjährigen eine Firma übergebe?', {v:'close', i:.4}, 'mc'],
    ['narr','Sie sieht dich an. Sie überlegt nicht lange, weil sie es vorher schon überlegt hat.', {v:'close', i:.44}],
    ['said','LENA','Ich weiß genau, warum Sie in dieser Stadt sind, und es sind nicht die elf Millionen. Sie waren zweimal bei Sabine im Büro. Sie haben einen Termin bei meiner Mutter gehabt und sind vierzig Minuten geblieben, obwohl Sie ein perfektes Gebiss haben.', {v:'close', i:.46}],
    ['said','LENA','Ich bin nicht dumm und ich bin nicht meine Stiefmutter. Ich biete es Ihnen an, statt zu warten, bis Sie es versuchen. Dann ist es mein Zug und nicht Ihrer.', {v:'kiss', i:.52}],
    ['beat','· · ·'],
    ['narr','Sie küsst dich, und es ist am Anfang eine reine Willenserklärung — hart, zielgerichtet, ohne Zärtlichkeit. Sie hat sich vorgenommen, das durchzuziehen, und sie zieht es durch.', {v:'kiss', i:.58}],
    ['narr','Dann fasst du ihr in den Nacken und verlangsamst es, und sie macht einen überraschten Laut, weil das nicht in ihrem Entwurf stand.', {v:'kiss', i:.62}],
    ['narr','Sie ist fünfundzwanzig und sie ist es gewohnt, dass junge Männer in vier Minuten fertig sind. Als du sie auf den Zeichentisch setzt und beschließt, dass es länger dauern wird, verliert sie innerhalb von zwei Minuten ihren gesamten Verhandlungston.', {v:'hands', i:.72}],
    ['said','LENA','Warte — warte, so — <i>oh.</i>', {v:'hands', i:.76}],
    ['narr','Sie kommt mit den Fersen gegen die Tischkante und dem Rücken an der Blaupause für Bauabschnitt drei, und danach braucht sie eine halbe Minute, bis sie wieder weiß, wo sie ist.', {v:'climax', i:.84}],
    ['beat','· · ·'],
    ['narr','Sie öffnet deinen Gürtel — und hält mitten in der Bewegung an. Sie sagt ungefähr eine Sekunde lang gar nichts.', {v:'undress', i:.62}],
    ['said','LENA','Okay. Das ist … okay, das ändert meine Planung.', {v:'undress', i:.66}],
    ['said','LENA','Nicht hier. Nicht auf einem Zeichentisch mit einer Baustellenlampe. Ich will dafür ein Bett und ich will eine ganze Nacht.', {v:'after', i:.5}]
  ],
  choices:[
    {t:'»Dann besorg ein Bett.«', to:'hub', set:{kontrolle:2, bind:{lena:1}}, tag:'m'},
    {t:'»Du hast mir gerade eine Firma angeboten und lässt dich auf einem Zeichentisch anfassen. Was glaubst du, wer hier verhandelt?«', to:'hub',
     set:{rache:2, kontrolle:1, bind:{lena:1}, flags:{lena_gedemuetigt:1}}, tag:'r'}
  ]
};

STORY.nodes.lena_3 = {
  chapter:'Lena · Stufe 3', title:'Verlangen', frau:'lena', stufe:3, mode:'beat',
  scene:{id:'seeweg', palette:'heat', intensity:.84, figures:2, motion:'pulse'},
  unlock:'lena_st3', adult:true,
  text:[
    ['narr','Sie kommt am Samstag um acht und bleibt bis Sonntagmittag. Sie hat ihrem Vater gesagt, sie sei bei einer Kommilitonin in Münster.', {v:'close', i:.46}],
    ['narr','Sie ist nervös. Das ist neu — auf der Baustelle ist sie nie nervös, im Bauwagen war sie es nicht, und jetzt steht sie in deinem Schlafzimmer und weiß nicht, wohin mit den Händen.', {v:'close', i:.5}],
    ['said','LENA','Ich habe die ganze Woche nichts anderes gemacht, als mir das vorzustellen, und ich bin jedes Mal an derselben Stelle hängengeblieben.', {v:'kiss', i:.58}],
    ['beat','· · ·'],
    ['narr','Du gehst langsam, und du machst ihr klar, dass langsam nicht verhandelbar ist. Sie versucht zweimal, es zu beschleunigen. Beim dritten Mal gibt sie auf und lässt es geschehen, und in dem Moment, in dem sie aufgibt, verändert sich ihr ganzer Körper.', {v:'slow', i:.7}],
    ['narr','Du nimmst dir vierzig Minuten, bevor du überhaupt in sie gehst. Sie kommt in dieser Zeit zweimal, das zweite Mal mit deinem Namen und einem Fluch im selben Satz.', {v:'oral_take', i:.82}],
    ['beat','· · ·'],
    ['narr','Und dann sehr langsam, Zentimeter für Zentimeter, und sie krallt sich in deine Schultern und atmet flach und sagt »geht nicht, geht nicht« — bis es doch geht, und der Laut, den sie dabei macht, ist tiefer als ihre Sprechstimme.', {v:'enter', i:.9}],
    ['narr','Danach dauert es Stunden. Sie ist fünfundzwanzig und sie hat eine Ausdauer, an die keine der anderen herankommt, und sie nutzt jede Minute davon.', {v:'hard', i:.96}],
    ['said','LENA','Ich wusste nicht, dass das so geht. Ich dachte, die Leute übertreiben. Ich dachte wirklich, die <i>übertreiben.</i>', {v:'ride', i:.94}],
    ['narr','Sie kommt so oft, dass sie irgendwann aufhört mitzuzählen, und gegen vier Uhr morgens liegt sie quer über dem Bett, zittert und lacht abwechselnd und lässt dich nicht aufstehen.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Sonntagmittag, angezogen, an der Tür, ist sie wieder die von der Baustelle. Fast.', {v:'after', i:.34}],
    ['said','LENA','Der Vertragsentwurf steht. Sechzig Prozent, Geschäftsführung, Beratervertrag ohne Telefon.', {v:'after', i:.36}],
    ['said','LENA','Und — das ist der Teil, den ich eigentlich nicht sagen wollte — ich komme nächste Woche wieder, auch wenn du den Vertrag nicht unterschreibst.', {v:'after', i:.42}]
  ],
  choices:[
    {t:'»Ich unterschreibe. Diese Woche noch.«', to:'hub',
     set:{kontrolle:3, bind:{lena:1}, flags:{lena_vertrag:1}}, tag:'m'},
    {t:'»Ich unterschreibe, wenn ich fertig bin mit deinem Vater. Nicht vorher.«', to:'hub',
     set:{rache:3, kontrolle:2, bind:{lena:1}}, tag:'r'}
  ]
};

STORY.nodes.lena_4 = {
  chapter:'Lena · Stufe 4', title:'Abhängigkeit', frau:'lena', stufe:4, mode:'beat',
  scene:{id:'seeweg', palette:'heat', intensity:.94, figures:2, motion:'pulse'},
  unlock:'lena_st4', adult:true,
  text:[
    ['narr','Sie hat die Wohnung in Steinbach gekündigt und ist in ein Apartment sechs Minuten vom Seeweg gezogen. Sie hat es als Fahrzeitoptimierung begründet, gegenüber ihrem Vater, mit einer Karte.', {v:'close', i:.5}],
    ['said','LENA','Ich weiß genau, wie das aussieht. Ich habe Bauingenieurwesen studiert, ich kann eine Kausalkette lesen.', {v:'talk', i:.5}],
    ['said','LENA','Ich habe es trotzdem gemacht. Ich mache inzwischen sehr viele Dinge, von denen ich genau weiß, wie sie aussehen.', {v:'close', i:.54}],
    ['beat','· · ·'],
    ['narr','Sie kommt jetzt in der Mittagspause, in Arbeitshose und Sicherheitsschuhen, und geht danach zurück auf die Baustelle. Zweimal kam sie mit dem Helm noch in der Hand.', {v:'undress', i:.7}],
    ['narr','Sie hat aufgehört zu verhandeln. Sie fragt nicht mehr, sie schlägt nichts mehr vor, sie kommt und stellt sich hin und wartet, und das ist bei einer Frau, die auf einer Baustelle zweihundert Männer führt, das Bemerkenswerteste an der ganzen Sache.', {v:'oral_give', i:.84}],
    ['narr','Sie lässt sich gegen die Fensterfront drücken, mit Blick über den See, an einem Mittwoch um zwölf, und es ist ihr vollkommen egal, wer über den Weg kommt.', {v:'behind', i:.96}],
    ['said','LENA','Fester. — Ich habe um vier eine Abnahme mit dem Statiker, und ich will die ganze Zeit daran denken müssen.', {v:'behind', i:.98}],
    ['narr','Als sie kommt, geht ihr Kopf gegen die Scheibe, und sie bleibt danach eine Minute so stehen, mit der Stirn am kalten Glas, bevor sie wieder sprechen kann.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Sie zieht sich an, sie schnürt die Stiefel, sie ist in zwei Minuten wieder Bauleiterin. Und dann legt sie einen Umschlag auf den Tisch.', {v:'after', i:.34}],
    ['said','LENA','Vergabeunterlagen Gewerbegebiet Nord. Drei Ausschreibungen, bei denen mein Vater die Konkurrenzangebote vorher gesehen hat, weil der Bauamtsleiter sein Skatbruder ist.', {v:'after', i:.4}],
    ['said','LENA','Das reicht für ein Ermittlungsverfahren und es reicht, um ihn aus der Geschäftsführung zu kippen, ohne dass du einen Cent zahlst.', {v:'after', i:.44}],
    ['said','LENA','Ich bin seine Tochter. Ich bin mir völlig im Klaren darüber, was ich dir da gerade gebe.', {v:'after', i:.48}]
  ],
  choices:[
    {t:'Du nimmst die Unterlagen.', to:'hub',
     set:{rache:4, kontrolle:4, bind:{lena:1}, flags:{lena_vergabe:1, lena_done:1}}, tag:'r'},
    {t:'»Reich sie selbst ein. Mit deinem Namen. Sonst gehört dir die Firma nie wirklich.«', to:'hub',
     set:{kontrolle:5, bind:{lena:1}, flags:{lena_selbst:1, lena_done:1}}, tag:'m'}
  ]
};
