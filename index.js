var numberOfDrumButtons = document.querySelector(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                var audio = new Audio("");
                audio.play();
                break;
            
        }

    })
}