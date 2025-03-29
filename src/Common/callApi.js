const BaseUrl = "http://localhost:5000/";

export default async function callApi(url, data) {
  console.log("Request Data:", data);

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
