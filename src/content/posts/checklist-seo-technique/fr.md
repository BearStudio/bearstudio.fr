---
title: 'La checklist SEO technique pour lancer un site web'
date: 2022-06-27
categories:
  - 'developpement'
heroImage: 'images/checklist-seo-technique-illustration.png'
---

Si la création d’un site web est (presque) **indispensable** pour développer une **notoriété en ligne**, il est important de respecter certaines **règles de conception** si vous souhaitez gagner de la visibilité en vous **positionnant sur Google**.

Cet article est pensé pour les **porteurs de projet** qui souhaitent lancer leur premier site web ou pour les **développeurs juniors** qui souhaitent **respecter ou améliorer le SEO** de leurs clients mais aussi pour toutes les personnes intéressés par le SEO !

## Pourquoi respecter les critères de référencement de Google ?

Une grande majorité des recherches sont effectuées via Google ([90% en France](https://www.blogdumoderateur.com/chiffres-google/)). Donc pour **maximiser votre visibilité** en termes de référencement naturel, il est évident qu’il faut **suivre les recommandations** du géant. D’autant plus que suivre les **critères de Google** permet de **gagner des positions** sur l’ensemble des moteurs de recherche.

Au vu du nombre de sites présents sur la toile (2 milliards en 2021 d'après satista), les **moteurs de recherche** ont tout intérêt à **réguler** le nombre de pages qu’ils indexent et à faire **ressortir les pages** qu’ils estiment **qualitatives** en première page du résultat de recherche. 

Ce nombre étant de plus en plus important, les moteurs de recherche peaufinent leurs **algorithmes** pour être plus **exigeants** avec des **critères de qualité** toujours plus élevés. 

On pourrait établir une longue liste de l’ensemble des critères pris en compte par Google. Parmi les plus connus on retrouve la qualité du contenu, la sémantique, la hiérarchie des informations, l’expérience utilisateur, le nombre et la qualité des liens externes, le maillage interne et la vitesse de chargement.

Dans cet article, je vais me concentrer sur l’**aspect technique on-site** du SEO en établissant une petite **checklist de démarrage** d’un projet de site web. 

## Les critères SEO techniques on-site à respecter sur son site web

![Les points clés pour une base SEO technique](images/points-cles-seo-technique-1024x690-1.webp)

### Optimiser la performance de son site

S’il y a bien un **critère d’expérience utilisateur** à ne pas négliger, c’est la **performance** d’un site web. [D’après Deloitte](https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf) une diminution de 0,1 seconde de temps de chargement augmenterait le taux de conversion de 8%.

Pour tester la performance d’un site, vous pouvez passer par Lighthouse qui est accessible via le menu “Outil de développement” de Chrome. 

Pour avoir un score pertinent, je vous conseille de tester avec plusieurs outils. Vous pouvez utiliser [PageSpeed Insight](https://pagespeed.web.dev/) et [GTmetrix](https://gtmetrix.com/) (qui est d’ailleurs un peu trop "gentil").

<figure>

![test de performance sur google page speed pour la landing page de start UI](images/test-performance-google-page-speed-1.webp)

<figcaption>

Exemple de résultat d’un test sur PageSpeed Insights pour la landing page de [Start UI](https://github.com/BearStudio/start-ui-web).

</figcaption>

</figure>

En utilisant ces outils vous obtiendrez les **points clés** pour **améliorer la performance** de votre site web. Parmi les points récurrents on retrouve :

**La compression des images** 

Vous pouvez utiliser [tinypng](https://tinypng.com/) pour **réduire la taille de vos images**. Si vous êtes sur WordPress, vous pouvez passer par un plugin comme [imagify](https://imagify.io/fr) qui optimise automatiquement toutes vos images.

**Dimension des images**

Évitez d’utiliser des images dimensionnées en 10 000x10 000 qui, même compressées, seraient bien trop lourdes.

**Format des images**

**Privilégiez le format WebP** qui est bien plus léger que le JPG ou le PNG. Sur WordPress vous pouvez utiliser imagify qui convertit automatiquement vos images.

**Chargement différé (lazy loading)**

Le **lazy loading** permet de faire charger les ressources seulement lorsqu’elles sont utiles. Par exemple les images hors écran ne chargeront qu’à leur affichage suite au défilement de la page par l’utilisateur. 

Pour utiliser le lazy loading vous pouvez avoir recours à un [script JS](https://www.andreaverlicchi.eu/vanilla-lazyload/), l’attribut loading ou encore un plugin comme WP Rocket si vous êtes sur Wordpress.  
L’important, c'est vraiment que le **contenu** textuel de la page ne soit **pas trop retardé par le chargement** de scripts, de feuilles de styles ou autres.

**Minimisation du code**

Il ne faut pas sous-estimer l’impact du **poids de votre code JavaScript et CSS**. Vous pouvez le compresser facilement en l’entrant sur un outil comme [Refresh SF](https://refresh-sf.com/). Si vous êtes sur WordPress vous pouvez optimiser l’ensemble de votre site avec un plugin comme WP Rocket. 

Pour éviter d’avoir un code trop lourd, vous pouvez également retirer les plugins que vous n’utilisez pas. 

Il existe évidemment beaucoup plus de critères, à vous d’aller explorer les résultats de vos tests de performances !

### Les balises à utiliser en SEO

Les balises sont des **tags codés en HTML** qui permettent d'apporter des informations importantes aux moteurs de recherche et utilisateurs. En SEO vous risquez d'être fortement pénalisé si vous n'utilisez pas les **balises importantes pour le référencement**.

#### La balise de méta description 

Les balises meta sont des **balises HTML situées dans la balise head** du code et qui permettent d’y ajouter des **meta-données** (des informations sur la page en question). 

La balise de méta description permet de **décrire le contenu d’une page** web sur la SERP (Search Engine Results Pages ou Page de résultats d’un moteur de recherche).

Concrètement, ça donne ça pour le site du BearStudio :

![meta description de la page d'accueil du bearstudio](images/meta-description-bearstudio-1024x190-1.webp)

Pour l’intégrer dans une page web, le code s’insère dans la balise head comme ça :   
`<head> <meta name="description" content="Vive les ours"></head>`

Vous pouvez aussi passer par un plugin comme Yoast SEO, SEOPress ou Rank Math pour intégrer facilement vos meta description si vous utilisez un CMS. 

La **rédaction d’une meta description est primordiale** pour le référencement étant donné qu’elle influe directement sur le **taux de clics** de votre page sur la SERP. Pour être efficace, la description doit faire entre **140 et 160 caractères** et contenir un **mot clé** sur lequel vous souhaitez vous positionner. 

#### La balise title

La balise title correspond au **titre de votre page** affiché sur la SERP et dans l’onglet du navigateur. En reprenant l’exemple du BearStudio on obtient ça :

![title de la page d'accueil du bearstudio](images/title-bearstudio-1024x190-1.webp)

Le title se retrouve dans la balise head comme ça :  
`<head> <title>BearStudio</title> </head>`

Comme pour la méta description, le title peut se modifier très facilement sur un CMS en utilisant un plugin comme Yoast SEO.

Pour être efficace, la balise title doit contenir le **mot clé principal** de la page et ne pas dépasser les **65 caractères**. Elle doit donner envie de cliquer et être pertinente par rapport au contenu de la page.

Attention à ne pas confondre le titre 1 (balisé par le tag `<h1> </h1>`) qui correspond au premier titre de la page avec la balise title qui apparaît dans l’onglet du navigateur.

![Différence entre un title et un H1](images/difference-title-h1-1024x381-1.webp)

#### La balise alt

Google n’est pas encore assez intelligent pour comprendre vos images. Heureusement vous pouvez l’aider en décrivant votre image grâce au **texte alternatif**. Ce texte, sous la forme d’une balise alt, permet également de remplacer l’image si celle-ci ne charge pas. Au delà de l’aspect SEO, elle est surtout utile pour les personnes malvoyantes utilisant un lecteur d’écran. C’est d’ailleurs pour ça qu’elle existe.

Pour utiliser la balise, il suffit d’**ajouter l’attribut alt** dans les propriétés de l’image, comme ici :  
`<img src="paysage-montagnes.jpg" alt="un paysage de montagnes"/>`

Sur les CMS, vous pouvez ajouter l’attribut alt directement depuis le back-office lorsque vous importez une image. 

#### Les balises Hn

Les balises Hn permettent de **créer une** **hiérarchie des titres** avec H1 comme titre principal et H2, H3, Hn… comme sous-titres classées du plus au moins important. 

Pour baliser un texte en Hn c’est très simple, prenons le H1 de cet article :  
`<h1> La checklist SEO technique pour lancer un site web</h1>`

Attention, contrairement aux autres balises Hn, le H1 qui est le titre principal ne doit être utilisé qu’une seule fois. 

Pour comprendre le fonctionnement, on peut prendre comme exemple la hiérarchie de cet article :

![la hiérarchie des titres Hn pour l'article checklist SEO](images/hierarchie-hn-article-checklist-seo-1.webp)

Cette hiérarchie est primordiale pour avoir un **contenu clair et structuré** à la fois pour les utilisateurs, mais aussi pour les moteurs de recherche. C’est ce qui va leur permettre de **comprendre le contenu** de votre page pour le suggérer en résultat des recherches correspondant au besoin auquel vous répondez. 

Les balises Hn étant identifiées comme les mots les plus importants d’une page, il est important d’y insérer vos mots clés principaux.

### Optimiser ses URL pour le SEO

![La structure d'une URL](images/structure-url-1024x605-1.webp)

L’URL est une **adresse permettant d’identifier une ressource donnée** sur internet. Pour une URL optimisée ajoutez-y un **mot clé important**, gardez la **concise** et évitez les caractères spéciaux.

Le plus important dans les URL de votre site réside dans leur **consistance** : si vous avez un site e-commerce avec 200 catégories (livres, high-tech…), il sera bien plus simple de ne pas afficher ces catégories dans l’arborescence de l’URL pour éviter un énorme casse-tête.

On peut prendre l’exemple des produits présents sur plusieurs URL qui causeront du **contenu dupliqué** sans la présence de **balises canonical** (tag qui indique la page mère sur les pages au contenu identique). Ces mêmes produits rendront des **erreurs 404** (page introuvable) en cas de changement de catégorie.   
*Pour que ça soit plus clair, je vais expliquer en dessous avec un exemple pour un blog.* 

Même histoire qu’un e-commerce pour un blog, attention à ne pas garder le système d’url de type site.com/blog/catégorie/article sur votre blog si vous n’êtes pas certains de vos catégories. En cas de **changement d’une catégorie** vous vous exposez à de multiples **erreurs 404** dûes au changement de l’URL de vos articles. 

Par exemple un changement de catégorie1/articleX vers catégorie2/articleX rendrait l’URL catégorie1/articleX inaccessible sans redirection, ce qui est **pénalisant pour le SEO**. 

Pour être sûr de ne pas avoir de problèmes, la meilleure option est de référencer vos articles comme ceci site.com/article ou comme cela site.com/blog/article.

Le fait de changer l’URL ne vous empêche pas de trier vos articles par catégorie dans votre blog. Ça n’aura pas d’impact pour la compréhension de Google. C’est le **sitemap**, le **fil d’ariane et le maillage interne** (liaison des pages entre elles via les liens internes) qui **rendra compréhensible votre site** aux yeux de Google.

Pour le reste de votre site, je vous conseille de suivre la **hiérarchie logique**. Par exemple pour notre page maquettes, on a [https://www.bearstudio.fr/prestations/ux-design/maquettes](https://www.bearstudio.fr/prestations/ux-design/maquettes). En suivant le lien, on sait qu’on la retrouve dans la catégorie prestations, puis UX design, puis maquettes.

On retrouve cette logique dans le **fil d’ariane** présent sur les pages du site. Il est utile à la fois pour Google qui comprend la **profondeur du site**, mais également pour l’utilisateur qui peut retourner dans les pages mères facilement. 

![fil d'ariane](images/fil-ariane-exemple-1.webp)

### Configurer le Sitemap et le Robots.txt

Le fichier robots.txt est un **fichier texte présent à l’adresse site.com/robots.txt** qui permet d’autoriser ou non à un robot d’exploration, l’accès à un répertoire donné.

Si vous souhaitez que Google explore et indexe vos pages, veillez à bien l’autoriser. Pour se faire vous pouvez vous référer au [tuto de Google](https://developers.google.com/search/docs/advanced/robots/create-robots-txt). (⚠️ **Si vous n’autorisez pas l’exploration de votre site, il ne sera pas référencé.**)

Le sitemap est un **fichier XML qui liste les URLs d’un site** en les accompagnant de méta données, ce qui permet aux robots d’**explorer plus facilement** un site web.

Depuis un CMS, vous pouvez facilement créer et modifier votre sitemap depuis le back office ou grâce à l’utilisation d’un plugin SEO. 

Si vous êtes développeur, vous pouvez vous référer au [protocole de sitemaps](https://sitemaps.org/protocol.html). 

### Repérer et corriger les liens cassés

![illustration d'une erreur 404](images/illustration-erreur-404-1024x598-1.webp)

On est tous déjà tombés sur une **erreur 404** qui a **nuit à notre expérience** utilisateur. En effet il est très frustrant de rencontrer un lien brisé lorsqu’on cherche à avoir une information précise. Si vous veillez à **garder les visiteurs** sur vos sites, vous avez tout intérêt à **garder un œil sur l’ensemble des liens** présents sur votre site, qu’ils soient internes ou externes.

Attention aussi aux URLs de votre site en général. Certaines pages peuvent être référencées sur d’autres sites ou en favoris d’un utilisatur, si un lien est cassé c’est le même problème.

D’autant plus que des liens brisés ont un **impact négatif sur votre référencement**. En effet, un robot d’exploration qui passe sur un lien cassé utilise son budget de crawl inutilement. Il assimilera cette erreur à un **site de mauvaise qualité**. 

Pour repérer les liens cassés vous pouvez passer par un crawler complet comme [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/). Ce crawler permet de repérer un grand nombre d’erreurs techniques sur votre site. Mais il faut savoir que la version d’essai du logiciel limite le crawl à 500 URLs. Si vous préférez utiliser un outil gratuit, vous pouvez passer votre site sur [W3C Link Checker](https://validator.w3.org/checklink?uri=) ou utiliser un crawler comme [Xenu](http://home.snafu.de/tilman/xenulink.html#Download). 

### Optimiser la structure de son site

De la même manière que pour les balises Hn, votre site web doit être **structuré logiquement**. C'est ce qui va rendre votre **contenu compréhensible et accessible** par l’utilisateur et par les robots d’exploration. 

Il est important que vos pages suivent une **hiérarchie logique**. Par exemple un **regroupement par thème** qui forment un silo ou une arborescence. Plus on descend dans l’arborescence, plus la thématique est précise.  

On peut prendre l’exemple du site du BearStudio pour comprendre la bonne façon de **structurer un site** web.

On a le menu qui regroupe les pages principales du site. Si on veut découvrir les [prestations proposés par le BearStudio](https://www.bearstudio.fr/prestations) on retrouve la page dédiée dans le menu.

Sur la page, on retrouve 4 catégories principales. Si on choisi la catégorie [**UX design**](https://www.bearstudio.fr/prestations/ux-design) on retrouve toutes les prestations liées au Design. C’est simple, logique mais efficace. 

![hiérarchie du site bearstudio](images/hierarchie-site-web-1024x503-1.webp)

Pour **créer une bonne structure**, vous pouvez également vous baser sur le **parcours utilisateur**. Pour se faire, vous pouvez suivre [notre article sur la création d’un userflow](/fr/blog/articles/parcours-utilisateur-ux).

### Vérifier l’ergonomie mobile de son site

On sait qu’aujourd’hui une **majorité des internautes** utilisent un moteur de recherche depuis leur **téléphone**. Avoir un site web qui n’est **pas optimisé pour mobile** n’est **absolument pas envisageable**. 

Pour vérifier l’ergonomie mobile de votre site, vous pouvez vous rendre sur la Google Search Console (GSC). Dans le menu expérience puis dans ergonomie mobile vous devez vous assurer que toutes vos pages soient valides. Vous pouvez également effectuer un [test d’optimisation mobile](https://search.google.com/test/mobile-friendly) avec l’outil dédié de la GSC.

![l'ergonomie mobile sur la google search console](images/ergonomie-mobile-google-search-console-1.webp)

Pour aller plus loin, vous pouvez aussi faire appel à nous pour faire réaliser un [Audit UX](https://www.bearstudio.fr/prestations/ux-design/audit-ux) de votre site par des experts avec une **vraie connaissance humaine**. 

Contrairement à un simple outil automatisé, vous aurez un retour de test par un oeil avisé qui saura se mettre dans la peau d’un utilisateur. 

Vous vous assurerez que votre **expérience utilisateur** est bien **optimisée sur n’importe quel appareil**. 

## Conclusion sur le SEO technique 

Pour résumer, pour avoir une bonne base SEO technique, votre site web doit :

- Être **performant**
- Utiliser les **balises SEO**
- Avoir des **URL optimisées**
- Avoir un **Sitemap** et un **Robots.txt** bien configurés
- Ne pas contenir de **liens cassés**
- Avoir une **structure logique**
- Être **optimisé sur mobile**

Difficile d’aborder l’ensemble des critères qu’un site web doit respecter pour optimiser son SEO en un seul article ! 

Ici je me suis focalisé sur les **critères techniques principaux**. Il faudra également s’intéresser à la concurrence, au maillage interne, à l’optimisation off-site et à la création de contenus optimisés.

Dans tous les cas, si vous lancez un site web, vous pouvez vous servir de cet article comme **checklist pour démarrer de la bonne manière**. Ça sera la première étape d’une stratégie marketing qui demandera un travail approfondi. Vous pourrez toujours **aller plus loin** par la suite pour vous **positionner plus haut** dans les moteurs de recherche.
