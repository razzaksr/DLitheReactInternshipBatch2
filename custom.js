const valid=()=>{
    var alpha=document.forms['contact'].user.value;
    var beta=document.forms['contact'].mobile.value;
    var cosmo=document.forms['contact'].message.value;

    var onlyNum=/^[0-9]+$/
    var onlyAlpha=/^[a-zA-Z]/

    if(onlyNum.test(beta)&&onlyAlpha.test(alpha))
    {
        alert("Validation success");
    }
    else{
        alert("Validation failed");
    }
}