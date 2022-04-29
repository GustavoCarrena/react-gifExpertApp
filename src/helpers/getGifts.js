

    export const getGifts = async (category) => {
        //encodeURI: reemplaza espacios, etc para que no de error
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=c6O0gDnhpPaL9XbwrDFNboWqzNN6vVrJ`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifts = data.map(img=>{
            return {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        return gifts;
    };
