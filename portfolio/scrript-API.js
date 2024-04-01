// ---------- portfolio project start ------------
function loadProject(){
    fetch('../Data/project.json')
    .then(res => res.json())
    .then(data => displayProject(data))
}
loadProject();

function displayProject(data) {
    const allProject = document.getElementById('project')

    for(const protfolio of data){
        const div = document.createElement('div');
        div.innerHTML = `
      
        <div class="shadow pb-4 mb-4">
        <div class="item" style="height: 320px; overflow: hidden;">
        <img src="${protfolio.images}" class="img-fluid mb-4 w-full  rounded" alt="" >
        <span><a href="${protfolio.images}" target="_blank"><i class="fa-solid fa-plus"></i></a></span>
      </div>
      <a href="${protfolio.live_site}" target="_blank" class="btn btn-primary text-white mt-3 py-2">< GO Live site /></a>
       </div>
    
    
    

  
        `;
        allProject.appendChild(div);
    }
}
// ---------- portfolio project End ------------
//===============================================
// ---------- contact from start -----------------
const form = document.querySelector('form');
const firstName = document.querySelector('#fistName');
const emailAddress = document.querySelector('#exampleInputEmail1');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

form.addEventListener('submit', formHandler);


function formHandler(e){
    e.preventDefault();

    const formInfo = {
        FistName: firstName.value,
        Email: emailAddress.value,
        Subject: subject.value,
        Message: message.value
    }

    console.log(formInfo);

    firstName.value = '',
    emailAddress.value = '',
    subject.value = '',
    message.value = ''
}
// ---------- contact from end ------------