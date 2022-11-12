export default function Loading({ $target }) {
  const $loading = document.createElement("div");
  $loading.className = "Loading";
  $target.appendChild($loading);

  this.state = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state) {
      $loading.innerHTML = `
      <img src="./assets/loading.svg" alt="Loading..."/>
    `;
    } else {
      $loading.innerHTML = "";
    }
    /*     if (this.state) {
      $loading.classList.add("active");
    } else {
      $loading.classList.remove("active");
    } */
  };

  this.render();
}
