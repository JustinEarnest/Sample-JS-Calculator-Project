function btn_click(val){
    
    document.getElementById("inputbox").value+=val
    
}

function btn_clear(){
     document.getElementById("inputbox").value =''
}

function btn_Equal(){
    var values = document.getElementById('inputbox').value
    var result=eval(values)
    document.getElementById('inputbox').value=result

}