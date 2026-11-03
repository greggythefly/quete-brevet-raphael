/* Banque d'exercices — Brevet blanc n°1 (3e)
   Types :
   qcm   {q, o:[bonne, ...fausses], ex}         (la 1re option est la bonne, elles sont mélangées à l'affichage)
   vf    {q, a:true|false, ex}
   input {q, a:[réponses acceptées], ex, u:unité affichée}
   pairs {q, p:[[gauche, droite], ...]}
   build {q, a:[tuiles dans l'ordre], d:[tuiles pièges], ex}
   fig   {k:"rt"|"th"|"pap", ...} figure de géométrie
*/
window.POOLS = {

calc: { s:"maths", n:"Calcul numérique", items:[
 {t:"input", q:"Calcule : 3 + 4 × 5", a:["23"], ex:"La multiplication passe avant l'addition : 4 × 5 = 20, puis 3 + 20 = 23."},
 {t:"input", q:"Calcule : (3 + 4) × 5", a:["35"], ex:"Les parenthèses d'abord : 3 + 4 = 7, puis 7 × 5 = 35."},
 {t:"input", q:"Calcule : 20 − 12 ÷ 4 + 1", a:["18"], ex:"12 ÷ 4 = 3 d'abord. Puis de gauche à droite : 20 − 3 + 1 = 18."},
 {t:"input", q:"Calcule : 5 − 3 × (2 + 4)²", a:["-103"], ex:"Parenthèses : 6. Puissance : 6² = 36. Multiplication : 3 × 36 = 108. Puis 5 − 108 = −103."},
 {t:"build", q:"Range les priorités opératoires, de la première à la dernière.", a:["Parenthèses","Puissances","× et ÷","+ et −"], ex:"On calcule d'abord les parenthèses, puis les puissances, puis × et ÷, enfin + et − (de gauche à droite)."},
 {t:"qcm", q:"2/3 + 1/4 = ?", o:["11/12","3/7","3/12","2/12"], ex:"On met au même dénominateur 12 : 8/12 + 3/12 = 11/12. On n'additionne jamais les dénominateurs."},
 {t:"input", q:"Calcule 3/5 × 10/9 et donne la fraction irréductible.", a:["2/3"], ex:"3/5 × 10/9 = 30/45. On simplifie par 15 : 30/45 = 2/3."},
 {t:"qcm", q:"5/6 ÷ 2/3 = ?", o:["5/4","10/18","5/9","15/6"], ex:"Diviser, c'est multiplier par l'inverse : 5/6 × 3/2 = 15/12 = 5/4."},
 {t:"input", q:"Calcule : 1 − 3/4 × 2/3", a:["1/2","0.5","2/4"], ex:"La multiplication d'abord : 3/4 × 2/3 = 6/12 = 1/2. Puis 1 − 1/2 = 1/2."},
 {t:"qcm", q:"2³ × 2⁴ = ?", o:["2⁷","2¹²","4⁷","2¹"], ex:"Même base : on additionne les exposants. aⁿ × aᵐ = aⁿ⁺ᵐ, donc 2³⁺⁴ = 2⁷."},
 {t:"input", q:"10⁵ × 10⁻² = 10 puissance combien ?", a:["3"], ex:"5 + (−2) = 3, donc 10⁵ × 10⁻² = 10³ = 1 000."},
 {t:"qcm", q:"Écriture scientifique de 0,00045 :", o:["4,5 × 10⁻⁴","45 × 10⁻⁵","4,5 × 10⁴","0,45 × 10⁻³"], ex:"Un seul chiffre non nul avant la virgule (4,5), et on décale la virgule de 4 rangs vers la droite : 10⁻⁴."},
 {t:"vf", q:"(−3)² = −9", a:false, ex:"(−3)² = (−3) × (−3) = 9. Attention : −3² = −9, car le carré ne porte que sur 3."},
 {t:"qcm", q:"Écriture scientifique de 52 000 :", o:["5,2 × 10⁴","52 × 10³","5,2 × 10³","0,52 × 10⁵"], ex:"5,2 a un seul chiffre avant la virgule, et on décale la virgule de 4 rangs : 5,2 × 10⁴."}
]},

geom: { s:"maths", n:"Thalès et Pythagore", items:[
 {t:"input", q:"Le triangle ABC est rectangle en B. AB = 6 cm et BC = 8 cm. Calcule AC.", fig:{k:"rt",v:["A","B","C"],s:["6 cm","8 cm","?"]}, a:["10"], u:"cm", ex:"AC est l'hypoténuse. AC² = AB² + BC² = 36 + 64 = 100, donc AC = √100 = 10 cm."},
 {t:"input", q:"Le triangle EFG est rectangle en F. EG = 13 cm et EF = 5 cm. Calcule FG.", fig:{k:"rt",v:["E","F","G"],s:["5 cm","?","13 cm"]}, a:["12"], u:"cm", ex:"EG² = EF² + FG², donc FG² = 169 − 25 = 144 et FG = 12 cm."},
 {t:"qcm", q:"Dans un triangle rectangle, l'hypoténuse est…", o:["le côté opposé à l'angle droit","le plus petit côté","un côté de l'angle droit","la hauteur du triangle"], ex:"L'hypoténuse est en face de l'angle droit. C'est toujours le plus grand côté."},
 {t:"qcm", q:"Un triangle a pour côtés 5 cm, 12 cm et 13 cm. Est-il rectangle ?", o:["Oui, car 5² + 12² = 13²","Non, car 5 + 12 ≠ 13","On ne peut pas savoir sans figure","Oui, car 13 est le plus grand côté"], ex:"Réciproque de Pythagore : 5² + 12² = 25 + 144 = 169 et 13² = 169. L'égalité est vraie, donc le triangle est rectangle."},
 {t:"vf", q:"Un triangle de côtés 6 cm, 7 cm et 9 cm est rectangle.", a:false, ex:"6² + 7² = 36 + 49 = 85, mais 9² = 81. 85 ≠ 81, donc il n'est pas rectangle (contraposée de Pythagore)."},
 {t:"build", q:"Remets la rédaction dans l'ordre.", a:["On sait que ABC est rectangle en B.","D'après le théorème de Pythagore :","AC² = AB² + BC²","AC² = 36 + 64 = 100","donc AC = 10 cm."], ex:"Toujours : ce qu'on sait, le théorème utilisé, l'égalité, le calcul, la conclusion avec l'unité."},
 {t:"input", q:"M est sur [AB], N est sur [AC] et (MN) // (BC). AM = 3 cm, AB = 9 cm, BC = 12 cm. Calcule MN.", fig:{k:"th",s:["AM = 3","AB = 9","BC = 12","MN = ?"]}, a:["4"], u:"cm", ex:"Thalès : AM/AB = AN/AC = MN/BC. Donc 3/9 = MN/12, et MN = 12 × 3 ÷ 9 = 4 cm."},
 {t:"qcm", q:"Avec M sur [AB], N sur [AC] et (MN) // (BC), quelle égalité de Thalès est juste ?", o:["AM/AB = AN/AC = MN/BC","AM/MB = AN/NC = MN/BC","AM/AB = AC/AN = MN/BC","AB/AM = AN/AC = BC/MN"], ex:"On compare le petit triangle AMN au grand triangle ABC, côté par côté, dans le même ordre."},
 {t:"qcm", q:"Que faut-il absolument pour appliquer le théorème de Thalès ?", o:["Deux droites parallèles","Un angle droit","Que M soit le milieu de [AB]","Des longueurs entières"], ex:"Sans droites parallèles, pas de Thalès. Pour Pythagore, c'est l'angle droit qu'il faut."},
 {t:"input", q:"Les droites (BM) et (CN) se coupent en A, et (BC) // (MN). AB = 4 cm, AM = 6 cm, BC = 5 cm. Calcule MN.", fig:{k:"pap",s:["AB = 4","AM = 6","BC = 5","MN = ?"]}, a:["7.5","7,5"], u:"cm", ex:"Configuration papillon : AM/AB = AN/AC = MN/BC. Donc 6/4 = MN/5, et MN = 5 × 6 ÷ 4 = 7,5 cm."},
 {t:"qcm", q:"AM/AB = 0,4 et AN/AC = 0,4, avec A, M, B et A, N, C alignés dans le même ordre. Que peut-on conclure ?", o:["(MN) et (BC) sont parallèles","ABC est rectangle","MN = BC","Rien du tout"], ex:"C'est la réciproque du théorème de Thalès : les rapports sont égaux, donc les droites sont parallèles."},
 {t:"pairs", q:"Associe chaque outil à ce qu'il permet de faire.", p:[["Pythagore","Calculer une longueur dans un triangle rectangle"],["Réciproque de Pythagore","Prouver qu'un triangle est rectangle"],["Thalès","Calculer une longueur avec des parallèles"],["Réciproque de Thalès","Prouver que deux droites sont parallèles"]]}
]},

arith: { s:"maths", n:"Arithmétique", items:[
 {t:"qcm", q:"Lequel de ces nombres est premier ?", o:["29","27","21","39"], ex:"29 n'a que deux diviseurs : 1 et 29. Les autres : 27 = 3 × 9, 21 = 3 × 7, 39 = 3 × 13."},
 {t:"vf", q:"1 est un nombre premier.", a:false, ex:"Un nombre premier a exactement deux diviseurs : 1 et lui-même. 1 n'en a qu'un, donc il n'est pas premier."},
 {t:"qcm", q:"Décomposition de 360 en produit de facteurs premiers :", o:["2³ × 3² × 5","2² × 3² × 10","2³ × 45","2 × 3 × 60"], ex:"360 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5. 10, 45 et 60 ne sont pas premiers."},
 {t:"qcm", q:"Décomposition de 84 en produit de facteurs premiers :", o:["2² × 3 × 7","2 × 42","4 × 21","2³ × 3 × 7"], ex:"84 = 2 × 42 = 2 × 2 × 21 = 2 × 2 × 3 × 7 = 2² × 3 × 7."},
 {t:"input", q:"Rends la fraction 84/360 irréductible.", a:["7/30"], ex:"84 = 2² × 3 × 7 et 360 = 2³ × 3² × 5. Facteurs communs : 2² × 3 = 12. Donc 84/360 = 7/30."},
 {t:"vf", q:"945 est divisible par 9.", a:true, ex:"9 + 4 + 5 = 18, et 18 est divisible par 9. Donc 945 aussi (945 = 9 × 105)."},
 {t:"qcm", q:"Quels sont tous les diviseurs de 18 ?", o:["1, 2, 3, 6, 9, 18","2, 3, 6, 9","1, 2, 3, 6, 9","1, 18, 36"], ex:"Par paires : 1 × 18, 2 × 9, 3 × 6. N'oublie ni 1 ni le nombre lui-même."},
 {t:"input", q:"Un fleuriste a 84 roses et 60 tulipes. Il fait le plus grand nombre possible de bouquets identiques, avec toutes les fleurs. Combien de bouquets ?", a:["12"], ex:"Il faut le plus grand diviseur commun de 84 et 60. 84 = 2² × 3 × 7 et 60 = 2² × 3 × 5, donc c'est 2² × 3 = 12."},
 {t:"input", q:"Toujours 12 bouquets avec 84 roses : combien de roses dans chaque bouquet ?", a:["7"], ex:"84 ÷ 12 = 7 roses (et 60 ÷ 12 = 5 tulipes) par bouquet."},
 {t:"qcm", q:"Un nombre est divisible par 3 si…", o:["la somme de ses chiffres est divisible par 3","il se termine par 3","il est impair","son dernier chiffre est 0 ou 5"], ex:"Exemple : 123 → 1 + 2 + 3 = 6, divisible par 3, donc 123 l'est aussi."},
 {t:"input", q:"Je pense à un nombre entre 50 et 70. Il est divisible par 4 et par 6, mais pas par 8. Lequel ?", a:["60"], ex:"Divisible par 4 et par 6, c'est un multiple de 12 : entre 50 et 70, seul 60 convient. Et 60 ÷ 8 = 7,5, donc pas divisible par 8."},
 {t:"qcm", q:"Face à un problème ouvert, que faut-il faire si tu ne trouves pas la réponse ?", o:["Écrire toutes tes pistes et tes essais","Laisser la feuille blanche","Écrire seulement le résultat","Passer sans rien noter"], ex:"Dans un problème ouvert, les recherches et les essais rapportent des points, même incomplets."}
]},

gram: { s:"fr", n:"Classes grammaticales", items:[
 {t:"qcm", q:"« Rapidement » est…", o:["un adverbe","un adjectif","un nom","une préposition"], ex:"Il est invariable et modifie un verbe (« courir rapidement »). Beaucoup d'adverbes finissent en -ment."},
 {t:"qcm", q:"Dans « Je leur parle », « leur » est…", o:["un pronom personnel","un déterminant possessif","un adjectif","un adverbe"], ex:"« leur » remplace un nom (= à eux) et se place devant le verbe. Il ne prend jamais de s dans ce cas."},
 {t:"qcm", q:"Dans « Ils prennent leurs cahiers », « leurs » est…", o:["un déterminant possessif","un pronom personnel","un adverbe","une conjonction"], ex:"Il accompagne le nom « cahiers » et s'accorde avec lui, d'où le s."},
 {t:"qcm", q:"Dans « Je pense que tu as raison », « que » est…", o:["une conjonction de subordination","un pronom relatif","un adverbe","une préposition"], ex:"Il relie le verbe « pense » à une proposition, sans remplacer aucun nom."},
 {t:"qcm", q:"Dans « Le livre que je lis », « que » est…", o:["un pronom relatif","une conjonction de subordination","un déterminant","un adverbe"], ex:"Il remplace « le livre » (antécédent) : je lis le livre."},
 {t:"pairs", q:"Associe chaque mot à sa classe grammaticale.", p:[["sous","préposition"],["mais","conjonction de coordination"],["beau","adjectif"],["nous","pronom personnel"],["ces","déterminant démonstratif"]]},
 {t:"vf", q:"Dans « Elle est tout étonnée », « tout » est un adverbe.", a:true, ex:"Il signifie « tout à fait » et modifie l'adjectif « étonnée ». C'est un adverbe."},
 {t:"qcm", q:"Dans « Tous les élèves sont là », « tous » est…", o:["un déterminant","un adverbe","un pronom","un adjectif qualificatif"], ex:"Il accompagne le nom « élèves » avec « les ». C'est un déterminant indéfini."},
 {t:"qcm", q:"Dans « Si tu viens, je serai content », « si » est…", o:["une conjonction de subordination","un adverbe","une préposition","un pronom"], ex:"Il introduit une condition. Dans « si grand », en revanche, « si » est un adverbe."},
 {t:"qcm", q:"Laquelle de ces classes de mots est invariable ?", o:["l'adverbe","l'adjectif","le nom","le déterminant"], ex:"L'adverbe ne s'accorde pas. Seule exception : « tout », qui varie devant un adjectif féminin commençant par une consonne ou un h aspiré (« elle est toute contente »)."},
 {t:"qcm", q:"« mais, ou, et, donc, or, ni, car » sont…", o:["des conjonctions de coordination","des prépositions","des adverbes","des pronoms relatifs"], ex:"Le moyen mnémotechnique : « Mais où est donc Ornicar ? »"},
 {t:"pairs", q:"Associe chaque mot à sa classe grammaticale.", p:[["dans","préposition"],["qui","pronom relatif"],["souvent","adverbe"],["mon","déterminant possessif"],["lorsque","conjonction de subordination"]]}
]},

auto: { s:"fr", n:"Autobiographie et figures de style", items:[
 {t:"qcm", q:"Le pacte autobiographique, c'est…", o:["l'engagement de l'auteur à dire la vérité sur sa vie","un contrat avec l'éditeur","une histoire inventée","le résumé du livre"], ex:"L'auteur promet au lecteur d'être sincère. Ce pacte est souvent annoncé au début du livre."},
 {t:"qcm", q:"Dans une autobiographie, l'auteur, le narrateur et le personnage principal sont…", o:["la même personne","trois personnes différentes","des personnages inventés","l'auteur et ses parents"], ex:"C'est ce qui définit l'autobiographie : celui qui écrit raconte sa propre vie."},
 {t:"vf", q:"Une autobiographie est en général écrite à la 3e personne.", a:false, ex:"Elle est écrite à la 1re personne (« je »). Un récit de vie à la 3e personne par quelqu'un d'autre est une biographie."},
 {t:"qcm", q:"« Aujourd'hui encore, je me demande pourquoi j'avais si peur. » Qui s'exprime dans cette phrase ?", o:["Le narrateur adulte qui regarde son passé","L'enfant au moment des faits","Un autre personnage","Le lecteur"], ex:"Le présent (« je me demande ») montre l'adulte qui écrit ; l'imparfait (« j'avais ») renvoie à l'enfant qu'il était."},
 {t:"qcm", q:"Le récit de la vie d'une personne, écrit par quelqu'un d'autre, s'appelle…", o:["une biographie","une autobiographie","un journal intime","un autoportrait"], ex:"« Bio » = vie, « graphie » = écriture. « Auto » = soi-même."},
 {t:"qcm", q:"Laquelle de ces raisons n'est pas une raison habituelle d'écrire son autobiographie ?", o:["Inventer une histoire imaginaire","Mieux se comprendre","Témoigner d'une époque","Laisser une trace"], ex:"L'autobiographie repose sur des faits réels, même si la mémoire peut déformer les souvenirs."},
 {t:"pairs", q:"Associe chaque figure de style à son exemple.", p:[["Comparaison","Il est fort comme un lion."],["Métaphore","Cet homme est un lion."],["Personnification","Le vent hurle dans la nuit."],["Hyperbole","Je meurs de faim !"],["Antithèse","Je vis, je meurs."]]},
 {t:"qcm", q:"« Ses yeux brillaient comme deux étoiles. » Quelle figure de style ?", o:["une comparaison","une métaphore","une personnification","une anaphore"], ex:"Il y a un outil de comparaison : « comme »."},
 {t:"qcm", q:"« Va, cours, vole, et nous venge ! » (Corneille). Quelle figure de style ?", o:["une gradation","une anaphore","une antithèse","une métaphore"], ex:"Les verbes vont en intensité croissante : aller, courir, voler."},
 {t:"qcm", q:"« Un silence assourdissant ». Quelle figure de style ?", o:["un oxymore","une hyperbole","une comparaison","une anaphore"], ex:"Deux mots de sens contraires sont collés l'un à l'autre."},
 {t:"vf", q:"La métaphore utilise un outil de comparaison comme « comme » ou « tel ».", a:false, ex:"C'est la comparaison qui a un outil. La métaphore rapproche deux éléments sans outil : « cet homme est un lion »."},
 {t:"qcm", q:"« Paris ! Paris outragé ! Paris brisé ! Paris martyrisé ! » (de Gaulle). La répétition de « Paris » en début de groupe est…", o:["une anaphore","une hyperbole","un oxymore","une personnification"], ex:"L'anaphore répète un mot ou un groupe de mots en début de phrase, de vers ou de proposition."}
]},

temps: { s:"fr", n:"Valeurs des temps", items:[
 {t:"qcm", q:"« La Terre tourne autour du Soleil. » Valeur du présent ?", o:["vérité générale","énonciation","narration","habitude"], ex:"C'est vrai tout le temps, pas seulement maintenant."},
 {t:"qcm", q:"« En ce moment, je t'écris depuis ma chambre. » Valeur du présent ?", o:["énonciation","vérité générale","narration","habitude"], ex:"L'action se passe au moment même où l'on parle ou écrit."},
 {t:"qcm", q:"« Chaque matin, il se lève à 7 h. » Valeur du présent ?", o:["habitude","énonciation","vérité générale","narration"], ex:"L'action se répète régulièrement. Indice : « chaque matin »."},
 {t:"qcm", q:"Dans un récit au passé : « Soudain, le loup surgit et se jette sur lui. » Valeur du présent ?", o:["narration","énonciation","vérité générale","habitude"], ex:"Le présent de narration rend une action passée plus vivante, comme si on y était."},
 {t:"qcm", q:"Dans un récit au passé, l'imparfait sert surtout à…", o:["décrire le décor et les actions d'arrière-plan","raconter les actions brèves et soudaines","parler du futur","donner un ordre"], ex:"Imparfait = arrière-plan (description, habitude, action qui dure). Passé simple = premier plan."},
 {t:"qcm", q:"« Il marchait dans la rue quand il vit un chien. » Le verbe « vit » est…", o:["au passé simple : action de premier plan","à l'imparfait : description","au présent : vérité générale","au passé simple : habitude"], ex:"L'action est brève et fait avancer le récit. Elle interrompt l'action en cours à l'imparfait (« marchait »)."},
 {t:"pairs", q:"Associe chaque temps à sa valeur.", p:[["Imparfait de description","décrit un décor, un personnage"],["Passé simple","action brève de premier plan"],["Présent de vérité générale","ce qui est toujours vrai"],["Présent d'énonciation","au moment où l'on parle"],["Imparfait d'habitude","action répétée dans le passé"]]},
 {t:"vf", q:"Dans une autobiographie, le présent peut marquer le moment où l'auteur écrit.", a:true, ex:"C'est le présent d'énonciation du narrateur adulte, qui commente ses souvenirs."},
 {t:"qcm", q:"« Tous les dimanches, nous allions chez ma grand-mère. » Valeur de l'imparfait ?", o:["habitude","description","action brève","vérité générale"], ex:"L'action se répétait dans le passé. Indice : « tous les dimanches »."},
 {t:"qcm", q:"Le plus-que-parfait (« il avait mangé ») exprime…", o:["une action antérieure à une autre action passée","une action future","un ordre","une action qui se passe maintenant"], ex:"« Il avait mangé quand je suis arrivé » : il a mangé avant que j'arrive."}
]},

front: { s:"hist", n:"14-18 : les affrontements", items:[
 {t:"build", q:"Remets ces événements dans l'ordre chronologique.", a:["Attentat de Sarajevo","Bataille de la Marne","Bataille de Verdun","Révolutions russes","Armistice","Traité de Versailles"], ex:"Sarajevo (juin 1914), Marne (sept. 1914), Verdun (1916), révolutions russes (1917), armistice (11 nov. 1918), Versailles (28 juin 1919)."},
 {t:"input", q:"En quelle année a eu lieu la bataille de Verdun ?", a:["1916"], ex:"De février à décembre 1916. C'est le symbole de l'enfer des tranchées pour les Français."},
 {t:"input", q:"Date de l'armistice (jour, mois, année) ?", a:["11 novembre 1918","11/11/1918","11/11/18","11 11 1918"], ex:"Le 11 novembre 1918 : les combats s'arrêtent. C'est un jour férié en France."},
 {t:"input", q:"Année de l'attentat de Sarajevo ?", a:["1914"], ex:"Le 28 juin 1914, l'archiduc François-Ferdinand est assassiné. C'est l'élément déclencheur de la guerre."},
 {t:"qcm", q:"Qui est assassiné à Sarajevo le 28 juin 1914 ?", o:["L'archiduc François-Ferdinand, héritier d'Autriche-Hongrie","Le tsar Nicolas II","Le président français Poincaré","L'empereur allemand Guillaume II"], ex:"Il est tué par un nationaliste serbe. L'Autriche-Hongrie déclare la guerre à la Serbie, et le jeu des alliances fait le reste."},
 {t:"qcm", q:"La bataille de la Marne (septembre 1914) marque…", o:["la fin de la guerre de mouvement","la fin de la guerre","l'entrée en guerre des États-Unis","la chute du tsar"], ex:"L'avancée allemande vers Paris est stoppée. Les armées s'enterrent : la guerre de position commence."},
 {t:"pairs", q:"Associe chaque mot à sa définition.", p:[["Front","zone des combats"],["Guerre de position","armées enterrées, front presque immobile"],["Guerre de mouvement","armées qui avancent et reculent"],["No man's land","zone entre deux tranchées ennemies"],["Poilu","surnom du soldat français"]]},
 {t:"qcm", q:"Quelle arme nouvelle est utilisée pour la première fois à grande échelle à Ypres en 1915 ?", o:["les gaz de combat","la bombe atomique","le fusil","le canon"], ex:"Le 22 avril 1915, l'armée allemande lance des gaz (du chlore) à Ypres. En 1917, elle y utilise le gaz moutarde, surnommé « ypérite » d'après la ville. Les soldats doivent porter des masques à gaz."},
 {t:"vf", q:"La bataille de Verdun a opposé les Français et les Allemands.", a:true, ex:"L'armée allemande attaque en février 1916. Les Français tiennent grâce à la relève des troupes par la « Voie sacrée »."},
 {t:"qcm", q:"Environ combien de soldats sont morts à Verdun (Français et Allemands) ?", o:["environ 300 000","environ 3 000","environ 30 000","environ 3 millions"], ex:"Environ 300 000 morts en dix mois, et plus de 700 000 victimes en comptant les blessés et les disparus."},
 {t:"qcm", q:"Comment vivent les soldats dans les tranchées ?", o:["Dans la boue, le froid, les rats, sous les bombardements","Dans des casernes confortables","Dans des villes loin du front","Dans des hôtels réquisitionnés"], ex:"Peur, saleté, maladies, poux et rats : c'est l'enfer des tranchées décrit dans les lettres de poilus."},
 {t:"qcm", q:"Pourquoi parle-t-on de guerre « mondiale » ?", o:["Des pays et des colonies de plusieurs continents y participent","Elle a lieu uniquement en Europe","Elle dure très longtemps","Tous les pays du monde se battent entre eux"], ex:"Les empires coloniaux mobilisent des soldats d'Afrique et d'Asie, puis les États-Unis entrent en guerre en 1917."}
]},

civils: { s:"hist", n:"14-18 : civils et révolutions", items:[
 {t:"pairs", q:"Associe chaque mot à sa définition.", p:[["Arrière","territoire loin des combats, où vivent les civils"],["Munitionnettes","ouvrières des usines d'armement"],["Guerre totale","tout le pays est mobilisé pour la guerre"],["Censure","contrôle de l'information par l'État"],["Économie de guerre","usines qui produisent pour l'armée"]]},
 {t:"qcm", q:"La guerre totale, c'est une guerre où…", o:["tout le pays (soldats, civils, économie) est mobilisé","seuls les soldats sont concernés","on utilise toutes les armes sauf les gaz","tous les pays du monde se battent"], ex:"Les soldats, mais aussi les femmes, les usines, les enfants, les savants et la propagande participent à l'effort de guerre."},
 {t:"qcm", q:"Quel rôle jouent les femmes à l'arrière ?", o:["Elles remplacent les hommes aux champs et dans les usines","Elles partent toutes au front","Elles ne travaillent pas","Elles dirigent l'armée"], ex:"Agricultrices, ouvrières (munitionnettes), infirmières : elles font tourner le pays pendant que les hommes sont au front."},
 {t:"qcm", q:"Pourquoi l'État pratique-t-il la censure ?", o:["Pour garder le moral de la population et cacher les mauvaises nouvelles","Pour informer les civils de la réalité du front","Pour aider les soldats à écrire","Pour économiser le papier"], ex:"Les journaux et le courrier des soldats sont contrôlés. On parle de « bourrage de crâne » pour la propagande."},
 {t:"qcm", q:"À quoi servaient les emprunts de guerre ?", o:["À financer la guerre avec l'argent des civils","À rembourser les soldats","À construire des écoles","À acheter de la nourriture aux Allemands"], ex:"L'État demande aux civils de lui prêter de l'argent. C'est un des liens entre l'arrière et le front."},
 {t:"qcm", q:"Le génocide des Arméniens a été commis par…", o:["le gouvernement de l'Empire ottoman","l'Allemagne","la Russie","l'Autriche-Hongrie"], ex:"Le gouvernement des Jeunes-Turcs accuse les Arméniens de trahison et organise leur extermination."},
 {t:"input", q:"En quelle année commence le génocide des Arméniens ?", a:["1915"], ex:"Il commence en avril 1915, par l'arrestation des élites arméniennes à Constantinople."},
 {t:"qcm", q:"Combien d'Arméniens environ ont été tués ?", o:["entre 1 et 1,5 million","environ 10 000","environ 100 000","environ 10 millions"], ex:"Plus d'un million de victimes, soit les deux tiers des Arméniens de l'Empire ottoman : massacres, déportations, marches de la mort."},
 {t:"qcm", q:"Un génocide, c'est…", o:["l'extermination volontaire et organisée d'un peuple","une bataille très meurtrière","une guerre civile","une épidémie"], ex:"Ce qui le définit : la volonté de détruire un peuple entier, en raison de ce qu'il est."},
 {t:"qcm", q:"Que se passe-t-il en Russie en 1917 ?", o:["Deux révolutions : le tsar tombe en février, Lénine prend le pouvoir en octobre","Le tsar gagne la guerre","La Russie entre en guerre","La Russie envahit la France"], ex:"Février : chute du tsar Nicolas II. Octobre : les bolcheviks de Lénine prennent le pouvoir."},
 {t:"vf", q:"Après la révolution d'Octobre, la Russie arrête la guerre contre l'Allemagne.", a:true, ex:"Lénine signe la paix de Brest-Litovsk en mars 1918."},
 {t:"qcm", q:"Que doit faire l'Allemagne d'après le traité de Versailles ?", o:["Rendre l'Alsace-Moselle, payer des réparations et réduire son armée","Recevoir l'Alsace-Moselle","Rien, elle a gagné","Entrer dans l'empire russe"], ex:"Elle est jugée seule responsable de la guerre et perd ses colonies. Les Allemands parlent d'un « diktat », une paix imposée."},
 {t:"input", q:"En quelle année est signé le traité de Versailles ?", a:["1919"], ex:"Le 28 juin 1919, dans la galerie des Glaces du château de Versailles."}
]},

geo: { s:"geo", n:"Les aires urbaines", items:[
 {t:"pairs", q:"Associe chaque mot à sa définition.", p:[["Aire urbaine","pôle urbain + couronne périurbaine"],["Pôle urbain","ville-centre et sa banlieue"],["Couronne périurbaine","communes dont beaucoup d'actifs travaillent dans le pôle"],["Étalement urbain","extension de la ville sur les espaces ruraux"],["Migrations pendulaires","trajets quotidiens domicile-travail"]]},
 {t:"build", q:"Range ces espaces du centre vers l'extérieur de l'aire urbaine.", a:["Centre-ville","Banlieue","Couronne périurbaine","Espace rural"], ex:"Le pôle urbain (centre + banlieue), puis la couronne périurbaine. Au-delà, on sort de l'aire urbaine."},
 {t:"qcm", q:"Quelle est la plus grande aire urbaine de France ?", o:["Paris","Lyon","Marseille","Lille"], ex:"Paris rassemble près de 13 millions d'habitants, loin devant Lyon (environ 2,3 millions)."},
 {t:"qcm", q:"Quelle est la deuxième aire urbaine de France ?", o:["Lyon","Marseille","Toulouse","Bordeaux"], ex:"Lyon arrive deuxième, devant Marseille-Aix, Lille, Toulouse et Bordeaux."},
 {t:"qcm", q:"Laquelle est une conséquence de l'étalement urbain ?", o:["Plus de trajets en voiture et d'embouteillages","Moins de pollution","Des terres agricoles en plus","Moins de routes"], ex:"La ville grignote les terres agricoles, les trajets s'allongent, la voiture devient indispensable : pollution et bouchons."},
 {t:"qcm", q:"Pourquoi beaucoup de familles s'installent-elles dans le périurbain ?", o:["Pour des logements plus grands et moins chers, avec jardin","Pour être plus près de leur travail","Parce qu'il y a plus de transports en commun","Parce qu'il y a plus de magasins"], ex:"Le rêve de la maison individuelle, mais au prix de longs trajets quotidiens."},
 {t:"qcm", q:"Où la population a-t-elle augmenté le plus vite ces dernières décennies ?", o:["Dans les couronnes périurbaines","Au centre des grandes villes","Dans les campagnes isolées","Dans les zones de montagne"], ex:"C'est la périurbanisation : les habitants quittent le centre pour la périphérie."},
 {t:"qcm", q:"Combien la France métropolitaine compte-t-elle de régions depuis 2016 ?", o:["13","22","18","12"], ex:"13 en métropole (Corse comprise). Avec les 5 régions d'outre-mer, cela fait 18 en tout."},
 {t:"pairs", q:"Associe chaque aire urbaine à sa région.", p:[["Marseille","Provence-Alpes-Côte d'Azur"],["Lille","Hauts-de-France"],["Toulouse","Occitanie"],["Bordeaux","Nouvelle-Aquitaine"],["Rennes","Bretagne"]]},
 {t:"pairs", q:"Associe chaque aire urbaine à sa région.", p:[["Lyon","Auvergne-Rhône-Alpes"],["Strasbourg","Grand Est"],["Nantes","Pays de la Loire"],["Dijon","Bourgogne-Franche-Comté"],["Rouen","Normandie"]]},
 {t:"qcm", q:"Dans un schéma, comment représente-t-on une autoroute ?", o:["Par un figuré linéaire (un trait)","Par un figuré ponctuel (un point)","Par un figuré de surface (une zone colorée)","Par une flèche de couleur"], ex:"Ponctuel = un lieu précis, linéaire = un axe, surfacique = un espace. Pense à les mettre dans la légende."},
 {t:"qcm", q:"Lequel de ces aménagements aide à limiter l'usage de la voiture ?", o:["Le tramway et les parkings relais","Une nouvelle autoroute en ville","Un centre commercial en périphérie","Un parking au centre-ville"], ex:"Tramway, RER, pistes cyclables, parkings relais : on encourage les mobilités plus douces."},
 {t:"vf", q:"La majorité des Français vivent dans une aire urbaine.", a:true, ex:"La très grande majorité des Français vit dans une aire urbaine, qu'elle soit grande ou petite."}
]},

atomes: { s:"pc", n:"Les atomes", items:[
 {t:"qcm", q:"Un atome est constitué…", o:["d'un noyau et d'électrons autour","seulement d'électrons","seulement d'un noyau","de molécules"], ex:"Le noyau, au centre, contient les protons et les neutrons. Les électrons sont autour."},
 {t:"pairs", q:"Associe chaque particule à sa charge ou son rôle.", p:[["Proton","charge positive"],["Électron","charge négative"],["Neutron","pas de charge"],["Noyau","protons + neutrons"]]},
 {t:"qcm", q:"Le numéro atomique Z donne…", o:["le nombre de protons","le nombre de neutrons","la masse de l'atome","le nombre de molécules"], ex:"Z = nombre de protons. Pour un atome, c'est aussi le nombre d'électrons."},
 {t:"input", q:"Le carbone a Z = 6. Combien d'électrons possède l'atome de carbone ?", a:["6"], ex:"Un atome est neutre : autant d'électrons que de protons, donc 6."},
 {t:"input", q:"Oxygène : Z = 8 et A = 16. Combien de neutrons ?", a:["8"], ex:"Neutrons = A − Z = 16 − 8 = 8."},
 {t:"input", q:"Sodium : Z = 11 et A = 23. Combien de neutrons ?", a:["12"], ex:"Neutrons = A − Z = 23 − 11 = 12."},
 {t:"input", q:"Aluminium : Z = 13 et A = 27. Combien de neutrons ?", a:["14"], ex:"Neutrons = A − Z = 27 − 13 = 14."},
 {t:"vf", q:"Un atome est électriquement neutre parce qu'il a autant de protons que d'électrons.", a:true, ex:"Les charges + des protons compensent exactement les charges − des électrons."},
 {t:"qcm", q:"Où est concentrée presque toute la masse d'un atome ?", o:["Dans le noyau","Dans les électrons","Répartie partout également","Dans le vide autour du noyau"], ex:"Les électrons sont environ 2 000 fois plus légers qu'un proton. La masse est dans le noyau."},
 {t:"qcm", q:"Dans le tableau périodique, les éléments sont rangés…", o:["par numéro atomique Z croissant","par ordre alphabétique","par couleur","par date de découverte"], ex:"Ligne par ligne, Z augmente de 1 à chaque case."},
 {t:"qcm", q:"Quel est le symbole du fer ?", o:["Fe","F","Fr","I"], ex:"Fe vient du latin ferrum. F est le fluor, Fr le francium."},
 {t:"build", q:"Remets la justification dans l'ordre.", a:["Le carbone a Z = 6,","donc il possède 6 protons.","Un atome est électriquement neutre,","donc il possède aussi 6 électrons."], ex:"Toujours justifier : on part de la donnée, puis on utilise la règle de neutralité."}
]},

ions: { s:"pc", n:"Les ions", items:[
 {t:"qcm", q:"Un ion, c'est…", o:["un atome ou un groupe d'atomes qui a gagné ou perdu un ou plusieurs électrons","un atome qui a perdu des protons","une molécule d'eau","un noyau sans électrons"], ex:"Seuls les électrons changent. Les protons et les neutrons du noyau restent les mêmes."},
 {t:"qcm", q:"L'ion Na⁺ provient d'un atome de sodium qui a…", o:["perdu 1 électron","gagné 1 électron","perdu 1 proton","gagné 1 proton"], ex:"Charge + : il manque un électron. Il y a donc un proton de plus que d'électrons."},
 {t:"qcm", q:"L'ion Cl⁻ provient d'un atome de chlore qui a…", o:["gagné 1 électron","perdu 1 électron","gagné 1 proton","perdu 1 neutron"], ex:"Charge − : il y a un électron en trop."},
 {t:"input", q:"Na⁺ (Z = 11) : combien d'électrons ?", a:["10"], ex:"11 électrons pour l'atome, moins 1 perdu : 10 électrons."},
 {t:"input", q:"Cl⁻ (Z = 17) : combien d'électrons ?", a:["18"], ex:"17 électrons pour l'atome, plus 1 gagné : 18 électrons."},
 {t:"input", q:"Fe²⁺ (Z = 26) : combien d'électrons ?", a:["24"], ex:"26 − 2 = 24 électrons (2 électrons perdus)."},
 {t:"input", q:"O²⁻ (Z = 8) : combien d'électrons ?", a:["10"], ex:"8 + 2 = 10 électrons (2 électrons gagnés)."},
 {t:"input", q:"Mg²⁺ (Z = 12) : combien de protons ?", a:["12"], ex:"Piège ! Le nombre de protons ne change jamais : 12. Ce sont les électrons qui passent à 10."},
 {t:"vf", q:"Quand un atome devient un ion, son nombre de protons change.", a:false, ex:"Le noyau ne bouge pas. Seul le nombre d'électrons change."},
 {t:"qcm", q:"Un ion positif a…", o:["plus de protons que d'électrons","plus d'électrons que de protons","autant de protons que d'électrons","aucun électron"], ex:"Il a perdu des électrons, donc les charges + des protons l'emportent."},
 {t:"pairs", q:"Associe chaque ion à ce qui s'est passé.", p:[["Na⁺","a perdu 1 électron"],["Cl⁻","a gagné 1 électron"],["Cu²⁺","a perdu 2 électrons"],["O²⁻","a gagné 2 électrons"]]},
 {t:"qcm", q:"L'ion aluminium Al³⁺ a…", o:["perdu 3 électrons","gagné 3 électrons","perdu 3 protons","gagné 3 neutrons"], ex:"Charge 3+ : 3 électrons en moins."}
]},

adn: { s:"svt", n:"L'ADN", items:[
 {t:"build", q:"Range du plus grand au plus petit.", a:["Cellule","Noyau","Chromosome","Gène"], ex:"La cellule contient un noyau, le noyau contient les chromosomes (faits d'ADN), et un gène est une portion d'ADN d'un chromosome."},
 {t:"qcm", q:"Où se trouve l'ADN dans une cellule humaine ?", o:["Dans le noyau, sous forme de chromosomes","Dans la membrane","Dans le sang uniquement","Hors de la cellule"], ex:"L'ADN est la molécule qui forme les chromosomes, rangés dans le noyau."},
 {t:"qcm", q:"Un gène, c'est…", o:["une portion d'ADN qui porte une information génétique","une cellule entière","un organe","une protéine du sang"], ex:"Chaque gène participe à un caractère héréditaire : groupe sanguin, couleur des yeux…"},
 {t:"input", q:"Combien de chromosomes possède une cellule humaine (hors ovules et spermatozoïdes) ?", a:["46"], ex:"46 chromosomes, soit 23 paires."},
 {t:"input", q:"Et combien dans un spermatozoïde ou un ovule ?", a:["23"], ex:"Les cellules reproductrices n'en ont que 23 (un chromosome de chaque paire). À la fécondation, 23 + 23 = 46."},
 {t:"qcm", q:"Les chromosomes d'une cellule vont…", o:["par paires","par trois","seuls","par groupes de dix"], ex:"23 paires : dans chaque paire, un chromosome vient du père et l'autre de la mère."},
 {t:"qcm", q:"Les chromosomes sexuels d'un garçon sont…", o:["XY","XX","X seul","YY"], ex:"Garçon XY, fille XX. C'est la 23e paire."},
 {t:"qcm", q:"Le caryotype, c'est…", o:["l'image des chromosomes d'une cellule rangés par paires","une maladie génétique","le noyau de la cellule","une seule molécule d'ADN"], ex:"Il permet de compter les chromosomes et de repérer une anomalie, comme 3 chromosomes 21 dans la trisomie 21."},
 {t:"qcm", q:"Quelle est la forme de la molécule d'ADN ?", o:["une double hélice","une sphère","un carré","une ligne droite"], ex:"Deux brins enroulés l'un autour de l'autre, comme une échelle tordue."},
 {t:"vf", q:"Tous les humains ont les mêmes gènes, mais pas forcément les mêmes versions de ces gènes (allèles).", a:true, ex:"Le gène du groupe sanguin existe chez tout le monde, mais ses allèles (A, B ou O) varient d'une personne à l'autre."}
]},

svt45: { s:"svt", n:"SVT de 4e et de 5e", items:[
 {t:"build", q:"Remets dans l'ordre le trajet du message nerveux quand tu attrapes une balle.", a:["Œil (récepteur)","Nerf optique","Cerveau","Moelle épinière et nerf moteur","Muscle"], ex:"Récepteur → nerf sensitif → centre nerveux (cerveau) → nerf moteur → muscle effecteur."},
 {t:"qcm", q:"Les messages nerveux circulent dans les neurones sous forme de…", o:["messages électriques","bulles d'air","sang","sons"], ex:"Le long d'un neurone, le message nerveux est électrique. Entre deux neurones, il devient chimique."},
 {t:"qcm", q:"Les neurones communiquent entre eux au niveau des…", o:["synapses","muscles","os","globules rouges"], ex:"La synapse est la zone de contact entre deux neurones. L'alcool et les drogues la perturbent."},
 {t:"qcm", q:"Que provoquent l'alcool ou les drogues sur le système nerveux ?", o:["Ils ralentissent les messages nerveux et les réflexes","Ils accélèrent la pensée sans danger","Ils renforcent les muscles","Ils n'ont aucun effet"], ex:"Ils perturbent les synapses : temps de réaction plus long, risques d'accidents."},
 {t:"qcm", q:"De quoi une plante verte a-t-elle besoin pour fabriquer sa matière ?", o:["Eau, sels minéraux, dioxyde de carbone et lumière","Seulement de terre","Du sucre et de la viande","De l'oxygène et du noir"], ex:"C'est la photosynthèse : grâce à la lumière, la plante fabrique de la matière organique."},
 {t:"qcm", q:"Où se fait la photosynthèse ?", o:["Dans les parties vertes, surtout les feuilles","Dans les racines","Dans les fleurs uniquement","Dans le sol"], ex:"Les feuilles contiennent la chlorophylle, le pigment vert qui capte la lumière."},
 {t:"qcm", q:"Par où l'eau et les sels minéraux entrent-ils dans la plante ?", o:["Par les poils absorbants des racines","Par les feuilles","Par les fleurs","Par la tige"], ex:"Ils forment la sève brute, qui monte des racines jusqu'aux feuilles."},
 {t:"vf", q:"Pendant la photosynthèse, la plante rejette du dioxygène.", a:true, ex:"Elle absorbe du CO₂ et rejette du dioxygène, à la lumière."},
 {t:"qcm", q:"La sève élaborée transporte…", o:["la matière organique (sucres) fabriquée par les feuilles","l'eau puisée dans le sol","l'air de la plante","les graines"], ex:"Sève brute = eau + sels minéraux, qui montent. Sève élaborée = sucres, distribués à toute la plante."},
 {t:"qcm", q:"Quelle est la différence entre météo et climat ?", o:["La météo, c'est le temps sur quelques jours ; le climat, la moyenne sur au moins 30 ans","C'est la même chose","Le climat change chaque jour","La météo concerne uniquement la pluie"], ex:"Un hiver très froid ne contredit pas le réchauffement climatique : c'est de la météo, pas du climat."},
 {t:"qcm", q:"La reproduction sexuée nécessite…", o:["la fécondation de deux cellules reproductrices","un seul parent","une bouture","une seule cellule qui se divise"], ex:"Un gamète mâle et un gamète femelle s'unissent : c'est la fécondation."},
 {t:"qcm", q:"Le bouturage d'une plante est un exemple de…", o:["reproduction asexuée","reproduction sexuée","fécondation","pollinisation"], ex:"Un morceau de plante redonne une plante entière, sans fécondation."},
 {t:"vf", q:"La reproduction asexuée donne des individus identiques au parent.", a:true, ex:"Ce sont des clones. La reproduction sexuée, elle, donne des individus tous différents."}
]},

diag: { s:"tech", n:"Diagrammes et canicule", items:[
 {t:"pairs", q:"Associe chaque diagramme à son rôle.", p:[["Contexte","éléments extérieurs en lien avec le système"],["Cas d'utilisation","à quoi sert le système, et pour qui"],["Exigences","ce que le système doit respecter"],["Définition de blocs","de quels éléments le système est composé"],["Séquence","les échanges, dans l'ordre chronologique"]]},
 {t:"qcm", q:"Quel diagramme montre les flux (énergie, informations, matière) entre les composants du système ?", o:["Le diagramme des blocs internes","Le diagramme de contexte","Le diagramme des exigences","Le diagramme des cas d'utilisation"], ex:"Le diagramme des blocs internes montre comment les blocs sont reliés et ce qui circule entre eux."},
 {t:"qcm", q:"Dans un diagramme des cas d'utilisation, l'utilisateur est représenté par…", o:["un acteur (un bonhomme)","un rectangle","une flèche","un losange"], ex:"Les acteurs sont reliés aux cas d'utilisation, notés dans des ovales."},
 {t:"qcm", q:"Quel diagramme répond à la question « Dans quel ordre se passent les échanges ? »", o:["Le diagramme de séquence","Le diagramme de définition de blocs","Le diagramme de contexte","Le diagramme des exigences"], ex:"Il se lit de haut en bas, comme une ligne du temps."},
 {t:"qcm", q:"« Le ventilateur doit se déclencher au-dessus de 28 °C. » Dans quel diagramme note-t-on cela ?", o:["Le diagramme des exigences","Le diagramme de séquence","Le diagramme de contexte","Le diagramme des blocs internes"], ex:"C'est une exigence : une performance précise que le système doit atteindre."},
 {t:"vf", q:"Le diagramme de définition de blocs montre l'ordre chronologique des actions.", a:false, ex:"Il montre la composition du système (ses blocs). L'ordre chronologique, c'est le diagramme de séquence."},
 {t:"qcm", q:"Un volet doit se fermer automatiquement en cas de canicule. Quel composant mesure la température ?", o:["Un capteur de température","Le moteur du volet","La carte programmable","Une LED"], ex:"Le capteur acquiert l'information. La carte la traite, le moteur (actionneur) agit."},
 {t:"qcm", q:"Le moteur qui ferme le volet est…", o:["un actionneur","un capteur","une interface","un programme"], ex:"Un actionneur transforme l'énergie pour agir : moteur, ventilateur, vérin…"},
 {t:"build", q:"Remets dans l'ordre les fonctions de la chaîne d'information.", a:["Acquérir","Traiter","Communiquer"], ex:"Le capteur acquiert, la carte programmable traite, puis l'information est communiquée (à l'actionneur ou à l'utilisateur)."},
 {t:"qcm", q:"Pendant une canicule, quel geste garde un logement plus frais ?", o:["Fermer les volets le jour et aérer la nuit","Ouvrir les fenêtres en plein après-midi","Allumer le four","Laisser les volets ouverts au soleil"], ex:"On bloque la chaleur le jour et on fait entrer l'air plus frais la nuit."}
]},

prog: { s:"tech", n:"Programmation par blocs", items:[
 {t:"qcm", q:"Quel bloc permet de répéter des instructions ?", o:["une boucle (répéter)","si… alors","une variable","un capteur"], ex:"« Répéter 10 fois », « répéter indéfiniment » ou « répéter jusqu'à » sont des boucles."},
 {t:"qcm", q:"Quel bloc permet de faire un choix ?", o:["si… alors… sinon","répéter indéfiniment","mettre à","attendre 1 seconde"], ex:"C'est une instruction conditionnelle : le programme fait une chose ou une autre selon une condition."},
 {t:"qcm", q:"Une variable sert à…", o:["stocker une valeur qui peut changer","répéter une action","dessiner à l'écran","arrêter le programme"], ex:"Exemples : un score, une température, un compteur."},
 {t:"input", q:"score = 0, puis répéter 4 fois : ajouter 3 à score. Que vaut score à la fin ?", a:["12"], ex:"0 → 3 → 6 → 9 → 12."},
 {t:"input", q:"x = 10. Si x > 5 alors x = x − 4, sinon x = x + 4. Que vaut x ?", a:["6"], ex:"10 > 5 est vrai, donc on fait x − 4 = 6."},
 {t:"input", q:"n = 1, puis répéter 3 fois : n = n × 2. Que vaut n ?", a:["8"], ex:"1 → 2 → 4 → 8."},
 {t:"input", q:"a = 5 et b = 3. Puis a = a + b, puis b = a − b. Que vaut b ?", a:["5"], ex:"a devient 8, puis b = 8 − 3 = 5. Les instructions s'exécutent dans l'ordre."},
 {t:"build", q:"Remets le programme du ventilateur dans l'ordre.", a:["Répéter indéfiniment","Lire la température","Si température > 30 °C alors","Allumer le ventilateur","Sinon","Éteindre le ventilateur"], ex:"La boucle englobe tout, on lit d'abord le capteur, puis on teste la condition."},
 {t:"qcm", q:"La boucle « répéter jusqu'à condition » s'arrête…", o:["quand la condition devient vraie","quand la condition est fausse","après une seule fois","jamais"], ex:"Elle tourne tant que la condition est fausse, et s'arrête dès qu'elle devient vraie."},
 {t:"vf", q:"Un algorithme est une suite d'instructions qui permet de résoudre un problème.", a:true, ex:"Le programme est la traduction de l'algorithme dans un langage, ici par blocs."}
]}
};

/* Contenu de chaque quête : thèmes utilisés et nombre de questions */
window.LESSONS = {
 q1:{p:["calc"],n:10},  q2:{p:["gram"],n:10},  q3:{p:["front"],n:10}, q4:{p:["atomes"],n:10},
 q5:{p:["geo"],n:10},   q6:{p:["geom"],n:10},  q7:{p:["adn"],n:8},    q8:{p:["auto"],n:10},
 q9:{p:["civils"],n:10},q10:{p:["diag"],n:8},  q11:{p:["arith"],n:10},q12:{p:["ions"],n:10},
 q13:{p:["svt45"],n:10},q14:{p:["prog"],n:8},  q15:{p:["temps"],n:8},
 q16:{p:["calc","geom","arith"],n:15,chrono:true},
 q17:{p:["gram","auto","temps"],n:12},
 q18:{p:["front","civils","geo"],n:12},
 q19:{p:["atomes","ions","adn","svt45","diag","prog"],n:12},
 b1:{p:["calc","geom","arith","gram","auto","temps"],n:15,boss:true},
 q20:{p:["front","civils","geo","atomes","ions","adn","svt45","diag","prog"],n:10},
 b2:{p:["front","civils","geo","atomes","ions","adn","svt45","diag","prog"],n:15,boss:true}
};
