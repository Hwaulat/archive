import { createFileRoute } from '@tanstack/react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppHeader } from "@/components/app-header";
import { ActivityHistory } from "@/components/customer-profile/activity-history";
import { MonitoringProcess } from "@/components/customer-profile/monitoring-process";
import { FacilityHeadOffice } from "@/components/customer-profile/facility-head-office";

export const Route = createFileRoute('/customer-profile')({
  component: CustomerProfileComponent,
});

function CustomerProfileComponent() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <main className="flex-1 p-6 md:p-8 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Customer Profile</h1>
            <p className="text-muted-foreground mt-1">Manage and view your company profiles, activities, and process status.</p>
          </div>
        </div>

        <Tabs defaultValue="activity" className="w-full">
          <TabsList className="mb-6 h-12 w-full justify-start overflow-x-auto">
            <TabsTrigger value="activity" className="px-6 py-2">Activity History</TabsTrigger>
            <TabsTrigger value="monitoring" className="px-6 py-2">Monitoring of Process</TabsTrigger>
            <TabsTrigger value="facility" className="px-6 py-2">Facility / Head Office</TabsTrigger>
          </TabsList>
          
          <TabsContent value="activity">
            <ActivityHistory />
          </TabsContent>
          
          <TabsContent value="monitoring">
            <MonitoringProcess />
          </TabsContent>
          
          <TabsContent value="facility">
            <FacilityHeadOffice />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
