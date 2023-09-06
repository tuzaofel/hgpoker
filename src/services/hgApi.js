


const baseUrl = 'https://script.google.com/macros/s/AKfycbwC9lSYakzWMvu7kOst80F0jZ83E9NapbcOk6TSUBGt9bKyizJX688e6qn6NDdGgaq2/exec'


async function getHG (url){
    return await fetch(url).then(response => response.json());
}

export async function getAllTornments(){
    return getHG(baseUrl + '?sheetName=torneios')
}

