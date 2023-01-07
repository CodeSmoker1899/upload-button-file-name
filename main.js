var input_file = document.getElementById('inputFile');
var file = document.getElementById('fileName');

function getFileName(){
    input_file.click();
}


input_file.addEventListener('change', ()=>{
    if(input_file){
        file.innerHTML = input_file.value.match(/[\/\\]([\w\d\s\. \-\(\)]+)$/)[1];
    }else{
        file.innerHTML = "No File Choosen Yet..."
    }

})