import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const ProductSales = () => {
  const data = [
    {
      type: 'chair',
      value: 27,
    },
    {
      type: 'Stool',
      value: 25,
    },
    {
      type: 'Cupboard',
      value: 18,
    },
    {
      type: 'Nails',
      value: 15,
    },
    {
      type: 'Bed',
      value: 10,
    },
    {
      type: 'Mouse',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 1,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    label: {
      type: 'outer',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default ProductSales