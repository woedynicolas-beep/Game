/* ══════════════════════════════════════════════════════════════
   story-selina.js — Route B · Selina Vogt, 29
   Kais Freundin. Physiotherapeutin. Kommt aus einer kontrollierenden
   Beziehung — die Entscheidung zu gehen trifft sie selbst, vorher
   passiert nichts.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.s1 = {
  chapter:'Akt II · Selina', title:'Montag · Praxis Vogt',
  scene:{id:'praxis', palette:'green', intensity:.12, figures:2, motion:'still'},
  text:[
    ['narr','Die Schulter ist ein echter Vorwand. Seit der Sache im Treppenhaus 2009 sitzt rechts etwas fest, das kein Orthopäde je ganz gelöst hat. Du hast dir nur zum ersten Mal seit sechzehn Jahren einen Termin geben lassen.'],
    ['narr','Die Praxis liegt in einem Reihenhaus in der Lindenstraße. Sie führt sie allein: ein Behandlungsraum, eine Liege, eine Pflanze, die es geschafft hat.'],
    ['said','SELINA','Ziehen Sie das Hemd aus und setzen Sie sich. — Oh. Sie waren beim Treffen.'],
    ['narr','Ihre Finger finden die Stelle in vier Sekunden. Sie drückt, du zuckst, sie nickt.'],
    ['said','SELINA','Subscapularis. Das ist alt. Wie alt?'],
    ['said','JONAS','Sechzehn Jahre.','mc'],
    ['said','SELINA','Und was ist damals passiert?'],
    ['beat','· · ·'],
    ['narr','Du siehst im Spiegel, dass sie dich ansieht. Und du siehst noch etwas: den Handy­bildschirm auf ihrem Tresen, der alle paar Minuten aufleuchtet. Immer derselbe Name.']
  ],
  choices:[
    {t:'»Ihr Freund hat mich die Treppe runtergestoßen.«', to:'s2', set:{rache:2, flags:{selina_weiss:1}}, tag:'r'},
    {t:'»Ein Unfall in der Schule.« — Lass es.', to:'s2', set:{macht:1}, tag:'m'},
    {t:'Du sagst nichts, aber du siehst auf ihr Handy und dann in den Spiegel.', to:'s2', set:{naehe:1, macht:2, flags:{selina_gesehen:1}}, tag:'h'}
  ]
};

STORY.nodes.s2 = {
  chapter:'Akt II · Selina', title:'Mittwoch · zweite Sitzung',
  scene:{id:'praxis', palette:'green', intensity:.2, figures:2, motion:'drift'},
  text:[
    ['narr','Sie hat dir einen zweiten Termin gegeben, den du nicht gebraucht hättest. Diesmal redet sie.'],
    ['said','SELINA','Ich bin aus Bielefeld. Ich bin wegen ihm hergezogen, vor sechs Jahren. Die Praxis ist auf seinen Namen mitfinanziert, weil ich damals keine Sicherheiten hatte.'],
    ['narr','Sie sagt das ganz nebenbei, während sie Öl auf ihre Handflächen gibt, und dann merkt sie, was sie gesagt hat, und wird still.'],
    ['narr','Das Handy leuchtet auf. Sie sieht hin, ohne den Kopf zu drehen. Fünfzehn Minuten später leuchtet es wieder.'],
    ['said','SELINA','Er fragt nur, wo ich bin. Das ist nichts.'],
    ['said','SELINA','<i>(nach einer Pause)</i> Ich weiß, dass das nichts ist, wenn man es einmal sagt. Ich sage es nur gerade zum ersten Mal laut.'],
    ['think','Du bist hergekommen, um Kai Brenner etwas wegzunehmen. Und jetzt steht hier eine Frau, die dir gerade erzählt hat, dass sie selbst das Ding ist, das ihm gehört.']
  ],
  choices:[
    {t:'»Dann nimm ihm das weg. Komm heute Abend zu mir.«', to:'s3_druck', set:{rache:3, naehe:-2}, tag:'r'},
    {t:'»Was würdest du tun, wenn die Praxis dir allein gehörte?«', to:'s3_frage', set:{macht:3, naehe:2, flags:{selina_frage:1}}, tag:'m'},
    {t:'»Das ist nicht nichts, Selina.«', to:'s3_frage', set:{naehe:3, flags:{selina_frage:1}}, tag:'h'}
  ]
};

STORY.nodes.s3_druck = {
  chapter:'Akt II · Selina', title:'Die falsche Bewegung',
  scene:{id:'praxis', palette:'ash', intensity:.1, figures:2, motion:'still'},
  text:[
    ['narr','Ihre Hände halten an. Der Raum wird sehr klein.'],
    ['said','SELINA','Raus.'],
    ['said','SELINA','Ich habe Ihnen gerade erzählt, dass ich einem Mann gehöre, und Ihre erste Reaktion war, mich einem anderen anzubieten. Nämlich Ihnen.'],
    ['narr','Sie wischt sich die Hände an einem Handtuch ab, sehr gründlich, und hält dir die Tür auf.'],
    ['said','SELINA','Ich weiß, was Kai damals gemacht hat. Ich habe es letztes Jahr erfahren und ich habe seitdem nicht aufgehört, daran zu denken. Ich hätte Ihnen geholfen.'],
    ['said','SELINA','Sie haben gerade gut zwanzig Sekunden gebraucht, um genau derselbe zu sein wie er.'],
    ['beat','· · ·'],
    ['narr','Die Tür geht zu. Du stehst in der Lindenstraße, es ist halb sechs, und die Schulter tut weh wie seit Jahren nicht.']
  ],
  choices:[{t:'Gehen.', to:'hub', set:{ruf:-2, naehe:-1, flags:{selina_done:1, selina_verbrannt:1}}}]
};

STORY.nodes.s3_frage = {
  chapter:'Akt II · Selina', title:'Freitag · die Antwort',
  scene:{id:'praxis_abend', palette:'green', intensity:.26, figures:2, motion:'drift'},
  text:[
    ['narr','Sie ruft am Freitag um zehn nach acht an. Im Hintergrund hört man, dass sie im Auto sitzt.'],
    ['said','SELINA','Ich habe drei Tage lang nichts anderes gemacht, als Ihre Frage zu beantworten.'],
    ['said','SELINA','Ich habe heute Mittag mit meiner Bank gesprochen. Die Restsumme sind achtundzwanzigtausend. Ich kriege die Ablösung nicht allein, aber meine Schwester kriegt die Hälfte zusammen, und den Rest schaffe ich in vier Jahren.'],
    ['said','SELINA','Ich habe ihm gesagt, dass ich ausziehe. Vor einer Stunde. Ich habe es gesagt und er hat gelacht und dann hat er nicht mehr gelacht.'],
    ['narr','Eine Pause. Man hört einen Blinker.'],
    ['said','SELINA','Ich stehe vor Ihrem Hotel. Ich weiß nicht genau, warum.']
  ],
  choices:[
    {t:'»Komm rauf. Zimmer 214.«', to:'s4_entscheidung', set:{naehe:2}, tag:'h'},
    {t:'»Komm rauf — aber wenn du nur nicht allein sein willst, sag es, dann reden wir nur.«', to:'s4_entscheidung', set:{naehe:3, flags:{selina_klar:1}}, tag:'h'},
    {t:'»Ich zahle dir die achtundzwanzigtausend. Heute noch. Und ich will nichts dafür.«', to:'s4_entscheidung', set:{macht:3, naehe:3, flags:{selina_frei:1, selina_klar:1}}, tag:'m'}
  ]
};

STORY.nodes.s4_entscheidung = {
  chapter:'Akt II · Selina', title:'Zimmer 214 · 21:15',
  scene:{id:'suite', palette:'warm', intensity:.3, figures:2, motion:'still'},
  text:[
    ['narr','Sie kommt mit nassen Haaren, weil es seit einer Stunde regnet und sie das Auto zwei Straßen weiter abgestellt hat, damit niemand es vor dem Kronensaal sieht. In Bergheim denkt man so.'],
    ['narr','Sie setzt sich auf die Kante des Sessels, die Knie zusammen, und sieht sich im Zimmer um, als müsste sie sich merken, wo die Ausgänge sind.'],
    ['said','SELINA','Ich habe seit sechs Jahren mit niemandem anderen geschlafen und ich bin nicht hergekommen, um eine Statistik zu ändern.'],
    ['said','SELINA','Ich bin hergekommen, weil du mich in dieser Praxis gefragt hast, was <i>ich</i> will. Das hat mich seit sechs Jahren niemand gefragt. Es hat vierzig Stunden gedauert, bis ich eine Antwort hatte.'],
    ['narr','Sie steht auf. Sie geht die drei Schritte.'],
    ['said','SELINA','Die Antwort bist heute Abend du. Morgen ist die Antwort vielleicht eine ganz andere, und das musst du aushalten.'],
    ['said','JONAS','Das halte ich aus.','mc']
  ],
  choices:[
    {t:'Weiter.', to:'s5', tag:'x'}
  ]
};

STORY.nodes.s5 = {
  chapter:'Akt II · Selina', title:'Nach Feierabend',
  scene:{id:'sc_selina', palette:'heat', intensity:.78, figures:2, motion:'pulse', label:'Szene · Nach Feierabend'},
  unlock:'selina_sex', adult:true,
  text:[
    ['narr','Sie hat Hände, die den ganzen Tag fremde Körper lesen, und es dauert keine zwei Minuten, bis das hier kein Vergleich mehr ist, sondern eine Tatsache: Sie weiß, wo sie hinfassen muss, und sie weiß es besser als du.'],
    ['narr','Erst die Schulter. Sie legt beide Daumen an die alte Stelle, drückt, und du fluchst — und dann küsst sie dich mitten in den Fluch hinein und drückt weiter, und der Schmerz kippt in etwas anderes um, das du nicht benennen willst.'],
    ['said','SELINA','Sechzehn Jahre. Ich krieg das nicht in einer Nacht raus.'],
    ['said','SELINA','Aber ich kann dich heute Abend dazu bringen, dass es dir egal ist.'],
    ['beat','· · ·'],
    ['narr','Sie zieht ihr Shirt über den Kopf, ohne Umstände, und wirft es auf den Boden. Kein Blick nach unten, keine Entschuldigung für irgendetwas. Sie ist kleiner als sie im Kittel wirkt, kräftig in den Schultern, mit einer schmalen weißen Narbe über dem linken Knie.'],
    ['narr','Du legst sie auf den Rücken und nimmst dir Zeit — den Mund an ihrem Schlüsselbein, an der Innenseite ihres Arms, an der weichen Stelle unter den Rippen, und du merkst, wie sie jedes Mal kurz erstarrt, bevor sie sich fallen lässt. Als hätte sie verlernt, dass jemand langsam machen darf.'],
    ['narr','Als du tiefer gehst, greift sie nach dem Laken, dann nach deinem Nacken, dann nach nichts mehr. Sie ist leise — nicht aus Scham, sondern aus Gewohnheit, sechs Jahre dünne Wände — und irgendwann hörst du, wie sie diese Gewohnheit aktiv wegwirft: ein erstes, zu lautes Geräusch, das sie selbst überrascht, und dann eine Reihe davon, immer weniger kontrolliert, bis sie mit beiden Händen dein Haar hält und dich nicht mehr weglässt.'],
    ['narr','Sie kommt mit offenen Augen. Sie sieht dich dabei an, die ganze Zeit, und das ist das Intimste an diesem Abend.'],
    ['beat','· · ·'],
    ['narr','Später sitzt sie über dir und führt dich selbst, weil sie bestimmen will, wie schnell. Erst kaum. Dann tiefer. Ihre Hände liegen flach auf deiner Brust, und sie findet ihren Rhythmus so präzise wie jemand, der Körper beruflich versteht, und hält ihn, bis ihr beide zittert.'],
    ['narr','Gegen Ende beugt sie sich herunter, ihr nasses Haar an deinem Gesicht, und sagt einen einzigen Satz direkt an dein Ohr — und der Satz hat nichts mit Kai Brenner zu tun, gar nichts, und genau deshalb bleibt er.'],
    ['said','SELINA','Das hier gehört mir.']
  ],
  next:'s6'
};

STORY.nodes.s6 = {
  chapter:'Akt II · Selina', title:'Samstag · 06:20',
  scene:{id:'suite_after', palette:'cold', intensity:.16, figures:2, motion:'still'},
  text:[
    ['narr','Sie ist um zwanzig nach sechs schon angezogen, weil um acht der erste Patient kommt und sie ihn nicht absagen wird. Nicht für dich, nicht für Kai, für niemanden.'],
    ['said','SELINA','Ich ziehe Sonntag zu meiner Schwester. Er weiß es noch nicht, deshalb erzähl es nicht rum.'],
    ['narr','An der Tür bleibt sie stehen.'],
    ['said','SELINA','Er wird dich treffen wollen. Du weißt das, oder? Er hat eine Waffe im Schreibtisch, eine Schreckschusspistole, er hat sie mir mal gezeigt, um zu zeigen, dass er sie hat. Er ist kein Mörder. Er ist nur jemand, der nicht weiß, wie man verliert.'],
    ['said','SELINA','Und noch was: Er führt Buch. Über Dominik. Über Geld, das zwischen dem Studio und dem Autohaus hin- und herläuft, seit Jahren. Er hat es mir mal gezeigt, um mir zu zeigen, wie wichtig er ist.'],
    ['said','SELINA','Zweiter Ordner von rechts, im Büro über der Umkleide. Das ist alles, was ich dir gebe. Was du damit machst, will ich nicht wissen.']
  ],
  choices:[
    {t:'Zurück in die Woche.', to:'hub', set:{macht:2, flags:{selina_done:1, kai_buch:1}}}
  ]
};
