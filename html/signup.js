function Check(){
    let theinput = document.getElementById("dob");
    let dob = theinput.value;
    theinput = document.getElementById("email");
    let e = theinput.value;
    theinput = document.getElementById("name");
    let n = theinput.value;
    theinput = document.getElementById("password");
    let p = theinput.value;
    
    //Fill-in check
    if ( p.length == 0 || dob.length == 0 || e.length == 0 || n.length == 0 ) {
        alert("Please fill out all information");
        return
    }
    
    //Time check
    let birthday = new Date(dob);
    let d = birthday.getTime();
    let day = Date.now();
    if (d > day - 410248800000) {
        alert("Invalid age");
        return
    }
    
    //Email check
    let first = e.indexOf("@");
    if (first == -1 || first == 0 || first == e.length - 1) {
        alert("Invalid email");
        return
    }
    let second = e.indexOf("@", first + 1);
    if (second > 0) {
        alert("Invalid email");
        return
    }
    
}