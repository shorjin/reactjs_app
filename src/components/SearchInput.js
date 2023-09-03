// this used to start search engine
import React from "react";


class SearchInput extends React.Component {
    
state={entry:""}
onSubmit=(event)=>{
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
}
 handleSelection=(selection)=>{
  this.state.entry=selection;
  this.props.onSearchSubmit(selection);


}
  render() {
    return (
      <div className='ui segment'style={{margin:'2%'}}>
        <form className='ui form' onSubmit={this.onSubmit}>
            <div className="ui field">
                <div className="ui massive icon input">
                    <input 
                    type='text' 
                    placeholder="Type your search..." 
                    onChange={(event)=>this.setState({
                        entry:event.target.value})}
                    value={this.state.entry}
                
                    />
                    <i className='ui icon search'></i>
                </div>
            </div>

        </form>
        {/* add a words filter function */}
        <div className="filters">
          <div onClick={() => this.handleSelection('Nature')}>Nature</div>
          <div onClick={() => this.handleSelection('Birds')}>Birds</div>
          <div onClick={() => this.handleSelection('NYC')}>NYC</div>
          <div onClick={() => this.handleSelection('Dogs')}>Dogs</div>
        </div>
        
      </div>
    )
  }
}

export default SearchInput

