const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Ethiopia']
    function categorizeCountries(keyword) {
        for (country of countries) {
            if (keyword = 'land') {
                console.log([countries.filter((country) => country.endsWith('land'))])
            } else if (keyword = 'en') {
                console.log([countries.filter((country) => country.endsWith('ia'))])
            } else if (keyword ='ia') {
                console.log([countries.filter((country) => country.endsWith('en'))])
            } else {
                console.log('Country does not Exists')
            }
        } 
    }
    console.log(categorizeCountries(['land']))
    console.log(categorizeCountries(['en']))
    console.log(categorizeCountries(['ia']))