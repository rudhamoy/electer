import PayInfo from '../icons/payroll/info.png'
import SlipIcon from '../icons/payroll/slip.png'

// Inventory
export const InventoryTableGrid = [
    {type: 'checkbox', width: '50'},
    {
    headerText: 'SL NO',
    width: '80',
    textAlign: 'Center' 
    },
    { 
    field: 'SkuNo',
    headerText: 'SKU NO',
    width: '80',
    textAlign: 'Center' 
    },
    { 
    field: 'Particular',
    headerText: 'Particular',
    width: '150',
    textAlign: 'Center' 
    },
    { 
    field: 'Category',
    headerText: 'Category',
    width: '150',
    textAlign: 'Center' 
    },
    { 
    field: 'Sub-Category',
    headerText: 'Sub-Category',
    width: '150',
    textAlign: 'Center' 
    },
    { 
    field: 'QTY',
    headerText: 'QTY',
    width: '80',
    textAlign: 'Center' 
    },
    { 
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: '80',
    textAlign: 'Center' 
    },
    { 
    field: 'TotalAmount',
    headerText: 'Total Amount',
    width: '100',
    textAlign: 'Center' 
    },
]

// My Clients
export const MyClientsTableGrid = [
    {type: 'checkbox', width: '50'},
    {
    headerText: 'SL NO',
    width: '100',
    textAlign: 'Center' 
    },
    { 
    field: 'ClientId',
    headerText: 'Client ID',
    width: '100',
    textAlign: 'Center' 
    },
    { 
    field: 'Name',
    headerText: 'Name',
    width: '150',
    textAlign: 'Center' 
    },
    { 
    field: 'ContactPerson',
    headerText: 'Contact Person',
    width: '150',
    textAlign: 'Center' 
    },
    { 
    field: 'MOB',
    headerText: 'MOB',
    width: '150',
    textAlign: 'Center' 
    },
]

// Payroll

const payrollGridImage = (props) => (
    <div className="">
      <img
        className="rounded-full w-8 h-8"
        src={PayInfo}
        alt="payroll"
      />
    </div>
  );

const summaryIcon = (props) => {
    return (
        <div className="">
          <img
            className="w-5 h-5"
            src={SlipIcon}
            alt="payroll"
          />
        </div>
      )
}

export const PayrollTableGrid = [
    // {type: 'checkbox', width: '40'},
    {
    headerText: 'Info',
    width: '80',
    template: payrollGridImage,
    textAlign: 'Left'
    },
    { 
    field: 'Code',
    headerText: 'Code',
    width: '100',
    textAlign: 'Left' 
    },
    { 
    field: 'EmployeName',
    headerText: 'Employe Name',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'Post',
    headerText: 'Post',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'Attendance',
    headerText: 'Attendance',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'Leaves',
    headerText: 'Leaves',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'HalfDays',
    headerText: 'Half Days',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'SalaryThisMonth',
    headerText: 'Salary This Month',
    width: '150',
    textAlign: 'Left' 
    },
    { 
    field: 'SalarySlip',
    headerText: 'SalarySlip/Summary',
    width: '100',
    template: summaryIcon,
    textAlign: 'Left' 
    },
]

export const PayrollData = [
    {
        
        Code: 1001,
        EmployeName: 'Nirav Joshi',
        Post: 'Frontend Dev',
        Attendance: "July=80%",
        Leaves: '3 days',
        HalfDays: '4 days',
        SalaryThisMonth: '24,500',
      },
]