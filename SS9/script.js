function regis(){
    var val_firstname = document.getElementById('first-name').value;
    var val_sur_name = document.getElementById('sur-name').value;
    if (val_sur_name==''){
        alert("vui long nhaap ho")
    }
    if (val_firstname==''&& val_firstname !=''){
        alert("dang ky thanh cong")
    }
}
