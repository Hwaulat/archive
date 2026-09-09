import { createFileRoute, Link } from '@tanstack/react-router';
import { X, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute('/update-company-profile')({
  component: UpdateCompanyProfilePage,
});

function UpdateCompanyProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#81b272] px-6 py-4">
        <h1 className="text-xl font-bold text-white">Update Company Profile</h1>
        <Link to="/customer-details">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#6f9e61]">
            <X className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="p-6 max-w-6xl mx-auto space-y-8">
        
        {/* Company Profile Section */}
        <section>
          <div className="bg-[#81b272] px-4 py-2 mb-6">
            <h2 className="text-white font-bold text-lg">Company Profile</h2>
          </div>
          
          <div className="grid grid-cols-[250px_1fr] gap-x-8 gap-y-6 items-start">
            <Label className="text-sm font-semibold pt-3 text-slate-700">Office Status</Label>
            <Select defaultValue="kci">
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Select office status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kci">Kantor Cabang Indonesia - LPPOM DKI Jakarta</SelectItem>
              </SelectContent>
            </Select>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Branch</Label>
            <div className="space-y-1">
              <Select defaultValue="pusat">
                <SelectTrigger className="bg-slate-50">
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pusat">Code : 00 - Name : Pusat (Headquarter)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-orange-500 font-medium">Information :</p>
              <p className="text-sm text-slate-600">Only user role "Business Support", "Marketing &amp; Networking", "Helpdesk", and Post Audit can update branch data.</p>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Company ID</Label>
            <Input defaultValue="22" readOnly className="bg-slate-100" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">Company Name</Label>
            <div className="space-y-1">
              <Input defaultValue="Evigo" className="bg-slate-50" />
              <p className="text-sm text-orange-500 font-medium">Information :</p>
              <p className="text-sm text-slate-600">To write down complete company name which will be appeared on Halal Decree.</p>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Client Priority Status Based On Scheduling</Label>
            <Select defaultValue="priority">
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Address</Label>
            <div className="space-y-1">
              <Textarea defaultValue="Jl. Pemuda No.5, Bogor, Indonesia, 23166" className="bg-slate-50 min-h-[80px]" />
              <p className="text-sm text-orange-500 font-medium">Information :</p>
              <p className="text-sm text-slate-600">To write down complete address which will be appeared on Halal Decree, including city, province, country, zip code (if any).</p>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">City</Label>
            <Input defaultValue="Bogor" className="bg-slate-50" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">Country</Label>
            <Select defaultValue="indonesia">
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indonesia">Indonesia</SelectItem>
              </SelectContent>
            </Select>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Zip Code</Label>
            <Input defaultValue="1615890123" className="bg-slate-50" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">Phone No.</Label>
            <Input defaultValue="+62251 8660472" className="bg-slate-50" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">Fax No.</Label>
            <Input defaultValue="+62251 8660473" className="bg-slate-50" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">Company Email</Label>
            <Input defaultValue="a3.include@gmail.com" className="bg-slate-50" />

            <Label className="text-sm font-semibold pt-3 text-slate-700">NPWP/NIK</Label>
            <div className="space-y-1">
              <Input defaultValue="012345678011" className="bg-slate-50" />
              <p className="text-sm text-orange-500 font-medium">Information :</p>
              <p className="text-sm text-slate-600">Only for Indonesia Company.</p>
            </div>
          </div>
        </section>

        {/* PIC Data Section */}
        <section>
          <div className="border-b-2 border-[#81b272] mb-6 pb-2">
            <h2 className="text-[#81b272] font-bold text-lg">Person In Charge (PIC) Data</h2>
          </div>
          
          <div className="grid grid-cols-[250px_1fr] gap-x-8 gap-y-4 items-center">
            <Label className="text-sm font-semibold text-slate-700">PIC Name</Label>
            <Input defaultValue="Cinta Aja" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">PIC Title</Label>
            <Input defaultValue="QC Manager" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">PIC Phone No.</Label>
            <Input defaultValue="12 300" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">PIC Mobile Phone No.</Label>
            <Input defaultValue="12 300" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">PIC Email</Label>
            <Input defaultValue="a3.include@gmail.com" className="bg-slate-50" />
          </div>
        </section>

        {/* CP Data Section */}
        <section>
          <div className="border-b-2 border-[#81b272] mb-6 pb-2">
            <h2 className="text-[#81b272] font-bold text-lg">Contact Person (CP) Data</h2>
          </div>
          
          <div className="grid grid-cols-[250px_1fr] gap-x-8 gap-y-4 items-center">
            <Label className="text-sm font-semibold text-slate-700">CP Name</Label>
            <Input defaultValue="Evie Tamala" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">CP Title</Label>
            <Input defaultValue="KAHI" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">CP Phone No.</Label>
            <Input defaultValue="12 300" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">CP Mobile Phone No.</Label>
            <Input defaultValue="12 30 0" className="bg-slate-50" />
            
            <Label className="text-sm font-semibold text-slate-700">CP Email</Label>
            <Input defaultValue="maqhfirahulya@gmail.com" className="bg-slate-50" />
          </div>
        </section>

        {/* Company Account Section */}
        <section>
          <div className="bg-[#81b272] px-4 py-2 mb-6">
            <h2 className="text-white font-bold text-lg">Company Account</h2>
          </div>
          
          <div className="grid grid-cols-[250px_1fr] gap-x-8 gap-y-6 items-start">
            <Label className="text-sm font-semibold pt-3 text-slate-700">User ID</Label>
            <Input defaultValue="147" readOnly className="bg-slate-100" />
            
            <Label className="text-sm font-semibold pt-3 text-slate-700">Username</Label>
            <div className="space-y-1">
              <Input defaultValue="evigo" className="bg-slate-100" readOnly />
              <p className="text-sm text-orange-500 font-medium">Information :</p>
              <div className="text-sm text-slate-600 pl-4 space-y-1">
                <p>1. Username length minimum 5 characters and maximum 50 characters.</p>
                <p>2. Username just can contain letters (case sensitive) / numbers / underscores.</p>
              </div>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Role Type</Label>
            <Select defaultValue="full-service">
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Select role type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-service">Customer - Full Service</SelectItem>
              </SelectContent>
            </Select>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Password</Label>
            <div className="space-y-1">
              <div className="relative">
                <Input type="password" placeholder="Password" className="bg-slate-50 pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-orange-500 font-medium pt-1">Information :</p>
              <div className="text-sm text-slate-600 pl-4 space-y-1">
                <p>1. Password length minimum 8 characters and maximum 12 characters.</p>
                <p>2. Password must be contain combination of :</p>
                <ul className="pl-4 space-y-1 text-green-600 font-medium">
                  <li>✓ uppercase &amp; lowercase letters</li>
                  <li>✓ number</li>
                  <li>✓ symbol</li>
                </ul>
              </div>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Retype Password</Label>
            <div className="relative">
              <Input type="password" placeholder="Retype Password" className="bg-slate-50 pr-10" />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                <Eye className="h-4 w-4" />
              </button>
            </div>

            <Label className="text-sm font-semibold pt-3 text-slate-700">Account Activation Status</Label>
            <Select defaultValue="active">
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Select activation status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className="pb-8">
          <Button className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white px-8">Update</Button>
        </div>

      </div>
    </div>
  );
}
