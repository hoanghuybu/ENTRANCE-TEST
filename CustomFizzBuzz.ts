const CustomFizzBuss = () => {
  for (var i = 1; i <= 100; i++) {
    var newIndex = i.toString();
    if (i % 3 === 0) newIndex = "Foo";
    if (i % 5 === 0) newIndex = "Bar";
    if (i % 15 === 0) newIndex = "FooBar";
    console.log(newIndex);
  }
};

CustomFizzBuss();
