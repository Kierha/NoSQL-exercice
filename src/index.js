const { parseCSV } = require("./csvParser");
const {
  openDB,
  closeDB,
  insertSchool,
  getSchool,
  updateSchool,
  deleteSchool,
} = require("./db");

const csvFilePath = "../data/contacts.csv";

// Fonction principale pour l'exécution des opérations
async function main() {
  try {
    // Ouvrir la base de données
    const db = await openDB();

    // Parsing du fichier CSV
    const data = await parseCSV(csvFilePath);

    // Clé de l'école pour la récupération, la suppression ou la mise à jour (clé = titre de l'école) || Serait possible d'utiliser un id avec const { v4: uuidv4 } = require('uuid');

    // const key = "Mon École";

    // Insertion des écoles dans la base de données
    // for (const school of data) {
    //   try {
    //     await insertSchool(db, school.title, school);
    //     console.log(`École ${school.title} insérée avec succès.`);
    //   } catch (error) {
    //     console.error(`Erreur lors de l'insertion de l'école ${school.title} :`, error);
    //   }
    // }

    // Récupération d'une école par clé
    // try {
    //   const schoolData = await getSchool(db, key);
    //   console.log("Détails de l'école :", schoolData);
    // } catch (error) {
    //   console.error(`Erreur lors de la récupération de l'école ${key} :`, error);
    // }

    // Insertion d'une école dans la base de données (qui n'est pas dans le fichier CSV)
    // const newSchool = {
    //   title: "Mon École",
    //   name: "Nom de l'école",
    //   address: "Adresse de l'école",
    //   realAddress: "Adresse réelle de l'école",
    //   department: "Département de l'école",
    //   country: "Pays de l'école",
    //   tel: "Téléphone de l'école",
    //   email: "Email de l'école",
    // };
    //
    // try {
    //   await insertSchool(db, newSchool.title, newSchool);
    //   console.log("École insérée avec succès.");
    // } catch (error) {
    //   console.error("Erreur lors de l'insertion de l'école :", error);
    // }

    // Mise à jour des détails de l'école
    // const updatedSchool = {
    //   title: "Mon École",
    //   name: "Nouveau nom de l'école",
    //   address: "Nouvelle adresse de l'école",
    //   realAddress: "Nouvelle adresse réelle de l'école",
    //   department: "Nouveau département de l'école",
    //   country: "Nouveau pays de l'école",
    //   tel: "Nouveau téléphone de l'école",
    //   email: "Nouvel email de l'école",
    // };
    //
    // try {
    //   await updateSchool(db, key, updatedSchool);
    //   console.log("Détails de l'école ${key} mis à jour.");
    // } catch (error) {
    //   console.error(`Erreur lors de la mise à jour de l'école ${key} :`, error);
    // }

    // Suppression d'une école
    // try {
    //   await deleteSchool(db, key);
    //   console.log("École supprimée de la base de données.");
    // } catch (error) {
    //   console.error(`Erreur lors de la suppression de l'école ${key} :`, error);
    // }

    // Fermer la base de données
    closeDB(db);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}

// Appel de la fonction principale
main();
