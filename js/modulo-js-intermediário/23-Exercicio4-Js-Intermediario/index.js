let inputzada = document.getElementById('tag-input')

inputzada.addEventListener('input', function(){
    if(inputzada.value === ""){
        inputzada.classList.remove("border-green");
    }else{
        inputzada.classList.add("border-green");
    }
});
