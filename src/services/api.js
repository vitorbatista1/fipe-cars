import axios from "axios";

const baseURL = "https://parallelum.com.br/fipe/api/v1";

const api = axios.create({
  baseURL,
  timeout: 5000, 
});



const getModelsCars = async () => {
    try{
        const response = await api.get("/carros/marcas");
        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
}



export {getModelsCars, api}