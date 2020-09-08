const key = '7f8b3fd5f3de06b28669936083655e87';




const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}
    `;

    // rake fetch call (promise call)
    const response = await fetch(baseURL + query);
    
    // promise data
    const data = await response.json();
        return data;
    
}


// 

// /* uncomenet if using data c-nnecttion
// */
// 

// fetch(baseURL).then((data) => {console.log('response', data.json()) })
