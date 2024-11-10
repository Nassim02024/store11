window.onload = function () {
  if (localStorage.getItem('imges') === null) {
let imgs = document.querySelector('.imgs')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let boton = document.querySelector('.boton')
let contener = document.querySelector('.contener')
let all = document.querySelector('.all')
let footer = document.querySelector('.footer')

// window.body.style.
boton.onclick = function () {
img1.style.transform =' translateX(200%)'
img2.style.transform =' translateX(-84%)'
boton.onclick = function () {
  img2.style.transform =' translateX(90%)'
  img3.style.transform =' translateX(-180%)'
  boton.onclick = function () {
   
      imgs.style.display = 'none'
      contener.style. height = "100vh"
      all.style. height = "100vh"
      all.style.width = '90%'
      footer.style.display = 'block'
      boton.style.display = 'none'
  }
}
 }



    setTimeout(() => {
      contener.style.opacity = '1'
       document.body.style.height= '0vh'  
       document.body.style.zIndex= '0'  
    }, 1000);

    let Myimg = [
      'http://127.0.0.1:5000/static/backg.jpg',
      'http://127.0.0.1:5000/static/wel_LE_auto_x2.jpg',
      'http://127.0.0.1:5000/static/icon%20com.jpg'
    ]
    localStorage.setItem ('imges' , JSON.stringify(Myimg) )
      
    }else{
      document.body.style.height= '0vh'  
     document.body.style.zIndex= '0'  
     document.querySelector('.imgs').style.display= 'none'
     document.querySelector('.imgs').style.display= 'none'
      let contener = document.querySelector('.contener')
      contener.style. height = "100vh"
      contener.style.opacity = '1'
     let all = document.querySelector('.all')
     all.style. height = "100vh"
     all.style.width = '90%'
     document.querySelector('.footer').style.display= 'block'
    let boton = document.querySelector('.boton')
     boton.style.display= 'none'
     
    }
}

