import './button.css'

const makeButton = buttonName => {
  const button = document.createElement('button')
  button.innerText = buttonName
  return button
}

export default makeButton
