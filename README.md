## CMW-2

1. Replica en tu computadora personal los ejemplos vistos en la sesión de contenidos de este módulo 
    - (Java/Spring, Express/NodeJS o Flask/Python)

2. Basado en el ejemplo visto en clase (WeatherController
Links to an external site.), crea un nuevo endpoint que reciba como parametro una ciudad, internamente convierta esa ciudad en su correspondiente latitud y longitud para asi obtener el clima actual, esto usando los siguientes APIs:
    1. Geo API: https://openweathermap.org/api/geocoding-api 
        - Example: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} 

    2. Weather API: https://openweathermap.org/current
        -Example: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 

3. Sigue las instrucciones de entrega propuestas por el profesor
    - Versiona tu código en Github
    - Entrega un documento PDF que contenga
        - URL de tu repositorio de Github
        - Screenshots de tu servicio corriendo en tu computadora local
        - Screenshots de tu servicio funcionando a través de Postman

