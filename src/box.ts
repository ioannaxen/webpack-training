import './box.css'

const makeBox = (boxName: string) => {
  const box = document.createElement('div')
  box.innerText = boxName
  return box
}

export default makeBox
