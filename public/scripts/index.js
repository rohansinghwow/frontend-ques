const URL = 'http://localhost:4000/questions';
const loadingEl = document.getElementById('loading');
const questionEl = document.getElementById('question-div');

async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  loadingEl.style.display = 'none';
  data.map((item, index) => {
    questionEl.innerHTML += `
    
    <div class="col-12">
            <div class="card border-light shadow-sm rounded-3">
            
                <div class="card-body">
                    <h5 class="card-title">
                    ${item.questionTitle}
                    </h5>
                    <p class="card-text">${item.answer}</p>
                    <a href="#" class="btn btn-primary">Go to solution</a>
                </div>
            </div>
        </div>
       
    
    `;
  });
}

getData();
