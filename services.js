//Services

weatherApp.service('cityService', function() {
    this.city = "";
    
});


weatherApp.service('locationService', function() {
    this.location = function(val) {
        return $resource('//maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: val,
            sensor: false
        }
    }).then(function(response){
            console.log(response);
        return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };;
});
