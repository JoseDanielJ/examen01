import { createContext } from "react"; 
export interface repositories{
    repositories:string[]
}
const RepositoriesContext = createContext<repositories>({
    repositories:[]
})

export default RepositoriesContext;