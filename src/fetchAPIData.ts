import { useSelector, useDispatch } from 'react-redux';
import { addNewTask } from './redux/actions/actions';
import { state } from './types';



async function fetchAPIData(): Promise<any> {
 
  fetch(
    'https://finnhub.io/api/v1/covid19/us?token=bq2ft1nrh5rb332ppnug',
  )
    .then((resp) => resp.json())
    .then((data) => {
      const sortedData = data.sort((a: state, b: state) => b.case - a.case);
      console.log("sortedData", sortedData);

      const data2 = sortedData.map((x: state) => ({
        index: x.index,
        state: x.state,
        case: x.case,
        death: x.death,
        updated: x.updated.toString(),
      }));


      return data2;

    })
    .catch((error) => {
      console.log(`Error occured on load.${error}`);
      throw new Error();
    });
}

export default fetchAPIData;
