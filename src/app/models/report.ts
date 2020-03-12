import { NumberValueAccessor } from '@angular/forms/src/directives';

export class reports {
    id: number;
    customerId: string;
    reportDate: Date;
    creatDate: Date;
    status: number;
    indication: number;
    comment: string;
    isActive?: boolean = true;
    arrivedToOffice?: Date;
    reportStartDate?: Date;
    reportLastChangeDate?: Date;
    reportEndDate?: Date;
    reportHandler?: string;
    reportNumber?: number;
    pcnRequirement?: boolean;
    pcnReportDate?: Date;
    deductions?: number;
    //מחזור חייב - A
    requiredCycleVal?: number;
    
    requiredCapitalCycleFee?: number;
    exemptCycleFee?: number;
    exemptCapitalCycleFee?: number;
    addedValueFee?: number;
    addedValueKFee?: number;
    deductionsFee?: number;
    downPaymentPercentage?: number;
    personalInvoiceCycleFee?: number;
    generalCycleVat?: number;
    vatPayment?: number;
    generalRequiredCycleFee?: number;
    downPaymentsCycleFee?: number;
    calculatedDownPayment?: number;
    totalDeductions?: number;
    vatValue?: number;
    actualDownPaymentsFee?: number;
    incomeTaxDeductions?: number;
    incomeTaxDownPaymentsVal?: number;
    incomeTaxDeductionsVal?: number;
    nationalInsuranceDownPaymentsVal?: number;
    nationalInsuranceDeductionsVal?: number;
    contractorsVal?: number;
    leaseVal?: number;
    vatReportPeriodType?: number;
    incomeTaxDownPaymentsPeriodType?: number;
    incomeTaxDeductionsPeriodType?: number;
    nationalInsuranceDownPaymentsPeriodType?: number;
    nationalInsuranceDeductionsPeriodType?: number;
    contractorsEmployerPeriodType?: number;
    leasePaymentPeriodType?: number;
    vatAppointedDate?: Date;
    incomeTaxDeductionsDate?: Date;
    incomeTaxDownPaymentAppointedDate?: Date;
    incomeTaxSalaries?: number;
    incomeTaxWorkers?: number;
    lease?: number;
    contractors?: number;
    payrollExpenses?: number;
    workers?: number;
    totalContractors?: number;
    salariesVat?: number;
    leaseVat?: number;
    contractorsVat?: number;
    

}


