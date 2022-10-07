import '../styles/globals.css'
import '../public/css/circles-animations.css'
import '../public/css/devices-view.css'
import  '@material-tailwind/react';
import type { AppProps } from 'next/app'
import LandingLayout from '../components/LandingLayout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  )
}

export default MyApp
