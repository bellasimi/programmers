import ContentTitle from "../components/ContentTitle.js";
import {
  NAME_REGEX,
  NICKNAME_REGEX,
  EMAIL_REGEX,
  NAME_INPUT_MESSAGE,
  NICKNAME_INPUT_MESSAGE,
  EMAIL_INPUT_MESSAGE,
} from "../utils/constants.js";
import { getItem, setItem } from "../utils/storage.js";
const PERSON_INFO_KEY = "personalInfo";

export default function SignupPage({ $target }) {
  const $signupPage = document.createElement("main");
  $signupPage.id = "page_content";
  new ContentTitle({
    $target: $signupPage,
    initialState: { title: "Sign Up, GreatPeoPle!" },
  });
  const $formContainer = document.createElement("div");
  $formContainer.id = "form_container";
  const mbtis = [
    "ENFJ",
    "ENTJ",
    "ENFP",
    "ENTP",
    "ESFJ",
    "ESTJ",
    "ESFP",
    "ESTP",
    "INFJ",
    "INTJ",
    "INFP",
    "INTP",
    "ISFJ",
    "ISTJ",
    "ISFP",
    "ISTP",
  ];

  this.render = () => {
    $target.appendChild($signupPage);
    $signupPage.appendChild($formContainer);
    $formContainer.innerHTML = `
      <form>
          <span class="form_elem">
              <label for="name">이름<span class="mark">(필수*)</span></label>
              <input id="name" placeholder="이름" pattern=${NAME_REGEX} title="2~4 글자의 한글만 입력이 가능합니다." required>
          </span>
          <span class="form_elem">
              <label for="email">이메일<span class="mark">(필수*)</span></label>
              <input id="email" placeholder="이메일"  pattern=${EMAIL_REGEX} title="이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다." required>
          </span>
          <span class="form_elem">
            <label for="nickname">닉네임<span class="mark">(필수*)</span></label>
            <input id="nickname" placeholder="닉네임"  pattern=${NICKNAME_REGEX} title="대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다." required>
          </span>   
          <span class="form_elem">
              <label for="role">직군<span class="mark">(필수*)</span></label>
              <select id="role" name="role" required>
                  <option value="">직군을 선택해주세요</option>
                  <option value="backend">백엔드</option>
                  <option value="frontend">프론트엔드</option>
                  <option value="fullstack">풀스택</option>
              </select>
          </span>
          <span class="form_elem">
            <label for="mbti">mbti</label>
            <select id="mbti" name="role">
                <option value="">MBTI를 선택해주세요</option>
                ${mbtis
                  .map(
                    (mbti) => `
                    <option value=${mbti}>${mbti}</option>
                    `
                  )
                  .join("")}
            </select>
          </span>          
          <span class="form_elem">
              <button type="submit">등록</button>
          </span>
        </form>
        `;
  };

  $formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const storedPersonInfos = getItem(PERSON_INFO_KEY, []);
    const name = document.querySelector("#name").value;
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const role = document.querySelector("#role").value;
    const mbti = document.querySelector("#mbti").value;

    const isDuplicate = storedPersonInfos.some(
      (personInfo) =>
        personInfo.email === email || personInfo.nickname === nickname
    );
    const idx = storedPersonInfos.length;

    if (!isDuplicate) {
      const newPersonInfo = { idx, name, nickname, email, role, mbti };
      setItem(PERSON_INFO_KEY, [...storedPersonInfos, newPersonInfo]);
      alert("성공적으로 등록되었습니다.");
      document.querySelector("#name").value = "";
      document.querySelector("#nickname").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#role").value = "";
      document.querySelector("#mbti").value = "";
    } else {
      alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
    }
  });
}
