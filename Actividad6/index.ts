import { routeHello, routeAPINames, routeWeather ,Cities} from "./routes.js";
import express, { Request, Response } from "express";

const server = express();
const port = 3000;
//Ruta hello
server.get("/hello", function (_req: Request, res: Response): void {
    const response = routeHello();
    res.send(response);
});

server.get(
    "/api/names",
    async function (_req: Request, res: Response): Promise<void> {
        let response: string | ErrorResponse;
        try {
            response = await routeAPINames();
            res.send(response);
        } catch (err) {
            console.log(err);
        }
    }
);
//Ruta metereologica
server.get(
    "/api/weather/:zipcode",
    function (req: Request, res: Response): void {
        const response = routeWeather({ zipcode: req.params.zipcode });
        res.send(response);
    }
);


//Ejercicio1

server.get("/api/cities", function(_req:Request,res:Response):void{
    const response= Cities
    res.send(response);
})

server.listen(port, function (): void {
    console.log("Escuchando en el " + port);
});

//Transpilar => npx tsc
//Iniciar el servidor node index.js