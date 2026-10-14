# 📦 GoMyCode Bootcamp - Checkpoint JSX & React Components

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)]()
[![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.10.4-7952B3?logo=bootstrap&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint valide la structuration modulaire d'une application React avec des composants indépendants (`Name`, `Price`, `Description`, `Image`) consommant un fichier de données JSON (`product.js`), intégrés dans une carte **React-Bootstrap** avec rendu conditionnel dynamique.

---

## 📋 Table des Matières

- [Objectif du Checkpoint](#-objectif-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [Structure des Fichiers & Composants](#-structure-des-fichiers--composants)
- [Détail de l'Implémentation](#-détail-de-limplémentation)
- [Rendu Conditionnel & Avatar](#-rendu-conditionnel--avatar)
- [Installation & Démarrage](#-installation--démarrage)
- [Auteur](#-auteur)

---

## 🎯 Objectif du Checkpoint

1. Créer un fichier `product.js` exportant un objet JSON décrivant un produit (nom, prix, description, URL de l'image).
2. Créer 4 composants modulaires :
   - `Name.js` : retourne le nom du produit.
   - `Price.js` : retourne le prix du produit.
   - `Description.js` : retourne la description détaillée du produit.
   - `Image.js` : retourne l'image du produit avec badge de notation.
3. Importer ces 4 composants dans `App.js` et les encapsuler dans une carte `React-Bootstrap Card`.
4. Définir une variable `firstName` au-dessus du composant `App`.
5. Afficher un message de bienvenue personnalisé :
   - Si `firstName` est renseigné : *« Hello, Darius ! »* accompagné d'une image/avatar utilisateur.
   - Si `firstName` est vide : *« Hello, there ! »*.

---

## ✅ Cahier des Charges & Validation

| Consigne GoMyCode | Implémentation | Statut |
| :--- | :--- | :---: |
| **Créer `product.js`** | Objet JSON exporté avec `name`, `price`, `description`, `image`, `rating` | ✅ Validé |
| **Composant `Name.js`** | Extrait et affiche le titre produit avec typographie soignée | ✅ Validé |
| **Composant `Price.js`** | Extrait et affiche le prix formaté avec badge de disponibilité | ✅ Validé |
| **Composant `Description.js`** | Extrait le texte descriptif et liste les caractéristiques clés | ✅ Validé |
| **Composant `Image.js`** | Affiche l'image responsive et badge de note étoiles (4.9⭐) | ✅ Validé |
| **Carte React-Bootstrap** | Encapsulation dans `Card`, `Card.Body`, responsive et stylisée | ✅ Validé |
| **Variable `firstName` définie** | Définie au-dessus de `App` (`initialFirstName = "Darius"`) | ✅ Validé |
| **Message de salutation** | Rendu conditionnel strict : *« Hello, Darius ! »* ou *« Hello, there ! »* | ✅ Validé |
| **Image si prénom fourni** | Avatar avec indicateur en ligne vert si prénom présent | ✅ Validé |
| **Style & Design soigné** | Typographies Google Fonts (Outfit & Plus Jakarta Sans), ombres douces et transitions | ✅ Validé |

---

## 📁 Structure des Fichiers & Composants

```text
03-jsx-react-components-checkpoint/
├── index.html                   # HTML avec polices Outfit & Plus Jakarta Sans
├── package.json                 # Configuration des dépendances
├── vite.config.js               # Configuration du serveur Vite
├── README.md                    # Documentation complète du checkpoint
├── .gitignore                   # Exclusion de node_modules
└── src/
    ├── product.js               # Données du produit sous format JSON
    ├── components/
    │   ├── Name.jsx / Name.js               # Composant d'affichage du nom
    │   ├── Price.jsx / Price.js             # Composant d'affichage du prix
    │   ├── Description.jsx / Description.js # Composant descriptif
    │   └── Image.jsx / Image.js             # Composant d'image produit
    ├── App.jsx / App.js         # Composant App avec Card Bootstrap & logique de salutation
    ├── index.jsx / index.js     # Point d'entrée React 18
    ├── App.css                  # Styles du produit, de la carte et de l'avatar
    └── index.css                # Styles globaux
```

---

## 💡 Rendu Conditionnel & Avatar

La logique de salutation est gérée via des expressions ternaires en JSX :

```jsx
{firstName && firstName.trim() !== '' ? (
  <div className="avatar-wrapper">
    <img src={userAvatar} alt={`Avatar de ${firstName}`} className="user-avatar" />
    <span className="online-indicator"></span>
  </div>
) : (
  <div className="avatar-placeholder">👤</div>
)}

<h4 className="greeting-text">
  {firstName && firstName.trim() !== ''
    ? `Hello, ${firstName} ! 👋`
    : 'Hello, there ! 👋'}
</h4>
```

---

## 🚀 Installation & Démarrage

### 1. Cloner le dépôt
```bash
git clone https://github.com/Karma-22/gomycode-jsx-react-components-checkpoint.git
cd gomycode-jsx-react-components-checkpoint
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm start
# ou :
npm run dev
```
Ouvrez votre navigateur sur l'adresse locale indiquée (ex : `http://localhost:3001`).

---

## 👨‍💻 Auteur

- **Étudiant** : Darius Ange (Karma-22)
- **GitHub** : [@Karma-22](https://github.com/Karma-22)
- **Formation** : Full Stack Software Developer - GoMyCode
