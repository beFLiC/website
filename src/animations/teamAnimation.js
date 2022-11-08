import {gsap} from 'gsap';
function teamAnimation(){
  let headEmail = document.querySelector('#handlesHeads .email'),
headLinkedin = document.querySelector('#handlesHeads .linkedin'),
headInstagram = document.querySelector('#handlesHeads .instagram'),
DesignationHeads = document.querySelector('#designationHeads'),
namehead = document.querySelector('#nameHeads')

let headEmail2 = document.querySelector('#handlesHeads2 .email'),
headLinkedin2 = document.querySelector('#handlesHeads2 .linkedin'),
headInstagram2 = document.querySelector('#handlesHeads2 .instagram'),
DesignationHeads2 = document.querySelector('#designationHeads2'),
namehead2 = document.querySelector('#nameHeads2')
;

let ExecEmail = document.querySelector('#handlesExecutives .email'),
ExecLinkedIn = document.querySelector('#handlesExecutives .linkedin'),
ExecInstagram = document.querySelector('#handlesExecutives .instagram'),
DesignationExec = document.querySelector('#designationExecutives'),
nameexec = document.querySelector('#nameExecutives')
;

let dataExec = [
  {
    img:'./1.jpg',
    designation : "President",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Operations Executive",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Marketing Executive",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  }
];

let dataHeads = [
  {
    img:'./1.jpg',
    designation : "Head of Operations",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Tech Head",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Marketing",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  },
  {
    img:'./1.jpg',
    designation : "Head of Operations",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Head of Operations",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Operations",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  },
  {
    img:'./1.jpg',
    designation : "Head of Operations",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Head of Operations",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Operations",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Operations",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  }
];

let slider1 = document.getElementById('slider1');   //slider in executives
let slider2 = document.getElementById('slider2');   //slider1 in heads
let slider22 = document.getElementById('slider22');  //slider2 in heads
let sliderrect = slider1.getBoundingClientRect();

document.querySelectorAll('.gradient-hover').forEach( element =>{
  element.addEventListener('mousemove', (e)=>{
    var rect = element.getBoundingClientRect();
    const angleDeg = Math.round(Math.atan2(e.clientY -(rect.right-rect.left)/2 , e.clientX - (rect.bottom - rect.top)/2) * 180 / Math.PI) + 250;

    element.style.setProperty('background', `linear-gradient(${angleDeg}deg, #262262 6.24%, #52af5d 91.17%, #48af55 91.17%)`);
  })
})
document.querySelectorAll('.gradient-hover-text').forEach( element =>{
  element.addEventListener('mousemove', (e)=>{
    let rect = element.getBoundingClientRect();
    const angleDeg = Math.round(Math.atan2(e.clientY -(rect.right-rect.left)/2 , e.clientX - (rect.bottom - rect.top)/2) * 180 / Math.PI + 180    );

    element.style.setProperty('background', `linear-gradient(${angleDeg}deg, #262262 6.24%, #52af5d 91.17%, #48af55 91.17%)`);
    element.style.setProperty('-webkit-background-clip', `text`);
    element.style.setProperty('-webkit-text-fill-color', `transparent`);
    element.style.setProperty('background-clip', `text`);
  })
})


td(slider1,dataExec,'10');
let dataHeads2 = dataHeads.splice(0,5);
td(slider2,dataHeads,'11',false);
td(slider22,dataHeads2,'11',true);


function td(slider,data,f,two=false){
  let twovar = two ? 2 : 1;
  let bg = document.createElement('div');
  let fg = document.createElement('div');
  bg.classList.add('appendclass');
  fg.classList.add('appendclass');

  slider.appendChild(bg);
  slider.appendChild(fg);

  let len = data.length,
    current = len-1,
    closedWidth = Math.floor(sliderrect.width/(data.length + 2))
  ;

  for (var i=0; i<len; i++){
    var bgImg = document.createElement('div'); 
    bg.appendChild(bgImg);

    gsap.set(bgImg, {
      attr:{id:'bgImg'+twovar+f+i, class:'bgImg'+twovar+f},
      width:'100%',
      height:'100%',
      backgroundImage:'url('+data[i].img+')',
      backgroundSize:'cover',
      backgroundPosition:'center'
    })

    var b = document.createElement('div');
    fg.appendChild(b); 

    let inhtmlclass='';
    if(f > 10){
      if(two){ inhtmlclass = 'headdesg2' }
      else { inhtmlclass = 'headdesg' }
    }else{
      inhtmlclass='execdesg';
    }
    gsap.fromTo(b, {
      attr:{id:'b'+twovar+f+i, class:'box'+twovar+f},
      innerHTML:`<sub class=${inhtmlclass}>${data[i].designation}</sub>`,
      width:'100%',
      height:'100%',
      borderLeft:(i>0)?'solid 4px #1e1e1e':'',
      backgroundColor:'rgba(250,250,250,0)',
      left:i*closedWidth,
      transformOrigin:'100% 100%',
      // transform : 'translate(0%,0%)',
      // x:'100%'
    },{
      duration:i*0.15,
      x:0,
      ease:'expo.inOut'
    })  


    // if(f>10){   // if f>10 then it is for heads
    //   if(two){
    //     headEmail2.href = "mailto:"+data[len-1].Handles.Email;
    //     headLinkedin2.href = data[len-1].Handles.LinkedIn;
    //     headInstagram2.href = data[len-1].Handles.Instagram;

    //     namehead2.innerHTML = data[len-1].name;
    //     DesignationHeads2.innerHTML = data[len-1].designation;

    //     // allheaddesg2[len-1].classList.add('active');
    //   } else {
    //     headEmail.href = "mailto:"+data[len-1].Handles.Email;
    //     headLinkedin.href = data[len-1].Handles.LinkedIn;
    //     headInstagram.href = data[len-1].Handles.Instagram;

    //     namehead.innerHTML = data[len-1].name;
    //     DesignationHeads.innerHTML = data[len-1].designation;
    //   }
    // } else {

    //   ExecEmail.href = "mailto:"+data[len-1].Handles.Email;
    //   ExecLinkedIn.href = data[len-1].Handles.LinkedIn;
    //   ExecInstagram.href = data[len-1].Handles.Instagram;
    //   nameexec.innerHTML = data[len-1].name;
    //   DesignationExec.innerHTML = data[len-1].designation;
    // }

    
    b.onmouseenter = b.onclick = (e)=>{    
      if (Number(e.currentTarget.id.substr(4))===current) return;
    
      var staggerOrder = !!(current < Number(e.currentTarget.id.substr(4)));
      current = Number(e.currentTarget.id.substr(4));

      gsap.to('.box'+twovar+f, {
        duration:0.5,
        ease:'elastic.out(0.3)',
        left:(i)=>(i<=current)? i*closedWidth: ((f<=10)? slider1.offsetWidth:slider2.offsetWidth) -((len-i)*closedWidth),
        x:0,
        stagger: staggerOrder? 0.05:-0.05
      })
      
      bg.appendChild( document.getElementById('bgImg'+twovar+f+current) )
      gsap.fromTo('#bgImg'+twovar+f+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})

      if(f>10){
        if(two){
          headEmail2.href = "mailto:"+data[current].Handles.Email;
          headLinkedin2.href = data[current].Handles.LinkedIn;
          headInstagram2.href = data[current].Handles.Instagram;
          namehead2.innerHTML = data[current].name;
          DesignationHeads2.innerHTML = data[current].designation;
  
          let allheaddesg2 = document.querySelectorAll('.headdesg2');
          allheaddesg2.forEach((e)=>{ e.classList.remove('active') });
          allheaddesg2[current].classList.add('active');
        } else {
          headEmail.href = "mailto:"+data[current].Handles.Email;
          headLinkedin.href = data[current].Handles.LinkedIn;
          headInstagram.href = data[current].Handles.Instagram;
          namehead.innerHTML = data[current].name;
          DesignationHeads.innerHTML = data[current].designation;
  
          let allheaddesg = document.querySelectorAll('.headdesg');
          allheaddesg.forEach((e)=>{ e.classList.remove('active') });
          allheaddesg[current].classList.add('active');
        }

      } else {
        ExecEmail.href = "mailto:"+data[current].Handles.Email;
        ExecLinkedIn.href = data[current].Handles.LinkedIn;
        ExecInstagram.href = data[current].Handles.Instagram;
        nameexec.innerHTML = data[current].name;
        DesignationExec.innerHTML = data[current].designation;

        let allexecdesg = document.querySelectorAll('.execdesg');
        allexecdesg.forEach((e)=>{ e.classList.remove('active') });
        allexecdesg[current].classList.add('active');      
      }
    }

  }

  document.getElementById('b'+twovar+f+1).click();
  document.getElementById('b'+twovar+f+0).click();
}

}

export default teamAnimation;