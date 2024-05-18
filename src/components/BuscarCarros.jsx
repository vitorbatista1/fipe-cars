import { useEffect, useState } from "react";
import { api, getModelsCars } from "../services/api";
import "../components/index.scss"

function BuscarModelosDeCarros() {
  const [models, setModels] = useState([]);


  const [selectedModel, setSelectedModel] = useState('');
  const [modelDetails, setModelDetails] = useState(null);
  const [dataDetails, setDataDetails] = useState([]);
  const [codigoDetails, setCodigoDetails] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [carroSelecionado, setCarroSelecionado] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModelsCars();
        setModels(data);
      } catch (error) {
        console.error("Erro ao buscar modelos de carros:", error);
      }
    };
    fetchData();
  }, []);




  useEffect(() => {
    const fetchModelDetails = async () => {
      if (selectedModel) {
        try {
          const response = await api.get(`/carros/marcas/${selectedModel}/modelos`);
          setModelDetails(response.data.modelos);
        } catch (error) {
          console.error("Erro na requisição:", error);
          throw error;
        }
      }
    }
    fetchModelDetails();
  }, [selectedModel]);


  useEffect(() => {
    const fetchDataModels = async () => {
      if (selectedModel && modelDetails && codigoDetails) {
        try {
          if (codigoDetails) {
            const response = await api.get(`/carros/marcas/${selectedModel}/modelos/${codigoDetails}/anos`);
            setDataDetails(response.data);
          } else {
            console.error("Código do modelo escolhido não encontrado.");
          }
        } catch (error) {
          console.error("Erro na requisição de buscar as datas:", error);
          throw error;
        }
      }
    };

    fetchDataModels();
  }, [selectedModel, modelDetails, codigoDetails]);


  useEffect(() => {
    const fetchModelDetails = async () => {
      if (selectedModel && selectedYear) {
        try {
          const response = await api.get(`/carros/marcas/${selectedModel}/modelos/${codigoDetails}/anos/${selectedYear}`);
          setCarroSelecionado(response.data)
        } catch (error) {
          console.error("Erro na requisição:", error);
          throw error;
        }
      }
    }
    fetchModelDetails();
  }, [selectedModel, selectedYear]);


  return (
    <div className="container">
      <h1>FIPE DE VEÍCULOS</h1>
      <p>Selecione um modelo de carro:</p>
      <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
        <option value="">Selecione um modelo</option>
        {models.map((model) => (
          <option key={model.codigo} value={model.codigo}>
            {model.nome}
          </option>
        ))}
      </select>

      {selectedModel && (
        <div className="details-container">
          {modelDetails && (
            <>
              <h2>Detalhes do Modelo</h2>
              <select
                value={codigoDetails}
                onChange={(e) => setCodigoDetails(e.target.value)}
              >
                {modelDetails.map((detail) => (
                  <option key={detail.codigo} value={detail.codigo}>
                    {detail.nome}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      )}

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Selecione um ano</option>
        {dataDetails.map((dat) => (
          <option key={dat.codigo} value={dat.codigo}>
            {dat.nome}
          </option>
        ))}
      </select>



      {carroSelecionado && typeof carroSelecionado === 'object' ? (
        <div className="datails-container">
          <h2>Informações do Carro selecionado</h2>
          <p>
            <strong>Marca:</strong> {carroSelecionado.Marca}
          </p>
          <p>
            <strong>Modelo:</strong> {carroSelecionado.Modelo}
          </p>
          <p>
            <strong>Ano Modelo:</strong> {carroSelecionado.AnoModelo}
          </p>
          <p>
            <strong>Preço do Veículo:</strong> <span className="valor">{carroSelecionado.Valor}</span>
          </p>
        </div>
      ) : (
        <p className="no-info">Nenhuma informação disponível para o carro selecionado.</p>
      )}





    </div>



  );
}

export default BuscarModelosDeCarros;
