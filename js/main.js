function regSW(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./sw.js')
    .then(function(){
      console.log('Service worker: Registered');
    });
  }
}
