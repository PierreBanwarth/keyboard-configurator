import './App.css';
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 0, label: 'C', backgroundColor: '#FBA51A', color: '#FEB74F'},
  { value: 1, label: 'C#', backgroundColor: '#F4EB20', color: '#C1DD89'},
  { value: 2, label: 'D', backgroundColor: '#9BCA3C', color: '#8FC975'},
  { value: 3, label: 'D#', backgroundColor: '#9BCA3C', color: '#8FC975'},
  { value: 4, label: 'E', backgroundColor: '#71C055', color: '#8DD0B5'},
  { value: 5, label: 'F', backgroundColor: '#70C5A4', color: '#70C3ED'},
  { value: 6, label: 'F#', backgroundColor: '#40B8EA', color: '#6783C2'},
  { value: 7, label: 'G', backgroundColor: '#436FB6', color: '#756BB0'},
  { value: 8, label: 'G#', backgroundColor: '#5B52A3', color: '#EBE3ED'},
  { value: 9, label: 'A', backgroundColor: '#87519F', color: '#D671AD'},
  { value: 10, label: 'A#', backgroundColor: '#D2499B', color: '#FEFEFE'},
  { value: 11, label: 'B', backgroundColor: '#EC197A', color: '#F48AA8'},
]
const styles = {
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    backgroundColor: state.data.backgroundColor,
    
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'white',
    backgroundColor: state.data.backgroundColor,
    padding :'0 !important',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    color: 'white',
    padding: '0 !important',
    margin: '0 !important',
  }),
  Input: (provided, state) => ({
    ...provided,
    color: 'white',
    padding: '0 !important',
    margin: '0 !important',
  })

};

const optionOctave = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
]

class Key extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      ligne: props.ligne,
      colonne: props.colonne,
      handleChange: props.onChange,
      dataKey : props.dataKey,
    };
  }

  handleChangeNotePull(event) {
     this.state.handleChange('note','pull', event, this.state)
  }
  handleChangeNotePush(event) {
    this.state.handleChange('note', 'push', event, this.state)
  }
  handleChangeOctavePull(event) {
    this.state.handleChange('octave', 'pull', event, this.state)
  }
  handleChangeOctavePush(event) {
    this.state.handleChange('octave', 'push', event, this.state)
  }

  render() {
    return <td>
      <table>
        <tbody>
          <tr>
            
            <td>
              <Select className='note-select'  styles={styles} options={options} value={options[this.props.dataKey.pull]} onChange={this.handleChangeNotePull.bind(this)} />
              <Select className='note-select'  styles={styles} options={options} value={options[this.props.dataKey.push]} onChange={this.handleChangeNotePush.bind(this)} />
            </td>
            <td>
              <Select options={optionOctave} value={optionOctave[this.props.dataKey.octpull]} onChange={this.handleChangeOctavePull.bind(this)} />
              <Select options={optionOctave} value={optionOctave[this.props.dataKey.octpush]} onChange={this.handleChangeOctavePush.bind(this)} />
            </td>
          </tr>

       </tbody>
      </table>
    </td>; 
  }
}



class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChangeKey: props.onChange,
    }
  }
  handleChange = (type, pushpull, event, buttonState) => {
    this.state.handleChangeKey(type, pushpull ,event, buttonState)
  }
  render() {    
    return (    
      this.props.keyboard.map((row, index) =>
        <tr key={index}>
          {
            row.map(
              (y, ind) =>  <Key key={index+1*ind+1} dataKey={y} onChange={this.handleChange} ligne={index} colonne={ind}></Key>
            )
          }
        </tr>
      )
    )
  }
}
const optionKeyboardDefault = [
  {
    value: 0, 
    label: 'Anglo Concertina'
  },{
    value: 1,
    label: 'Accordéon Chromatique',
  },{
    value: 2,
    label: 'Accordéon Diatonique (Sol/Do)',
  }
]

const instrumentKeyboardData = [
  [
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
    [{ push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}, { push: 4, pull: 4 , octpull : 1, octpush : 1}],
  ],
  [
    [{ push: 9, pull: 9 , octpull : 1, octpush : 1}, { push: 10, pull: 10 , octpull : 1, octpush : 1}, { push: 11, pull: 11 , octpull : 1, octpush : 1}],
    [{ push: 0, pull: 0 , octpull : 2, octpush : 2}, { push: 1, pull: 1 , octpull : 2, octpush : 2}, { push: 2, pull: 2 , octpull : 2, octpush : 2}],
    [{ push: 3, pull: 3 , octpull : 2, octpush : 2}, { push: 4, pull: 4 , octpull : 2, octpush : 2}, { push: 5, pull: 5 , octpull : 2, octpush : 2}],
    [{ push: 6, pull: 6 , octpull : 2, octpush : 2}, { push: 7, pull: 7 , octpull : 2, octpush : 2}, { push: 8, pull: 8 , octpull : 2, octpush : 2}],
    [{ push: 9, pull: 9 , octpull : 2, octpush : 2}, { push: 10, pull: 10 , octpull : 2, octpush : 2}, { push: 11, pull: 11 , octpull : 2, octpush : 2}],
    [{ push: 0, pull: 0 , octpull : 3, octpush : 3}, { push: 1, pull: 1 , octpull : 3, octpush : 3}, { push: 2, pull: 2 , octpull : 3, octpush : 3}],
    [{ push: 3, pull: 3 , octpull : 3, octpush : 3}, { push: 4, pull: 4 , octpull : 3, octpush : 3}, { push: 5, pull: 5 , octpull : 3, octpush : 3}],
    [{ push: 6, pull: 6 , octpull : 3, octpush : 3}, { push: 7, pull: 7 , octpull : 3, octpush : 3}, { push: 8, pull: 8 , octpull : 3, octpush : 3}],
    [{ push: 9, pull: 9 , octpull : 3, octpush : 3}, { push: 10, pull: 10 , octpull : 3, octpush : 3}, { push: 11, pull: 11 , octpull : 3, octpush : 3}],
    [{ push: 0, pull: 0 , octpull : 4, octpush : 4}, { push: 1, pull: 1 , octpull : 4, octpush : 4}, { push: 2, pull: 2 , octpull : 4, octpush : 4}],
    [{ push: 3, pull: 3 , octpull : 4, octpush : 4}, { push: 4, pull: 4 , octpull : 4, octpush : 4}, { push: 5, pull: 5 , octpull : 4, octpush : 4}],
    [{ push: 6, pull: 6 , octpull : 4, octpush : 4}, { push: 7, pull: 7 , octpull : 4, octpush : 4}, { push: 8, pull: 8 , octpull : 4, octpush : 4}],
  ],[
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
    [{ push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}, { push: 6, pull: 6 , octpull : 1, octpush : 1}],
  ],
]
class KeyboardManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeyboard: 1,
      currentKeyboard: instrumentKeyboardData[1]
    }
  }

  handleChangeKeyboard(e) {
    var tmp = JSON.parse(JSON.stringify(instrumentKeyboardData[e.value]));
    this.setState({
      selectedKeyboard: e.value,
      currentKeyboard: tmp
    })
  }

  handleChangeKey(type, pushpull, e, buttonState) {
    var tempKeyboard = this.state.currentKeyboard
    if(type === 'note'){
      tempKeyboard[buttonState.ligne][buttonState.colonne][pushpull] = e.value
      this.setState({
        currentKeyboard : tempKeyboard
      })
    }else if(type === 'octave'){
      if(pushpull === 'push'){
        tempKeyboard[buttonState.ligne][buttonState.colonne]['octpush'] = e.value
        this.setState({
          currentKeyboard : tempKeyboard
        })
      }else if(pushpull ==='pull'){
        tempKeyboard[buttonState.ligne][buttonState.colonne]['octpull'] = e.value
        this.setState({
          currentKeyboard : tempKeyboard
        })
      }
    }
  }

  FlattenArray(){
    var result = [
      [],[]
    ]
    var test = [].concat.apply([], this.state.currentKeyboard)
    var push = test.map((
      (row) => row.push + 12*row.octpush)
    )
    result[0] = push
    var pull = test.map((
      (row) => row.pull + 12*row.octpull)
    )
    result[1] = pull
    
    return result;
  }

  render() {
    let value = this.FlattenArray().map(e=>JSON.stringify(e)).join(',\n');

    return (
      <div className='main-content'>
        <div className='result-area'>
          <label>Result</label>
          <textarea className='input-text-area' readOnly value={value} />
        </div>
        <Select
          options={optionKeyboardDefault}
          value={optionKeyboardDefault[this.state.selectedKeyboard]}
          onChange={this.handleChangeKeyboard.bind(this)}
        />
        
        <div className='array-area'>
          <table>
            <tbody>
              <Keyboard keyboard={this.state.currentKeyboard} onChange={this.handleChangeKey.bind(this)}/>
            </tbody>
          </table>
          
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="image">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
          alt="Grapefruit slice atop a pile of other slices"></img>
      </div>
      <h1 className='title'>Keyboard Configurator</h1>
      
      Keyboard Configurator
      <header className="App-header">
        <KeyboardManager></KeyboardManager>
      </header>
    </div>
  );
}
export default App;
