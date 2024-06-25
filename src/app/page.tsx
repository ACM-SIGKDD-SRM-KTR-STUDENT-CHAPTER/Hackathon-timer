import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

const targetDateIST = new Date('2024-06-25T15:27:00+05:30'); // Set the target date to June 25, 2024, at 3:10 PM IST

const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          <CountdownTimer targetDate={targetDateIST.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}
