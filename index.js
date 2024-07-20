const btn1=document.getElementById("btn-c")

const notesContainer = document.querySelector('.notes')

const br=document.createElement("br")
function getitems(){
    return JSON.parse(localStorage.getItem("notes") || "[]")
}

function update(id,value){
    const notes=getitems();
    const note=notes.filter((n)=> n.id==id)[0]
    note.content=value;
    localStorage.setItem("notes",JSON.stringify(notes));
}

getitems().forEach((n)=>{
    create(n.id,n.content);
})
function create(id,content){
    const note=document.createElement("input")
    note.type="text";
    note.className="form-control";
    note.addEventListener("dblclick",()=>{
        const war=confirm("delete this");
    })
    note.addEventListener("input",()=>{
       update(id,note.value);
    })
    note.value=content;
    notesContainer.appendChild(note);
    notesContainer.appendChild(br);
}
var a=parseInt((JSON.parse(localStorage.getItem("note_id") || "0")));
function print(){
    const notes=JSON.parse(localStorage.getItem("notes") || "[]");
    const obj={
        id:a,
        content:""
    };
    a=a+1;
    localStorage.setItem("note_id",JSON.stringify(a));
    create(obj.id,obj.content);
    notes.push(obj);
    localStorage.setItem("notes",JSON.stringify(notes));
}
btn1.addEventListener("click",print)

