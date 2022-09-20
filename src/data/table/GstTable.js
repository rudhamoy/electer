

// gst one table
export const gstOneColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Invoice No',
      dataIndex: 'invoiceNo',
      key: 'invoiceNo',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Invoice Value',
      dataIndex: 'totalInvoiceValue',
      key: 'totalInvoiceValue',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Taxable Value',
      dataIndex: 'totalTaxableValue',
      key: 'totalTaxableValue',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total IGST',
      dataIndex: 'totalIgst',
      key: 'totalIgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total CGST',
      dataIndex: 'totalCgst',
      key: 'totalCgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total SGST',
      dataIndex: 'totalSgst',
      key: 'totalSgst',
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
      dataIndex: 'invoiceNo',
      key: 'invoiceNo',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Invoice Value',
      dataIndex: 'totalInvoiceValue',
      key: 'totalInvoiceValue',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total Taxable Value',
      dataIndex: 'totalTaxableValue',
      key: 'totalTaxableValue',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total IGST',
      dataIndex: 'totalIgst',
      key: 'totalIgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total CGST',
      dataIndex: 'totalCgst',
      key: 'totalCgst',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Total SGST',
      dataIndex: 'totalSgst',
      key: 'totalSgst',
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