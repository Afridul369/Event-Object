window.addEventListener('load',function(){
    // console.log('load is occured');
    
})
window.addEventListener('unload',function(){
    // console.log('unload is occured');
    
})
window.addEventListener('scroll',function(){
    // console.log('scroll is occured');
    
})
window.addEventListener('resize',function(){
    // console.log('resize is occured');
    
})
window.addEventListener('resize',function(){
    let width = window.outerWidth;
    let height = window.outerHeight;
    // console.log(`Height: ${height}, Width: ${width} `);
    
})

let details = document.querySelector('details');
details.addEventListener('toggle',function(e){
    // console.log(e.target);
    console.log(e.target.open);
    
})
