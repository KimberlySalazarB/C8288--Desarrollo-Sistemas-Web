//Tipos personalizados
type responseItemType = {
    id: string;
    name: string;
};
type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};
//Interfaces
interface WeatherQueryInterface {
    zipcode: string;
}

//Ejercicio1
type CityType={
    name:string;
    population:number;
};

//Ejercicio2
type ErrorResponse={
    message:string;
};

//Ejercicio3

type ValidationError={
    message:string;
}