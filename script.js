const costat1 = ["Lladre", "Policia", "Mare", "Pare", "Fill 1", "Fill 2", "Filla 1", "Filla 2"];
const barca = [];
const costat2 = ['Prueba','Prueba 2','Prueba 3'];

const contenidorC1 = document.getElementById("personatges-c1");
const contenidorC2 = document.getElementById("personatges-c2");
const contenidorBarca = document.getElementById("barca-display");
const missatgeDisplay = document.getElementById("missatge");

function actualitzarInterficie() {
    contenidorC1.innerHTML = "";
    contenidorC2.innerHTML = "";
    contenidorBarca.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement("image"));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            if (barca.length<2){
                let index = costat1.indexOf(element);
                let elementAMoure=costat1.splice(index, 1);
                barca.push(...elementAMoure);
                missatgeDisplay.textContent = `Has clicat: ${element} que està a la posició ${index}. L'has mogut a la barca.`;
                actualitzarInterficie();
            }

        });
        contenidorC1.appendChild(boto);
    });

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement("image"));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            let index = costat1.indexOf(element);
            let elementAMoure=barca.splice(index, 1);
            costat1.push(...elementAMoure);
            missatgeDisplay.textContent = `Has clicat: ${element} que està a la posició ${index}. Ara pots travessar a la Riba Dreta.`;
            actualitzarInterficie();
        });
        contenidorBarca.appendChild(boto);
    });

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement("image"));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            if (barca.length<2){
                let index = costat2.indexOf(element);
                let elementAMoure=costat2.splice(index, 1);
                barca.push(...elementAMoure);
                missatgeDisplay.textContent = `Has clicat: ${element} que està a la posició ${index}. L'has deixat a la Riba Dreta.`;
                actualitzarInterficie();
            }

        });
        contenidorC2.appendChild(boto);
    });
}

actualitzarInterficie();
