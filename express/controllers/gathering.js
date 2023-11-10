const pool = require("../db");

exports.getGatheringInfo = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const [rows] = await pool.query(`SELECT * FROM gathering where id = ?`, [
      id,
    ]);

    if (rows.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "해당 모임이 존재하지 않습니다!" });
    } else {
      return res.status(200).json({ success: true, data: rows[0] });
    }
  } catch (error) {
    console.log("error: getGatheringInfo");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getChallengeGathering = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM gathering where type = 'challenge'`
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "모임이 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getChallengeGathering");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM category`);
    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "카테고리가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getCategory");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getHobbyGathering = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM gathering where type = 'hobby'`
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "모임이 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getHobbyGathering");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.createGathering = async (req, res) => {
  const { title, type, category_id, image, num_of_people, introduction } =
    req.body;
  try {
    const result = await pool.query(
      `INSERT INTO gathering (title, type, category_id, image, num_of_people, introduction) VALUES (?, ?, ?, ?, ?, ?)`,
      [title, type, category_id, image, num_of_people, introduction]
    );

    if (result.affectedRows === 1) {
      return res
        .status(200)
        .json({ success: true, message: "모임 생성에 성공하였습니다!" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "모임 생성에 실패하였습니다!" });
    }
  } catch (error) {
    console.log("error: createGathering");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getGatheringNotice = async (req, res) => {
  const { gathering_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM gathering_notice where gathering_id = ?`,
      [gathering_id]
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "공지사항이 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getGatheringNotice");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getTotalAtthend = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM gathering_attend`);
    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "참석자가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getTotalAtthend");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};
