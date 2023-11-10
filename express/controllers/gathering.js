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
  const {
    user_id,
    title,
    type,
    category_id,
    image,
    num_of_people,
    introduction,
  } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO gathering (title, type, category_id, image, num_of_people, introduction) VALUES (?, ?, ?, ?, ?, ?)`,
      [title, type, category_id, image, num_of_people, introduction]
    );

    const [result3] = await pool.query(
      `SELECT * from gathering where title = ? and type = ? and category_id = ? and image = ? and num_of_people = ? and introduction = ?`,
      [title, type, category_id, image, num_of_people, introduction]
    );

    const result2 = await pool.query(
      `INSERT INTO member (user_id, gathering_id,  is_leader) VALUES (?, ?, true)`,
      [user_id, result3[0].id]
    );

    if (result[0].affectedRows === 1) {
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

exports.getBestUser = async (req, res) => {
  const { gathering_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT user_id, COUNT(id) AS attendance_count
      FROM activity_attend
      WHERE gathering_id = ?
      GROUP BY user_id
      ORDER BY attendance_count DESC
      LIMIT 3;
      `,
      [gathering_id]
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "참석자가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getBestUser");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getRecentTotalAttend = async (req, res) => {
  const { gathering_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT 
      ga.id AS activity_id,
      ga.created_at AS activity_date,
      COUNT(aa.user_id) AS user_count
  FROM 
      gathering_activity ga
  LEFT JOIN 
      activity_attend aa ON ga.id = aa.activity_id
  WHERE 
      ga.gathering_id = ?
  GROUP BY 
      ga.id, ga.created_at
  ORDER BY 
      ga.created_at DESC
  LIMIT 7;;
      `,
      [gathering_id]
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "참석자가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getRecentTotalAttend");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.joinGathering = async (req, res) => {
  const { user_id, gathering_id } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO member (user_id, gathering_id) VALUES (?, ?)`,
      [user_id, gathering_id]
    );
    console.log(
      "🚀 ~ file: gathering.js:226 ~ exports.joinGathering= ~ result:",
      result[0].affectedRows
    );

    if (result[0].affectedRows == 1) {
      return res
        .status(200)
        .json({ success: true, message: "모임 가입에 성공하였습니다!" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "모임 가입에 실패하였습니다!" });
    }
  } catch (error) {
    console.log("error: joinGathering");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.createActivity = async (req, res) => {
  const { gathering_id, content, location, appointment_time } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO gathering_activity (gathering_id,location , content, appointment_time) VALUES (?, ?, ?, ?)`,
      [gathering_id, location, content, appointment_time]
    );

    if (result[0].affectedRows === 1) {
      return res
        .status(200)
        .json({ success: true, message: "활동 생성에 성공하였습니다!" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "활동 생성에 실패하였습니다!" });
    }
  } catch (error) {
    console.log("error: createActivity");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

// exports.getTotalAtthend = async (req, res) => {
//   try {
//     const [rows] = await pool.query(`SELECT * FROM gathering_attend`);
//     if (rows.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "참석자가 아무것도 존재하지 않습니다!",
//       });
//     } else {
//       return res.status(200).json({ success: true, data: rows });
//     }
//   } catch (error) {
//     console.log("error: getTotalAtthend");
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "서버 에러",
//     });
//   }
// };

exports.getPostOfActivity = async (req, res) => {
  const { activity_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM gathering_content where activity_id = ?`,
      [activity_id]
    );

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "활동 게시글이 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getPostOfActivity");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.postPostOfActivity = async (req, res) => {
  const { user_id, activity_id, gathering_id, content, image } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO gathering_content (user_id, activity_id, content, image) VALUES (?, ?, ?, ?)`,
      [user_id, activity_id, content, image]
    );
    const result2 = await pool.query(
      `INSERT INTO activity_attend (gathering_id, user_id, activity_id) VALUES (?, ?, ?)`,
      [gathering_id, user_id, activity_id]
    );
    if (result[0].affectedRows === 1) {
      return res
        .status(200)
        .json({ success: true, message: "활동 게시글 생성에 성공하였습니다!" });
    } else {
      return res.status(400).json({
        success: false,
        message: "활동 게시글 생성에 실패하였습니다!",
      });
    }
  } catch (error) {
    console.log("error: postPostOfActivity");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getActivity = async (req, res) => {
  const { activity_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM gathering_activity where id = ?`,
      [activity_id]
    );
    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "활동이 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getActivity");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getMember = async (req, res) => {
  const { gathering_id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM member inner join user on member.user_id = user.id where gathering_id = ?`,

      [gathering_id]
    );
    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "참석자가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log("error: getMember");
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "서버 에러",
    });
  }
};

exports.getTotalAtthend = async (req, res) => {
  const { gathering_id } = req.params;

  try {
    const [rows] = await pool.query(
      `SELECT id, appointment_time FROM gathering_activity where gathering_id = ?`,
      [gathering_id]
    );
    let result = [];
    for (let i = 0; i < rows.length; i++) {
      const [rows2] = await pool.query(
        `select user.* from activity_attend inner join user on activity_attend.user_id = user.id where activity_id = ?`,
        [rows[i].id]
      );
      result.push({
        activity_id: rows[i].id,
        appointment_time: rows[i].appointment_time,
        attended_users: rows2,
      });
    }

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "참석자가 아무것도 존재하지 않습니다!",
      });
    } else {
      return res.status(200).json({ success: true, data: result });
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
