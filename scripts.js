var ValidateEmail= function(inputText){
    var mailformat = /\S+@\S+\.\S+/;
    if(mailformat.test(inputText.value))
    {
    document.getElementById('input').style.boxShadow = "0 0 8px rgb(91, 202, 236)";
    document.getElementById('input').style.display='none';
    document.getElementById('main-header').style.display='none';
    document.getElementById('main-text').style.display='none';
    document.getElementById('card-button').style.display='none';
    document.getElementById('error-msg').style.display ='none';
    document.getElementById('new-card').style.display = 'block';
    return true;
    }
    else
    {
    inputText.style.border = "1px solid red";
    document.getElementById('input').style.boxShadow = '0 0 8px rgb(224,55,55)';
    document.getElementById('error-msg').innerHTML = "A valid email address is required";
    return false;
    }   

}
  