---
title: 'Java pour les débutants : parfois pour les experts aussi !'
date: 2025-05-28
categories:
  - 'developpement'
thumbnail:
  image: 'images/blog-header.png'
  alt: "Illustration d'un ours blanc avec des engrenages et le logo Java"
metaDescription: 'Évitez les erreurs Java fréquentes : NullPointerException, confusion ==/equals(), oubli de break, pièges courants.'
authors: ['mariem-mkassmi']
---

Comme vous le savez, Java est un langage qui est utilisé par plusieurs frameworks. Pour un débutant comme moi 😉, il y a beaucoup d’astuces que même les experts oublient parfois, alors qu’elles sont basiques.

Il y a des erreurs qui rendent fou alors qu’en réalité, ce sont des notions de base.

## Le fameux NullPointerException

Cette erreur m’arrive encore tous les jours ! En réalité, elle se produit lorsque tu essaies d’accéder à une méthode ou à une propriété sur **une variable nulle**.

**Exemple :**

```java
String exemple = null;
System.out.println(exemple.length());
// Il va y avoir un null pointer

// La solution est de vérifier la nullité en amont
if (exemple != null) {
    System.out.println(exemple.length());
}
```

Un autre piège courant avec les énumérations. Imagine que tu as un type enum et une classe comme ceci :

```java
enum Status {
    PENDING,
    APPROVED
}

public class MyClass {
    Status status;
    public Status getStatus() {
        return status;
    }
}

MyClass a = new MyClass();
```

Si tu veux vérifier le statut et vérifier s’il est PENDING ou non, tu pourrais écrire comme ça :

```java
if (a.getStatus().equals(Status.PENDING)) { }
```

Ce code ne s’exécutera jamais si getStatus() retourne null et l’application plantera, car si getStatus() retourne null, alors tu essaies d’appler la méthode “.equals()” sur ce null. Ce cas provoque donc une NPE(NullPointerException). Une solution serait :

```java
if (Status.PENDING.equals(a.getStatus())) { }
```

Ici la méthode “equals()” sera toujours appelée sur un objet existant. Dans le cas où le getSatus() est null, le “equals()” retournera tout simplement false.

## La différence entre `==` et `equals()`

Une confusion fréquente en Java concerne la comparaison de valeurs :

```java
String a = new String("Bonjour");
String b = new String("Bonjour");

if (a == b) {
    System.out.println("Identiques");
} else {
    System.out.println("Différents");
}
// Ce code va afficher Différents
```

Les deux variables contiennent la string “Bonjour” mais le résultat est différent. **Pourquoi ?** Imagine que tu écris “Bonjour” sur deux feuilles différentes ⇒ le contenu est identique, mais ce sont deux feuilles distinctes.  
Dans notre exemple :

- a et b sont deux feuilles différentes

- Chaque new String() crée une nouvelle “feuille” en mémoire Lorsque l’on compare avec le “==”, on va vérifier s’il s’agit est exactement de la même feuille (donc si les variables ont le même emplacement mémoire).

Si l’on veut simplement comparer les contenus, il faut faire :

```java
String a = new String("Bonjour");
String b = new String("Bonjour");

if (a.equals(b)) {
    System.out.println("Identiques");
} else {
    System.out.println("Différents");
}
// Ce code va afficher Identiques
```

Ainsi, l’opérateur `==` compare les adresses mémoire, tandis que la méthode `equals()` compare les objets selon la manière dont cette méthode est définie dans la classe.

**Du coup :**

\- Pour les types primitifs (\``int`\`, \``boolean`\`, \``char`\`, \``long`\`, etc.) ⇒ utilise \``==`\`.  
\- Pour les objets (\``String`\`, \``List`\`, etc.) ⇒ utilise \``equals()`\`.

## L’oubli du `break` dans les `switch case`

En Java, quand tu utilises un `switch`, le code continue à s’exécuter dans les `case`suivants si tu n’ajoutes pas `break` à la fin de chaque cas.

Exemple :

```java
int jour = 2;
switch (jour) {
    case 1:
        System.out.println("Lundi");
    case 2:
        System.out.println("Mardi");     // S'exécute parce que jour = 2
    case 3:
        System.out.println("Mercredi");  // S'exécute aussi
    case 4:
        System.out.println("Jeudi");     // S'exécute aussi
    default:
        System.out.println("Autre jour"); // S'exécute aussi
}
// à la fin on aura comme resultat : Mardi, Mercredi, Jeudi, Autre jour
```

Pour éviter cela, il faut toujours ajouter les `break`.

```java
int jour = 2;
switch (jour) {
    case 1:
        System.out.println("Lundi");
        break;
    case 2:
        System.out.println("Mardi");     // S'exécute
        break;                           // Et on sort du switch
    case 3:
        System.out.println("Mercredi");
        break;
    case 4:
        System.out.println("Jeudi");
        break;
    default:
        System.out.println("Autre jour");
}
// Résultat : Mardi
```

## Passage par valeur et Passage par référence

Une erreur fréquente est de penser que les objets sont toujours passés par référence en Java. En réalité, les **types primitifs** (`int`, `double`, `boolean`, etc.) sont passés **par valeur**.

Exemple :

Quand tu passes un `int`, `double` ou `boolean` à une méthode, c’est équivalent à donner une **photocopie** de ta recette à un ami. Si ton ami modifie sa copie (ajoute du sucre, change la température), ta recette originale reste intacte ⇒ Chacun travaille sur sa propre version

```java
public class Test {
    public static void main(String[] args) {
        int a = 5; // La recette original contient 5 grammes de sucre
        modifierValeur(a);
        System.out.println(a);  // Toujours 5 grammes de sucre
    }

    static void modifierValeur(int x) {
        x = 10; // L'ami change le grammage du sucre de 5 à 10 grammes
    }
}
// A ne pas changer car Java copie seulement la valeur, il reste toujours égal à 5
```

Quant aux **objets** sont passés **par référence... mais de manière indirecte** : c'est la référence qui est copiée, pas l'objet lui-même).

Exemple :

Quand tu passes un objet (comme `String`, `ArrayList`), c'est comme donner un **double de ta clé d'appartement** à un ami. Ton ami ne peut pas changer ta clé, mais peut entrer dans ton appartement et déplacer les meubles ⇒ Vous accédez au même appartement avec des clés différentes.

```java
class Appartement {
    String couleurMur;
    Appartement(String couleur) { this.couleurMur = couleur; }
}

public class Test {
    public static void main(String[] args) {
        Appartement monAppart = new Appartement("blanc");
        rendreVisite(monAppart);
        System.out.println(monAppart.couleurMur);  // Le mur a été repeint en bleu
    }

    static void rendreVisite(Appartement appart) {
        appart.couleurMur = "bleu";  // Repeint ton mur
    }
}

```

⚠️ Il n'est pas recommandé de modifier un objet par référence, car cela rend le code difficile à lire et à comprendre. On ne sait pas facilement quand et où l'objet peut être modifié.

**En conclusion**, même si ces notions semblent basiques, elles peuvent facilement causer des bugs frustrants, même aux développeurs expérimentés. C’est pourquoi il est essentiel de bien comprendre ces fondamentaux et de toujours garder en tête que même les bases peuvent parfois nous piéger.

Auteur: [Mariem Mkassmi](https://www.linkedin.com/in/mkassmi-meriem-6b1326169/)
