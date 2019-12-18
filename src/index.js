import './css/style.styl'
import Classname from './js/Classname.js'

const classname = new Classname()

if(module.hot)
{
    module.hot.accept()
    module.hot.dispose(() =>
    {
        console.log('dispose')
    })
}