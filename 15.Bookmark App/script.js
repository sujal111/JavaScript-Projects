let addBookmark = document.querySelector('#addBookmark');
let itemHolder = document.querySelector('#item-holder');
let modelContainer = document.querySelector('#modalContainer');
let closeModal = document.querySelector('.closeModal');
let modalForm = document.querySelector('#modalForm');
let websiteName = document.querySelector('#websiteName');
let websiteURL = document.querySelector('#websiteURL');
let bookmarkArray = [];


function showModal() {
  modelContainer.classList.add('showModal');
}


addBookmark.addEventListener('click', function () {
  showModal();
})

closeModal.addEventListener('click', function () {
  modelContainer.classList.remove('showModal');
})

window.addEventListener('click', function (e) {
  if (e.target.id === "modalContainer") {
    modelContainer.classList.remove('showModal');
  }
})

function validateFormField(name, url) {
  if (name === "" || url === "") {
    alert("Fill Both Fields");
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!url.match(regex)) {
    alert("Enter Valid URL");
    return false;
  }
  return true;
}

function deleteBookmark(url) {
  bookmarkArray.forEach((bkmark, i) => {
    if (bkmark.url === url) {
      bookmarkArray.splice(i, 1);
    }
  })
  localStorage.setItem('bookmark', JSON.stringify(bookmarkArray));
  fetchFromLocalStorage();
}

function buildDom() {
  itemHolder.innerHTML = "";
  bookmarkArray.forEach(bkmark => {
    let { name, url } = bkmark;
    itemHolder.innerHTML += `
    <div class="item">
      <div class="close" onclick = "deleteBookmark('${url}')"><i class="fa fa-trash"></i></div>
      <div class="name">
        <img src="https://s2.googleusercontent.com/s2/favicons?domain=${url}" alt="">
        <a href="${url}">${name}</a>
      </div>
    </div>
    `
  })
}

function fetchFromLocalStorage() {
  if (localStorage.getItem("bookmark")) {
    bookmarkArray = JSON.parse(localStorage.getItem('bookmark'));
  }
  else {
    bookmarkArray = [
      {
        name: 'Subhadip Chatterjee Vlogs',
        url: 'Youtube.com'
      }
    ]
  }
  localStorage.setItem('bookmark', JSON.stringify(bookmarkArray));
  buildDom();
}

modalForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let inp_websiteName = websiteName.value;
  let inp_websiteURL = websiteURL.value;

  if (!inp_websiteURL.includes("https://") && !inp_websiteURL.includes("http://")) {
    new_inp_websiteURL = `https://${inp_websiteURL}`;
  }
  console.log(new_inp_websiteURL);

  if (!validateFormField(inp_websiteName, new_inp_websiteURL)) {
    return false;
  }

  bookmarkObj = {
    name: inp_websiteName,
    url: inp_websiteURL
  }

  bookmarkArray.push(bookmarkObj);

  console.log(bookmarkArray)

  localStorage.setItem('bookmark', JSON.stringify(bookmarkArray));
  fetchFromLocalStorage();
  modalForm.reset();
})

fetchFromLocalStorage();
