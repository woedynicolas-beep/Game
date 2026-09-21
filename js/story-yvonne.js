/* ══════════════════════════════════════════════════════════════
   story-yvonne.js — Route C · Dr. Yvonne Kessler, 36
   Tobias’ Ehefrau. Oberärztin. Offene Ehe, vertraglich geregelt.
   Sie stellt die Bedingungen, nicht Jonas.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.y1 = {
  chapter:'Akt II · Yvonne', title:'Mittwoch · Empfang Kreisklinik',
  scene:{id:'klinik', palette:'cold', intensity:.16, figures:3, motion:'drift'},
  text:[
    ['narr','Der Förderverein der Kreisklinik gibt einen Empfang für eine neue Herzkatheterstation. Du hast eine Einladung, seit du morgens sechzigtausend Euro überwiesen hast. In Bergheim geht so etwas schnell.'],
    ['narr','Tobias Lange hält die Begrüßungsrede. Er ist gut darin. Er ist beunruhigend gut darin.'],
    ['narr','Seine Frau steht am Rand, Champagner in der Hand, und macht keinen Hehl daraus, dass sie sich langweilt. Als du zu ihr trittst, dreht sie sich um, bevor du etwas sagst.'],
    ['said','YVONNE','Sechzigtausend, um an einem Mittwochabend in einem Klinikfoyer zu stehen. Das ist entweder Reue oder ein Plan.'],
    ['said','JONAS','Und was tippen Sie?','mc'],
    ['said','YVONNE','Ich tippe nicht. Ich lese Befunde. Sie beobachten meinen Mann seit vierzig Minuten und er hat Sie noch kein einziges Mal bemerkt, und <i>das</i> macht Ihnen mehr Freude als der Champagner.']
  ],
  choices:[
    {t:'»Ihr Mann hat zugesehen, wie man mir die Nase gebrochen hat.«', to:'y2', set:{rache:2, flags:{yvonne_weiss:1}}, tag:'r'},
    {t:'»Sie lesen gut. Lesen Sie weiter.«', to:'y2', set:{macht:3}, tag:'m'},
    {t:'»Warum stehen Sie hier drüben und nicht neben ihm?«', to:'y2', set:{naehe:2, macht:1}, tag:'h'}
  ]
};

STORY.nodes.y2 = {
  chapter:'Akt II · Yvonne', title:'Die Bedingungen',
  scene:{id:'klinik_flur', palette:'cold', intensity:.28, figures:2, motion:'still'},
  text:[
    ['narr','Sie führt dich aus dem Foyer in einen Flur, in dem das Licht auf Nachtschaltung steht, und lehnt sich gegen die Wand neben einem Feuerlöscher. Nichts an ihrer Haltung ist verlegen.'],
    ['said','YVONNE','Bevor Sie sich etwas zusammenreimen, das falsch ist, erzähle ich Ihnen, wie das hier funktioniert.'],
    ['said','YVONNE','Tobias und ich sind seit elf Jahren verheiratet und seit sieben Jahren offen. Das ist keine Notlüge und keine Krise, das ist eine Vereinbarung, die wir schriftlich haben, weil ich Ärztin bin und alles schriftlich habe. Er weiß, dass ich Affären habe. Ich weiß, dass er zu feige für welche ist.'],
    ['said','YVONNE','Ich sage Ihnen das, weil Männer wie Sie gern glauben, sie würden jemandem etwas wegnehmen. Sie nehmen mir nichts weg. Sie können mich haben, wenn ich Sie haben will, und das ist ein vollständiger Satz.'],
    ['beat','· · ·'],
    ['said','YVONNE','Meine Bedingungen: Kein Wort zu ihm. Nicht, weil ich mich schäme — weil ich nicht will, dass Sie mich als Nachricht an meinen Mann benutzen. Wenn Sie das vorhaben, sagen Sie es jetzt, dann gehe ich zurück zum Champagner und wir haben beide einen netten Abend gehabt.']
  ],
  choices:[
    {t:'»Ich habe genau das vorgehabt.« — Die Wahrheit.', to:'y3_ehrlich', set:{rache:1, naehe:2, macht:1, flags:{yvonne_ehrlich:1}}, tag:'h'},
    {t:'»Einverstanden.«', to:'y3_deal', set:{macht:2}, tag:'m'},
    {t:'»Ich will Sie. Alles andere in diesem Ort interessiert mich in diesem Moment nicht.«', to:'y3_deal', set:{naehe:2, macht:1}, tag:'h'}
  ]
};

STORY.nodes.y3_ehrlich = {
  chapter:'Akt II · Yvonne', title:'Die Wahrheit',
  scene:{id:'klinik_flur', palette:'cold', intensity:.3, figures:2, motion:'still'},
  text:[
    ['narr','Sie sieht dich an. Zehn Sekunden. Es fühlt sich an wie eine Untersuchung.'],
    ['said','YVONNE','Danke.'],
    ['said','YVONNE','Und jetzt das Interessante: Es ändert nichts. Nicht, weil mir egal ist, was Sie vorhatten — sondern weil ich es vorher wusste und Sie trotzdem hier rausgeführt habe.'],
    ['narr','Sie stellt das Glas auf den Feuerlöscher.'],
    ['said','YVONNE','Ich bin sechsunddreißig, ich arbeite zweiundsechzig Stunden die Woche, ich habe letzten Monat einen Sechzehnjährigen auf dem Tisch verloren, und mein Mann hat mich seit elf Monaten nicht angefasst. Sie sind nicht meine Rache an ihm. Sie sind mein Feierabend.'],
    ['said','YVONNE','Und ehrliche Männer sind selten genug, dass ich das belohne.']
  ],
  choices:[{t:'Weiter.', to:'y4', set:{flags:{yvonne_respekt:1}}, tag:'x'}]
};

STORY.nodes.y3_deal = {
  chapter:'Akt II · Yvonne', title:'Einverstanden',
  scene:{id:'klinik_flur', palette:'warm', intensity:.34, figures:2, motion:'pulse'},
  text:[
    ['said','YVONNE','Gut. Dann noch eine Sache, und dann höre ich auf zu reden.'],
    ['narr','Sie tritt einen Schritt näher, und zum ersten Mal an diesem Abend wird ihre Stimme leiser statt schärfer.'],
    ['said','YVONNE','Ich habe keine Lust auf Höflichkeit. Ich habe den ganzen Tag höflich sein müssen. Ich will, dass Sie mir sagen, was Sie wollen, in Worten, laut, und dann will ich, dass Sie es tun.'],
    ['said','YVONNE','Mein Auto steht hinten. Ich fahre.']
  ],
  choices:[{t:'Weiter.', to:'y4', tag:'x'}]
};

STORY.nodes.y4 = {
  chapter:'Akt II · Yvonne', title:'Das Arrangement',
  scene:{id:'sc_yvonne', palette:'heat', intensity:.92, figures:2, motion:'pulse', label:'Szene · Das Arrangement'},
  unlock:'yvonne_sex', adult:true,
  text:[
    ['narr','Ihr Haus liegt am Nordhang, Glas und Sichtbeton, und sie schaltet kein Licht an. Sie stellt die Schlüssel in die Schale, zieht die Schuhe aus und sagt, ohne sich umzudrehen:'],
    ['said','YVONNE','Oben. Zweite Tür.'],
    ['narr','Es ist nicht das Schlafzimmer. Es ist ihr Arbeitszimmer — Schreibtisch, Bücher, ein Fenster über die halbe Stadt — und als du das begreifst, steht sie schon in der Tür und knöpft ihre Bluse auf.'],
    ['said','YVONNE','In dem anderen Zimmer schläft er. Hier drin schlafe ich seit einem Jahr. Das hier ist meins.'],
    ['beat','· · ·'],
    ['narr','Sie ist nicht schüchtern und sie ist nicht sanft. Sie küsst wie jemand, der weiß, dass die Zeit knapp ist, und sie dirigiert ohne Umschweife: die Hand dorthin, fester, nein, <i>so</i>. Zweimal korrigiert sie dich. Beim dritten Mal nickt sie und sagt »ja«, und das »ja« klingt wie ein bestandener Test.'],
    ['narr','Du drehst sie um und drückst sie über die Kante des Schreibtischs, und sie lacht — ein kurzes, dunkles, überraschtes Lachen — und stützt sich mit beiden Handflächen auf dem Holz ab, zwischen Aktenordnern und einem Stethoskop, und spreizt die Beine, ohne dass jemand etwas sagen muss.'],
    ['narr','Der Rock geht hoch. Die Strumpfhose reißt, weil du ungeduldig bist, und sie sagt »egal« gegen die Tischplatte, bevor du dich entschuldigen kannst.'],
    ['narr','Sie ist schon heiß und offen, als du sie berührst, und sie stößt dir entgegen, als du in sie gehst — hart, tief, beim ersten Mal, und der Laut, den sie dabei macht, ist mehr Erleichterung als Lust.'],
    ['said','YVONNE','Nicht vorsichtig. Nicht heute.'],
    ['narr','Also nicht vorsichtig. Der Schreibtisch rückt zentimeterweise über das Parkett. Ein Becher kippt um und keiner von euch sieht hin. Ihre Finger krallen sich in die Kante, die Knöchel weiß, und sie treibt dich mit Worten an — präzise, unverschämte, medizinisch klare Worte, die du von niemandem sonst je gehört hast.'],
    ['narr','Sie kommt das erste Mal so, über den Tisch gebeugt, mit deiner Hand in ihrem Haar und ihrer eigenen zwischen ihren Beinen, weil sie nichts dem Zufall überlässt. Nicht mal das.'],
    ['beat','· · ·'],
    ['narr','Danach zieht sie dich auf den Teppich und nimmt sich die zweite Runde in ihrem eigenen Tempo: rittlings, aufrecht, die Hände auf deinen Schultern, und diesmal lässt sie sich Zeit. Sehr viel Zeit. Sie sieht dabei aus dem Fenster über die Lichter von Bergheim, und irgendwann schließt sie die Augen und ist einfach nur noch da, in ihrem Körper, in ihrem Zimmer, in ihrer Stunde.'],
    ['narr','Als es vorbei ist, bleibt sie sitzen, die Stirn an deiner, und atmet.'],
    ['said','YVONNE','So. Das war elf Monate.']
  ],
  next:'y5'
};

STORY.nodes.y5 = {
  chapter:'Akt II · Yvonne', title:'Donnerstag · 01:50',
  scene:{id:'office_night', palette:'night', intensity:.2, figures:2, motion:'still'},
  text:[
    ['narr','Sie sitzt im Bademantel auf dem Schreibtisch, an dem gerade noch andere Dinge passiert sind, und schiebt dir eine Mappe zu, die sie aus der untersten Schublade geholt hat.'],
    ['said','YVONNE','Ich habe keine Gewissensbisse, deshalb sage ich es direkt: Ich gebe dir das nicht aus Liebe und nicht aus Rache. Ich gebe es dir, weil ich es seit vier Monaten nicht mehr ertrage.'],
    ['narr','Bebauungsplan Nordhang. Und daneben ein Grundbuchauszug.'],
    ['said','YVONNE','Die Fläche, die im Ausschuss umgewidmet werden soll, gehört seit letztem Herbst zu sechzig Prozent einer GmbH in Luxemburg. Geschäftsführer ist ein Steuerberater aus Aachen. Und der ist der Cousin meines Mannes.'],
    ['said','YVONNE','Tobias sitzt im Ausschuss, der über den Wert dieser Fläche entscheidet. Er hat die Befangenheit nicht angezeigt. Das ist kein Graubereich, das ist ein Straftatbestand, und ich weiß es seit vier Monaten und habe geschwiegen, weil ich nicht die Frau sein wollte, die ihren Mann anzeigt.'],
    ['beat','· · ·'],
    ['said','YVONNE','Jetzt bin ich es lieber, als noch ein Jahr in diesem Haus zu schlafen. Nimm das, oder nimm es nicht — aber entscheide heute, denn morgen ziehe ich es zurück.']
  ],
  choices:[
    {t:'»Ich nehme es.«', to:'y6', set:{rache:2, macht:4, flags:{nordhang:1, yvonne_done:1}}, tag:'r'},
    {t:'»Nimm es selbst. Geh damit zur Staatsanwaltschaft — das gehört dir, nicht mir.«', to:'y6b', set:{naehe:3, macht:2, flags:{yvonne_selbst:1, yvonne_done:1}}, tag:'h'},
    {t:'»Ich nehme es. Und du bekommst dafür die Hälfte von allem, was danach mit der Fläche passiert.«', to:'y6', set:{macht:4, naehe:1, flags:{nordhang:1, yvonne_partner:1, yvonne_done:1}}, tag:'m'}
  ]
};

STORY.nodes.y6 = {
  chapter:'Akt II · Yvonne', title:'Die Mappe',
  scene:{id:'office_night', palette:'gold', intensity:.22, figures:2, motion:'still'},
  text:[
    ['narr','Sie schiebt die Mappe ganz herüber und zieht die Hand zurück, sehr bewusst, wie bei einer Übergabe im OP.'],
    ['said','YVONNE','Du kommst nicht wieder in dieses Haus. Wenn du mich sehen willst, schreibst du, und ich sage ja oder nein.'],
    ['said','YVONNE','Und Jonas — was auch immer du mit den drei vorhast: Sie haben dich nicht berühmt gemacht. Das hast du selbst getan. Vergiss das nicht, sonst hast du sie bis siebzig im Nacken.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub'}]
};

STORY.nodes.y6b = {
  chapter:'Akt II · Yvonne', title:'Ihre Unterschrift',
  scene:{id:'office_night', palette:'green', intensity:.2, figures:2, motion:'still'},
  text:[
    ['narr','Sie sieht auf die Mappe, dann auf dich.'],
    ['said','YVONNE','Das ist die unbequemste Antwort, die du geben konntest.'],
    ['narr','Sie zieht die Mappe zurück auf ihre Seite des Tisches und legt die flache Hand darauf.'],
    ['said','YVONNE','Ich mache es Montag. Mit meinem Namen drauf. Wenn ich es schon tue, dann soll niemand sagen können, ein Fremder aus Hamburg habe Bergheim aufgeräumt.'],
    ['said','YVONNE','Du kriegst dafür nichts von mir. Keine Informationen, keine Mithilfe, nichts. Nur einen sehr guten Donnerstag und mein Wort, dass ich es durchziehe.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub'}]
};
