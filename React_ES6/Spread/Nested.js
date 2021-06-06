let state = {
    name:'Tushar',
    address:{
        city:'London',
        country:{
            countryName:'United Kingdom',
            countryCode:'UK'
        }
    }
}

// let copy = {...state,address:{...state.address}};





// let copy= {...state,address:{...state.address,country:{...state.address.country}}}

let copy = JSON.parse(JSON.stringify(state));

// copy.address.city='Delhi';
// copy.name='Alexander';

copy.address.country.countryName='India';
console.log(state);
console.log(copy);