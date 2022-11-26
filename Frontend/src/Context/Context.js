
import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: '', sub: '', msg: '' })
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
    const [file, setFile] = useState()

    const fileReader = new FileReader();

    const handleFile = (e) => {
        setSelectedFile(e.target.files[0]);
        // console.log(e.target.files[0]);
    }
    // console.log(selectedFile.name);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
                setFile({ file: csvOutput });
                submitData({ file: csvOutput })
            };
            fileReader.readAsDataURL(selectedFile);
        }
    };

    const submitData = (d) => {
        // post csv file
        // console.log('cli');
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
        localStorage.clear()
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