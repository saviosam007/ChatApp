window.onbeforeunload=function(event){
console.log("reached here!!!")
    var val=document.getElementById("buttonstyle");
    console.log(val);
    val.click();
    };


console.log("This works")