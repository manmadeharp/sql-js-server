const sql = require('mssql');


const connection = async (req, res) => {
    await sql.connect('mssql://sa:Password1@localhost,1433/CodeNation1')
}

const SelectAllStaff = async (req, res) => {
    await connection()
    let result;
    try {
        result = await sql.query `SELECT * FROM Employees`
    }catch (err){
        console.log("err")
    }
    return result;
}
const SelectStaffMember = async (req, res) => {
    await connection()
    let result;
    try {
        result = await sql.query `SELECT * FROM Employees WHERE ID = 1`
    }catch (err){
        console.log("err")
    }
    return result;
}
module.exports = {
    SelectAllStaff,
    SelectStaffMember
}