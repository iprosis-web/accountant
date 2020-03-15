import { customer } from './customer';
import { contact } from './contact';

export class FullCustomerModel{
    customer: customer;
    contact: contact;
    newCustomerId: string = null
    displayEdit?: boolean = true
    clickableEdit?: boolean = true
    displayDelete?: boolean = true
    clickableDelete?: boolean = true
    displayAdd?: boolean = false
    clickableAdd?: boolean = false

}