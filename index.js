 let WelcomeEl=document.getElementById("welcome-el");
let myname="kaleab tenkirl";
let greating="hello people whats up";
/*WelcomeEl.innerText= myname+" "+greating;

let largestCounteres=["Tuvalu","india","use","indonesia","monaca"];
largestCounteres.pop();
largestCounteres.push("china");
largestCounteres.shift()
largestCounteres.unshift("pakistn");
console.log(largestCounteres)
let person={
     name:"kaleab",
     age:"25",
     country:"Ethoipia",
         logData:function logData1(params) {
         console.log(person.name+" is "+person.age+"years old and live in "+person.country)   
     }
}
person.logData();
*/
let myLeads=[]
  /* myLeads=JSON.parse(myLeads);
 myLeads.push("www.leaed2.com")
 console.log(typeof myLeads)
 myLeads=JSON.stringify(myLeads); 
 console.log(typeof myLeads)*/
let inputEl=document.getElementById("input-el"); 
let inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el")
let deletBtn=document.getElementById("delet-btn")
tabBtn=document.getElementById("save-el")
 const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads")); 
  if (leadsFromLocalStorage) {
     myLeads=leadsFromLocalStorage;
     render(myLeads)
  }
  /* const tabs=[{
    url:"https://www.linkedin.com/in/per-harald-borgen/"
  }]  */
  tabBtn.addEventListener("click",()=>{
    
    chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        render(myLeads)
    })   

  })
  deletBtn.addEventListener("dblclick", (e)=>{
    localStorage.clear()
    myLeads=[];
    render(myLeads)
  })

 inputBtn.addEventListener("click",function (params) {
      myLeads.push(inputEl.value)
      
      localStorage.setItem ("myLeads",JSON.stringify(myLeads))
     
      render(myLeads);
      console.log(localStorage.getItem("myLeads"))
  
      
      
})  
function render(Lead) {
     
 inputEl.value=" "
listItems=""
for (let i = 0; i< Lead.length; i++) {
     // ulEl.innerHTML+='<li>'+ myLeads[i]+'</li>'
      // const ultext=document.createElement("li")
       // ultext.textContent=myLeads[i]
        //ulEl.append(ultext)
        listItems+=
        `<li>
           <a href='#' target='_blank'>
               ${myLeads[i]}
           </a>
         </li>`
        
 }
 ulEl.innerHTML=listItems;  
}

  









let  boxEl=document.getElementById('box');
boxEl.addEventListener("click",function (params) {
    // boxEl.textContent="i want to open the box! " 
      boxEl.innerHTML='<button>'+'Buy'+'</botton>'
})
