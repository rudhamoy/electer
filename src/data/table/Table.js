
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
  // {
  //   title: 'Info',
  //   dataIndex: 'info',
  //   key: 'info',
  // },
  {
    title: 'Code',
    dataIndex: 'employee_code',
    key: 'employee_code',
  },
  {
    title: 'Employe Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Post',
    dataIndex: 'post',
    key: 'post',
  },
  {
    title: 'Attendance',
    dataIndex: 'attendance',
    key: 'attendance',
  },
  {
    title: 'Leaves',
    dataIndex: 'leaves',
    key: 'leaves',
  },
  {
    title: 'Half Days',
    dataIndex: 'halfDays',
    key: 'halfDays',
  },
  {
      title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    render: (text) => <p className="text-cyan-500 -mb-1 font-semibold">₹{text}</p>,
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
