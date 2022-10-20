const GenerateButton = (props) =>
{

    const [password_generated, setPassword] = React.useState("");

    const generatePassword = () =>
    {
        /*
            console.log(props.charCount);
            console.log(props.incNumber);
            console.log(props.incSplChars);
            console.log(props.casing);

        */
            let chars = "";

            switch(props.casing)
            {

                case "lower":

                    chars = "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "upper":

                    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                case "mixed":

                    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                default:
                    chars = "abcdefghijklmnopqrstuvwxyz";
                    break;
            }



            if (props.incNumber)
            {
                chars = chars + "1234567890";
            }

            if (props.incSplChars)
            {
                chars = chars + "!@#$%&*_+";
            }

            //console.log(chars);

            let characterCount = props.charCount;
            if(characterCount > 10)
            {
                characterCount = 10;
            }


            if (characterCount < 1)
            {
                characterCount = 1;
            }

            
            let password = "";
            for (let i = 0; i < characterCount; i++)
            {
              const index =  Math.floor(Math.random() * chars.length);

              const single_char = chars[index];

              password = password + single_char;
              console.log(single_char);
            }


            console.log(password);
            
            setPassword(password);

            


    }
    
    
    
    return(

        
        <React.Fragment>
            
            <button className = "action_btn" onClick = {generatePassword}>Generate</button>
            
            {password_generated !== ""?    <p className = "op_Pass">{password_generated}</p>      :     false}
            
            
            
            

 
        </React.Fragment>
        
    )
}