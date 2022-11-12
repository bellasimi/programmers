export default function ContentTitle({ $target, initialState }) {
  const $title = document.createElement("div");
  $title.className = "content_title";
  this.state = initialState; //{title: ''}

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($title);
    $title.innerHTML = `
            <h1> ${this.state.title} </h1>
        `;
  };

  this.render();
}
