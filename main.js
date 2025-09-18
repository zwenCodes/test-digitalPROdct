var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var side = document.getElementById("aside");
const rndom = Math.floor(Math.random() * 1000) + 500;





btn1.style.fontSize ="20px"
  if (btn1.style.fontSize === "20px") {
    btn1.addEventListener("click", function () {
      side.style.display = "block"
      btn1.style.fontSize = "1px"
      btn1.style.animation = "none"
      setTimeout(function (){
        btn2.style.animation = "btn2 1s ease"
        console.log(rndom)
        clearTimeout(rndom)
      }, rndom)
      if (true) {
        btn2.addEventListener("click", function() {
         side.style.display = "none"
         btn1.style.fontSize = "21px"
         btn2.style.animation = "none"
         btn1.style.animation = ".5s btn1 ease"
         console.log(rndom)
         clearTimeout(rndom)
        })
      } 
    })
  }
  // } else {
  //   btn2.addEventListener("click", function () {
  //     side.style.display = "none"
  //     btn1.style.fontSize="20px"
  //   })
  // } 


//NOTE: If Btn 1 have opacity 1 make aside is none




// btn1.addEventListener("click", function() {
//     side.style.display = "block"
//     btn1.style.opacity = "0"
    
    
//     function timeAnim() {
//         btn2.style.animation = "btn2 1s ease-in"
//       }
    
//     //"tag Header > i onclik, tag Aside displayed block"
  
// })

// btn2.addEventListener("click", function() {
//   aside.style.display = "none"
//   btn1.style.opacity = "1"
//   console.log(event.taget)
  
//   clearTimeout(timeAnim)
  
//   //"tag Aside > div > i onlcik, tag Aside displayed none"
// })