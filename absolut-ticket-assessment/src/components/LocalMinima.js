import data from '../data.json';


export default function LocalMinima () {

    const findLocalMinimaMethodA = () => {
        let log = [];

        for (let i = 1; i < data.length-1; i++) {
            const f_t_minus_1 = data[i-1].close;
            const f_t         = data[i].close;
            const f_t_plus_1  = data[i+1].close;

            if (f_t < f_t_minus_1 && f_t < f_t_plus_1) {
                log.push("There is a local minimum at t=" + data[i].time);
            }
        }

        return log;
    }

    const findLocalMinimaMethodB = () => {
        let log = [];

        for (let i = 1; i < data.length; i++) {
            const f_t_minus_1 = data[i-1].close;
            const f_t = data[i].close;

            const e_t = f_t - f_t_minus_1;

            if (e_t < 0) {
                log.push("There is a local minimum at t=" + data[i].time);
            }
        }

        return log;
    }

    const logA = findLocalMinimaMethodA();
    const logB = findLocalMinimaMethodB();


    return (
        <div>
            <h1>Find local minima</h1>
            <br></br>
            <h3>Method A</h3>
            {logA.map((item) => {
                return(
                    <p key={item}>{item}</p>
                )
            })}
            <h3>Method B</h3>
            {logB.map((item) => {
                return(
                    <p key={item}>{item}</p>
                )
            })}
        </div>
    )
}