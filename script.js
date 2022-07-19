'use strict';

const infoArray = [{
    "id": "d41c3eca-9eeb-4a9c-a397-826fdc08eb55",
    "descricao": "Teste A"
  },
  {
    "id": "d28d5a45-5702-47b3-92a4-e61f25ccc256",
    "descricao": "Teste B"
  },
  {
    "id": "4a3d5109-4849-462a-b96a-e3d99f28b45b",
    "descricao": "Teste X"
  },
  {
    "id": "9236159a-b07a-4c1f-b8f6-2582b2cd4ed9",
    "descricao": "Teste C"
  }
];

const sectionsArray = document.querySelectorAll("section");

const pArray = document.querySelectorAll("p");

const dataButton = document.querySelector("button");

const containerDiv = document.getElementById("container");

const xButton = document.getElementById("x-button");

const txtArea = document.getElementsByTagName("textarea")[0];

const copyButton = document.getElementById("copy");

function displayArray() {

  const idsArray = [
    [],
    []
  ];

  const firstSectionP = sectionsArray[0].getElementsByTagName("p");
  const secondSectionP = sectionsArray[1].getElementsByTagName("p");

  for (const p of firstSectionP) {
    idsArray[0].push(`"${p.id}"`)
  }

  for (const p of secondSectionP) {
    idsArray[1].push(`"${p.id}"`)
  }

  txtArea.innerText = `[[${idsArray[0]}],[${idsArray[1]}]]`;

}


for (let index = 0; index <= 3; index++) {
  pArray[index].id = infoArray[index].id;
  pArray[index].innerText = infoArray[index].descricao;
};

sectionsArray.forEach(section => {

  section.addEventListener("dragover", (evt) => {
    evt.preventDefault();
  })

  section.addEventListener("dragstart", (evt) => {

    evt.dataTransfer.setData("text/plain", evt.target.id);

  })


  section.addEventListener("drop", (evt) => {

    const dragTarget = evt.dataTransfer.getData("text/plain");

    const targetElement = document.getElementById(dragTarget);

    const fragment = document.createDocumentFragment();

    targetElement.remove();

    fragment.appendChild(targetElement);

    section.appendChild(fragment);

  })

})

dataButton.addEventListener("click", () => {
  containerDiv.style.display = "flex";

  displayArray();

})

xButton.addEventListener("click", () => {
  containerDiv.style.display = "none";
})

copyButton.addEventListener("click", () => {
  txtArea.select();
  navigator.clipboard.writeText(txtArea.innerHTML);
})