import {useState} from "react";

export default function Form(){

    const[formData, setFormData] = useState({
                email: '',
                password: '',
                confirmPassword: '',
                okayToEmail: true
    })
    
    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password === formData.confirmPassword){
            console.log('successfully signed up')
        }else {
            console.log('passwords do not match')
            return
        }
        if(formData.okayToEmail){
            console.log('Thanks for signing up for our newsletter')
        }
    }

    function handleChange(e){
        const {name, value, type, checked}= e.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    console.log(formData)
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name= 'email'
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name= 'password'
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name= 'confirmPassword'
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name= 'okayToEmail'
                        checked={formData.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )

    // function handleSubmit(event) {
    //     event.preventDefault()
    // }
    
    // return (
    //     <div className="form-container">
    //         <form className="form" onSubmit={handleSubmit}>
    //             <input 
    //                 type="email" 
    //                 placeholder="Email address"
    //                 className="form--input"
    //             />
    //             <input 
    //                 type="password" 
    //                 placeholder="Password"
    //                 className="form--input"
    //             />
    //             <input 
    //                 type="password" 
    //                 placeholder="Confirm password"
    //                 className="form--input"
    //             />
                
    //             <div className="form--marketing">
    //                 <input
    //                     id="okayToEmail"
    //                     type="checkbox"
                        
    //                 />
    //                 <label htmlFor="okayToEmail">I want to join the newsletter</label>
    //             </div>
    //             <button 
    //                 className="form--submit"
    //             >
    //                 Sign up
    //             </button>
    //         </form>
    //     </div>
    // )


    // const[formData, setFormData] = React.useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     comment: '',
    //     isFriendly : true,
    //     employment : '',
    //     favColor : ''
    // })
    // function handleChange(e) {
    //     const {name, value, type, checked} = e.target
    //     setFormData(prev => {
    //         return {
    //             ...prev,
    //             [name]: type === 'checkbox' ? checked : value
    //         }
    //     })   
    // }
    // // console.log(formData)
    // console.log(formData.favColor)

    // function handleSubmit(e){
    //     e.preventDefault() 

    // }
   
    // return(
    //     <form onSubmit={handleSubmit}>
    //         <input 
    //         type="text" 
    //         placeholder="First Name"
    //         onChange={handleChange}
    //         name='firstName'
    //         value={formData.firstName}
    //         />
    //         <input 
    //         type="text" 
    //         placeholder="Last Name"
    //         onChange={handleChange}
    //         name='lastName'
    //         value={formData.lastName}
    //         />
    //         <input 
    //         type="email" 
    //         placeholder="Email"
    //         onChange={handleChange}
    //         name='email'
    //         value={formData.email}
    //         />
    //         <textarea
    //             value={formData.comment}
    //             name='comment'
    //             onChange={handleChange}>
    //             Whatever....
    //             </textarea>

    //         <input 
    //         type="checkbox"
    //         id= 'isFriendly' 
    //         checked={formData.isFriendly}
    //         onChange={handleChange} 
    //         name = 'isFriendly'
    //         />
    //         <label htmlFor="isFriendly">Are you friendly?</label>

    //         <br />
    //         <br />

    //         <fieldset>
    //             <legend>Current employment status</legend>
                
    //             <input 
    //                 type="radio"
    //                 id="unemployed"
    //                 name="employment"
    //                 value='unemployed'
    //                 checked={formData.employment=== 'unemployed'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="unemployed">Unemployed</label>
    //             <br />
                
    //             <input 
    //                 type="radio"
    //                 id="part-time"
    //                 name="employment"
    //                 value='part-time'
    //                 checked={formData.employment=== 'part-time'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="part-time">Part-time</label>
    //             <br />
                
    //             <input 
    //                 type="radio"
    //                 id="full-time"
    //                 name="employment"
    //                 value='full-time'
    //                 checked={formData.employment=== 'full-time'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="full-time">Full-time</label>
    //             <br />
                
    //         </fieldset>
    //         <br />
    //         <br />

    //         <label htmlFor="favColor">What is your favorite color?</label>
    //         <br />
    //         <select 
    //         id="favColor"
    //         value={formData.favColor}
    //         name= 'favColor'
    //         onChange={handleChange}>
    //             <option value="">--choose--</option>
    //             <option value="black">Black</option>
    //             <option value="orange">Orange</option>
    //             <option value="yellow">Yellow</option>
    //             <option value="green">Green</option>
    //             <option value="blue">Blue</option>
    //             <option value="indigo">Indigo</option>
    //             <option value="violet">Violet</option>
    //         </select>
    //         <br />
    //         <button>Submit</button>
    //     </form>
    // ) 
    }