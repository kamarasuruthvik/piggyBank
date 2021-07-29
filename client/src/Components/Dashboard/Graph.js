import { LineChart, Line , CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Graph = ({expenses})=>{
    return(
        <LineChart width={500} height={300} data={expenses}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis/>
        <YAxis />
        <Tooltip/>
      </LineChart>
    );

    }

export default Graph;