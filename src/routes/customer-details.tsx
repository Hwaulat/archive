import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArchiveIcon, ChevronRight, Search, ChevronDown, ChevronLeft, ChevronsLeft, ChevronsRight, Eye, Download, X, Pencil, Trash2 } from 'lucide-react';
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute('/customer-details')({
  component: CustomerDetailsPage,
});

const facilityHistoryData = [
  { no: 1, facilityId: "15501", date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 2, facilityId: "15501", date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 3, facilityId: "15501", date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 4, facilityId: "15501", date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 5, facilityId: "15501", date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
];

const facilityDetails = {
  id: "4749",
  name: "Evigo China Plant 1",
  address: "Jl. Wijaya Kusuma VIII No. 10 RT 02 RW 14, Kota Bogor, Indonesia",
  city: "Kota Bogor",
  country: "Indonesia",
  zipCode: "16112",
  phone: "+6282124057273",
  fax: "-",
  email: "hardi.kurnia@halalmui.org",
  picName: "Hardi",
  picTitle: "Mr",
  picPhone: "+6282124057273",
  picMobile: "+6282124057273",
  picEmail: "hardi.kurnia@halalmui.org",
  contactName: "Hardi",
  contactTitle: "Mr",
  contactPhone: "+6282124057273",
  contactMobile: "+6282124057273",
  contactEmail: "hardi.kurnia@halalmui.org",
};

const facilityTableRows = [
  {
    id: "4749",
    name: "Evigo China Plant 1",
    address: "Guangdong P.R. China",
    city: "Guangdong",
    country: "P.R China",
    phone: "+6282124057273",
    lastHpas: "-",
  },
];

const viewByDataOptions = [
  { value: "select", label: "Select Data Type -" },
  { value: "all-registration", label: "All Halal Registration (Exclude Disclaimer)" },
  { value: "on-process", label: "Halal Registration On Process" },
  { value: "valid-certified", label: "Valid Certified Halal Registration" },
  { value: "expired-certified", label: "Expired Certified Halal Registration" },
  { value: "disclaimer", label: "Disclaimer Halal Registration" },
];

function PageBreadcrumb({ currentLabel, rightContent }: { currentLabel: string; rightContent?: React.ReactNode }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2.5 text-sm">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-600">
          <ArchiveIcon className="h-4 w-4" />
        </span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
        <Link to="/archive" className="font-medium text-slate-500 transition-colors hover:text-slate-900">
          Archive
        </Link>
        <ChevronRight className="h-4 w-4 text-slate-400" />
        <span className="font-semibold text-foreground">{currentLabel}</span>
      </div>
      {rightContent ?? <span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>}
    </nav>
  );
}

function FacilityHistoryDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Activity History of Facility / Head Office</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <div className="flex h-[46px] w-full max-w-[340px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead className="font-semibold text-foreground">No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Facility / Head Office ID</TableHead>
                  <TableHead className="font-semibold text-foreground">Date</TableHead>
                  <TableHead className="font-semibold text-foreground">Activity</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facilityHistoryData.map((item) => (
                  <TableRow key={item.no}>
                    <TableCell className="py-4 text-secondary-foreground">{item.no}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground whitespace-nowrap">{item.facilityId}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground whitespace-nowrap">{item.date}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground">{item.activity}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground text-right">{item.doneBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FacilityDetailsDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold border-b pb-4">Facility / Head Office Details</DialogTitle>
        </DialogHeader>
        
        <div className="mt-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
             <div>
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office ID</p>
                <p className="font-semibold text-sm">{facilityDetails.id}</p>
             </div>
             <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office Name</p>
                <p className="font-semibold text-sm">{facilityDetails.name}</p>
             </div>
             
             <div className="md:col-span-4">
                <p className="text-xs text-muted-foreground mb-1">Address</p>
                <p className="font-semibold text-sm">{facilityDetails.address}</p>
             </div>
             
             <div>
                <p className="text-xs text-muted-foreground mb-1">City</p>
                <p className="font-semibold text-sm">{facilityDetails.city}</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">Country</p>
                <p className="font-semibold text-sm">{facilityDetails.country}</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">ZIP Code</p>
                <p className="font-semibold text-sm">{facilityDetails.zipCode}</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">Phone No.</p>
                <p className="font-semibold text-sm">{facilityDetails.phone}</p>
             </div>
             
             <div>
                <p className="text-xs text-muted-foreground mb-1">Fax No.</p>
                <p className="font-semibold text-sm">{facilityDetails.fax}</p>
             </div>
             <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office Email</p>
                <p className="font-semibold text-sm">{facilityDetails.email}</p>
             </div>
          </div>
          
          <div className="pt-6 border-t">
            <h4 className="text-lg font-bold mb-4">Person in Charge</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Name</p>
                <p className="font-semibold text-sm">{facilityDetails.picName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Title</p>
                <p className="font-semibold text-sm">{facilityDetails.picTitle}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone No.</p>
                <p className="font-semibold text-sm">{facilityDetails.picPhone}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Mobile Phone No.</p>
                <p className="font-semibold text-sm">{facilityDetails.picMobile}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm">{facilityDetails.picEmail}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h4 className="text-lg font-bold mb-4">Contact Person</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Name</p>
                <p className="font-semibold text-sm">{facilityDetails.contactName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Title</p>
                <p className="font-semibold text-sm">{facilityDetails.contactTitle}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone No.</p>
                <p className="font-semibold text-sm">{facilityDetails.contactPhone}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Mobile Phone No.</p>
                <p className="font-semibold text-sm">{facilityDetails.contactMobile}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm">{facilityDetails.contactEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CustomerDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-6">
      <AppHeader title="Archive" />

      <div className="mx-4 space-y-3 mt-4">
        <PageBreadcrumb
          currentLabel="Company Information"
          rightContent={<span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>}
        />

        {/* Company Information */}
        <section className="rounded-lg bg-card p-6">
          <div className="mb-6 flex items-center gap-3">
            <Link to="/archive">
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h2 className="font-display text-2xl font-bold text-foreground">Company Information</h2>
            <div className="ml-auto flex items-center gap-2">
              <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Activity History</Button>
              <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white">Update Company Profile</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
            <div className="col-span-1 md:col-span-4">
              <p className="text-xs text-muted-foreground mb-1">Office Status</p>
              <p className="font-semibold text-sm">Kantor Cabang Indonesia - LPPOM DKI Jakarta</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Branch</p>
              <p className="font-semibold text-sm">Pusat (Headquarter)</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Company ID</p>
              <p className="font-semibold text-sm">22</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">NDPU (BPJPH Company ID on SIHALAL)</p>
              <p className="font-semibold text-sm">ICT001</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">NIB (Permit Type No. on OSS)</p>
              <p className="font-semibold text-sm">-</p>
            </div>

            <div className="col-span-1 md:col-span-1">
              <p className="text-xs text-muted-foreground mb-1">Company Name</p>
              <p className="font-semibold text-sm">Evigo</p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs text-muted-foreground mb-1">Address</p>
              <p className="font-semibold text-sm">Jl. Pemuda No.5, Bogor, Indonesia, 23166, Bogor, Indonesia</p>
            </div>

            <div className="col-span-1 md:col-span-4">
              <p className="text-xs text-muted-foreground mb-1">Customer Status</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Existing Customer
                </span>
                <p className="text-sm">Halal Certified Since : <span className="text-yellow-600 font-medium">April 09th, 2026</span>, on Product Group : <span className="text-yellow-600 font-medium">"Lain-lain (Others)"</span> with Halal Decree No. : <span className="text-yellow-600 font-medium">"RKS-000010426"</span>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Conversion */}
        <section className="rounded-lg bg-card p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Certificate Conversion</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Conversion Reg No.</p>
              <p className="font-semibold text-sm">CNV001445</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Process Status</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-200 mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Disclaimer
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Disclaimer Reason</p>
              <p className="font-semibold text-sm">-</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="rounded-lg bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-xs min-w-[1200px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead rowSpan={2} className="align-middle border-r">No</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Company Phone No.</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Company Email</TableHead>
                  <TableHead colSpan={4} className="text-center border-r border-b">Person in Charge</TableHead>
                  <TableHead colSpan={4} className="text-center border-b">Contact Person</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="border-r">Name</TableHead>
                  <TableHead className="border-r">Title</TableHead>
                  <TableHead className="border-r">Phone No.</TableHead>
                  <TableHead className="border-r">Email</TableHead>
                  <TableHead className="border-r">Name</TableHead>
                  <TableHead className="border-r">Title</TableHead>
                  <TableHead className="border-r">Phone No.</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r border-b">1</TableCell>
                  <TableCell className="border-r border-b">+62251 8663472</TableCell>
                  <TableCell className="border-r border-b">a3.include@gmail.com</TableCell>
                  <TableCell className="border-r border-b">Cinta Aja</TableCell>
                  <TableCell className="border-r border-b">QC Manager</TableCell>
                  <TableCell className="border-r border-b">12 300, 12 300</TableCell>
                  <TableCell className="border-r border-b">a3.include@gmail.com</TableCell>
                  <TableCell className="border-r border-b">Cinta Aja</TableCell>
                  <TableCell className="border-r border-b">QC Manager</TableCell>
                  <TableCell className="border-r border-b">12 300, 12 300</TableCell>
                  <TableCell className="border-b">a3.include@gmail.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </section>

        {/* List of Last Valid Halal Decree */}
        <section className="rounded-lg bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">List of Last Valid Halal Decree</h3>
          <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-xs min-w-[800px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead rowSpan={2} className="align-middle border-r">No</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Product Group</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Schema / Application Type</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Halal Decree No.</TableHead>
                  <TableHead colSpan={2} className="text-center border-b">Last Date Period of Halal Decree</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="border-r text-center">Valid Start</TableHead>
                  <TableHead className="text-center">Valid End</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r border-b">1</TableCell>
                  <TableCell className="border-r border-b">Lain-lain (Others)</TableCell>
                  <TableCell className="border-r border-b">Certificate of Sharia Conformity</TableCell>
                  <TableCell className="border-r border-b">RKS-000010426</TableCell>
                  <TableCell className="border-r border-b text-center">Cinta Aja</TableCell>
                  <TableCell className="border-b text-center">28 June 2026</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </section>

        {/* Accordions */}
        <section className="space-y-3">
          <Accordion type="multiple" defaultValue={["monitoring"]} className="space-y-3">
            
            {/* Monitoring of Process */}
            <AccordionItem value="monitoring" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Monitoring of Process
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">View by Data</span>
                    <Select defaultValue="all-registration">
                      <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                        <SelectValue placeholder="Select Data Type -" />
                      </SelectTrigger>
                      <SelectContent>
                        {viewByDataOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-[11px] min-w-[1500px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">No</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Reg No.</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Reg Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Completed Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Registration Review Date<br/>(Halal Partner)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Akad Generate<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Approved Akad<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">STTD<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Auditor Assigned<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Auditor Passed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Audit Result Review Date<br/>(Halal Quality Board)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Post Audit<br/>Passed Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Fatwa Passed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Halal Decree<br/>Generate Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>186492</TableCell>
                        <TableCell>28 June 2026, 12:00:00</TableCell>
                        <TableCell>28 June 2026, 12:00:00</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            {/* Facility / Head Office (HO) */}
            <AccordionItem value="facility" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Facility / Head Office (HO)
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <FacilityHistoryDialog>
                    <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Activity History</Button>
                  </FacilityHistoryDialog>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-xs min-w-[1000px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">No</TableHead>
                        <TableHead className="font-semibold text-foreground">Action</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                        <TableHead className="font-semibold text-foreground">Address</TableHead>
                        <TableHead className="font-semibold text-foreground">City</TableHead>
                        <TableHead className="font-semibold text-foreground">Country</TableHead>
                        <TableHead className="font-semibold text-foreground">Phone No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Last HPAS Information</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {facilityTableRows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>1</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <FacilityDetailsDialog>
                                <Button variant="table" size="icon" aria-label="View detail" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </FacilityDetailsDialog>
                              <Link to="/facility-head-office-edit">
                                <Button variant="table" size="icon" aria-label="Edit facility" className="h-8 w-8 text-amber-600 bg-amber-50 hover:bg-amber-100">
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button variant="table" size="icon" aria-label="Delete facility" className="h-8 w-8 text-red-600 bg-red-50 hover:bg-red-100">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.city}</TableCell>
                          <TableCell>{row.country}</TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell>{row.lastHpas}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            {/* List of Halal Registration */}
            <AccordionItem value="halal-registration" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Halal Registration
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">View by Data</span>
                      <Select defaultValue="all-registration">
                        <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                          <SelectValue placeholder="Select Data Type -" />
                        </SelectTrigger>
                        <SelectContent>
                          {viewByDataOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-[11px] min-w-[2000px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                        <TableHead className="font-semibold text-foreground w-16">Action</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Completed Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Approved Akad<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                        <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility / Head Office</TableHead>
                        <TableHead className="font-semibold text-foreground">Total of Product</TableHead>
                        <TableHead className="font-semibold text-foreground">Total of Material</TableHead>
                        <TableHead className="font-semibold text-foreground">Halal<br/>Decree No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Period of Halal Decree<br/><span className="font-normal flex justify-between mt-1"><span>Valid Start</span><span>Valid End</span></span></TableHead>
                        <TableHead className="font-semibold text-foreground">HAS Note</TableHead>
                        <TableHead className="font-semibold text-foreground">Auditing Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <Link to="/certification-data-details">
                            <Button variant="table" size="icon" aria-label="View detail" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </TableCell>
                        <TableCell>186592</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-normal text-[10px]">New</Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px]">
                          Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <ol className="list-decimal pl-4">
                            <li>Evigo China Plant 1 (Facility ID: 4749)</li>
                            <li>PT Evigo Berjaya (Facility ID: 15493)</li>
                          </ol>
                        </TableCell>
                        <TableCell>
                          <ol className="list-decimal pl-4">
                            <li>Menu: 0</li>
                            <li>Outlet: 0</li>
                            <li>Kitchen: 0</li>
                            <li>Warehouse: 0</li>
                          </ol>
                        </TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>
                          <div className="flex justify-between w-[120px]">
                            <span>-</span>
                            <span>-</span>
                          </div>
                        </TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="list-of-akad" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Akad
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <ListOfAkad />
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="registered-product" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Registered Product
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegisteredProduct />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="registered-material" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Registered Material
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegisteredMaterial />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inquiry-of-material" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Inquiry of Material
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <InquiryOfMaterial />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inquiry-of-notification-letter" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Inquiry of Notification Letter
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <InquiryOfNotificationLetter />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="regular-report" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Regular Report
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegularReport />
              </AccordionContent>
            </AccordionItem>

            {/* Other Accordions */}
            {[
              "List of Halal Decree",
              "List of HPAS Status / Certificate",
              "Halal Registration Activity History"
            ].map((title, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-sm text-muted-foreground">
                  Content for {title} goes here.
                </AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="list-of-halal-decree" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Halal Decree
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <ListOfHalalDecree />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="list-of-hpas-status-certificate" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of HPAS Status / Certificate
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <ListOfHpasStatusCertificate />
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>

      </div>
    </div>
  );
}

function PaginationFooter() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      <span className="text-xs text-secondary-foreground font-medium">10 Rows</span>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" aria-label="First page" className="h-8 w-8">
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Previous page" className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "soft" : "ghost"}
            size="icon"
            className="h-8 w-8"
            aria-current={page === 1 ? "page" : undefined}
          >
            {page}
          </Button>
        ))}
        <Button variant="ghost" size="icon" aria-label="Next page" className="h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Last page" className="h-8 w-8">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
      <label className="flex items-center gap-3 text-xs text-secondary-foreground font-medium">
        Rows per page
        <span className="flex h-8 items-center gap-2 rounded-md border border-border px-3 bg-surface">
          10
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </span>
      </label>
    </div>
  );
}

function ListOfAkad() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="all-registration">
              <SelectTrigger className="w-[320px] h-[42px] border-[#0d6efd] bg-[#0d6efd] text-white shadow-none hover:bg-[#0b5ed7] focus:ring-0 data-[placeholder]:text-white [&>span]:text-white [&>svg]:text-white">
                <SelectValue placeholder="Select Data Type -" />
              </SelectTrigger>
              <SelectContent className="border-[#0d6efd] bg-[#0d6efd] text-white shadow-lg">
                {viewByDataOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-white focus:bg-[#0b5ed7] focus:text-white data-[state=checked]:bg-[#0b5ed7]"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[2000px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Action</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
              <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              <TableHead className="font-semibold text-foreground">Service Type</TableHead>
              <TableHead className="font-semibold text-foreground">Akad No.</TableHead>
              <TableHead className="font-semibold text-foreground">Akad Date</TableHead>
              <TableHead className="font-semibold text-foreground">Due Date</TableHead>
              <TableHead className="font-semibold text-foreground">Paid Date</TableHead>
              <TableHead className="font-semibold text-foreground">Approved Akad Date</TableHead>
              <TableHead className="font-semibold text-foreground">Currency</TableHead>
              <TableHead className="font-semibold text-foreground">Total of Akad</TableHead>
              <TableHead className="font-semibold text-foreground">Current Process</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="flex flex-col gap-2 w-[180px] mx-auto">
                  <Button variant="soft" className="h-8 justify-start gap-2 text-xs font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">
                    <Download className="h-3.5 w-3.5" />
                    Akad
                  </Button>
                  <Button variant="soft" className="h-8 justify-start gap-2 text-xs font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">
                    <Download className="h-3.5 w-3.5" />
                    Payment Proof
                  </Button>
                </div>
              </TableCell>
              <TableCell>186592</TableCell>
              <TableCell>New</TableCell>
              <TableCell className="max-w-[250px]">Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)</TableCell>
              <TableCell>Non BPJPH</TableCell>
              <TableCell>SO78668</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>IDR</TableCell>
              <TableCell>3.500.000</TableCell>
              <TableCell>
                <Badge className="bg-orange-50 text-orange-600 hover:bg-orange-50 border border-orange-200 font-normal text-xs py-1 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2" />
                  Akad Payment Approved
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function RegisteredProduct() {
  return (
    <Tabs defaultValue="non-facility" className="w-full">
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <TabsList className="h-[42px] bg-surface p-1">
            <TabsTrigger value="non-facility" className="h-full px-6 text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Product - Non Facility</TabsTrigger>
            <TabsTrigger value="facility" className="h-full px-6 text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Product - Facility</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="type">
              <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                <SelectValue placeholder="All Halal Registration (Exclude Disclaimer)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type">All Halal Registration (Exclude Disclaimer)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
        </div>
      </div>

      <TabsContent value="non-facility" className="mt-0 outline-none">
        <div className="mb-4 flex justify-end">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Unpublish</Button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[2000px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                <TableHead className="font-semibold text-foreground">Ticket Row of Product</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                <TableHead className="font-semibold text-foreground">Publish Status</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                <TableHead className="font-semibold text-foreground">Sub Product<br/>Category</TableHead>
                <TableHead className="font-semibold text-foreground">Halal Decree No.</TableHead>
                <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
                <TableHead className="font-semibold text-foreground">Valid End</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell><div className="h-6 w-6 bg-surface rounded" /></TableCell>
                <TableCell>186592</TableCell>
                <TableCell>New</TableCell>
                <TableCell>12356</TableCell>
                <TableCell>PT Evigo Berjaya</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="max-w-[300px]">ROTI TAWAR PANDAN HAILAI ROTI - O</TableCell>
                <TableCell>
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    Published
                  </Badge>
                </TableCell>
                <TableCell>Servis (Services)</TableCell>
                <TableCell>Catering (Katering)</TableCell>
                <TableCell>-</TableCell>
                <TableCell>MUI-LPPOM00020001421025</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <PaginationFooter />
      </TabsContent>

      <TabsContent value="facility" className="mt-0 outline-none">
        <div className="mb-4 flex justify-end gap-2">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">Publish</Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Unpublish</Button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[2000px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                <TableHead className="font-semibold text-foreground">Ticket Row of Product</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                <TableHead className="font-semibold text-foreground">Publish Status</TableHead>
                <TableHead className="font-semibold text-foreground">Address</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                <TableHead className="font-semibold text-foreground">Halal Decree No.</TableHead>
                <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
                <TableHead className="font-semibold text-foreground">Valid End</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell><div className="h-6 w-6 bg-surface rounded" /></TableCell>
                <TableCell>186592</TableCell>
                <TableCell>New</TableCell>
                <TableCell>12356</TableCell>
                <TableCell>PT Evigo Berjaya</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="max-w-[250px]">ROTI TAWAR PANDAN HAILAI ROTI - O</TableCell>
                <TableCell>
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    Published
                  </Badge>
                </TableCell>
                <TableCell className="max-w-[200px]">Jl. Pemuda No. 5, Bogor, Indonesia</TableCell>
                <TableCell>Servis (Services)</TableCell>
                <TableCell>Facility - Outlet</TableCell>
                <TableCell>MUI-LPPOM00020001421025</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <PaginationFooter />
      </TabsContent>
    </Tabs>
  );
}

function RegisteredMaterial() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="type">
              <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                <SelectValue placeholder="All Halal Registration (Exclude Disclaimer)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type">All Halal Registration (Exclude Disclaimer)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1500px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
              <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              <TableHead className="font-semibold text-foreground">Material ID</TableHead>
              <TableHead className="font-semibold text-foreground">Material Code</TableHead>
              <TableHead className="font-semibold text-foreground">Material Name</TableHead>
              <TableHead className="font-semibold text-foreground">Material Type</TableHead>
              <TableHead className="font-semibold text-foreground">Material File</TableHead>
              <TableHead className="font-semibold text-foreground">Producer</TableHead>
              <TableHead className="font-semibold text-foreground">Producer Country</TableHead>
              <TableHead className="font-semibold text-foreground">Supplier</TableHead>
              <TableHead className="font-semibold text-foreground">Halal By</TableHead>
              <TableHead className="font-semibold text-foreground">Certification No.</TableHead>
              <TableHead className="font-semibold text-foreground">Valid End</TableHead>
              <TableHead className="font-semibold text-foreground">Additional Information</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>186592</TableCell>
              <TableCell>New</TableCell>
              <TableCell>Servis (Services)</TableCell>
              <TableCell>1</TableCell>
              <TableCell>001</TableCell>
              <TableCell>ACB</TableCell>
              <TableCell>Raw Material + Additive</TableCell>
              <TableCell><a href="#" className="text-blue-600 hover:underline">Download</a></TableCell>
              <TableCell>Producer A</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function InquiryOfMaterial() {
  const [activeTab, setActiveTab] = useState("view");
  const [filterType, setFilterType] = useState("material-no");

  const inquiryFilterOptions = [
    { value: "material-no", label: "Inquiry of Material No." },
    { value: "material-type", label: "Inquiry of Material Type" },
    { value: "material-name", label: "Material Name" },
    { value: "producer", label: "Producer" },
    { value: "reg-no-product-group", label: "Reg No. and Product Group" },
    { value: "request-year", label: "Request Year" },
  ];

  const materialTypeOptions = [
    "Letter of Inquiry of Material",
    "Positive List",
    "MUI Halal Decree",
  ];

  const regNoProductGroupOptions = [
    "Reg No. : 99198 - Product Group : Lain-lain (Others)",
    "Reg No. : 60365 - Product Group : Daging dan Produk Olahan Daging (Meat and Processed Meat Products)",
    "Reg No. : 60361 - Product Group : Daging dan Produk Olahan Daging (Meat and Processed Meat Products)",
    "Reg No. : 60359 - Product Group : Daging dan Produk Olahan Daging (Meat and Processed Meat Products)",
    "Reg No. : 35877 - Product Group : Susu dan Analognya (Milk and Milk Analogues)",
  ];

  const requestYearOptions = ["2024", "2025", "2026"];

  const activityHistoryData = [
    {
      no: 1,
      date: "01-08-2024",
      inquiryNo: "BB3633/SH/LPPOM MUI/VIII/2024",
      inquiryType: "Positive List",
      regNo: "99198",
      activity: "Inquiry of material Evigo Ltd. has been processed by Admin as positive list.",
      doneBy: "Afif Sultahoni",
    },
    {
      no: 2,
      date: "29-07-2024",
      inquiryNo: "BB3633/SH/LPPOM MUI/VIII/2024",
      inquiryType: "Positive List",
      regNo: "99198",
      activity: "Update kind of product.",
      doneBy: "rootcerol",
    },
    {
      no: 3,
      date: "29-07-2024",
      inquiryNo: "BB3633/SH/LPPOM MUI/VIII/2024",
      inquiryType: "Positive List",
      regNo: "99198",
      activity: "Inquiry of material by Customer.",
      doneBy: "rootcerol",
    },
    {
      no: 4,
      date: "27-12-2023",
      inquiryNo: "BB2905/SH/LPPOM MUI/XII/2023",
      inquiryType: "-",
      regNo: "35877",
      activity: "Inquiry of material has been deleted by Customer",
      doneBy: "evigo",
    },
    {
      no: 5,
      date: "27-12-2023",
      inquiryNo: "BB2902/SH/LPPOM MUI/XII/2023",
      inquiryType: "-",
      regNo: "116109",
      activity: "Inquiry of material has been deleted by Customer",
      doneBy: "evigo",
    },
    {
      no: 6,
      date: "27-08-2023",
      inquiryNo: "BB2217/SH/LPPOM MUI/VIII/2023",
      inquiryType: "Positive List",
      regNo: "35877",
      activity: "Inquiry of material Evigo's Co. Ltd. has been processed by Admin as positive list.",
      doneBy: "Afif Sultahoni",
    },
  ];

  const renderFilterValueControl = () => {
    switch (filterType) {
      case "material-type":
        return (
          <Select defaultValue="letter-of-inquiry">
            <SelectTrigger className="w-[260px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="Letter of Inquiry of Material" />
            </SelectTrigger>
            <SelectContent>
              {materialTypeOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "reg-no-product-group":
        return (
          <Select defaultValue="reg-no-99198">
            <SelectTrigger className="w-[520px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="Reg No. : 99198 - Product Group : Lain-lain (Others)" />
            </SelectTrigger>
            <SelectContent>
              {regNoProductGroupOptions.map((option, index) => (
                <SelectItem key={option} value={`reg-no-${index}`}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "request-year":
        return (
          <Select defaultValue="2026">
            <SelectTrigger className="w-[180px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="2026" />
            </SelectTrigger>
            <SelectContent>
              {requestYearOptions.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <input
            type="text"
            placeholder={
              filterType === "material-no"
                ? "Search Inquiry of Material No."
                : filterType === "material-name"
                  ? "Search Material Name"
                  : filterType === "producer"
                    ? "Search Producer"
                    : "Filter value"
            }
            className="h-[42px] w-[260px] rounded-md border border-border bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-0"
          />
        );
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[300px]">
            <TabsList className="h-[42px] bg-surface p-1 w-full flex">
              <TabsTrigger value="view" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">View by Data</TabsTrigger>
              <TabsTrigger value="history" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Activity History</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeTab === "view" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View by Data</span>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[300px] h-[42px] bg-white border-border text-foreground">
                  <SelectValue placeholder="Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryFilterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">
                {inquiryFilterOptions.find((item) => item.value === filterType)?.label ?? "Inquiry of Material No."}
              </span>
              {renderFilterValueControl()}
            </div>
          </div>
        )}
      </div>

      {activeTab === "view" ? (
        <>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-[11px] min-w-[1500px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                  <TableHead className="font-semibold text-foreground text-center">Current Process & Action</TableHead>
                  <TableHead className="font-semibold text-foreground">Request Date</TableHead>
                  <TableHead className="font-semibold text-foreground">Inquiry of Material No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Inquiry of Material Type</TableHead>
                  <TableHead className="font-semibold text-foreground">Language</TableHead>
                  <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Material Name</TableHead>
                  <TableHead className="font-semibold text-foreground">Producer</TableHead>
                  <TableHead className="font-semibold text-foreground">Producer Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2 justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="table" size="icon" className="h-10 w-10 text-blue-600 bg-blue-50 hover:bg-blue-100">
                              <Eye className="h-5 w-5" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl p-0 overflow-hidden border-none shadow-2xl [&>button]:hidden">
                            <div className="bg-white rounded-lg">
                              <div className="flex items-center justify-between p-6 pb-2 border-b-0">
                                <h2 className="text-xl font-bold text-foreground">Inquiry of Material Details</h2>
                                <DialogClose className="rounded-full p-2 bg-surface hover:bg-surface-hover transition-colors">
                                  <X className="h-5 w-5 text-muted-foreground" />
                                </DialogClose>
                              </div>
                              <div className="p-6 pt-4 space-y-6 max-h-[80vh] overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Request Date</p>
                                    <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Inquiry of Material No.</p>
                                    <p className="text-sm font-semibold text-foreground">BB2345/SH/LPPOM MUI/X/2021</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Language</p>
                                    <p className="text-sm font-semibold text-foreground">Indonesia</p>
                                  </div>
                                  <div className="hidden md:block"></div>
                                  <div className="md:col-span-4">
                                    <p className="text-xs text-muted-foreground mb-1">Reg No. and Product Group</p>
                                    <p className="text-sm font-semibold text-foreground">Reg No: 60365 - Product Group : Ikan dan Produk Perikanan</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Aplication Type</p>
                                    <p className="text-sm font-semibold text-foreground">-</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Scheme</p>
                                    <p className="text-sm font-semibold text-foreground">-</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">BPJPH Product Type</p>
                                    <p className="text-sm font-semibold text-foreground">-</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Material Type</p>
                                    <p className="text-sm font-semibold text-foreground">Processign Aid</p>
                                  </div>
                                  <div className="md:col-span-4">
                                    <p className="text-xs text-muted-foreground mb-2">Kind of Product</p>
                                    <div className="space-y-2">
                                      <label className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                        <span className="text-sm font-semibold text-foreground">Consumption products (Produk yang dikonsumsi)</span>
                                      </label>
                                      <label className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                        <span className="text-sm font-semibold text-foreground">Oral Care products and Lipstick</span>
                                      </label>
                                      <label className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                        <span className="text-sm font-semibold text-foreground">Internal Medicine and Supplements (Obat dalam dan Suplement)</span>
                                      </label>
                                      <label className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                        <span className="text-sm font-semibold text-foreground">External used products (Produk Penggunaan Luar)</span>
                                      </label>
                                      <label className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-sm bg-brand flex items-center justify-center text-white">
                                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <span className="text-sm font-semibold text-foreground">Consumer goods (Barang Gunaan)</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-surface rounded-xl p-6 border border-border">
                                  <h3 className="text-lg font-bold text-foreground mb-6">Material Data</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Internal Code</p>
                                      <p className="text-sm font-semibold text-foreground">-</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Material Name</p>
                                      <p className="text-sm font-semibold text-foreground">Celatom FQ</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Producer</p>
                                      <p className="text-sm font-semibold text-foreground">EP Mineral</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Producer Country</p>
                                      <p className="text-sm font-semibold text-foreground">USA</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Supplier</p>
                                      <p className="text-sm font-semibold text-foreground">PT. Sukabumi Trading Coy.</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Halal by</p>
                                      <p className="text-sm font-semibold text-foreground">ISLAMIC SERVICES OF AMERICA</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Certificate No</p>
                                      <p className="text-sm font-semibold text-foreground">1109-20-35743L</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-muted-foreground mb-1">Valid End</p>
                                      <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                                    </div>
                                    <div className="md:col-span-4">
                                      <p className="text-xs text-muted-foreground mb-1">Other Document</p>
                                      <p className="text-sm font-semibold text-foreground">ALLERGEN & SENSITIVITY INFORMATION</p>
                                    </div>
                                    <div className="md:col-span-4">
                                      <p className="text-xs text-muted-foreground mb-1">Remarks</p>
                                      <div className="text-sm font-semibold text-foreground">
                                        -Nama bahan pada SH: Celatom, Diatomaceous earth<br/>
                                        -MSDS
                                      </div>
                                    </div>
                                    <div className="md:col-span-4 mt-2">
                                      <p className="text-xs text-muted-foreground mb-1">Material File</p>
                                      <Button variant="brand" className="h-8 text-xs font-semibold px-4 rounded-md bg-brand hover:bg-brand/90 text-white shadow-sm mt-1">
                                        Download Material
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <div className="flex flex-col gap-1 w-[130px]">
                          <Button variant="soft" className="h-7 text-[10px] font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">Download Material</Button>
                          <Button variant="soft" className="h-7 text-[10px] font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">Download Letter</Button>
                        </div>
                      </div>
                      <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3 inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                        Complete
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>29 June 2026</TableCell>
                  <TableCell>BB0868/SH/LPPOM MU...</TableCell>
                  <TableCell>Letter of Inquiry of Mat...</TableCell>
                  <TableCell>Indonesia</TableCell>
                  <TableCell>605654</TableCell>
                  <TableCell>Celatom FW 14</TableCell>
                  <TableCell>EP Mineral, LLC</TableCell>
                  <TableCell>Indonesia</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-[11px] min-w-[1500px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead className="font-semibold text-foreground">No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Date</TableHead>
                  <TableHead className="font-semibold text-foreground">Inquiry Material No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Inquiry of Material Type</TableHead>
                  <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Activity</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Done By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activityHistoryData.map((row) => (
                  <TableRow key={row.no} className="align-top">
                    <TableCell>{row.no}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.inquiryNo}</TableCell>
                    <TableCell>
                      {row.inquiryType === "-" ? (
                        <span className="text-muted-foreground">-</span>
                      ) : (
                        <span className="inline-flex items-center rounded-sm bg-emerald-600 px-2 py-1 text-[10px] font-semibold text-white">
                          {row.inquiryType}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{row.regNo}</TableCell>
                    <TableCell>{row.activity}</TableCell>
                    <TableCell className="text-right">{row.doneBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </>
      )}
    </>
  );
}



function InquiryOfNotificationLetter() {
  const [activeTab, setActiveTab] = useState("view");
  const [filterType, setFilterType] = useState("notification-letter-type");
  const [selectedNotificationLetterType, setSelectedNotificationLetterType] = useState("rks");
  const [selectedRegNoProductGroup, setSelectedRegNoProductGroup] = useState("145437");
  const [detailMenuOpen, setDetailMenuOpen] = useState(false);
  const [detailDialog, setDetailDialog] = useState<"postponed" | "disclaimer" | null>(null);

  const notificationLetterFilterOptions = [
    { value: "notification-letter-no", label: "Notification Letter No." },
    { value: "notification-letter-type", label: "Notification Letter Type" },
    { value: "reg-no-product-group", label: "Reg No. and Product Group" },
    { value: "request-year", label: "Request Year" },
  ];

  const notificationLetterTypeOptions = ["RKS", "SKH", "SKP", "SKP1", "SKP2", "SKPP", "SKPPSH"];

  const regNoProductGroupOptions = [
    "Reg No. : 145437 - Product Group : Servis (Services)",
    "Reg No. : 142499 - Product Group : Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)",
    "Reg No. : 116109 - Product Group : Lain-lain (Others)",
    "Reg No. : 99749 - Product Group : Produk Biologi (Biological Products)",
    "Reg No. : 99198 - Product Group : Lain-lain (Others)",
    "Reg No. : 78668 - Product Group : Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)",
  ];

  const requestYearOptions = ["2023", "2024", "2025", "2026"];

  const activityHistoryData = [
    {
      no: 1,
      date: "07-12-2024",
      letterNo: "KPP1481/SH/LPPOM/XII/2024",
      letterType: "SKPP",
      regNo: "99749",
      activity: "Inquiry of Notification Letter by Customer.",
      doneBy: "evigo",
    },
    {
      no: 2,
      date: "07-12-2024",
      letterNo: "KPP1481/SH/LPPOM/XII/2024",
      letterType: "SKPP",
      regNo: "99749",
      activity: "Check Inquiry SK by Admin Auditing.",
      doneBy: "evigo",
    },
    {
      no: 3,
      date: "07-12-2024",
      letterNo: "KPP1481/SH/LPPOM/XII/2024",
      letterType: "SKPP",
      regNo: "99749",
      activity: "Approval Inquiry SK by Kabid Auditing.",
      doneBy: "evigo",
    },
    {
      no: 4,
      date: "07-12-2024",
      letterNo: "KPP1481/SH/LPPOM/XII/2024",
      letterType: "SKPP",
      regNo: "99749",
      activity: "Approval Inquiry SK by Kabid Auditing.",
      doneBy: "evigo",
    },
  ];

  const postponedProductRows = [
    {
      no: 1,
      productId: 1,
      productName: "Produk Ikan A Lama",
      facilityId: 451,
      facilityName: "Evigo China Plant 1",
      postponedReason: "Need review labelling and packaging update",
    },
    {
      no: 2,
      productId: 2,
      productName: "Produk Ikan B Lama",
      facilityId: 1,
      facilityName: "PT Evigo Berjaya",
      postponedReason: "Pending additional supporting document",
    },
  ];

  const renderFilterValueControl = () => {
    switch (filterType) {
      case "notification-letter-type":
        return (
          <Select value={selectedNotificationLetterType} onValueChange={setSelectedNotificationLetterType}>
            <SelectTrigger className="w-[260px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="Select Notification Letter Type" />
            </SelectTrigger>
            <SelectContent>
              {notificationLetterTypeOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "reg-no-product-group":
        return (
          <Select value={selectedRegNoProductGroup} onValueChange={setSelectedRegNoProductGroup}>
            <SelectTrigger className="w-[620px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="Reg No. : 145437 - Product Group : Servis (Services)" />
            </SelectTrigger>
            <SelectContent>
              {regNoProductGroupOptions.map((option, index) => (
                <SelectItem key={option} value={String(index)}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "request-year":
        return (
          <Select defaultValue="2026">
            <SelectTrigger className="w-[180px] h-[42px] bg-white border-border text-foreground">
              <SelectValue placeholder="2026" />
            </SelectTrigger>
            <SelectContent>
              {requestYearOptions.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <input
            type="text"
            placeholder={
              filterType === "notification-letter-no"
                ? "Search Notification Letter No."
                : "Filter value"
            }
            className="h-[42px] w-[260px] rounded-md border border-border bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-0"
          />
        );
    }
  };

  const openDetailsMenu = () => setDetailMenuOpen(true);
  const closeDetailsMenu = () => setDetailMenuOpen(false);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[300px]">
            <TabsList className="h-[42px] bg-surface p-1 w-full flex">
              <TabsTrigger value="view" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">View by Data</TabsTrigger>
              <TabsTrigger value="history" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Activity History</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeTab === "view" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View by Data</span>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[300px] h-[42px] bg-white border-border text-foreground">
                  <SelectValue placeholder="Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  {notificationLetterFilterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">
                {notificationLetterFilterOptions.find((item) => item.value === filterType)?.label ?? "Notification Letter Type"}
              </span>
              {renderFilterValueControl()}
            </div>
          </div>
        )}
      </div>

      {activeTab === "view" ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[1500px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Current Process & Action</TableHead>
                <TableHead className="font-semibold text-foreground">Request Date</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter No.</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter Type</TableHead>
                <TableHead className="font-semibold text-foreground">Language</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-2 justify-center relative">
                      <div className="relative">
                        <Button
                          variant="table"
                          size="icon"
                          className="h-10 w-10 text-blue-600 bg-blue-50 hover:bg-blue-100"
                          onMouseEnter={openDetailsMenu}
                          onMouseLeave={closeDetailsMenu}
                          onClick={() => setDetailMenuOpen((prev) => !prev)}
                        >
                          <Eye className="h-5 w-5" />
                        </Button>

                        {detailMenuOpen && (
                          <div
                            className="absolute left-0 top-full z-20 mt-2 w-56 rounded-md border border-border bg-white shadow-xl"
                            onMouseEnter={openDetailsMenu}
                            onMouseLeave={closeDetailsMenu}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setDetailDialog("postponed");
                                closeDetailsMenu();
                              }}
                              className="flex w-full items-center justify-start px-3 py-2 text-left text-sm text-foreground hover:bg-slate-100"
                            >
                              Details Posponed Product
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setDetailDialog("disclaimer");
                                closeDetailsMenu();
                              }}
                              className="flex w-full items-center justify-start px-3 py-2 text-left text-sm text-foreground hover:bg-slate-100"
                            >
                              Details Disclaimer Reason
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-1 w-[130px]">
                        <Button variant="soft" className="h-7 text-[10px] font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">Download - ENG</Button>
                        <Button variant="soft" className="h-7 text-[10px] font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">Download - IDN</Button>
                      </div>
                    </div>
                    <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3 inline-flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                      Complete
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>KPP0283/SH/LPPOM/MUI/VII/2020</TableCell>
                <TableCell>{selectedNotificationLetterType.toUpperCase()}</TableCell>
                <TableCell>Indonesia</TableCell>
                <TableCell>35877</TableCell>
                <TableCell>Produk Biologi (Biological Products)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[1500px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground">No.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter No.</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter Type</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Activity</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Done By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityHistoryData.map((row) => (
                <TableRow key={row.no} className="align-top">
                  <TableCell>{row.no}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.letterNo}</TableCell>
                  <TableCell>{row.letterType}</TableCell>
                  <TableCell>{row.regNo}</TableCell>
                  <TableCell>{row.activity}</TableCell>
                  <TableCell className="text-right">{row.doneBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={detailDialog !== null} onOpenChange={(open) => !open && setDetailDialog(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
          <div className="flex items-center justify-between bg-[#5d8f4b] px-5 py-3 text-white">
            <h3 className="text-xl font-bold">
              {detailDialog === "postponed" ? "Postponed Product Details" : "Disclaimer Details"}
            </h3>
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setDetailDialog(null)}
                className="rounded-md p-1 text-white/90 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogClose>
          </div>

          <div className="px-5 py-4">
            {detailDialog === "postponed" ? (
              <>
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Notification Letter No.</p>
                    <p className="text-sm font-semibold">KPP0283/SH/LPPOM/MUI/VII/2020</p>
                  </div>
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Notification Letter Type</p>
                    <p className="text-sm font-semibold">SKPP</p>
                  </div>
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Reg No.</p>
                    <p className="text-sm font-semibold">35877</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border">
                  <div className="flex items-center justify-between bg-slate-50 px-4 py-3">
                    <span className="text-sm font-semibold">List of Product</span>
                    <div className="flex h-[36px] items-center gap-2 rounded-md border border-border bg-white px-3">
                      <span className="text-sm text-muted-foreground">Search :</span>
                      <input
                        type="text"
                        className="h-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <Table className="text-[11px] min-w-[900px]">
                    <TableHeader className="bg-[#0a5740] text-white">
                      <TableRow>
                        <TableHead className="font-semibold text-white">No.</TableHead>
                        <TableHead className="font-semibold text-white">Product ID</TableHead>
                        <TableHead className="font-semibold text-white">Product Name</TableHead>
                        <TableHead className="font-semibold text-white">Facility ID</TableHead>
                        <TableHead className="font-semibold text-white">Facility Name</TableHead>
                        <TableHead className="font-semibold text-white">Postponed Reason</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {postponedProductRows.map((row) => (
                        <TableRow key={row.no} className={row.no % 2 === 0 ? "bg-slate-100" : "bg-white"}>
                          <TableCell>{row.no}</TableCell>
                          <TableCell>{row.productId}</TableCell>
                          <TableCell>{row.productName}</TableCell>
                          <TableCell>{row.facilityId}</TableCell>
                          <TableCell>{row.facilityName}</TableCell>
                          <TableCell>{row.postponedReason}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Notification Letter No.</p>
                    <p className="text-sm font-semibold">KPP0283/SH/LPPOM/MUI/VII/2020</p>
                  </div>
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Notification Letter Type</p>
                    <p className="text-sm font-semibold">SKPP</p>
                  </div>
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Reg No.</p>
                    <p className="text-sm font-semibold">35877</p>
                  </div>
                  <div className="rounded-md border border-border bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Disclaimer Date</p>
                    <p className="text-sm font-semibold">05 February 2026</p>
                  </div>
                </div>

                <div className="rounded-md border border-border bg-slate-50 p-3">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">Disclaimer Reason</p>
                  <p className="text-sm font-semibold leading-6">
                    Product data is incomplete due to missing supporting documents and product composition details, therefore the application is postponed for completion.
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <PaginationFooter />
    </>
  );
}

function ListOfHalalDecree() {
  const [viewValue, setViewValue] = useState("all-halal-registration");

  const viewByDataOptions = [
    { value: "all-halal-registration", label: "All Halal Registration (Valid & Expired Certified)" },
    { value: "valid-certified", label: "Valid Certified Halal Registration" },
    { value: "expired-certified", label: "Expired Certified Halal Registration" },
  ];

  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex h-10 w-full max-w-[280px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input
            type="search"
            placeholder="Input some text..."
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold whitespace-nowrap">View by Data</span>
          <div className="flex items-center gap-3">
            <Select value={viewValue} onValueChange={setViewValue}>
              <SelectTrigger className="h-10 w-[420px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
                <SelectValue placeholder="Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                {viewByDataOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="h-10 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-semibold px-6">View</Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1800px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground">No.</TableHead>
              <TableHead className="font-semibold text-foreground">Process Status / Halal Decree</TableHead>
              <TableHead className="font-semibold text-foreground">Certification Agreement</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">STTD</TableHead>
              <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
              <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              <TableHead className="font-semibold text-foreground">BPJPH Product Type</TableHead>
              <TableHead className="font-semibold text-foreground">Application Type</TableHead>
              <TableHead className="font-semibold text-foreground">Halal Decree No.</TableHead>
              <TableHead className="font-semibold text-foreground">Period of Halal Decree</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={11} className="py-16 text-center text-sm font-medium text-muted-foreground">
                No data available in table
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <PaginationFooter />
    </>
  );
}

function ListOfHpasStatusCertificate() {
  const [viewValue, setViewValue] = useState("all-halal-registration");

  const viewByDataOptions = [
    { value: "all-halal-registration", label: "All Halal Registration (Valid & Expired Certified)" },
    { value: "valid-certified", label: "Valid Certified Halal Registration" },
    { value: "expired-certified", label: "Expired Certified Halal Registration" },
  ];

  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex h-10 w-full max-w-[280px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input
            type="search"
            placeholder="Input some text..."
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold whitespace-nowrap">View by Data</span>
          <div className="flex items-center gap-3">
            <Select value={viewValue} onValueChange={setViewValue}>
              <SelectTrigger className="h-10 w-[420px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
                <SelectValue placeholder="Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                {viewByDataOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="h-10 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-semibold px-6">View</Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1800px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground">No.</TableHead>
              <TableHead className="font-semibold text-foreground">Action</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Facility ID</TableHead>
              <TableHead className="font-semibold text-foreground">Facility Name</TableHead>
              <TableHead className="font-semibold text-foreground">HPAS No.</TableHead>
              <TableHead className="font-semibold text-foreground">HPAS Type</TableHead>
              <TableHead className="font-semibold text-foreground">Audit Results</TableHead>
              <TableHead className="font-semibold text-foreground">Fatwa Passed Date</TableHead>
              <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
              <TableHead className="font-semibold text-foreground">Valid End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <Button className="h-[30px] bg-[#0d6efd] hover:bg-[#0b5ed7] text-white text-[10px] font-semibold px-4">Download</Button>
              </TableCell>
              <TableCell>60361</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <PaginationFooter />
    </>
  );
}

function RegularReport() {
  const [activeTab, setActiveTab] = useState<"view" | "history">("view");
  const [filterType, setFilterType] = useState("reg-no-product-group");
  const [selectedRegNoProductGroup, setSelectedRegNoProductGroup] = useState("635466");

  const regularReportFilterOptions = [
    { value: "regular-report-no", label: "Regular Report No." },
    { value: "reg-no-product-group", label: "Reg No. and Product Group" },
    { value: "facility", label: "Facility" },
    { value: "report-year", label: "Report Year" },
  ];

  const regNoProductGroupOptions = [
    "635466 - Susu dan analognya",
    "635466 - Produk Susu dan Minuman (Dairy and Analogues)",
    "60365 - Ikan dan Produk Perikanan",
    "145437 - Servis (Services)",
  ];

  const facilityOptions = [
    "Facility ID 1 - PT Evigo Berjaya",
    "Facility ID 2 - Evigo China Plant 1",
    "Facility ID 3 - PT Maju Sejahtera",
  ];

  const renderFilterValueControl = () => {
    switch (filterType) {
      case "regular-report-no":
        return (
          <input
            type="text"
            placeholder="Search Regular Report No."
            className="h-10 w-[280px] rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        );
      case "facility":
        return (
          <Select defaultValue="facility-id-1">
            <SelectTrigger className="h-10 w-[280px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
              <SelectValue placeholder="Select Facility" />
            </SelectTrigger>
            <SelectContent>
              {facilityOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "report-year":
        return (
          <Select defaultValue="2026">
            <SelectTrigger className="h-10 w-[180px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
        );
      case "reg-no-product-group":
      default:
        return (
          <Select value={selectedRegNoProductGroup} onValueChange={setSelectedRegNoProductGroup}>
            <SelectTrigger className="h-10 w-[360px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
              <SelectValue placeholder="Select Reg No. and Product Group" />
            </SelectTrigger>
            <SelectContent>
              {regNoProductGroupOptions.map((option) => {
                const value = option.split(" - ")[0];
                return (
                  <SelectItem key={value} value={value}>
                    {option}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        );
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4">
          <div className="flex h-10 w-full max-w-[280px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "view" | "history")} className="w-[300px]">
            <TabsList className="h-[42px] bg-surface p-1 w-full flex">
              <TabsTrigger value="view" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">
                View by Data
              </TabsTrigger>
              <TabsTrigger value="history" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">
                Activity History
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeTab === "view" && (
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold whitespace-nowrap">View by Data</span>
            <div className="flex items-center gap-3">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="h-10 w-[230px] bg-surface border-transparent rounded-md text-secondary-foreground font-medium">
                  <SelectValue placeholder="Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  {regularReportFilterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {renderFilterValueControl()}
            </div>
          </div>
        )}
      </div>

      {activeTab === "view" ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[1500px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground text-center w-24">Action</TableHead>
                <TableHead className="font-semibold text-foreground">Report Date</TableHead>
                <TableHead className="font-semibold text-foreground">Regular Report No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Facility ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility Name</TableHead>
                <TableHead className="font-semibold text-foreground">Auditor Name</TableHead>
                <TableHead className="font-semibold text-foreground">Auditee Name</TableHead>
                <TableHead className="font-semibold text-foreground">Correction</TableHead>
                <TableHead className="font-semibold text-foreground text-center w-32">Current Process</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="table" size="icon" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl [&>button]:hidden">
                        <div className="bg-white rounded-lg">
                          <div className="flex items-center justify-between p-6 pb-2 border-b-0">
                            <h2 className="text-xl font-bold text-foreground">Regular Report Details</h2>
                            <DialogClose className="rounded-full p-2 bg-surface hover:bg-surface-hover transition-colors">
                              <X className="h-5 w-5 text-muted-foreground" />
                            </DialogClose>
                          </div>
                          <div className="p-6 pt-4 space-y-6 max-h-[80vh] overflow-y-auto">
                            {/* Grid Details */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Report Date</p>
                                <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Regular Report No.</p>
                                <p className="text-sm font-semibold text-foreground">47968</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Language</p>
                                <p className="text-sm font-semibold text-foreground">Indonesia</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Reg Status</p>
                                <p className="text-sm font-semibold text-foreground">LPPOM Co. Ltd.</p>
                              </div>
                              
                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Reg No. and Product Group</p>
                                <p className="text-sm font-semibold text-foreground">Reg No: 60365 - Product Group : Ikan dan Produk Perikanan</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Aplication Type</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Scheme</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">BPJPH Product Type</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Facility</p>
                                <p className="text-sm font-semibold text-foreground">ID : 1 - NAME : Facility A</p>
                              </div>

                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Address</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Start Date Internal Audit</p>
                                <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">End Date Internal Audit</p>
                                <p className="text-sm font-semibold text-foreground">30 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Auditor Name</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Auditee Name</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Corrective Action</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Report File</p>
                                <Button variant="brand" className="h-8 text-xs font-semibold px-4 mt-1 rounded-md bg-brand hover:bg-brand/90 text-white shadow-sm">
                                  Download Report
                                </Button>
                              </div>
                            </div>

                            {/* Memo Section */}
                            <div className="bg-surface rounded-xl p-6 border border-border">
                              <h3 className="text-lg font-bold text-foreground mb-4">Memo</h3>
                              
                              <div className="rounded-lg border border-border overflow-hidden bg-white">
                                <Table className="text-[12px]">
                                  <TableHeader className="bg-table-head">
                                    <TableRow>
                                      <TableHead className="font-semibold text-foreground w-20">Memo ID</TableHead>
                                      <TableHead className="font-semibold text-foreground">Description</TableHead>
                                      <TableHead className="font-semibold text-foreground w-32">Is Changed?</TableHead>
                                      <TableHead className="font-semibold text-foreground">Memo</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of Company Management that affects halal policy</span>
                                          <span className="text-muted-foreground">Perubahan Manajemen Halal yang berpengaruh terhadap kebijakan halal.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>2</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of Halal Assurance System (SOP, documents, Personnel, etc).</span>
                                          <span className="text-muted-foreground">Perubahan komponen Manual SJH (SOP, dokumen, personal, dll).</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>3</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of production facilities.</span>
                                          <span className="text-muted-foreground">Perubahan Lokasi Pabrik.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>4</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of materials (producer/supplier, type of material).</span>
                                          <span className="text-muted-foreground">Perubahan bahan (produsen/pemasok, tipe bahan, dll).</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>5</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of formula and development new product.</span>
                                          <span className="text-muted-foreground">Perubahan formula dan Pengembangan Produk Baru.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>

                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="table" size="icon" className="h-8 w-8 text-green-600 bg-green-50 hover:bg-green-100">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>47968</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell>Produk Biologi (Biological Products)</TableCell>
                <TableCell>1</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50 border border-blue-200 font-normal text-xs py-1 px-3 inline-flex w-full justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                    Open
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[800px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Regular Report No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Activity</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>47968</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell className="text-right">Hasan</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      
      <PaginationFooter />
    </>
  );
}
