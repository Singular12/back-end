// Nested callbacks

function hufflePuff(){
        setTimeout(() => {
            console.log('First response')
            setTimeout(() => {
                console.log('Second response')
                setTimeout(() => {
                    console.log('Final response')
                }, 3200)
            }, 4200)
        }, 5500)
}

hufflePuff();
