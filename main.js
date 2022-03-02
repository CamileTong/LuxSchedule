(function() {
    "use strict";

    const URL_BASE = "https://dog.ceo/api/breed/";
  window.addEventListener("load", initialize);

  /**
   * Sets up the response functionality for the beginning
   */
  function initialize() {
    // Seletct: Choose a dog breed and get a picture of that kind of dog
    id("select").addEventListener("change", makeRequest);
  }

  /**
   * Function to start the ajax fetch call to Dog API once the selected option is changed
   * Upon success, shows a random picture of a dog of selected breed on the page.
   */
  function makeRequest() {
    let breed = qs("option:checked").value;
    //start fetch call chain
    fetch(URL_BASE + breed + "/images/random")
      .then(checkStatus)
      .then(JSON.parse) // parse the json so the next "then" gets a JSON object
      .then(getUrl)
      .then(showImg)
      .catch(handleError);
  }

  /**
    * Accept the fetching data and returns the url of image
    * @param {Object} text - the JSON object that is was returned from the server
    * @returns {url} the url of image
  */
  function getUrl(text) {
    return text.message;
  }
})();