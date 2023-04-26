import PropTypes from 'prop-types';
import { ContainerCard } from './styles';

export function CardCharacter({ image, name, gender, specie }) {
  return (
    <ContainerCard>
      <div className="image">
        <img src={image} alt={name} />
      </div>

      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Gênero: {gender}</li>
          <li>Espécie: {specie}</li>
        </ul>
      </div>
    </ContainerCard>
  )
}

CardCharacter.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  specie: PropTypes.string
}