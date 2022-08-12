import React from 'react'
import { Pie } from '@ant-design/plots';

const MonthlySales = () => {

      const data = [
        {
          type: 'Chair',
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
          type: 'Beds',
          value: 10,
        },
        {
          type: 'Spray Cans',
          value: 5,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}%',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: '₹ 2,16,460',
          },
        },
      };
      return <Pie {...config} />;
        
}

export default MonthlySales