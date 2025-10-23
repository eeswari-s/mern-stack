// step1: Seelect the container 
const container =document.getElementById('container');//<div id="container"></div>

//step2: Create a new element
const heading=document.createElement('h2');// <h2></h2> 

//step3: set  attributes
heading.setAttribute("id","mainHeading");//<h2 id="mainHeading"></h2>
heading.setAttribute("class","title");// <h2 id="mainHeading" class="title"></h2>

//step4: add text and inner html
heading.innerText="Welcome to DOM Manipulation";//<h2 id="mainHeading" class="title">Welcome to DOM Manipulation</h2>
 container.appendChild(heading);// append to container


 const info = document.createElement('p');//<p></p>
 info.innerHTML="we have ceated elements,set attributes, and added text using <b>javascript Dom</b>";//<p>we have ceated elements,set attributes, and added test using <b>javascript Dom</b></p>
container.appendChild(info);// append to container



//step5: Create a button
const btn = document.createElement('button');//<button></button>
btn.innerText="finish Dom";//<button>finish Dom</button>


//step6: Add event listener
btn.addEventListener("click",()=>{
    alert("👏We finished DOM successfully!");
});
//step 7: Append button to container
container.appendChild(btn);// append to container