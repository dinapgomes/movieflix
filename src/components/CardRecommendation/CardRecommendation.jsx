import { ListaRecomendacao } from "./styles";

const CardRecommendation = ({ recommendations = [] }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };
  return (
    <div>
      <ListaRecomendacao>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
              alt="imagem-filme"
            />
            <h2>{recommendation.title}</h2>
            <p>{formatDate(recommendation.release_date)}</p>
          </li>
        ))}
      </ListaRecomendacao>
    </div>
  );
};

export default CardRecommendation;
