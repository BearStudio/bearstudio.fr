---
title: 'La dette technique : un coût sous-estimé des projets numériques'
date: 2020-01-07
categories:
  - 'developpement'
tags:
  - 'developpement'
  - 'developpement-web'
  - 'rex'
heroImage: 'images/dette-technique-rex.png'
metaDescription: "L'abus de dette technique est dangereux pour l'entreprise. Les coûts liés aux mauvaises décisions techniques peuvent avoir de lourdes conséquences..."
excerpt: 'Le terme dette technique est utilisé dans le domaine de l’informatique en comparaison à la dette du domaine financier. Celle-ci permet de symboliser les coûts liés aux mauvaises décisions techniques d’une entreprise. Cet article s’adresse donc aussi bien à ceux qui prennent les décisions qu’à ceux qui les suivent, puisqu’il est important de minimiser cette [&hellip;]'
authors:
  - 'quentin-lerebours'
---

Le terme **dette technique** est utilisé dans le domaine de l’informatique en comparaison à la dette du domaine financier. Celle-ci permet de symboliser les coûts liés aux mauvaises décisions techniques d’une entreprise.

Cet article s’adresse donc aussi bien à ceux qui prennent les décisions qu’à ceux qui les suivent, puisqu’il est important de minimiser cette dette en vue d’une pérennité de l’entreprise ou du projet.

Un exemple simple d’action menant à l’accroissement de la dette technique est de laisser un environnement de travail vieillir sans prendre le temps de le mettre à jour.

Il peut s’agir, par exemple, de ne pas mettre à jour un ordinateur, **ne pas mettre à jour les dépendances d’un projet**, ou ne pas prendre le temps de revenir sur ses décisions et revoir la conception d’une fonctionnalité. Ces exemples sont particulièrement intéressants puisqu’ils paraissent assez courants.

![Développeur en pleine action](images/dette-technique-rex.png)

Il est important de se méfier de l'abus de ce genre de pratique, ce que j'ai compris lors de mon séjour dans une entreprise canadienne.

## Dette technique : l'exemple d'une entreprise canadienne

Cette entreprise a commencé ses [développements](https://www.bearstudio.fr/prestations/dev-front) au milieu des années 1990 en ayant pour objectif de mettre en place une application unique, visant à gérer des flottes de transporteurs.

Cette application étant vouée à contenir beaucoup de formulaires, [Visual Basic 6](https://fr.wikipedia.org/wiki/Visual_Basic) a été la technologie choisie à l’époque, puisque leader sur le marché. C’est une technologie de Microsoft permettant une conception logicielle simplifiée à l'aide de _drag'n'drop_ d'éléments pour créer des formulaires. Ayant fait un choix judicieux, l'entreprise a donc **rapidement pu vendre sa solution** à des entreprises de transports, lui apportant une bonne croissance.

Lors de ma venue dans l'entreprise en 2016, la solution n’avait **pas** été migrée vers de nouvelles technologies, plus récentes, sécurisées et performantes. **La majeure partie du code était toujours en VB6, qui n’est plus maintenue depuis 2004 par Microsoft.**

C’est un exemple concret qui m’a permis de me poser la question : **Quelles conséquences cette dette technique aura pour l'entreprise et ses clients ?**

VB6 étant une technologie qui prend de l'âge, elle ne fonctionne que sur les versions 32 bits de Windows, limitant son utilisation à des ordinateurs de 4Go de mémoire RAM.

Cette limitation impacte directement la durée des [développements](https://www.bearstudio.fr/prestations/dev-back) à venir puisque la moindre opération est longue sur des machines si peu puissantes.

La compilation prend jusqu’à 3 minutes, les éditeurs de texte prennent quelques secondes à retranscrire ce que le développeur écrit et le mode visuel s’ouvre en plusieurs dizaines de secondes.

Les temps de développement se rallongent, la qualité tend à diminuer et **l’agacement dans l’entreprise augmente**, tant pour les développeurs que pour les managers.

Je vois plusieurs conséquences directes liées à ces problèmes:

- La **satisfaction client diminue** car la qualité est impactée.
- Un turnover important se met en place, notamment chez les développeurs. Dans cette entreprise, j’ai vu des employés rester moins de 3 mois, ce qui amène la qualité de la solution à diminuer encore et encore.
- Le **[coût des développements](/fr/blog/articles/no-estimate) augmente**, impliquant une augmentation des tarifs ou une baisse de rentabilité.

Ces différentes conséquences entraînent un cercle vicieux qui peut durer jusqu’à la faillite de l’entreprise car les développeurs la désertent et les clients cherchent des solutions alternatives, moins coûteuses et de meilleure qualité.

## Le concept de la dette technique

La notion de dette technique prend tout son sens lorsqu’on réfléchit à une issue de secours dans ce genre de situation : il est nécessaire d’investir beaucoup de temps et d’argent pour rattraper le temps perdu, en migrant le code partie par partie, le tout sans impacter la solution actuellement utilisée par les clients et qui est toujours en évolution.

La dette technique n’est finalement qu’une dette financière qu’il est nécessaire de **savoir maîtriser pour ne pas la subir**.

Dans cet article, j’ai ciblé un exemple, mais il faut savoir que la dette technique peut aussi se manifester par l'**absence de conception**, de tests, de documentation ou de **migration de code** qui permettent à terme de maintenir un projet dans de bonnes conditions et satisfaire pleinement les différentes parties d'un projet.

De plus, il est important de ne pas être extrémiste concernant la dette technique, car quand elle est maîtrisée, elle permet de donner un élan de lancement aux projets, d’**être plus flexible** et donc d’atteindre la cible du projet plus rapidement.

![Un développeur du BearStudio](images/code-dette-technique.png)

---

Si vous souhaitez en savoir plus sur la dette technique, vous pouvez en lire plus dans mon article sur la [maîtrise de la dette technique](/fr/blog/articles/maitriser-dette-technique-projet-numerique).
