
export enum UserRole {
  ADMIN = 'ADMIN', // Software Manager
  BUSINESS_OWNER = 'BUSINESS_OWNER',
  WORKER = 'WORKER'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
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
