import axios from 'axios'
import {useState} from 'react'

function App(){

const [content,setContent] = useState({
  id: '', 
  name:'',
  coord: '', 
  country:'',
  population:'',
  timezone:'',
   sunrise:'',
  sunset:''
})
function handleSubmit(){
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=360788d4c20fe976cbac02d7e51a38fc`).then((res)=>{
    console.log(res)
    setContent({
      id: res.data.city.id,
    name: res.data.city.name,
      coord:res.data.city.coord,
      country:res.data.city.country,
      population:res.data.city.population,
      timezone:res.data.city.timezone,
      sunrise:res.data.city.sunrise,
      sunset:res.data.city.sunset
    })
    
  }).catch((err)=>{
    console.error(err)
  })

}
  
  return(

    <div>
     
   <h1>{content.id}</h1>
   <h1>{content.coord.lat}</h1>
   <h1>{content.coord.lon}</h1>
   <h1>{content.country}</h1>
   <h1>{content.name}</h1>
   <h1>{content.population}</h1>
   <h1>{content.sunrise}</h1>
   <h1>{content.sunset}</h1>
   <h1>{content.timezone}</h1>
   <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default App;