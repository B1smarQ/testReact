
import './App.css'
import Header from './components/Header.jsx'
import {why} from './why.js'
import Footer from './components/Footer.jsx'
function WhyKustikPidor(props){
  return(
    <ul>
      <li>
        <h2>
            {props.title}
        </h2>
        <p>
          {props.name}
        </p>
      </li>
    </ul>
  )
}
function App() {

  return (
    <div>
      <Header />
      <WhyKustikPidor title = {why[0].title} name = {why[0].name}/>
      <WhyKustikPidor title = {why[1].title} name = {why[1].name}/>
      <WhyKustikPidor title = {why[2].title} name = {why[2].name}/>
      <WhyKustikPidor title = {why[3].title} name = {why[3].name}/>
      <WhyKustikPidor title = {why[4].title} name = {why[4].name}/> 
    </div>
  )
}

export default App
