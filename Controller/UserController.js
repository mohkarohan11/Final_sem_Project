const getUser=(req,res)=>{
    res.send('Products')
}
let User1=[]

const CreUser=(req, res) => {
    console.log(req.body);
    let obj = req.body
    obj.id = Products.length + 1;
    obj.isdeleted = false;
    Products.push(obj);
    res.send(
        {
            isSuccess: true,
            messege:'successfully created user',
        })
 }

 const deleteuser =  (req, res) => { 
    let id = req.query.id;
    let index = Products.findIndex((e) => (e.id == id))
    Products.splice(index, 1);
    res.send({ Products })
}

const softdeleteuser=(req, res) => {
    let id = req.query.id;
    let index = Products.findIndex((e) => (e.id == id))
    Products[index].isdeleted=true
    res.send(Products[index])
}

const updaateData = (req,res)=>{
    let id = req.query.id;
    let obj = Products.find((val)=>(val.id==id))
    console.log(obj);
    
    obj.name = req.body.name;
    obj.cost=req.body.cost;
    obj.des=req.body.des;
    res.send({
        msg:"user updated succesfully",
        User1:obj
    })
    

}

module.exports={
    getUser, CreUser, deleteuser, softdeleteuser, updaateData
}