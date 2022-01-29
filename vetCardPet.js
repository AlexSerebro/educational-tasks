// Создать функцию generatePetCard,
// которая принимает 3 аргумента: kind, year, name
// Функция должна возвращать разметку HTML:
{
  /* <li class="petCard">
  <h2>Name Year</h2>
  <p>Животное  Kind - Year год рождения. Возраст животного - Years лет.</p>
</li> */
}
// высчитать возраст животного и если старше 4 лет добавляем "лет" иначе добавлеем "года"
// Создать новый нумерованный список с классом pets
// Создать 4 карточки для животных, используя функцию generatePetCard
// Поместить эти 4 карточки внутрь списка с классом pets

// Поместить список c классом pets на страницу DOM -  в DIV с классом container

// Добавить кнопку Удалить на каждую карточку животного

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки

// 2. Создать функцию удаления

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

const petsList = [
  { kind: "Dog", year: 2015, name: "lassie" },
  { kind: "Cat", year: 2016, name: "einstein" },
  { kind: "Hedgehog", year: 2019, name: "elizabeth" },
  { kind: "Hamster", year: 2020, name: "alcatraz" },
];

const divContainer = document.querySelector(".container");

function generatePetCard(kind, year, name) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return `
    <li class="petCard">
      <h2>${name.toUpperCase()} ${year}</h2>
      <p>Животное ${kind.toUpperCase()} - ${year} год рождения. Возраст животного - ${
    currentYear - year
  } ${currentYear - year > 4 ? "лет" : "года"}.</p>
  <button type="button" class="btn">click</button>
    </li >`;
}

const petsCardList = document.createElement("ol");

petsCardList.classList.add("pets");

const petHTML = petsList.reduce((acc, { kind, year, name }) => {
  acc += generatePetCard(kind, year, name);
  return acc;
}, "");

petsCardList.insertAdjacentHTML("beforeend", petHTML);

divContainer.insertAdjacentElement("beforeend", petsCardList);

const btn = document.querySelectorAll(".btn");

function onClickBtn(event) {
  const currentBtn = event.currentTarget;
  currentBtn.closest(".petCard").remove();
}

btn.forEach((button) => {
  button.addEventListener("click", onClickBtn);
});
