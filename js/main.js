function showMe() {
            document.getElementById("main").style.display = "block"
            document.getElementById("main").style.fontWeight = "bold"
            document.getElementById("main").style.position = "relative"
            document.getElementById("main").style.top = "200px"
            document.getElementById("show").style.backgroundColor="#667a8e"
        }
function showM() {
    document.getElementById("input1").style.display = "block"
    document.getElementById("main").style.display = "block"
    document.getElementById("input2").style.display = "none"
            document.getElementById("input1").style.position = "relative"
            document.getElementById("input1").style.top = "100px"
    document.getElementById("show1").style.backgroundColor = "#667a8e"
    // document.getElementById("show2").style.display = "inline"
        }
function showM2() {
    document.getElementById("input2").style.display = "block"
    document.getElementById("main").style.display = "block"
            document.getElementById("input1").style.display = "none"
            document.getElementById("input2").style.position = "relative"
            document.getElementById("input2").style.top = "100px"
            document.getElementById("show2").style.backgroundColor = "#667a8e"
        }
function check() {

    document.getElementById("check").style.backgroundColor = "#667a8e"
    document.getElementById("show1").style.backgroundColor ="#0053cb"
    document.getElementById("show2").style.backgroundColor ="#0053cb"
    document.getElementById("input1").style.display = "none"
    // var checkBox1 = document.getElementById("flexRadioDefault1");
    // var checkBox2 = document.getElementById("flexRadioDefault2");
    // if (checkBox1.checked == true){
    // text.style.display = "block";
    // } else {
    //     text.style.display = "none";
    // }
        }
function check2() {

    // document.getElementById("check2").style.backgroundColor = "#667a8e"
    document.getElementById("input2").style.display = "none"
    document.getElementById("show1").style.backgroundColor ="#0053cb"
    document.getElementById("show2").style.backgroundColor = "#0053cb"
    
        }
function submit1() {

    document.getElementById("submit1").style.backgroundColor = "#667a8e"
    document.getElementById("input1").style.display = "none"
    document.getElementById("show1").style.backgroundColor ="#0053cb"
    document.getElementById("show2").style.backgroundColor = "#0053cb"
    document.getElementById("frm1").submit();
        }
function submit2() {

    document.getElementById("submit2").style.backgroundColor = "#667a8e"
    document.getElementById("input2").style.display = "none"
     document.getElementById("show1").style.backgroundColor ="#0053cb"
    document.getElementById("show2").style.backgroundColor = "#0053cb"
    document.getElementById("frm1").submit();
        }


