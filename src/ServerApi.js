const express = require('express');
const bodyParser = require('body-parser')

    const issues = [
        {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
        },
        {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14, 
        completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel',
        }
        ]
    const app = express()
    
    app.use(express.static('static'))

    app.use(bodyParser.json())

    app.get('/api/issues',(req,res)=>{
        const metadata = {count:issues.length}
        res.json({metadata:metadata,records:issues})
    })

    app.post('/api/issues',(req,res)=>{
        const newValues = req.body
        newValues.id = issues.length + 1
        newValues.created = new Date()
        newValues.status = newValues.status?newValues.status:'new'
        newValues.effort = 25
        newValues.completionDate = new Date('2019-06-30')

        issues.push(newValues)

        res.json(newValues)

    })

    app.listen(3000,()=>{
        console.log('listening on port 3000...')
    })
