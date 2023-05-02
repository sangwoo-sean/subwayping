function calculateArrayAverage(arr) {
    const arr_sum = arr.reduce((a, b) => a + b);
    return arr_sum / arr.length;
}

function setLocationAverage() {
    const lats = stations.filter((station) => station.lat).map((station) => station.lat);
    LAT_AVG = calculateArrayAverage(lats);

    const lngs = stations.filter((station) => station.lng).map((station) => station.lng);
    LNG_AVG = calculateArrayAverage(lngs);
}

function getMapWidth() {
    const {
        0: min_lat,
        length: length_lat,
        [length_lat - 1]: max_lat
    } = stations
        .filter((station) => station.lat)
        .map((station) => station.lat)
        .sort();
    return (max_lat - min_lat) * HEIGHT_RATIO;
}

function getMapHeight() {
    const {
        0: min_lng,
        length: length_lng,
        [length_lng - 1]: max_lng
    } = stations
        .filter((station) => station.lng)
        .map((station) => station.lng)
        .sort();
    return (max_lng - min_lng) * WIDTH_RATIO;
}

function getMapSize() {
    const width = getMapWidth();
    const height = getMapHeight();

    return [width, height];
}