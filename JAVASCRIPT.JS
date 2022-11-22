const inputfields = document.querySelector('.INPUT-FIELDS')
const output = document.querySelector('.ouput')

let inputshow = true

async function textEditor(element){
    const newEditor = await classicEditor
    .create(element,{
    toolbar: ['heading', 'bold', 'italic', 'underline', 'bulletedlist', 'numberedlist', 'blockQuote'],
})
return newEditor
}
let workExpdetails;
textEditor(inputfields ["WORKEXP"]).then(nEditor=>{workExpdetails=nEditor})
let ACADENIC;
textEditor(inputfields ["ACADENIC"]).then(nEditor=>{ACADENIC=nEditor})

function toggle(){
    if (inputshow){
        inputfields.style.display = "none"
        inputfields = false
        output.innerHTML = `
        <div class="herro">
        <h1>${inputfields["name"].value}</h1>
        <h3>${inputfields["TITLE"].value}</h3>
        </div>
        <div class="main">
        <div>
        <h2>OBJECTIVE</h2>
        <p>${inputfields["OBJECTIVE"].value}</p>
        <h2>skills</h2>
        <p>${inputfields["skills"].value}</p>
        <h2>achievments</h2>
        <p>${inputfields["achievments"].value}</p>
        <h2>contact</h2>
        <p>${inputfields["contact"].value}</p>
        </div>
        <div>
        <h2>WORK EXP</h2>
        ${workExpdetails.getData()}
        <h2>ACADENIC</h2>
        ${ACADENIC.getData()}
        </div>
        </div>
   
      <div clss="btn">
      <button onclick="print()">print</button>
      </div>`
    }else{
        inputfields.style.display = "block"
        inputshow= true
        output.innerHTML= ""
    }
}