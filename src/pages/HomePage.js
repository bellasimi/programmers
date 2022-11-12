import ContentTitle from "../components/ContentTitle.js";
import { getItem, setItem } from "../utils/storage.js";

const CARD_STATUS_KEY = "cardStatus";

export default function HomePage({ $target }) {
  const $homePage = document.createElement("main");
  $homePage.id = "page_content";
  new ContentTitle({
    $target: $homePage,
    initialState: { title: "Great PeoPle" },
  });
  const $cardsContainer = document.createElement("div");
  $cardsContainer.id = "cards_container";

  this.state; //{personInfos : []}

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($homePage);
    $homePage.appendChild($cardsContainer);
    $cardsContainer.innerHTML = `
          ${this.state.personInfos
            .map(
              (personInfo, idx) => `
              <div idx=${idx} class="card">
                <div class="card_plane card_plane--front">${personInfo.nickname}</div>
                <div class="card_plane card_plane--back">${personInfo.mbti}</div>
              </div>`
            )
            .join("")}
        `;
  };

  $cardsContainer.addEventListener("click", (e) => {
    const { classList } = e.target;
    const cardsStatus = getItem(CARD_STATUS_KEY, {});
    let idx;
    let isFlipped;

    if (classList.contains("card_plane")) {
      isFlipped = e.target.parentNode.classList.contains("is-flipped");
      e.target.parentNode.classList.toggle("is-flipped");
      console.log(e.target.parentNode);
    } else if (classList.contains("card")) {
      isFlipped = e.target.classList.contains("is-flipped");
      e.target.classList.toggle("is-flipped");
      idx = e.target.parentNode.idx;
    }

    const newStatus = isFlipped ? "card" : "card is-flipped";
    const newCardStatus = { ...cardsStatus, [idx]: newStatus };
    setItem(CARD_STATUS_KEY, newCardStatus);
  });
}
