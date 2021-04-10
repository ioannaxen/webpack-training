import helloWorld from './hello-world'
import makeButton from './button'

const button = makeButton('Click here')
document.body.appendChild(button)
console.log(helloWorld())
