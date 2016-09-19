function CharactersCtrl($scope) {
    $scope.characters = [
      { menu: 'home'},
      { menu: 'about'},
      { menu: 'services'},
      { menu: 'portfolio' },

      { menu2: 'team' },
      { menu2: 'shop' },
      { menu2: 'blog' },
      { menu2: 'contact' },

       { title1: 'Latest Project' },
      { title2: 'Design Projects' },
      { title3: 'Featured Project' },
      { title4: 'Protein Jar Packaging' },

       { subtitle1: 'MACKBOOK AIR MOCKUP FREE PSD GRAPHICS' },
      { subtitle2: 'PSD FILES AND RESOURCES FOR FREE DOWNLOAD' },
      { subtitle3: 'PROFESSIONAL BUSINESS WEBSITE TEMPLATE FREE PSD' },
      { subtitle4: 'PROTEIN JAR PACKAGING MOCKUP FREE PSD GRAPHICS' },
    ];
}

angular
  .module('myApp')
  .controller('CharactersCtrl', CharactersCtrl);