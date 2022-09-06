// attendance table
export const dashAttendanceColumn = [
    {
      title: 'EC',
      dataIndex: 'employee_code',
      key: 'employee_code',
      className: 'text-[10px]',
      render: (text) => <p className="text-[10px] -mb-[1px]">{text}</p>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'text-[10px]',
      render: (text) => <p className="text-[10px] -mb-[1px]">{text}</p>,
    },
    {
      title: 'Post',
      dataIndex: 'post',
      key: 'post',
      className: 'text-[10px]',
      render: (text) => <p className="text-[10px] -mb-[1px]">{text}</p>,
    },
  ];

// income table
export const dashIncomeColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Particular',
      dataIndex: 'particular',
      key: 'particular',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
      title: 'Invoice',
      dataIndex: 'invoice',
      key: 'invoice',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
  ];

// Expenses table
export const dashExpensesColumn = [
    {
      title: 'Sl No',
      dataIndex: 'index',
      key: 'index',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text + 1}</p>,
    },
    {
      title: 'Particular',
      dataIndex: 'particular',
      key: 'particular',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
    {
        title: 'Expense Type',
        dataIndex: 'type',
        key: 'type',
        className: 'text-[10px]',
        render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
      },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      className: 'text-[10px]',
      render: (text) => <p className="text-xs -mb-[1px]">{text}</p>,
    },
  ];