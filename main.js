window.addEventListener("load", main);

function main(){
    const tartalom = document.getElementById("tartalom");
    const etelLista = ["spagetti", "brokkoli", "spenot"];

    kiir(tartalom, etelLista);
    console.log("kesz");
    showKaja();
}

function kiir(tartalom, etelLista){
    tartalom.innerHTML += "<ul>";
    const tartalomUL = document.querySelectorAll("#tartalom ul")[0];

    for (let i = 0; i < etelLista.length; i++) {
        tartalomUL.innerHTML += `<li>${etelLista[i]}</li>`;
    }
}

function showKaja() {
    const kajaImg = [
      "img/kep1.jpg",
      "img/kep2.jpg",
      "img/kep3.jpg",
      ];
  
    const art = document.createElement("article");
  
    for(let i = 0; i < kajaImg.length; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = kajaImg[i];
      div.appendChild(img);
      art.appendChild(div);
    };
  
    document.body.appendChild(art);
  }