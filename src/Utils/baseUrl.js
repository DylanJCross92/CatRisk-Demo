/*const baseUrl = `http://${
 process.env.NODE_ENV === 'development'
 ? 'localhost:8080'
 : 'pcg.iac'
 }/api/rest/v2`;*/

/*
 const baseUrl = `${
 process.env.NODE_ENV === 'development'
 ? 'https://iac-api.dev-int.icg360.net'
 : 'https://iac-api.dev-int.icg360.net'
 }/api/rest/v2`;
 */

const baseUrl = process.env.API_URL;

console.log(baseUrl);

export default baseUrl;