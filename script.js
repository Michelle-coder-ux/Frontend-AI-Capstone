export const MAX_FILE_SIZE = 25 * 1024 * 1024;
const supportedExtensions = new Set(["csv", "tsv", "txt"]);

export function validateFile(file) {
  if (!file) return "Please select a file first";

  const extension = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "";
  if (!supportedExtensions.has(extension)) return "Only CSV, TSV, or TXT files are supported";
  if (file.size > MAX_FILE_SIZE) return "File is too large (max 25MB)";
  return "";
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

function clearSelection(fileInput, selectedFile, continueButton, formMessage) {
  fileInput.value = "";
  selectedFile.hidden = true;
  continueButton.disabled = false;
  formMessage.textContent = "";
}

function setupUploadForm() {
  const uploadForm = document.querySelector("#upload-form");
  const uploadZone = document.querySelector("#upload-zone");
  const fileInput = document.querySelector("#file-input");
  const selectedFile = document.querySelector("#selected-file");
  const fileName = document.querySelector("#file-name");
  const fileSize = document.querySelector("#file-size");
  const formMessage = document.querySelector("#form-message");
  const continueButton = document.querySelector("#continue-button");
  const removeFileButton = document.querySelector("#remove-file");

  function showFile(file) {
    const error = validateFile(file);
    formMessage.textContent = error;
    formMessage.classList.toggle("is-success", !error);
    if (error) {
      clearSelection(fileInput, selectedFile, continueButton, formMessage);
      formMessage.textContent = error;
      return;
    }

    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    selectedFile.hidden = false;
    continueButton.disabled = false;
    formMessage.textContent = `${file.name} (${formatFileSize(file.size)}) ready to clean`;
  }

  fileInput.addEventListener("change", () => showFile(fileInput.files[0]));
  uploadZone.addEventListener("click", (event) => {
    if (event.target !== fileInput) fileInput.click();
  });
  uploadZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fileInput.click();
    }
  });
  ["dragenter", "dragover"].forEach((eventName) => uploadZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadZone.classList.add("is-dragging");
  }));
  ["dragleave", "drop"].forEach((eventName) => uploadZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadZone.classList.remove("is-dragging");
  }));
  uploadZone.addEventListener("drop", (event) => showFile(event.dataTransfer.files[0]));
  removeFileButton.addEventListener("click", () => clearSelection(fileInput, selectedFile, continueButton, formMessage));
  uploadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const file = fileInput.files[0];
    const error = validateFile(file);
    formMessage.textContent = error || `${file.name} (${formatFileSize(file.size)}) ready to clean`;
    formMessage.classList.toggle("is-success", !error);
  });
}

if (typeof document !== "undefined") setupUploadForm();