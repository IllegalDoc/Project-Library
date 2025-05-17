MyLibrary = [];
function Book(id, title, nbrOfpages, rating, isRead) {
  this.id = id;
  this.title = title;
  this.nbrOfpages = nbrOfpages;
  this.rating = rating;
  this.isRead = Boolean(isRead);
}
function AddBookToLibrary(
  id = crypto.randomUUID(),
  title,
  nbrOfpages,
  rating,
  isRead
) {
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
  const read = document.createElement("p");
  card.appendChild(title);
  card.appendChild(nbrOfpages);
  card.appendChild(rating);
  card.appendChild(read);
  card.classList.add("card");

  const name = document.querySelector("input#title").value;
  const nop = document.querySelector("input#nop").value;
  const Rating = document.querySelector("input#rating").value;
  const Read = document.querySelector('input[name="read"]:checked').value;
  title.innerHTML = "<b>Title :</b> " + name;
  nbrOfpages.innerHTML = "<b>Number Of Pages : </b>" + nop;
  rating.innerHTML = "<b>Rating :</b>" + Rating + "⭐";
  if (Read === "yes") {
    read.innerHTML = "<b>Read :</b>" + "  ✅ ";
  } else read.innerHTML = "<b>Read :</b>" + "❌";
  cards.appendChild(card);
  AddBookToLibrary(undefined, name, nop, Rating, Read);
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
  } else {
    addBook();
    console.log(MyLibrary);
  }
});
