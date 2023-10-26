// class App{

// }

// class Widget{}

const baseurl = 'https:127.0.0.1:3000';

async function fetchServices(){
    const url = `${baseurl}/api/service`;

    const service = await fetch(url) ;

    console.log(service)

}

fetchServices();