import { contact } from './contact';

export class customer {
    
    customerId?: string;  
    businessId?: string;
    companyName?: string;
    contactID?: number;
    createdDate?: Date;
    createdDateNum?: number;
    isActive?: boolean = true;
    contact?: contact;
}