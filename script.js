
      const languages = {
        spanish: {
          engbtn: "Inglés",
          spanbtn: "Español",
          hunbtn: "Húngaro",
          title: "Manual de usuario",
          control: "Control del juego",
          wasd: "<b>WASD</b> para el movimiento",
          drill: "Cuando el taladro toca la pared, se hace <b>clic</b> en la perforación",
          editor: "Control en el editor",
          zoom: "Acercar con la <b>rueda del mouse</b>",
          delete: "Borrar con <b>D</b>",
          wall: "Colocar pared con <b>W</b>",
          room: "Colocar habitación con <b>Q</b>",
          spawn: "Colocar punto de inicio con <b>E</b>",
          finish: "Colocar final o salida con <b>R</b>",
          info: "Información importante",
          drillinfo: "El taladro se rompe después de perforar <b>dos</b> paredes",
          exitinfo: "Puedes escapar sin encontrar la sala del tesoro, pero <b>no</b> será una verdadera victoria"
        },
        hungarian: {
          engbtn: "Angol",
          spanbtn: "Spanyol",
          hunbtn: "Magyar",
          title: "Használati utasítás",
          control: "Játék vezérlése",
          wasd: "<b>WASD</b> a mozgáshoz",
          drill: "Fúróval falhoz hozzáértintve <b>kattintás</b> a fúrás",
          editor: "Szerkesztőben való vezérlés",
          zoom: "Nagyítás <b>egérgörgővel</b>",
          delete: "Törlés <b>D</b>-vel",
          wall: "Fal lerakása <b>W</b>-vel",
          room: "Szoba lerakása <b>Q</b>-val",
          spawn: "Spawnpont lerakása <b>E</b>-vel",
          finish: "Befejezés vagy kijárat lerakása <b>R</b>-el",
          info: "Fontos információ",
          drillinfo: "Fúróval csak <b>kettő</b> falat lehet fúrni mielőtt eltörik",
          exitinfo: "Ki lehet jutni a terem megtalálása nélkül, de <b>nem fog</b> igazi nyerésnek számítani"
        },
        english: {
            engbtn: "English",
            spanbtn: "Spanish",
            hunbtn: "Hungarian",
            title: "User manual",
            control: "Game control",
            wasd: "<b>WASD</b> to move",
            drill: "Touch the wall with the drill and <b>click</b> to drill it out",
            editor: "Controls in the editor",
            zoom: "<b>scroll wheel</b> to zoom",
            delete: "Delete with <b>D</b> button",
            wall: "Place down walls with <b>W</b>",
            room: "Place down treasure rooms with <b>Q</b>",
            spawn: "Place down the spawnpoint with <b>E</b>",
            finish: "Place down the exit with <b>R</b>",
            info: "Important information",
            drillinfo: "The drill breaks after drilling <b>two</b> walls",
            exitinfo: "You can escape without finding the treasure room but it <b>won't</b> be a true win"

          }
      };


      let currentLanguage = "hungarian";


   document.getElementById("spanish").addEventListener("click", function() {
        currentLanguage = "spanish";
        updateLanguage();
      });
      document.getElementById("hungarian").addEventListener("click", function() {
        currentLanguage = "hungarian";
        updateLanguage();
      });
      document.getElementById("english").addEventListener("click", function() {
        currentLanguage = "english";
        updateLanguage();
      });


      function updateLanguage() {
        document.getElementById("english").innerHTML = languages[currentLanguage].engbtn
        document.getElementById("spanish").innerHTML = languages[currentLanguage].spanbtn
        document.getElementById("hungarian").innerHTML = languages[currentLanguage].hunbtn
        document.getElementById("title").innerHTML = languages[currentLanguage].title
        document.getElementById("game-control").innerHTML =
          "<h2>" + languages[currentLanguage].control + "</h2>" +
          "<p>" + languages[currentLanguage].wasd + "</p>" +
          "<p>" + languages[currentLanguage].drill + "</p>" +
          "<h2>" + languages[currentLanguage].editor + "</h2>" +
          "<p>" + languages[currentLanguage].zoom + "</p>" +
          "<p>" + languages[currentLanguage].delete + "</p>" +
          "<p>" + languages[currentLanguage].wall + "</p>" +
          "<p>" + languages[currentLanguage].room + "</p>" +
          "<p>" + languages[currentLanguage].spawn + "</p>" +
          "<p>" + languages[currentLanguage].finish + "</p>" +
          "<h2>" + languages[currentLanguage].info + "</h2>" +
          "<p>" + languages[currentLanguage].drillinfo + "</p>" +
          "<p>" + languages[currentLanguage].exitinfo + "</p>";
      }


      updateLanguage();