const Converter = {
   toPlayList(data){
      return {
         total: data.total,
         items: data.items.map(item => {
            return {
               id: item.id,
               title: item.name,
               total: item.tracks.total,
               image: item.images[0].url,
               owner: item.owner.display_name
            }
         })
      }
   },
   toMe(data){
      return {
         name: data.display_name,
         image: data.images[0].url,
         followers: data.followers.total,
         id: data.id
      }
   },
   toTracks(data) {
      return{
         total: data.tracks.total,
         items: data.tracks.items.map(item => {
            return {
               id: item.id,
               title: item.name,
               owner: item.artists[0].name,
               album: item.album.name,
               uri: item.uri,
               image: item.album.images[0].url
            }         
         })
      }
   }
};


export default Converter;