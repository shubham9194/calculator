import React, { Component } from 'react';
import  './App.css'
class App extends Component {
  constructor(){
    super()
    this.state= {number : ""} ;
    this.butPres=this.butPres.bind(this);
    this.equal=this.equal.bind(this);
    this.count=0;
  }
   
  equal()
  {
     if(this.butPres.k=="+")
      {
        var output=this.butPres.n1+this.butPres.n2;
        console.log(output);
      }
  }




  butPres(event)
  {
    debugger;
    var num = event.target.innerText
    var oldStateValue = this.state.number
    var newStateVal = oldStateValue + num
    this.setState({number : newStateVal})
    console.log(this.this.count);
    if(num=="+" ||num=="-"|| num=="/" ||num=="*" || num=="=" && this.count<1)
      {
           var l= this.state.number.length;
           var t="";
           for(var i=0;i<l;i++)
            {
               t=t+this.state.number[i];
            }
            var n1=parseInt(t);
            this.count=1;
            var k=num;
      }
    else if(this.count==1)
      {
        var a= this.state.number.length;
        var t1="";
        for(var j=l+1;j<a;j++)
          {
            t1=t1+this.state.number[j];
          }
          var n2=parseInt(t1);
         this.equal;
        
      }

    //document.getElementById('screen').value = document.getElementById('screen').value + event.target.innerText
  }

  render() {    
    return (
      <div>
      <div className="TextAlignCenter">Calculator</div>
        <div className="CalPro">
          <div id="screen" className="Screen">
            <span className="Out">{this.state.number}</span>
            
          </div>
          <div className="ButtAlign">
            <button className="Butt" onClick={this.butPres}>1</button>
            <button className="Butt"onClick={this.butPres}>2</button>
            <button className="Butt"onClick={this.butPres}>3</button>
            <button className="Butt"onClick={this.butPres}>+</button>
         </div>
         <div className="ButtAlign">
            <button className="Butt"onClick={this.butPres}>4</button>
            <button className="Butt"onClick={this.butPres}>5</button>
            <button className="Butt"onClick={this.butPres}>6</button>
            <button className="Butt"onClick={this.butPres}>-</button>
         </div>
         <div className="ButtAlign">
            <button className="Butt"onClick={this.butPres}>7</button>
            <button className="Butt"onClick={this.butPres}>8</button>
            <button className="Butt"onClick={this.butPres}>9</button>
            <button className="Butt"onClick={this.butPres}>*</button>
         </div>
         <div className="ButtAlign">
            <button className="Butt"onClick={this.butPres}>%</button>
            <button className="Butt"onClick={this.butPres}>0</button>
            <button className="Butt"onClick={this.butPres}>=</button>
            <button className="Butt"onClick={this.butPres}>c</button>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
