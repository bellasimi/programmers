import { push } from "../utils/router.js";

export default function Header({ $target }) {
  const $header = document.createElement("header");

  this.render = () => {
    $target.appendChild($header);
    $header.innerHTML = `
            <div class="header header_left">
                <span class="menu_name" id="menu_home">HOME</span>
            </div>
            <div class="header header_right">
                <div class="menu_name" id="menu_signup">SIGNUP</div>
            </div>
        `;
  };

  $header.addEventListener("click", (e) => {
    const { id } = e.target;
    if (id === "menu_home") {
      push("/web/");
    } else if (id === "menu_signup") {
      push("/web/signup");
    }
  });

  this.render();
}
