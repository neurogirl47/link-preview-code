app.post( '/scrapUrl/', function( req, res ) {

    var jsdom = require( 'jsdom' );
    var jsonRes = {};
    jsdom.env( {
        url: req.body.url,
        scripts: [ "http://code.jquery.com/jquery.js" ],
        done: function( error, window ) {
          var $ = window.$;

          $( 'meta' ).each( function() {
            var name = $( this ).attr( 'property' );
            var value = $( this ).attr( 'content' );
            if ( name ) {
              jsonRes[ name.slice( 3 ) ] = value;
              console.log( name + ": " + value );
            }
          } );
          res.send( jsonRes );
        }
    } );
} );
