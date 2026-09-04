import { createFileRoute, Link } from '@tanstack/react-router';
import { AppHeader } from "@/components/app-header";
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FacilityHeadOffice } from "@/components/customer-profile/facility-head-office";
import { MonitoringProcess } from "@/components/customer-profile/monitoring-process";

export const Route = createFileRoute('/customer-details')({
  component: CustomerDetailsComponent,
});

function CustomerDetailsComponent() {
  return (
    <div className="min-h-screen bg-brand pb-6">
      <AppHeader title="Customer Details" />
      <main className="mx-4 mt-6">
        <div className="mb-6 rounded-lg bg-card p-6 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/archive">
              <Button variant="ghost" size="icon" aria-label="Back to Archive">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">Selamat Datang Kembali ✋</h1>
              <p className="text-muted-foreground mt-1">Detailed customer profile information.</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="monitoring" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline">Monitoring of Process</AccordionTrigger>
              <AccordionContent className="pt-4 border-t">
                <MonitoringProcess />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="facility" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline">Facility / Head Office (HO)</AccordionTrigger>
              <AccordionContent className="pt-4 border-t">
                <FacilityHeadOffice />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </main>
    </div>
  );
}
