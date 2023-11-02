function SearchHeader({ search }) {

   const handleSubmit = (event)=>{
      event.preventDefault();      
      search('Bir teselli ver');
   }

   return (
      <div className="container">
         <form onSubmit={handleSubmit}>            
            <input id="searchSong" type="text" placeholder="Şarkı Arayın"/>
         </form>
      </div>
   );
}

export default SearchHeader;