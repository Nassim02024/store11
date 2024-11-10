
let disLeft = document.querySelector('.h2')
let disright = document.querySelector('.h1')
window.onload = function () {
    setTimeout(() => {
         disLeft.style. marginTop='19%'
        
    }, 500);
}
window.onscroll=function () {
    if (scrollY>20) {
        disLeft.style.marginTop='30px'
        disright.style.marginTop='-130px'
    }
    else{
        disLeft.style.marginTop='50px'
        disright.style.marginTop='7px'
    }
    if (scrollY >= 579.3333129882812) {
        let pigmenu = document.querySelector('.pig-menu')
        pigmenu.style.position ='fixed'
        pigmenu.style.top ='15vh'
    }else{
        let pigmenu = document.querySelector('.pig-menu')
        pigmenu.style.position ='relative'
        pigmenu.style.top ='6vh'
    }
    
}



let defaulte = 0


function pluse(element) {
    let parentBox = element.closest('.box')
    let count = parentBox.querySelector('.liplu')
    let litl = parentBox.querySelector('.litl')
    let totl =parentBox.querySelector('.totalvalue')
    let prix = parentBox.querySelector('.prix')
    let allprix = parseInt(prix.innerHTML)

    if (parseInt(count.innerHTML) >= 0) {
    count.innerHTML= parseInt(count.innerHTML)+1
    litl.style.display='inline'  
    
     let totalallprix = allprix *  parseInt(count.innerHTML)
    totl.innerHTML = totalallprix 

    }
}


function litle(element) {
    let parentBox = element.closest('.box')
    let litl = parentBox.querySelector('.litl')
    let count = parentBox.querySelector('.liplu')
    let totl =parentBox.querySelector('.totalvalue')
    let prix = parentBox.querySelector('.prix')
    let allprix = parseInt(prix.innerHTML)

    
    if (parseInt(count.innerHTML) > 0) {
       count.innerHTML= parseInt(count.innerHTML)-1 

       let totalallprix = allprix * parseInt(count.innerHTML)
       totl.innerHTML = totalallprix
       totalallprix.innerHTML = totl.innerHTML 
    
    }else{
    litl.style.display='none'
     }
}
 
   function add(index) {
    let parentmenu = index.closest(".box")
    let totalvalue = parseInt(parentmenu.querySelector(".totalvalue").innerHTML)
    let nam = parentmenu.querySelector('.nam').innerHTML
    let brand = parentmenu.querySelector('.brand').innerHTML
    let size = parentmenu.querySelector('.size').innerHTML
    let liplu = parentmenu.querySelector('.liplu').innerHTML
    let mine = document.querySelector('.mine')
    let html = ""
    if (mine) {
        html = `
                    <div class="box-mine">
                       
                       <div class="line2"><span class="line1"> ${totalvalue}</span>  ${nam} ${brand} ${size} ${liplu}x </div>
                       <div class="line3"> <span><img class="delet" onclick="delet(this)" src="/static//delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""></span></div> 
                    </div>
        `
        
    }
    mine.innerHTML += html


    let totals = document.querySelector('.totals')
    
     
    
    let defaulte = parseInt(totals.innerHTML);
    let newTotal= defaulte + totalvalue
    totals.innerHTML = newTotal 


    // let liplu = parentmenu.querySelector('.liplu')
    // let ordOrd = document.querySelector('.ord-ord')

    // let html_fin = ''
    //     html_fin= `
    //          <div class="fin-info">
    //              (${liplu.innerHTML}x ${nam} ${brand} ${size} ${totalvalue})
    //          </div>    
    //     `
        
    // ordOrd.innerHTML += html_fin


    
    
    conf()
   }


   function delet(element) {

    let parentDelet = element.closest(".box-mine")
    let totals = document.querySelector('.totals')
    let line1 = parentDelet.querySelector('.line1')
    parentDelet.remove()
      
    let fin =  parseInt(totals.innerHTML) -  parseInt(line1.innerHTML)
    totals.innerHTML = fin





    conf()  
    
   }

 function conf() {
    let confirmt = document.querySelector('.confirm')
    let totals = document.querySelector('.totals')
     
    if (parseInt(totals.innerHTML) > 0) {
        confirmt.style.opacity='1'
        confirmt.style.display='flex'     
  
       
    } else {
        confirmt.style.opacity='0' 
        confirmt.style.display='none'
  
       
    }
    
 }



 let closeOrd = document.querySelector('.close-ord')
 let pigPige = document.querySelector('.pig-pige')
 let imgOrd = document.querySelector('.img-ord')
 let logo = document.querySelector('.logo-ord img')
 imgOrd.onclick = function () {
    if (imgOrd.src.includes("/static/open.png")) {
    //  pigPige.style.width = "25px"
    //  pigPige.style.height = "0"

    imgOrd.style.display='block'
    pigPige.style.width = "100%"
    pigPige.style.height = "90vh"
    pigPige.style.display = 'block'
    imgOrd.style.left = "10px"           
    pigPige.style.opacity = "1"
    imgOrd.src = '/static/closes.png'  
    logo.style.width = '300px'   
    } else {
        imgOrd.style.display='none'
        pigPige.style.width = "0"
        pigPige.style.height = "0" 
        imgOrd.src = "/static/open.png" 
        pigPige.style.opacity = "0"
          

    }
    const remov = document.querySelectorAll('.box-mine div:nth-child(3) span img')
    remov.forEach(img => {
        setTimeout(() => {
          img.style.display="block"  
        }, 1000);
       
    } )

 }


 let confirmation = document.querySelector('.confirm')
 confirmation.onclick = function () {


    // let mine = document.querySelector('.mine')
    let ordOrd = document.querySelector('.ord-ord')
     const remov = document.querySelectorAll('.box-mine div:nth-child(3) span img')
     remov.forEach(img => {
        img.style.display="none"
     } )
    let html_fin = ''
        // html_fin= `
        //      <div class="fin-info">
        //          ${mine.innerHTML}
        //      </div>    
        // `

        let nam = parentmenu.querySelector('.nam').innerHTML
        let brand = parentmenu.querySelector('.brand').innerHTML
        let size = parentmenu.querySelector('.size').innerHTML
        let liplu = parentmenu.querySelector('.liplu').innerHTML
        html_fin= `
             <div class="fin-info">
                 <p>${nam} ${brand} ${size} ${liplu}x</p> 
             </div>    
        `
        
    ordOrd.innerHTML = html_fin
   
    let defaulte = 0
    let totals = document.querySelector('.totals')
    let pr = document.querySelector('.pr')
    defaulte = totals.innerHTML
    pr.innerHTML = defaulte


    imgOrd.src = '/static/closes.png'
    imgOrd.style.display = "block" 
    imgOrd.style.left = "10px"           
    pigPige.style.width = "100%"
    pigPige.style.height = "90vh" 
    pigPige.style.opacity = "1" 

    let logo = document.querySelector('.logo-ord img')
    logo.style.width = '300px'  
 }





//Submit data ...

window.onload = document.querySelector('.now').addEventListener('click' , function () {
    let names = document.querySelector('.names').value
    let location = document.querySelector('.location').value
    let Phone = document.querySelector('.Phone').value
    let tex = document.querySelector('.tex').value
    let product = document.querySelector('.ord-ord').textContent
    let total = document.querySelector('.totals').textContent
    let latorot = document.querySelector('.latorot')
    let moto = document.querySelector('.moto')
    let ord = document.querySelector('.ord')
    let now = document.querySelector('.now')
    let card = document.querySelector('.e-card')
    let pigPige= document.querySelector('.pig-pige')

    now.style.backgroundColor = "black"
    latorot.style.opacity = "1"
    moto.style.opacity = "1"
    ord.style.display = "none"

    setTimeout(() => {
        
        moto.style.transform = 'translateX(207px)';
        setTimeout(() => {
        
            moto.style.opacity="0"
            
        }, 600);
        moto.style.transform = 'translateX(207px)';
        setTimeout(() => {
        
            moto.style.opacity="0"
            
        }, 600);

        moto.style.transform = 'translateX(207px)';
        setTimeout(() => {
        
            latorot.style.transform = 'translateX(-47px)';
            
        },0);
        
    }, 1400);
    setTimeout(() => {
        card.style.display='block'
        pigPige.style.backgroundColor = 'black'
    }, 3000);

    
    axios.post('/submit.data' , {
        input_names : names ,
        input_location : location ,
        input_phone : Phone ,
        input_tex : tex ,
        iner_text : product,
        iner_total : total
    })
    .then(function (res) {
       let respons = res.data
       console.log(respons);
       
    })
    
    
})