
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Usando uma função typeof do Typescript, podemos guardar a tipagem
// presente na constante defaulTheme dentro da constante ThemeType

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
  export interface DefaultTheme extends ThemeType{}
}

// Esse declare module está criando uma tipagem para o styled-components.
// Toda vez que importarmos o styled components em um arquivo, a tipagem que
// ele irá puxar, será a tipagem definida dentro de declare module 'styled-components'.
// Como queremos apenas sobrescrever uma tipagem de dentro do styled-components,
// e não criar uma tipagem nova - por isso importamos o styled-components e o 
// declaramos. Se ele não tivesse sido importado, estaríamos criando do 0 a 
// definição de estilo do styled-components.
// Por fim, fazemos com que a interface de themas de dentro do styled-components 
// estenda a ThemeTypes criada por nós;
// Com isso é feita a total integração do styled-components com o typescript.