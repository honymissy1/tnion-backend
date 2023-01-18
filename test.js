
function image () {        
   let file  = {mimetype: 'image/greenscreen'}



  let mimeTypeSplit = file.mimetype.split('/');

  if(mimeTypeSplit[0] === 'video'){
     return 'video';
    }

  // To accept the file pass `true`, like so:
  if(mimeTypeSplit[0] === 'image'){ 
    return 'picture'
  }

}

console.log(image());