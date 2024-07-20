const btn1=document.getElementById("btn-c")

const notesContainer = document.querySelector('.notes')

const br=document.createElement("br")

JSON.parse(localStorage.getItem("notes") || "[]").forEach((n)=>{
    create(n.id,n.content);
})
function create(id,content){
    const note=document.createElement("input")
    note.type="text";
    note.className="form-control";
    note.addEventListener("dblclick",()=>{
        const war=confirm("delete this");
        if(war){

        }
    })
    note.addEventListener("input",()=>{
        const notes=JSON.parse(localStorage.getItem("notes") || "[]")
        const ele= notes.filter((n)=>n.id==id)[0];
        ele.content=note.value;
        console.log(ele);
        localStorage.setItem("notes",JSON.stringify(notes));
    })
    notesContainer.appendChild(note);
    notesContainer.appendChild(br);

}
var a=0;
function print(){
    const notes=JSON.parse(localStorage.getItem("notes") || "[]");
    const obj={
        id:a,
        content:""
    }
    a=a+1;
    create(obj.id,obj.content);
    notes.push(obj);
    localStorage.setItem("notes",JSON.stringify(notes));

}
btn1.addEventListener("click",print)

