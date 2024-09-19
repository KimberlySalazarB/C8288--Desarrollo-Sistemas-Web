import fetch from "node-fetch"; //para hacer una solicitud

const routeHello = (): string => "Hello World!"; 

//Devuelve una lista de nombres de usuarios e ID
const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url); 
        data = (await response.json()) as responseItemType[]; //declara explicitamente que el valor va ser de tipo responseType
    } catch (err) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
};
//Datos metereologicos
const routeWeather = (query: WeatherQueryInterface): WeatherDetailType =>
    queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};


//Ejercicio1

const Cities:CityType[]=[
    {name:"Lima", population:12000000}
]   

    

//exportacion nombrada
export { routeHello, routeAPINames, routeWeather,Cities};