# Clean project - Task Manager

Task Manager est une application de gestion des tâches basée sur une architecture Clean et utilisant **Node.js** et **SQLite**. Elle permet de créer, consulter, modifier, et supprimer des tâches via une API REST.

## 🚀 Fonctionnalités principales

- **Créer une tâche** : Ajout de nouvelles tâches avec un titre, une description et un statut (complété ou non).
- **Lister toutes les tâches** : Consultation de toutes les tâches disponibles.
- **Récupérer une tâche par ID** : Obtenir les détails d'une tâche spécifique.
- **Modifier une tâche** : Mise à jour des informations d'une tâche.
- **Supprimer une tâche** : Suppression définitive d'une tâche.

---

## 🛠️ Pré-requis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) pour la gestion des dépendances
- [SQLite](https://www.sqlite.org/) (inclus avec Node.js via `sqlite3`)

---

## 📦 Installation

1. **Cloner le projet**
   ```bash
   cd task-manager
   ```

2. Installerles dépendances :
   ```bash
   npm install
   ```

3. Configurer l'environnement :
   - Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```bash
   PORT=3000
   DB_PATH=./tasks.db
   ```

   - Initialisez la base de données : 
   La base de données SQLite est automatiquement initialisée à la première exécution si elle n'existe pas.

4. Lancer le serveur en mode développement :
   ```bash
   npm run dev
   ```

Le serveur est accessible à l'adresse suivante : `http://localhost:3000`
