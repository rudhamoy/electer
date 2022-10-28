

// purchase order list
export const purchaseListColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[11px]',
      render: (text, index) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Items description',
      dataIndex: 'item_name',
      key: 'item_name',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'UOM',
      dataIndex: 'UOM',
      key: 'UOM',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Rate',
      dataIndex: 'price',
      key: 'price',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Tax',
      dataIndex: 'tax',
      key: 'tax',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      className: 'text-[11px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
  ];


  // purchase order list
export const purchaseInvoiceColumn = [
  {
    title: 'Sl No',
    dataIndex: 'index',
    key: 'index',
    className: 'text-[11px]',
    render: (text, index) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
  },
  {
    title: 'Items description',
    dataIndex: 'item_name',
    key: 'item_name',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'HSN Code',
    dataIndex: 'hsnCode',
    key: 'hsnCode',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'UOM',
    dataIndex: 'UOM',
    key: 'UOM',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Rate',
    dataIndex: 'price',
    key: 'price',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    key: 'tax',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}%</p>,
  },
  {
    title: 'Tax Amount',
    dataIndex: 'taxAmount',
    key: 'taxAmount',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
];

// sales order list
export const salesInvoiceColumn = [
  {
    title: 'Sl No',
    dataIndex: 'index',
    key: 'index',
    className: 'text-[11px]',
    render: (text, index) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
  },
  {
    title: 'Items description',
    dataIndex: 'item_name',
    key: 'item_name',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'UOM',
    dataIndex: 'UOM',
    key: 'UOM',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Rate',
    dataIndex: 'price',
    key: 'price',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    key: 'tax',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}%</p>,
  },
  {
    title: 'Tax Amount',
    dataIndex: 'taxAmount',
    key: 'taxAmount',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text.toFixed(2)}</p>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    className: 'text-[11px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
];