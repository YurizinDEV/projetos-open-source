import './style.css'

interface Card {
  id: number,
  icone: string,
  cor: string,
  titulo: string,
  descricao: string,
  tecnologias: string[],
  link: string
}

async function carregarCards() {

  const app = document.querySelector<HTMLDivElement>('#app')!
  const response = await fetch('https://localhost:5173/cards.json')
  const cards: Card[] = await response.json()

  app.innerHTML = '<h1 class="titulo">Olá Mundo da Web!</h1>'

  const cardsContainer = document.querySelector<HTMLDivElement>('#cards')!
  // cardsContainer.innerHTML = '<div> Card 1 </div> <div> Card 2 </div> <div> Card 3 </div>'

  cards.forEach((card) => {
    const cardDiv = document.createElement('div')
    cardDiv.innerHTML = `
      <div class="card-icone" style="background-color: ${card.cor}">
        <img src="${card.icone}" alt="${card.titulo}">
      </div>
      <h2>${card.titulo}</h2>
      <p>${card.descricao}</p>
      <p>${card.tecnologias.join(', ')}</p>
      <a href="${card.link}" target="_blank">Ver mais</a>
    `
    cardsContainer.appendChild(cardDiv)
  })


}

carregarCards()


