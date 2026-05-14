export const searchCityApi = async (city: string) => {
    const apiKey = import.meta.env.VITE_APP_ID
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching weather data:", error)
        throw error
    }
}  