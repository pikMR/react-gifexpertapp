
const apiKey = 'nlhjtAyp2ERDcLglAwTHoUMHNdyL5G9O';
const urlRandom = 'https://api.giphy.com/v1/gifs/search';

const getGifs=async(category) => {
    const url = `${urlRandom}?api_key=${apiKey}&q=${encodeURI(category)}&limit=5`;
    const respuesta = await fetch(url);   
    const {data} = await respuesta.json();
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}

export default getGifs;