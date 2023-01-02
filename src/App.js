import Nav from './components/nav.js';
let boxStyle = {
  display: 'flex',
  justifyContent: 'center'
}
export default function App() {
  return (
  <div style={boxStyle} className='text-center'>
    <Nav />
  </div>
  )
}
