<script>
  // Returns an array of recipes based off ingredient search
  function runSearch() {
    var queryString = decodeURIComponent(window.location.search);

    var ingredientList = queryString.split("?");

    var recipeList =  [];

    // Create a list of recipes called recipeList
    var search = firebase.database().ref(ingredientList[1]);
    search.on(
      "value",
      function(snap) {
        snap.forEach(function(snapshot) {
          recipeList.push(snapshot.key);
        });
    });
    return recipeList;
  }
</script>
