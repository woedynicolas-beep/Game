/* ══════════════════════════════════════════════════════════════
   story-ricarda.js — Route D · Ricarda Falk, 34
   Sie stand an der Tür und ist gegangen. Kein Rachepfad —
   der Gegenentwurf dazu.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.r1 = {
  chapter:'Akt II · Ricarda', title:'Dienstag · eine Nachricht',
  scene:{id:'phone', palette:'cold', intensity:.08, figures:1, motion:'still'},
  text:[
    ['narr','Sie schreibt am Dienstag um 23:41 Uhr. Man sieht an der Uhrzeit, wie lange sie überlegt hat.'],
    ['said','RICARDA','<i>Ich unterrichte in dem Gebäude, in dem das passiert ist. Seit neun Jahren. Ich gehe jeden Tag an dieser Tür vorbei. Wenn du willst, zeige ich dir, was daraus geworden ist. Wenn nicht, verstehe ich das und du musst nicht antworten.</i>'],
    ['beat','· · ·'],
    ['narr','Du siehst die Nachricht um 23:43 Uhr. Du antwortest um 01:12 Uhr.']
  ],
  choices:[
    {t:'»Morgen. 16 Uhr.«', to:'r2', set:{naehe:2}, tag:'h'},
    {t:'»Warum jetzt? Sechzehn Jahre lang kam nichts.«', to:'r2_hart', set:{rache:1, naehe:1}, tag:'r'},
    {t:'Du antwortest nicht. Du gehst trotzdem hin.', to:'r2', set:{macht:2, naehe:1}, tag:'m'}
  ]
};

STORY.nodes.r2_hart = {
  chapter:'Akt II · Ricarda', title:'Die Antwort',
  scene:{id:'phone', palette:'ash', intensity:.1, figures:1, motion:'still'},
  text:[
    ['said','RICARDA','<i>Weil ich dreimal angefangen habe und jedes Mal gedacht habe, ich mache es für mich und nicht für dich, und das stimmte auch. Es stimmt immer noch. Ich schreibe trotzdem, weil ich es sonst nie tue.</i>'],
    ['said','RICARDA','<i>16 Uhr, Seiteneingang. Ich lasse auf.</i>']
  ],
  next:'r2'
};

STORY.nodes.r2 = {
  chapter:'Akt II · Ricarda', title:'Mittwoch · Gymnasium Bergheim',
  scene:{id:'schule', palette:'ash', intensity:.14, figures:2, motion:'still'},
  text:[
    ['narr','Die Schule riecht immer noch gleich. Das ist das Erste, was dich umhaut — nicht der Anblick, der Geruch. Linoleum, Kreidestaub, kaltes Wasser.'],
    ['narr','Sie führt dich nicht zur Turnhalle. Sie führt dich in einen Raum im Neubau: zwölf Rechner, ein 3D-Drucker, an der Wand eine Pinnwand voller Platinen.'],
    ['said','RICARDA','Robotik-AG. Ich habe sie vor sechs Jahren gegründet. Vierzehn Kinder, davon neun Mädchen.'],
    ['said','RICARDA','Und bevor du es fragst: Ja. Ich habe daran gedacht, was du damals in diesem Waschbecken hattest.'],
    ['narr','Sie sagt es nicht, um etwas gutzumachen. Sie sagt es, weil es wahr ist und sie es leid ist, wahre Dinge für sich zu behalten.'],
    ['beat','· · ·'],
    ['narr','Dann geht sie doch noch mit dir zur Turnhalle. Der Waschraum ist renoviert, andere Fliesen, anderes Licht. Ihr steht beide in der Tür und keiner geht rein.'],
    ['said','RICARDA','Ich habe neun Jahre gebraucht, um da wieder reinzugehen. Ich erwarte nicht, dass du es heute tust.']
  ],
  choices:[
    {t:'Du gehst rein.', to:'r3', set:{naehe:3, flags:{waschraum:1}}, tag:'h'},
    {t:'»Nein. Der Raum kriegt mich nicht noch mal.«', to:'r3', set:{macht:2, naehe:1}, tag:'m'},
    {t:'»Und du? Was hast du in diesen neun Jahren gemacht, außer nicht reinzugehen?«', to:'r3', set:{rache:1, naehe:1, flags:{ricarda_hart:1}}, tag:'r'}
  ]
};

STORY.nodes.r3 = {
  chapter:'Akt II · Ricarda', title:'Donnerstag · ihre Küche',
  scene:{id:'kueche', palette:'gold', intensity:.24, figures:2, motion:'still'},
  text:[
    ['narr','Sie wohnt in der oberen Hälfte eines Zweifamilienhauses mit schiefen Böden. Es gibt Nudeln, es gibt zu viel Wein, und ihr redet bis halb zwei.'],
    ['said','RICARDA','Geschieden seit drei Jahren. Kein Drama, keine Geschichte, er war einfach jemand anders als gedacht, und ich auch.'],
    ['said','RICARDA','Ich war siebzehn und ich war verliebt in Dominik Herzog. Das ist der Teil, den ich dir noch nicht gesagt habe. Deshalb bin ich gegangen. Nicht aus Angst — aus Loyalität zu einem Jungen, der es nicht verdient hat.'],
    ['narr','Sie sieht dich an und wartet. Sie hat dir gerade das Schlimmste erzählt, was sie zu bieten hat, und sie hat es freiwillig getan.'],
    ['think','Du hast sechzehn Jahre lang geglaubt, sie sei einfach feige gewesen. Feigheit hättest du verzeihen können. Das hier ist schwerer.']
  ],
  choices:[
    {t:'»Danke, dass du es gesagt hast.«', to:'r4', set:{naehe:3, flags:{ricarda_vergeben:1}}, tag:'h'},
    {t:'»Und jetzt sitzt du hier und willst, dass ich dir das abnehme.«', to:'r4_bruch', set:{rache:2, naehe:-2}, tag:'r'},
    {t:'»Warte.« — Und du erzählst ihr, weshalb du wirklich in Bergheim bist. Alles.', to:'r4_alles', set:{naehe:4, flags:{ricarda_weiss_alles:1}}, tag:'h'}
  ]
};

STORY.nodes.r4_bruch = {
  chapter:'Akt II · Ricarda', title:'Die Tür',
  scene:{id:'kueche', palette:'ash', intensity:.1, figures:2, motion:'still'},
  text:[
    ['narr','Sie nickt langsam. Sie streitet nicht.'],
    ['said','RICARDA','Nein. Ich will, dass du es weißt. Was du mir abnimmst, ist deine Sache.'],
    ['narr','Sie steht auf und räumt die Teller ab, und ihre Hände sind ruhig.'],
    ['said','RICARDA','Ich habe nicht damit gerechnet, dass du mir verzeihst. Ich habe damit gerechnet, dass du mich anschreist. Das hier ist besser, ehrlich gesagt.'],
    ['said','RICARDA','Du findest allein raus, oder?'],
    ['beat','· · ·'],
    ['narr','Du gehst die schiefe Treppe runter. Du weißt, dass du gerade recht gehabt hast und dass das überhaupt nichts wert war.']
  ],
  choices:[{t:'Zurück in die Woche.', to:'hub', set:{flags:{ricarda_done:1, ricarda_verloren:1}}}]
};

STORY.nodes.r4_alles = {
  chapter:'Akt II · Ricarda', title:'Alles',
  scene:{id:'kueche', palette:'warm', intensity:.28, figures:2, motion:'still'},
  text:[
    ['narr','Du erzählst ihr die Mappe. Die Kreditlinie. Den Nordhang. Die Leasingverträge. Du erzählst ihr, dass du ihre Namen auswendig kennst und ihre Kontostände und die Namen ihrer Frauen, und dass du nach Bergheim gekommen bist, um jeden Einzelnen davon in Brand zu stecken.'],
    ['narr','Sie hört zu, bis du fertig bist. Sie unterbricht kein einziges Mal.'],
    ['said','RICARDA','Okay.'],
    ['said','JONAS','Okay?','mc'],
    ['said','RICARDA','Ich habe mich achtzehn Jahre lang gefragt, was mit dir passiert ist. Jetzt sitzt es an meinem Küchentisch und erzählt es mir selbst. Das ist mehr, als ich erwarten durfte.'],
    ['said','RICARDA','Ich sage dir nicht, dass du aufhören sollst. Das steht mir nicht zu und du würdest es auch nicht tun.'],
    ['narr','Sie schiebt ihr Glas weg und rückt näher.'],
    ['said','RICARDA','Ich sage dir nur: Heute Abend bin ich nicht Teil davon. Heute Abend bin ich einfach nur ich, und wenn du willst, bist du einfach nur du. Und morgen kannst du wieder der sein, der du geworden bist.']
  ],
  next:'r5'
};

STORY.nodes.r4 = {
  chapter:'Akt II · Ricarda', title:'Danach',
  scene:{id:'kueche', palette:'warm', intensity:.3, figures:2, motion:'still'},
  text:[
    ['narr','Sie atmet aus, und man sieht, wie etwas in ihren Schultern nachgibt, das seit sechzehn Jahren gehalten hat.'],
    ['said','RICARDA','Ich habe mir diesen Abend ungefähr vierhundertmal vorgestellt. In keiner Version hast du das gesagt.'],
    ['narr','Sie lacht und reibt sich das Gesicht, und als sie die Hände wegnimmt, ist sie rot um die Augen und lacht immer noch.'],
    ['said','RICARDA','Ich sollte dich jetzt nach Hause schicken. Das wäre das Vernünftige.'],
    ['said','JONAS','Wahrscheinlich.','mc'],
    ['said','RICARDA','Ich schicke dich nicht nach Hause.']
  ],
  next:'r5'
};

STORY.nodes.r5 = {
  chapter:'Akt II · Ricarda', title:'Die Entschuldigung',
  scene:{id:'sc_ricarda', palette:'warm', intensity:.62, figures:2, motion:'drift', label:'Szene · Die Entschuldigung'},
  unlock:'ricarda_sex', adult:true,
  text:[
    ['narr','Es beginnt im Türrahmen zwischen Küche und Flur und dauert von dort aus sehr lange, weil keiner von euch es eilig hat.'],
    ['narr','Sie küsst anders als die anderen. Nicht ungeduldig, nicht fordernd — sie küsst wie jemand, der etwas nachholt und weiß, dass man das nicht nachholen kann, und es trotzdem versucht. Ihre Hände liegen an deinem Gesicht, beide, und sie hält dich fest, als du versuchst, tiefer zu gehen.'],
    ['said','RICARDA','Langsam. Ich will mich dran erinnern können.'],
    ['beat','· · ·'],
    ['narr','Im Schlafzimmer ist das Fenster offen und es riecht nach nassem Garten. Sie zieht sich selbst aus, ohne Show, und legt sich hin und sieht zu dir hoch, und es gibt einen Moment, in dem ihr beide einfach nur schaut.'],
    ['narr','Sie ist vierunddreißig. Da ist eine Narbe über dem Bauchnabel von einer Operation, von der sie dir nicht erzählt hat, und ein Streifen Sonnenbrand am Nacken vom Wandertag, und sie versteckt nichts davon.'],
    ['narr','Du fängst an ihren Fußgelenken an und arbeitest dich hoch. Es dauert ewig. Sie fängt an zu reden, wie Leute reden, die nervös glücklich sind — über die Bettdecke, über den Nachbarn unten, über gar nichts — und irgendwann mitten im Satz hört sie auf, weil dein Mund an der Innenseite ihres Oberschenkels ist, und danach sagt sie sehr lange kein vollständiges Wort mehr.'],
    ['narr','Sie hält deine Hand dabei. Die ganze Zeit. Finger zwischen deinen Fingern, und als sie kommt, drückt sie so fest zu, dass es am nächsten Tag noch zu sehen ist.'],
    ['beat','· · ·'],
    ['narr','Als du in sie gehst, ist es kein Sturm. Ihr liegt euch gegenüber auf der Seite, Stirn an Stirn, ihr Bein über deiner Hüfte, und es bewegt sich kaum etwas — und genau das macht es fast unerträglich. Sie sagt deinen Namen einmal, ganz leise, wie eine Frage, auf die sie die Antwort schon kennt.'],
    ['narr','Sie weint dabei irgendwann, ohne aufzuhören, und schüttelt den Kopf, als du innehältst.'],
    ['said','RICARDA','Nicht aufhören. Es ist nichts Schlimmes. Es ist nur alles auf einmal.'],
    ['narr','Ihr schlaft zusammen ein, was du seit Jahren mit niemandem mehr getan hast, und du wachst um halb sechs auf, weil ein Vogel im nassen Garten unerträglich laut ist, und sie liegt mit dem Gesicht in deiner Halsbeuge und ist schwer und warm und vollkommen real.'],
    ['think','Und zum ersten Mal, seit du über die Stadtgrenze gefahren bist, denkst du eine Sekunde lang nicht an Dominik Herzog.']
  ],
  next:'r6'
};

STORY.nodes.r6 = {
  chapter:'Akt II · Ricarda', title:'Freitagmorgen',
  scene:{id:'kueche_morgen', palette:'green', intensity:.14, figures:2, motion:'still'},
  text:[
    ['narr','Sie muss um Viertel nach sieben in die erste Stunde. Sie macht Kaffee in einer Kanne, die schon 2010 alt ausgesehen hätte.'],
    ['said','RICARDA','Ich stelle keine Bedingungen. Ich stelle eine Frage und du musst sie heute nicht beantworten.'],
    ['said','RICARDA','Wenn du das durchziehst — und ich glaube, du ziehst es durch — dann ist in einem halben Jahr Dominik Herzog pleite, Kai Brenner hat zwei Standorte verloren und Tobias Lange sein Mandat. Drei Männer weniger in Bergheim.'],
    ['said','RICARDA','Und dann? Was steht dann an der Stelle, wo die sechzehn Jahre waren?'],
    ['narr','Sie stellt dir die Tasse hin und gibt dir einen Kuss auf die Schläfe und nimmt ihre Tasche.'],
    ['said','RICARDA','Schließ bitte ab, wenn du gehst.']
  ],
  choices:[
    {t:'Zurück in die Woche.', to:'hub', set:{flags:{ricarda_done:1, ricarda_bindung:1}}}
  ]
};
