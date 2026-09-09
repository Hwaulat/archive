import { createFileRoute, Link } from '@tanstack/react-router';
import { ArchiveIcon, ChevronRight, ChevronLeft, Search } from 'lucide-react';
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute('/certification-data-details')({
  component: CertificationDataDetailsPage,
});

// Mock Data for Tabs
const halalDocuments = [
  { no: 1, docId: 2, name: 'HAS Manual (for new, development, with HAS Status B, and renewal registration)', status: 'Uploaded' },
  { no: 2, docId: 3, name: 'HAS Status or HAS Certificate (for development/renewal registration)', status: 'Uploaded' },
  { no: 3, docId: 4, name: 'Flow process chart of halal registered product', status: 'Uploaded' },
  { no: 4, docId: 5, name: 'Statement of porcine free facility (for new applicant, or new facility)', status: 'Uploaded' },
  { no: 5, docId: 6, name: 'Address list of all production facility (include maklon/toll, warehouse, pre-production facility and head office)', status: 'Uploaded' },
  { no: 6, docId: 12, name: 'Evidence of Internal Audit or Gap Analysis Results (GA 1) (for new registrations or new facilities)', status: 'Uploaded' },
  { no: 7, docId: 13, name: 'Business license (only for Indonesian companies) NIB', status: 'Uploaded' },
  { no: 8, docId: 16, name: 'HACCP/GMP/Safety Management System certificate and the result of last audit...', status: 'Uploaded' },
  { no: 9, docId: 20, name: 'Picture/design/packaging label/artwork of certified products...', status: 'Uploaded' },
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
        <Link to="/customer-details" className="font-medium text-slate-500 transition-colors hover:text-slate-900">
          Company Profile Details
        </Link>
        <ChevronRight className="h-4 w-4 text-slate-400" />
        <span className="font-semibold text-foreground">{currentLabel}</span>
      </div>
      {rightContent ?? <span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>}
    </nav>
  );
}

function CertificationDataDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-6">
      <AppHeader title="Archive" icon={ArchiveIcon} />
      
      <div className="mx-4 mt-4 space-y-4">
        <PageBreadcrumb
          currentLabel="Certification Data Details"
          rightContent={<span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>}
        />

        <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b">
            <Link to="/customer-details">
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Certification Data Details</h1>
          </div>

          <div className="p-6 space-y-6">
            
            {/* Halal Registration Details */}
            <div className="bg-card rounded-lg border border-border p-6 pb-8">
              <h3 className="text-base font-bold mb-4">Halal Registration Details</h3>
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-1">Current Process</p>
                <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50 text-[10px]">● Waiting Approval Registration</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4 mt-6">
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Reg No.</p>
                   <p className="font-semibold text-sm">186592</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Reg Date</p>
                   <p className="font-semibold text-sm">29 June 2026</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Completed Date</p>
                   <p className="font-semibold text-sm">29 June 2026</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Reg Type</p>
                   <p className="font-semibold text-sm">Restaurant</p>
                </div>
                
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Application Type</p>
                   <p className="font-semibold text-sm">1. Halal Product Audit</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Reg Status</p>
                   <p className="font-semibold text-sm">New</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Type of Product</p>
                   <p className="font-semibold text-sm">Retail</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Type of Permit</p>
                   <p className="font-semibold text-sm">-</p>
                </div>

                <div className="md:col-span-4">
                   <p className="text-xs text-muted-foreground mb-1">Product Group</p>
                   <p className="font-semibold text-sm">Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)</p>
                </div>

                <div className="md:col-span-4">
                   <p className="text-xs text-muted-foreground mb-1">BPJPH Product Type</p>
                   <p className="font-semibold text-sm">Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)</p>
                </div>

                <div>
                   <p className="text-xs text-muted-foreground mb-1">Total of Employee</p>
                   <p className="font-semibold text-sm">0 Person</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Production Capacity</p>
                   <p className="font-semibold text-sm">0/year</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Number of Work Shifts</p>
                   <p className="font-semibold text-sm">0 /Day</p>
                </div>
                <div>
                   <p className="text-xs text-muted-foreground mb-1">Type of Permit</p>
                   <p className="font-semibold text-sm">-</p>
                </div>
              </div>
            </div>

            {/* Registration Review */}
            <div className="bg-card rounded-lg border border-border p-6 pb-8">
              <h3 className="text-base font-bold mb-4">Registration Review</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                  <p className="font-semibold text-sm">-</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Pre-Assessment Status</p>
                  <p className="font-semibold text-sm">Yes</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Scope</p>
                  <p className="font-semibold text-sm">0</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Audit Type</p>
                  <p className="font-semibold text-sm">On Site</p>
                </div>
                
                <div className="md:col-span-4">
                  <p className="text-xs text-muted-foreground mb-1">HAS Note</p>
                  <p className="font-semibold text-sm">-</p>
                </div>
                
                <div className="md:col-span-4">
                  <p className="text-xs text-muted-foreground mb-1">Auditing Note</p>
                  <p className="font-semibold text-sm">-</p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Samples Status</p>
                  <p className="font-semibold text-sm">No</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Lab Analysis Result</p>
                  <p className="font-semibold text-sm">Not OK</p>
                </div>
              </div>
            </div>

            <Accordion type="multiple" defaultValue={["audit", "bpjph", "certification"]} className="space-y-4">
              {/* Audit Assignment Details */}
              <AccordionItem value="audit" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                  Audit Assignment Details
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2">
                  <div className="flex flex-wrap gap-4 justify-between mb-4">
                    <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 border border-border">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span className="text-border">|</span>
                      <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table className="text-[11px] min-w-[1200px]">
                      <TableHeader className="bg-table-head">
                        <TableRow>
                          <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                          <TableHead className="font-semibold text-foreground w-16">Action</TableHead>
                          <TableHead className="font-semibold text-foreground">Audit<br/>Schedule ID</TableHead>
                          <TableHead className="font-semibold text-foreground">Mandatory<br/>Letter</TableHead>
                          <TableHead className="font-semibold text-foreground">Auditor</TableHead>
                          <TableHead className="font-semibold text-foreground">Facility</TableHead>
                          <TableHead className="font-semibold text-foreground">Facility Address</TableHead>
                          <TableHead className="font-semibold text-foreground">First<br/>Confirmation Date</TableHead>
                          <TableHead className="font-semibold text-foreground">Last<br/>Confirmation Date</TableHead>
                          <TableHead className="font-semibold text-foreground">Confirmation<br/>Status</TableHead>
                          <TableHead className="font-semibold text-foreground">Audit Schedule Period<br/><span className="font-normal flex justify-between mt-1"><span>Start Date</span><span>End Date</span></span></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={11} className="text-center py-6 text-muted-foreground">
                            No Data Available in Table
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <PaginationFooter />
                </AccordionContent>
              </AccordionItem>

              {/* BPJPH Registration Details */}
              <AccordionItem value="bpjph" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                  BPJPH Registration Details
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2">
                  <h3 className="text-sm font-bold mb-4">Registration Review</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                      <p className="font-semibold text-sm">-</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">STTD No.</p>
                      <p className="font-semibold text-sm">SH1987-1-000002</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">BPJPH Reg Status</p>
                      <p className="font-semibold text-sm">-</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">BPJPH Reg Date</p>
                      <p className="font-semibold text-sm">29 June 2026</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Total Days of Process</p>
                      <p className="font-semibold text-sm">6498</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Certification Data */}
              <AccordionItem value="certification" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                  Certification Data
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2">
                  
                  <Tabs defaultValue="documents" className="w-full">
                    {/* Visual Tab Navigation representing the wizard-like steps */}
                    <div className="overflow-x-auto pb-4">
                      <TabsList className="bg-transparent flex flex-wrap items-center justify-start h-auto min-w-max p-0 w-full gap-3 px-2 py-4 relative">
                        {/* Connecting Line behind tabs */}
                        <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gray-200 -z-10 -translate-y-4"></div>
                        
                        <TabsTrigger value="documents" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/halal-docs-icon.png" alt="Halal Documents" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Halal Documents</span>
                        </TabsTrigger>
                        
                        <TabsTrigger value="headoffice" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/head-office-icon.png" alt="Head Office" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Head Office</span>
                        </TabsTrigger>

                        <TabsTrigger value="product" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/product-icon.png" alt="Product" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Product</span>
                        </TabsTrigger>
                        
                        <TabsTrigger value="material" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/material-icon.png" alt="Material" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Material</span>
                        </TabsTrigger>
                        
                        <TabsTrigger value="matrix" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/matrix-icon.png" alt="Matrix & Material List" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Matrix & Material List</span>
                        </TabsTrigger>
                        
                        <TabsTrigger value="questionnaire" className="z-10 flex items-center gap-3 rounded-xl border border-transparent bg-white p-3 data-[state=active]:border-blue-100 data-[state=active]:bg-blue-50 data-[state=active]:shadow-sm">
                          <img src="/questionnaire-icon.png" alt="Questionnaire" className="h-10 w-10 shrink-0 object-contain" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/png"} />
                          <span className="text-xs font-medium whitespace-nowrap">Questionnaire</span>
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <div className="mt-6">
                      {/* Halal Documents Tab */}
                      <TabsContent value="documents">
                        <h3 className="text-base font-bold mb-4">Halal Document</h3>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <Table className="text-[11px] min-w-[800px]">
                            <TableHeader className="bg-table-head">
                              <TableRow>
                                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                                <TableHead className="font-semibold text-foreground w-24">Document ID</TableHead>
                                <TableHead className="font-semibold text-foreground">Document Name</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Download Template File</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Status</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Download Uploaded File</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {halalDocuments.map((doc) => (
                                <TableRow key={doc.no}>
                                  <TableCell>{doc.no}</TableCell>
                                  <TableCell>{doc.docId}</TableCell>
                                  <TableCell className="max-w-[400px]">
                                    {doc.name.split('\n').map((line, i) => (
                                      <p key={i} className={i > 0 ? "text-muted-foreground mt-1" : ""}>{line}</p>
                                    ))}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <span className="text-blue-500 hover:underline cursor-pointer italic">Download</span>
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-normal text-[10px]">● Uploaded</Badge>
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <span className="text-blue-500 hover:underline cursor-pointer italic">Document.pdf</span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </TabsContent>

                      {/* Head Office Tab */}
                      <TabsContent value="headoffice">
                        <h3 className="text-base font-bold mb-4">Head Office (HO)</h3>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <Table className="text-[11px] min-w-[800px]">
                            <TableHeader className="bg-table-head">
                              <TableRow>
                                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                                <TableHead className="font-semibold text-foreground w-16">Action</TableHead>
                                <TableHead className="font-semibold text-foreground">Head Office<br/>(HO ID)</TableHead>
                                <TableHead className="font-semibold text-foreground">Head Office (HO) Name</TableHead>
                                <TableHead className="font-semibold text-foreground">Address</TableHead>
                                <TableHead className="font-semibold text-foreground">City</TableHead>
                                <TableHead className="font-semibold text-foreground">Country</TableHead>
                                <TableHead className="font-semibold text-foreground">Phone</TableHead>
                                <TableHead className="font-semibold text-foreground">Last HPAS Information</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell colSpan={9} className="text-center py-6 text-muted-foreground">
                                  No Data Available in Table
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </TabsContent>

                      {/* Product Tab (with sub-tabs) */}
                      <TabsContent value="product">
                        <h3 className="text-base font-bold mb-4">Product</h3>
                        <Tabs defaultValue="menu" className="w-full">
                          <div className="flex flex-wrap gap-4 justify-between items-center mb-4">
                            <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 border border-border">
                              <Search className="h-4 w-4 text-muted-foreground" />
                              <span className="text-border">|</span>
                              <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <TabsList>
                                <TabsTrigger value="menu">Product - Menu</TabsTrigger>
                                <TabsTrigger value="facility">Product - Facility</TabsTrigger>
                              </TabsList>
                            </div>
                            
                            <Button className="bg-[#a855f7] hover:bg-[#9333ea] text-white">Forbidden Product Name</Button>
                          </div>
                          
                          {/* PRODUCT - MENU TAB */}
                          <TabsContent value="menu" className="m-0 mt-4">
                            <div className="overflow-x-auto rounded-lg border border-border">
                              <Table className="text-[11px] min-w-[1000px]">
                                <TableHeader className="bg-table-head">
                                  <TableRow>
                                    <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                                    <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                                    <TableHead className="font-semibold text-foreground">Address</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">Product Status</TableHead>
                                    <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                                    <TableHead className="font-semibold text-foreground">Scheme</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">Head Office<br/>(HO ID)</TableHead>
                                    <TableHead className="font-semibold text-foreground">Head Office<br/>(HO Name)</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {[1,2,3,4,5,6,7,8,9,10].map((id) => (
                                    <TableRow key={id}>
                                      <TableCell className="text-center">{id}</TableCell>
                                      <TableCell>UBN Biskut G&M {id}</TableCell>
                                      <TableCell>Address</TableCell>
                                      <TableCell className="text-center">
                                        {id <= 2 ? (
                                          <Badge className="bg-blue-50 text-blue-600 border border-blue-200 font-normal shadow-none">● New</Badge>
                                        ) : (
                                          <Badge className="bg-green-50 text-green-600 border border-green-200 font-normal shadow-none">● Published</Badge>
                                        )}
                                      </TableCell>
                                      <TableCell>Others (Lain-lain)</TableCell>
                                      <TableCell>Indonesia Market</TableCell>
                                      <TableCell className="text-center">{id}</TableCell>
                                      <TableCell>HO Name</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                            <PaginationFooter />
                          </TabsContent>
                          
                          {/* PRODUCT - FACILITY TAB */}
                          <TabsContent value="facility" className="m-0 mt-4">
                            <div className="overflow-x-auto rounded-lg border border-border">
                              <Table className="text-[11px] min-w-[1000px]">
                                <TableHeader className="bg-table-head">
                                  <TableRow>
                                    <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                                    <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">Product Status</TableHead>
                                    <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">Sub Product Category</TableHead>
                                    <TableHead className="font-semibold text-foreground">Scheme</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">Head Office<br/>(HO ID)</TableHead>
                                    <TableHead className="font-semibold text-foreground">Head Office<br/>(HO Name)</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {[1,2,3,4,5,6,7,8,9,10].map((id) => (
                                    <TableRow key={id}>
                                      <TableCell className="text-center">{id}</TableCell>
                                      <TableCell>UBN Biskut G&M {id}</TableCell>
                                      <TableCell className="text-center">
                                        {id <= 2 ? (
                                          <Badge className="bg-blue-50 text-blue-600 border border-blue-200 font-normal shadow-none">● New</Badge>
                                        ) : (
                                          <Badge className="bg-green-50 text-green-600 border border-green-200 font-normal shadow-none">● Published</Badge>
                                        )}
                                      </TableCell>
                                      <TableCell>Others (Lain-lain)</TableCell>
                                      <TableCell className="text-center">-</TableCell>
                                      <TableCell>Indonesia Market</TableCell>
                                      <TableCell className="text-center">{id}</TableCell>
                                      <TableCell>HO Name</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                            <PaginationFooter />
                          </TabsContent>
                        </Tabs>
                      </TabsContent>

                      {/* Material Tab */}
                      <TabsContent value="material">
                        <h3 className="text-base font-bold mb-4">Material</h3>
                        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 border border-border mb-4">
                          <Search className="h-4 w-4 text-muted-foreground" />
                          <span className="text-border">|</span>
                          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <Table className="text-[11px] min-w-[1000px]">
                            <TableHeader className="bg-table-head">
                              <TableRow>
                                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                                <TableHead className="font-semibold text-foreground">Material ID</TableHead>
                                <TableHead className="font-semibold text-foreground">Internal Code</TableHead>
                                <TableHead className="font-semibold text-foreground">Material Name</TableHead>
                                <TableHead className="font-semibold text-foreground">Material Type</TableHead>
                                <TableHead className="font-semibold text-foreground">Material Information</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Upload Status</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Download File</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                                  No Data Available in Table
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                          <div>10 Rows</div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronsLeft className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronLeft className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 bg-blue-50 text-blue-600 border-blue-200">1</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">2</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">3</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronRight className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronsRight className="h-3 w-3" /></Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>Rows per page</span>
                              <select className="border border-border rounded px-2 py-1 bg-transparent">
                                <option>10</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Matrix & Material List Tab */}
                      <TabsContent value="matrix">
                        <h3 className="text-base font-bold mb-4">Matrix & Material List</h3>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <Table className="text-[11px] min-w-[800px]">
                            <TableHeader className="bg-table-head">
                              <TableRow>
                                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                                <TableHead className="font-semibold text-foreground">Download Template File</TableHead>
                                <TableHead className="font-semibold text-foreground text-center">Upload Status</TableHead>
                                <TableHead className="font-semibold text-foreground">Download Uploaded File</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>
                                  <span className="text-blue-500 hover:underline cursor-pointer italic">Download</span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className="bg-red-50 text-red-500 border border-red-200 font-normal text-[10px]">● Not Uploaded</Badge>
                                </TableCell>
                                <TableCell>-</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                          <div>10 Rows</div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronsLeft className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronLeft className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 bg-blue-50 text-blue-600 border-blue-200">1</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">2</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">3</Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronRight className="h-3 w-3" /></Button>
                              <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronsRight className="h-3 w-3" /></Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>Rows per page</span>
                              <select className="border border-border rounded px-2 py-1 bg-transparent">
                                <option>10</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Questionnaire Tab */}
                      <TabsContent value="questionnaire">
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <Table className="text-[11px] min-w-[800px]">
                            <TableHeader className="bg-table-head">
                              <TableRow>
                                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                                <TableHead className="font-semibold text-foreground w-32">Questionnaire ID</TableHead>
                                <TableHead className="font-semibold text-foreground">Questionnaire</TableHead>
                                <TableHead className="font-semibold text-foreground text-center w-24">Answer</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>12</TableCell>
                                <TableCell>
                                  <p className="font-medium">Is this restaurant a franchise restaurant?</p>
                                  <p className="text-muted-foreground italic">Apakah restoran yang didaftarkan termasuk restoran dengan sistem franchise?</p>
                                </TableCell>
                                <TableCell className="text-center">Yes</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>13</TableCell>
                                <TableCell>
                                  <p className="font-medium">Have all outlets with the same name in Indonesia already been registered in this application?</p>
                                  <p className="text-muted-foreground italic">Apakah semua outlet dengan nama yang sama di Indonesia sudah didaftarkan untuk disertifikasi halal?</p>
                                </TableCell>
                                <TableCell className="text-center">Yes</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>3</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                  <p className="font-medium">Have all the menus sold, including the consignment menu already been registered?</p>
                                  <p className="text-muted-foreground italic">Apakah semua menu yang dijual, termasuk menu konsinyasi sudah didaftarkan?</p>
                                </TableCell>
                                <TableCell className="text-center">Yes</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>4</TableCell>
                                <TableCell>15</TableCell>
                                <TableCell>
                                  <p className="font-medium">Do all facilities free from porcine?</p>
                                  <p className="text-muted-foreground italic">Apakah seluruh fasilitas yang digunakan bebas dari babi?</p>
                                </TableCell>
                                <TableCell className="text-center">Yes</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </TabsContent>
                    </div>

                  </Tabs>

                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

// Needed to make ChevronLeft, ChevronsLeft, ChevronsRight work properly
// Adding them manually because they are missing from some imports
function ChevronsLeft(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>
}
function ChevronsRight(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m13 17 5-5-5-5"/><path d="m6 17 5-5-5-5"/></svg>
}

function PaginationFooter() {
  return (
    <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
      <div>10 Rows</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronsLeft className="h-3 w-3" /></Button>
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground" disabled><ChevronLeft className="h-3 w-3" /></Button>
          <Button variant="outline" size="icon" className="h-7 w-7 bg-blue-50 text-blue-600 border-blue-200">1</Button>
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">2</Button>
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground disabled:opacity-50">3</Button>
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronRight className="h-3 w-3" /></Button>
          <Button variant="outline" size="icon" className="h-7 w-7 text-muted-foreground"><ChevronsRight className="h-3 w-3" /></Button>
        </div>
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="border border-border rounded px-2 py-1 bg-transparent">
            <option>10</option>
          </select>
        </div>
      </div>
    </div>
  );
}
