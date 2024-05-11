import { useEffect, useState } from "react";
import { InfoPart, MainScreen, NumberPart } from "./styles";
import { Number } from "../../components/Number";
import { api } from "../../services/api";
import { ContestInfo } from "../../interfaces";

export function Home() {
  const [chooseLoterry, setChooseLoterry] = useState<ContestInfo>();

  useEffect(()=>{
    fetch(api('lotofacil'))
    .then((response) => response.json())
        .then((data) => {
            setChooseLoterry({
                numbers: data.listaDezenas,
                contest: data.numero,
                date: data.dataApiracao,
            })
        }).catch((err) => {
            console.log(err);
        });
  },[]);

    return (
      <MainScreen>
        <InfoPart>
        </InfoPart>
        <NumberPart>
          <ol>
            {
              chooseLoterry?.numbers.map((num, i) =>(
                <Number key={i}> {num} </Number>
              ))
            }
          </ol>
          <footer>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
          </footer>
        </NumberPart> 
      </MainScreen>
    );
  }