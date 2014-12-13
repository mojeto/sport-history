(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    var serverUrl = localStorage.getItem('server-url');
    console.log("Server url is: " + serverUrl);
    document.querySelector('sport-activity-list')
        .url = serverUrl + "/activity";

    var button = document.querySelector("#button");
    button.addEventListener('click', function() {
      console.log('click');
      document.querySelector('sport-activity-list').loadData();
      //
    });




  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
