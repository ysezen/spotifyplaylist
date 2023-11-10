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
               owner: item.owner.display_name,
               type: item.type
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
   toPlayListTracks(data) {
      return{
         total: data.total,
         items: data.items.map(item => {
            return {
               id: item.track.id,
               title: item.track.name,
               owner: item.track.artists[0].name,
               album: item.track.album.name,
               uri: item.track.uri,
               image: item.track.album.images[0].url,
               type: 'playListtrack'
            }         
         })
      }
   },
   toSearchTracks({tracks: data}) {
      return{
         total: data.total,
         items: data.items.map(item => {
            return {
               id: item.id,
               title: item.name,
               owner: item.artists[0].name,
               album: item.album.name,
               uri: item.uri,
               image: item.album.images[0].url,
               type: 'searchListtrack'
            }         
         })
      }
   }
};


export default Converter;