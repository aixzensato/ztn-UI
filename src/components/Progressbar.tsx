interface ProgressBarProps {
  progress: number;
}

function getBarColor(progress: number) {
  if (progress === 100) return 'bg-emerald-400';
  if (progress >= 50) return 'bg-indigo-400';
  if (progress >= 25) return 'bg-indigo-500/70';
  return 'bg-white/20';
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
