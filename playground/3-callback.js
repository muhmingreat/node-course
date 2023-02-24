// setTimeout(()=>{
// console.log('2 Second timer')
// },2000)
// 
// const names  = ['Muhmin','Sulaimon','Soliu']
// 
// const allName = names.filter((name) =>{
    // return name.length <= 4
// })
// 
// const geocode = (address, callback) => {
// setTimeout(() =>{
    // const data = {
        // longitude: 0,
        // latitude: 0
    // }
    // callback(data)
// },2000)
// }
// geocode('Nigeria', (data)=>{
// console.log(data)
// })

const add =(a,b ,callback) => {
    setTimeout(() => {
        callback(a + b)

},2000)
}
add(4,1,(sum) => {
    console.log(sum)
})