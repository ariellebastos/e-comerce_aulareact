import { createContext } from "react";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({children}) {
    const [variavel, setVariavel] = useState ('blablablabla')
    return <CarrinhoContext.Provider
    value={{umafuncao, variavel}}
    >
        {children}
        </CarrinhoContext.Provider>;
}

export default CarrinhoContextProvider;