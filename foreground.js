var register = async sw => {
 var registration = await navigator.serviceWorker.register(sw);//Register service worker
 return registration;
};
register('./background.js');//service worker would only apply to the current directory "meteoLR"

/*Contruct url in the webmanifest 
 *Retrieve parameters from "start_url": "./?utm_medium=PWA&utm_source=launcher"
 *Use URLPattern for retrieving parameters
 */
