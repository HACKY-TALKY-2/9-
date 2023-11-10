const pool = require("../db");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {

    const sql = `SELECT id FROM user WHERE email = ? AND password = ?`;
    const params = [email, password];

    const [rows] = await pool.query(sql, params);

    if (rows.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "유저 정보를 찾을 수 없습니다!" });
    } else {
      return res.status(200).json({ success: true, data: rows[0] });
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

exports.signup = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const company = req.body.company;
  const image = req.body.image;

  try {

    const dupSql = `SELECT id FROM user WHERE email = ?`;
    const [rowsDup] = await pool.query(dupSql, [email]);

    if (rowsDup.length === 0) {

      const sql = `INSERT INTO user (email, password, name, company, image) VALUES (?, ?, ?, ?, ?)`;
      const params = [email, password, name, company, image];

      const [rows] = await pool.query(sql, params);
      res.status(200).json({ success: true });
    }
    else{
      return res
      .status(400)
      .json({ success: false, message: "이미 사용중인 이메일입니다." });
    }
  } catch (error) {
    console.log("error: sign up");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};
