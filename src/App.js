import axios from 'axios'

function App(){


  axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=360788d4c20fe976cbac02d7e51a38fc`).then((res)=>{
    console.log(res)
    
  }).catch((err)=>{
    console.error(err)
  })
  return(

    <div>
     


    </div>
  )
}

export default App;