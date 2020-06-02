// Get references to page elements
var $menuCategory = $("#menu-category");
var $menuDescription = $("#menu-description");
var $submitBtn = $("#submit");
var $menuList = $("#menu-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveMenu: function(menu) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/menus",
      data: JSON.stringify(menu)
    });
  },
  getMenus: function() {
    return $.ajax({
      url: "api/menus",
      type: "GET"
    });
  },
  deleteMenu: function(id) {
    return $.ajax({
      url: "api/menus/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshMenus = function() {
  API.getMenus().then(function(data) {
    var $menus = data.map(function(menu) {
      var $a = $("<a>")
        .text(menu.category)
        .attr("href", "/menu/" + menu.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": menu.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $menuList.empty();
    $menuList.append($menus);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var menu = {
    category: $menuCategory.val().trim(),
    description: $menuDescription.val().trim()
  };

  if (!(menu.category && menu.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveMenu(menu).then(function() {
    refreshMenus();
  });

  $menuCategory.val("");
  $menuDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteMenu(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$menuList.on("click", ".delete", handleDeleteBtnClick);
