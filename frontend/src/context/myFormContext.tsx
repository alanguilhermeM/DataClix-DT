import { FormData } from "@/interfaces/weatherTypes";
import { createContext, useCallback, useContext, useState } from "react";

interface MyContextData {
    formData: FormData;
    handleForm: (formData: FormData) => void;
}

const FormContext = createContext<MyContextData | undefined>(undefined)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        city: "",
      });

    const handleForm = useCallback((formData: FormData) => {
        setFormData(formData);
    }, []);


    return <FormContext.Provider value={{ formData, handleForm }}>{children}</FormContext.Provider>;
}

export const useFormContext = () => useContext(FormContext);