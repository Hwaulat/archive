import { createFileRoute, Link } from '@tanstack/react-router';
import { ArchiveIcon, ChevronRight, Save, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/app-header';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/facility-head-office-edit')({
  component: FacilityHeadOfficeEditPage,
});

const facilityDetails = {
  id: '4749',
  name: 'Evigo China Plant 1',
  address: 'Jl. Wijaya Kusuma VIII No. 10 RT 02 RW 14, Kota Bogor, Indonesia',
  city: 'Kota Bogor',
  country: 'Indonesia',
  zipCode: '16112',
  phone: '+6282124057273',
  fax: '-',
  email: 'hardi.kurnia@halalmui.org',
  picName: 'Hardi',
  picTitle: 'Mr',
  picPhone: '+6282124057273',
  picMobile: '+6282124057273',
  picEmail: 'hardi.kurnia@halalmui.org',
  contactName: 'Hardi',
  contactTitle: 'Mr',
  contactPhone: '+6282124057273',
  contactMobile: '+6282124057273',
  contactEmail: 'hardi.kurnia@halalmui.org',
};

function InputField({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <input
        defaultValue={value}
        className="h-[44px] w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-0 focus:border-primary"
      />
    </label>
  );
}

function TextAreaField({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <textarea
        defaultValue={value}
        rows={4}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}

function FacilityHeadOfficeEditPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-8">
      <AppHeader title="Archive" />

      <div className="mx-4 mt-4 space-y-4">
        <nav aria-label="Breadcrumb" className="flex items-center justify-between rounded-lg bg-card px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <ArchiveIcon className="h-4 w-4 text-slate-500" />
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/archive" className="font-medium text-slate-500 hover:text-slate-900">
              Archive
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/customer-details" className="font-medium text-slate-500 hover:text-slate-900">
              Customer Details
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-foreground">Edit Facility / Head Office</span>
          </div>
        </nav>

        <section className="rounded-lg bg-card p-6">
          <div className="mb-6 flex items-center gap-3">
            <Link to="/customer-details">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h2 className="font-display text-2xl font-bold text-foreground">Edit Facility / Head Office</h2>
            <div className="ml-auto flex items-center gap-2">
              <Button className="gap-2 bg-[#8b5cf6] text-white hover:bg-[#7c3aed]">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputField label="Facility / Head Office ID" value={facilityDetails.id} />
            <InputField label="Facility / Head Office Name" value={facilityDetails.name} />
            <div className="md:col-span-2">
              <TextAreaField label="Address" value={facilityDetails.address} />
            </div>
            <InputField label="City" value={facilityDetails.city} />
            <InputField label="Country" value={facilityDetails.country} />
            <InputField label="ZIP Code" value={facilityDetails.zipCode} />
            <InputField label="Phone No." value={facilityDetails.phone} />
            <InputField label="Fax No." value={facilityDetails.fax} />
            <InputField label="Facility / Head Office Email" value={facilityDetails.email} />
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-4 text-xl font-bold text-foreground">Person in Charge</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField label="Name" value={facilityDetails.picName} />
              <InputField label="Title" value={facilityDetails.picTitle} />
              <InputField label="Phone No." value={facilityDetails.picPhone} />
              <InputField label="Mobile Phone No." value={facilityDetails.picMobile} />
              <div className="md:col-span-2">
                <InputField label="Email" value={facilityDetails.picEmail} />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-4 text-xl font-bold text-foreground">Contact Person</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField label="Name" value={facilityDetails.contactName} />
              <InputField label="Title" value={facilityDetails.contactTitle} />
              <InputField label="Phone No." value={facilityDetails.contactPhone} />
              <InputField label="Mobile Phone No." value={facilityDetails.contactMobile} />
              <div className="md:col-span-2">
                <InputField label="Email" value={facilityDetails.contactEmail} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link to="/customer-details">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
