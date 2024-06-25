import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

const target = new Date('2024-06-25T15:25:00'); // Set the target date to June 25, 2024, at 3:10 PM

const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}
