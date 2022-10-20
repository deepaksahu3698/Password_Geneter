const Container = () =>
{

    const [charCount,setCharCount] = React.useState(0);
    const [incNumber,setIncNumber] = React.useState(false);
    const [incSplChars, setIncSplChars] = React.useState(false);
    const [casing, setCasing] = React.useState("");

   

    return(

    
        <div className = "container">


                <h1 className = "title"> Password Generator </h1>

                <Configuration
                
                    
                    setCharCount = {setCharCount}
                   
                    setIncNumber = {setIncNumber}
                    
                    setIncSplChars = {setIncSplChars}
                    
                    setCasing = {setCasing}

                
                />

                <br />
                
                <GenerateButton 
                
                charCount = {charCount}
                incNumber = {incNumber}
                incSplChars = {incSplChars}
                casing = {casing}
                
                
                />
        
               
               
        </div>
    );
}