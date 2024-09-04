import React from 'react'
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
const RChart = () => {
    const data = [
        { name: 'Communication', x: 40 },
        { name: 'Personal Qualities', x: 66 },
        { name: 'Critical Thinking', x: 42 },
        { name: 'Leadership', x: 58 },
        { name: 'Teamwork', x: 67 },

    ];
    return (
        <RadarChart height={650} width={650} className='w-100'
            outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis
            angle={90}
            ticks={[0,20,40,60,80,100]}
            domain={[0,0]}
                  // Bu açı, ekseni döndürür ve etiketlerin merkezden yukarıya doğru hizalanmasını sağlar
                tickFormatter={(value) => value} // Bu satır, eksen üzerindeki değerleri formatlamak için kullanılır
            />
            <Radar dataKey="x" stroke="#0F77FF"
                fill="#408FFF" fillOpacity={0.5} 
                dot={{ stroke: '#0F77FF', strokeWidth: 2, r: 1 }}/>
                
        </RadarChart>
    )
}

export default RChart