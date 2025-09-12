---
state: 'published'
title: 'Difference entre Class et Record en Java'
date: 2025-01-20
categories:
  - 'developpement'
heroImage: 'images/header-class-record.png'
languages:
  - 'fr'
metaDescription: 'Choisissez entre la flexibilité des Class et la simplicité des Record en Java pour optimiser votre code !'
---

## Différence entre une classe et un record en Java

Depuis la version 16 de Java, un nouveau type de structure de données appelé **record** a été introduit. Il s'agit d'une simplification du modèle classique de classe, spécialement conçu pour les **objets immuables** et les **conteneurs de données**. Comparons en détail les **classes** et les **records** en Java, leurs différences et leurs usages.

### 1\. Qu'est-ce qu'une classe en Java ?

Une **classe** en Java est une structure qui permet de définir des objets avec des **états** (via des champs ou variables d'instance) et des **comportements** (via des méthodes). Une classe est très flexible et peut inclure des méthodes, des constructeurs, des blocs d'initialisation statiques, ainsi que des champs privés, publics, ou protégés.

### Exemple d'une classe simple :

```
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && name.equals(person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

```

### Caractéristiques des **classes** :

- **Mutable** : Les classes peuvent contenir des **champs modifiables** (on peut changer les valeurs des attributs après l'instanciation).

- **Code répétitif** : Pour de simples classes contenant des données, nous devons souvent définir manuellement des méthodes comme `toString()`, `equals()`, et `hashCode()`, ce qui entraîne beaucoup de code répétitif (boilerplate).

- **Personnalisation** : Les classes permettent une grande personnalisation avec des constructeurs variés, des méthodes complexes, et des fonctionnalités comme l'héritage.

- **Héritage** : Les classes peuvent **hériter** d'autres classes et implémenter des interfaces, ce qui offre une grande flexibilité pour réutiliser et étendre du code.

### 2\. Qu'est-ce qu'un record en Java ?

Un **record** est une structure de données simplifiée introduite dans Java 16, destinée à **remplacer les classes de type DTO (Data Transfer Object)**, qui sont souvent utilisées pour encapsuler des données sans comportement complexe. Les records sont conçus pour être **immuables**, et le compilateur génère automatiquement pour eux les méthodes `toString()`, `equals()`, et `hashCode()`.

### Exemple d'un record simple :

```
public record Person(String name, int age) {
    // Le constructeur, les getters, toString, equals, et hashCode sont générés automatiquement
}

```

### Caractéristiques des **records** :

- **Immuable** : Par défaut, les champs d'un record sont **final** et ne peuvent pas être modifiés une fois initialisés.

- **Concise** : Un record est beaucoup plus concis qu'une classe. Le compilateur génère automatiquement des méthodes comme `toString()`, `equals()`, `hashCode()`, ainsi que des **constructeurs canoniques** pour initialiser les champs.

- **Pas d'héritage** : Les records **ne peuvent pas étendre** d'autres classes, mais ils peuvent **implémenter des interfaces**. Cela limite leur usage à des **conteneurs de données simples**.

- **Optimisé pour les données** : Les records sont spécialement conçus pour des cas où l'objectif est de contenir et de transporter des données sans comportement complexe.

### 3\. Comparaison entre une classe et un record

| **Caractéristique**              | **Classe**                                                           | **Record**                                                                                        |
| -------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Mutabilité**                   | Les classes peuvent être mutables ou immuables.                      | Les records sont **immutables** par défaut, les champs sont `final`.                              |
| **Code répétitif (boilerplate)** | Nécessite des méthodes manuelles (`toString`, `equals`, etc.).       | Génère automatiquement `toString()`, `equals()`, `hashCode()`, et un constructeur canonique.      |
| **Constructeurs**                | Peut avoir plusieurs constructeurs avec différentes signatures.      | Dispose d'un **constructeur canonique** généré automatiquement pour tous les champs.              |
| **Héritage**                     | Peut hériter d'autres classes et implémenter des interfaces.         | **Ne peut pas hériter** d'une autre classe, mais peut implémenter des interfaces.                 |
| **Utilisation**                  | Convient pour des objets complexes avec des comportements variés.    | Convient aux **modèles de données simples** ou aux **DTO** immuables.                             |
| **Personnalisation**             | Permet de personnaliser le comportement (logique, mutabilité, etc.). | Limité à la gestion des données, moins de flexibilité pour ajouter des méthodes ou de la logique. |

### 4\. Quand utiliser une classe ?

Les **classes** sont appropriées lorsque :

- Tu as besoin d'**objets mutables** dont l'état peut changer après la création.

- Tu dois encapsuler à la fois des **données et des comportements** (méthodes), ou lorsque ton objet doit inclure une logique métier.

- Tu dois implémenter l'**héritage** (une classe qui hérite d'une autre).

- Tu as besoin d'une grande flexibilité avec des constructeurs variés, des blocs d'initialisation, ou des méthodes supplémentaires.

### Exemple d'utilisation d'une classe :

Si tu dois créer une classe représentant un **compte bancaire** qui permet de modifier son solde et d'exécuter des opérations :

```
public class BankAccount {
    private String accountHolder;
    private double balance;

    public BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        balance -= amount;
    }

    @Override
    public String toString() {
        return "BankAccount{accountHolder='" + accountHolder + "', balance=" + balance + "}";
    }
}

```

### 5\. Quand utiliser un record ?

Les **records** sont particulièrement utiles lorsque :

- Tu veux un objet qui sert uniquement à **stocker des données** de manière **immuable**.

- Tu veux **réduire le code répétitif** : pas besoin de réécrire `equals()`, `hashCode()`, ou `toString()`.

- Ton objet n'a pas besoin d'hériter d'une autre classe, mais peut implémenter des interfaces.

- Tu développes des **Data Transfer Objects (DTO)**, des objets simples utilisés pour transférer des données entre différentes couches ou systèmes.

### Exemple d'utilisation d'un record :

Imaginons que tu dois stocker les informations d'un **utilisateur** sans logique métier spécifique :

```
public record User(String username, String email) {
    // Constructeur, getters, equals, hashCode et toString sont générés automatiquement
}

```

Tu peux facilement créer des instances comme ceci :

```
User user = new User("john_doe", "john@example.com");
System.out.println(user.username());  // john_doe

```

### 6\. Exemple combiné : Classe et Record

Parfois, tu peux combiner des **classes** et des **records** dans un même projet pour différents types de besoins. Par exemple, un **compte bancaire** pourrait être une classe, tandis qu'un **rapport financier** ou un **historique de transaction** pourrait être un record.

### Exemple combiné :

```
public class BankAccount {
    private String accountHolder;
    private double balance;

    public BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        balance -= amount;
    }

    public TransactionRecord createTransactionRecord(double amount, String type) {
        return new TransactionRecord(amount, type, LocalDate.now());
    }
}

public record TransactionRecord(double amount, String type, LocalDate date) {
}

```

### 7\. Conclusion

En résumé, les **classes** en Java sont très flexibles et polyvalentes, permettant de définir à la fois des données et des comportements, tandis que les **records** se concentrent sur la simplification de la gestion des données immuables. Utiliser des **records** réduit le code répétitif et rend la gestion des données plus concise, mais si tu as besoin de mutabilité ou d'héritage, une **classe** sera plus appropriée.
