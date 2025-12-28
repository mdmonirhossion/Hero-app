import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const useAppHook = () => { 
    const [allApps, setAllApps] = useState([]);
    const [apiError, setApiError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Fetching data from the local JSON file
                const { data } = await axios.get("../app.json");
                setAllApps(data || []); 
            } catch (err) {
                console.error("Failed to load application data:", err);
                setApiError(err);
            } finally {
                // Artificial delay preserved from original logic
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, []);

    // Optimization: Derive topApps using useMemo instead of a second useEffect.
    // This prevents the component from rendering twice unnecessarily.
    const topApps = useMemo(() => {
        if (!allApps.length) return [];
        
        return [...allApps]
            .sort((a, b) => b.downloads_millions - a.downloads_millions)
            .slice(0, 8);
    }, [allApps]);

    return { 
        apps: allApps, 
        error: apiError, 
        loading: isLoading, 
        topApps 
    };
}

export default useAppHook;