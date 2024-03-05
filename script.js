let textarea = document.getElementById("main-stuff");
const FileBtn = document.getElementById("file");
const FileDrops = document.querySelector(".file-drop");
const FileComot = document.getElementById("exit-file");
const newBtn = document.getElementById("newBtn");
const saveClick = document.getElementById("saveClick");
const saveInput = document.getElementById("saveInput");
let Title = document.getElementById("title");
const saveContainer = document.querySelector(".saveDope");
const saveAFile = document.getElementById("saveBtn");
const SaveTOLocalStorage = document.getElementById("SaveTOLocalStorage");
const ShowCase = document.getElementById("ShowCase");
let greet = document.getElementById("greet");
const today = new Date();
const hourNow = today.getHours();
let greeting = "";

if (hourNow < 12) {
  greeting = "Good Morning";
} else if (hourNow < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

greet.innerHTML = greeting;

if (window.innerWidth <= 380) {
  textarea.cols = 40;
  textarea.rows = 20;
}

const toggleFileDrops = () => {
  FileDrops.style.display = FileDrops.style.display === "none" ? "block" : "none";
};

FileBtn.addEventListener("click", toggleFileDrops);
FileComot.addEventListener("click", toggleFileDrops);

newBtn.addEventListener("click", () => {
  textarea.value = "";
  FileDrops.style.display = "none";
});

saveClick.addEventListener("click", () => {
  saveContainer.style.display = "block";
  FileDrops.style.display = "none";
});

saveClick.addEventListener("dblclick", () => {
  saveContainer.style.display = "none";
});

saveAFile.addEventListener("click", () => {
  const inputToTitle = saveInput.value;
  Title.textContent = inputToTitle;
  saveContainer.style.display = "none";
});

const saveTitle = () => {
  const head = document.getElementById("head").value;
  localStorage.setItem("head", head);
};

const saveTextarea = () => {
  const textareaValue = document.getElementById("main-stuff").value;
  localStorage.setItem("textarea", textareaValue);
  FileDrops.style.display = "none";
};

const loadTitle = () => {
  const head = localStorage.getItem("head");
  document.getElementById("title").value = head;
};

const loadSavedTextArea = () => {
  const textareaValue = localStorage.getItem("textarea");
  document.getElementById("main-stuff").value = textareaValue;
  FileDrops.style.display = "none";
};

SaveTOLocalStorage.addEventListener("click", (event) => {
  event.preventDefault();
  saveTextarea();
  textarea.value = "";
  saveTitle();
});

ShowCase.addEventListener("click", (event) => {
  event.preventDefault();
  loadSavedTextArea();
  loadTitle();
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    saveTextarea();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "o") {
    event.preventDefault();
    fresher();
  }
});

function fresher() {
  textarea.value = "";
  FileDrops.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "S") {
    event.preventDefault();
    saveAs();
  }
});

function saveAs() {
  saveContainer.style.display = "block";
  FileDrops.style.display = "none";
}