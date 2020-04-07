import { state } from './types';

let useAPIData = (): Promise => {

    fetch(
        'https://finnhub.io/api/v1/covid19/us?token=bq2ft1nrh5rb332ppnug'
    )
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            const sortedData = data.sort(function (a: state, b: state) { return b.case - a.case })


            return sortedData.map((x: state) => {
                return {
                    'index': x.index,
                    'state': x.state,
                    'case': x.case,
                    'death': x.death,
                    'updated': x.updated.toString()
                };
            });

        })
        .catch(error => {
            console.log('Error occured on load.' + error);
            throw new Error();
        }).finally();
}

export default useAPIData;