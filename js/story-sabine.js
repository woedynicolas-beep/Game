/* ══ Sabine Hollmann, 46 — seine Frau ══════════════════════════
   Bogen: Erschöpfung → Dankbarkeit → Rücksichtslosigkeit.
   Sie hat elf Jahre lang funktioniert. Was sie umwirft, ist nicht
   Verführung, sondern dass jemand aufhört, sie zu übersehen.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.sabine_1 = {
  chapter:'Sabine · Stufe 1', title:'Neugier', frau:'sabine', stufe:1, mode:'beat',
  scene:{id:'buero', palette:'cold', intensity:.16, figures:2, motion:'still'},
  text:[
    ['narr','Das Büro von Hollmann Bau liegt über der Werkhalle. Sabine sitzt darin seit halb sieben und wird bis acht bleiben, weil die Bankunterlagen bis Freitag müssen.', {v:'talk', i:.14}],
    ['said','SABINE','Herr Reiter. Ralf ist auf der Baustelle Nord, der kommt frühestens um sechs.', {v:'talk', i:.14}],
    ['said','JONAS','Ich weiß. Ich wollte zu Ihnen.', {v:'close', i:.18}, 'mc'],
    ['narr','Sie sieht auf. Sie braucht einen Moment, um zu verstehen, dass der Satz ernst gemeint war, und das dauert länger, als es sollte.', {v:'close', i:.2}],
    ['beat','· · ·'],
    ['narr','Du lässt dir von ihr die Zahlen erklären. Zwei Stunden lang. Du stellst Fragen, du hörst die Antworten zu Ende, und du sagst zweimal »das haben Sie sehr gut gemacht«.', {v:'talk', i:.2}],
    ['narr','Beim zweiten Mal hält sie mitten im Satz an und sieht auf ihre Hände.', {v:'close', i:.24}],
    ['said','SABINE','Entschuldigung. Das ist … ich bin das nicht gewohnt.', {v:'close', i:.26}],
    ['said','SABINE','Ralf sagt, Zahlen sind Zahlen. Er fragt nie, wie sie zustande kommen.', {v:'close', i:.26}],
    ['narr','Als du gehst, steht sie auf und bringt dich zur Tür, und im Flur, wo es eng ist, streift ihr Arm deinen. Sie geht nicht weg. Sie sagt nichts. Sie steht nur zwei Sekunden länger da, als nötig wäre.', {v:'touch', i:.34}],
    ['think','Zwei Sekunden. Das ist alles, was man am Anfang braucht.', {v:'touch', i:.3}]
  ],
  choices:[
    {t:'Du sagst gute Nacht und gehst. Nichts weiter.', to:'hub',
     set:{kontrolle:2, bind:{sabine:1}, flags:{sabine_geduld:1}}, tag:'m'},
    {t:'Du legst kurz die Hand an ihren Rücken, im Vorbeigehen.', to:'hub',
     set:{rache:1, bind:{sabine:1}}, tag:'r'}
  ]
};

STORY.nodes.sabine_2 = {
  chapter:'Sabine · Stufe 2', title:'Übertritt', frau:'sabine', stufe:2, mode:'beat',
  scene:{id:'buero', palette:'warm', intensity:.4, figures:2, motion:'pulse'},
  unlock:'sabine_st2', adult:true,
  text:[
    ['narr','Sie schreibt dir am Donnerstag um halb zehn abends. <i>Sind Sie noch wach? Ich komme mit der Anlage 4 nicht weiter.</i> Die Anlage 4 ist seit Dienstag fertig. Ihr wisst das beide.', {v:'talk', i:.3}],
    ['narr','Sie kommt ins Haus am Seeweg, sie hat sich umgezogen, und sie trägt Parfüm, das nicht zu einer Buchhaltung passt.', {v:'close', i:.36}],
    ['said','SABINE','Ich bin siebenundvierzig im März. Ich bin seit vier Jahren nicht angefasst worden. Ich sage das laut, weil ich es sonst nie sage.', {v:'close', i:.42}],
    ['beat','· · ·'],
    ['narr','Du küsst sie im Flur, mit dem Rücken gegen die Garderobe, und sie macht einen Laut, den sie selbst nicht erwartet hat — halb erschrocken, halb erleichtert.', {v:'kiss', i:.5}],
    ['narr','Sie ist ungeschickt. Sie ist es seit Jahren nicht mehr gewohnt, und sie entschuldigt sich zweimal dafür, bis du ihr sagst, sie soll aufhören, sich zu entschuldigen.', {v:'kiss', i:.52}],
    ['narr','Die Bluse bleibt offen, der Rock bleibt an. Du hebst sie auf die Kommode und schiebst den Stoff hoch, und als deine Hand sie findet, ist sie schon so weit, dass sie den Kopf zurücklegt und lacht, weil ihr Körper sie verrät, bevor sie sich entscheiden konnte.', {v:'hands', i:.66}],
    ['narr','Sie kommt in weniger als zwei Minuten, mit beiden Händen an deinen Schultern und einem Geräusch, das sie in die eigene Armbeuge beißt. Danach zittert sie und lässt dich nicht los.', {v:'climax', i:.78}],
    ['beat','· · ·'],
    ['narr','Dann greift sie nach deinem Gürtel — und hält an. Sie sieht hin. Sie sieht länger hin, als höflich wäre.', {v:'undress', i:.6}],
    ['said','SABINE','… oh.', {v:'undress', i:.62}],
    ['said','SABINE','<i>(nach einer Pause)</i> Nein. Heute nicht. Nicht so schnell — ich will das nicht im Flur und nicht in zehn Minuten.', {v:'undress', i:.58}],
    ['narr','Sie knöpft die Bluse zu, mit Fingern, die nicht gehorchen, und an der Tür dreht sie sich noch einmal um.', {v:'after', i:.44}],
    ['said','SABINE','Samstag ist er in Hannover. Die ganze Nacht.', {v:'after', i:.5}]
  ],
  choices:[
    {t:'»Dann Samstag.«', to:'hub', set:{kontrolle:2, bind:{sabine:1}}, tag:'m'},
    {t:'»Oder du bleibst jetzt.« — und sie bleibt.', to:'hub',
     set:{rache:2, bind:{sabine:1}, flags:{sabine_forciert:1}}, tag:'r'}
  ]
};

STORY.nodes.sabine_3 = {
  chapter:'Sabine · Stufe 3', title:'Verlangen', frau:'sabine', stufe:3, mode:'beat',
  scene:{id:'seeweg', palette:'heat', intensity:.8, figures:2, motion:'pulse'},
  unlock:'sabine_st3', adult:true,
  text:[
    ['narr','Samstag, halb neun. Sie hat einen Koffer dabei, den sie im Auto lässt, weil ihn mitzunehmen etwas bedeuten würde, das sie noch nicht aussprechen will.', {v:'close', i:.4}],
    ['narr','Diesmal ist sie nicht ungeschickt. Diesmal hat sie vier Tage Zeit gehabt, an nichts anderes zu denken, und man merkt es an jeder Bewegung.', {v:'kiss', i:.55}],
    ['beat','· · ·'],
    ['narr','Sie zieht sich selbst aus, im Stehen, ohne Licht auszumachen — das ist ihre eigene Entscheidung und sie trifft sie bewusst. Sechsundvierzig Jahre, zwei Kinder, die längst aus dem Haus sind, und sie steht da und lässt dich schauen.', {v:'undress', i:.6}],
    ['narr','Und dann kniet sie sich hin und nimmt sich Zeit, und du merkst an ihrem Atem, dass sie das nicht für dich tut.', {v:'oral_give', i:.72}],
    ['said','SABINE','Ich habe die ganze Woche an nichts anderes gedacht. An nichts. Ich habe im Büro gesessen und an <i>das</i> gedacht.', {v:'oral_give', i:.74}],
    ['beat','· · ·'],
    ['narr','Als du in sie gehst, hält sie die Luft an und sagt dann sehr langsam ein Wort, das man in Steinbach nicht sagt.', {v:'enter', i:.84}],
    ['narr','Es dauert lange, bis sie sich daran gewöhnt. Du gehst langsam, weil du weißt, dass du langsam gehen musst, und sie krallt sich in deine Unterarme und atmet in kurzen Stößen und sagt immer wieder »warte, warte, warte« — und dann irgendwann nicht mehr.', {v:'slow', i:.88}],
    ['narr','Danach nicht mehr langsam. Sie ist laut, auf eine Art, die sie selbst erschreckt, und an einer Stelle hält sie sich die eigene Hand vor den Mund, und du ziehst sie weg.', {v:'hard', i:.94}],
    ['narr','Sie kommt dreimal. Beim dritten Mal weint sie dabei, und als du innehältst, schüttelt sie den Kopf und zieht dich wieder zu sich.', {v:'climax', i:.96}],
    ['beat','· · ·'],
    ['narr','Um vier Uhr morgens liegt sie wach neben dir und sieht an die Decke.', {v:'after', i:.3}],
    ['said','SABINE','Elf Jahre. Elf Jahre habe ich geglaubt, dass das bei mir einfach so ist. Dass ich so gebaut bin.', {v:'after', i:.32}],
    ['said','SABINE','Ich bin nicht so gebaut. Ich war nur mit dem Falschen verheiratet, und ich habe es elf Jahre lang nicht gewusst.', {v:'after', i:.34}]
  ],
  choices:[
    {t:'»Dann hör auf, mit ihm verheiratet zu sein.«', to:'hub',
     set:{rache:2, kontrolle:2, bind:{sabine:1}, flags:{sabine_trennung:1}}, tag:'r'},
    {t:'»Sag das nicht mir. Sag das dir selbst, morgen früh, nüchtern.«', to:'hub',
     set:{kontrolle:3, bind:{sabine:1}}, tag:'m'}
  ]
};

STORY.nodes.sabine_4 = {
  chapter:'Sabine · Stufe 4', title:'Abhängigkeit', frau:'sabine', stufe:4, mode:'beat',
  scene:{id:'seeweg', palette:'heat', intensity:.9, figures:2, motion:'pulse'},
  unlock:'sabine_st4', adult:true,
  text:[
    ['narr','Sie kommt jetzt ohne zu fragen. Sie hat einen Schlüssel, den du ihr nie gegeben hast — sie hat sich einen machen lassen, und sie erzählt es dir, als wäre es eine Kleinigkeit.', {v:'close', i:.45}],
    ['narr','Sie kommt mittwochs in der Mittagspause. Sie kommt donnerstags um elf. Sie kommt einmal um halb sieben morgens, in Arbeitskleidung, und ist um sieben wieder im Büro und rechnet die Anlage 7.', {v:'kiss', i:.6}],
    ['beat','· · ·'],
    ['said','SABINE','Ich habe heute in einer Besprechung gesessen, und er hat vierzig Minuten geredet, und ich habe die ganze Zeit daran gedacht, wie du mich gestern über den Tisch gebeugt hast.', {v:'close', i:.62}],
    ['said','SABINE','Ich habe ihn angesehen und daran gedacht. Und ich habe nichts dabei gefühlt. Nicht mal schlechtes Gewissen. <i>Nichts.</i>', {v:'close', i:.64}],
    ['narr','Sie zieht sich im Gehen aus, zwischen Tür und Schlafzimmer, und lässt die Sachen liegen, wo sie fallen.', {v:'undress', i:.7}],
    ['narr','Sie braucht keine Vorbereitung mehr. Sie ist bereit, bevor sie durch die Tür ist, und sie sagt es auch — sie sagt inzwischen alles, was ihr einfällt, ohne Filter, weil der Filter das Erste war, das verloren ging.', {v:'ride', i:.86}],
    ['narr','Sie reitet dich in ihrem eigenen Tempo, aufrecht, die Hände auf deiner Brust, und sieht dabei aus dem Fenster über den See, und ihr Gesicht ist das eines Menschen, der etwas gefunden hat, das größer ist als sein bisheriges Leben.', {v:'ride', i:.92}],
    ['narr','Später, auf allen vieren, mit dem Gesicht im Kissen, sagt sie zwischen zwei Stößen einen Satz, den sie sich offensichtlich vorher zurechtgelegt hat.', {v:'behind', i:.96}],
    ['said','SABINE','Ich kann nicht mehr zurück. Ich will das auch gar nicht mehr versuchen.', {v:'behind', i:.98}],
    ['beat','· · ·'],
    ['narr','Danach sitzt sie im Bademantel am Küchentisch und schiebt dir einen USB-Stick zu.', {v:'after', i:.3}],
    ['said','SABINE','Die Zwischenabschlüsse 2022 bis heute. Die echten, nicht die für die Bank.', {v:'after', i:.32}],
    ['said','SABINE','Ich habe sie elf Jahre lang gedeckt. Frag mich nicht, ob ich mir das überlegt habe. Ich habe es mir nicht überlegt. Ich will einfach, dass du sie hast.', {v:'after', i:.36}]
  ],
  choices:[
    {t:'Du nimmst ihn.', to:'hub',
     set:{rache:3, kontrolle:4, bind:{sabine:1}, flags:{sabine_stick:1, sabine_done:1}}, tag:'r'},
    {t:'»Behalt ihn. Wenn du ihn je brauchst, brauchst du ihn gegen ihn, nicht für mich.«', to:'hub',
     set:{kontrolle:3, bind:{sabine:1}, flags:{sabine_frei:1, sabine_done:1}}, tag:'m'}
  ]
};
