import './style.css'
import header from './headerModule/header.js'

console.log('teste from js')

const contentDiv = document.querySelector('.content')

header(contentDiv)

const h2El = document.createElement('h2')
h2El.innerHTML = 'Heading H2 from js file';

contentDiv.append(h2El)




