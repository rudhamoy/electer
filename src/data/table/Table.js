import { Space, Table, Tag } from 'antd';

// Inventory

export const inventoryColumnList = [
  {
    title: 'Sl No',
    dataIndex: 'slNo',
    key: 'slNo',
  },
  {
    title: 'SKU No',
    dataIndex: 'skuNo',
    key: 'skuNo',
  },
  {
    title: 'Particular',
    dataIndex: 'particular',
    key: 'particular',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Sub-Category',
    dataIndex: 'subcategory',
    key: 'subcategory',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  {
    title: 'Total Amount',
    dataIndex: 'TotalAmount',
    key: 'TotalAmount',
  },
];

export const inventoryData = [
  {
    key: '1',
    slNo: '01',
    skuNo: 'ZE0010',
    particular: 'Chair',
    category: 'Furniture',
    subcategory: 'Plastic',
    qty: 32,
    unitPrice: 450,
    TotalAmount: 11250,
  },
  {
    key: '2',
    slNo: '02',
    skuNo: 'ZE0011',
    particular: 'Chair',
    category: 'Furniture',
    subcategory: 'Carbon',
    qty: 21,
    unitPrice: 900,
    TotalAmount: 18900,
  },
  {
    key: '3',
    slNo: '03',
    skuNo: 'ZE0012',
    particular: 'Chair',
    category: 'Furniture',
    subcategory: 'Wood',
    qty: 45,
    unitPrice: 790,
    TotalAmount: 28250,
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
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Employe Name',
    dataIndex: 'employeName',
    key: 'employeName',
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

export const payrollData = [
  {
    code: 'ZE0010',
    employeName: 'Samuel Jeldi',
    post: 'Engineer',
    attendance: 'June - 78%',
    leaves: '3 Days',
    halfDays: "4 Days",
    salary: 21250,
  },
  {
    code: 'ZE0020',
    employeName: 'Nikhilesh Debbarma',
    post: 'Full Stack Dev',
    attendance: 'June - 78%',
    leaves: '3 Days',
    halfDays: "4 Days",
    salary: 18960,
  },
  {
    code: 'ZE0030',
    employeName: 'Rudhamoy Debbarma',
    post: 'Frontend Dev',
    attendance: 'June - 78%',
    leaves: '3 Days',
    halfDays: "5 Days",
    salary: 17960,
  },
];

// My Clients
export const MyClientsTableGrid = [
  { type: 'checkbox', width: '50' },
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
