const URL = 'http://localhost:4000/questions'
    const loadingEl = document.getElementById('loading')
    const questionEl = document.getElementById('question-div')
   async function getData(){
            const res = await fetch(URL)
            const data = await res.json()
            console.log(data)
            loadingEl.style.display = 'none';
            data.map((item,index)=>{
                questionEl.innerHTML +=  `#${index} ${item.questionTitle}<br> ${item.answer} <hr>`
            })
             
    }

    getData()