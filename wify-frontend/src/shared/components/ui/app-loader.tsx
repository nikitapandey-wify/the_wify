import { cn } from '@/shared/utils/utils';
import { Loader2 } from 'lucide-react';

function AppLoader({ className }: { className?: string }) {
 return <Loader2 className={cn('inline-block h-9 w-9 animate-spin', className)} />;
}

export default AppLoader;