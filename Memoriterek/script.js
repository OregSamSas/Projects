// Sample data
const poems = [
    {
        title: "Gyűlölöm azt",
        author: "Anakreón",
        recite: true,
        active: document.getElementById("poems-checkbox-1-1"),
        verses: [
`Gyűlölöm azt, aki telt kupa mellett, bort iszogatván,
háborut emleget és lélekölő viadalt.
S kedvelem azt, aki bölcs és Aphrodité meg a Múzsák
szép adományairól zengve szeretni tanít.`
        ]
    },
    {
        title: "Gyűlölök és szeretek",
        author: "Catullus",
        recite: true,
        active: document.getElementById("poems-checkbox-1-2"),
        verses: [
`Gyűlölök és szeretek. Tán kérded, mért teszem én azt.
Nem tudom, ám érzem, s szerteszakít ez a kín.`
        ]
    },
    {
        title: "Halotti beszéd",
        author: "ismeretlen középkori pap",
        recite: false,
        active: document.getElementById("poems-checkbox-2-1"),
        verses: [
`Látjátok, feleim, szemetekkel,
mik vagyunk: íme, por és hamu
vagyunk. Mennyi malasztban
teremté kezdetben [Úr] mi osünket,
Ádámot, és adta vala neki
paradicsomot házzá. És mind[en]
paradicsomban való gyümölcsök-
tol monda neki élnie. Csupán
tiltá ot egy fa gyümölcsétol. ...`,
`... De mondá neki, mért ne
ennék: „Bizony, [a]ki napon eendel
az[on] gyümölcstol, halálnak
halálával halsz". Hallá
holtát teremto Istentol, de
feledé. Engede ördög inteté-
nek, és evék az[on] tiltott
gyümölcstol, és az[on] gyümölcs-
ben halált evék. És az[on] gyü-
mölcsnek oly keseru vala
leve, hogy torkát megszakasztja
vala. Nem csupán magának, de
mind[en] o fajának halált evék. ...`,
`...Haraguvék Isten, és veté ot ez
munkás világba: és lon
halálnak és pokolnak martaléka,
és mind[en] o nemének. Kik azok?
mi vagyunk. [A]hogy is ti
látjátok szemetekkel: Bizony,
egy ember sem kerülheti el ez
vermet, bizony, mind ahhoz járó
vagyunk. Imádjuk Urunk Isten
kegyelmét e lélekért, hogy
irgalmazzon oneki, és kegyelmez-
zen, és bocsássa mind[en] o
bunét! ...`,`... É imádjuk Szent
Asszony Máriát és Boldog Mihály
arkangyalt és mind[en] angyalokat,
hogy imádjanak érte! És
imádjuk Szent Péter urat,
akinek ad[at]ott hatalom oldania
és kötnie, hogy oldja mind[en]
o bunét. ... `,`... És imádjuk mind[en]
szenteket, hogy legyenek neki
segedelmére Urunk színe elott, hogy
Isten o imádságuk miá bo-
csássa o bunét! És szabadítsa
ot ördög üldözésétol és pokol
kínzásától, és vezesse ot pa-
radicsom nyugalmába, és adjon
neki mennyországba utat,
és mind[en] jóban részt! És
kiáltsátok Urunkhoz háromszor:
kyrie eleison! ...`,
`... Szerelmes Testvéreim! imádjunk
e szegény ember lelkéért,
[a]kit Úr e napon e hamis világ
tömlöcébol mente, [a]kinek e
napon testét temtejük, hogy
Úr ot kegyelmével Ábrahám,
Izsák, Jákob kebelében helyezze,
hogy bírságnap jutva mind[en] o
szentei és kiválasztottai között
jobb felol iktatnia élessze
fel ot! És tibennetek. Clamate
ter: kyrie eleison!`
        ]
    },
    {
        title: "Ómagyar Mária-siralom",
        author: "ismeretlen középkori pap",
        recite: false,
        active: document.getElementById("poems-checkbox-2-2"),
        verses: [
`Volék sirolm tudotlon.
Sirolmol sepedik,
buol oszuk, epedek,`,
`Választ világumtuul,
zsidou fiodumtuul,
ézes ürümemtüül. `,
`Ó én ézes urodum,
eggyen-igy fiodum,
sírou anyát teküncsed,
buabeleül kinyuhhad!`,
`Szemem künyüel árad,
junhum buol fárad.
Te vérüd hullottya
én junhum olélottya. `,
`Világ világa,
virágnak virága,
keserüen kinzatul,
vos szegekkel veretül!`,
`Uh nekem, én fiom,
ézes mézüül,
szégyenül szépségüd,
vírüd hioll vizeül. `,
`Sirolmom, fuhászatum
tertetik kiül,
én junhumnok bel bua,
ki sumha nim hiül. `,
`Végy halál engümet,
eggyedűm íllyen,
maraggyun urodum,
kit világ féllyen! `,
`Ó, igoz Simeonnok
bezzeg szovo ére:
én érzem ez bútürüt,
kit níha egíre. `,
`Tüüled válnum;
de nüm valállal,
hul igy kinzassál,
fiom, halállal! `,
`Zsidou, mit téssz türvéntelen,
Fiom mert hol biüntelen.
Fugvá, husztuzvá,
üklelvé, ketvé ülüd! `,
`Kegyüggyetük fiomnok,
ne légy kegyülm mogomnok!
Ovogy halál kináal
anyát ézes fiáal
egyembelű üllyétük!`
        ]
    },
    {
        title: "Pannónia Dicsérete",
        author: "Janus Pannonius",
        recite: true,
        active: document.getElementById("poems-checkbox-1-3"),
        verses: [
`Eddig Itália földjén termettek csak a könyvek,
S most Pannónia is ontja a szép dalokat.
Sokra becsülnek már, a hazám is büszke lehet rám,
Szellemem egyre dicsőbb, általa híres e föld!`
        ]
    },
    {
        title: "Egy katonaének",
        author: "Balassi Bálint",
        recite: false,
        active: document.getElementById("poems-checkbox-2-3"),
        verses: [
`Vitézek, mi lehet ez széles föld felett
szebb dolog az végeknél?
Holott kikeletkor az sok szép madár szól,
kivel ember ugyan él;
Mező jó illatot, az ég szép harmatot
ád, ki kedves mindennél. `,
`Ellenség hírére vitézeknek szíve
gyakorta ott felbuzdul,
Sőt azon kívül is, csak jó kedvébűl is
vitéz próbálni indul,
Holott sebesedik, öl, fog, vitézkedik,
homlokán vér lecsordul.`,
`Veres zászlók alatt lobogós kopiát
vitézek ott viselik,
Roppant sereg előtt távol az sík mezőt
széllyel nyargalják, nézik;
Az párduckápákkal, fényes sisakokkal,
forgókkal szép mindenik.`,
`Jó szerecsen lovak alattok ugrálnak,
hogyha trombita riadt,
Köztök ki strázsát áll, ki lováról leszáll,
nyugszik reggel, hol virradt,
Midőn éjten-éjjel csataviseléssel
mindenik lankadt s fáradt.`,
`Az jó hírért, névért s az szép tisztességért
ők mindent hátra hadnak,
Emberségről példát, vitézségről formát
mindeneknek ők adnak,
Midőn, mint jó rárók, mezőn széllyel járók,
vagdalkoznak, futtatnak.`,
`Ellenséget látván örömmel kiáltván
ők kopiákot törnek,
S ha súlyosan vagyon az dolog harcokon,
szólítatlan megtérnek,
Sok vérben fertezvén arcul reá térvén
űzőt sokszor megvernek.`,
`Az nagy széles mező, az szép liget, erdő
sétáló palotájok,
Az utaknak lese, kemény harcok helye
tanuló oskolájok,
Csatán való éhség, szomjúság, nagy hévség
s fáradtság múlatságok.`,
`Az éles szablyákban örvendeznek méltán,
mert ők fejeket szednek,
Viadalhelyeken véresen, sebesen,
halva sokan feküsznek,
Sok vad s madár gyomra gyakran koporsója
vitézül holt testeknek.`,
`Óh, végbelieknek, ifjú vitézeknek
dicséretes serege!
Kiknek ez világon szerteszerént vagyon
mindeneknél jó neve,
Mint sok fát gyümölccsel, sok jó szerencsékkel
áldjon Isten mezőkbe!`
        ]
    },
    {
        title: "Adj már csendességet...",
        author: "Balassi Bálint",
        recite: false,
        active: document.getElementById("poems-checkbox-2-4"),
        verses: [
`Adj már csendességet, lelki békességet, mennybéli Úr!
Bujdosó elmémet ódd bútól szívemet, kit sok kín fúr!

Sok ideje immár, hogy lelkem szomjan vár mentségére,
Őrizd, ne hadd, ébreszd, haragod ne gerjeszd vesztségére!`,
`Nem kicsiny munkával, fiad halálával váltottál meg,
Kinek érdeméért most is szükségemet teljesíts meg!

Irgalmad nagysága, nem vétkem rútsága feljebb való,
Irgalmad végtelen, de bűnöm éktelen s romlást valló.`,
`Jóvoltod változást, gazdagságod fogyást ereszthet-e?
Engem, te szolgádat, mint régen sokakat, ébreszthet-e?

Nem kell kételkednem, sőt jót reménlenem igéd szerint,
Megadod kedvessen, mit ígérsz kegyessen hitem szerint,`,
`Nyisd fel hát karodnak, szentséges markodnak áldott zárját,
Add meg életemnek, nyomorult fejemnek letört szárnyát;

Repülvén áldjalak, élvén imádjalak vétek nélkül,
Kit jól gyakorolván, haljak meg nyugodván, bú s kín nélkül!`
        ]
    },
    {
        title: "Tartózkodó kérelem",
        author: "Csokonai Vitéz Mihály",
        recite: true,
        active: document.getElementById("poems-checkbox-1-4"),
        verses: [
`A hatalmas szerelemnek
    Megemésztő tüze bánt.
Te lehetsz írja sebemnek,
    Gyönyörű kis tulipánt!`,
 
`Szemeid szép ragyogása
    Eleven hajnali tűz,
Ajakid harmatozása
    Sok ezer gondot elűz.`,
 
`Teljesítsd angyali szókkal,
    Szeretőd amire kért:
Ezer ambrózia csókkal
    Fizetek válaszodért.`
        ]
    },
    {
        title: "A Reményhez",
        author: "Csokonai Vitéz Mihály",
        recite: true,
        active: document.getElementById("poems-checkbox-1-5"),
        verses: [
`Főldiekkel játszó
    Égi tűnemény,
Istenségnek látszó
    Csalfa, vak Remény!
Kit teremt magának
    A boldogtalan,
S mint védangyalának,
    Bókol úntalan.
Síma száddal mit kecsegtetsz?
    Mért nevetsz felém?
Kétes kedvet mért csepegtetsz
    Még most is belém?
Csak maradj magadnak!
    Biztatóm valál;
Hittem szép szavadnak:
    Mégis megcsalál.`,
 
`Kertem nárcisokkal
    Végig űltetéd;
Csörgő patakokkal
    Fáim éltetéd;
Rám ezer virággal
    Szórtad a tavaszt
S égi boldogsággal
    Fűszerezted azt.
Gondolatim minden reggel,
    Mint a fürge méh,
Repkedtek a friss meleggel
    Rózsáim felé.
Egy híjját esmértem
    Örömimnek még:
Lilla szívét kértem;
    S megadá az ég.`,
 
`Jaj, de friss rózsáim
    Elhervadtanak;
Forrásim, zőld fáim
    Kiszáradtanak;
Tavaszom, vígságom
    Téli búra vált;
Régi jó világom
    Méltatlanra szállt.
Óh! csak Lillát hagytad volna
    Csak magát nekem:
Most panaszra nem hajolna
    Gyászos énekem.
Karja közt a búkat
    Elfelejteném,
S a gyöngykoszorúkat
    Nem irígyleném.`,
 
`Hagyj el, óh Reménység!
    Hagyj el engemet;
Mert ez a keménység
    Úgyis eltemet.
Érzem: e kétségbe
    Volt erőm elhágy,
Fáradt lelkem égbe,
    Testem főldbe vágy.
Nékem már a rét hímetlen,
    A mező kisűlt,
A zengő liget kietlen,
    A nap éjre dűlt.
Bájoló lágy trillák!
    Tarka képzetek!
Kedv! Remények! Lillák!
    Isten véletek!`
        ]
    },
    {
        title: "A közelítő tél (1. vsz)",
        author: "Berzsenyi Dániel",
        recite: true,
        active: document.getElementById("poems-checkbox-1-6"),
        verses: [
`Hervad már ligetünk, s díszei hullanak,
Tarlott bokrai közt sárga levél zörög.
Nincs rózsás labyrinth, s balzsamos illatok
Közt nem lengedez a Zephyr.`
        ]
    },
    {
        title: "A magyarokhoz (I.) (1. vsz)",
        author: "Berzsenyi Dániel",
        recite: true,
        active: document.getElementById("poems-checkbox-1-7"),
        verses: [
`Romlásnak indult hajdan erős magyar!
Nem látod, Árpád vére miként fajul?
    Nem látod a bosszús egeknek
    Ostorait nyomorult hazádon?`
        ]
    },
    {
        title: "Osztályrészem (1. vsz)",
        author: "Berzsenyi Dániel",
        recite: true,
        active: document.getElementById("poems-checkbox-1-8"),
        verses: [
`Partra szállottam. Levonom vitorlám.
A szelek mérgét nemesen kiálltam.
Sok Charybdis közt, sok ezer veszélyben
Izzada orcám.`
        ]
    },
    {
        title: "Himnusz",
        author: "Kölcsey Ferenc",
        recite: true,
        active: document.getElementById("poems-checkbox-1-9"),
        verses: [
`Isten, áldd meg a magyart
Jó kedvvel, bőséggel,
Nyújts feléje védő kart,
Ha küzd ellenséggel;
Bal sors akit régen tép,
Hozz rá víg esztendőt,
Megbünhödte már e nép
A multat s jövendőt!`,
 
`Őseinket felhozád
Kárpát szent bércére,
Általad nyert szép hazát
Bendegúznak vére.
S merre zúgnak habjai
Tiszának, Dunának,
Árpád hős magzatjai
Felvirágozának.`,
 
`Értünk Kunság mezein
Ért kalászt lengettél,
Tokaj szőlővesszein
Nektárt csepegtettél.
Zászlónk gyakran plántálád
Vad török sáncára,
S nyögte Mátyás bús hadát
Bécsnek büszke vára.`,
 
`Hajh, de bűneink miatt
Gyúlt harag kebledben,
S elsújtád villámidat
Dörgő fellegedben,
Most rabló mongol nyilát
Zúgattad felettünk,
Majd töröktől rabigát
Vállainkra vettünk.`,
 
`Hányszor zengett ajkain
Ozman vad népének
Vert hadunk csonthalmain
Győzedelmi ének!
Hányszor támadt tenfiad
Szép hazám kebledre,
S lettél magzatod miatt
Magzatod hamvvedre!`,
 
`Bújt az üldözött s felé
Kard nyúl barlangjában,
Szerte nézett s nem lelé
Honját a hazában,
Bércre hág és völgybe száll,
Bú s kétség mellette,
Vérözön lábainál,
S lángtenger fölette.`,
 
`Vár állott, most kőhalom,
Kedv s öröm röpkedtek,
Halálhörgés, siralom
Zajlik már helyettek.
S ah, szabadság nem virúl
A holtnak véréből,
Kínzó rabság könnye hull
Árvánk hő szeméből!`,
 
`Szánd meg Isten a magyart
Kit vészek hányának,
Nyújts feléje védő kart
Tengerén kínjának.
Bal sors akit régen tép,
Hozz rá víg esztendőt,
Megbünhödte már e nép
A multat s jövendőt!`
        ]
    },
    {
        title: "Zrínyi második éneke",
        author: "Kölcsey Ferenc",
        recite: false,
        active: document.getElementById("poems-checkbox-2-5"),
        verses: [
`Te lásd meg, ó sors, szenvedő hazámat,
Vérkönnyel ázva nyög feléd!
Mert kánya, kígyó, féreg egyre támad,
És marja, rágja kebelét.
A méreg ég, és ömlik mély sebére,
S ő védtelen küzd egyedűl,
Hatalmas, ó légy gyámja, légy vezére,
Vagy itt az óra, s végveszélybe dűl!`,
 
`Áldást adék, sok magzatot honodnak,
Mellén kiket táplál vala;
S másokra vársz, hogy érte vívni fognak?
Önnépe nem lesz védfala?
Szív, lélek el van vesztegetve rátok;
Szent harcra nyitva várt az út,
S ti védfalat körűle nem vonátok;
Ő gyáva fajt szült, s érte sírba jut.`,
 
`De szánjad, ó sors, szenvedő hazámat!
Te rendelél áldást neki:
S a vad csoport, mely rá dühödve támad,
Kiket nevelt, öngyermeki.
Taposd el a fajt, rút szennyét nememnek;
S míg hamvokon majd átok űl,
Ah tartsd meg őt, a hűv anyát, teremnek
Tán jobb fiak, s védvén állják körűl.`,
 
`Törvényem él. Hazád őrcsillagzatja
Szülötti bűnein leszáll;
Szelíd sugárit többé nem nyugtatja
Az ősz apák sírhalminál.
És más hon áll a négy folyam partjára,
Más szózat és más keblü nép;
S szebb arcot ölt e föld kies határa,
Hogy kedvre gyúl, ki bájkörébe lép.`
        ]
    },
    {
        title: "Szózat",
        author: "Vörösmarty Mihály",
        recite: true,
        active: document.getElementById("poems-checkbox-1-10"),
        verses: [
`Hazádnak rendületlenűl
Légy híve, oh magyar ;
Bölcsőd az s majdan sírod is,
Mely ápol s eltakar.

A nagy világon e kivűl
Nincsen számodra hely ;
Áldjon vagy verjen sors keze :
Itt élned, halnod kell.`,

`Ez a föld, melyen annyiszor
Apáid vére folyt ;
Ez, melyhez minden szent nevet
Egy ezred év csatolt.

Itt küzdtenek honért a hős
Árpádnak hadai ;
Itt törtek össze rabigát
Hunyadnak karjai.`,

`Szabadság! itten hordozák
Véres zászlóidat,
S elhulltanak legjobbjaink
A hosszu harc alatt.

És annyi balszerencse közt,
Oly sok viszály után,
Megfogyva bár, de törve nem,
Él nemzet e hazán.`,

`S népek hazája, nagy világ !
Hozzád bátran kiált :
"Egy ezredévnyi szenvedés
Kér éltet vagy halált !"

Az nem lehet, hogy annyi szív
Hiában onta vért,
S keservben annyi hű kebel
Szakadt meg a honért.`,

`Az nem lehet, hogy ész, erő,
És oly szent akarat
Hiába sorvadozzanak
Egy átoksúly alatt.

Még jőni kell, még jőni fog
Egy jobb kor, mely után
Buzgó imádság epedez
Százezrek ajakán.`,

`Vagy jőni fog, ha jőni kell,
A nagyszerű halál,
Hol a temetkezés fölött
Egy ország vérben áll.

S a sírt, hol nemzet sűlyed el,
Népek veszik körűl,
S az ember millióinak
Szemében gyászköny űl.`,

`Légy híve rendületlenűl
Hazádnak, oh magyar :
Ez éltetőd, s ha elbukál,
Hantjával ez takar.

A nagy világon e kivűl
Nincsen számodra hely ;
Áldjon vagy verjen sors keze :
Itt élned, halnod kell.`
        ]
    },
    {
        title: "Gondolatok a könyvtárban",
        author: "Vörösmarty Mihály",
        recite: false,
        active: document.getElementById("poems-checkbox-2-6"),
        verses: [
`Hová lépsz most, gondold meg, oh tudós,
Az emberiségnek elhányt rongyain
Komor betűkkel, mint a téli éj,
Leírva áll a rettentő tanulság:`,

`"Hogy míg nyomorra milliók születnek,
Néhány ezernek jutna üdv a földön,
Ha istenésszel, angyal érzelemmel
Használni tudnák éltök napjait."`,

`Miért e lom? hogy mint juh a gyepen
Legeljünk rajta? s léha tudománytól
Zabáltan elhenyéljük a napot?
Az isten napját! nemzet életét!`,

`Miért e lom? szagáról ismerem meg
Az állatember minden bűneit.
Erény van írva e lapon; de egykor
Zsivány ruhája volt. S amott?
Az ártatlanság boldog napjai
Egy eltépett szűz gyönge öltönyén,
Vagy egy dühös bujának pongyoláján. ...`,
`...És itt a törvény - véres lázadók
Hamis birák és zsarnokok mezéből
Fehérre mosdott könyvnek lapjain.
Emitt a gépek s számok titkai!
De akik a ruhát elszaggaták
Hogy majd belőle csínos könyv legyen,
Számon kivül maradtak: Ixion
Bőszült vihartól űzött kerekén
Örvény nyomorban, vég nélkül kerengők.`,

`Az őrült ágyán bölcs fej álmodik;
A csillagászat egy vak koldus asszony
Condráin méri a világokat:
Világ és vakság egy hitvány lapon!
Könyv lett a rabnép s gyávák köntöséből
S most a szabadság és a hősi kor
Beszéli benne nagy történetét.
Hűség, barátság aljas hitszegők
Gunyáiból készült lapon regél.
Irtózatos hazudság mindenütt!
Az írt betűket a sápadt levél
Halotti képe kárhoztatja el.`,

`Országok rongya! könyvtár a neved,
De hát hol a könyv mely célhoz vezet?
Hol a nagyobb rész boldogsága? - Ment-e
A könyvek által a világ elébb?
Ment, hogy minél dicsőbbek népei,
Salakjok annál borzasztóbb legyen,
S a rongyos ember bőszült kebele
Dögvészt sohajtson a hír nemzetére.`,

`De hát ledöntsük, amit ezredek
Ész napvilága mellett dolgozának?
A bölcsek és a költők műveit,
S mit a tapasztalás arany
Bányáiból kifejtett az idő?
Hány fényes lélek tépte el magát,
Virrasztott a sziv égő romja mellett,
Hogy tévedt, sujtott embertársinak
Irányt adjon s erőt, vigasztalást. ...`,
`...Az el nemn ismert érdem hősei,
Kiket - midőn már elhunytak s midőn
Ingyen tehette - csúfos háladattal
Kezdett imádni a galád világ,
Népboldogító eszmék vértanúi
Ők mind e többi rongykereskedővel,
Ez únt fejek - s e megkorhadt szivekkel,
Rosz szenvedélyek oktatóival
Ők mind együtt - a jók a rosz miatt -
Egy máglya üszkén elhamvadjanak?`,

`Oh nem, nem! amit mondtam, fájdalom volt,
Hogy annyi elszánt lelkek fáradalma,
Oly fényes elmék a sár fiait
A sűlyedéstől meg nem mentheték!
Hogy még alig bír a föld egy zugot,
Egy kis virányt a puszta homokon
Hol legkelendőbb név az emberé,
Hol a teremtés ősi jogai
E névhez "ember!" advák örökűl -
Kivéve aki feketén született,
Mert azt baromnak tartják e dicsők
S az isten képét szíjjal ostorozzák.`,

`És mégis - mégis fáradozni kell.
Egy újabb szellem kezd felküzdeni,
Egy új irány tör át a lelkeken:
A nyers fajokba tisztább érzeményt
S gyümölcsözőbb eszméket oltani,
Hogy végre egymást szívben átkarolják,
S uralkodjék igazság, szeretet.
Hogy a legalsó pór is kunyhajában
Mondhassa bizton: nem vagyok magam!
Testvérim vannak, számos milliók;
Én védem őket, ők megvédnek engem.
Nem félek tőled, sors, bármit akarsz.`,

`Ez az, miért csüggedni nem szabad.
Rakjuk le, hangyaszorgalommal, amit
Agyunk az ihlett órákban teremt.
S ha összehordtunk minden kis követ,
Építsük egy újabb kor Bábelét,
Míg oly magas lesz, mint a csillagok.
S ha majd benéztünk a menny ajtaján,
Kihallhatók az angyalok zenéjét,
És földi vérünk minden csepjei
Magas gyönyörnek lángjától hevültek,
Menjünk szét mint a régi nemzetek,
És kezdjünk újra tűrni és tanulni.`,

`Ez hát a sors és nincs vég semmiben?
Nincs és nem is lesz, míg a föld ki nem hal
S meg nem kövűlnek élő fiai.
Mi dolgunk a világon? küzdeni,
És tápot adni lelki vágyainknak.
Ember vagyunk, a föld s az ég fia.
Lelkünk a szárny, mely ég felé viszen,
S mi ahelyett, hogy törnénk fölfelé,
Unatkozzunk s hitvány madár gyanánt
Posvány iszapját szopva éldegéljünk?
Mi dolgunk a világon? küzdeni
Erőnk szerint a legnemesbekért.
Előttünk egy nemzetnek sorsa áll.
Ha azt kivíttuk a mély sülyedésből
S a szellemharcok tiszta sugaránál
Olyan magasra tettük, mint lehet,
Mondhatjuk, térvén őseink porához:
Köszönjük élet! áldomásidat,
Ez jó mulatság, férfi munka volt!`
        ]
    },
    {
        title: "Előszó",
        author: "Vörösmarty Mihály",
        recite: false,
        active: document.getElementById("poems-checkbox-2-7"),
        verses: [
`Midőn ezt írtam, tiszta volt az ég.
Zöld ág virított a föld ormain.
Munkában élt az ember mint a hangya:
Küzdött a kéz, a szellem működött,
Lángolt a gondos ész, a szív remélt,
S a béke izzadt homlokát törölvén
Meghozni készült a legszebb jutalmat,
Az emberüdvöt, melyért fáradott.
Ünnepre fordúlt a természet, ami
Szép és jeles volt benne, megjelent.`,
 
`Öröm - s reménytől reszketett a lég,
Megszülni vágyván a szent szózatot,
Mely által a világot mint egy új, egy
Dicsőbb teremtés hangján üdvözölje.
Hallottuk a szót. Mélység és magasság
Viszhangozák azt. S a nagy egyetem
Megszünt forogni egy pillantatig.
Mély csend lön, mint szokott a vész előtt.
A vész kitört. Vérfagylaló keze
Emberfejekkel lapdázott az égre,
Emberszivekben dúltak lábai.
Lélekzetétől meghervadt az élet,
A szellemek világa kialutt,
S az elsötétült égnek arcain
Vad fénnyel a villámok rajzolák le
Az ellenséges istenek haragját.
És folyton-folyvást ordított a vész,
Mint egy veszetté bőszült szörnyeteg.`,

`Amerre járt, irtóztató nyomában
Szétszaggatott népeknek átkai
Sohajtanak fel csonthalmok közől;
És a nyomor gyámoltalan fejét
Elhamvadt várasokra fekteti.
Most tél van és csend és hó és halál.
A föld megőszült;
Nem hajszálanként, mint a boldog ember,
Egyszerre őszült az meg, mint az isten,
Ki megteremtvén a világot, embert,
E félig istent, félig állatot,
Elborzadott a zordon mű felett
És bánatában ősz lett és öreg.`,
 
`Majd eljön a hajfodrász, a tavasz,
S az agg föld tán vendéghajat veszen,
Virágok bársonyába öltözik.
Üvegszemén a fagy fölengedend,
S illattal elkendőzött arcain
Jókedvet és ifjuságot hazud:
Kérdjétek akkor ezt a vén kacért,
Hová tevé boldogtalan fiait?`
        ]
    },
    {
        title: "A bánat? egy nagy oceán",
        author: "Petőfi Sándor",
        recite: true,
        active: document.getElementById("poems-checkbox-1-11"),
        verses: [
`A bánat? egy nagy oceán.
S az öröm?
Az oceán kis gyöngye. Talán,
Mire fölhozom, össze is töröm.`
        ]
    },
    {
        title: "Fa leszek, ha",
        author: "Petőfi Sándor",
        recite: true,
        active: document.getElementById("poems-checkbox-1-12"),
        verses: [
`Fa leszek, ha fának vagy virága.
Ha harmat vagy: én virág leszek.
Harmat leszek, ha te napsugár vagy...
Csak, hogy lényink egyesüljenek.`,
 
`Ha, leányka, te vagy a mennyország:
Akkor én csillagá változom.
Ha, leányka, te vagy a pokol: (hogy
Egyesüljünk) én elkárhozom.`
        ]
    },
    {
        title: "A XIX. század költői",
        author: "Petőfi Sándor",
        recite: false,
        active: document.getElementById("poems-checkbox-2-8"),
        verses: [
`Ne fogjon senki könnyelműen
A húrok pengetésihez!
Nagy munkát vállal az magára,
Ki most kezébe lantot vesz.
Ha nem tudsz mást, mint eldalolni
Saját fájdalmad s örömed:
Nincs rád szüksége a világnak,
S azért a szent fát félretedd.`,
 
`Pusztában bujdosunk, mint hajdan
Népével Mózes bujdosott,
S követte, melyet isten külde
Vezérül, a lángoszlopot.
Ujabb időkben isten ilyen
Lángoszlopoknak rendelé
A költőket, hogy ők vezessék
A népet Kánaán felé.`,
 
`Előre hát mind, aki költő,
A néppel tűzön-vízen át!
Átok reá, ki elhajítja
Kezéből a nép zászlaját.
Átok reá, ki gyávaságból
Vagy lomhaságból elmarad,
Hogy, míg a nép küzd, fárad, izzad,
Pihenjen ő árnyék alatt!`,
 
`Vannak hamis próféták, akik
Azt hirdetik nagy gonoszan,
Hogy már megállhatunk, mert itten
Az ígéretnek földe van.
Hazugság, szemtelen hazugság,
Mit milliók cáfolnak meg,
Kik nap hevében, éhen-szomjan,
Kétségbeesve tengenek.`,
 
`Ha majd a bőség kosarából
Mindenki egyaránt vehet,
Ha majd a jognak asztalánál
Mind egyaránt foglal helyet,
Ha majd a szellem napvilága
Ragyog minden ház ablakán:
Akkor mondhatjuk, hogy megálljunk,
Mert itt van már a Kánaán!`,
 
`És addig? addig nincs megnyugvás,
Addig folyvást küszködni kell. -
Talán az élet, munkáinkért,
Nem fog fizetni semmivel,
De a halál majd szemeinket
Szelíd, lágy csókkal zárja be,
S virágkötéllel, selyempárnán
Bocsát le a föld mélyibe.`
        ]
    },
    {
        title: "Toldi estéje",
        author: "Arany János",
        recite: true,
        active: document.getElementById("poems-checkbox-1-13"),
        verses: [
`Őszbe csavarodott a természet feje,
Dérré vált a harmat, hull a fák levele,
Rövidebb, rövidebb lesz a napnak útja,
És hosszúkat alszik rá, midőn megfutja.`,
 
`Megpihen legszélén az égi határnak
S int az öregeknek: "benneteket várlak!"
Megrezdűl a feje sok öregnek erre:
Egymásután mégis mennek a nyughelyre.`,
 
`"Végső rendelkezést tennék: de hát minek?
Nem igen van: miről. S ha volna sincs: kinek.
Nem hagyok örököst... csak egy hű cselédet:
Azt kötöm szivedre - - meg a magyar népet.`,
 
`Szeresd a magyart, de ne faragd le" - szóla,
"Erejét, formáját, durva kérgét róla:
Mert mi haszna símább, ha jól megfaragják?
Nehezebb eltörni a faragatlan fát."`
        ]
    },
    {
        title: "Epilógus",
        author: "Arany János",
        recite: false,
        active: document.getElementById("poems-checkbox-2-9"),
        verses: [
`Az életet már megjártam.
Többnyire csak gyalog jártam,
Gyalog bizon'...
Legfölebb ha omnibuszon.`,
 
`Láttam sok kevély fogatot,
Fényes tengelyt, cifra bakot:
S egy a lelkem!
Soha meg se' irigyeltem.`,
 
`Nem törődtem bennülővel,
Hetyke úrral, cifra nővel:
Hogy' áll orra
Az út szélin baktatóra.`,
 
`Ha egy úri lócsiszárral
Találkoztam s bevert sárral:
Nem pöröltem, -
Félreálltam, letöröltem.`,
 
`Hiszen az útfélen itt-ott,
Egy kis virág nekem nyitott:
Azt leszedve,
Megvolt szívem minden kedve.`,
 
`Az életet, ím, megjártam;
Nem azt adott, amit vártam:
Néha többet,
Kérve, kellve, kevesebbet.`,
 
`Ada címet, bár nem kértem,
S több a hír-név, mint az érdem:
Nagyravágyva,
Bételt volna keblem vágya.`,
 
`Kik hiúnak és kevélynek -
Tudom, boldognak is vélnek:
S boldogságot
Irígy nélkül még ki látott?`,
 
`Bárha engem titkos métely
Fölemészt: az örök kétely;
S pályám bére
Égető, mint Nessus vére.`,
 
`Mily temérdek munka várt még!...
Mily kevés, amit beválték
Félbe'-szerbe'
S hány reményem hagyott cserbe'!...`,
 
`Az életet már megjártam;
Mit szivembe vágyva zártam,
Azt nem hozta,
Attól makacsul megfoszta.`,
 
`Egy kis független nyugalmat,
Melyben a dal megfoganhat,
Kértem kérve:
S ő halasztá évrül-évre.`,
 
`Csöndes fészket zöld lomb árnyán,
Hova múzsám el-elvárnám,
Mely sajátom;
Benne én és kis családom.`,
 
`Munkás, vidám öregséget,
Hol, mit kezdtem, abban véget...
Ennyi volt csak;
S hogy megint ültessek, oltsak.`,
 
`Most, ha adná is már, késő:
Egy nyugalom vár, a végső:
Mert hogy' szálljon,
Bár kalitja már kinyitva,
Rab madár is, szegett szárnyon?`
        ]
    },
    {
        title: "Góg és Magóg fia vagyok én",
        author: "Ady Endre",
        recite: true,
        active: document.getElementById("poems-checkbox-1-14"),
        verses: [
`Góg és Magóg fia vagyok én,
Hiába döngetek kaput, falat
S mégis megkérdem tőletek:
Szabad-e sírni a Kárpátok alatt?`,
 
`Verecke híres útján jöttem én,
Fülembe még ősmagyar dal rivall,
Szabad-e Dévénynél betörnöm
Új időknek új dalaival?`,
 
`Fülembe forró ólmot öntsetek,
Legyek az új, az énekes Vazul,
Ne halljam az élet új dalait,
Tiporjatok reám durván, gazul.`,
 
`De addig sírva, kínban, mit se várva
Mégiscsak száll új szárnyakon a dal
S ha elátkozza százszor Pusztaszer,
Mégis győztes, mégis új és magyar.`
        ]
    },
    {
        title: "Kocsi-út az éjszakában",
        author: "Ady Endre",
        recite: true,
        active: document.getElementById("poems-checkbox-1-15"),
        verses: [
`Milyen csonka ma a Hold,
Az éj milyen sivatag, néma,
Milyen szomoru vagyok én ma,
Milyen csonka ma a Hold.`,
 
`Minden Egész eltörött,
Minden láng csak részekben lobban,
Minden szerelem darabokban,
Minden Egész eltörött.`,
 
`Fut velem egy rossz szekér,
Utána mintha jajszó szállna,
Félig mély csönd és félig lárma,
Fut velem egy rossz szekér.`
        ]
    },
    {
        title: "A lírikus epilógja",
        author: "Babits Mihály",
        recite: false,
        active: document.getElementById("poems-checkbox-2-10"),
        verses: [
`Csak én birok versemnek hőse lenni,
első s utolsó mindenik dalomban:
a mindenséget vágyom versbe venni,
de még tovább magamnál nem jutottam.`,
 
`S már azt hiszem: nincs rajtam kívül semmi,
de hogyha van is, Isten tudja hogy' van?
Vak dióként dióban zárva lenni
s törésre várni beh megundorodtam.`,
 
`Bűvös körömből nincsen mód kitörnöm,
csak nyílam szökhet rajta át: a vágy -
de jól tudom, vágyam sejtése csalfa.`,
 
`Én maradok: magam számára börtön,
mert én vagyok az alany és a tárgy,
jaj én vagyok az ómega s az alfa.`
        ]
    },
    {
        title: "Jónás imája",
        author: "Babits Mihály",
        recite: true,
        active: document.getElementById("poems-checkbox-1-16"),
        verses: [
`Hozzám már hűtlen lettek a szavak,
vagy én lettem mint túláradt patak
oly tétova céltalan parttalan
s ugy hordom régi sok hiú szavam
mint a tévelygő ár az elszakadt
sövényt jelzőkarókat gátakat.`,
 
`Óh bár adna a Gazda patakom
sodrának medret, biztos útakon
vinni tenger felé, bár verseim
csücskére Tőle volna szabva rim
előre kész, s mely itt áll polcomon,
szent Bibliája lenne verstanom, ...`,

`...hogy ki mint Jónás, rest szolgája, hajdan
bujkálva, később mint Jónás a Halban
leszálltam a kinoknak eleven
süket és forró sötétjébe, nem
három napra, de három hóra, három
évre vagy évszázadra, megtaláljam,`,

`mielőtt egy mégvakabb és örök
Cethal szájában végkép eltünök,
a régi hangot s, szavaim hibátlan
hadsorba állván, mint Ő sugja, bátran
szólhassak s mint rossz gégémből telik
és ne fáradjak bele estelig
vagy míg az égi és ninivei hatalmak
engedik hogy beszéljek s meg ne haljak.`
        ]
    },
    {
        title: "Hajnali részegség",
        author: "Kosztilányi Dezső",
        recite: false,
        active: document.getElementById("poems-checkbox-2-11"),
        verses: [
`Elmondanám ezt néked. Ha nem unnád.
Múlt éjszaka - háromkor - abbahagytam
a munkát.
Le is feküdtem. Ám a gép az agyban
zörgött tovább, kattogva-zúgva nagyban,
csak forgolódtam dühösen az ágyon,
nem jött az álom.
Hívtam pedig, így és úgy, balga szókkal,
százig olvasva s mérges altatókkal...`,
 
`...Az, amit irtam, lázasan meredt rám.
Izgatta szívem negyven cigarettám.
Meg más egyéb is. A fekete. Minden.
Hát fölkelek, nem bánom az egészet,
sétálgatok szobámba le- föl, ingben,
köröttem a családi fészek,
a szájakon lágy, álombeli mézek
s amint botorkálok itt, mint részeg,
az ablakon kinézek.`,
 
`Várj csak, hogy is kezdjem, hogy magyarázzam?
Te ismered a házam
s ha emlékezni tudsz a
a hálószobámra, azt is tudhatod,
milyen szegényes, elhagyott
ilyenkor innen a Logodi-utca,
ahol lakom...`,
 
`...Tárt otthonokba látsz az ablakon.
Az emberek feldöntve és vakon
vízszintesen feküsznek
s megforduló szemük kancsítva néz szét
ködébe csalfán csillogó eszüknek,
mert a mindennapos agy-vérszegénység
borult reájuk...`,
 
`...Mellettük a cipőjük, a ruhájuk
s ők egy szobába zárva, mint dobozba,
melyet ébren szépítnek álmodozva,
de - mondhatom - ha igy reá meredhetsz,
minden lakás olyan, akár a ketrec,
Egy keltőóra átketyeg a csöndből,
sántítva baktat, nyomba felcsörömpöl...`,
 
`...és az alvóra szól a
harsány riasztó: «ébredj a valóra».
A ház is alszik, holtan és bután,
mint majd száz év után,
ha összeomlik, gyom virít alóla
s nem sejti senki róla,
hogy otthonunk volt-e, vagy állat óla.`,
 
`De fönn, barátom, ott fönn a derűs ég,
valami tiszta, fényes nagyszerűség,
reszketve és szilárdul, mint a hűség.
Az égbolt,
egészen úgy, mint hajdanába rég volt,
mint az anyám paplanja, az a kék folt,
mint a vízfesték, mely írkámra szétfolyt,
s a csillagok
lélekző lelke csöndesen ragyog
a langyos őszi
éjjelbe, mely a hideget előzi,
kimondhatatlan messze s odaát,
ők, akik nézték Hannibál hadát
s most néznek engem, aki ide estem
és állok egy ablakba, Budapesten.`,
 
`Én nem tudom, mi történt vélem ekkor,
de úgy rémlett, egy szárny suhan felettem
s felém hajol az, amit eltemettem
rég, a gyerekkor.`,
 
`Olyan sokáig
bámultam az égbolt gazdag csodáit,
hogy már pirkadt is keleten s a szélben
a csillagok szikrázva, észrevétlen
meg-meglibegtek és távolba roppant
tűzcsóva lobbant,
egy mennyei kastély kapuja tárult,
körötte láng gyult,
valami rebbent,
oszolni kezdett a vendégsereg fent....`,
 
`...a hajnali homály mély
árnyékai közé lengett a báléj,
künn az előcsarnok fényárban úszott,
a házigazda a lépcsőn bucsúzott,
előkelő úr, az ég óriása,
a bálterem hatalmas glóriása
s mozgás riadt, csilingelés, csodás,
halk női suttogás,
mint amikor már vége van a bálnak
s a kapusok kocsikért kiabálnak.`,
 
`Egy csipkefátyol
látszott, amint a távol
homályból
gyémántosan aláfoly
egy messze kéklő,
pazar belépő,
melyet magára ölt egy drága, szép nő
és rajt egy ékkő
behintve fénnyel ezt a néma békét...`,
 
`...a halovány ég túlvilági kékét,
vagy tán egy angyal, aki szűzi,
szép mozdulattal csillogó fejékét
hajába tűzi
és az álomnál csendesebben
egy arra ringó,
könnyűcske hintó
mélyébe lebben
s tovább robog kacér mosollyal ebben.
aztán amíg vad paripái futnak
a farsangosan-lángoló Tejutnak
arany konfetti-záporába sok száz
bazár között, patkójuk fölsziporkáz.`,
 
`Szájtátva álltam
s a boldogságtól föl-fölkiabáltam,
az égbe bál van, minden este bál van
és fölvilágolt mély értelme ennek
a régi, nagy titoknak, hogy a mennynek
tündérei hajnalba hazamennek
fényes körútjain a végtelennek.`,
 
`Virradtig
maradtam így és csak bámultam addig.
Egyszerre szóltam: hát te mit kerestél
ezen a földön, mily silány regéket,
miféle ringyók rabságába estél,
mily kézirat volt fontosabb tenéked,
hogy annyi nyár múlt, annyi sok deres tél
és annyi rest éj
s csak most tünik szemedbe ez az estély?`,
 
`Ötven,
jaj ötven éve - lelkem visszadöbben -
halottjaim is itt-ott, egyre többen -
jaj, ötven éve tündököl fölöttem
ez a sok élő, fényes, égi szomszéd,
ki látja, hogy a könnyem morzsolom szét.
Szóval bevallom néked, megtörötten
földig borultam s mindezt megköszöntem.`,
 
`Nézd csak, tudom, hogy nincsen mibe hinnem
s azt is tudom, hogy el kell mennem innen.
de pattanó szivem feszitve húrnak,
dalolni kezdtem ekkor azúrnak,
annak, kiről nem tudja senki, hol van,
annak, kit nem lelek se most, se holtan.
Bizony, ma már, hogy izmaim lazúlnak,
úgy érzem én, barátom, hogy a porban,
hol lelkek és göröngyök közt botoltam,
mégis csak egy nagy, ismeretlen úrnak
vendége voltam.`
        ]
    },
    {
        title: "Reménytelenül",
        author: "József Attila",
        recite: false,
        active: document.getElementById("poems-checkbox-2-12"),
        verses: [
`Lassan, tünődve
 
Az ember végül homokos,
szomorú, vizes síkra ér,
szétnéz merengve és okos
fejével biccent, nem remél.`,
 
`Én is így próbálok csalás
nélkül szétnézni könnyedén.
Ezüstös fejszesuhanás
játszik a nyárfa levelén.
 
A semmi ágán ül szivem,
kis teste hangtalan vacog,
köréje gyűlnek szeliden
s nézik, nézik a csillagok.`,
 
`Vas-színű égboltban...
 
Vas-színű égboltban forog
a lakkos, hűvös dinamó.
Óh, zajtalan csillagzatok!
Szikrát vet fogam közt a szó - -`,
 
`Bennem a mult hull, mint a kő
az űrön által hangtalan.
Elleng a néma, kék idő.
Kard éle csillan: a hajam - -
 
Bajszom mint telt hernyó terül
elillant ízű számra szét.
Fáj a szívem, a szó kihül.
Dehát kinek is szólanék - -`
        ]
    },
    {
        title: "Óda",
        author: "József Attila",
        recite: false,
        active: document.getElementById("poems-checkbox-2-13"),
        verses: [
`Itt ülök csillámló sziklafalon.
Az ifju nyár
könnyű szellője, mint egy kedves
vacsora melege, száll.
Szoktatom szívemet a csendhez.
Nem oly nehéz -
idesereglik, ami tovatűnt,
a fej lehajlik és lecsüng
a kéz.`,
 
`Nézem a hegyek sörényét -
homlokod fényét
villantja minden levél.
Az úton senki, senki,
látom, hogy meglebbenti
szoknyád a szél.
És a törékeny lombok alatt
látom előrebiccenni hajad,
megrezzenni lágy emlőidet és
- amint elfut a Szinva-patak -
ím újra látom, hogy fakad
a kerek fehér köveken,
fogaidon a tündér nevetés.`,
 
`Óh mennyire szeretlek téged,
ki szóra bírtad egyaránt
a szív legmélyebb üregeiben
cseleit szövő, fondor magányt
s a mindenséget.
Ki mint vízesés önnön robajától,
elválsz tőlem és halkan futsz tova,
míg én, életem csúcsai közt, a távol
közelében, zengem, sikoltom,
verődve földön és égbolton,
hogy szeretlek, te édes mostoha!`,
 
`Szeretlek, mint anyját a gyermek,
mint mélyüket a hallgatag vermek,
szeretlek, mint a fényt a termek,
mint lángot a lélek, test a nyugalmat!
Szeretlek, mint élni szeretnek
halandók, amíg meg nem halnak.`,
 
`Minden mosolyod, mozdulatod, szavad,
őrzöm, mint hulló tárgyakat a föld.
Elmémbe, mint a fémbe a savak,
ösztöneimmel belemartalak,
te kedves, szép alak,
lényed ott minden lényeget kitölt.`,
 
`A pillanatok zörögve elvonulnak,
de te némán ülsz fülemben.
Csillagok gyúlnak és lehullnak,
de te megálltál szememben.
Ízed, miként a barlangban a csend,
számban kihűlve leng
s a vizes poháron kezed,
rajta a finom erezet,
föl-földereng.`,
 
`Óh, hát miféle anyag vagyok én,
hogy pillantásod metsz és alakít?
Miféle lélek és miféle fény
s ámulatra méltó tünemény,
hogy bejárhatom a semmiség ködén
termékeny tested lankás tájait?
 
S mint megnyílt értelembe az ige,
alászállhatok rejtelmeibe!...`,
 
`Vérköreid, miként a rózsabokrok,
reszketnek szüntelen.
Viszik az örök áramot, hogy
orcádon nyíljon ki a szerelem
s méhednek áldott gyümölcse legyen.
Gyomrod érzékeny talaját
a sok gyökerecske át meg át
hímezi, finom fonalát
csomóba szőve, bontva bogját -
hogy nedűid sejtje gyűjtse sok raját
s lombos tüdőd szép cserjéi saját
dicsőségüket susogják!`,
 
`Az örök anyag boldogan halad
benned a belek alagútjain
és gazdag életet nyer a salak
a buzgó vesék forró kútjain!
Hullámzó dombok emelkednek,
csillagképek rezegnek benned,
tavak mozdulnak, munkálnak gyárak,
sürög millió élő állat,
bogár,
hinár,
a kegyetlenség és a jóság;
nap süt, homályló északi fény borong -
tartalmaidban ott bolyong
az öntudatlan örökkévalóság.`,
 
`Mint alvadt vérdarabok,
úgy hullnak eléd
ezek a szavak.
A lét dadog,
csak a törvény a tiszta beszéd.
De szorgos szerveim, kik újjászülnek
napról napra, már fölkészülnek,
hogy elnémuljanak.`,
 
`De addig mind kiált -
Kit két ezer millió embernek
sokaságából kiszemelnek,
te egyetlen, te lágy
bölcső, erős sír, eleven ágy,
fogadj magadba!...`,
 
`(Milyen magas e hajnali ég!
Seregek csillognak érceiben.
Bántja szemem a nagy fényesség.
El vagyok veszve, azt hiszem.
Hallom, amint fölöttem csattog,
ver a szivem.)`,
 
`(Visz a vonat, megyek utánad,
talán ma még meg is talállak,
talán kihűl e lángoló arc,
talán csendesen meg is szólalsz:
 
Csobog a langyos víz, fürödj meg!
Ime a kendő, törülközz meg!
Sül a hús, enyhítse étvágyad!
Ahol én fekszem, az az ágyad.)`
        ]
    },
    {
        title: "Valaki jár a fák hegyén",
        author: "Kányádi Sándor",
        recite: true,
        active: document.getElementById("poems-checkbox-1-17"),
        verses: [
`valaki jár a fák hegyén
ki gyújtja s oltja csillagod
csak az nem fél kit a remény
már végképp magára hagyott`,
 
`én félek még reménykedem
ez a megtartó irgalom
a gondviselő félelem
kísért eddigi utamon`,
 
`valaki jár a fák hegyén
vajon amikor zuhanok
meggyújt-e akkor még az én
tüzemnél egy új csillagot`,
 
`vagy engem is egyetlenegy
sötétlő maggá összenyom
s nem villantja föl lelkemet
egy megszülető csillagon`,
 
`valaki jár a fák hegyén
mondják úr minden porszemen
mondják hogy maga a remény
mondják maga a félelem`
        ]
    },
    {
        title: "Halotti beszéd a hulló leveleknek",
        author: "Reményik Sándor",
        recite: false,
        active: document.getElementById("poems-checkbox-2-14"),
        verses: [
`Látjátok feleim, hogy mik vagyunk?
Bizony bíbor és bronz és arany
És örökkévaló szent szépség vagyunk.
Ahogy halódunk, hullunk nesztelen:
Bizony, e világ dőre, esztelen
Pompájánál nagyobb pompa vagyunk...`,
 
`...Nem történhetik velünk semmi sem,
Mi megronthatná szép, igaz-magunk.
Míg a fán vagyunk: napban ragyogunk
S ha alászállunk: vár a hűs avar,
Testvér-levél testvér-lombot takar,
Ott is otthon vagyunk...`,
 
`...Ha megkeményedünk és megfagyunk:
Zuzmara csillog rajtunk: hermelin.
Bíbor után a fehér hermelin.
Bizony szépek vagyunk.
Látjátok feleim, hogy mik vagyunk?
Ha végre földanyánk része leszünk,
Ott is szépek leszünk,
Ott is otthon leszünk...`,
 
`...És árvaság csak egy van, feleim:
Az erdőn kívül lenni.
Otthontalannak, hazátlannak lenni.
Nagyvárosok rideg utcakövén
A széltől sepertetni.
Sok más szeméttel összekevertetni.
Árvaság csak ez egy van, feleim.
S amíg itthon vagyunk:
Bizony bíbor és bronz és arany
És örökkévaló szent szépség vagyunk.`
        ]
    },
    {
        title: "Hetedik ecloga",
        author: "Radnóti Miklós",
        recite: false,
        active: document.getElementById("poems-checkbox-2-15"),
        verses: [
`Látod-e, esteledik s a szögesdróttal beszegett, vad
tölgykerités, barakk oly lebegő, felszívja az este.
Rabságunk keretét elereszti a lassu tekintet
és csak az ész, csak az ész, az tudja, a drót feszülését.
Látod-e drága, a képzelet itt, az is így szabadul csak,
megtöretett testünket az álom, a szép szabadító
oldja fel és a fogolytábor hazaindul ilyenkor...`,
 
`...Rongyosan és kopaszon, horkolva repülnek a foglyok,
Szerbia vak tetejéről búvó otthoni tájra.
Búvó otthoni táj! Ó, megvan-e még az az otthon?
Bomba sem érte talán? s van, mint amikor bevonultunk?
És aki jobbra nyöszörg, aki balra hever, hazatér-e?
Mondd, van-e ott haza még, ahol értik e hexametert is? ...`,
 
`...Ékezetek nélkül, csak sort sor alá tapogatva,
úgy irom itt a homályban a verset, mint ahogy élek,
vaksin, hernyóként araszolgatván a papíron;
zseblámpát, könyvet, mindent elvettek a Lager
őrei s posta se jön, köd száll le csupán barakunkra.
Rémhirek és férgek közt él itt francia, lengyel,
hangos olasz, szakadár szerb, méla zsidó a hegyekben,
szétdarabolt lázas test s mégis egy életet él itt, -
jóhírt vár, szép asszonyi szót, szabad emberi sorsot,
s várja a véget, a sűrü homályba bukót, a csodákat...`,
 
`...Fekszem a deszkán, férgek közt fogoly állat, a bolhák
ostroma meg-megujúl, de a légysereg elnyugodott már.
Este van, egy nappal rövidebb, lásd, ujra a fogság
és egy nappal az élet is. Alszik a tábor. A tájra
rásüt a hold s fényében a drótok ujra feszülnek,
s látni az ablakon át, hogy a fegyveres őrszemek árnya
lépdel a falra vetődve az éjszaka hangjai közben...`,
 
`...Alszik a tábor, látod-e drága, suhognak az álmok,
horkan a felriadó, megfordul a szűk helyen és már
ujra elalszik s fénylik az arca. Csak én ülök ébren,
féligszítt cigarettát érzek a számban a csókod
íze helyett és nem jön az álom, az enyhetadó, mert
nem tudok én meghalni se, élni se nélküled immár.`
        ]
    },
    {
        title: "Március",
        author: "Áprily Lajos",
        recite: false,
        active: document.getElementById("poems-checkbox-2-16"),
        verses: [
`A nap tüze, látod,
a fürge diákot
a hegyre kicsalta: a csúcsra kiállt.
Csengve, nevetve
kibuggyan a kedve
s egy ős evoét a fénybe kiált.`,
 
`Régi, kiszáradt
tó vize árad,
néma kutakban a víz kibuzog.
Zeng a picinyke
szénfejű cinke
víg dithyrambusa: dactilusok.`,
 
`Selymit a barka
már kitakarta,
sárga virágját bontja a som.
Fut, fut az áram
a déli sugárban
s hökken a hó a hideg havason.`,
 
`Barna patakja
napra kacagva
a lomha Marosba csengve siet.
Zeng a csatorna,
zeng a hegy orma,
s zeng - ugye zeng, ugye zeng a szíved?`
        ]
    },
    {
        title: "Ki viszi át a szerelmet",
        author: "Nagy László",
        recite: true,
        active: document.getElementById("poems-checkbox-1-18"),
        verses: [
`Létem ha végleg lemerűlt,
ki imád tücsök-hegedűt?
Lángot ki lehel deres ágra?
Ki feszül föl a szivárványra?
Lágy hantú mezővé a szikla-
csípőket ki öleli sírva?`,
 
`Ki becéz falban megeredt
hajakat, verőereket?
S dúlt hiteknek kicsoda állít
káromkodásból katedrálist?
Létem ha végleg lemerűlt,
ki rettenti a keselyűt!
S ki viszi át fogában tartva
a Szerelmet a túlsó partra!`
        ]
    }
];

// DOM Elements
const poemContainer = document.getElementById('poem-container');
const modeToggle = document.getElementById('typing-mode');
const reciteModeToggle = document.getElementById('recite-mode');
const perfectGrammarModeToggle = document.getElementById('perfect-grammar-mode');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const titleDropdown = document.getElementById('title-dropdown');
const authorDropdown = document.getElementById('author-dropdown');
const nextVerseTextarea = document.getElementById('next-verse');
const feedbackContainer = document.getElementById('feedback');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const answerBoxes = document.getElementById('answer-boxes');
const nextVerseGroup = document.getElementById('next-verse-group');
const nextVerseLabel = document.getElementById('next-verse-label');

const settingsButton = document.getElementById('settings-button');
const overlay = document.getElementById('overlay');
const settingsModal = document.getElementById('settings-modal');
const doneButton = document.getElementById('done-button');
const poemsButton = document.getElementById('poems-button');
const poemsModal = document.getElementById('poems-modal');
const poemsModalFlexdiv = document.getElementById('poems_main_div');
const poemsCheckbox1 = document.getElementById('poems-checkbox-1-0');
const poemsCheckbox2 = document.getElementById('poems-checkbox-2-0');

let areAnswersCorrect = []

// State variables
let currentPoem = null;
let poemIndex = -1;
let verseIndex = -1;
let reciteModeEnabled = true;
let requirePerfectMatch = perfectGrammarModeToggle.checked

// Function to initialize the page
function initialize() {
    nextButton.style.display = 'none';
    populateDropdowns();
    loadNewPoem();
}

// Function to populate dropdowns with unique poem titles and authors in alphabetical order
function populateDropdowns() {
    // Use Sets to track unique titles and authors
    const titleSet = new Set();
    const authorSet = new Set();

    // Populate Sets with unique titles and authors
    poems.forEach(poem => {
        titleSet.add(poem.title);
        authorSet.add(poem.author);
    });

    // Convert Sets to sorted arrays
    const titles = Array.from(titleSet).sort((a, b) => a.localeCompare(b));
    const authors = Array.from(authorSet).sort((a, b) => a.localeCompare(b));

    // Populate title dropdown
    titles.forEach(title => {
        const optionTitle = document.createElement('option');
        optionTitle.value = title;
        optionTitle.textContent = title;
        titleDropdown.appendChild(optionTitle);
    });

    // Populate author dropdown
    authors.forEach(author => {
        const optionAuthor = document.createElement('option');
        optionAuthor.value = author;
        optionAuthor.textContent = author;
        authorDropdown.appendChild(optionAuthor);
    });
}


// Function to toggle typing mode
function toggleMode() {
    if (!modeToggle.checked) {
        // Typing mode is on
        titleInput.style.display = 'block';
        authorInput.style.display = 'block';
        titleDropdown.style.display = 'none';
        authorDropdown.style.display = 'none';
    } else {
        // Typing mode is off
        titleInput.style.display = 'none';
        authorInput.style.display = 'none';
        titleDropdown.style.display = 'block';
        authorDropdown.style.display = 'block';
    }
}

// Function to load a new poem
function loadNewPoem() {
    let check1any = document.getElementById("poems-checkbox-1-1").checked || document.getElementById("poems-checkbox-1-2").checked || document.getElementById("poems-checkbox-1-3").checked || document.getElementById("poems-checkbox-1-4").checked || document.getElementById("poems-checkbox-1-5").checked || document.getElementById("poems-checkbox-1-6").checked || document.getElementById("poems-checkbox-1-7").checked || document.getElementById("poems-checkbox-1-8").checked || document.getElementById("poems-checkbox-1-9").checked || document.getElementById("poems-checkbox-1-10").checked || document.getElementById("poems-checkbox-1-11").checked || document.getElementById("poems-checkbox-1-12").checked || document.getElementById("poems-checkbox-1-13").checked || document.getElementById("poems-checkbox-1-14").checked || document.getElementById("poems-checkbox-1-15").checked || document.getElementById("poems-checkbox-1-16").checked || document.getElementById("poems-checkbox-1-17").checked || document.getElementById("poems-checkbox-1-18").checked
    let check2any = document.getElementById("poems-checkbox-2-1").checked || document.getElementById("poems-checkbox-2-2").checked || document.getElementById("poems-checkbox-2-3").checked || document.getElementById("poems-checkbox-2-4").checked || document.getElementById("poems-checkbox-2-5").checked || document.getElementById("poems-checkbox-2-6").checked || document.getElementById("poems-checkbox-2-7").checked || document.getElementById("poems-checkbox-2-8").checked || document.getElementById("poems-checkbox-2-9").checked || document.getElementById("poems-checkbox-2-10").checked || document.getElementById("poems-checkbox-2-11").checked || document.getElementById("poems-checkbox-2-12").checked || document.getElementById("poems-checkbox-2-13").checked || document.getElementById("poems-checkbox-2-14").checked || document.getElementById("poems-checkbox-2-15").checked || document.getElementById("poems-checkbox-2-16").checked

    if (check1any || check2any){
        // Reset previous state
        resetInputBackgroundColors();
        poemContainer.style.color = "black"

        titleInput.value = '';
        authorInput.value = '';
        titleDropdown.selectedIndex = -1;
        authorDropdown.selectedIndex = -1;
        nextVerseTextarea.value = '';
        nextVerseGroup.style.display = 'none';
        feedbackContainer.textContent = '';
        feedbackContainer.style.display = 'none';

        reciteModeEnabled = !reciteModeToggle.checked

        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';

        // Select a random poem
        poemIndex = Math.floor(Math.random() * poems.length);
        while (!poems[poemIndex].active.checked){
            poemIndex = Math.floor(Math.random() * poems.length);
        }
        currentPoem = poems[poemIndex];

        // Display poem in poem container
        if (currentPoem.recite && !reciteModeToggle.checked) {

            if (currentPoem.verses.length > 1){
                // Display a random verse for recitation
                displayPoem();
                displayInputBoxes(true);
            } else {
                // Display a random author and title for recitation
                displayData();
                displayInputBoxes(false);
            }

            nextVerseGroup.style.display = 'block';

            if (currentPoem.verses.length === 1){
                nextVerseLabel.textContent = "Vers:";
            }
            else if (verseIndex + 1 == (currentPoem.verses.length)){
                nextVerseLabel.textContent = "Első versszak:";
            }
            else {
                nextVerseLabel.textContent = "Következő versszak:";
            }
        } else {
            // Display author and title, ask for title and author
            displayPoem();
            displayInputBoxes(true);
        }

        // Hide submit button and show next button
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
    }
    else{
        alert("Nincs kiválasztott vers")
    }
}

// Function to display the current poem in the poem container
function displayPoem() {
    verseIndex = Math.floor(Math.random() * currentPoem.verses.length);
    const verse = currentPoem.verses[verseIndex];
    poemContainer.textContent = verse;
}
function displayData() {
    verseIndex = 0
    poemContainer.textContent = `${currentPoem.author}: ${currentPoem.title}`;
}
function displayInputBoxes(show){
    if (show){
        answerBoxes.style.display = "block";
        if (!modeToggle.checked) {
            // Typing mode is on
            titleInput.style.display = 'block';
            authorInput.style.display = 'block';
            titleDropdown.style.display = 'none';
            authorDropdown.style.display = 'none';
        } else {
            // Dropdown mode is on
            titleInput.style.display = 'none';
            authorInput.style.display = 'none';
            titleDropdown.style.display = 'block';
            authorDropdown.style.display = 'block';
        }
    } else {
        answerBoxes.style.display = "none";
    }
    
}

function checkInputBoxes() {
    let isTitleCorrect = false;
    let isAuthorCorrect = false;

    if (!modeToggle.checked) {
        // Typing mode is on
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title === currentPoem.title) {
            isTitleCorrect = true;
            titleInput.style.backgroundColor = 'lightgreen';
        } else {
            titleInput.style.backgroundColor = 'lightcoral';
        }

        if (author === currentPoem.author) {
            isAuthorCorrect = true;
            authorInput.style.backgroundColor = 'lightgreen';
        } else {
            authorInput.style.backgroundColor = 'lightcoral';
        }
    } else {
        // Dropdown mode is on
        const selectedTitle = titleDropdown.value;
        const selectedAuthor = authorDropdown.value;

        if (selectedTitle === currentPoem.title) {
            isTitleCorrect = true;
            titleDropdown.style.backgroundColor = 'lightgreen';
        } else {
            titleDropdown.style.backgroundColor = 'lightcoral';
        }

        if (selectedAuthor === currentPoem.author) {
            isAuthorCorrect = true;
            authorDropdown.style.backgroundColor = 'lightgreen';
        } else {
            authorDropdown.style.backgroundColor = 'lightcoral';
        }
    }

    return [isTitleCorrect, isAuthorCorrect]
}

function sanitize(grammartext){
    let grammarChars = [" ", ",", ".", ";", ":", "?", "!", "-", "\"", "\n", "\\n"]
    let i = 0

    do {
        grammartext = grammartext.replaceAll(grammarChars[i], "")
        i++
    }
    while (i < grammarChars.length)
    
    return grammartext.toLowerCase().replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ö", "o").replaceAll("ő", "o").replaceAll("ú", "u").replaceAll("ü", "u").replaceAll("ű", "u")
}

// Check if poem's next verse correct
function checkTextarea(nextVerse) {
    let isNextVerseCorrect = false;

    if (requirePerfectMatch){
        if (nextVerseTextarea.value.trim() === nextVerse) {
            isNextVerseCorrect = true;
            nextVerseTextarea.style.backgroundColor = 'lightgreen';
        } else {
            nextVerseTextarea.style.backgroundColor = 'lightcoral';
        }
    }
    else{
        if (sanitize(nextVerseTextarea.value) === sanitize(nextVerse)) {
            isNextVerseCorrect = true;
            nextVerseTextarea.style.backgroundColor = 'lightgreen';
        } else {
            nextVerseTextarea.style.backgroundColor = 'lightcoral';
        }
    }

    return isNextVerseCorrect
}

// Function to handle form submission and check answers
function checkAnswer(event) {
    event.preventDefault();

    areAnswersCorrect = []

    // Showing feedback based on correctness

    if (currentPoem.recite && reciteModeEnabled){
        if (currentPoem.verses.length === 1){
            areAnswersCorrect = [true, true]
            areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]))
        }
        else{
            areAnswersCorrect = checkInputBoxes()
            areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]))
        }
    }
    else{
        areAnswersCorrect = checkInputBoxes()
        areAnswersCorrect.push(true)
    }

    if (areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback('Helyes!', 'green');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    else if (areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback('Hibásan írtad a memoritert.', 'red');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    if (!areAnswersCorrect[2]){
        poemContainer.textContent = currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]
        poemContainer.style.color = "red"
    }

    // Hide submit button and show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

// Function to show feedback message
function showFeedback(message, color) {
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = color;
    feedbackContainer.style.display = 'block';
}

// Function to reset background colors of input elements
function resetInputBackgroundColors() {
    titleInput.style.backgroundColor = '';
    authorInput.style.backgroundColor = '';
    nextVerseTextarea.style.backgroundColor = '';
    titleDropdown.style.backgroundColor = '';
    authorDropdown.style.backgroundColor = '';
}



function showSettings() {
    overlay.style.display = 'block';
    settingsModal.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
        settingsModal.style.opacity = '1';
    }, 10);
}

function showPoems() {
    overlay.style.display = 'block';
    poemsModal.style.display = 'block';
    poemsModalFlexdiv.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
        poemsModal.style.opacity = '1';
    }, 10);
}

function hideSettingsPoems() {
    overlay.style.opacity = '0';
    settingsModal.style.opacity = '0';
    poemsModal.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        settingsModal.style.display = 'none';
        poemsModal.style.display = 'none';
    }, 300);
}

function toggleAll1() {
    document.getElementById('poems-checkbox-1-1').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-2').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-3').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-4').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-5').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-6').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-7').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-8').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-9').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-10').checked = poemsCheckbox1.checked
    
    document.getElementById('poems-checkbox-1-11').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-12').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-13').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-14').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-15').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-16').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-17').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-18').checked = poemsCheckbox1.checked
}

function toggleAll2() {
    document.getElementById('poems-checkbox-2-1').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-2').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-3').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-4').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-5').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-6').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-7').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-8').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-9').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-10').checked = poemsCheckbox2.checked
    
    document.getElementById('poems-checkbox-2-11').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-12').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-13').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-14').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-15').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-16').checked = poemsCheckbox2.checked
}

// Event listeners
document.addEventListener('DOMContentLoaded',initialize);

nextButton.addEventListener('click', loadNewPoem);
modeToggle.addEventListener('change', toggleMode);
document.getElementById('quiz-form').addEventListener('submit', checkAnswer);

settingsButton.addEventListener('click', showSettings);
poemsButton.addEventListener('click', showPoems);
overlay.addEventListener('click', hideSettingsPoems);
doneButton.addEventListener('click', hideSettingsPoems);

document.getElementById('poems-checkbox-1-0').addEventListener('change', toggleAll1)
document.getElementById('poems-checkbox-2-0').addEventListener('change', toggleAll2)