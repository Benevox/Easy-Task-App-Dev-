const signup = async (data, signInNewUser, navigate) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(
    "https://precious-macaulay-super-duper-rotary-gw57j5w5vr92vvj4-8000.preview.app.github.dev/api/auth/register",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      signInNewUser(result);
      navigate("/onboarding");
    })
    .catch((error) => console.log("error", error));
};

export default signup;
