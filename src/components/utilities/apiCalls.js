export const getCharacterData = async () => {
  // const response = await fetch("https://httpstat.us/500");   // test endpoint for 500 errors
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=34"
  );
  if (response.status >= 200 && response.status <= 299) {
    // No errors
    const jsonResponse = await response.json();
    return jsonResponse
  } else {
    // Handle server errors
    console.log(
      `Error! Code: ${response.status}`
    );
    return response.status;
  }
};
