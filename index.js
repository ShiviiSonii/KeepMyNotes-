const inputBtn=document.getElementById("input-btn");
const deleteBtn=document.getElementById("delete-btn");
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");
let text=[];

//Get leads from local Storcage 
const textfromLocalStorage=JSON.parse(localStorage.getItem("text"));
if(textfromLocalStorage){
    text=textfromLocalStorage;
    render(text);
}

function render(data){
    let listItem="";
    for(let i=0;i<data.length;i++){
    //Making the links clickable
    //  listItem += "<li><a target='_blank' href='"+ myLeads[i]+ "'>" + myLeads[i] + "</li>";//Rendering the myLeads in li elemnet using innerHTML
    listItem += `
        <li>
            <a target='_blank' href='${data[i]}'>
            ${data[i]}
            </a>/
        </li>`;
    
    console.log(listItem);
        //create element
        // let li=document.createElement("li")
        //set text content
        // li.textContent=myLeads[i];
        // append to ul
        // ulEl.append(li);
}
//Rendering the list items using ulEl.innerHTML
ulEl.innerHTML=listItem;
}
//Listening the double clicks when we click
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    text=[];
    render(text);
})


inputBtn.addEventListener("click",function(){
    console.log("Button clicked from EventListener");
     text.push(inputEl.value);
//     //Clearing the input field
      inputEl.value=" "
//     //Save the myLeads array to Localstorage
     localStorage.setItem("text",JSON.stringify(text));
//     //JSOn stringify
    render(text);
//     console.log(localStorage.getItem("myLeads"));
});
