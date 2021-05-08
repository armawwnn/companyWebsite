// just number
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( (charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
}
// end function just number

// code-meli



function checkMelliCode(meli_code)
{

     meli_code = document.getElementById('codeMeli').value;
    console.log(meli_code);

if (meli_code.length == 10)
{
if(meli_code=='1111111111' || meli_code=='2222222222' || meli_code=='3333333333' || meli_code=='4444444444' || meli_code=='5555555555'  || meli_code=='6666666666'  || meli_code=='7777777777'  || meli_code=='8888888888'  || meli_code=='9999999999' )
{
alert(11);
}else{
c = parseInt(meli_code.charAt(9));
n = parseInt(meli_code.charAt(0))*10 + parseInt(meli_code.charAt(1))*9 + parseInt(meli_code.charAt(2))*8 + parseInt(meli_code.charAt(3))*7 + parseInt(meli_code.charAt(4))*6 + parseInt(meli_code.charAt(5))*5 + parseInt(meli_code.charAt(6))*4 + parseInt(meli_code.charAt(7))*3 + parseInt(meli_code.charAt(8))*2;
r = n - parseInt(n/11)*11;
if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r))
{

}
else
{
    document.getElementById("valcode-meli").innerHTML = "کد ملی نادرست میباشد";
}
}
}else{
    document.getElementById("valcode-meli").innerHTML = "کد ملی نادرست میباشد";
}
} 

// code meli

//desplay none


function displaynone() {
    let e = document.getElementById('maritalStatusS');
    console.log(e.value);
    if(e.value == 'Single'){
     document.getElementById("ageP").style.display = "none";
     document.getElementById("marridP").style.display = "none";
    }else{
        document.getElementById("ageP").style.display = "";
        document.getElementById("marridP").style.display = "";
    }

  }

//

