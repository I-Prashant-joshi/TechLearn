const BaseUrl =
 true
    ? "https://techlearnbackend.onrender.com"
    : "http://localhost:5000/";

export  async function callApi(url, data) {

  const api = await fetch(`${BaseUrl}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data), 
  });

  const response = await api.json();
  return response;
}
export async function callGetApi(url) {

  const api = await fetch(`${BaseUrl}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
    },
  });

  const response = await api.json();
  return response;
}
