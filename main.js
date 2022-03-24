const myitems = document.querySelector(".item");
const addItem = document.querySelector("#adding");

addItem.addEventListener("click", function (e) {
  const input = document.querySelector("#productName");
  const li = document.createElement("li");
  const del = document.createElement("button");
  const spantext = document.createElement("span");
  const trash = document.querySelector(".tarshbin");

  if (input.value !== "") {
    del.innerText = "delete";
    del.classList.add("delete");
    // del.style.padding = "5px 10px";
    // del.style.margin = "10px";

    myitems.append(li);
    li.append(spantext);
    spantext.textContent = input.value;
    li.append(del);

    del.addEventListener("click", function (e) {
      myitems.removeChild(li);
      // trash.style.backgroundColor = "red";
      trash.append(li);
      console.log(li);
    });
  }
  input.value = "";
});
