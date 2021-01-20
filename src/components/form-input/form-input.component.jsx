import React from 'react'

import './form-input.styles.scss'


//label props will selectively render a label
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange}  {...otherProps}/>
        {
            label ? 
             //this label will always has the class form-input-label but when the use will type something will have shrink too
            (<label className={`${              
                otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
                {label}
            </label>)
            :null
        }
    </div>
)
export default FormInput