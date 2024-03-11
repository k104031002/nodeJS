// 重新命名導出
const aa = () => {
    console.log("WANG CM");
}

const bb = () => {
    console.log("Taiwan");
}

export {
    aa as sayMyName,
    bb as sayMyCountry
    // sayMyName:aa,
    // sayMyCountry:bb
}