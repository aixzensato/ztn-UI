interface ProgressBarProps {
  progress: number;
}

function getBarColor(progress: number) {
  if (progress >= 100) return 'bg-emerald-500';
  if (progress >= 90) return 'bg-green-500';
  if (progress >= 75) return 'bg-teal-500';
  if (progress >= 60) return 'bg-cyan-500';
  if (progress >= 45) return 'bg-sky-500';
  if (progress >= 30) return 'bg-yellow-500';
  if (progress >= 15) return 'bg-orange-500';

  return 'bg-rose-500';
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className='flex w-full min-w-0 items-center gap-1 sm:gap-2'>
      <div className='h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/10 sm:h-1.5'>
        <div
          className={`h-full rounded-full transition-all duration-300 ${getBarColor(progress)}`}
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
    </div>
  );
}
