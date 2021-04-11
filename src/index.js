import helloWorld from './hello-world'
import makeButton from './button'
import makeImage from './image'
import imageUrl from './webpack-logo.jpeg'
import makeBox from './box.ts'

const button = makeButton('Click here')
document.body.appendChild(button)

const image = makeImage(imageUrl)
document.body.appendChild(image)

const box = makeBox('Hi there')
document.body.appendChild(box)

console.log(helloWorld())
