const pool = require("../db");

exports.isSignedIn = async (req, res, next) => {
  try {

    if (req.body.hasOwnProperty("id")){

      const sql = `SELECT id FROM user WHERE id = ?`;
      const [rows] = await pool.query(sql, [req.body.id]);
  
      if (rows.length === 0){
        
        return res
        .status(401)
        .json({ success: false, message: "유효하지 않은 유저입니다!" });

      }
      else{
        next();
      }
    }
    else{

      return res
        .status(401)
        .json({ success: false, message: "로그인이 필요합니다!" });

    }
    
  } catch (error) {
    console.log("error: login");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};