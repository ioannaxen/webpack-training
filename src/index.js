import helloWorld from './hello-world'
import makeButton from './button'
import makeImage from './image'
import imageUrl from './webpack-logo.jpeg'
const getMakeBox = () => import('./box.ts')

const button = makeButton('Click here')
document.body.appendChild(button)
button.addEventListener('click', () => {
  getMakeBox().then(({ makeBox }) => {
    const box = makeBox('Hi there')
    document.body.appendChild(box)
  })
})

const image = makeImage(imageUrl)
document.body.appendChild(image)

console.log(helloWorld())
