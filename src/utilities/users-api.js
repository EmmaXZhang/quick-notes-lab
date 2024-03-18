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

  if (res.ok) {
    //const token = await res.json();
    const token = await res.json();
    return token;
  } else {
    throw new Error("Invalid Sign up");
  }
}
