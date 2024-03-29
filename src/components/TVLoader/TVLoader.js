import React from 'react';
import useData from '../DataProvider/DataProvider';

// class TVLoader extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             tv: [],
//             isLoading: true,
//             isError: false
//         }
//     }

//     componentDidMount() {
//         this.load();
//     }

//     load = () => {
//         fetch('./tv.json')
//         .then((response) => response.json())
//         .then((tv) => {
//             this.setState({
//                 tv
//             });
//         })
//         .catch((error) => {
//             this.setState({
//                 isError: error
//             })
//         })
//         .finally(() => {
//             this.setState({
//                 isLoading: false
//             });
//         });
//     }

//     render() {
//         const { tv, isLoading, isError } = this.state;

//         return (
//             <>
//                 {isLoading && <div>Loading...</div>}
//                 {isError && <div>Error happaned: {isError.massage}!</div>}

//                 <ul>
//                     {tv.map((currentTV) => <li>Brand: {currentTV.brand} --- Model: {currentTV.model} --- Price: {currentTV.price}</li>)}
//                 </ul>
//             </>
//         );
//     }
// }


const TVLoader = () => {
    const {data: tv, isLoading, error } = useData(getTV);

    function getTV() {
        return fetch('./tv.json')
        .then((response) => response.json());                                                                 
    }

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error happaned: {error.massage}!</div>}
            
            <ul>
                {tv.map((currentTV) => <li>Brand: {currentTV.brand} --- Model: {currentTV.model} --- Price: {currentTV.price}</li>)}
            </ul>
        </>
    );
}

export default TVLoader;

/*

За аналогією з компонентою PhonesLoader, переробіть комопненту TVLoader таким чином, щоб вона використовувала хук useData, який ми написали.

*/