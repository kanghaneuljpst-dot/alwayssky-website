const inlineForm = document.querySelector("#inline-form");
const frameContainer = document.querySelector("#form-frame");
const formLink = document.querySelector(".form-link");

inlineForm.addEventListener("toggle", () => {
  if (!inlineForm.open || frameContainer.firstElementChild) return;

  const url = new URL(formLink.href);
  url.searchParams.set("embedded", "true");

  const frame = document.createElement("iframe");
  frame.title = "AlwaysSky カフェ車サポート参加申込みフォーム";
  frame.src = url.href;
  frameContainer.append(frame);
});

inlineForm.hidden = false;
