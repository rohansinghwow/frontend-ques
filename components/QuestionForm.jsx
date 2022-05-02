import FormInput from "./FormInput"
import  {inputs}  from "../utils/formSystem"
import axios from 'axios'
import React from 'react'

export default function QuestionForm(){
    const [done,setDone] = React.useState(false)
    React.useEffect(()=>{
        setTimeout(()=>{
            setDone(false)
        }, 3000)
    }, [done])
    function postToDB(data){
        const mainData = data
        
        axios.post('http://localhost:3000/api/questions/', mainData)
          .then(function (response) {
            console.log(response);
            setDone(true)
          })
          .catch(function (error) {
            console.log(error.response);
            
          });
    }

    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData(e.target)
        const rawData = Object.fromEntries(data.entries())
        const formatDataForPostReq = {
            
                title : rawData.title,
                rating : rawData.rating,
                description : rawData.description,
                details: {
                        prompt : rawData.prompt,
                        example : rawData.example,
                        code : rawData.code
                    }
            
    }
    postToDB(formatDataForPostReq)
    
}
    
    
    return (
        <div className="relative shadow-md w-2/4 rounded-md mx-auto p-5">
        {done && <div className="done w-full h-full  bg-gray-600 text-white  absolute">
            <h1 className="text-center mt-60 bg-green-600 p-5 text-3xl">Question Posted ✅</h1>
        </div>}
        <form onSubmit={handleSubmit} className="flex flex-col w-">
            {inputs.map((item,index)=>(
                <FormInput key={index} name={item.name}  placeholder={item.placeholder} require={item.require} style={item.style}/>
            ))}
            <button type="submit" className="p-4 bg-gray-500 rounded-md">Submit</button>
        </form>
        </div>
    )
}