# Holberton School - TypeScript Projects

Ce dossier regroupe plusieurs exercices et projets TypeScript réalisés dans le cadre du cursus Holberton School.  
Chaque sous-dossier correspond à une tâche indépendante, avec sa propre configuration et son propre code.

---

## Structure du dossier

```
TypeScript/
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
└── task_5/
```

---

## Prérequis

- Node.js ≥ 18
- npm ≥ 9
- TypeScript ≥ 5
- Webpack ≥ 5

---

## Installation

Dans chaque dossier de tâche :

```bash
npm install
```

---

## Tâches

### **task_0** : Interface et rendu dynamique

- Création d'une interface `Student`
- Manipulation de tableaux d'objets
- Rendu d'un tableau HTML en Vanilla JS
- Fichiers principaux : `js/main.ts`

---

### **task_1** : Interface avancée et typage

- Création d'une interface `Teacher` avec propriétés optionnelles et index signature
- Utilisation de l'interface pour typage strict
- Fichiers principaux : `js/main.ts`

---

### **task_2** : Classes, interfaces et fonctions spécifiques

- Création de classes `Director` et `Teacher` avec interfaces dédiées
- Fonctions de type predicate et d'exécution de tâches selon le type
- Fichiers principaux : `js/main.ts`

---

### **task_3** : Typage et opérations CRUD

- Déclaration de types personnalisés (`RowID`, `RowElement`)
- Utilisation de fichiers de déclaration (`crud.d.ts`)
- Appels de fonctions CRUD simulées
- Fichiers principaux : `js/main.ts`, `js/crud.js`, `js/crud.d.ts`

---

### **task_4** : Namespace, déclaration fusionnée et héritage

- Utilisation de namespaces TypeScript
- Déclaration fusionnée pour enrichir les interfaces
- Héritage de classes (`Subject`, `Cpp`, `Java`, `React`)
- Gestion des enseignants et matières
- Fichiers principaux :  
  - `js/main.ts`  
  - `js/subjects/Teacher.ts`  
  - `js/subjects/Subject.ts`  
  - `js/subjects/Cpp.ts`  
  - `js/subjects/Java.ts`  
  - `js/subjects/React.ts`

---

### **task_5** : Nominal typing et conventions de marque

- Création d'interfaces avec propriétés de marque pour typage nominal
- Fonctions d'addition de crédits majeurs et mineurs
- Fichiers principaux : `js/main.ts`

---

## Compilation et exécution

Chaque tâche dispose de sa propre configuration Webpack et TypeScript.  
Pour compiler et exécuter une tâche :

```bash
cd task_X
npm run build
```

Pour lancer le serveur de développement (si configuré) :

```bash
npm run start-dev
```

---

## Bonnes pratiques

- Respect du typage strict TypeScript
- Utilisation de l'ESLint pour la qualité du code
- Organisation modulaire des fichiers
- Documentation et commentaires dans le code

---

## Auteur

Projet réalisé dans le cadre du cursus Holberton School.

---

## Licence

Ce projet est sous licence Holberton School.
