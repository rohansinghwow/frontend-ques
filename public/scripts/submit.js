const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const formEl = document.getElementById('form');
const submitEl = document.getElementById('submitBtn');
const alertElFail = document.getElementById('alert-fail')
const alertElSuccess = document.getElementById('alert-success')

submitEl.addEventListener('click', handleSubmit);

alertElFail.classList.add('d-none')
alertElSuccess.classList.add('d-none')



function handleSubmit(event) {
  event.preventDefault();
  const questionValue = questionEl.value;
  const answerValue = answerEl.value;
  alertElFail.classList.add('d-none')
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      questionTitle: questionValue,
      answer: answerValue,
    }),
  };
  
    fetch('http://localhost:4000/', options)
    .then((response)=>{
      console.log(response.status)
      
      if(!response.ok){
        throw new Error('Server error try again !')
      }else if(response.status === 400){
        throw new Error('Please enter all fields dude !')
      }
      alertElSuccess.classList.remove('d-none')
      setInterval(()=>(
        alertElSuccess.classList.add('d-none')
       ) , 3000)

    })
    .catch((error)=>{
      console.log(error)
      console.log( error)
      const theErr = error
      alertElFail.classList.remove('d-none')

      alertElFail.textContent=theErr
    })
  
  
}
