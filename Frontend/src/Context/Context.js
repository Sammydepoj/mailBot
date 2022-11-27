import axios from 'axios'
import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: '', subject: '', body: '' })
    const [error, setError] = useState(false)


    const setLs = () => {
        localStorage.setItem('data', JSON.stringify(data))
    }

    const getLs = () => {
        setData(JSON.parse(localStorage.getItem('data')))
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }))

    }

    // select file 
    const [selectedFile, setSelectedFile] = useState({});


    const handleFile = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        submitData({ selectedFile, data: data })
    };

  
    const submitData = async (selectedFile) => {
        // post csv file
        let bodyData = new FormData();
       
        bodyData.append('file', selectedFile.selectedFile)
        bodyData.append('subject', data.subject)
        bodyData.append('body', data.body)

        await axios({
            method: "post",
            url: "https://am0z31.deta.dev/upload",
            data: bodyData,
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          })
          .then(res => {
            console.log(res.data)
            console.log(data);
          })
          .catch(err => console.log(err))
      
    }


    const handlegenerateVariant = () => {
        navigate('/variant')
        // post request to generate variant
    }

    const handleNavigate = () => {
        const regex = /\S+@\S+\.\S+/;

        if (!regex.test(data.email)) {

            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000);

        } else {
            navigate('/compose')
            setLs()
        }
    }

    // clear local storage after generating variant

    const proceedCsv = () => {
        // localStorage.clear()
        navigate('/add-recipients')
    }

    return (
        <AppContext.Provider value={{
            error,
            data,
            handleNavigate,
            setLs,
            getLs,
            handleChange,
            handlegenerateVariant,
            proceedCsv,
            handleFile,
            handleOnSubmit,
            selectedFile
        }}>
            {children}
        </AppContext.Provider>
    )

}

export default ContextProvider;