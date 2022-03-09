# Desafío técnico ForEach

Crear una aplicación React que muestre el pronóstico del tiempo para los próximos 5 días en 
la Región Metropolitana de Santiago, donde para cada día se muestre la temperatura 
promedio más alta, la temperatura promedio más baja y una imagen según corresponda para 
los días soleados, nublados, lluviosos, nevados, etc.


## Requisitos
1. Al hacer click en un día, mostrar el pronóstico detallado para ese día.
2. Utilizar React Router de modo que “/” muestre el pronóstico de los próximos 5 días y 
“/<nombre_del_dia>” el pronóstico detallado para ese día.
3. Utilizar la opción gratuita de la API de https://openweathermap.org/
4. Utiliza /forecast (https://openweathermap.org/forecast5) para obtener pronósticos de cada 
3hrs.
5. Utilizar la librería https://vx-demo.now.sh/ para generar gráficos lineales de la variación de 
temperatura promedio diaria y de los próximos 5 días


## Ejecución 

1. Clonal el repositorio.
2. En la raiz de la carpeta utilizar el comando "npm install"
3. Utilizar el comando "npm start"

## Consideraciones 

No implemente el use de la libreria para graficos requerida, en su lugar use Chart.js https://www.npmjs.com/package/react-chartjs-2

## Tecnologias Utilizadas

1. Reactjs
2. React-router-dom
3. Redux
4. Axios
5. Moment
6. Chartjs

