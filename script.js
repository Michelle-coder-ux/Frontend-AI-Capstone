const uploadForm = document.querySelector("#upload-form");
const uploadZone = document.querySelector("#upload-zone");
const fileInput = document.querySelector("#file-input");
const selectedFile = document.querySelector("#selected-file");
const fileName = document.querySelector("#file-name");
const fileSize = document.querySelector("#file-size");
const formMessage = document.querySelector("#form-message");
const continueButton = document.querySelector("#continue-button");
const removeFileButton = document.querySelector("#remove-file");

const maxFileSize = 25 * 1024 * 1024;
const supportedExtensions = ["csv", "tsv", "txt"];

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function validateFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (!supportedExtensions.includes(extension)) return "That file type is not supported. Choose a CSV, TSV, or plain text file.";
  if (file.size > maxFileSize) return "That file is larger than 25 MB. Choose a smaller file to continue.";
  return "";
}

function clearSelection() {
  fileInput.value = "";
  selectedFile.hidden = true;
  continueButton.disabled = true;
  formMessage.textContent = "";
}

function showFile(file) {
  const error = validateFile(file);
  if (error) {
    clearSelection();
    formMessage.textContent = error;
    return;
  }

  fileName.textContent = file.name;
  fileSize.textContent = formatFileSize(file.size);
  selectedFile.hidden = false;
  continueButton.disabled = false;
  formMessage.textContent = "";
}

fileInput.addEventListener("change", () => {
  if (fileInput.files[0]) showFile(fileInput.files[0]);
});

uploadZone.addEventListener("click", (event) => {
  if (event.target !== fileInput) fileInput.click();
});
uploadZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fileInput.click();
  }
});

["dragenter", "dragover"].forEach((eventName) => {
  uploadZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  uploadZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadZone.classList.remove("is-dragging");
  });
});

uploadZone.addEventListener("drop", (event) => {
  const [file] = event.dataTransfer.files;
  if (file) showFile(file);
});

removeFileButton.addEventListener("click", clearSelection);

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Your file is ready for review.";
  formMessage.style.color = "var(--green)";
});