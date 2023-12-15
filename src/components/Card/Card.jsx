import { CardActor, CardSubTitle, CardTitle, Container } from "./stylesCard";

const Card = ({ actor }) => {
  return (
    <div>
      <CardActor>
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt="imagem-filme"
          width="200px"
        />
        <Container>
          <CardTitle>{actor.name}</CardTitle>
          <CardSubTitle>{actor.character}</CardSubTitle>
        </Container>
      </CardActor>
    </div>
  );
};

export default Card;
