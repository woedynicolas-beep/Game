/* ══════════════════════════════════════════════════════════════
   story-nadine.js — Route A · Nadine Herzog, 33
   Dominiks Ehefrau. Architektin. Handelt aus eigenem Antrieb.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.n1 = {
  chapter:'Akt II · Nadine', title:'Montag · Café am Markt',
  scene:{id:'cafe', palette:'cold', intensity:.14, figures:2, motion:'still'},
  text:[
    ['narr','Die Nummer auf der Serviette war ihre. Sie schreibt zuerst, um 9:12 Uhr, drei Wörter: <i>Café am Markt?</i>'],
    ['narr','Sie sitzt schon da, als du kommst. Kein Make-up, Haare hochgesteckt, ein Leinenhemd mit Farbspritzern am Ärmel. Vor ihr liegt eine Rolle Bauzeichnungen, die sie nicht öffnet.'],
    ['said','NADINE','Ich habe das Video gesehen. Vor zwei Jahren, auf Dominiks altem Laptop, in einem Ordner mit dem Namen »Schule«.'],
    ['narr','Sie rührt in einem Kaffee, den sie nicht trinkt.'],
    ['said','NADINE','Es waren vierzig Sekunden. Ich habe es einmal gesehen und danach drei Tage lang nicht mit ihm gesprochen, und er hat es nicht gemerkt. Das ist der Teil, über den ich seitdem nachdenke. Er hat es nicht <i>gemerkt.</i>'],
    ['said','JONAS','Warum erzählen Sie mir das?','mc'],
    ['said','NADINE','Weil ich seit vier Jahren nach einem Grund suche, der groß genug ist. Und weil Sie Freitag in diesen Saal gekommen sind wie jemand, der einen hat.']
  ],
  choices:[
    {t:'»Ich bin hergekommen, um ihn zu zerstören. Und Sie sind ein Weg dorthin.«', to:'n2', set:{rache:2, macht:1, flags:{nadine_ehrlich:1}}, tag:'r'},
    {t:'»Ich bin hergekommen, um mir das hier anzusehen. Mehr wusste ich nicht.«', to:'n2', set:{naehe:2, flags:{nadine_ehrlich:1}}, tag:'h'},
    {t:'»Ich bin wegen einer Übernahme hier.« — Und du lässt sie glauben, was sie will.', to:'n2', set:{macht:2, naehe:-1}, tag:'m'}
  ]
};

STORY.nodes.n2 = {
  chapter:'Akt II · Nadine', title:'Dienstag · Büro Falk & Herzog',
  scene:{id:'office', palette:'cold', intensity:.22, figures:2, motion:'drift'},
  text:[
    ['narr','Ihr Büro liegt im ersten Stock über einer Apotheke. Drei Zeichentische, eine Kaffeemaschine, an der Wand Entwürfe für ein Gemeindezentrum, das nie gebaut wurde.'],
    ['said','NADINE','Ich hatte ein eigenes Büro in Köln. Zwölf Leute. Dann wollte er zurück nach Bergheim, weil sein Vater das Autohaus nicht mehr konnte, und ich habe gesagt: zwei Jahre.'],
    ['narr','Sie zeigt mit dem Kinn auf die Wand.'],
    ['said','NADINE','Das war vor neun.'],
    ['beat','· · ·'],
    ['narr','Sie steht sehr nah, als sie dir die Zeichnung erklärt, und beide wisst ihr seit zehn Minuten, dass es nicht um die Zeichnung geht. Ihr Unterarm streift deinen. Sie zieht ihn nicht weg.'],
    ['said','NADINE','Ich will einmal etwas tun, das nicht vernünftig ist. Und ich will vorher wissen, ob Sie mich dafür benutzen.'],
    ['think','Sie fragt nicht, ob es passieren wird. Sie fragt, unter welchen Bedingungen.']
  ],
  choices:[
    {t:'»Ja. Und Sie benutzen mich zurück. Das ist der Deal.«', to:'n3', set:{rache:2, macht:2, flags:{nadine_deal:1}}, tag:'r'},
    {t:'»Nein. Wenn Sie das nur tun, um ihn zu treffen, gehe ich jetzt.«', to:'n3', set:{naehe:3, flags:{nadine_ehrlich:1}}, tag:'h'},
    {t:'Du sagst gar nichts. Du siehst sie nur an.', to:'n3', set:{macht:2}, tag:'m'}
  ]
};

STORY.nodes.n3 = {
  chapter:'Akt II · Nadine', title:'Dienstag · 22:40',
  scene:{id:'corridor', palette:'warm', intensity:.34, figures:2, motion:'pulse'},
  text:[
    ['narr','Sie steht um 22:40 Uhr vor Zimmer 214. Mantel über dem Arm, kein Koffer, kein Vorwand.'],
    ['said','NADINE','Er ist bei Kai. Donnerstags und dienstags ist er immer bei Kai, seit elf Jahren, und ich habe ihn seit elf Jahren nicht ein einziges Mal gefragt, was sie da machen.'],
    ['narr','Sie kommt herein. Sie legt den Mantel über den Sessel, sehr ordentlich, und dreht sich um.'],
    ['said','NADINE','Sag mir, wenn du es dir anders überlegst. Ich bin ein großes Mädchen, ich halte das aus. Aber sag es jetzt.'],
    ['said','JONAS','Ich überlege es mir nicht anders.','mc'],
    ['said','NADINE','Gut.']
  ],
  choices:[
    {t:'Weiter.', to:'n4', tag:'x'},
    {t:'»Warte.« — Du schenkst ihr etwas ein und ihr redet erst.', to:'n3b', set:{naehe:2}, tag:'h'}
  ]
};

STORY.nodes.n3b = {
  chapter:'Akt II · Nadine', title:'Zwei Gläser',
  scene:{id:'suite', palette:'warm', intensity:.26, figures:2, motion:'still'},
  text:[
    ['narr','Ihr sitzt eine Stunde auf dem Boden vor dem Bett, weil beide Sessel voller Kleidung liegen, und sie erzählt dir Dinge, die sie noch nie jemandem erzählt hat.'],
    ['said','NADINE','Weißt du, was das Schlimmste ist? Nicht, dass er laut wird. Er wird nie laut. Er <i>sieht</i> mich einfach nicht. Ich könnte mir die Haare abschneiden und er würde fragen, ob noch Bier da ist.'],
    ['narr','Irgendwann hört sie auf zu reden und legt ihre Hand auf deinen Nacken, und du merkst, dass ihre Finger zittern — nicht aus Angst, sondern weil sie seit Jahren niemanden mehr angefasst hat, der zurückschaut.'],
    ['said','NADINE','Sieh mich an. Bitte sieh mich einfach an.']
  ],
  choices:[
    {t:'Weiter.', to:'n4', set:{naehe:2, flags:{nadine_naehe:1}}, tag:'x'}
  ]
};

STORY.nodes.n4 = {
  chapter:'Akt II · Nadine', title:'Zimmer 214',
  scene:{id:'sc_nadine', palette:'heat', intensity:.86, figures:2, motion:'pulse', label:'Szene · Zimmer 214'},
  unlock:'nadine_sex', adult:true,
  text:[
    ['narr','Sie küsst dich zuerst. Das ist wichtig, und ihr wisst es beide — sie macht einen Schritt, hebt das Kinn und nimmt sich, was sie will, und du lässt sie.'],
    ['narr','Ihr Mund ist warm und ungeduldig, und der erste Kuss ist ungeschickt, weil sie zu schnell ist. Beim zweiten lacht sie in deinen Mund hinein, ein kurzer, überraschter Laut, und beim dritten hat sie beide Hände in deinem Hemd und zieht es aus der Hose.'],
    ['narr','Du drehst sie gegen die Wand neben dem Fenster. Sie geht mit, der Rücken gegen kalten Putz, und du knöpfst das Leinenhemd auf — nicht schnell. Knopf für Knopf, und mit jedem wird ihr Atem flacher.'],
    ['said','NADINE','Du machst das absichtlich langsam.'],
    ['said','JONAS','Ja.','mc'],
    ['said','NADINE','Hör nicht auf damit.'],
    ['beat','· · ·'],
    ['narr','Das Hemd fällt. Ihre Haut ist blass und warm, an den Rippen ein Muttermal, und sie hält den Atem an, als du den Mund an ihren Hals legst, dort, wo der Puls schlägt. Du bleibst da. Du spürst, wie ihr Herz gegen deine Lippen schlägt, schneller und schneller, während deine Hand über ihren Bauch nach unten wandert.'],
    ['narr','Sie sagt deinen Namen, als deine Finger den Bund ihrer Hose erreichen — nicht als Frage, sondern als Erlaubnis, als Bestätigung, als etwas, das sie schon zu lange nicht ausgesprochen hat.'],
    ['narr','Und dann keine Worte mehr. Nur ihr Rücken, der sich von der Wand löst. Der Stoff, der über ihre Hüften rutscht. Ihre Hand an deinem Handgelenk, die dich nicht wegzieht, sondern führt, fester, genau dorthin, und der lange, zerbrechende Laut, den sie in deine Schulter beißt, als du findest, was sie dir zeigt.'],
    ['narr','Sie kommt zum ersten Mal noch im Stehen, mit einer Hand in deinem Haar und der anderen flach gegen die Wand, und ihre Knie geben so plötzlich nach, dass du sie halten musst.'],
    ['beat','· · ·'],
    ['narr','Das Bett ist zu weich und das Laken zu kühl und nichts davon kümmert euch. Sie zieht dich über sich, die Beine um deine Hüften, und als du in sie stößt, presst sie die Stirn gegen deine Schläfe und atmet aus, als hätte sie seit Jahren die Luft angehalten.'],
    ['narr','Sie ist laut. Nicht gespielt laut — ehrlich laut, ungefiltert, die Art von Lautstärke, für die man ein leeres Haus braucht oder ein Hotelzimmer oder das Ende der Geduld. Sie sagt dir, was sie will. Sie sagt es zweimal, weil sie merkt, dass sie es sagen <i>darf.</i>'],
    ['narr','Später dreht sie dich auf den Rücken und setzt sich über dich, und da ist ein Moment, in dem sie einfach nur so sitzt, die Hände auf deiner Brust, und auf dich herabsieht mit einem Ausdruck, für den du kein Wort hast. Dann bewegt sie sich. Langsam zuerst, dann nicht mehr langsam, den Kopf im Nacken, und du hältst ihre Hüften und siehst zu, wie eine Frau sich zurückholt, was sie verlegt hatte.'],
    ['narr','Als sie zum zweiten Mal kommt, sagt sie keinen Namen. Weder deinen noch seinen. Das ist vielleicht das Ehrlichste an diesem ganzen Abend.']
  ],
  next:'n5'
};

STORY.nodes.n5 = {
  chapter:'Akt II · Nadine', title:'Mittwoch · 03:10',
  scene:{id:'suite_after', palette:'night', intensity:.2, figures:2, motion:'still'},
  text:[
    ['narr','Sie liegt auf dem Bauch quer über dem Bett und raucht aus dem Fenster, obwohl sie seit sechs Jahren aufgehört hat.'],
    ['said','NADINE','Ich habe nicht geweint. Das hatte ich mir vorgenommen und ich habe es geschafft, das rechne ich mir an.'],
    ['narr','Dann dreht sie sich um und sieht dich an, und ihr Gesicht ist ganz ruhig.'],
    ['said','NADINE','Jetzt der andere Teil. Ich weiß, warum du hier bist. Die Kreditlinie läuft im November aus, und Dominik hat im Frühjahr Fahrzeuge aus dem Bestand als Sicherheit doppelt gemeldet. Bei zwei Banken.'],
    ['said','NADINE','Das ist kein Fehler. Das ist eine Straftat. Und die Unterlagen liegen in einem Ordner in unserem Arbeitszimmer, weil er zu bequem ist, sie ins Büro zu tragen.'],
    ['beat','· · ·'],
    ['said','NADINE','Ich kann ihn dir geben. Ich will nur, dass du vorher weißt, was das heißt: Wenn du das benutzt, ist er weg. Nicht ruiniert — <i>weg.</i> Und ich hänge mit drin, weil ich seit zwei Jahren mit unterschreibe.'],
    ['said','JONAS','Warum würdest du das tun?','mc'],
    ['said','NADINE','Weil ich keinen Ausweg finde, der mich nicht auch etwas kostet. Und weil ich müde bin.']
  ],
  choices:[
    {t:'»Gib mir den Ordner.«', to:'n6_nehmen', set:{rache:3, macht:3, flags:{ordner:1}}, tag:'r'},
    {t:'»Nein. Ich zerstöre ihn nicht über dich. Ich finde einen anderen Weg.«', to:'n6_ablehnen', set:{naehe:3, macht:1, flags:{nadine_verschont:1}}, tag:'h'},
    {t:'»Gib ihn mir — und ich sorge dafür, dass du sauber rauskommst.«', to:'n6_deal', set:{macht:3, naehe:2, flags:{ordner:1, nadine_pakt:1}}, tag:'m'}
  ]
};

STORY.nodes.n6_nehmen = {
  chapter:'Akt II · Nadine', title:'Der Ordner',
  scene:{id:'suite', palette:'ash', intensity:.18, figures:1, motion:'still'},
  text:[
    ['narr','Sie bringt ihn am Donnerstagmorgen. Ein grauer Leitz-Ordner, an der Kante abgegriffen, und sie legt ihn auf den Tisch wie jemand, der eine Urne abgibt.'],
    ['said','NADINE','Das war’s dann wohl.'],
    ['narr','Sie küsst dich nicht zum Abschied. Sie nickt dir zu, einmal, und die Tür fällt ins Schloss, und du bleibst mit dem Ordner allein.'],
    ['think','Du hast bekommen, wofür du hergekommen bist. Es ist fünf Uhr morgens und du hast noch nie in deinem Leben etwas so Leichtes so schwer gefunden.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub', set:{flags:{nadine_done:1}}}]
};

STORY.nodes.n6_ablehnen = {
  chapter:'Akt II · Nadine', title:'Die andere Möglichkeit',
  scene:{id:'suite', palette:'warm', intensity:.2, figures:2, motion:'still'},
  text:[
    ['narr','Sie sieht dich sehr lange an.'],
    ['said','NADINE','Du bist dreihundert Kilometer gefahren, um ihm wehzutun, und jetzt sitzt hier die Waffe auf dem Tisch und du sagst nein.'],
    ['said','JONAS','Ich sage nein zu <i>der.</i> Nicht zu allem.','mc'],
    ['narr','Sie lacht, einmal, kurz und überrascht, und legt die Stirn gegen deine Schulter.'],
    ['said','NADINE','Ich habe Sonntag einen Termin bei einer Anwältin in Köln. Den hatte ich schon vor dir. Ich sage dir das nur, damit du dir nicht einbildest, du hättest mich gerettet.'],
    ['said','NADINE','Du warst der Beweis, dass ich noch lebe. Das ist nicht wenig. Aber es ist nicht Rettung.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub', set:{flags:{nadine_done:1}}}]
};

STORY.nodes.n6_deal = {
  chapter:'Akt II · Nadine', title:'Sauber raus',
  scene:{id:'office', palette:'gold', intensity:.24, figures:2, motion:'still'},
  text:[
    ['narr','Du rufst um sieben Uhr morgens eine Kanzlei in Hamburg an, die dich beim Verkauf begleitet hat. Um halb elf sitzt Nadine in einer Videokonferenz mit einer Wirtschaftsstrafrechtlerin, die ihr in achtzehn Minuten erklärt, wie Selbstanzeige funktioniert.'],
    ['said','NADINE','Und das kostet mich was?'],
    ['said','JONAS','Nichts. Ich brauche nur den Ordner zwei Tage vor euch.','mc'],
    ['narr','Sie schiebt ihn über den Tisch. Diesmal küsst sie dich doch zum Abschied — kurz, fest, sachlich, wie man einen Vertrag unterschreibt.'],
    ['said','NADINE','Dann sind wir Partner. Ich hasse, wie gut sich das anfühlt.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub', set:{flags:{nadine_done:1}}}]
};
