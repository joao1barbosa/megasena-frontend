import { useEffect, useState } from "react";
import { ContestName, InfoPart, Infos, MainScreen, NumberPart, Select } from "./styles";
import { Number } from "../../components/Number";
import { Choices } from "../../components/Choices";
import { api } from "../../services/api";
import { ContestInfo } from "../../interfaces";
import logo from "../../assets/Logo.svg";

export function Home() {
  const [chooseLoterry, setChooseLoterry] = useState<ContestInfo>();

  useEffect(()=>{
    handleSelect('megasena');
  },[]);

  const handleSelect = (chooseName: string) => {
    fetch(api(chooseName))
    .then((response) => response.json())
        .then((data) => {
            setChooseLoterry({
                name: data.tipoJogo.replaceAll('_', ' '),
                numbers: data.listaDezenas,
                contest: data.numero,
                date: data.dataApuracao,
            })
        }).catch((err) => {
            console.log(err);
        });
  }

    return (
      <MainScreen>
        <InfoPart>
          <Select onChange={(e) => handleSelect(e.target.value)}>
            <Choices/>
          </Select>
          <ContestName>
              <img src={logo}/>
              {chooseLoterry?.name}
          </ContestName>
          <Infos>
            <div>
              <h3>CONCURSO</h3>
              {chooseLoterry?.contest} - {chooseLoterry?.date}
            </div>
          </Infos>
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