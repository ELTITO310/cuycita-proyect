import './Home.scss'
import Heart from './sections/heart'
import Letters from './sections/letters'
import Memories from './sections/memories'
import Layout from '../components/Layout'

const App = () => {

  return ( <>
    <Layout>
      <Heart />

      <Letters />

      <Memories/>
    </Layout>
  </>  
  );
}
 
export default App;