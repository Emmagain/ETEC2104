function check(){
    let input = document.getElementById("dob");
    let dob = input.value;
    input = document.getElementById("email");
    let e = input.value;
    input = document.getElementById("name");
    let n = input.value;
    input = document.getElementById("password");
    let p = input.value;

    //New Alert System
    let tmp = document.createElement("div");
    tmp.classList.add("alert");
    
    //Fill-in check
    if ( p.length == 0 || dob.length == 0 || e.length == 0 || n.length == 0 ) {
        //alert("You have not filled out all boxes");
        document.body.appendChild(tmp);
        tmp.appendChild(document.createTextNode("You have not filled out all necessary information."));
        return
    }
    
    //Time check
    let birthday = new Date(dob);
    let d = birthday.getTime();
    let day = Date.now();
    if (d > day - 410248800000) {
        //alert("Invalid age");
        document.body.appendChild(tmp);
        tmp.appendChild(document.createTextNode("Invalid age."));
        return
    }
    
    //Email check
    let first = e.indexOf("@");
    if (first == -1 || first == 0 || first == e.length - 1) {
       // alert("Invalid email");
       document.body.appendChild(tmp);
        tmp.appendChild(document.createTextNode("Invalid email."));
        return
    }
    let second = e.indexOf("@", first + 1);
    if (second > 0) {
        //alert("Invalid email");
        document.body.appendChild(tmp);
        tmp.appendChild(document.createTextNode("Invalid email."));
        return
    }
        
}