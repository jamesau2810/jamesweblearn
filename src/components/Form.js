import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formFields: {
           username: '',
           comments: '',
           topic: 'react'
         }
      }
      this.fields = [
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'comments', label: 'Comments', type: 'textarea' },
        { name: 'topic', label: 'Topic', type: 'select', options: ['react', 'angular', 'vue'] }
      ]
    }
    handleChange = event => {
      const { name, value } = event.target;
      this.setState(prevState => ({
        formFields: {
          ...prevState.formFields,
          [name]: value
        }
      }));
    }
    handleSubmit = event => {
      const { username, comments, topic } = this.state.formFields;
      alert(`${username} ${comments} ${topic}`)
      event.preventDefault()
    }
  render() {
    const { formFields } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.fields.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formFields[field.name]}
                onChange={this.handleChange}
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={formFields[field.name]}
                onChange={this.handleChange}
              >
                {field.options.map(option => (
                  <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formFields[field.name]}
                onChange={this.handleChange}
              />
            )}
          </div>
        ))}
        <button>Submit</button>
      </form>
    )
  }
}

export default Form