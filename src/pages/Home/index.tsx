import { InfoPart, MainScreen, NumberPart } from "./styles";
// import { Sidebar } from "../../components/Sidebar";
import { Number } from "../../components/Number";

export function Home() {
    return (
      <MainScreen>
        <InfoPart>

        </InfoPart>
        <NumberPart>
          <ol>
            <Number>
              10
            </Number>
            <Number>
              10
            </Number>
            <Number>
              10
            </Number>
            <Number>
              10
            </Number>
            <Number>
              10
            </Number>
            <Number>
              10
            </Number>
          </ol>
          <footer>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
          </footer>
        </NumberPart> 
      </MainScreen>
    );
  }