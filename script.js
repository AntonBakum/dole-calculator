const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = Object.fromEntries(formData.entries());
  const { myPart, total, tip } = values;
  const toPay = +myPart + (+myPart / +total) * +tip;
  document.getElementById("result").innerHTML = `Плоти ${toPay.toFixed(2)}`;
});
