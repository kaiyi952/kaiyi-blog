"use client";

import React from 'react';
import ReactECharts from 'echarts-for-react';


export const options = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: 'Typescript'
                },
                {
                    value: 234,
                    name: 'Javascript'
                },
                {
                    value: 1548,
                    name: 'Css'
                }
            ]
        }
    ]
};

const Echart: React.FC = () => {
    return <ReactECharts className="flex-none w-[500] sm:ml-3 sm:w-[500] mt-2 xl:ml-8" option={options} />;
};

export default Echart;