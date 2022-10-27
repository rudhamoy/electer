

// gst one table
export const gstOneColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[10px]',
      render: (text, index) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Invoice No',
      dataIndex: 'invoice_no',
      key: 'invoice_no',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoice_date',
      key: 'invoice_date',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Invoice Value',
      dataIndex: 'total_invoice_value',
      key: 'total_invoice_value',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Taxable Value',
      dataIndex: 'total_texable_value',
      key: 'total_texable_value',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total IGST',
      dataIndex: 'total_igst',
      key: 'total_igst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total CGST',
      dataIndex: 'total_cgst',
      key: 'total_cgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total SGST',
      dataIndex: 'total_sgst',
      key: 'total_sgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice Sent to/client',
      dataIndex: 'invoiceSent',
      key: 'invoiceSent',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
  ];

  // gst two table
export const gstTwoColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Invoice No',
      dataIndex: 'invoice_no',
      key: 'invoice_no',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoice_date',
      key: 'invoice_date',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Invoice Value',
      dataIndex: 'total_invoice_value',
      key: 'total_invoice_value',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Taxable Value',
      dataIndex: 'total_texable_value',
      key: 'total_texable_value',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text.toFixed(2)}</p>,
    },
    {
      title: 'Total IGST',
      dataIndex: 'total_igst',
      key: 'total_igst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total CGST',
      dataIndex: 'total_cgst',
      key: 'total_cgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text.toFixed(2)}</p>,
    },
    {
      title: 'Total SGST',
      dataIndex: 'total_sgst',
      key: 'total_sgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
  ];

  // invoice table
export const invoiceColumn = [
  {
    title: 'Sl No',
    dataIndex: 'index',
    key: 'index',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
  },
  {
    title: 'Item Description',
    dataIndex: 'item_name',
    key: 'item_name',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'UOM',
    dataIndex: 'UOM',
    key: 'UOM',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Rate',
    dataIndex: 'price',
    key: 'price',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Tax %',
    dataIndex: 'taxes',
    key: 'taxes',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
  {
    title: 'Amount',
    dataIndex: 'total_amount',
    key: 'total_amount',
    className: 'text-[10px]',
    render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
  },
];