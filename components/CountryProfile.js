const data = [
    {
        "taste": "fruity",
        "chardonay": 75,
        "carmenere": 38,
        "syrah": 27
    },
    {
        "taste": "bitter",
        "chardonay": 110,
        "carmenere": 99,
        "syrah": 73
    },
    {
        "taste": "heavy",
        "chardonay": 83,
        "carmenere": 78,
        "syrah": 70
    },
    {
        "taste": "strong",
        "chardonay": 69,
        "carmenere": 69,
        "syrah": 43
    },
    {
        "taste": "sunny",
        "chardonay": 110,
        "carmenere": 96,
        "syrah": 89
    }
]

import { ResponsiveRadar } from '@nivo/radar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const CountryProfile = () => (
    <ResponsiveRadar
        data={data}
        keys={['chardonay', 'carmenere', 'syrah']}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)