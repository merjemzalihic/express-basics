//#region Import
    const express = require("express") // CommonJS: Importujemo paket koji se zove express sa funkcijom require koja prima ima paketa kao parametar.
    const { use } = require("express") // CommonJS: Importujemo samo funkciju use iz paketa express **

    import express from "express" // ES6 Module: Importujemo sve iz paketa express i spasavamo u neku varijablu koja se zove express (mozes nazvati kako zelis, npr: import allOfExpress from "express" **
    import { use } from "express" //	ES6 Module: Importujemo samo funkciju use iz paketa express **. Mozes izblaciti samo one funkcije i objekte koji se exportuju iz tog paketa/file-a.
//#endregion

//#region  Export
    module.exports = "Hello World" // CommonJS: exportujemo string.
    module.exports = { firstName: "Merjem", lastName: "Zalihic" } // CommonJS: exportujemo objekat
    module.exports = user // CommonJS: exportujemo varijablu koja se zove user **

    export "Hello World" // ES6 Module: exportujemo string.
    export { firstName: "Merjem", lastName: "Zalihic" } // ES6 Module: exportujemo objekat
    export user // ES6 Module: exportujemo varijablu koja se zove user **
                //Ovakav nacin exporta se importuje u drugom file na ovaj nacin: import { user } from "./ime_filea" **

    export default user // ES6 Module: exportujemo varijablu user kao default vrijednost.
                        // Ovakav nacin exporta se importuje u drugom file na ovaj nacin: import user from "./ime_filea" **
//#endregion

//#region Express
    const express = require("express") // Importujemo express.
    const app = express() // Kreiramo instancu (objekat) express aplikacije.
    app.listen(8000, () => { console.log("Server is running...") }) // Pozivamo listen funkciju iz express instance, koja prima port i callback fn kao parametre. Ovo ce pokrenuti nas API da slusa na port-u 8000 i adresi localhost.
// #endregion

//#region Express Router i Parametri
    app.get("/get-users", (req, res) => { // pravi novu HTTP GET rutu i prima callback fn koja nam nudi request i response objekte.
      const query_params = req.query; // Query je atribut objekta req koji sadrzi query string parametre koji su poslati od frontend-a. Query string je npr: http://localhost:8000/get-users/?name=Merjem&lastName=Zalihic**.
      const route_params = req.params; // Params je atribut objekta req koji sadrzi parametre koji su poslati od frontend-a kada se ruta poziva na ovaj nacin: http://localhost:8000/get-user/5 (router: app.get("/get-user/:id", (req, res) => { ... })).
      const body_params = req.body; //  Body sadrzi sve podatke requesta koje je frontend poslao u body-u. Body je samo dostupan kod POST, PUT i PATCH methoda i koristi se obicno da salje JSON objekte, npr kada pravis novog korisnika ili da editujes.

      res.send("Hello World"); //Send je funkcija i sluzi da posaljemo bilo koje podatke kao odgovor, to moze biti bilo koji tip podatka: string, objekat, niz itd.
      res.send([1, 2, 3, 4, 5]); // niz
      res.send({ firstName: "Merjem", lastName: "Zalihic" }); // objekat

      res.status(404); // Setujemo status code na 404 ili bilo koji drugi status code, poslije moramo opet zavrsiti rquest sa send() ili end(), primjer: res.status(404).send("User not found").
    }) 
// #endregion

//#region File System / fs
const fs = require("fs/promises");

const readMyFile = async () => {
  __dirname // Daje nam absolutnu putanju do foldera u kojem se nalazi ovaj code npr: E:\Education\Merjem\Express\basics

  const data = await fs.readFile(`${__dirname}/my-file.txt`, "utf8"); // readFile je async funkcija koja cita file i vraca nam string kao rezultat nakon sto iscita file koji mozemo spasiti u neku varijablu.  

  await fs.writeFile(`${__dirname}/my-file.txt`, "Hello World", "utf-8"); // writeFile je async funkcija koja pise string, koji smo naveli kao frugi parametar, u file, koji smo naveli kao prvi parametar.  
}
//#endregion

//#region Middleware => Funkcije koje se pozivaju prije router-a. Zamisli kao neku cijev: Request=>=M1=M2=M3=Router==>Response
  app.use(express.urlencoded({ extended: true })); // Konvertuje query, route i body parametre iz string-a u objekte
  app.use(express.static(`${__dirname}/public`)); // Pravi folder koji se nalazi na putanju koju smo proslijedili kao parametar javnim, svak moze pristupati tom folderu onda.
//#endregion