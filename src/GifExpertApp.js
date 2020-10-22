import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import {GifGrid} from './components/GifGrid'



const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['abascal']);
    //const handleAdd = (el) =>{(setCategorias((list)=>[...list,'ppp']))}
    //const categorias = ['abascal','españa','vox'];
   return ( 
<>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias} />
    <hr />
    
    <ul>
   {
   categorias.map((cat,i) => <GifGrid key={cat+'_'+i} category={cat}/> )
   }
    </ul>

</>
   )
};

export default GifExpertApp;