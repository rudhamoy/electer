import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';


const SalesExpenditureGraph = () => {

    const data = [
        {
            name: 'Food',
            month: 'Jan.',
            dataNum: 18.9,
        },
        {
            name: 'Food',
            month: 'Feb.',
            dataNum: 28.8,
        },
        {
            name: 'Food',
            month: 'Mar.',
            dataNum: 39.3,
        },
        {
            name: 'Food',
            month: 'Apr.',
            dataNum: 81.4,
        },
        {
            name: 'Food',
            month: 'May',
            dataNum: 47,
        },
        {
            name: 'Food',
            month: 'Jun.',
            dataNum: 20.3,
        },
        {
            name: 'Food',
            month: 'Jul.',
            dataNum: 24,
        },
        {
            name: 'Food',
            month: 'Aug.',
            dataNum: 35.6,
        },
        {
            name: 'Gas',
            month: 'Jan.',
            dataNum: 12.4,
        },
        {
            name: 'Gas',
            month: 'Feb.',
            dataNum: 23.2,
        },
        {
            name: 'Gas',
            month: 'Mar.',
            dataNum: 34.5,
        },
        {
            name: 'Gas',
            month: 'Apr.',
            dataNum: 99.7,
        },
        {
            name: 'Gas',
            month: 'May',
            dataNum: 52.6,
        },
        {
            name: 'Gas',
            month: 'Jun.',
            dataNum: 35.5,
        },
        {
            name: 'Gas',
            month: 'Jul.',
            dataNum: 37.4,
        },
        {
            name: 'Gas',
            month: 'Aug.',
            dataNum: 42.4,
        },
        {
            name: 'Clothing',
            month: 'Jan.',
            dataNum: 23.4,
        },
        {
            name: 'Clothing',
            month: 'Feb.',
            dataNum: 31,
        },
        {
            name: 'Clothing',
            month: 'Mar.',
            dataNum: 27,
        },
        {
            name: 'Clothing',
            month: 'Apr.',
            dataNum: 40,
        },
    ];
    const config = {
        data,
        isGroup: true,
        xField: 'month',
        yField: 'dataNum',
        seriesField: 'name',

        color: ['#1ca9e6', '#f88c24', 'cyan'],


        // marginRatio: 0.1,
        label: {
            position: 'middle',
            // 'top', 'middle', 'bottom'
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };

    return <Column {...config} />;
}

export default SalesExpenditureGraph
