const mocha = require("mocha");
const { parseCSV } = require("../src/csvParser.js");
const {
  openDB,
  closeDB,
  insertSchool,
  getSchool,
  updateSchool,
  deleteSchool,
} = require("../src/db.js");
const assert = require("assert");

const path = require("path");
const csvFilePath = path.join(__dirname, "..", "data", "contacts.csv");

describe("Tests de la base de données LevelDB", function () {
  let db;

  // Permet d'ouvrir et de fermer la base de données avant et après l'exécution des tests
  before(function () {
    db = openDB();
  });

  after(async function () {
    await closeDB(db);
  });

  it("Devrait insérer une école dans la base de données", async function () {
    const school = {
      title: "Mon École",
      name: "Nom de l'école",
      address: "Adresse de l'école",
      realAddress: "Adresse réelle de l'école",
      department: "Département de l'école",
      country: "Pays de l'école",
      tel: "Téléphone de l'école",
      email: "Email de l'école",
    };

    await insertSchool(db, school.title, school);

    const insertedSchool = await getSchool(db, school.title);

    assert.deepStrictEqual(insertedSchool, school);
  });

  it("Devrait récupérer les informations d'une école à partir de sa clé", async function () {
    const key = "Mon École";

    const school = {
      title: "Mon École",
      name: "Nom de l'école",
      address: "Adresse de l'école",
      realAddress: "Adresse réelle de l'école",
      department: "Département de l'école",
      country: "Pays de l'école",
      tel: "Téléphone de l'école",
      email: "Email de l'école",
    };

    await insertSchool(db, key, school);

    const retrievedSchool = await getSchool(db, key);

    assert.deepStrictEqual(retrievedSchool, school);
  });

  it("Devrait mettre à jour les détails d'une école", async function () {
    const key = "Mon École";

    const updatedSchool = {
      title: "Mon École",
      name: "Nouveau nom de l'école",
      address: "Nouvelle adresse de l'école",
      realAddress: "Nouvelle adresse réelle de l'école",
      department: "Nouveau département de l'école",
      country: "Nouveau pays de l'école",
      tel: "Nouveau téléphone de l'école",
      email: "Nouvel email de l'école",
    };

    await updateSchool(db, key, updatedSchool);

    const schoolData = await getSchool(db, key);

    assert.deepStrictEqual(schoolData, updatedSchool);
  });

  it("Devrait supprimer une école de la base de données", async function () {
    const key = "Mon École";

    await deleteSchool(db, key);

    const schoolData = await getSchool(db, key);

    assert.strictEqual(schoolData, null);
  });

  it("Devrait insérer les écoles du fichier CSV dans la base de données", async function () {
    const data = await parseCSV(csvFilePath);

    for (const school of data) {
      await insertSchool(db, school.title, school);
    }

    const insertedSchools = [];

    for (const school of data) {
      const insertedSchool = await getSchool(db, school.title);
      insertedSchools.push(insertedSchool);
    }

    assert.strictEqual(
      insertedSchools.length,
      data.length,
      "Le nombre d'écoles insérées ne correspond pas au nombre d'écoles du fichier CSV"
    );
  });

  it("Devrait parser le fichier CSV correctement", async function () {
    const data = await parseCSV(csvFilePath);

    // Vérification du format des données parsées
    assert(Array.isArray(data), "Les données parsées doivent être un tableau");

    const firstSchool = data[0];
    assert.deepStrictEqual(
      Object.keys(firstSchool),
      [
        "title",
        "name",
        "address",
        "realAddress",
        "department",
        "country",
        "tel",
        "email",
      ],
      "Les clés des données parsées ne correspondent pas"
    );
  });
});
