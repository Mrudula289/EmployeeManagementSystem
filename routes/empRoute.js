const express=require('express')

const empController=require('../controllers/empController')

const router=express.Router()


router.get('/getAllEmp',empController.getAllEmp)

router.post('/createEmp',empController.createEmp)

router.delete('/delEmp/:id',empController.deleteEmp)

router.patch('/updateEmp/:id',empController.updateEmp)


router.get('/getEmp/:id',empController.getEmployeeById)


router.get('/department/:department', empController.getDepartmentWiseEmp)

router.get('/joiningMonth/:month', empController.getJoiningMonthWiseEmployee)

router.get('/birthdayThisMonth', empController.getThisMonthBirthdayEmployee)

router.get('/search/:name', empController.searchEmployeeByName)

router.get('/city/:city', empController.getEmployeeCityWise)

router.get('/sort/joiningDate', empController.sortEmployeeByJoiningDate)

router.get('/sort/name', empController.sortEmployeeByName)

router.get('/count', empController.getTotalEmployeeCount)

router.get('/count/department', empController.getTotalEmployeeDepartmentWise)

router.get('/oldest', empController.getOldestEmployee)

router.get('/newestJoined', empController.getNewestJoinedEmployee)

router.get('/filter/joiningDate', empController.filterEmployeeByJoiningDate)

router.put('/updateAll/:id', empController.updateAllEmployeeDetails)

module.exports=router