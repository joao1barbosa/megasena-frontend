import { NumberProps } from '../../interfaces';
import { Bubble } from './styles';

export function Number({ children }:NumberProps){
    return (
        <Bubble>
            { children }
        </Bubble>
    );
} 

