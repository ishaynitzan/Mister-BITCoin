import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({title,data}) {
   const currData = data.map(obj=>obj.y)

    return (
        <div className="chart">
            <h1>{title}</h1>
            <Sparklines data={currData}>
                <SparklinesLine  style={{ fill: "#fff" }} />
            </Sparklines>
        </div >
    )
}

