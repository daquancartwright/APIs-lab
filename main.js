// Run npm init -y which will create a package.json file
const residentsButton = document.getElementById('getResidents')

const buttonClicked = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    
    .then(res => {
        let residents = res.data.results[0].residents;
        // console.log(res.data.results[0].residents)
        for (let i=0; i < residents.length; i++)  {
            console.log(residents[i])
            axios.get(residents[i])
        } 
        // .then(res => {

        // })
    })
}

// Use addEventListener to attach the function you just wrote to a click event on the button
residentsButton.addEventListener('click', buttonClicked)