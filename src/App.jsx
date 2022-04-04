import { useState, useEffect } from "react";//Destructuring para traer las cosas
import { Heading, Image } from '@chakra-ui/react';
import {LaunchItem} from "./components/LaunchItem";
import logo from  './assets/logo-spacex.svg';
import * as API from "./services/launches";

export function App() 
{
  const [launches, setLaunches] = useState([]);

  useEffect(() => {API.getAllLaunches().then(setLaunches);},[]);//promise

    return (
      <>
      <Image src={logo} width={300}/>
      <Heading align="center" as="h1" size="lg">SpaceX Launches
      </Heading>
        <section>
          {launches.map( (launch) => 
            (
             <LaunchItem key={launch.flight_number} {...launch}/>
            ))}
        </section>
      </>
    );
    /*return (<div > Hola mundo</div> 
    );
    *///Se pone el paréctesis cuando hay varias líneas
}



//hooks:
// sustitutos a los métodos del ciclo de vida, se agarra al componente y por eso te hacer las cosas
//no se pueden poner dentro del renderizado ni dnetro de ifs, tiene que estar a la altura de donde se crea el componente
