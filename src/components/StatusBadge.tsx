import {
  AnonymousIcon,
  Cancel01Icon,
  Loading03Icon,
  StopWatchIcon,
  Link05Icon,
  Rocket01Icon,
  Tick02Icon,
  PlayIcon,
  PauseIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'queued':
        return { bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/30', icon: StopWatchIcon };
      case 'starting':
        return { bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/30', icon: Rocket01Icon };
      case 'downloading':
        return { bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30', icon: Loading03Icon };
      case 'merging':
        return { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30', icon: Link05Icon };
      case 'completed':
        return { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30', icon: Tick02Icon };
      case 'error':
        return { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30', icon: Cancel01Icon };
      case 'cancelled':
        return { bg: 'bg-slate-500/15', text: 'text-slate-400', border: 'border-slate-500/30', icon: PlayIcon };
      case 'cancelling':
        return { bg: 'bg-slate-500/15', text: 'text-slate-400', border: 'border-slate-500/30', icon: PauseIcon };
      default:
        return { bg: 'bg-white/8', text: 'text-white/40', border: 'border-white/10', icon: AnonymousIcon };
    }
  };

  const style = getStatusStyle(status);
  const isDownloading = status.toLowerCase() === 'downloading';

  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full border px-2 py-1 text-xs font-medium sm:gap-1 sm:px-3 sm:py-1.5 ${style.bg} ${style.text} ${style.border}`}
    >
      {isDownloading ? (
        <div className='h-3 w-3 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-400 sm:h-4 sm:w-4' />
      ) : (
        <HugeiconsIcon icon={style.icon} size={14} className='sm:size-4' />
      )}
      {status}
    </span>
  );
}
