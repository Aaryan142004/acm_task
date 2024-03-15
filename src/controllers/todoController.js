const fs = require('fs');
const data = JSON.parse(fs.readFileSync(`dev-data/todos.json`,'utf-8'));
const { v4: uuidv4 } = require('uuid');


exports.getTodo = (req,res)=>{
    const newarray= []
   data.map(element=>{
    if(element.uid === req.userData.userid){
        newarray.push(element);
    }

   })
    res.status(200).send(newarray);
}



exports.postTodo = (req,res)=>{ 
   
    const newid = uuidv4();
    const userid = req.userData.userid;
    
    // const newTodo = Object.assign({id:newid,},{todo_name:req.body.data});
    const newTodo = {
        id:newid,
        uid :userid,
        todo_name:req.body.data
    }
    data.push(newTodo);
    
    fs.writeFile(`dev-data/todos.json`,JSON.stringify(data),(err)=>{
        res.status(201).json({
            status:"success",
            data:{
                newTodo,
            }
        })
    })
}

exports.deleteTodo = (req,res)=>{
   
    
    const d_id = req.body.id;
  
    
   
    const newData = data.filter((element)=>{
        return (element.id !== d_id);
    })
        
    
    fs.writeFile('dev-data/todos.json',JSON.stringify(newData),(err)=>{
        res.send(newData);
    })
    
}

