import { useEffect, useState } from 'react';

const SYDNEY_TZ = 'Australia/Sydney';
const AUCKLAND_TZ = 'Pacific/Auckland';
const BUSINESS_START = 8;
const BUSINESS_END = 20;

function formatTime(timeZone: string): string {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

function isBusinessHours(timeZone: string): boolean {
  const hour = Number(
    new Intl.DateTimeFormat('en-AU', {
      timeZone,
      hour: 'numeric',
      hour12: false,
    }).format(new Date())
  );
  return hour >= BUSINESS_START && hour < BUSINESS_END;
}

export default function PacificClock() {
  const [sydney, setSydney] = useState('');
  const [auckland, setAuckland] = useState('');
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const tick = () => {
      setSydney(formatTime(SYDNEY_TZ));
      setAuckland(formatTime(AUCKLAND_TZ));
      setOnline(isBusinessHours(SYDNEY_TZ) || isBusinessHours(AUCKLAND_TZ));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="hidden xl:flex items-center gap-3 text-xs text-[var(--text-muted)] border-r border-[var(--text-muted)]/20 pr-4 mr-1"
      role="status"
      aria-label={`Pacific time. Sydney ${sydney}, Auckland ${auckland}. ${online ? 'We are online' : 'Outside business hours'}`}
    >
      <div className="text-right leading-tight">
        <div>
          <span className="font-semibold text-[var(--text-primary)]">SYD</span> {sydney}
        </div>
        <div>
          <span className="font-semibold text-[var(--text-primary)]">AKL</span> {auckland}
        </div>
      </div>
      <span
        className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium ${
          online ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400' : 'bg-gray-500/10 text-[var(--text-muted)]'
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${online ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}
          aria-hidden="true"
        />
        {online ? "We're online" : 'Outside hours'}
      </span>
    </div>
  );
}
