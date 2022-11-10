

var myDocument=document.querySelector('#demo');

document.addEventListener('mousemove', function (e) {
myDocument.style.left=e.clientX + 'px'; 

myDocument.style.top= e.clientY + 'px';


})

document.body.addEventListener('contextmenu',function(e){
    e.preventDefault();
})
// document.addEventListener("keydown",function(e){
   
//     if (e.key == "h"){
//         e.preventDefault();
//     }
// })