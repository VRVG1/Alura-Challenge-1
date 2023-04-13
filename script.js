const copyWord = () => {
  let text = document.getElementById("encripterText")
  navigator.clipboard.writeText(text.value)
  alert(text.value + " copiado en el portapapeles")
}

const changeNotFound = (newWord) => {
  const parentDiv = document.getElementById("aside-Encripter")

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild)
  }

  const textarea = document.createElement("textarea")
  textarea.setAttribute("readonly", true)
  textarea.setAttribute("id", "encripterText")
  textarea.value = newWord

  const button = document.createElement("button")
  button.setAttribute("id", "desencriptar")
  button.addEventListener("click", copyWord)
  button.textContent = "Copiar"

  parentDiv.appendChild(textarea)
  parentDiv.appendChild(button)
}

const encriptText = (text) => {
  let newWord = ""
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "e":
        newWord += "enter"
        break
      case "i":
        newWord += "imes"
        break
      case "a":
        newWord += "ai"
        break
      case "o":
        newWord += "ober"
        break
      case "u":
        newWord += "ufat"
        break
      default:
        newWord += text[i]
    }
  }
  return newWord
}

const desencripter = () => {
  let textArea = document.getElementById("textArea-input")
  let text = textArea.value

  text = text.replaceAll("enter", "e")
  text = text.replaceAll("imes", "i")
  text = text.replaceAll("ai", "a")
  text = text.replaceAll("ober", "o")
  text = text.replaceAll("ufat", "u")
  changeNotFound(text)
}

function getText() {
  let textArea = document.getElementById("textArea-input")
  let text = textArea.value

  let newWord = encriptText(text)
  changeNotFound(newWord)
}
