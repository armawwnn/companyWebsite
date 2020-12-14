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
// conditional
$(function(){
    $("body").on("click", "#maritalStatus [id]", function(){
        var $this = $(this),
            thisSelectedValue = $this.val();
        if (thisSelectedValue == 'Married' ){
            $("#ageP,#marridP").show();
        }else{
            $("#ageP,#marridP").hide();
        }
    });
});
// conditional