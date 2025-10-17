import {createContext, useEffect, useState} from "react";
import featureFlagsDataServiceCall from "../data";

// eslint-disable-next-line react-refresh/only-export-components
export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({});

    async function fetchFeaturedFlags() {
        try {
            setLoading(true);
            const res = await featureFlagsDataServiceCall();
            setEnableFlags(res);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            throw new Error(error);
            
        }
    }

    useEffect(() => {
        fetchFeaturedFlags();
    })

    if (loading) {
        return <div>Loading data...</div>;
    };
    
  return (
    <FeatureFlagContext.Provider value={{loading, enableFlags}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
