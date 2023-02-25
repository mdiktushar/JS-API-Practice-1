const loadUser = () => {
  fetch("https://randomuser.me/api/")
    .then((Response) => Response.json())
    .then((data) => dsiplayUser(data));
};

const dsiplayUser = (user) => {
  const name = document.getElementById("name");
  const gender = document.getElementById("gender");
  name.innerText = user.results[0].name.last;
  gender.innerText = user.results[0].gender;
  console.log(user);
};

loadUser();
