
import React from "react";
import style from "./Footer.module.css";
import {InstagramOutlined, FacebookFilled , YoutubeFilled} from '@ant-design/icons'
function CustomFooter() {
  return <footer>
    <div className={style.waves}>
    <div className={style.wave} id={style.wave1}>
      </div>
      <div className={style.wave} id={style.wave2}>
      </div>
      <div className={style.wave} id={style.wave3}>
      </div>
      <div className={style.wave} id={style.wave4}>
      </div>
      </div>
    <ul className={style.socialIcon}>
      <li><a href="https://www.instagram.com/diamond_beauty__zone/">  <InstagramOutlined style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a href="https://www.facebook.com/Diamondbeautyzone-103333572419215"><FacebookFilled  style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a href="/"><YoutubeFilled   style={{ fontSize: '32px', color: '#fff' }}/></a></li>
    </ul>

    <ul className={style.menu}>
    <li><a href="/">Home</a></li>
    <li><a href="/">Why Us</a></li>  
    <li><a href="/">Service</a></li>  
    <li><a href="/">Pricing</a></li>  
    <li><a href="/">Contact</a></li>  
    </ul>
    <p>
    © 2023 Diamond Beauty Zone | All Rights Reserved
    </p>
  </footer>;
}

export default CustomFooter;
