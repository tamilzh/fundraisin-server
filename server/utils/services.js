
import constant from "./constant.js";
export const getWebsiteConfig = async (id) => {
  try {
    const res = await fetch(
      `${constant.SITE_BUILDER}/api/info/${id}`,
      { method: "GET" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data (${res.status})`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching website config:", error);
    return null; // Handle the error gracefully or return a default value
  }
};
