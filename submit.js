const questionEl = document.getElementById('question')
    const answerEl = document.getElementById('answer')
    const formEl = document.getElementById('form')
    const submitEl = document.getElementById('submitBtn')

    
    submitEl.addEventListener('click' , handleSubmit)
    
    function handleSubmit(event){
        
        event.preventDefault()
        const questionValue = questionEl.value
        const answerValue = answerEl.value
        
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
            body: JSON.stringify({questionTitle : questionValue, 
                answer : answerValue
            })
    
        }
        fetch('http://localhost:4000/' , options)
    }