import {letters} from '../../utils/texts'
import './letters.scss'
import Section from '../../components/Section'

const Letters = () => {
    return ( <Section id='letter' className="letter">
    {letters.map((letter, i) => {
      const text = letter.letter.split('**')
      if(i % 2 === 0) {
        return <div key={i}>
        <div className="image" style={{
          backgroundImage: `url(${letter.src})`
        }}>
        </div>
        <p>{text[0]} <b>{text[1]}</b> {text[2]}</p>
      </div>
      } else {
        return <div key={i}>
        <p>{text[0]} <b>{text[1]}</b> {text[2]}</p>
        <div className="image" style={{
          backgroundImage: `url(${letter.src})`
        }}>
        </div>
      </div>
      }
    })}
  </Section> );
}
 
export default Letters;