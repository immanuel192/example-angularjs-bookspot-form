var app = angular.module('bookspot', []);

app.controller('bookmgr', ['$scope', function($scope) {

  $scope.displayMode = "list";
  $scope.currentBook = null;

  $scope.listBooks = function () {
    $scope.books = [
      { id: '3455f5af-db4b-49a8-8222-0d8fa6b6d9d3', title: "Book1", 
          category: "Programming Language", price: 1.25 },
      { id: '18c83bc3-9607-4f26-8281-cb360afb41bc', title: "Book2", 
          category: "Programming Language", price: 2.45 },
      { id: '552b3ca5-cd81-40e7-97c6-3bcd2a3bec17', title: "Book3", 
          category: "Programming Language", price: 4.25 },
      { id: 'e48f724a-f332-4a6d-be37-e21d9a94db89', title: "Book4", 
          category: "Programming Language", price: 3.15 },
      { id: '607b0ff8-2222-4c64-8f45-62c85b70b2f5', title: "Book5", 
          category: "Programming Language", price: 4.25 }
    ];
  }

  $scope.loadEditForm = function (book) {
    $scope.currentBook = book ? angular.copy(book) : {};
    $scope.displayMode = "edit";
  }

  $scope.cancelEditForm = function () {
    $scope.currentBook = null;
    $scope.displayMode = "list";
  }
  
  $scope.listBooks();

  var generateUUID = function(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
        replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
      return uuid;
  };
}]);
