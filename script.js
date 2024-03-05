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
const Minimize = document.querySelector(".fa-window-minimize");
Minimize.addEventListener("click", function() {
  ReportBody.innerHeight = 0;
});

if (window.innerWidth <= 380) {
  textarea.cols = 40;
  textarea.rows = 20;
}

const toggleFileDrops = () => {
  FileDrops.style.display =
    FileDrops.style.display === "none" ? "block" : "none";
};

FileBtn.addEventListener("click", toggleFileDrops);
FileBtn.addEventListener("dblclick", toggleFileDrops);
FileComot.addEventListener("click", toggleFileDrops);

let INPUT = textarea.value;
console.log(INPUT);

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
  Title.textContent = `${inputToTitle}`;
  saveContainer.style.display = "none";
});

const saveTitle = () => {
  var head = document.getElementById("head").value;
  localStorage.setItem("head", head);
};

const saveTextarea = () => {
  var textareaValue = document.getElementById("main-stuff").value;
  localStorage.setItem("textarea", textareaValue);
  FileDrops.style.display = "none";
};

const LoadTitle = () => {
  var head = localStorage.getItem("head");
  document.getElementById("title").value = head;
};

const LoadSavedTextArea = () => {
  var textareaValue = localStorage.getItem("textarea");
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
  LoadSavedTextArea();
  saveTitle();
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    saveTextarea();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "O") {
    event.preventDefault();
    fresher();
  }
});

function fresher() {
  textarea.value = "";
  FileDrops.style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === "S") {
    event.preventDefault(); // Prevent the default browser save behavior
    saveAs();
  }
});

function saveAs() {
  saveContainer.style.display = "block";
  FileDrops.style.display = "none";
}