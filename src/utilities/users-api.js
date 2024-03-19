// BASE URL for backend API (backend route)
const BASE_URL = "/api/users";

export async function signUp(userData) {
  // it uses the fetch function to send a POST request to a specified URL (BASE_URL). The request includes the user data in the request body,
  //serialized as JSON using JSON.stringify(userData).
  const res = await fetch(BASE_URL, {
    //sending data to backend
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  // return token = res.json()
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign up");
  }
}

export async function login(credentials) {
  //fetch(BASE_URL+'/login')
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    const token = res.json();
    return token;
  } else {
    throw new Error("Fail login");
  }
}
