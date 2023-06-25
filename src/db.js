const { Level } = require("level");
const path = require("path");

// Déclarer la base de données en spécifiant le chemin vers le dossier de la base de données où l'on souhaite l'enregistrer (de préférence en dehors du git)
const dbPath = path.resolve(__dirname, "../myschooldb");
let db;

// Fonction pour ouvrir et/ou créer la base de données
function openDB() {
  if (!db) {
    db = new Level(dbPath, { valueEncoding: "json" });
  }
  console.log("Base de données ouverte.");
  return db;
}
// Fonction pour fermer la base de données
function closeDB(db) {
  return new Promise((resolve, reject) => {
    db.close((error) => {
      if (error) {
        console.error(
          "Erreur lors de la fermeture de la base de données :",
          error
        );
        reject(error);
      } else {
        console.log("Base de données fermée.");
        resolve();
      }
    });
  });
}

// Fonction pour insérer une école dans la base de données
function insertSchool(db, key, value) {
  return new Promise((resolve, reject) => {
    db.put(key, value, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Fonction pour récupérer les détails d'une école à partir de sa clé
function getSchool(db, key) {
  return new Promise((resolve, reject) => {
    db.get(key, (error, value) => {
      if (error) {
        if (error.notFound) {
          resolve(null); // Clé non trouvée, retourner null
        } else {
          reject(error);
        }
      } else {
        resolve(value);
      }
    });
  });
}

// Fonction pour mettre à jour les détails d'une école
function updateSchool(db, key, value) {
  return new Promise((resolve, reject) => {
    db.put(key, value, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Fonction pour supprimer une école de la base de données
function deleteSchool(db, key) {
  return new Promise((resolve, reject) => {
    db.del(key, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  openDB,
  closeDB,
  insertSchool,
  getSchool,
  updateSchool,
  deleteSchool,
};
