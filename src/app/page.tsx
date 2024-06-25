import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss';
import moment from 'moment-timezone';

// Set the target date to June 25, 2024, at 3:15 PM in IST timezone
const target = moment.tz('2024-06-25 15:45:00', 'Asia/Kolkata');

const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function Home() {
  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          {/* Use target.toISOString() to pass the date in ISO format */}
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}