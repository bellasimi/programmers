import Header from "./components/Header.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";
import { initRouter } from "./utils/router.js";
import { setItem, getItem } from "./utils/storage.js";
import { request } from "./request.js";

const PERSON_INFO_KEY = "personalInfo";

export default function App({ $target }) {
  const header = new Header({ $target });
  const homePage = new HomePage({ $target });
  const signupPage = new SignupPage({ $target });

  const storedPersonInfos = getItem(PERSON_INFO_KEY, []);

  const fetchPersonInfos = async () => {
    const data = await request("/web/src/data/new_data.json");
    return data;
  };

  const personInfosWithIndex = async () => {
    let data = await fetchPersonInfos();

    data = data.map((personInfo, idx) => {
      const infoWithIndex = {
        idx,
        ...personInfo,
      };
      return infoWithIndex;
    });

    return data;
  };

  if (storedPersonInfos.length === 0) {
    //처음 로컬스토리지 생성
    personInfosWithIndex().then((data) => setItem(PERSON_INFO_KEY, data));
  }

  this.route = async () => {
    $target.innerHTML = "";
    const { pathname } = window.location;
    header.render();
    if (pathname === "/web/") {
      const personInfos = await fetchPersonInfos();
      const nexState = { personInfos };
      homePage.setState(nexState);
    } else if (pathname === "/web/signup") {
      signupPage.render();
    }
  };

  this.route();

  window.addEventListener("popstate", this.route);
  initRouter(this.route);
}
