import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss';
import moment from 'moment-timezone';

// add 3 sec to be accurate
const target = moment.tz('2024-06-26 08:00:03', 'Asia/Kolkata');

const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function Home() {
  return (
    <main className="container">
      <section>
          <h1>HACKATHON TIMER</h1>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}