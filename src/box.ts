import './box.css'

export const makeBox = (boxName: string) => {
  const box = document.createElement('div')
  box.innerText = boxName
  return box
}
