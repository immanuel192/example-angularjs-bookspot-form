describe("Book Management Controller Unit testing", function () {
  var controller, mockScope;

  // Set up the module
  beforeEach(angular.mock.module('bookspot'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    mockScope = $rootScope.$new();
    controller = $controller("bookmgr", {
      $scope: mockScope
    });
  }));

  it('assert the initial states of controller', function() {
    expect(mockScope.displayMode).toEqual("list");
    expect(mockScope.currentBook).toBeNull();
  });

  it('call listBooks() should return 5 books', function() {
    mockScope.listBooks();

    expect(mockScope.books.length).toEqual(5);
    for(var i=0; i<5; i++) {
      expect(mockScope.books[i].title).toEqual("Book" + (i + 1));
    }
  });

  it('call loadEditForm() without parameters', function() {
    mockScope.loadEditForm();

    expect(mockScope.displayMode).toEqual("edit");
    expect(mockScope.currentBook).not.toBeNull();
    expect(mockScope.currentBook.id).toBeUndefined();
  });

  it('call loadEditForm() with a valid book', function() {
    var book = { id: '552b3ca5-cd81-40e7-97c6-3bcd2a3bec17', title: "Book3", 
          category: "Programming Language", price: 4.25 };

    mockScope.loadEditForm(book);

    expect(mockScope.displayMode).toEqual("edit");
    expect(mockScope.currentBook).not.toBeNull();
    expect(mockScope.currentBook.id).toEqual('552b3ca5-cd81-40e7-97c6-3bcd2a3bec17');
    expect(mockScope.currentBook.title).toEqual("Book3");
  });
});
