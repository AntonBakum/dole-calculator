const newPage = document.getElementById("new")
const checkPage = document.getElementById("check")


const queryParams = new URL(location).searchParams;
const name = queryParams.get("name")
const totalSum = +queryParams.get("totalSum")
const tip = +queryParams.get("tip")


const isNewPage = !name;

if (isNewPage) newPage.classList.remove("hidden")
else checkPage.classList.remove("hidden")

const newForm = document.getElementById("newForm")

newForm.addEventListener('submit', e => {
  e.preventDefault()
  const data = new FormData(e.target)
  const entries = Object.fromEntries(data.entries())
  const url = new URL(location);
  url.searchParams.append("name", entries['name'])
  url.searchParams.append("totalSum", entries['totalSum'])
  url.searchParams.append("tip", entries['tip'])
  location.href = url;
})

const checkForm = document.getElementById("checkForm")

checkForm.addEventListener("submit", e => {
  e.preventDefault()
  const data = new FormData(e.target)
  const entries = Object.values(Object.fromEntries(data.entries()))

  const amount = entries.reduce((acc, e) => acc + +eval(e), 0)
  const ratio = amount / totalSum
  const tipPart = tip * ratio
  const resultAmount = Math.ceil(tipPart + amount);

  document.getElementById("result").innerText = resultAmount

})
let items = 0;
const addNewItem = document.getElementById("addNewItem")

addNewItem.addEventListener("click", e => {
  const item = document.createElement("input")
  item.classList = "h-8 border-black border-2 border-solid rounded px-4 text-md"
  item.name = ++items
  checkForm.insertBefore(item, addNewItem)
  item.focus();
})