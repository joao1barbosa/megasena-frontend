import { useEffect, useState } from "react";
import { ContestName, InfoPart, Infos, MainScreen, NumberPart, Select } from "./styles";
import { Number } from "../../components/Number";
import { Choices } from "../../components/Choices";
import { api } from "../../services/api";
import { ContestInfo } from "../../interfaces";
import { setColor } from "../../utils";
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
                color: setColor(chooseName),
            })
        }).catch((err) => {
            console.log(err);
        });
  }

    return (
      <MainScreen>
        <InfoPart bgColor={chooseLoterry?.color}>
          <Select onChange={(e) => handleSelect(e.target.value)}>
            <Choices/>
          </Select>
          <ContestName>
              <img src={logo}/>
              {chooseLoterry?.name}
          </ContestName>
          <Infos>
            <h3>CONCURSO&nbsp;</h3>
              <div>
                {chooseLoterry?.contest}
                <p>&nbsp;-&nbsp;{chooseLoterry?.date}</p>
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