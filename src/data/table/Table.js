
// Inventory
export const inventoryColumnList = [
  {
    title: 'Sl No',
    dataIndex: 'index',
    key: 'index',
    render: (text) => <p className=" -mb-[2px]">{text + 1}</p>,
  },
  {
    title: 'SKU No',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Particular',
    dataIndex: 'particularName',
    key: 'particularName',
  },
  {
    title: 'Category',
    dataIndex: 'catName',
    key: 'catName',
  },
  {
    title: 'Sub-Category',
    dataIndex: 'subCatName',
    key: 'subCatName',
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Total Amount',
    dataIndex: 'total',
    key: 'total',
  },
];

// Payroll
export const payrollColumnList = [
  {
    title: 'Code',
    dataIndex: 'employee_code',
    key: 'employee_code',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Employe Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Post',
    dataIndex: 'post',
    key: 'post',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Attendance',
    dataIndex: 'attendance',
    key: 'attendance',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Leaves',
    dataIndex: 'leaves',
    key: 'leaves',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Half Days',
    dataIndex: 'halfDays',
    key: 'halfDays',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
      title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    render: (text) => <p className="text-cyan-500 text-xs -mb-1 font-semibold">₹{text}</p>,
  },
];

// attendance table
export const attendanceColumnList = [
 
  {
    title: 'Code',
    dataIndex: 'employee_code',
    key: 'employee_code',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Employe Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Post',
    dataIndex: 'post',
    key: 'post',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
];

// My Clients
export const myClientColumn = [
  {
    title: 'Sl No',
    dataIndex: 'index',
    key: 'index',
    render: (text) => <p className=" -mb-[2px]">{text + 1}</p>,
  },
  {
    title: 'Client ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Contact Person',
    dataIndex: 'contact_person',
    key: 'contact_person',
  },
  {
    title: 'MOB',
    dataIndex: 'mobile_no',
    key: 'mobile_no',
  },
]
