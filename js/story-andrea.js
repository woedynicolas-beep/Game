/* ══ Andrea Hollmann, 48 — seine Schwester ═════════════════════
   Bogen: Unsichtbarkeit → Aufblühen → sie kippt die Abstimmung.
   Von den fünf ist sie die, die am wenigsten erwartet hat und am
   meisten gewinnt. Ihre 30 % entscheiden die Firma.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.andrea_1 = {
  chapter:'Andrea · Stufe 1', title:'Neugier', frau:'andrea', stufe:1, mode:'beat',
  scene:{id:'garten', palette:'green', intensity:.14, figures:2, motion:'still'},
  text:[
    ['narr','Andrea wohnt im Elternhaus, in dem sie geboren wurde, und pflegt einen Garten, den außer ihr niemand betritt. Du triffst sie im Baumarkt, in der Abteilung für Rosendünger, und tust so, als wäre es Zufall.', {v:'talk', i:.12}],
    ['said','ANDREA','Sie suchen Dünger? Sie haben doch gar keinen Garten.', {v:'talk', i:.14}],
    ['said','JONAS','Stimmt. Ich suche jemanden, der mir erklärt, welchen ich brauchen würde.', {v:'close', i:.18}, 'mc'],
    ['narr','Sie lacht. Es ist ein echtes Lachen, kurz und überrascht, und man sieht ihr an, dass sie selbst nicht damit gerechnet hat.', {v:'close', i:.2}],
    ['beat','· · ·'],
    ['narr','Sie zeigt dir zwei Stunden lang ihren Garten. Dreiundvierzig Rosensorten, jede mit Namen, und bei der vierten merkt sie, dass du dir die Namen tatsächlich merkst.', {v:'talk', i:.22}],
    ['said','ANDREA','Ralf sagt, ich verschwende damit Zeit. Er sagt das seit dreißig Jahren, ungefähr einmal im Monat.', {v:'close', i:.26}],
    ['said','ANDREA','Ich habe aufgehört, ihm zu widersprechen. Irgendwann glaubt man das dann selber.', {v:'close', i:.28}],
    ['narr','Als du dich verabschiedest, gibst du ihr die Hand und hältst sie eine Sekunde länger, und Andrea Hollmann, achtundvierzig, wird rot wie eine Sechzehnjährige und dreht sich weg, damit du es nicht siehst.', {v:'touch', i:.34}],
    ['think','Niemand hat diese Frau seit sehr langer Zeit angesehen. Wahrscheinlich niemand jemals.', {v:'touch', i:.3}]
  ],
  choices:[
    {t:'»Ich komme Donnerstag wieder. Wenn Sie mich lassen.«', to:'hub',
     set:{kontrolle:2, bind:{andrea:1}}, tag:'m'},
    {t:'»Ihr Bruder hat sich sehr geirrt. Über Ihren Garten und über einiges andere.«', to:'hub',
     set:{rache:1, kontrolle:1, bind:{andrea:1}, flags:{andrea_schmeichel:1}}, tag:'r'}
  ]
};

STORY.nodes.andrea_2 = {
  chapter:'Andrea · Stufe 2', title:'Übertritt', frau:'andrea', stufe:2, mode:'beat',
  scene:{id:'andrea_kueche', palette:'warm', intensity:.38, figures:2, motion:'still'},
  unlock:'andrea_st2', adult:true,
  text:[
    ['narr','Donnerstag. Sie hat gekocht, für zwei, und den Tisch gedeckt wie für einen Feiertag. Sie hat sich die Haare gemacht. Sie hat ein Kleid an, das seit Jahren im Schrank hing.', {v:'talk', i:.3}],
    ['said','ANDREA','Ich weiß, dass das albern aussieht. Ich hatte einfach seit … ich weiß gar nicht mehr, wann zuletzt jemand zum Essen da war, der nicht zur Familie gehört.', {v:'close', i:.34}],
    ['beat','· · ·'],
    ['narr','Nach dem Essen, beim Abräumen, in der engen Küche, steht sie plötzlich sehr nah und sieht zu dir hoch und sagt gar nichts.', {v:'close', i:.42}],
    ['narr','Du küsst sie, und sie macht einen Laut, der fast wie ein Schluchzen klingt, und ihre Hände wissen zuerst überhaupt nicht, was sie tun sollen.', {v:'kiss', i:.5}],
    ['said','ANDREA','Ich war seit neunzehn Jahren mit niemandem. Ich sage Ihnen das lieber vorher.', {v:'kiss', i:.52}],
    ['said','ANDREA','Und ich sage »Sie«, obwohl Sie gerade Ihre Hand da haben. Das ist mir auch aufgefallen.', {v:'kiss', i:.54}],
    ['narr','Sie lacht darüber, mitten im Kuss, und irgendwo zwischen diesem Lachen und der Küchenzeile verliert sie ihre gesamte Scheu.', {v:'undress', i:.6}],
    ['narr','Du setzt sie auf die Arbeitsplatte und schiebst das Kleid hoch, und sie hält sich mit beiden Händen an der Kante fest und schließt die Augen und atmet, als wäre sie nach oben gelaufen.', {v:'hands', i:.72}],
    ['narr','Es dauert nicht lange. Sie entschuldigt sich sofort dafür, und du sagst ihr, sie soll das nie wieder tun.', {v:'climax', i:.8}],
    ['beat','· · ·'],
    ['narr','Danach sitzt sie neben dir auf dem Küchenboden, das Kleid noch halb oben, und sieht auf ihre Knie.', {v:'after', i:.4}],
    ['said','ANDREA','Ich habe die ganzen Jahre gedacht, dass ich einfach so ein Mensch bin. Einer, bei dem das nicht vorgesehen ist.', {v:'after', i:.44}],
    ['said','ANDREA','Das war ein Irrtum, oder? Das war die ganze Zeit einfach nur ein Irrtum.', {v:'after', i:.46}]
  ],
  choices:[
    {t:'»Ein sehr langer Irrtum. Und ab heute vorbei.«', to:'hub', set:{kontrolle:2, bind:{andrea:1}}, tag:'m'},
    {t:'»Wer hat dir das eingeredet?« — obwohl ihr beide die Antwort kennt.', to:'hub',
     set:{rache:2, bind:{andrea:1}, flags:{andrea_ralf:1}}, tag:'r'}
  ]
};

STORY.nodes.andrea_3 = {
  chapter:'Andrea · Stufe 3', title:'Verlangen', frau:'andrea', stufe:3, mode:'beat',
  scene:{id:'andrea_haus', palette:'heat', intensity:.76, figures:2, motion:'pulse'},
  unlock:'andrea_st3', adult:true,
  text:[
    ['narr','Sie hat sich zwischen Donnerstag und Sonntag verändert, und jeder in dieser Stadt sieht es. Sie war beim Friseur. Sie hat sich Kleider gekauft. Sie hat am Samstag im Supermarkt jemanden angelacht, der sich darüber wunderte.', {v:'close', i:.44}],
    ['said','ANDREA','Ralf hat gefragt, was mit mir los ist. Er hat gefragt, ob ich krank bin.', {v:'close', i:.46}],
    ['said','ANDREA','Neunundvierzig Jahre kennt er mich. Er hat es <i>krank</i> genannt.', {v:'close', i:.48}],
    ['beat','· · ·'],
    ['narr','Sie hat sich vorbereitet. Man merkt es daran, dass sie zum ersten Mal in ihrem Leben ohne Entschuldigung sagt, was sie will.', {v:'kiss', i:.56}],
    ['said','ANDREA','Ich will das richtig. Ganz. Ich bin achtundvierzig und ich habe das genau dreimal gehabt in meinem Leben und jedes Mal war es vorbei, bevor ich wusste, was passiert.', {v:'undress', i:.62}],
    ['narr','Sie zittert, als sie dich sieht, und es ist keine Angst. Sie greift danach und macht dabei ein Geräusch, für das es kein Wort gibt.', {v:'undress', i:.7}],
    ['said','ANDREA','Oh. Oh, du lieber Himmel.', {v:'undress', i:.72}],
    ['beat','· · ·'],
    ['narr','Du gehst so langsam, wie du nie bei jemandem gegangen bist. Es dauert zwanzig Minuten, bis sie dich ganz aufgenommen hat, und in diesen zwanzig Minuten kommt sie einmal, allein davon.', {v:'enter', i:.84}],
    ['narr','Danach hält sie sich an dir fest wie an einem Geländer und sagt in einer Tour deinen Namen, und irgendwann fängt sie an zu weinen und hört nicht mehr auf und lässt dich trotzdem nicht aufhören.', {v:'slow', i:.9}],
    ['narr','Sie kommt an diesem Abend viermal. Beim vierten Mal lacht und weint sie gleichzeitig und schlägt dir mit der flachen Hand auf die Brust, weil sie es nicht mehr aushält.', {v:'climax', i:.96}],
    ['beat','· · ·'],
    ['narr','Nachts, im Dunkeln, mit dem Gesicht an deiner Schulter:', {v:'after', i:.28}],
    ['said','ANDREA','Ich habe neunundvierzig Jahre in diesem Haus gelebt und auf gar nichts gewartet. Das ist der eigentliche Skandal, nicht das hier.', {v:'after', i:.32}],
    ['said','ANDREA','Und wenn das in zwei Wochen aufhört, dann hatte ich wenigstens zwei Wochen. Das reicht mir. Ich meine das ernst — sag mir nicht, dass es mehr wird, wenn es nicht stimmt.', {v:'after', i:.38}]
  ],
  choices:[
    {t:'»Es wird mehr.« — auch wenn du es nicht weißt.', to:'hub',
     set:{rache:1, kontrolle:2, bind:{andrea:1}, flags:{andrea_versprechen:1}}, tag:'r'},
    {t:'»Ich weiß es nicht. Ich lüge dich nicht an dafür.«', to:'hub',
     set:{kontrolle:3, bind:{andrea:1}, flags:{andrea_ehrlich:1}}, tag:'m'}
  ]
};

STORY.nodes.andrea_4 = {
  chapter:'Andrea · Stufe 4', title:'Abhängigkeit', frau:'andrea', stufe:4, mode:'beat',
  scene:{id:'andrea_haus', palette:'heat', intensity:.88, figures:2, motion:'pulse'},
  unlock:'andrea_st4', adult:true,
  text:[
    ['narr','Sie hat den Sonntagstisch abgesagt. Zum ersten Mal seit dem Tod ihrer Mutter, also seit vierzehn Jahren.', {v:'close', i:.46}],
    ['said','ANDREA','Ralf hat mich angerufen und gebrüllt. Zwanzig Minuten. Ich habe zugehört und dann gesagt, ich hätte etwas vor.', {v:'talk', i:.48}],
    ['said','ANDREA','Und dann habe ich aufgelegt. <i>Ich</i> habe bei <i>ihm</i> aufgelegt.', {v:'close', i:.52}],
    ['narr','Sie erzählt das, während sie sich auszieht. Beides gleichzeitig. Sie merkt es nicht mal mehr.', {v:'undress', i:.66}],
    ['beat','· · ·'],
    ['narr','Sie braucht das jetzt jeden Tag. Sie sagt es auch so — »ich brauche das«, ohne Umschweife, als wäre es ein Medikament, und in gewisser Weise stimmt das.', {v:'oral_give', i:.8}],
    ['narr','Sie ist eine andere geworden. Die Frau, die vor drei Wochen im Baumarkt rot geworden ist, kniet jetzt vor dir im Flur ihres Elternhauses und sieht dabei hoch und lässt dich keine Sekunde aus den Augen.', {v:'oral_give', i:.88}],
    ['narr','Sie will es hart. Sie hat es selbst so gesagt, mit genau diesem Wort, und sie hat dabei nicht einmal gezögert.', {v:'hard', i:.96}],
    ['said','ANDREA','Nicht vorsichtig. Ich bin achtundvierzig Jahre lang vorsichtig behandelt worden und es hat mir nichts gebracht.', {v:'hard', i:.98}],
    ['narr','Danach liegt sie auf dem Dielenboden, auf dem sie als Kind gespielt hat, und lacht an die Decke.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Später, am Küchentisch, holt sie eine Mappe aus der Anrichte, in der seit Jahrzehnten Tischdecken liegen.', {v:'after', i:.3}],
    ['said','ANDREA','Meine dreißig Prozent. Der Gesellschaftsvertrag sagt: bei Stimmengleichheit entscheidet die Mehrheit der Anteile, aber bei Abberufung der Geschäftsführung genügen dreißig Prozent plus ein weiterer Gesellschafter.', {v:'after', i:.36}],
    ['said','ANDREA','Ich habe das nie gelesen. Ich habe unterschrieben, was er mir hingelegt hat, dreißig Jahre lang. Letzte Woche habe ich es zum ersten Mal gelesen.', {v:'after', i:.4}],
    ['said','ANDREA','Ich kann meinen Bruder aus seiner eigenen Firma werfen. Ich brauche dafür nur einen Zweiten. Und du kaufst dich gerade ein.', {v:'after', i:.44}]
  ],
  choices:[
    {t:'»Dann tun wir das.«', to:'hub',
     set:{rache:3, kontrolle:4, bind:{andrea:1}, flags:{andrea_stimme:1, andrea_done:1}}, tag:'r'},
    {t:'»Tu es, wenn du es willst. Nicht, weil ich in deinem Bett liege.«', to:'hub',
     set:{kontrolle:4, bind:{andrea:1}, flags:{andrea_frei:1, andrea_done:1}}, tag:'m'}
  ]
};
