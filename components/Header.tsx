import Image from 'next/image';
import styles from '../styles/Header.module.css'



export default function Header() {
    
    return (
        <section className="content_pattern_texts">

        <div className="contain_texts">
          <div className="slogans">
            <h3 id="big_slogan" className='big_slogan'>Bigger.</h3>
            <h3 id="big_slogan" className='big_slogan'>Better.</h3>
            <h3 id="big_slogan" className='big_slogan'>Social.</h3>
            <h3 id="big_slogan" className='big_slogan'>Music.</h3>
            <h4 className='little_slogan'>L'app qui te redonne le pouvoir</h4>
          </div>
  
          <button className="btn_signup">
            <i className='bg bg_1'></i>
            <i className='bg bg_2'></i>
            <i className='bg bg_3'></i>
            <i className='bg bg_4'></i>
            <em>Créer mon compte</em>
          </button>
  
          <button className="btn_btm_arrow"><img src="imgs/arrow_1.png" /></button>
        </div>
  
        <div className="contain_pattern">
          <img src="imgs/pattern-rockets.png" alt="Pattern Rockets" />
        </div>
  
      </section>
           )
}
