import { createFileRoute, Link } from '@tanstack/react-router';
import { AppHeader } from "@/components/app-header";
import { ActivityHistory } from "@/components/customer-profile/activity-history";
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/customer-history')({
  component: CustomerHistoryComponent,
});

function CustomerHistoryComponent() {
  return (
    <div className="min-h-screen bg-brand pb-6">
      <AppHeader title="Activity History" />
      <main className="mx-4 mt-6">
        <div className="mb-6 rounded-lg bg-card p-6 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/archive">
              <Button variant="ghost" size="icon" aria-label="Back to Archive">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">Activity History</h1>
              <p className="text-muted-foreground mt-1">View the complete activity and contact history for this branch.</p>
            </div>
          </div>

          <ActivityHistory />
        </div>
      </main>
    </div>
  );
}
