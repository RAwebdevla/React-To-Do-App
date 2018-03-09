import React, { Component } from 'react'

class VisControl extends Component {
    render = () =>
    <div className="form-check">
      <input type="checkbox" className="form-check-input"
      checked={this.props.isChecked}
      onChange={(e)=>this.props.callback(e.target.checked)}/>  
      <label className="form-check-label">Show {this.props.description}</label>
    </div>
}

export default VisControl;