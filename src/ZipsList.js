import React from 'react';
const ZipsList = ( {zips, handleDeleteZip} ) => {
  return(
    <div>
      {zips.map( (idea) => <Zip {...idea}
                                  key={idea.id}
                                  handleDelete={handleDeleteZip}
                                  /> )}
    </div>
  )
}

const Zip = ( { zip, id, handleDelete } ) => {
  return(
    <div id={id} className="idea">
      <h1>{zip}</h1>
      <button id="button" onClick={ () => handleDelete(id) } >Delete</button>
    </div>
  )
}

export default ZipsList;