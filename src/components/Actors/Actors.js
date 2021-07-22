import { Wrapper, Image } from "./Actors.Styles";
import PropTypes from 'prop-types'

const Actors = ({name, character, imageUrl}) => {
    return (
        <Wrapper>
            <Image src={imageUrl} alt='actor=thumb' />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}

Actors.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actors