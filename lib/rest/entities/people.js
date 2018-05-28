/*
* Title: people.js
* Purpose: Contains all people endpoints
*/

// Importing modules
import axios from 'axios';
import configSettings from '../../config';

// Constants
const baseURL = configSettings.url + '/api/people';

/**
 * Used to get people
 * @returns {object} an object with error and data.
 */
const GetPeople = () =>
{
  axios.get(baseURL)
    .then(res => {
      return { data: res.data, error: false }
    })
    .catch(function (error) {
      return { data: '', error: error }
    });
}

/**
 * Used to get people
 * @param {number} id - The id of the person.
 * @returns {object} - An object with error and data.
 */
const GetPerson = (id) =>
{
  axios.get(baseURL + '/' + id)
    .then(res => {
      return { data: res.data, error: false };
    })
    .catch(function (error) {
      return { data: '', error: error };
    });
}

const endpoints = {
    GetPeople: GetPeople,
    GetPerson: GetPerson
}

export default endpoints