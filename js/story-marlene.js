/* ══ Marlene Hollmann, 56 — angeheiratete Tante ════════════════
   Frau von Ralfs Onkel Werner (78). Keine Blutsverwandte.
   Bogen: Sie weiß von Anfang an alles und spielt trotzdem mit —
   und ist am Ende die Einzige, die dich durchschaut hat.
   ══════════════════════════════════════════════════════════════ */

STORY.nodes.marlene_1 = {
  chapter:'Marlene · Stufe 1', title:'Neugier', frau:'marlene', stufe:1, mode:'beat',
  scene:{id:'terrasse', palette:'gold', intensity:.2, figures:2, motion:'still'},
  text:[
    ['narr','Sie ruft dich an, zwei Tage nach dem Familienessen, und sagt, Werner schlafe nachmittags und sie langweile sich, und ob du Zeit hättest. Sie fragt nicht wirklich.', {v:'talk', i:.18}],
    ['narr','Das Haus der alten Hollmanns liegt oben am Wald. Marlene sitzt auf der Terrasse, sechsundfünfzig, barfuß, mit einem Glas Weißwein um drei Uhr nachmittags.', {v:'close', i:.24}],
    ['said','MARLENE','Setz dich. Und bevor wir anfangen: Du bist nicht wegen der Firma hier.', {v:'close', i:.28}],
    ['said','MARLENE','Ich war Tänzerin, bevor ich hier eingeheiratet habe. Ich habe fünfzehn Jahre lang Männer angesehen, die etwas von mir wollten. Ich erkenne einen Blick, der nicht zu einem Geschäftstermin gehört, quer über einen Esstisch mit neun Leuten.', {v:'close', i:.32}],
    ['beat','· · ·'],
    ['said','MARLENE','Also sage ich dir, wie es bei mir ist, dann kannst du dir die Arbeit sparen.', {v:'talk', i:.3}],
    ['said','MARLENE','Werner ist achtundsiebzig. Ich habe ihn mit dreißig geheiratet, er war zweiundfünfzig und hatte Geld, und ich hatte nichts und zwei kaputte Knie. Es war ein Handel. Ich habe ihn eingehalten, sechsundzwanzig Jahre.', {v:'close', i:.34}],
    ['said','MARLENE','Er schläft seit elf Jahren im anderen Zimmer und er weiß, dass ich nicht aus Liebe geblieben bin. Wir sind höflich zueinander. Das ist mehr, als die meisten haben.', {v:'close', i:.36}],
    ['narr','Sie stellt das Glas ab und dreht sich zu dir.', {v:'touch', i:.4}],
    ['said','MARLENE','Und jetzt du. Was willst du von dieser Familie?', {v:'touch', i:.42}]
  ],
  choices:[
    {t:'»Alles, was Ralf für seins hält.« — Die Wahrheit.', to:'hub',
     set:{rache:2, bind:{marlene:1}, flags:{marlene_ehrlich:1}}, tag:'r'},
    {t:'»Ich bin noch nicht sicher. Das ist die ehrlichste Antwort, die ich habe.«', to:'hub',
     set:{kontrolle:2, bind:{marlene:1}}, tag:'m'}
  ]
};

STORY.nodes.marlene_2 = {
  chapter:'Marlene · Stufe 2', title:'Übertritt', frau:'marlene', stufe:2, mode:'beat',
  scene:{id:'terrasse', palette:'warm', intensity:.46, figures:2, motion:'pulse'},
  unlock:'marlene_st2', adult:true,
  text:[
    ['narr','Beim zweiten Mal wartet sie nicht auf einen Anlass. Werner schläft oben, die Tür ist zu, und sie steht in der Küche und schenkt zwei Gläser ein, die sie beide nicht anrührt.', {v:'close', i:.4}],
    ['said','MARLENE','Ich mache das nicht heimlich, damit wir uns richtig verstehen. Ich mache es leise. Das ist ein Unterschied.', {v:'close', i:.44}],
    ['narr','Sie küsst wie jemand, der nichts beweisen muss. Kein Zögern, keine Eile, kein Test — sie hat mit zwanzig auf Bühnen gestanden und mit dreißig einen Vertrag geschlossen, und sie geht mit ihrem Körper um wie mit etwas, das ihr gehört.', {v:'kiss', i:.56}],
    ['beat','· · ·'],
    ['narr','Sie zieht sich vor dir aus, ohne Hast, und man sieht die Tänzerin noch in jeder Bewegung — und man sieht auch die sechsundfünfzig Jahre, und sie versteckt weder das eine noch das andere.', {v:'undress', i:.64}],
    ['said','MARLENE','Ich bin kein junges Mädchen mehr. Wenn dich das stört, sag es jetzt und wir trinken den Wein.', {v:'undress', i:.66}],
    ['narr','Du sagst nichts. Du gehst stattdessen vor ihr auf die Knie, und Marlene Hollmann, die seit sechsundzwanzig Jahren alles kommen sieht, wird zum ersten Mal von etwas überrascht.', {v:'oral_take', i:.78}],
    ['said','MARLENE','Oh — oh nein. Oh nein, das ist —', {v:'oral_take', i:.82}],
    ['narr','Sie hält sich mit einer Hand an der Anrichte, mit der anderen in deinem Haar, und sie ist leise, weil oben jemand schläft, und die Anstrengung, leise zu sein, macht alles nur schlimmer für sie.', {v:'oral_take', i:.86}],
    ['narr','Sie kommt beinahe lautlos, mit durchgestrecktem Rücken und geschlossenen Augen, und danach steht sie einfach zwei Minuten reglos da und atmet.', {v:'climax', i:.88}],
    ['beat','· · ·'],
    ['said','MARLENE','Das ist mir seit … das ist mir <i>noch nie</i> so passiert.', {v:'after', i:.44}],
    ['narr','Dann sieht sie an dir herunter und lacht leise, ohne jede Überraschung, wie jemand, der eine Vermutung bestätigt bekommt.', {v:'undress', i:.6}],
    ['said','MARLENE','Und das habe ich mir übrigens gedacht. Man sieht es an der Art, wie ein Mann geht. Ralf geht nicht so. Ralf ist noch nie so gegangen.', {v:'after', i:.5}]
  ],
  choices:[
    {t:'»Wir haben Zeit. Ich komme wieder.«', to:'hub', set:{kontrolle:2, bind:{marlene:1}}, tag:'m'},
    {t:'»Woher weißt du, wie Ralf geht?«', to:'hub',
     set:{rache:2, kontrolle:1, bind:{marlene:1}, flags:{marlene_ralf:1}}, tag:'r'}
  ]
};

STORY.nodes.marlene_3 = {
  chapter:'Marlene · Stufe 3', title:'Verlangen', frau:'marlene', stufe:3, mode:'beat',
  scene:{id:'marlene_zimmer', palette:'heat', intensity:.86, figures:2, motion:'pulse'},
  unlock:'marlene_st3', adult:true,
  text:[
    ['narr','Sie bestellt dich an einem Dienstagvormittag, während Werner bei der Dialyse ist. Vier Stunden, sagt sie. Sie hat es ausgerechnet.', {v:'close', i:.48}],
    ['narr','Sie hat ihr eigenes Zimmer hergerichtet — das, in dem sie seit elf Jahren allein schläft — und es ist das erste Mal seit sehr langer Zeit, dass jemand anderes es betritt.', {v:'close', i:.52}],
    ['said','MARLENE','Ich habe seit unserem letzten Mal nichts anderes gemacht als nachzurechnen, wann Werner wieder Dialyse hat. Ich bin sechsundfünfzig. Das ist lächerlich.', {v:'kiss', i:.6}],
    ['beat','· · ·'],
    ['narr','Es ist kein Anfängerabend. Sie weiß genau, was sie tut, und sie sagt dir, was sie will, in vollständigen Sätzen, ohne zu erröten.', {v:'oral_give', i:.78}],
    ['narr','Und sie hat Recht behalten mit ihrer Vermutung — sie braucht länger, als sie erwartet hat, und sie fängt an zu lachen, mitten dabei, aus reiner Ungläubigkeit.', {v:'enter', i:.88}],
    ['said','MARLENE','Sechsundzwanzig Jahre. Sechsundzwanzig Jahre habe ich hier gewohnt und mir eingeredet, dass ich nichts verpasse.', {v:'slow', i:.9}],
    ['narr','Der Tänzerinnenkörper kommt zurück. Sie bewegt sich anders als die anderen — sie <i>arbeitet</i> mit, sie führt, sie verändert den Winkel, bis es genau stimmt, und sie macht das mit einer Präzision, die sie sich in fünfzehn Jahren auf Bühnen antrainiert hat.', {v:'ride', i:.94}],
    ['narr','Sie kommt dreimal in vier Stunden, und beim letzten Mal hält sie sich an beiden Bettpfosten fest und sagt Dinge auf Ungarisch, die sie dir hinterher nicht übersetzen will.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Um halb eins steht sie auf, zieht sich an, öffnet die Fenster und wechselt die Bettwäsche. Ruhig, gründlich, ohne Scham und ohne Eile.', {v:'after', i:.3}],
    ['said','MARLENE','Werner kommt um zwei. Er bekommt nichts mit, und selbst wenn — er würde nichts sagen.', {v:'after', i:.34}],
    ['said','MARLENE','Und jetzt du, Jonas: Du bist bei Sabine. Du bist bei Andrea. Du warst bei Christa, was mich ehrlich beeindruckt hat. Und bei Lena.', {v:'after', i:.4}],
    ['said','MARLENE','Ich sage das nicht als Vorwurf. Ich sage es, damit du weißt, dass es in diesem Haus jemanden gibt, der mitzählt.', {v:'after', i:.44}]
  ],
  choices:[
    {t:'»Und was machst du damit?«', to:'hub', set:{kontrolle:3, bind:{marlene:1}}, tag:'m'},
    {t:'»Dann zähl weiter. Es werden mehr.«', to:'hub',
     set:{rache:3, bind:{marlene:1}, flags:{marlene_offen:1}}, tag:'r'}
  ]
};

STORY.nodes.marlene_4 = {
  chapter:'Marlene · Stufe 4', title:'Abhängigkeit', frau:'marlene', stufe:4, mode:'beat',
  scene:{id:'marlene_zimmer', palette:'heat', intensity:.9, figures:2, motion:'pulse'},
  unlock:'marlene_st4', adult:true,
  text:[
    ['narr','Sie hat angefangen zu lügen. Nicht wegen dir — für dich. Sie hat Werner erzählt, sie habe einen Kurs in Osnabrück, und fährt stattdessen zum Seeweg.', {v:'close', i:.5}],
    ['said','MARLENE','Ich habe sechsundzwanzig Jahre lang nie gelogen. Nicht aus Anstand — es war nie nötig, weil ich nie etwas wollte.', {v:'talk', i:.5}],
    ['said','MARLENE','Jetzt lüge ich zweimal die Woche und schlafe besser als seit 1999.', {v:'close', i:.54}],
    ['beat','· · ·'],
    ['narr','Sie hat keine Grenzen mehr, die sie vorher ankündigt. Sie sagt inzwischen einfach ja, und danach fragt sie, ob es noch etwas gibt, das sie nicht kennt.', {v:'undress', i:.7}],
    ['narr','Sie ist sechsundfünfzig und sie hat in drei Wochen mehr ausprobiert als in ihrer gesamten Ehe, und sie führt darüber inzwischen so etwas wie Buch.', {v:'behind', i:.9}],
    ['said','MARLENE','Ich weiß genau, was das ist. Ich bin nicht verliebt, ich bin nicht dumm und ich bin nicht siebzehn.', {v:'hard', i:.96}],
    ['said','MARLENE','Ich bin abhängig. Ganz nüchtern. Und ich habe beschlossen, dass mir das mit sechsundfünfzig zusteht.', {v:'hard', i:.98}],
    ['narr','Sie kommt an diesem Nachmittag viermal und bleibt danach eine Stunde reglos liegen, mit offenen Augen, und sagt kein Wort.', {v:'climax', i:1}],
    ['beat','· · ·'],
    ['narr','Beim Anziehen wird sie wieder die Frau von der Terrasse.', {v:'after', i:.3}],
    ['said','MARLENE','So. Und jetzt etwas, das du hören musst, auch wenn du es nicht willst.', {v:'after', i:.34}],
    ['said','MARLENE','Werner hält zwölf Prozent an der Firma. Das steht in keinem Handelsregisterauszug, weil es ein stiller Anteil aus 1988 ist. Ralf hat das vergessen. Werner nicht.', {v:'after', i:.4}],
    ['said','MARLENE','Werner unterschreibt, was ich ihm hinlege. Das ist der einzige Vorteil aus sechsundzwanzig Jahren Höflichkeit, und ich biete ihn dir an.', {v:'after', i:.44}],
    ['said','MARLENE','Aber eins noch, Jonas: Du machst hier gerade fünf Frauen von dir abhängig und hältst das für einen Sieg über Ralf. — In drei Wochen bist du weg. Wir nicht.', {v:'after', i:.5}]
  ],
  choices:[
    {t:'»Dann leg es ihm hin.«', to:'hub',
     set:{rache:3, kontrolle:4, bind:{marlene:1}, flags:{werner_anteil:1, marlene_done:1}}, tag:'r'},
    {t:'»Du hast recht. Und ich mache trotzdem weiter.« — ehrlich bis zum Schluss.', to:'hub',
     set:{rache:1, kontrolle:3, bind:{marlene:1}, flags:{marlene_warnung:1, marlene_done:1}}, tag:'m'}
  ]
};
