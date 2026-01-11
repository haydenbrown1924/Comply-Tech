
export enum UserRole {
  ADMIN = 'ADMIN', // Software Manager
  BUSINESS_OWNER = 'BUSINESS_OWNER',
  WORKER = 'WORKER'
}

export type ModuleId = 'quoting' | 'scheduling' | 'assets' | 'labor' | 'materials' | 'safety' | 'business';

export interface BusinessConfig {
  id: string;
  name: string;
  ownerEmail: string;
  enabledModules: ModuleId[];
  status: 'Active' | 'Pending' | 'Suspended';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  businessId?: string;
  businessName?: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  description: string;
  status: 'New' | 'Quoted' | 'Scheduled' | 'Closed';
  date: string;
}

export interface Asset {
  id: string;
  name: string;
  serialNumber: string;
  lastService: string;
  status: 'Operational' | 'Maintenance' | 'Decommissioned';
}

export interface Job {
  id: string;
  title: string;
  client: string;
  assignedTo: string[];
  status: 'Pending' | 'In Progress' | 'Completed';
  scheduledDate: string;
}

export interface SafetyRecord {
  id: string;
  type: 'Incident' | 'Injury' | 'Hazard' | 'Safety Audit';
  description: string;
  date: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

export const ALL_MODULES: { id: ModuleId; name: string }[] = [
  { id: 'business', name: 'Business Hub' },
  { id: 'quoting', name: 'Quoting & Scoping' },
  { id: 'scheduling', name: 'Job Scheduling' },
  { id: 'assets', name: 'Asset Register' },
  { id: 'labor', name: 'Labor & Payroll' },
  { id: 'materials', name: 'Materials' },
  { id: 'safety', name: 'Compliance & Safety' },
];
