document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;

    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

    document.body.style.backgroundColor = color;
  });
