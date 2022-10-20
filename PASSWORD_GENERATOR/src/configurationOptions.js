const Configuration  = (props) =>
{

    

    return(

        <React.Fragment>

            <div>
                    <label htmlFor = "length_of_chars">Number of Character</label>
                    <input type = "number" id = "length_of_chars" className = " f-right" 
                    
                    onKeyUp = {e => props.setCharCount(e.target.value)}
            />

            </div>

            <div>

                    <label htmlFor = "include_number">Include Number</label>
                    <input type = "checkbox"  id = "include_number" className = " f-right"
                    
                    
                    onChange = {e => props.setIncNumber(e.target.checked)}/>

            </div>
        
            <div>

                    <label htmlFor = "special_char">Include Special Characters</label>
                    <input type = "checkbox" id ="special_char" className = " f-right" 

                  
                     onChange = {e => props.setIncSplChars(e.target.checked)}/>
                  

            </div>
            

            <div>

                    <label htmlFor ="casing">Casing</label>
                        <select defaultValue ="" id="casing" className = "f-right"
                        
                        onChange = {e => props.setCasing(e.target.value)}
                        
                    
                        >
                    
                            <option disabled value ="">Select Casing</option>
                            <option  value = "lower">LowerCase</option>
                            <option value = "upper">UpperCase</option>
                            <option  value = "mixed">MixedCase</option>

                        </select>
            </div>
           

        </React.Fragment>

    );
} 