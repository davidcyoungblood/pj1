import axios from "axios"; 

export const Expenses = ({exp, setExp, expenses}) => {

    const handleDelete = async (e) => {
        try {
            e.preventDefault(); 
            await axios.delete()
        }
        catch (err) {
            console.error(err); 
        }


    }

}