function getContainer() {
  return document.querySelector(".notify-container");
}

function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" data-index="${index}">
      ${msg}
    </div>
  `;
}

function notifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 20px; right: 20px; z-index: 199; width: 300px; text-align: center;"></div>
  `;
}

function createNotifyContainer() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML("afterbegin", template);
}

function getAlertIndex() {
  return document.querySelectorAll(".notify-container .alert").length;
}

export function notify({
  msg = "Error. You must enter the correct data",
  className = "alert-info",
  timeout = 3000,
} = {}) {
  if (!getContainer()) {
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container = getContainer();

  container.insertAdjacentHTML("beforeend", template);

  setTimeout(() => closeNotify(index), timeout);
}

export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector(".notify-container .alert");
  } else {
    alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
  }

  if (!alert) {
    console.warn("Alert not fount");
    return;
  }

  const container = getContainer();
  container.removeChild(alert);
}
