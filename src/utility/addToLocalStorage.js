import { toast } from "react-toastify";

// Define key constant to avoid typos
const DB_KEY = "installedApps";

/**
 * Helper to safely retrieve the current list from storage.
 */
export const getInstalledApps = () => {
  try {
    const rawData = localStorage.getItem(DB_KEY);
    return rawData ? JSON.parse(rawData) : [];
  } catch (error) {
    console.error("Storage Error:", error);
    return [];
  }
};

/**
 * Removes an item from the storage by its unique ID.
 * @param {string|number} targetId 
 */
export const removeInstalledApp = (targetId) => {
  const currentList = getInstalledApps();
  
  // Use String() comparison to ensure "1" matches 1
  const updatedList = currentList.filter(
    (item) => String(item.id) !== String(targetId)
  );

  localStorage.setItem(DB_KEY, JSON.stringify(updatedList));
  toast.info("Application successfully uninstalled.");
};

/**
 * Main function to add an ID to the storage.
 * Prevents duplicates automatically.
 * @param {string|number} appId 
 */
const setInstalledApps = (appId) => {
  const currentList = getInstalledApps();

  // Check if ID already exists
  const isDuplicate = currentList.some(
    (item) => String(item.id) === String(appId)
  );

  if (!isDuplicate) {
    // Add new entry with timestamp metadata (optional but useful)
    const newEntry = { 
        id: appId, 
        install: true, 
        installedAt: Date.now() 
    };
    
    const newList = [...currentList, newEntry];
    
    localStorage.setItem(DB_KEY, JSON.stringify(newList));
    toast.success("App added to your installed list!");
  } else {
    // Logic for duplicate entry (optional: toast.warning("Already installed"))
    console.log(`App ID ${appId} is already installed.`);
  }
};

export default setInstalledApps;