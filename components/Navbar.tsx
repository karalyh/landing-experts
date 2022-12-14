import Head from 'next/head'
import Image from 'next/image';

export default function NavBar() {
    
    return (
        <div className=''>
            <Head>
                <title>Space music</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            


           <div className="content_head">
      <div className="container_logos">
        <img className="logo" src="imgs/spacemusic_logo-1.png" alt="Space Music Logo" />
        <img className="logo" src="imgs/spacemusic_logo-2.png" alt="Space Music Logo" />
        <img className="logo" src="imgs/spacemusic_logo-3.png" alt="Space Music Logo" />
        <img className="logo" src="imgs/spacemusic_logo-4.png" alt="Space Music Logo" />
      </div>

      <section className="content_sign_lng">
        <div className="contain_lng">
          <select className="select_lng" name="select_lng">
            <option value="Français">Français</option>
            <option value="Anglais">Anglais</option>
          </select>
        </div>
        <div className="contain_sign">
          <a href="#">Sign Up</a>
          <div className="separate"></div>
          <a href="#">Sign In</a>
        </div>
      </section>
    </div>
        </div>
    )
}