const API_END_POINT = "";

const getCachedData = async (url) => {
  const cacheStorage = await caches.open("");
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }
  console.log("cache found!");
  return await cachedResponse.json();
};

const saveDataToCache = async (url, response) => {
  console.log("setting cookie...");
  const cacheStorage = await caches.open("cat");
  await cacheStorage.put(url, response);
};

export const request = async (url, options = {}) => {
  const loading = new Loading();
  try {
    loading.setState(true);
    //캐싱 데이터가 있는 경우
    const cacheData = await getCachedData(url);
    if (cacheData) {
      console.log(cacheData);
      loading.setState(false);
      return cacheData;
    }
    //캐싱 데이터가 없는 경우
    //fetch
    const response = await fetch(API_END_POINT + url, {
      ...options,
    });
    //캐싱
    await saveDataToCache(url, response.clone());
    loading.setState(false);
    //fetch 성공시
    if (response.ok) {
      return await response.clone().json();
    }
    //fetch 실패
    throw new Error(response.statusText);
  } catch (e) {
    console.log(e);
  }
};
