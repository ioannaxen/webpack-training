import helloWorld from './hello-world'
import makeButton from './button'
import makeImage from './image'
import imageUrl from './webpack-logo.jpeg'
const getMakeBox = () =>
  import(
    /* webpackChunkName: "box" */
    './box.ts'
  )

let setButtonStyle

if (process.env.NODE_END === 'development') {
  setButtonStyle = color =>
    import(
      /* webpackChunkName: "buttonStyle" */
      /* webpackMode: "lazy-once" */
      `./button/themes/${color}`
    )
} else {
  setButtonStyle = color =>
    import(
      /* webpackChunkName: "buttonStyle" */
      `./button/themes/${color}`
    )
}

const button = makeButton('Click here')
setButtonStyle('red').then(({ default: style }) => {
  console.log(style)
  button.style = style
})
document.body.appendChild(button)

button.addEventListener('click', () => {
  getMakeBox().then(({ makeBox }) => {
    const box = makeBox('Hi there')
    document.body.appendChild(box)
  })

  setButtonStyle('violet').then(({ default: style }) => {
    button.style = style
  })
})

const image = makeImage(imageUrl)
document.body.appendChild(image)

console.log(helloWorld())
