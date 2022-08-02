const apiCalls = {
    topStories(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          return fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=G8uy68Gx9Nco1kAVlUHGFaK57XoWzVue", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    }
}

export {apiCalls}