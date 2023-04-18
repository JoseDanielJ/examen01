import React,{useEffect,useState} from 'react'
import RepositoriesContext from '../context/RepositoriesContext';
import MyCarousel from '../myCarousel/MyCarousel'


interface Repo {
    name: string;
}


  
async function getRepoNames(): Promise<string[]> {

const repoData = await fetch(`https://api.github.com/users/JoseDanielJ/repos`).then((response) => response.json()) as Repo[];

const repoNames = repoData.map((repo) => repo.name);

return repoNames;
}

const Projects = () => {
    const [repository, setRepositories] = useState<string[]>([]);
  
    useEffect(() => {
      getRepoNames().then(result => {
        setRepositories(result);
      });
    }, []);
    
    return (

    <div className='row bg-black h-75'>
        <h2 className='text-white my-2 px-5'>My GitHub Projects</h2>
        <RepositoriesContext.Provider value={repository}>
        {repository.length > 0 && <MyCarousel/>}
        </RepositoriesContext.Provider>
        
    </div>
    )
}


export default Projects