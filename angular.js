$http.post( '/scrapUrl/', {
    url: url  //send the url U need to scrape
} ).then( function( res ) {
    console.log(res.data)//U get the meta tags as json object
});
