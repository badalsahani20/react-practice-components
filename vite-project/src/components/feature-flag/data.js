const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    randomColorGenerator: true,
    showAccordion: true,
    qrCode: true,
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(() => dummyApiResponse), 500);
        else reject(new Error("API call failed"));
    })
}

export default featureFlagsDataServiceCall