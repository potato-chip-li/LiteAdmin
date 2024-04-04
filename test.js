let l = ['app','api','123']
let ll = []

l.reduce((acc,cur)=>{
    ll.push(acc+'/'+cur)   
    return acc +'/'+ cur
},'')

console.log(ll)

