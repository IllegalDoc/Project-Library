let MyLibrary = [];
function Book(id, title, nbrOfpages, rating, isRead) {
  this.id = id;
  this.title = title;
  this.nbrOfpages = nbrOfpages;
  this.rating = rating;
  this.isRead = Boolean(isRead);
}
function AddBookToLibrary(id, title, nbrOfpages, rating, isRead) {
  let isReadi = true;
  if (isRead === "no") {
    isReadi = false;
  }
  bk1 = new Book(id, title, nbrOfpages, rating, isReadi);
  MyLibrary.push(bk1);
}

function addBook() {
  const cards = document.querySelector("div.cards");
  const card = document.createElement("div");
  const title = document.createElement("p");
  const nbrOfpages = document.createElement("p");
  const rating = document.createElement("p");
  const readdiv = document.createElement("div");
  const read = document.createElement("div");
  const divbutton = document.createElement("div");
  const labelread = document.createElement("label");
  const inputlabel = document.createElement("input");
  inputlabel.setAttribute("type", "checkbox");
  const spanlabel = document.createElement("span");
  spanlabel.classList.add("slider");
  spanlabel.classList.add("round");
  spanlabel.textContent = "Read :";
  labelread.appendChild(spanlabel);
  labelread.appendChild(inputlabel);

  read.appendChild(labelread);

  const rmbutton = document.createElement("button");
  divbutton.appendChild(rmbutton);
  rmbutton.textContent = "Remove Book";
  readdiv.appendChild(read);
  readdiv.appendChild(divbutton);
  readdiv.setAttribute("class", "double");
  card.appendChild(title);
  card.appendChild(nbrOfpages);
  card.appendChild(rating);
  card.appendChild(readdiv);
  card.classList.add("card");

  const name = document.querySelector("input#title").value;
  const nop = document.querySelector("input#nop").value;
  const Rating = document.querySelector("input#rating").value;
  const Read = document.querySelector('input[name="read"]:checked').value;
  title.innerHTML = "<b>Title :</b> " + name;
  nbrOfpages.innerHTML = "<b>Number Of Pages : </b>" + nop;
  rating.innerHTML = "<b>Rating :</b>" + Rating + "⭐";
  if (Read === "yes") {
    inputlabel.checked = true;
  } else {
    inputlabel.checked = false;
  }
  const id = crypto.randomUUID();
  card.setAttribute("data-id", id);
  cards.appendChild(card);
  console.log(inputlabel);
  eventlistenrRemoveandRate(rmbutton, inputlabel);
  AddBookToLibrary(id, name, nop, Rating, Read);
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
  } else {
    addBook();
    console.log(MyLibrary);
    document.querySelector("div.form").style.display = "none";
    document.querySelector("input#title").value = "";
    document.querySelector("input#nop").value = "";
    document.querySelector("input#rating").value = "";
    document.querySelector('input[name="read"]:checked').value = "";
  }
});

const plusbutton = document.querySelector("div.addnewbook");
plusbutton.addEventListener("click", (e) => {
  document.querySelector("div.form").style.display = "flex";
});

const divbutton = document.querySelectorAll("div.double div ");
console.log(divbutton);
divbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const index = MyLibrary.indexOf(Book.id);
    MyLibrary = MyLibrary.splice(index, 1);
    button.parentElement.parentElement.remove();
    console.log("nik");
  });
});
function eventlistenrRemoveandRate(rmbutton, inputlabel) {
  rmbutton.addEventListener("click", (e) => {
    let id =
      rmbutton.parentElement.parentElement.parentElement.getAttribute(
        "data-id"
      );
    deletebyId(MyLibrary, id);
    rmbutton.parentElement.parentElement.parentElement.remove();
    console.log("nik");
    console.log(MyLibrary);
  });

  inputlabel.addEventListener("change", (e) => {
    id =
      inputlabel.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "data-id"
      );
    console.log(id);
    replaceread(MyLibrary, id);
    console.log(MyLibrary);
  });
}

function deletebyId(array, id) {
  x = id;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === x) {
      array = array.splice(i, 1);
    }
  }
}
function replaceread(array, id) {
  x = id;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === x) {
      if (array[i].isRead) {
        array[i].isRead = false;
      } else array[i].isRead = true;
    }
  }
}
