import helloWorld from './hello-world'
import makeButton from './button'
import makeImage from './image'
import imageUrl from './webpack-logo.jpeg'

const button = makeButton('Click here')
document.body.appendChild(button)

const image = makeImage(imageUrl)
document.body.appendChild(image)

console.log(helloWorld())
