import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from'./components/Subject';
import Nav from './components/Nav';
import Content from'./components/Content';
import { tsConstructorType } from '@babel/types';
class  App extends Component {
  constructor(props){
  super(props);
    this.state = {
      mode :'read',
      selected_cont_id :2,
      Subject:{title:'WEB', sub:'world wide web!'},
      welcome :{title:'welcome', desc:'hello , React!'},
      contents:[
        {id:1, title:'html', desc:"인포메이션"},
        {id:2, title:'css', desc:"디자인"},
        {id:3, title:'javascript', desc:"자바스크립트"}
      ]
    }
}
render(){
  var _title, _desc = null;
  if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
  }else if (this.state.mode === 'read'){
    var i =0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_cont_id){
        _title = data.title;
        _desc = data.desc;
      }
      i = i+1;
    }
      
  }
  return (
    <div className="App">
      <Subject
      title={this.state.Subject.title} 
      sub={this.state.Subject.sub}
      onChangePage={function(){
        //alert('dd');
        this.setState({mode:'welcome'});
      }.bind(this)}
      >
      </Subject>
      <Nav 
      onChangePage={function(id){
       
        this.setState({
          mode: 'read',
        selected_cont_id : Number(id)
        })
      }.bind(this)}
      data={this.state.contents}>
      </Nav>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
}
}
export default App;




