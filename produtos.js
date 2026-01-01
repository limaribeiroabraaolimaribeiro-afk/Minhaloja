import { db, collection, getDocs } from "./firebase.js";

const lista = document.getElementById("lista");

async function carregarProdutos() {
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "produtos"));

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    if (!p.ativo) return;

    lista.innerHTML += `
      <div class="produto">
        <img src="${p.imagem}">
        <h2>${p.nome}</h2>
        <p class="preco">R$ ${p.preco},00</p>

        <label>Horário:</label><br>
        <input type="time"><br><br>

        <button class="botao"
          onclick="window.open('https://wa.me/5547992101675?text=Quero o produto ${p.nome}')">
          Comprar pelo WhatsApp
        </button>
      </div>
    `;
  });
}

carregarProdutos();
