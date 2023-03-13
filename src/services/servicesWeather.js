const FETCH_OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key":
            "b75b1e2baamsh544e9e21543498dp10333djsn563f8586f059",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};

export async function getWeatherFrom(query = 'Mexico') {
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
        FETCH_OPTIONS
    )

    const data = await response.json();
    const { location, current } = data;
    const { country, localTime, name } = location;
    const {
        condition,
        humidity,
        feelslike_c,
        temp_c,
        is_day,
        wind_kph,
        wind_dir,
    } = current;
    const { code, text , icon} = condition;

    return {
        conditionCode: code,
        conditionIcon: icon,
        ConditionText: text,
        locationName: country,
        localTime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
}