const costat1 = ["ladron", "policia", "madre", "padre", "Hijo1", "Hijo2", "Hija1", "Hija2"];
const barca = [];
const costat2 = [];
const contenidorC1 = document.getElementById("personatges-c1");
const contenidorC2 = document.getElementById("personatges-c2");
const contenidorBarca = document.getElementById("barca-display");
const missatgeDisplay = document.getElementById("missatge");
let costat = "esquerra"

//Aquesta funció és la responsable per el moviment de la barca
function actualitzarInterficie(){
    contenidorC1.innerHTML = "";
    contenidorC2.innerHTML = "";
    contenidorBarca.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='95px' height='95px'>"
        boto.addEventListener("click", () => {
            if (barca.length<2){
                let index = costat1.indexOf(element);
                let elementAMoure=costat1.splice(index, 1);
                barca.push(...elementAMoure);
                actualitzarInterficie();
            } else {
                missatgeDisplay.textContent = "Ja hi ha 2 personatges a la barca";
            }
        });
        contenidorC1.appendChild(boto);
    });

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='95px' height='95px'>"

        boto.addEventListener("click", () => {
            if (costat === "esquerra"){
                let index = barca.indexOf(element);
                let elementAMoure=barca.splice(index, 1);
                costat1.push(...elementAMoure);
            }else{
                let index = barca.indexOf(element);
                let elementAMoure= barca.splice(index, 1);
                costat2.push(...elementAMoure);
                hasganado()
            }
            actualitzarInterficie();
        });
        contenidorBarca.appendChild(boto);
    });

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='95px' height='95px'>"

        boto.addEventListener("click", () => {
            if (barca.length<2){
                let index = costat2.indexOf(element);
                let elementAMoure=costat2.splice(index, 1);
                barca.push(...elementAMoure);
                actualitzarInterficie();
            }
        });
        contenidorC2.appendChild(boto);
    });
}
//aquesta es la funció encarregada de les normes del joc
function creuar() {
    if (barca.includes("policia") || barca.includes("madre") || barca.includes("padre")) {
        if (!costat1.includes("ladron") || (costat1.includes("ladron") && (costat1.includes("policia") || costat1.length === 1))) {
            if (!costat2.includes("ladron") || (costat2.includes("ladron") && (costat2.includes("policia") || costat2.length === 1))) {
                if (!costat1.includes("padre") || (costat1.includes("padre") && (costat1.includes("madre") || (costat1.includes("padre") && (!costat1.includes("madre")) && (!costat1.includes("Hija1")) && (!costat1.includes("Hija2")) || costat1.length === 1)))) {
                    if (!costat2.includes("padre") || (costat2.includes("padre") && (costat2.includes("madre") || (costat2.includes("padre") && (!costat2.includes("madre")) && (!costat2.includes("Hija1")) && (!costat2.includes("Hija2")) || costat2.length === 1)))) {
                        if (!costat1.includes("madre") || (costat1.includes("madre") && (costat1.includes("padre") || (costat1.includes("madre") && (!costat1.includes("padre")) && (!costat1.includes("Hijo1")) && (!costat1.includes("Hijo2")) || costat1.length === 1)))) {
                            if (!costat2.includes("madre") || (costat2.includes("madre") && (costat2.includes("padre") || (costat2.includes("madre") && (!costat2.includes("padre")) && (!costat2.includes("Hijo1")) && (!costat2.includes("Hijo2")) || costat2.length === 1)))) {
                                moure();
                            } else {
                                missatgeDisplay.textContent = "La mare està amb un Fill"
                            }
                        } else {
                            missatgeDisplay.textContent = "La Mare està amb un Fill"
                        }
                    } else {
                        missatgeDisplay.textContent = "El pare està amb una Filla"
                    }
                } else {
                    missatgeDisplay.textContent = "El pare està amb una Filla"
                }
            } else {
                missatgeDisplay.textContent = "El Lladre no està amb el Policia"
            }
        } else {
            missatgeDisplay.textContent = "El Lladre no està amb el Policia"
        }
    } else {
        missatgeDisplay.textContent = "Falta el Policia, Mare o Pare"
    }
}

function moure(){
    if (costat==="esquerra"){
        alert("La barca està a la dreta")
        costat="dreta"
    }else{
        alert("La barca està a l'esquerra")
        costat="esquerra"
    }
}

actualitzarInterficie();

function hasganado(){
    if (costat2.length === 8){
        alert("Has ganado")
    }
}