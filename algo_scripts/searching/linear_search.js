
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


function display_search_option() {
  document.querySelector(".extra").style.opacity = "1";
  document.querySelector('#search_num').focus();
}

function search() {
  var search_num = document.getElementById('search_num').value;
  linearSearch(search_num);
}

function check(ele) {
  return new Promise(resolve => {
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        ele.style.backgrooundColor = 'blue';
        resolve();
      }, 350);
    });
  })

}

async function linearSearch(num) {
  let blocks = document.querySelectorAll(".block");
  for(let i = 0; i<blocks.length-1; i++)
  {
    await check(ele);
  }
}


function setInfo_lsearch() {
  document.getElementById('algo_title').innerHTML = "Linear Search";
  document.getElementById('time_comp_value').innerHTML = "O(n)";
  document.getElementById('space_comp_value').innerHTML = "O(1)";
}

function linear_search() {
  setInfo_lsearch();
  generateBlocks();
  display_search_option();
  imageControl_linearSearch();
}

// -------------Image Control in Dropdown List--------

function imageControl_linearSearch() {
  var language = document.getElementById('languages');
  document.getElementById('src_code_img').src = "img/linear_search/c++.png";
  language.addEventListener("change", () => {

    if (language.options[language.selectedIndex].text == "Java") {
      console.log('Click occured on Java');
      document.getElementById('src_code_img').src = "img/linear_search/java.png";
    }
    if (language.options[language.selectedIndex].text == "C++") {
      console.log('Click occured on C++');
      document.getElementById('src_code_img').src = "img/linear_search/c++.png";
    }
    if (language.options[language.selectedIndex].text == "Python") {
      console.log('Click occured on Python');
      document.getElementById('src_code_img').src = "img/linear_search/python.png";
    }

  })
}