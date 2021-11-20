const toastNotification = () => {
  const btn = document.querySelector(".btn");
  const toasts = document.querySelector(".toasts");
  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
  ];
  const types = ["info", "success", "error"];

  const getMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const getType = () => {
    return types[Math.floor(Math.random() * types.length)];
  };

  const createNotification = (message = null, type = null) => {
    const notification = document.createElement("div");
    notification.classList.add("toast");
    notification.classList.add(type ? type : getType());
    notification.innerText = message ? type : getMessage();
    toasts.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  btn.addEventListener("click", () => createNotification());
};

toastNotification();
