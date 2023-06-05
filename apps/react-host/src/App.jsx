import { VueRemoteOneWrap } from './VueRemoteOneWrap.jsx';
import { VueRemoteTwoWrap } from './VueRemoteTwoWrap.jsx'
import ReactRemoteOne from 'reactRemoteOne/component';
import ReactRemoteTwo from 'reactRemoteTwo/component'

const App = () => {
  return (
    <div className='host-react'>
      <h1>React Host </h1>
      <VueRemoteOneWrap/>
      <VueRemoteTwoWrap/>
      <ReactRemoteTwo title='Remote Bootstrap'/>
      <ReactRemoteOne title='Remote Bootstrap'/>
    </div>
  )
};


export default App;