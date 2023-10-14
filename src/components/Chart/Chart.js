import './Chart.css';
import ChartBar from './ChartBar';
const Chart = ({ dataPointss }) => {
    console.log(dataPointss);
    //bejme loop me map objektit dhe nxjerrim value property ne fillim 
    const valueArray = dataPointss.map((data) => data.value)
    const maxValue = Math.max(...valueArray)
    console.log(maxValue);
    console.log(dataPointss)
    return (
        <div className='chart'>

            {dataPointss.map((data) => (
                <ChartBar
                    key={data.label}
                    maxValue={maxValue}
                    label={data.label}
                    value={data.value}
                ></ChartBar>
            ))}

        </div>
    )

}

export default Chart;