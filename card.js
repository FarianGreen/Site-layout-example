const cardContainer = document.querySelector(".cards__container");

const firstCardOptions = [
  { text: "Key Words Optimized", success: true, id: 1 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 2 },
  { text: "Weekly Reporting", success: true, id: 3 },
  { text: "Key Words Optimized", success: true, id: 4 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 5 },
  { text: "Weekly Reporting", success: false, id: 6 },
  { text: "Key Words Optimized", success: false, id: 7 },
  { text: "Top 10 Ranking Guarantee", success: false, id: 8 },
];

const secondCardOptions = [
  { text: "Key Words Optimized", success: true, id: 1 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 2 },
  { text: "Weekly Reporting", success: true, id: 3 },
  { text: "Key Words Optimized", success: true, id: 4 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 5 },
  { text: "Weekly Reporting", success: false, id: 6 },
  { text: "Key Words Optimized", success: false, id: 7 },
  { text: "Top 10 Ranking Guarantee", success: false, id: 8 },
];

const thirdCardOptions = [
  { text: "Key Words Optimized", success: true, id: 1 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 2 },
  { text: "Weekly Reporting", success: true, id: 3 },
  { text: "Key Words Optimized", success: true, id: 4 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 5 },
  { text: "Weekly Reporting", success: true, id: 6 },
  { text: "Key Words Optimized", success: true, id: 7 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 8 },
];

class Card {
  constructor(name, cost, options) {
    (this.name = name), (this.cost = cost), (this.options = options);
  }
}

const arrCards = [
  new Card("Silver", 159, firstCardOptions),
  new Card("Gold", 399, secondCardOptions),
  new Card("Platinum", 549, thirdCardOptions),
];

const cards = arrCards.map((item) => {
  const li = item.options.map((el) => {
    return `
    <li key=${el.id}>
        <span class="material-icons-outlined ${el.success ? "done" : "close"}">
        ${el.success ? "done" : "close"}
        </span>
        ${el.text}
    </li>`;
  });
  const les = li.join(" ")
  return `
  <div class="card">
    <div class="card__name">${item.name}</div>
    <div class="card__price">
      $<div class="card__cash">${item.cost}</div>/Per Month
    </div>
    <div class="free_items">
      <ul class="card__item">
      ${les}
      </ul>
    </div>
    <div class="flash">
      <button class="btn-card">Get Started</button>
    </div>
  </div>
  `
});

const cardRender = cards.join(" ")

cardContainer.insertAdjacentHTML('afterbegin', cardRender)
