export const getCharacterData = async () => {
  // const response = await fetch("https://httpstat.us/500");   // test endpoint for 500 errors
  const randomPage = (Math.floor(Math.random() * 34)+1)
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${randomPage}`
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
