import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    hcp_name: "",
    interaction_type: "",
    interaction_date: "",
    interaction_time: "",
    attendees: "",
    topics: "",
    voice_summary: "",
    materials: "",
    samples: "",
    sentiment: "",
    outcomes: "",
    followup: ""
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);