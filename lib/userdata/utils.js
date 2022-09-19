import axios from 'axios';
import {connString} from './constants'

export const postData = async (formData) => {
    
    try {
      const { data } = await axios.post('https://sheet.best/api/sheets/213a754a-de70-423d-acef-53ee434a12a1',formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };