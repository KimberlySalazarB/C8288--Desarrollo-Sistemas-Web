var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch"; //para hacer una solicitud
const routeHello = () => "Hello World!";
//Devuelve una lista de nombres de usuarios e ID
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            return "Error al hacer la peticion";
        }
        data = (yield response.json()); //declara explicitamente que el valor va ser de tipo responseType
    }
    catch (err) {
        return `Error`;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
});
//Datos metereologicos
const routeWeather = (query) => {
    const zipcode = query.zipcode;
    if (zipcode.length === 5) {
        return queryWeatherData(query);
    }
    else {
        throw new Error("Error al ingresar el codigo postal proporcinado no tiene 5 digitos");
    }
};
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
//Ejercicio1
const Cities = [
    { name: "Lima", population: 12000000 },
    { name: "Tokio", population: 34000000 }
];
//exportacion nombrada
export { routeHello, routeAPINames, routeWeather, Cities };
