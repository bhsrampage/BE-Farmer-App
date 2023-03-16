import API, { ENDPOINTS } from "../api/apiService";

export const createEditHistory = async (editing, body) => {
  try {
    editing
      ? await API.put(ENDPOINTS.FARMER_HISTORY, body, true)
      : await API.post(ENDPOINTS.FARMER_HISTORY, body, true);
    return true;
  } catch (error) {
    console.log("Error in creating history");
    return false;
  }
};

export const fetchRecommendations = async (img, data) => {
  try {
    if (img) {
      const body = new FormData();
      body.append("file", {
        uri: img,
        type: "image/jpeg",
        name: "sample.jpeg",
      });
      Object.entries(data).forEach((i) => body.append(i[0], i[1]));
      let resp = await API.uploadFile(ENDPOINTS.GET_RECOMMENDATION, body, true);
      return resp.Recommendations;
    }

    let resp = await API.post(ENDPOINTS.GET_RECOMMENDATION, data, true);
    return resp.Recommendations;
  } catch (error) {
    console.log(error);
  }
};
