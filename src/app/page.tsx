import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss';
import moment from 'moment-timezone';
import Image from 'next/image';
const target = moment.tz('2024-10-29 12:45:00', 'Asia/Kolkata');
import HackathonImage from "../images/banner.png"
const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function Home() {
  return (
    <main className="container">
      <section>
        <div style={{marginBottom:"25px"}}>
        <Image src={HackathonImage} alt="Hackathon" className='bannerimg' layout="responsive"/></div>
        <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}