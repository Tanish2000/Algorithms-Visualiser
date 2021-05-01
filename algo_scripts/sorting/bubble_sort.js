const container = document.querySelector("#bars");


function remove_bars() {
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }
}

function ring_animation() {
  const ring = document.getElementById("circle");
  ring.style.display = "visible";
}

function generateBlocks(num = 15) {
  remove_bars();
  if (num && typeof num !== "number") {
    alert("First argument must be a typeof Number");
    return;
  }
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100);

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 4}px`;
    block.style.transform = `translateX(${i * 40}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }
}

function swap(el1, el2) {

  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 350);
    });
  });
}

async function bubbleSort(delay = 10) {

  if (delay && typeof delay !== "number") {
    alert("sort: First argument must be a typeof Number");
    return;
  }
  let blocks = document.querySelectorAll(".block");
  for (let i = 0; i < blocks.length - 1; i += 1) {
    for (let j = 0; j < blocks.length - i - 1; j += 1) {
      blocks[j].style.backgroundColor = "rgb(39,33,33)";
      blocks[j + 1].style.backgroundColor = "rgb(58,57,57)";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      blocks[j].style.backgroundColor = "white";
      blocks[j + 1].style.backgroundColor = "black";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "black";
  }
  blocks[0].style.backgroundColor = "black";
}

function setInfo_bbsort() {
  document.getElementById('algo_title').innerHTML = "Bubble Sort";
  document.getElementById('time_comp_value').innerHTML = "O(n^2)";
  document.getElementById('space_comp_value').innerHTML = "O(1)";
}

function bubble_sort() {
  setInfo_bbsort();
  generateBlocks();
  bubbleSort();
  imageControl_bubbleSort();
}

// -------------Image Control in Dropdown List--------

function imageControl_bubbleSort() {
  var language = document.getElementById('languages');
  document.getElementById('src_code_img').src="img/bubble_sort/c++.png";
  language.addEventListener("change", () => {

    if (language.options[language.selectedIndex].text == "Java") {
      console.log('Click occured on Java');
      document.getElementById('src_code_img').src = "img/bubble_sort/java.png";
    }
    if (language.options[language.selectedIndex].text == "C++") {
      console.log('Click occured on C++');
      document.getElementById('src_code_img').src = "img/bubble_sort/c++.png";
    }
    if (language.options[language.selectedIndex].text == "Python") {
      console.log('Click occured on Python');
      document.getElementById('src_code_img').src = "img/bubble_sort/python.png";
    }

  })
}
