import fetch from "node-fetch"; //para hacer una solicitud

const routeHello = (): string => "Hello World!"; 

//Devuelve una lista de nombres de usuarios e ID
const routeAPINames = async (): Promise<string|ErrorResponse> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url); 
        if (!response.ok){
            return "Error al hacer la peticion";
        }
        data = (await response.json()) as responseItemType[]; //declara explicitamente que el valor va ser de tipo responseType
    } catch (err) {
        return `Error`;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
};
//Datos metereologicos
const routeWeather = (query: WeatherQueryInterface): WeatherDetailType =>{
    const zipcode=query.zipcode;
    if (zipcode.length===5){
        return queryWeatherData(query);
    }else{
        throw new Error("Error al ingresar el codigo postal proporcinado no tiene 5 digitos") 
    }
    
}

    

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};


//Ejercicio1

const Cities:CityType[]=[
    {name:"Lima", population:12000000},
    {name:"Tokio", population:34000000}
]   



//exportacion nombrada
export { routeHello, routeAPINames, routeWeather,Cities};