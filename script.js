const clear = document.getElementById("clear");
const container = document.querySelector(".container");

  function grid() {
    const div = document.createElement("div");
    div.className = "grid";
    container.appendChild(div);

    div.addEventListener("click", () => {
      div.style.backgroundColor = "black";
    });
  }

  const divs = document.querySelectorAll(".grid");

  clear.addEventListener("click", () => {
    divs.forEach((div) => {
      div.style.backgroundColor = "white";
    });
  });





const rangeInput = document.querySelector(".range");

rangeInput.addEventListener("mouseup",()=>{
    for (i = 0; i < rangeInput.value; i++){
        for (j = 0; j< rangeInput.value; j++){
        grid();
        }
    };
});


