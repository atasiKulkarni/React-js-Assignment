class App extends React.Component {

  constructor() {
    super();

    this.state = {
      heightFeet: '',
      //heightInch: '',
      weight: '' };


    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleHeightFeetChange(event) {
    this.setState({
      heightFeet: event.target.value });

  }

  handleHeightInchChange(event) {
    this.setState({
      heightInch: event.target.value });
      

  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value });

  }
  // var height = Number(this.state.heightFeet);
  // let weight = this.state.weight;
  calculateBMI() 
  {
    if (this.state.weight && this.state.heightFeet) 
    {
      

      var height = Number(this.state.heightFeet);
     

      let weight = this.state.weight;
      
        var bmi = weight / (height/100 * height/100);
        bmi = bmi.toFixed(2);
     
       return bmi;
      

  
      
   }
  }

  getBMIResults(bmi) {
    let bmiResults = {
      label: '',
      alertClass: '' };


    if (bmi <= 18.5) {
      bmiResults.label = 'You are Underweight';
      bmiResults.alertClass = 'alert-danger';
    } else
    if (bmi <= 24.9) {
      bmiResults.label = 'Your Weight is Normal';
      bmiResults.alertClass = 'alert-success';
    } else
    if (bmi <= 29.9) {
      bmiResults.label = 'You are Overweight';
      bmiResults.alertClass = 'alert-warning';
    } else
    if (bmi >= 30) {
      bmiResults.label = 'You are Obesity';
      bmiResults.alertClass = 'alert-danger';
    } else {
      bmiResults.label = 'You BMI Calculator is here';
      bmiResults.alertClass = 'alert-primary';
    }

    return bmiResults;
  }

  render() {

   let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return /*#__PURE__*/(
      React.createElement("div", { className: "App container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-12" }, /*#__PURE__*/
      React.createElement("h1", null, "BMI Calculator"))), /*#__PURE__*/

     

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("legend", null, "Enter Your Weight in kg:"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
      React.createElement("input", { className: "form-control", id: "bmiWeight", type: "text", value: this.state.weight, onChange: this.handleWeightChange }), /*#__PURE__*/
      React.createElement("label", { className: "control-label", htmlFor: "bmiWeight" }, "kg")))), /*#__PURE__*/




      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("legend", null, "Enter Your Height in cm:"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
      React.createElement("input", { className: "form-control", id: "bmiHeightFeet", type: "text", value: this.state.heightFeet, onChange: this.handleHeightFeetChange }), /*#__PURE__*/
      React.createElement("label", { className: "control-label", htmlFor: "bmiHeightFeet" }, "cm")))), /*#__PURE__*/
     
      

      React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
     //React.createElement("input", { className: "form-control", id: "bmiHeightInch", type: "text", value: this.state.heightInch, onChange: this.handleHeightInchChange }), /*#__PURE__*/
     
      React.createElement("button", { type: "submit", }, "Reset")))), /*#__PURE__*/
      





      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement(BmiDisplay, { bmi: bmi, label: results.label, alertClass: results.alertClass })))));





  }}


function BmiDisplay(props) {
  return /*#__PURE__*/(
    
    React.createElement("div", { className: "bmi-result alert " + props.alertClass }, /*#__PURE__*/
    //React.createElement("br", null), /*#__PURE__*/
   
  React.createElement("img", {src: "image.gif"}), /*#__PURE__*/
    React.createElement("div", null, props.bmi || 'Hello!!'), /*#__PURE__*/
    React.createElement("div", null, props.label,)));


}

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));