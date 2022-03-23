function regSW(){
  if('ServiceWorker' in navigator){
    navigator.ServiceWorker.register('./sw.js')
  }
}
