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
    return <ReactECharts option={options} />;
};

export default Echart;