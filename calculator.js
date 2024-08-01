function calculate(){
    var x=Math.floor(Math.random()*100)+1;
    document.getElementsByTagName("h1")[0].innerHTML= " <i class='fas fa-heart'></i> Your Love Percent Is "+x+"% <i class='fas fa-heart'></i>";
    if(x>=80){
        document.getElementById("result").innerHTML="<i class='fas fa-heart'></i> CONGRATULATION, YOU ARE MADE FOR EACH OTHER !! <i class='fas fa-heart'></i>";
    }
    else{
        document.getElementById("result").innerHTML="ALL THE BEST FOR YOUR RELATIONSHIP !!";
    }
    document.getElementById("result").style.fontSize="xx-large";


}