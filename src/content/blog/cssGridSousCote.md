---
title: CSS Grid est sous-coté 👎
slug: css-grid-est-sous-cote
description: Depuis sa sortie en 2017, CSS Grid est devenu une fonctionnalité essentielle pour les développeurs front-end. Cependant, il est souvent sous-estimé par rapport à son homologue, le display flex. Dans cet article, nous allons explorer pourquoi CSS Grid est sous-coté et pourquoi il est temps de lui donner une chance.
date: "29/07/2023"
tags: ["CSS", "CSS Grid"]
---

Depuis sa sortie en 2017, CSS Grid est devenu une fonctionnalité essentielle pour les développeurs front-end. Cependant, il est souvent sous-estimé par rapport à son homologue, le display flex. Dans cet article, nous allons explorer pourquoi CSS Grid est sous-coté et pourquoi il est temps de lui donner une chance.

## Création facile d'une grid 🎨
CSS Grid est une fonctionnalité puissante qui a été conçue pour faciliter la création de mises en page complexes. Avec CSS Grid, il est possible de créer des grilles à plusieurs colonnes et lignes en quelques lignes de code. Il suffit de définir une grille avec la propriété ``display: grid;`` de définir le nombre de colonnes et de lignes avec grid-template-columns et grid-template-rows, et de placer les éléments dans la grille avec grid-column et grid-row.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}

.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

## Utilisation de repeat et de fractional unit 🔁
La fonction repeat en CSS Grid permet de définir rapidement un grand nombre de colonnes ou de lignes avec une syntaxe simple. Par exemple, ``grid-template-columns: repeat(5, 1fr)`` définit cinq colonnes égales avec une fraction d'espace disponible égale.

Les unités fractionnelles (fr) permettent également de diviser l'espace disponible entre les colonnes ou les lignes de manière égale. Par exemple, ``grid-template-columns: 1fr 2fr`` définit deux colonnes où la deuxième colonne a le double d'espace que la première.

```css
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.item {
  grid-column: 2 / 5;
}
```

## Placement avec grid row et grid col 🏃‍♀️
La propriété grid-column et grid-row permettent de placer facilement les éléments dans la grille en spécifiant les positions de début et de fin. Par exemple, ``grid-column: 2 / 4`` place l'élément dans la deuxième et la troisième colonne.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
```

## Placement unitaire des éléments 🌟
La propriété grid-area permet de définir simultanément les propriétés grid-row et grid-column pour un élément. Cela permet de placer facilement un élément dans une position spécifique de la grille.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.item {
  grid-area: 2 / 3 / 4 / 4;
}
```

## Max-content, min-content, autofill, autofit, minmax 🤔
CSS Grid introduit également de nouvelles fonctions telles que minmax, max-content, min-content, autofill et autofit. Ces fonctions permettent de créer des mises en page avancées avec des tailles de colonnes dynamiques et des alignements de contenu.

La fonction minmax permet de définir une taille minimale et maximale pour une colonne ou une ligne. Par exemple, ``grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));`` définit des colonnes de 100 pixels de largeur minimum, mais qui peuvent s'étendre jusqu'à remplir l'espace disponible.

Les fonctions max-content et min-content permettent de définir la taille maximale et minimale d'un élément en fonction de son contenu.

Les fonctions autofill et autofit permettent de remplir l'espace disponible avec des colonnes ou des lignes. La différence entre les deux est que autofit ne crée pas de colonnes ou de lignes vides, tandis que autofill peut en créer.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

## Conclusion 🎉
En conclusion, CSS Grid est une fonctionnalité sous-cotée qui offre une grande flexibilité et une facilité de création de grilles. Bien qu'il puisse sembler intimidant au début, une fois que vous le maîtrisez, il peut vous faire gagner beaucoup de temps et améliorer considérablement votre mise en page.

Le display flex, quant à lui, est une fonctionnalité plus simple et plus facile à maîtriser. Cependant, il est beaucoup moins flexible que CSS Grid et ne permet pas de créer des grilles à plusieurs colonnes et lignes.

Nous espérons que cet article vous a donné envie d'essayer CSS Grid et de découvrir tout ce qu'il a à offrir !

