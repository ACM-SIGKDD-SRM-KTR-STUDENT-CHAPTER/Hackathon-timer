import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

// Calculate the target date in IST
const targetDateIST = new Date('2024-06-25T15:35:00+05:30');

// Convert IST to Washington, D.C. local time (EDT, UTC-4:00)
const offsetISTtoEDT = (5 * 60 + 30) - 4 * 60; // Difference in minutes
const targetDateWashingtonDC = new Date(targetDateIST.getTime() - offsetISTtoEDT * 60 * 1000);

const timerLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          <CountdownTimer targetDate={targetDateWashingtonDC.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}
