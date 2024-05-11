const colors = new Map();

colors.set('megasena', '#6BEFA3');
colors.set('quina', '#8666EF');
colors.set('lotofacil', '#DD7AC6');
colors.set('lotomania', '#FFAB64');
colors.set('timemania', '#5AAD7D');
colors.set('diadesorte', '#BFAF83');

export const setColor = (chooseName: string) =>{
    return colors.get(chooseName);
}