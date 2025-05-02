const refs = {
  btnNext: document.querySelector("#btn__next"),
  btnPreviuse: document.querySelector("#btn__previouse"),
  liElement: document.querySelector(".slider__list-item"),
  liElements: document.querySelectorAll(".slider__list-item"),
  list: document.querySelector(".slider__list"),
  nextVisible: document.querySelector(".visible"),
  firstLi: document.querySelector("#first-el"),
};

refs.btnNext.addEventListener("click", _.debounce(oNextClick, 300));
function oNextClick() {
  const currentVisible = document.querySelector(".visible");
  if (currentVisible) {
    currentVisible.classList.remove("visible");
    if (currentVisible.nextElementSibling) {
      currentVisible.nextElementSibling.classList.add("visible");
      currentVisible.classList.add("hidden");
    } else {
      refs.firstLi.classList.add("visible");
      refs.liElements.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  }
}

refs.btnPreviuse.addEventListener("click", _.debounce(onPreviosClick, 300));
function onPreviosClick() {
  const currentVisible = document.querySelector(".visible");
  if (currentVisible) {
    currentVisible.classList.remove("visible");
    if (currentVisible.previousElementSibling) {
      currentVisible.previousElementSibling.classList.add("visible");
      currentVisible.classList.add("hidden");
    } else {
      refs.list.lastElementChild.classList.add("visible");
      refs.liElements.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  }
}

const mouse = document.querySelector("#box");

window.addEventListener("mousemove", _.debounce(onMoveMouse, 100));

function onMoveMouse(event) {
  const top = event.clientY;
  const left = event.clientX;
  mouse.style.top = `${top}px`;
  mouse.style.left = `${left}px`;
}
