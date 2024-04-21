import React, { useRef, useState } from 'react'
import './card.css';
import Text from './component/text/Text.jsx';
import { TiArrowForward } from "react-icons/ti";
import { IoArrowForwardOutline } from "react-icons/io5";
import song from '../assets/birth.mp3'
const Card = () => {
    const pageRef=useRef({
        first:null,second:null,third:null
    });

    const [page1,setPage1]=useState(1);
    const [page2,setPage2]=useState(1);
    const [page3,setPage3]=useState(1);
    const [page4,setPage4]=useState(1);
    const [page5,setPage5]=useState(1);
   useState(()=>{
    console.log(pageRef);
   },[])
  return (
    <div className="birthdayCard" >
       <audio  style={{display:"none"}} src={song} id='song' autoPlay loop></audio>
<div  style={{zIndex:3000}} className={page1?"cardFront":"cardFront page1"} >
  {/* <div className="front-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">to you!</h3>  
  </div> */}
  <div className="wrap-deco">
<div className="decorations"></div>
<div className="decorationsTwo"></div>
  </div> 
    <div className="wrap-decoTwo">
<div className="decorations"></div>
<div className="decorationsThree"></div>
  </div>


  <Text/>


  <TiArrowForward className='icon'  onClick={()=>{setPage1(prev=>!prev);document.getElementById("song").play()}}/>
</div>
  
  <div style={{zIndex:2000}} className={page2?"cardInside  ":"cardInside page2"} >
     <div className="inside-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">to you!</h3>  
  </div>
    <div className="wishes">
    <p className='respect'>Dear Friend,</p>
    <p className='content'>तुम्हारी राह का हर पत्थर फूल बन जाए,
खुशियों के बादल झूम के बरस जाए,
जो मांगा है तुमने रब से वो तुमको मिल जाए,
जन्मदिन की शुभकामनाएं</p>
    <p className="name content">तुम्हारा मित्र</p>
    <p className="name">Manish Maurya</p>

    </div>
    
    <TiArrowForward className='icon' style={{transform:"rotatey(180deg)",left:"10px"}} onClick={()=>setPage1(prev=>!prev)}/>
    
  <TiArrowForward className='icon'  onClick={()=>setPage2(prev=>!prev)}/>
  </div>

  <div  style={{zIndex:1000}} className={page3?"cardInside":"cardInside page3"}>

   
    
<div className="wishes">
    <p className='respect'>Dear Friend,</p>
    <p className='content'>तमाम उम्र तुम्हे ज़िन्दगी का प्यार मिले,
खुदा करे ये ख़ुशी तुमको बार बार मिले,
तुम्हे जन्मदिन की ढेर सारी शुभकामनाएं।</p>
    <p className="name">तुम्हारा मित्र</p>
    <p className="name">Raushan Singh</p>

  
    </div>
    <TiArrowForward className='icon' style={{transform:"rotatey(180deg)",left:"10px"}} onClick={()=>setPage2(prev=>!prev)}/>
    <TiArrowForward className='icon'  onClick={()=>setPage3(prev=>!prev)}/>
  </div>

  <div style={{zIndex:900}}  className={page4?"cardInside":"cardInside page4"} >
   
    <div className="wishes">
    
    <p className='respect'>Dear Friend,</p>

   <p className='content'> फूलों ने अमृत का जाम भेजा है,
सूरज ने गगन से सलाम भेजा है,
मुबारक हो आपको नया जन्मदिन,
तहे-दिल से हमने ये पैगाम भेजा है!!</p>

<p className="name">तुम्हारा मित्र</p>
    <p className="name">Lucky Pandey</p>
    
    </div>
   
    <TiArrowForward className='icon'  style={{transform:"rotatey(180deg)",left:"10px"}}  onClick={()=>setPage3(prev=>!prev)}/>

    <TiArrowForward className='icon'  onClick={()=>setPage4(prev=>!prev)}/>
  </div>

  <div  style={{zIndex:800}} className={page5?"cardInside":"cardInside page4"}  >
   
   <div className="wishes">
   
   <p className='respect'>Dear Friend,</p>

  <p className='content'> चेहरा आपका खिला रहे गुलाब की तरह,
नाम आपका रोशन रहे आफताब की तरह,
ग़म में भी आप हँसते रहे फूलों की तरह,
अगर हम इस दुनिया में न रहें आज की तरह,
तो भी अपना जन्मदिन मनाते रहना इसी तरह।!</p>

<p className="name">तुम्हारा मित्र</p>
   <p className="name">Rohit Chauhan</p>
   
   </div>
   <TiArrowForward className='icon'  style={{transform:"rotatey(180deg)",left:"10px"}}  onClick={()=>setPage4(prev=>!prev)}/>

<TiArrowForward className='icon'  onClick={()=>setPage5(prev=>!prev)}/>
 </div>

 <div  style={{zIndex:700}} className="cardInside " >
   
   <div className="wishes">
   
   <p className='respect'>Dear Friend,</p>

  <p className='content'> तुम्हारी इस अदा पे क्या जवाब दूँ,
अपने यार को क्या तोहफा दूँ!
कोई अच्छा सा फूल होता तो मंगवाता माली से,
जो खुद गुलाब है उसको क्या गुलाब दूँ!!
जन्मदिन मुबारक हो</p>

<p className="name">तुम्हारा मित्र</p>
   <p className="name">Vivek Kumar</p>
   
   </div>
   <TiArrowForward className='icon'  onClick={()=>setPage5(prev=>!prev)}/>

 </div>
</div>
  )
}

export default Card