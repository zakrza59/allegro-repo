export const timeAgo = (td) => {
  let d1 = new Date(td); //update date
  let d2 = new Date(); //today date
  let diff = (d2 - d1)/1e3; //differece in sec
  let d = Math.floor(diff / 86400) * 24; //days count in hours
  let h = Math.floor(diff / 3600) * 60; //hours count in min
  let min = Math.floor(diff / 60) * 60; //min count in sec
  let sec = parseInt(diff - min, 10);
  


  return ((d/24) !== 0 ? (d/24) + "d " : "") + 
         (((h/60)-d) !== 0 ? ((h/60)-d) + "h " : "") + 
         (((min/60)-h) !== 0 ? ((min/60)-h) + "min " : "") +
         ((sec) !== 0 ? (sec) + "s ago" : "ago");
  
}

export const disco = () => {
  let elements = document.getElementsByTagName('*');
  for (let i = elements.length - 1; i >= 0; i--) { 
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256); 
    elements[i].style.color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    elements[i].style.backgroundColor = '#'+r.toString(16)+g.toString(16)+b.toString(16);
  };
  setTimeout(disco, 20);
};  
