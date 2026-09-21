/* ══════════════════════════════════════════════════════════════
   story-core.js — Figuren, Werte, Prolog, Hub
   ══════════════════════════════════════════════════════════════
   Alle Figuren sind frei erfunden und bilden keine realen Personen
   ab. Alle sexuell aktiven Figuren sind mindestens 25 Jahre alt;
   das Alter steht bei jeder Figur im Text.
   ══════════════════════════════════════════════════════════════ */

window.STORY = window.STORY || {nodes:{}};

STORY.meta = {
  title: 'Das Hollmann-Protokoll',
  version: '2.0',
  abende: 14,
  stats: {
    rache:     {label:'Rache',     color:'#c2374f', desc:'Wie weit du gehen willst.'},
    kontrolle: {label:'Kontrolle', color:'#c9a24a', desc:'Wie fest du die Fäden hältst.'},
    ruf:       {label:'Ruf',       color:'#7d6fa8', desc:'Wie Steinbach über dich spricht.'}
  },
  stufen: ['Fremd', 'Neugier', 'Übertritt', 'Verlangen', 'Abhängigkeit']
};

/* ── Hauptfigur und Antagonist ─────────────────────────────── */
STORY.cast = {
  jonas: {n:'Jonas Reiter',  a:51,
          d:'Du. Abi 1994 am Steinbacher Gymnasium. Drei Jahre lang Ralf Hollmanns Spielzeug. Heute: Nordlicht Systems verkauft, Geld ohne Ende, ein Körper, an dem du zwanzig Jahre gearbeitet hast — und eine Ausstattung, über die in Steinbach 1993 gelacht wurde, weil niemand sie je gesehen hat.'},
  ralf:  {n:'Ralf Hollmann', a:52,
          d:'Hollmann Bau, dritte Generation, zweihundert Leute. Damals der Größte im Hof. Heute ein Mann mit zwei Ehen, einer Tochter, die nicht mit ihm spricht, und einer Bilanz, die niemand sehen soll.'}
};

/* ── Die fünf Frauen ───────────────────────────────────────── */
STORY.women = {
  sabine: {
    n:'Sabine Hollmann', a:46, rolle:'Seine Frau',
    kurz:'Zweite Ehe, elf Jahre. Führt das Büro von Hollmann Bau und kennt jede Zahl darin.',
    lang:'Sabine hat Ralf mit fünfunddreißig geheiratet, als er noch der Mann war, für den sie ihn gehalten hat. Sie macht die Buchhaltung, sie macht die Termine, sie macht die Ausreden gegenüber der Bank. Sie ist seit vier Jahren nicht angefasst worden und redet mit niemandem darüber, weil in Steinbach niemand fragt.',
    farbe:'#c2374f', tag:'sabine'
  },
  christa: {
    n:'Dr. Christa Vogt', a:49, rolle:'Seine Ex-Frau',
    kurz:'Erste Ehe, geschieden 2009. Zahnärztin mit eigener Praxis am Markt. Lenas Mutter.',
    lang:'Christa hat Ralf verlassen, als Lena acht war, und hat nie jemandem den Grund genannt — auch Lena nicht. Sie hat sich danach eine Existenz gebaut, die niemanden braucht, und trägt das wie eine Rüstung. Sie ist die Einzige in dieser Stadt, die dir von Anfang an durchschaut.',
    farbe:'#4a9c9c', tag:'christa'
  },
  lena: {
    n:'Lena Hollmann', a:25, rolle:'Seine Tochter',
    kurz:'Aus erster Ehe. Bauingenieurin, seit einem Jahr zurück in Steinbach, arbeitet in der Firma ihres Vaters.',
    lang:'Lena ist mit einem Master aus Aachen zurückgekommen, um die Firma zu übernehmen, und hat innerhalb von zwölf Monaten gemerkt, dass ihr Vater sie nicht als Nachfolgerin sieht, sondern als Angestellte mit dem richtigen Nachnamen. Sie ist fünfundzwanzig, sie ist wütend, und sie sucht seit Monaten nach einem Hebel gegen ihn.',
    farbe:'#c9a24a', tag:'lena'
  },
  andrea: {
    n:'Andrea Hollmann', a:48, rolle:'Seine Schwester',
    kurz:'Ralfs jüngere Schwester. Hält 30 % der Firmenanteile und stimmt seit zwanzig Jahren mit ihm.',
    lang:'Andrea hat nie jemanden geheiratet, weil in dieser Familie nie jemand gefragt hat, was sie will. Sie unterschreibt, was Ralf ihr hinlegt, sie kocht sonntags für alle, und sie hat einen Sinn für Humor, den außer ihr niemand mehr bemerkt. Ihre Anteile sind der Schlüssel zur Firma, und sie weiß es besser, als alle glauben.',
    farbe:'#7d6fa8', tag:'andrea'
  },
  marlene: {
    n:'Marlene Hollmann', a:56, rolle:'Seine angeheiratete Tante',
    kurz:'Frau von Ralfs Onkel Werner (78). Eingeheiratet, keine Blutsverwandte. War mal Tänzerin.',
    lang:'Marlene hat Werner Hollmann mit dreißig geheiratet, als er zweiundfünfzig war und das Geld hatte, das sie brauchte. Sie hat nie behauptet, dass es Liebe war. Sie ist sechsundfünfzig, sie sieht aus wie fünfundvierzig, und sie hat seit sechsundzwanzig Jahren keinen Abend gehabt, an dem sie etwas gewollt hätte, das sie auch bekam.',
    farbe:'#3e8f83', tag:'marlene'
  }
};

STORY.frauenOrder = ['sabine','christa','lena','andrea','marlene'];

/* ── Galerie ───────────────────────────────────────────────── */
// Stufe 1 ist noch keine Szene und schaltet daher nichts frei.
STORY.gallery = STORY.frauenOrder.flatMap(k => [2,3,4].map(st => ({
  id: `${k}_${st}`, w: `${k}_st${st}`,
  t: `${STORY.women[k].n.split(' ')[0]} · Stufe ${st}`,
  s: STORY.meta.stufen[st]
})));

/* ══════════════════ PROLOG ══════════════════ */

STORY.nodes.start = {
  chapter:'Prolog', title:'Steinbach · Herbst 1992',
  scene:{id:'flash_school', palette:'ash', intensity:.05, figures:3, motion:'still', label:'Rückblende'},
  mode:'beat',
  text:[
    ['narr','Du bist siebzehn. Du bist der Kleinste im Jahrgang und der Beste in Physik, und beides zusammen ergibt in Steinbach eine Zielscheibe.', {v:'flash_hall', i:.05}],
    ['narr','Ralf Hollmann ist achtzehn, einen Kopf größer, und sein Vater baut die halbe Stadt. Es gibt in diesem Ort keinen Lehrer, der ihn anfasst.', {v:'flash_bully', i:.1}],
    ['said','RALF','Reiter. Umkleide. Jetzt.', {v:'flash_bully', i:.14}],
    ['narr','Es geht drei Jahre so. Am Ende ist es nicht mehr Gewalt, das ist das Bemerkenswerte — am Ende reicht ein Blick über den Schulhof, und du gehst von selbst in die Umkleide.', {v:'flash_hall', i:.08}],
    ['beat','· · ·'],
    ['narr','Der letzte Tag ist der, über den du nie geredet hast. Duschraum, sechs Leute, und Ralf, der sagt, jetzt zeigst du mal, was du hast, und alle lachen, bevor überhaupt etwas passiert ist.', {v:'flash_shower', i:.2}],
    ['narr','Sie haben nicht gelacht. Das ist der Teil, an den sich niemand erinnert, weil er nicht in die Geschichte passte, die sie danach erzählt haben.', {v:'flash_shower', i:.24}],
    ['think','Ralf hat einmal hingesehen, ist rot geworden und hat die Tür zugemacht. Es wurde danach nie wieder erwähnt, von keinem. Und drei Wochen später warst du weg.', {v:'flash_door', i:.12}]
  ],
  choices:[
    {t:'Weiter.', to:'p2'}
  ]
};

STORY.nodes.p2 = {
  chapter:'Prolog', title:'Hamburg · heute',
  scene:{id:'now_office', palette:'cold', intensity:.08, figures:1, motion:'still'},
  mode:'beat',
  text:[
    ['narr','Einunddreißig Jahre später sitzt du im vierzehnten Stock über der Elbe. Nordlicht Systems, im März verkauft, die Zahl auf dem Vertrag hat aufgehört, etwas zu bedeuten.', {v:'now_office', i:.08}],
    ['narr','Du bist einundfünfzig. Du bist einen Meter dreiundachtzig, du hast zwanzig Jahre lang sechsmal die Woche trainiert, und du hast in diesen einunddreißig Jahren sehr genau gelernt, was du kannst und wie lange.', {v:'now_mirror', i:.14}],
    ['think','Das Einzige, was sich seit 1992 nicht verändert hat, ist der Grund, aus dem Ralf Hollmann damals die Tür zugemacht hat.', {v:'now_mirror', i:.18}],
    ['beat','· · ·'],
    ['narr','Auf dem Tisch liegt ein Prospekt. <b>Hollmann Bau GmbH & Co. KG</b>, dritte Generation, zweihundert Mitarbeiter — und im Kleingedruckten eine Kapitalsuche über elf Millionen, weil das Gewerbegebiet Steinbach-Nord sich verkalkuliert hat.', {v:'now_file', i:.12}],
    ['narr','Ralf Hollmann braucht Geld. Und in ganz Norddeutschland gibt es genau einen Mann, der es hat und ihn kennt.', {v:'now_file', i:.16}]
  ],
  choices:[
    {t:'»Ich will die Firma. Und ihn darunter.«', to:'p3', set:{rache:3}, tag:'r'},
    {t:'»Ich will, dass er zusieht, wie ich ihm alles nehme, was er für seins hält.«', to:'p3', set:{rache:2, kontrolle:2}, tag:'m'},
    {t:'»Ich will wissen, ob er mich überhaupt noch erkennt.«', to:'p3', set:{kontrolle:2}, tag:'m'}
  ]
};

STORY.nodes.p3 = {
  chapter:'Prolog', title:'Was du dir vornimmst',
  scene:{id:'now_car', palette:'night', intensity:.14, figures:1, motion:'drift'},
  mode:'beat',
  text:[
    ['narr','Die Mappe hat deine Assistentin »Due Diligence Steinbach« genannt. Was wirklich darin steht, hast du ihr nicht gesagt.', {v:'now_file', i:.1}],
    ['narr','<b>Die Firma:</b> 70 % Ralf, 30 % seine Schwester Andrea. Zwei Stimmen. Andrea hat seit zwanzig Jahren jede davon so abgegeben wie er.', {v:'now_file', i:.12}],
    ['narr','<b>Der Haushalt:</b> zweite Ehefrau Sabine, 46, führt das Büro. Erste Ehefrau Christa, 49, Zahnärztin am Markt, geschieden seit 2009. Tochter Lena, 25, seit einem Jahr Bauleiterin in der eigenen Firma und kurz davor zu kündigen.', {v:'now_file', i:.14}],
    ['narr','<b>Und Marlene</b>, 56, die Frau seines Onkels Werner. Eingeheiratet, ohne Anteile, ohne Einfluss — und die Einzige in dieser Familie, die jeden Sonntag am Tisch sitzt und alles mitbekommt.', {v:'now_file', i:.16}],
    ['beat','· · ·'],
    ['narr','Fünf Frauen. Jede einzelne von ihnen hat seit Jahren keinen Grund gehabt, morgens aufzustehen und sich zu freuen.', {v:'now_town', i:.18}],
    ['think','Du mietest das Haus am Seeweg für sechs Wochen. Du hast vierzehn Abende eingeplant, bevor die Kapitalrunde abgeschlossen sein muss.', {v:'now_town', i:.2}],
    ['narr','Vierzehn Abende. Fünf Frauen. Du wirst dich entscheiden müssen, wen du wirklich willst — und bei wem du es nur halb tust.', {v:'now_town', i:.24}]
  ],
  choices:[
    {t:'Nach Steinbach.', to:'a1'}
  ]
};

STORY.nodes.a1 = {
  chapter:'Akt I', title:'Sonntag · Hollmann, Familientisch',
  scene:{id:'dinner', palette:'gold', intensity:.2, figures:3, motion:'drift'},
  mode:'beat',
  text:[
    ['narr','Ralf lädt dich am dritten Tag zum Essen ein. Nicht aus Freundschaft — weil elf Millionen ein Grund sind, jemanden an den Familientisch zu holen, den man dreißig Jahre nicht gesehen hat.', {v:'dinner', i:.18}],
    ['said','RALF','Jonas! Mensch, Jonas Reiter. Du siehst ja … <i>(er sucht das Wort und findet es nicht)</i> … du siehst gut aus.', {v:'dinner_ralf', i:.2}],
    ['narr','Er ist zweiundfünfzig und sieht aus wie achtundfünfzig. Zwanzig Kilo zu viel, roter Hals, ein Händedruck, der beweisen will, dass er noch der Größte im Hof ist.', {v:'dinner_ralf', i:.22}],
    ['narr','Und dann sitzen sie alle da, und du siehst dir in Ruhe an, was aus einunddreißig Jahren geworden ist.', {v:'dinner', i:.2}],
    ['beat','· · ·'],
    ['narr','<b>Sabine</b> schenkt nach, bevor jemand fragt, und niemand bedankt sich. Sie sieht dich einmal an, als Ralf dich unterbricht, und in diesem Blick liegt eine Entschuldigung, für die sie kein Recht hat.', {v:'p_sabine', i:.24, portrait:'sabine'}],
    ['narr','<b>Andrea</b> sitzt neben ihrem Bruder und lacht an den richtigen Stellen. Als er ihr über den Teller hinweg ins Wort fällt, wird ihr Lachen eine Spur zu kurz, und außer dir merkt es keiner.', {v:'p_andrea', i:.24, portrait:'andrea'}],
    ['narr','<b>Marlene</b> sitzt neben Werner, der seit zehn Minuten schläft, und trinkt den Wein, den sonst niemand anrührt. Sie hat dich schon dreimal angesehen. Sie macht kein Geheimnis daraus.', {v:'p_marlene', i:.28, portrait:'marlene'}],
    ['narr','<b>Lena</b> kommt zu spät, sagt kaum etwas und geht als Erste. Bevor sie geht, sieht sie ihren Vater an, und der Blick ist der eines Menschen, der etwas zusammenzählt.', {v:'p_lena', i:.26, portrait:'lena'}],
    ['narr','<b>Christa</b> ist nicht da. Christa ist seit siebzehn Jahren nicht mehr da. Du begegnest ihr am nächsten Morgen zufällig am Markt, und sie erkennt dich nach zwei Sekunden.', {v:'p_christa', i:.26, portrait:'christa'}],
    ['said','CHRISTA','Jonas Reiter. Der, den sie damals in der Umkleide hatten.', {v:'p_christa', i:.28}],
    ['said','CHRISTA','Und jetzt kommen Sie mit elf Millionen zurück. — Ich bin die Einzige hier, die das durchschaut, und ich sage es Ihnen gleich, damit wir uns die Umwege sparen.', {v:'p_christa', i:.3}]
  ],
  choices:[
    {t:'Die vierzehn Abende beginnen.', to:'hub', set:{kontrolle:1}}
  ]
};

/* ══════════════════ HUB ══════════════════ */

STORY.nodes.hub = {
  chapter:'Akt II · Vierzehn Abende', title:'Steinbach',
  hub:true,
  scene:{id:'town', palette:'night', intensity:.12, figures:0, motion:'drift'},
  mode:'all',
  text:[
    ['narr','{ABENDE}'],
    ['narr','{FRAUEN}']
  ],
  choices:[] // wird von der Engine aus STORY.women erzeugt
};
